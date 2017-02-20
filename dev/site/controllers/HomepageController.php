<?php

class HomepageController {
	
	function __construct($app) {

		$this->app = $app;

	}
	
	public function index($data) {

		$meta = array(
			'title' => 'Homepage',
			'description' => 'Homepage description',
			'sharePicture' => 'sharepicture.jpg'
		);

		return $meta;

	}

}