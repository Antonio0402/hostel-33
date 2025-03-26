<?php

/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Hostel_33
 */

?>
<div class="page-container">
  <div class="metabox entry-meta">
    <div class="metabox__home-link">
      <?php
      $theParentId = wp_get_post_parent_id(get_the_ID());
      if ($theParentId) { ?>
        <a role="link" href="<?php echo get_permalink($theParentId); ?>"><i class="fa fa-home" aria-hidden="true"></i> Back to <?php echo get_the_title($theParentId); ?> <span class="metabox__main"><?php the_title(); ?></span>
        </a>
      <?php } else { ?>
        <a href="<?php echo site_url('/') ?>"><i class="fa fa-home" aria-hidden="true"></i> Back to home</a>
      <?php }
      ?>
    </div>
    <div class="metabox__details">
      <?php
      hostel_33_posted_on();
      hostel_33_posted_by();
      ?>
    </div>
  </div><!-- .entry-meta -->
  <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <?php hostel_33_post_thumbnail(); ?>

    <div class="entry-content">
      <?php
      the_content();

      wp_link_pages(
        array(
          'before' => '<div class="page-links">' . esc_html__('Pages:', 'hostel-33'),
          'after'  => '</div>',
          'link_before' => '<span class="page-number">',
          'link_after' => '</span>',
        )
      );
      ?>
    </div><!-- .entry-content -->

    <?php if (get_edit_post_link()) : ?>
      <footer class="entry-footer">
        <?php
        edit_post_link(
          sprintf(
            wp_kses(
              /* translators: %s: Name of current post. Only visible to screen readers */
              __('Edit <span class="screen-reader-text">%s</span>', 'hostel-33'),
              array(
                'span' => array(
                  'class' => array(),
                ),
              )
            ),
            wp_kses_post(get_the_title())
          ),
          '<span class="edit-link">',
          '</span>'
        );
        ?>
      </footer><!-- .entry-footer -->
    <?php endif; ?>
  </article><!-- #post-<?php the_ID(); ?> -->
</div>