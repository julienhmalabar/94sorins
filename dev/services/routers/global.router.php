<?php

use Models\Posts as Posts;

use Utils\CacheManager as CacheManager;

$app->get('/global', function () use ($app) {

	$app->contentType('application/json');

	// ---o Get Cache
	$cacheManager = new CacheManager();

	$url = '/global';
	$data = $cacheManager->getCache($url);

	if ($data !== false) {
		echo json_encode($data);
		return;
	}

	// ---o Get data
	require './utils/WordpressUtils.php';

	// ---o Get projects list
	$data = (object) array();
	$posts = new Posts();
	$projects = $posts->getPosts('case-studies');

	$data->casestudies = array();
	foreach ($projects as $project) {
		array_push($data->casestudies, (object) array(
			'title' => $project->title,
			'permalink' => $project->permalink
		));
	}

	$cacheManager->setCache($url, $data);

	// ---o Display data
	echo json_encode($data);

});
