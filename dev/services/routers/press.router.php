<?php

use Models\Post as Post;
use Models\Posts as Posts;

use Utils\CacheManager as CacheManager;

$app->get('/press', function () use ($app) {

	$app->contentType('application/json');

	// ---o Get Cache
	$cacheManager = new CacheManager();
	$data = $cacheManager->getCache('/press');

	if ($data !== false) {
		echo json_encode($data);
		return;
	}

	// ---o Get data
	require './utils/WordpressUtils.php';
	$posts = new Posts();
	$data = $posts->getPosts('press', -1, 'date');

	$savedYear = '';
	foreach ($data as $key=>$item) {
		$date = strtotime($item->post_date);
		$data[$key]->post_date = date("d/m/Y", $date);
		$year = date("Y", $date);
		if ($savedYear !== $year) {
			$savedYear = $year;
			$data[$key]->year = $year;
		}
	}

	$post = new Post();
	$data['global'] = $post->getPostById(815);

	$cacheManager->setCache('/press', $data);

	// ---o Display data
	echo json_encode($data);

});