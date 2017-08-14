<?php

use Models\Post as Post;

use Utils\CacheManager as CacheManager;

$app->get('/contact', function () use ($app) {

	$app->contentType('application/json');

	// ---o Get Cache
	$cacheManager = new CacheManager();

	$url = '/contact';

	$data = $cacheManager->getCache($url);

	if ($data !== false) {
		echo json_encode($data);
		return;
	}

	// ---o Get data
	require './utils/WordpressUtils.php';
	$post = new Post();
	$data = $post->getPostById(453);
	$data->address = $data->address[0];

	$cacheManager->setCache($url, $data);

	// ---o Display data
	echo json_encode($data);

});
