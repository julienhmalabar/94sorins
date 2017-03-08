<?php

class PerspectivesController {
	
	function __construct($app) {

		$this->app = $app;

	}
	
	public function index($data) {

		$meta = array(
			'title' => 'Perspectives',
			'description' => 'Perspectives description',
			'sharePicture' => 'sharepicture.jpg'
		);

		return $meta;

	}

}