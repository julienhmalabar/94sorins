<?php

class WordpressUtils {

    function __construct() {
        
        require '../admin/wp-blog-header.php';

    }

    public function getData($postType) {

        $data = array();
        $options = [
            'post_type' => array($postType),
            'posts_per_page' => '-1'
        ];

        query_posts( $options );

        while (have_posts()){
            the_post();
            
            $fields = get_fields($post->ID);
            $postType = get_post_type($post->ID);
            $fields['posttype'] = $postType;
            $fields['permalink'] = get_the_permalink();
            
            array_push($data, $fields);
        }

        if (count($data) == 1){
            $data = $data[0];
        }

        return $data;
    }


}