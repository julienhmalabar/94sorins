<?php
 
namespace Utils;

class WordpressUtils {

    function __construct() {
        
        require '../admin/wp-blog-header.php';

    }

    public function getPostByPostType($postType, $postSlug = '') {

        $options = array(
            'post_type' => $postType,
            'posts_per_page' => 1
        );

        if ($postSlug !== '') {
            $options['name'] = $postSlug;
        }

        $item = get_posts($options);
        $item = $item[0];

        return $this->prepareForOutput($item);

    }

    public function getPostsByPostType($postType, $postsPerPage = 10, $orderBy = 'none') {

        $options = array(
            'post_type' => $postType,
            'posts_per_page' => $postsPerPage,
            'orderby' => $orderBy
        );

        $items = get_posts($options);

        foreach ($items as $key=>$item) {
            $items[$key] = $this->prepareForOutput($item);
        }

        return $items;

    }

    private function prepareForOutput($input, $simple = false) {

        $output = (object) array();

        $output->id = $input->ID;
        $output->title = $input->post_title;
        $output->slug = $input->post_name;
        $output->post_type = $input->post_type;
        $output->permalink = get_permalink($input->ID);

        if ($input->post_content) {
            $output->content = $input->post_content;
        }

        $fields = get_fields($input->ID);
        if ($fields) {
            foreach ($fields as $key=>$field) {

                if ($key === 'text') {
                    $field = preg_replace('#(<[a-z ]*)(style=("|\')(.*?)("|\'))([a-z ]*>)#', '\\1\\6', $field);
                }

                if ($key !== '' && $key !== NULL && $field !== NULL) {
                    $output->{$key} = $field;
                }
            }
        }
    
        $profilePicture = get_field('profile_picture', 'user_' . $input->post_author);

        if (!$profilePicture) {
            $profilePicture = get_avatar_url($input->post_author);
        }
        else {
             $profilePicture = $profilePicture['sizes']['thumbnail'];
        }

        $output->author = (object) array(
            'name' => get_field('first_name', 'user_' . $input->post_author) . ' ' . get_field('last_name', 'user_' . $input->post_author),
            'picture' => $profilePicture
        );

        $output->permalink = str_replace(ADMIN, ROOT_WEB . '/', $output->permalink);
        $output->permalink = rtrim($output->permalink, "/");

        return $output;

    }

    public function getAuthorByPostId ($id) {



    }


}