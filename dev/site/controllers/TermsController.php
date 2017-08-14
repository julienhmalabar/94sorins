<?php

class TermsController {
	
	function __construct($app) {

		$this->app = $app;

	}
	
	public function index($data) {

		$meta = array(
			'title' => $data['title'] . ' — Malabar Design',
			'description' => substr(strip_tags($data['content']), 0,  130) . '...'
		);

		return $meta;

	}

}