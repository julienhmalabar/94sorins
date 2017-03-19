<?php

use Models\Post as Post;
use Models\Posts as Posts;

use Utils\CacheManager as CacheManager;

$app->get('/articles/:articleSlug', function ($articleSlug = '') use ($app) {

	$app->contentType('application/json');

	// ---o Get Cache
	$cacheManager = new CacheManager();

	$url = '/articles';
	if ($articleSlug !== '') {
		$url .= '/' . $articleSlug;
	}

	$data = $cacheManager->getCache($url);

	if ($data !== false) {
		echo json_encode($data);
		return;
	}

	// ---o Get data
	require './utils/WordpressUtils.php';
	$post = new Post();
	$data = $post->getPost('articles', $articleSlug);

	// ---o Get 3 more articles
	$posts = new Posts();
	$morePosts = $posts->getMorePosts('articles');

	foreach ($morePosts as $key=>$morePost) {
		$morePosts[$key] = (object) array(
			'title' => $morePost->title,
			'permalink' => $morePost->permalink,
			'picture' => $morePost->picture['sizes']['medium']
		);
	}
	

	$data->moreArticles = $morePosts;

	$cacheManager->setCache($url, $data);

	// ---o Display data
	echo json_encode($data);

});
