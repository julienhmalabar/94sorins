<?php

require '../services/utils/Instagram.php';

use Utils\Instagram;

// initialize class
$instagram = new Instagram(array(
    'apiKey' => 'a768cbed55c94324a366a1ae13b8247d',
    'apiSecret' => '22e9d46f536e4e6c98102254071b33c4',
    'apiCallback' => 'http://dev.malabar/success.php' // must point to success.php
));

// create login URL
$loginUrl = $instagram->getLoginUrl();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instagram - OAuth Login</title>
    <link rel="stylesheet" type="text/css" href="assets/style.css">
    <style>
        .login {
            display: block;
            font-size: 20px;
            font-weight: bold;
            margin-top: 50px;
        }
    </style>
</head>
<body>
<div class="container">
    <header class="clearfix">
        <h1>Instagram <span>display your photo stream</span></h1>
    </header>
    <div class="main">
        <ul class="grid">
            <li><img src="assets/instagram-big.png" alt="Instagram logo"></li>
            <li>
                <a class="login" href="<?php echo $loginUrl ?>">» Login with Instagram</a>
                <h4>Use your Instagram account to login.</h4>
            </li>
        </ul>
        <!-- GitHub project -->
        <footer>
            <p>created by <a href="https://github.com/cosenary/Instagram-PHP-API">cosenary's Instagram class</a>,
                available on GitHub</p>
        </footer>
    </div>
</div>
</body>
</html>