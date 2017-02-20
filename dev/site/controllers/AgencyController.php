<?php

class AgencyController {
	
	function __construct($app) {

		$this->app = $app;

	}
	
	public function index($data) {

		$meta = array(
			'title' => 'Agence',
			'description' => 'Agence description',
			'share_picture' => 'sharepicture.jpg'
		);

		return $meta;

	}

}