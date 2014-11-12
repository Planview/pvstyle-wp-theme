<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package Planview Styleguide
 */
?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="container">
			<?php wp_nav_menu( array(
					'theme_location' => 'footer',
					'container' => 'nav',
					'menu_class' => 'list-inline text-center',
					'depth' => 1,
				) ); ?>
			<div class="site-info">
				<p class="text-center site-brand">
					<a href="http://www.planview.com">
						<span class="logo text-hide"><?php _e('Planview', 'pvstyle'); ?></span>
					</a>
				</p>
				<p class="copyright text-center"><?php printf(__('&copy; %s Planview, Inc., All Rights Reserved.', 'pvstyle'), date('Y')) ?></p>
			</div><!-- .site-info -->
		</div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
