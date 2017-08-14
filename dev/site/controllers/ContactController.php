<?php

class ContactController {
	
	function __construct($app) {

		$this->app = $app;

	}
	
	public function index($data) {

		$meta = array(
			'title' => 'Contact',
			'description' => 'Homepage description',
			'sharePicture' => 'sharepicture.jpg'
		);

		return $meta;

	}

}