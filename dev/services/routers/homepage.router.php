<?php

use Models\Post as Post;

use Utils\CacheManager as CacheManager;

$app->get('/homepage', function () use ($app) {

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
	$post = new Post ();
	$data = $post->getPost('homepage');

	$cacheManager->setCache('/homepage', $data);

	// ---o Display data
	echo json_encode($data);

});