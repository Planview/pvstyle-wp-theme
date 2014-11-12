<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @package Planview Styleguide
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<section class="error-404 not-found">
				<header class="page-header">
					<h1 class="page-title"><?php _e( 'Page Not Found', 'pvstyle' ); ?></h1>
				</header><!-- .page-header -->

				<div class="page-content">
					<p class="lead text-center"><?php _e( 'Don&rsquo;t worry, there have been plenty of things throughout history we still haven&rsquo;t found. Don&rsquo;t give up looking yet!', 'pvstyle' ); ?></p>

					<p><img src="<?php echo get_stylesheet_directory_uri() . '/img/HolyGrail051.jpg' ?>" alt="<?php echo esc_attr__( 'The Holy Grail', 'pvstyle' ); ?>" title="<?php echo esc_attr__('What&hellip; is the air-speed velocity of an unladen swallow?', 'pvstyle'); ?>" class="img-rounded center-block img-responsive"></p>
					<p class="text-center"><?php _e('Here&rsquo;s a search box to help you out.') ?></p>
					<form role="search" method="get" class="search-form" action="<?php echo home_url( '/' ); ?>">
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

				</div><!-- .page-content -->
			</section><!-- .error-404 -->

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>
