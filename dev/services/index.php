<?php

// ---o Includes
require '../vendor/autoload.php';
require '../config.php';
require 'utils/Utils.php';

// ---o Get Cache Manager
require './utils/CacheManager.php';

// ------------------------------------------------o App Config

$app = new \Slim\Slim(array(
	'templates.path' => 'views/'
));

$app->get('(/)(/:params+)', function($params = array()) use ($app) {

	$path = '/' . join('/', $params);
	$postType = $params[0];

	// ---o Set JSON output
	$app->contentType('application/json');

	// ---o Get Cache
	$cacheManager = new CacheManager();
	$data = $cacheManager->getCache($path);

	if ($data !== NULL) {
		echo json_encode($data);
		return;
	}

	// ---o Get data
	require './utils/WordpressUtils.php';
	$wordpressUtils = new WordpressUtils();
	$data = $wordpressUtils->getData($postType);

	// ---o Set cache
	$cacheManager->setCache($path, $data);

	// ---o Display data
	echo json_encode($data);
});


$app->run();