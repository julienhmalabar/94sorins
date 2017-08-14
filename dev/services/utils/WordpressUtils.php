<?php
 
namespace Utils;

class WordpressUtils {

    function __construct() {
        
        require '../admin/wp-blog-header.php';

        $configContent = file_get_contents('../config.json');
        $this->config = json_decode($configContent, true);

    }

    public function getPostById($id) {

        $item = get_post($id);

        return $this->prepareForOutput($item);

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

        $terms = $this->getTermsById($item->ID);        
        if (count($terms)) {
            $item->tags = $terms;
        }

        return $this->prepareForOutput($item);

    }

    public function getPostsByPostType($postType, $postsPerPage = 10, $orderBy = 'none', $idToExlude = NULL, $paged = 0) {

        $options = array(
            'post_type' => $postType,
            'posts_per_page' => $postsPerPage,
            'orderby' => $orderBy
        );

        if ($idToExlude) {
            $options['post__not_in'] = array($idToExlude);
        }

        if ($paged) {
            $options['paged'] = $paged;
        }

        $items = get_posts($options);

        foreach ($items as $key=>$item) {
        
            $terms = $this->getTermsById($item->ID);            
            if (count($terms)) {
                $item->tags = $terms;
            }
            $items[$key] = $this->prepareForOutput($item);
        }

        return $items;

    }

    public function getTermsById($postId) {

        $terms = wp_get_post_terms($postId);

        return $terms;

    }

    private function prepareForOutput($input, $simple = false) {

        $output = (object) array();

        $output->id = $input->ID;
        $output->title = $input->post_title;
        $output->slug = $input->post_name;
        $output->post_type = $input->post_type;
        $output->post_date = $input->post_date;

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

        if ($input->tags) {
            $output->tags = array();
            foreach ($input->tags as $key=>$term) {
                $output->tags[$key] = (object) array(
                    'slug' => $term->slug,
                    'name' => $term->name
                );
            }
        }

        // ---o Set permalink
        $output->permalink = $this->convertPermalink(get_permalink($input->ID));

        return $output;

    }

    public function getAuthorByPostId ($id) {



    }

    public function convertPermalink($permalink = '', $test = false) {

        $routes = $this->config['_routes'];

        //print_r($routes);

        foreach($routes as $key=>$route) {
            $routeExploded = explode('/', $key);
            $slug = $routeExploded[1];

            if (strpos($permalink, $route['postType']) !== false) {
                $permalink = str_replace($route['postType'], $slug, $permalink);
            }
        }



        $permalink = str_replace(ADMIN, ROOT_WEB . '/', $permalink);
        $permalink = rtrim($permalink, "/");

        return $permalink;

    }


}