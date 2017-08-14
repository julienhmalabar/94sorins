<?php

namespace Models;

use Abraham\TwitterOAuth\TwitterOAuth;
use Utils\Instagram;

class Social {

	function __construct() {


	}

	public function getLastTweets() {

		$settings = array(
			'oauth_access_token' => "125314761-kXO8yM9dSwqWifTToFycRS2qgInhqkaFccZNyydb",
			'oauth_access_token_secret' => "60oi627WZR2Bh95eN8ZTw1dCtungBBvfkAm4SukazYeQu",
			'consumer_key' => "zIvnntQo0gRPmvpH5mvMTqImK",
			'consumer_secret' => "jcWYfd9baoQpHdzRfYW2zLSU6wy8ehUslfcYRAEQ2ptDWEvz3n",

			'user' => 'malabardesign',
			'count' => 10
		);

		$url = "https://api.twitter.com/1.1/statuses/user_timeline.json";
		$connection = new TwitterOAuth(
			$settings['consumer_key'],
			$settings['consumer_secret'],
			$settings['oauth_access_token'],
			$settings['oauth_access_token_secret']
		);
		$content = $connection->get('statuses/user_timeline', array('screen_name' => $settings['user'], 'count' => $settings['count']));

		return $content;

	}

	public function getLastInstagram() {

		$instagram = new Instagram(array(
			'apiKey'      => 'a768cbed55c94324a366a1ae13b8247d',
			'apiSecret'   => '22e9d46f536e4e6c98102254071b33c4',
			'apiCallback' => 'http://localhost:3000'
		));
		$instagram->setAccessToken('200974905.a768cbe.231ad89bb96d4cccac7c718e233d2f0a');

		$content = $instagram->getUserMedia(/*'200974905'*/'200974905', 10);

		return $content;

	}
}
