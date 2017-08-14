<?php

use Models\Post as Post;
use Models\Posts as Posts;
use Models\Social as Social;

use Utils\CacheManager as CacheManager;

$app->get('/global', function () use ($app) {

	$app->contentType('application/json');

	// ---o Get Cache
	$cacheManager = new CacheManager();

	$cacheUrl = '/global';
	$data = $cacheManager->getCache($cacheUrl);

	if ($data !== false) {
		echo json_encode($data);
		return;
	}

	$data = (object) array();
	require './utils/WordpressUtils.php';

	// ---o Get case studies list
	$post = new Post();
	$menuList = $post->getPostById(473);
	$data->case_studies = array();
	foreach ($menuList->case_studies as $case) {
		$project = $post->getPostById($case->ID);
		array_push($data->case_studies, (object) array(
			'title' => $project->title,
			'permalink' => $project->permalink
		));
	}

	// ---o Get social feeds
	$social = new Social();
	$socialPosts = array();

	// Get tweets
	$tweets = $social->getLastTweets();

	foreach ($tweets as $tweet) {

		$text = $tweet->text;

		foreach ($tweet->entities->hashtags as $hashtag) {
			$text = str_replace(
				'#' . $hashtag->text,
				'<a href="https://twitter.com/hashtag/' . $hashtag->text . '?src=hash" target="_blank">#' . $hashtag->text . '</a>',
				$text
			);
		}

		foreach ($tweet->entities->user_mentions as $mention) {
			$text = str_replace(
				'@' . $mention->text,
				'<a href="https://twitter.com/' . $mention->text . '" target="_blank">@' . $mention->text . '</a>',
				$text
			);
		}

		foreach ($tweet->entities->symbols as $symbol) {
			$text = str_replace(
				'$' . $symbol->text,
				'<a href="https://twitter.com/' . $symbol->text . '?src=ctag" target="_blank">@' . $symbol->text . '</a>',
				$text
			);
		}

		foreach ($tweet->entities->urls as $url) {
			$text = str_replace(
				$url->text,
				'<a href="' . $url->expanded_url . '" target="_blank">@' . $url->display_url . '</a>',
				$text
			);
		}

		array_push($socialPosts, (object) array(
			'created_time' => strtotime($tweet->created_at),
			'text' => $text,
			'link' => 'https://twitter.com/MalabarDesign/status/' . $tweet->id,
			'source' => 'twitter'
		));
	}

	// Get Instagam
	$instagrams = $social->getLastInstagram();
	foreach ($instagrams->data as $post) {
		array_push($socialPosts, (object) array(
			'created_time' => $post->caption->created_time,
			'text' => $post->caption->text,
			'link' => $post->link,
			'type' => $post->type,
			'picture' => $post->images->standard_resolution->url,
			'source' => 'instagram'
		));
	}

	// Sort by date
	usort($socialPosts, 'orderSocialPosts');

	// Add articles to social posts
	// Get articles
	$posts = new Posts();
	$articles = $posts->getPosts('articles');

	$index = 0;
	foreach ($articles as $key=>$article) {
		if ($key === 0) {
			$index = 2;
		}
		else if ($key === 1) {
			$index = 4;
		}
		else {
			continue;
		}

		array_splice($socialPosts, $index, 0, array((object) array(
			'created_time' => strtotime($article->post_date),
			'title' => $article->title,
			'text' => substr(strip_tags($article->content), 0,  130) . '...',
			'link' => $article->permalink,
			'picture' => $article->picture['url'],
			'source' => 'blog'
		)));
	}


	$data->social_feed = $socialPosts;

	$cacheManager->setCache($cacheUrl, $data, true);

	// ---o Display data
	echo json_encode($data);

});

function orderSocialPosts($a, $b) {
	return $b->created_time - $a->created_time;
}
