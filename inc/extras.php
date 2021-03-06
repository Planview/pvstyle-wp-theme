<?php
/**
 * Custom functions that act independently of the theme templates
 *
 * Eventually, some of the functionality here could be replaced by core features
 *
 * @package Planview Styleguide
 */

/**
 * Get our wp_nav_menu() fallback, wp_page_menu(), to show a home link.
 *
 * @param array $args Configuration arguments.
 * @return array
 */
function pvstyle_page_menu_args( $args ) {
	$args['show_home'] = true;
	return $args;
}
add_filter( 'wp_page_menu_args', 'pvstyle_page_menu_args' );

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function pvstyle_body_classes( $classes ) {
	// Adds a class of group-blog to blogs with more than 1 published author.
	if ( is_multi_author() ) {
		$classes[] = 'group-blog';
	}

	return $classes;
}
add_filter( 'body_class', 'pvstyle_body_classes' );

/**
 * Filters wp_title to print a neat <title> tag based on what is being viewed.
 *
 * @param string $title Default title text for current view.
 * @param string $sep Optional separator.
 * @return string The filtered title.
 */
function pvstyle_wp_title( $title, $sep ) {
	if ( is_feed() ) {
		return $title;
	}

	global $page, $paged;

	// Add the blog name
	$title .= get_bloginfo( 'name', 'display' );

	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) ) {
		$title .= " $sep $site_description";
	}

	// Add a page number if necessary:
	if ( ( $paged >= 2 || $page >= 2 ) && ! is_404() ) {
		$title .= " $sep " . sprintf( __( 'Page %s', 'pvstyle' ), max( $paged, $page ) );
	}

	return $title;
}
add_filter( 'wp_title', 'pvstyle_wp_title', 10, 2 );

/**
 * Sets the authordata global when viewing an author archive.
 *
 * This provides backwards compatibility with
 * http://core.trac.wordpress.org/changeset/25574
 *
 * It removes the need to call the_post() and rewind_posts() in an author
 * template to print information about the author.
 *
 * @global WP_Query $wp_query WordPress Query object.
 * @return void
 */
function pvstyle_setup_author() {
	global $wp_query;

	if ( $wp_query->is_author() && isset( $wp_query->post ) ) {
		$GLOBALS['authordata'] = get_userdata( $wp_query->post->post_author );
	}
}
add_action( 'wp', 'pvstyle_setup_author' );

/**
 * Polyfills for IE8
 */
function pvstyle_ie_polyfills() { ?>
<!--[if lte IE 8]>
    <script src="<?php echo get_template_directory_uri() . '/bower_components/respond/dest/respond.min.js' ?>"></script>
<![endif]-->
<?php }
add_action( 'wp_head', 'pvstyle_ie_polyfills', 60 );

function pvstyle_tinymce_styles() {
	add_editor_style( pvstyle_settings('font-url') );
	add_editor_style( 'css/editor.css' );
}
add_action( 'after_setup_theme', 'pvstyle_tinymce_styles' );

/**
 * Make the editor respect empty `<span>` elements
 */
function pvstyle_tinymce_settings_filter ( $settings ) {
	$opts = '*[*]';
	$settings['valid_elements'] = $opts;
	$settings['extended_valid_elements'] = $opts;
	return $settings;    
}
add_filter( 'tiny_mce_before_init', 'pvstyle_tinymce_settings_filter' );