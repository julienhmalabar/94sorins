<?php

use Utils\CacheManager as CacheManager;

// GET index route
$app->get('/_cache/clear(/)(/:params+)', function ($params = array()) use ($app) {

	$app->contentType('application/json');

	$cacheManager = new CacheManager();
	
	if (count($params) >= 1 && $params[0] === '_all') {
		$res = $cacheManager->clearAll();
	}
	else {
		$path = join('/', $params);
		$res = $cacheManager->clear($path);
	}

	if ($res === '') {
		$res = 'Nothing done.';
	}

	// ---o Display data
	$data = array('message' => $res);
	echo json_encode($data);

});