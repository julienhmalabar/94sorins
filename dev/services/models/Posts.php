<?php

namespace Models;

use Utils\WordpressUtils as WordpressUtils;

class Posts {

	function __construct() {

	}
	
	public function getPosts($postType, $postsPerPage = -1, $orderBy = 'none', $idToExlude = NULL, $paged = 0) {

		$output = (object) array();

		$wordpressUtils = new WordpressUtils();
		$output = $wordpressUtils->getPostsByPostType($postType, $postsPerPage, $orderBy, $idToExlude, $paged);

		return $output;

	}
	
	public function getMorePosts($postType, $postsPerPage = 3, $orderBy = 'none', $id = NULL) {

		$output = (object) array();

		$wordpressUtils = new WordpressUtils();
		$output = $wordpressUtils->getPostsByPostType($postType, $postsPerPage, $orderBy, $id);

		return $output;

	}
}
