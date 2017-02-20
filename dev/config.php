<?php
	
if (preg_match_all('#\b(.free|.dev|.xip.io|dev.)\b#', $_SERVER['HTTP_HOST'], $matches)){
    define('ENV', 'dev');
}
else {
    define('ENV', 'prod');
}

$site = '';
if (preg_match_all('#\b(.xip.io)\b#', $_SERVER['HTTP_HOST'], $matches)){
    $site = 'malabar.192.168.2.42.xip.io';
}

$domain = $site ? $site : 'malabar';

define('DOMAIN', $domain);
define('ROOT_PATH', '');
define('ROOT_WEB', 'http://dev.' . DOMAIN . ROOT_PATH);
define('SERVICES', 'http://services.' . DOMAIN . '/');
define('MEDIAS', 'http://medias.' . DOMAIN . '/');
define('ADMIN', 'http://admin.' . DOMAIN . '/');