<?php

$configPath = $_SERVER['DOCUMENT_ROOT'] . '/../config.php';
require $configPath;

function my_project_updated_send_email( $post_id ) {

	if (count($_POST) === 0) {
		return;
	}
	
	// Delete cache
	getDataFromURL(SERVICES . '_cache/clear/' . $_POST['post_type'] . '/' . $_POST['post_name']);
	
	// Recreate cache
	$data = getDataFromURL(SERVICES . $_POST['post_type'] . '/' . $_POST['post_name']);

}

add_action( 'save_post', 'my_project_updated_send_email' );


function getDataFromURL($url) {

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $output = curl_exec($ch);
    curl_close($ch);

    return $output;
}

// Replace the permalink with the good URL since the admin and the website are not on the same subdomain
add_action( 'save_post', 'update_permalink', 10, 3 );

function update_permalink($post_id, $post){


   //if the post is an auto-draft we don't want to do anything either
   if($post->post_status != 'auto-draft' ){


       // unhook this function so it doesn't loop infinitely
       remove_action('save_post', 'update_permalink', 10, 3 );


      	// use title, since $post->post_name might have unique numbers added
		$new_slug = sanitize_title( $post->post_title, $post_id );

		if ($new_slug == $post->post_name)
		    return; // already set

		// update the post slug (WP handles unique post slug)
		wp_update_post( array(
		    'ID' => $post_id,
		    'post_name' => $new_slug
		));

      //re-hook this function
      add_action('save_post', 'update_permalink', 10, 3);
   }
}


add_action('admin_head', function()
{
	?>

		<style type="text/css">
			#edit-slug-box {
				opacity: 0;
			}

			#edit-slug-buttons {
				display: none;
			}
		</style>


		<script>

			var ADMIN = '<?php echo ADMIN; ?>';
			var ROOT_WEB = '<?php echo ROOT_WEB; ?>';

			// An interval because the permalink is inserted with Javascript
			var interval = setInterval(function(){
				var editSlugBox = document.getElementById('edit-slug-box');

				if (editSlugBox.length !== 0) {
					clearInterval(interval);

					var editSlugLink = editSlugBox.getElementsByTagName('a')[0];
					var href = editSlugLink.getAttribute('href');

					href = href.replace(ADMIN, ROOT_WEB + '/');

					if (href[href.length - 1] === '/') {
						href = href.substring(0, href.length - 1)
					}

					editSlugLink.setAttribute('href', href);
					editSlugLink.setAttribute('target', '_blank');
					editSlugLink.innerText = href;

					editSlugBox.style.opacity = 1;

				}
			}, 100);
		</script>
	<?php
});