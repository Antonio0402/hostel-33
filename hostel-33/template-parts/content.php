<?php

/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Hostel_33
 */

?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <header class="entry-header metabox entry-meta">
    <?php
    if (is_singular()) :
      the_title('<h1 class="entry-title">', '</h1>');
    else :
      the_title('<h2 class="entry-title"><a href="' . esc_url(get_permalink()) . '" rel="bookmark">', '</a></h2>');
    endif;
    ?>
    <div class="metabox__details">
      <?php
      if ('post' === get_post_type()) :
        hostel_33_posted_on();
        hostel_33_posted_by();
      endif;
      ?>
    </div>
  </header><!-- .entry-header -->

  <?php hostel_33_post_thumbnail(); ?>

  <div class="entry-content">
    <?php
    the_content(
      sprintf(
        wp_kses(
          /* translators: %s: Name of current post. Only visible to screen readers */
          __('Continue reading<span class="screen-reader-text"> "%s"</span>', 'hostel-33'),
          array(
            'span' => array(
              'class' => array(),
            ),
          )
        ),
        wp_kses_post(get_the_title())
      )
    );

    wp_link_pages(
      array(
        'before' => '<div class="page-links">' . esc_html__('Pages:', 'hostel-33'),
        'after'  => '</div>',
      )
    );
    ?>
  </div><!-- .entry-content -->

  <footer class="entry-footer">
    <?php if ('post' !== get_post_type()) hostel_33_entry_footer(); ?>
  </footer><!-- .entry-footer -->
</article><!-- #post-<?php the_ID(); ?> -->
</div>