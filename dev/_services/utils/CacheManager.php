<?php

class CacheManager {

    function __construct() {

        define('CACHE_FOLDER', '/cache');

        if( !file_exists($_SERVER['DOCUMENT_ROOT'] . CACHE_FOLDER) ){
            mkdir($_SERVER['DOCUMENT_ROOT'] . CACHE_FOLDER , 0777);
        }
    }
    
    public function getCache($path) {

        if (file_exists($_SERVER['DOCUMENT_ROOT'] . CACHE_FOLDER . $path . '.json') ) {
            $json = file_get_contents($_SERVER['DOCUMENT_ROOT'] . CACHE_FOLDER . $path . '.json');
            return json_decode($json, true);
        }

        return NULL;

    }

    public function setCache($path, $data) {

        $params = explode('/', substr($path, 1));

        $rootPath = '';
        for ($i = 0; $i < count($params) - 1; $i++) {

            if (!file_exists($_SERVER['DOCUMENT_ROOT'] . CACHE_FOLDER . '/' . $rootPath . $params[$i] )) {
                mkdir($_SERVER['DOCUMENT_ROOT'] . CACHE_FOLDER . '/' . $rootPath . $params[$i], 0777);
            }

            $rootPath .= $params[$i] . '/';

        }

        $fp = fopen($_SERVER['DOCUMENT_ROOT'] . CACHE_FOLDER . '/' . $rootPath . $params[count($params) - 1] . '.json', 'w');
        fwrite($fp, json_encode($data, true));
        fclose($fp);

    }

    public function clear($path) {

        if (file_exists($_SERVER['DOCUMENT_ROOT'] . CACHE_FOLDER . '/' . $path . '.json') ) {
            unlink($_SERVER['DOCUMENT_ROOT'] . CACHE_FOLDER . '/' . $path . '.json');
            return 'File deleted.';
        }
        else if (file_exists($_SERVER['DOCUMENT_ROOT'] . CACHE_FOLDER . '/' . $path) ) {
            $this->removeFolder($_SERVER['DOCUMENT_ROOT'] . CACHE_FOLDER . '/' . $path);
            return 'Folder deleted.';
        }

        return 'No file or directory found.';
    }

    public function clearAll() {

        $this->removeFolder($_SERVER['DOCUMENT_ROOT'] . CACHE_FOLDER);

        return 'All cache deleted.';
    }

    private function generatePicture ($type, $data) {

        $params = 'type=' . urlencode($type) . '&title=' . urlencode($data->title);

    }

    private function removeFolder ($dir) {

        foreach(scandir($dir) as $file) {
            if ('.' === $file || '..' === $file) continue;
            if (is_dir("$dir/$file")) {
                $this->removeFolder("$dir/$file");
            }
            else {
                unlink("$dir/$file");
            }
        }

        rmdir($dir);
    }

}