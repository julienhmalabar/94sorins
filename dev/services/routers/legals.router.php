<?php

use Models\Posts as Posts;

use Utils\CacheManager as CacheManager;

$app->get('/legals', function () use ($app) {

	$app->contentType('application/json');

	// ---o Get Cache
	$cacheManager = new CacheManager();
	$data = $cacheManager->getCache('/homepage');

	if ($data !== false) {
		echo json_encode($data);
		return;
	}

	// ---o Get data
	require './utils/WordpressUtils.php';
	$posts = new Posts();
	$data = $posts->getPosts('legals');
	$data = $data[0];

	$cacheManager->setCache('/legals', $data);

	// ---o Display data
	echo json_encode($data);

});