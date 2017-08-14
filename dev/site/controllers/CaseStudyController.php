<?php

class CaseStudyController {
	
	function __construct($app) {

		$this->app = $app;

	}
	
	public function index($data) {

		$meta = array(
			'title' => $data['title'] . ' — Malabar Design',
			'description' => substr(strip_tags($data['info_context']), 0,  130) . '...',
			'share_picture' => $data['header_background']['url']
		);

		return $meta;

	}

}