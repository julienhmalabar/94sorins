<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');

require '../vendor/autoload.php';
require '../config.php';
require './utils/TwigExtensions.php';
require './utils/TextUtils.php';

$configContent = file_get_contents('../config.json');
$config = json_decode($configContent, true);

// ------------------------------------------------o Create App

$app = new \Slim\Slim(array(
	'view' => new \Slim\Views\Twig(),
	'log.level' => \Slim\Log::DEBUG,
    'debug' => true,
	'templates.path' => 'views/'
));

$twigExtension = new TwigExtension();
$utils = new Twig\Blank\Utils();

$app->view->parserExtensions = array(
	$twigExtension,
	$utils,
    new Twig\Blank\Component(),
    new Twig_Extension_StringLoader()
);

$app->get('(/)(/:params+)', function($params = array()) use ($app, $config) {

	// ---o Get Controller
	$slug = count($params) > 0 ? $params[0] : '';

	$route = NULL;
	if (isset($config['_routes']['/' . $slug . '/*'])) {
		$route = $config['_routes']['/' . $slug . '/*'];
	}
	else if (isset($config['_routes']['/' . $slug])) {
		$route = $config['_routes']['/' . $slug];
	}
	
	if (!$route) {
		$app->render('/pages/404.html.twig', array(
			'data' => array('type' => 404),
			'meta' => array(),
			'ROOT_WEB' => ROOT_WEB,
			'ROOT_PATH' => ROOT_PATH,
			'ASSETS' => ASSETS,
			'SERVICES' => SERVICES
		));

		return;
	}

	$controllerName = isset($route['view']) ? $route['view'] : $route['slug'];
	$controllerName = ucfirst(call_user_func_array(array('TextUtils', 'camelCase'), array($controllerName))) . 'Controller';
	$controllerPath = './controllers/' . $controllerName .'.php';

	require_once $controllerPath;
	$controller = new $controllerName($app);

	if ($route) {
		$params[0] = isset($route['postType']) ? $route['postType'] : $route['slug'];
	}

	// ---o Get data
	$url = SERVICES . join($params, '/');
	$data = getDataFromUrl($url);
	
	// ---o Get Global data
	$url = SERVICES . 'global';
	$globalData = getDataFromUrl($url);

	// ---o Call controller
	$meta = call_user_func_array(array($controller, 'index'), array(
		'data' => $data
	));

	$view = isset($route['view']) ? $route['view'] : $route['slug'];

	$viewPath = '/pages/' . $view . '.html.twig';

	if (!file_exists($app->config('templates.path') . $viewPath)) {
		echo 'no view';
		return;
	}

	$app->render($viewPath, array(
		'data' => $data,
		'meta' => $meta,
		'global' => $globalData,
		'view' => $view,
		'viewName' => call_user_func_array(array('TextUtils', 'camelCase'), array($view)),
		'ROOT_WEB' => ROOT_WEB,
		'ROOT_PATH' => ROOT_PATH,
		'ASSETS' => ASSETS,
		'SERVICES' => SERVICES,
		'ANALYTICS_ID' => isset($config['analyticsId']) ? $config['analyticsId'] : NULL
	));

});

function getDataFromUrl($url) {
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	$output = curl_exec($ch);
	curl_close($ch);
	return json_decode($output, true);
}


$app->run();