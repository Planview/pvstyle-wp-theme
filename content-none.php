<?php
/**
 * The template part for displaying a message that posts cannot be found.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package Planview Styleguide
 */
?>

<section class="no-results not-found">
	<header class="page-header">
		<h1 class="page-title"><?php _e( 'Nothing Found', 'pvstyle' ); ?></h1>
	</header><!-- .page-header -->

	<div class="page-content">
		<?php if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>

			<p><?php printf( __( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'pvstyle' ), esc_url( admin_url( 'post-new.php' ) ) ); ?></p>

		<?php elseif ( is_search() ) : ?>

			<p class="lead text-center"><?php _e( 'Sorry, we couldn&rsquo;t find anything. Try searching for something different.', 'pvstyle' ); ?></p>
			<form role="search" method="get" style="margin-bottom: 20px" class="search-form" action="<?php echo home_url( '/' ); ?>">
				<div class="row">
					<div class="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
						<label for="search404" class="sr-only"><?php echo _x( 'Search for:', 'label' ) ?></label>
						<div class="input-group">
							<input type="search" id="search404" class="search-field form-control" placeholder="<?php echo esc_attr_x( 'Search …', 'placeholder' ) ?>" value="<?php echo get_search_query() ?>" name="s" title="<?php echo esc_attr_x( 'Search for:', 'label' ) ?>" />
							<span class="input-group-btn">
								<button type="submit" class="search-submit btn btn-success">
									<span class="fa fa-search"></span>
									<span class="sr-only"><?php echo esc_attr_x( 'Search', 'submit button' ) ?></span>
								</button>
							</span>
						</div>
					</div>
				</div>
			</form>
			<p><img src="<?php echo get_stylesheet_directory_uri() . '/img/empty_shelves.jpg' ?>" alt="<?php echo esc_attr__( 'Empty Shelves', 'pvstyle' ); ?>" class="img-rounded center-block img-responsive"></p>
			<p class="text-center"><small><?php _e('Image of <a href="https://www.flickr.com/photos/35179993@N03/14232491754/in/photolist-nFFeWS-5LPFNC-7XsBvc-6wK7mX-un9Ec-5kTpDv-5kTpCZ-8BeR6t-7d7det-7rcUsq-5eKCY1-aXrah2-nBuTDp-un9E5-un9DQ-p5aB-4ny9TP-6PUmY3-bDsFkG-GC4yo-6iQ6E6-n4XLG-5QN9o8-6PUpgj-98kB7k-9g9Xcp-nZ77yj-5X5DQd-6PUoqG-5JSUEL-e4c9cR-Kk1Wq-hDncH-bt9k6S-du5zQn-4mNo4s-4eWnzB-9fTRfs-4FuJN6-hNDEuG-65VWFh-65VWuu-8aiRQj-6LsAh9-5TLZFT-AkHzi-5nxbJg-7WHSvB-8MtXFK-oFuqvC">empty shelves</a> by HomeAndGardners.com - CC BY') ?></small></p>

		<?php else : ?>

			<p><?php _e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'pvstyle' ); ?></p>
			<?php get_search_form(); ?>

		<?php endif; ?>
	</div><!-- .page-content -->
</section><!-- .no-results -->
