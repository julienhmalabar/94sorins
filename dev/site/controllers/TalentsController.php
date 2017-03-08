<?php

class TalentsController {
	
	function __construct($app) {

		$this->app = $app;

	}
	
	public function index($data) {

		$meta = array(
			'title' => 'Talents',
			'description' => 'Talents description',
			'sharePicture' => 'sharepicture.jpg'
		);

		return $meta;

	}

}