<?php

use Models\Post as Post;
use Models\Posts as Posts;

use Utils\CacheManager as CacheManager;

$app->get('/perspectives(/page/:pageNumber)', function ($pageNumber = 1) use ($app) {

	$app->contentType('application/json');

	// ---o Get Cache
	$cacheManager = new CacheManager();

	$url = '/perspectives' . '/page/' . $pageNumber;

	$data = $cacheManager->getCache($url);

	if ($data !== false) {
		echo json_encode($data);
		return;
	}

	// ---o Get data
	require './utils/WordpressUtils.php';
	$postsPerPage = 2;
	$posts = new Posts();
	$data = (object) array();
	$data->posts = $posts->getPosts('articles', $postsPerPage, 'date', NULL, $pageNumber);
	$data->count = wp_count_posts('articles')->publish;
	$data->page = $pageNumber;
	$data->lastPage = intval($data->count / $postsPerPage);

	if ($pageNumber === 1) {
		$post = new Post();
		$info = $post->getPostById(253);
		$data->info = (object) array(
			'title' => $info->header_title,
			'subhead' => $info->header_subhead,
			'background' => $info->header_background,
			'content' => $info->description
		);
	}

	$cacheManager->setCache($url, $data);

	// ---o Display data
	echo json_encode($data);

});
