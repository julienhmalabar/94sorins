<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');

require '../vendor/autoload.php';
require '../config.php';
require './utils/TwigExtensions.php';
require './utils/TextUtils.php';

$configContent = file_get_contents('./config.json');
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

	$pageName = isset($config['_routes']['/' . $slug])
				? $config['_routes']['/' . $slug]['slug'] : NULL;

	if (!isset($pageName)) {
		$pageName = isset($config['_routes']['/' . $slug . '/*'])
				? $config['_routes']['/' . $slug . '/*']['slug'] : NULL;
	}
	
	$params[0] = $pageName;

	$controllerName = ucfirst(call_user_func_array(array('TextUtils', 'camelCase'), array($pageName))) . 'Controller';
	$controllerPath = './controllers/' . $controllerName .'.php';

	if (!file_exists($controllerPath)) {

		$app->render('index.html.twig', array(
			'data' => array('type' => 404),
			'meta' => array(),
			'ROOT_WEB' => ROOT_WEB,
			'ROOT_PATH' => ROOT_PATH,
			'ASSETS' => ASSETS,
			'SERVICES' => SERVICES
		));

		return;

	}

	require_once $controllerPath;
	$controller = new $controllerName($app);

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

	$viewPath = '/pages/' . $pageName . '.html.twig';

	if (!file_exists($app->config('templates.path') . $viewPath)) {
		echo 'no view';
		return;
	}

	$app->render($viewPath, array(
		'data' => $data,
		'meta' => $meta,
		'global' => $globalData,
		'view' => $pageName,
		'viewName' => call_user_func_array(array('TextUtils', 'camelCase'), array($pageName)),
		'ROOT_WEB' => ROOT_WEB,
		'ROOT_PATH' => ROOT_PATH,
		'ASSETS' => ASSETS,
		'SERVICES' => SERVICES
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