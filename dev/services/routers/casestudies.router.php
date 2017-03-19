<?php

use Models\Post as Post;

use Utils\CacheManager as CacheManager;

$app->get('/case-studies/:caseStudySlug', function ($caseStudySlug = '') use ($app) {

	$app->contentType('application/json');

	// ---o Get Cache
	$cacheManager = new CacheManager();

	$url = '/case-studies';
	if ($caseStudySlug !== '') {
		$url .= '/' . $caseStudySlug;
	}

	$data = $cacheManager->getCache($url);

	if ($data !== false) {
		echo json_encode($data);
		return;
	}

	// ---o Get data
	require './utils/WordpressUtils.php';
	$post = new Post ();
	$data = $post->getPost('case-studies', $caseStudySlug);

	$nextPost = $post->getNextPost('case-studies', $data->id);
	$data->next_post = (object) array(
		'title' => $nextPost->title,
		'permalink' => $nextPost->permalink,
		'picture' => $nextPost->header_background['url']
	);

	$cacheManager->setCache($url, $data);

	// ---o Display data
	echo json_encode($data);

});
