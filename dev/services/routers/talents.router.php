<?php

use Models\Post as Post;
use Models\Posts as Posts;

use Utils\CacheManager as CacheManager;

$app->get('/talents', function () use ($app) {

	$app->contentType('application/json');

	// ---o Get Cache
	$cacheManager = new CacheManager();
	$data = $cacheManager->getCache('/talents');

	if ($data !== false) {
		echo json_encode($data);
		return;
	}

	// ---o Get data
	require './utils/WordpressUtils.php';
	$post = new Post ();
	$data = $post->getPost('talents');

	// ---o Get jobs
	$posts = new Posts();
	$data->jobs = $posts->getMorePosts('jobs', 2, 'rand');

	foreach ($data->jobs as $key=>$job) {
		$data->jobs[$key] = (object) array(
			'title' => $job->title,
			'permalink' => $job->permalink,
			'picture' => $job->picture['sizes']['medium_large']
		);
	}

	$cacheManager->setCache('/talents', $data);

	// ---o Display data
	echo json_encode($data);

});
