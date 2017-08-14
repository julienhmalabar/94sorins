<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');

require '../vendor/autoload.php';

require '../config.php';

require('./utils/CacheManager.php');
require('./utils/Instagram.php');
require('./models/Post.php');
require('./models/Posts.php');
require('./models/Social.php');

// ------------------------------------------------o Create App

$app = new \Slim\Slim(array(
    'debug' => true,
	'templates.path' => 'views/'
));


//header('Access-Control-Allow-Origin: ' . str_replace(ROOT_PATH, '', ROOT_WEB);
header('Access-Control-Allow-Origin: *');

$routers = glob('./routers/*.router.php');
foreach ($routers as $router) {
    require $router;
}


$app->get('(/)(/:params+)', function($params = array()) use ($app) {

	$app->contentType('application/json');

	$data = array("error" => "No content found");

	echo json_encode($data);

});


$app->run();