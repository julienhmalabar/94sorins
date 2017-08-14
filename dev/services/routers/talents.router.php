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
			'type' => $job->type,
			'text' => substr(strip_tags($job->content), 0,  130) . '...',
			'picture' => $job->picture['sizes']['medium_large'],
			'date' => $job->post_date
		);
	}

	// ---o Get more data
	$moreData = $posts->getPosts('jobs-home');
	$moreData = $moreData[0];

	$moreData = (object) array(
		'application' => (object) array(
			'title' => $moreData->application_title,
			'text' => $moreData->application_text,
			'picture' => $moreData->application_picture['sizes']['medium_large'],
			'button' => $moreData->application_button[0]
		)
	);

	$data->application = $moreData->application;

	$cacheManager->setCache('/talents', $data);

	// ---o Display data
	echo json_encode($data);

});
