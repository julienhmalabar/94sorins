<?php

namespace Models;

use Utils\WordpressUtils as WordpressUtils;

class Posts {

	function __construct() {

	}
	
	public function getPosts($postType, $postsPerPage = -1, $orderBy = 'none') {

		$output = (object) array();

		$wordpressUtils = new WordpressUtils();
		$output = $wordpressUtils->getPostsByPostType($postType, $postsPerPage, $orderBy);

		return $output;

	}
	
	public function getMorePosts($postType, $postsPerPage = 3, $orderBy = 'none') {

		$output = (object) array();

		$wordpressUtils = new WordpressUtils();
		$output = $wordpressUtils->getPostsByPostType($postType, $postsPerPage, $orderBy);

		return $output;

	}
}
