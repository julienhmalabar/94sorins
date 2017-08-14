<?php
 
namespace Utils;

class CacheManager {

    function __construct() {

        if( !file_exists($_SERVER['DOCUMENT_ROOT'] . CACHE_FOLDER) ){
            mkdir($_SERVER['DOCUMENT_ROOT'] . CACHE_FOLDER , 0777);
        }


    }
    
    public function getCache($path) {

        if (file_exists($_SERVER['DOCUMENT_ROOT'] . CACHE_FOLDER . $path . '.json') ) {
            $json = file_get_contents($_SERVER['DOCUMENT_ROOT'] . CACHE_FOLDER . $path . '.json');
            return json_decode($json, true);
        }

        return false;

    }

    public function setCache($path, $data, $forceCache = false) {
        
        $params = explode('/', substr($path, 1));

        $rootPath = '';
        for ($i = 0; $i < count($params) - 1; $i++) {

            if (!file_exists($_SERVER['DOCUMENT_ROOT'] . CACHE_FOLDER . '/' . $rootPath . $params[$i] )) {
                mkdir($_SERVER['DOCUMENT_ROOT'] . CACHE_FOLDER . '/' . $rootPath . $params[$i], 0777);
            }

            $rootPath .= $params[$i] . '/';

        }

        if ($forceCache) {
            $fp = fopen($_SERVER['DOCUMENT_ROOT'] . CACHE_FOLDER . '/' . $rootPath . $params[count($params) - 1] . '.json', 'w');
            fwrite($fp, json_encode($data, true));
            fclose($fp);
        }

        //$this->generatePicture($params[0], $data);

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

        //$data = file_get_contents(SERVICES . 'share?' . $params);

        //var_dump($data);

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

    private function getDataFromURL ($url) {

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($ch);
        curl_close($ch);

        return $output;

    }

}