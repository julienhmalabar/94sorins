<?php

namespace Models;

use Utils\WordpressUtils as WordpressUtils;

class Post {

	function __construct() {

	}
	
	public function getPost($postType, $postSlug = '', $terms = false) {

		$output = (object) array();

		$wordpressUtils = new WordpressUtils();
		$output = $wordpressUtils->getPostByPostType($postType, $postSlug, $terms);

		return $output;

	}
	
	public function getPostById($id) {

		$output = (object) array();

		$wordpressUtils = new WordpressUtils();
		$output = $wordpressUtils->getPostById($id);

		return $output;

	}
	
	public function getNextPost($postType, $postId = -1) {

		$output = (object) array();

		$wordpressUtils = new WordpressUtils();
		$posts = $wordpressUtils->getPostsByPostType($postType, -1);

		foreach ($posts as $key=>$post) {
			if ($post->id === $postId) {
				if ($key === count($posts) - 1) {
					$output = $posts[0];
				}
				else {
					$output = $posts[$key + 1];
				}
			}
		}

		return $output;

	}
}
