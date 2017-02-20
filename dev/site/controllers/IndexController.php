<?php
 
namespace Controller;

class IndexController {

    function __construct($app) {

    	$this->app = $app;

    }
    
    public function index($data) {


       	return $data;

    }

}