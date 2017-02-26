<?php

class CaseStudyController {
	
	function __construct($app) {

		$this->app = $app;

	}
	
	public function index($data) {

		$meta = array(
			'title' => 'Case Study',
			'description' => 'Case Study description',
			'share_picture' => 'sharepicture.jpg'
		);

		return $meta;

	}

}