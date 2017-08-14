<?php

use Models\Posts as Posts;

use Utils\CacheManager as CacheManager;

$app->get('/terms', function () use ($app) {

	$app->contentType('application/json');

	// ---o Get Cache
	$cacheManager = new CacheManager();
	$data = $cacheManager->getCache('/terms');

	if ($data !== false) {
		echo json_encode($data);
		return;
	}

	// ---o Get data
	require './utils/WordpressUtils.php';
	$posts = new Posts();
	$data = $posts->getPosts('terms');
	$data = $data[0];

	$cacheManager->setCache('/terms', $data);

	// ---o Display data
	echo json_encode($data);

});