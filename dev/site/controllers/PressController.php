<?php

class PressController {
	
	function __construct($app) {

		$this->app = $app;

	}
	
	public function index($data) {

		$meta = array(
			'title' => 'Communiqué de presse | Malabar Design',
			'description' => 'Découvrez les dernières annonces de notre agence via nos communiqués de presse',
			'share_picture' => ''
		);

		return $meta;

	}

}