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
	$wordpressUtils = new Utils\WordpressUtils();
	$post = new Post ();
	$data = $post->getPost('homepage');

	foreach ($data->case_studies as $key=>$case) {
		$data->case_studies[$key]['link'] = $wordpressUtils->convertPermalink($case['link']);
	}

	$cacheManager->setCache('/homepage', $data);

	// ---o Display data
	echo json_encode($data);

});