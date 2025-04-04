<?php

/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Hostel_33
 */

get_header();
?>

<main id="primary" class="site-main">

  <?php
  while (have_posts()) :
    the_post();
    if (has_excerpt()) {
      $subtitle = get_the_excerpt();
    } else {
      $subtitle = wp_trim_words(get_the_content(), 18);
    }
    echo get_page_banner(
      array(
        'subtitle' => $subtitle,
      )
    );
    get_template_part('template-part/content', 'breadcrumb');
    echo '<div class="page-container">';
    get_template_part('template-parts/content', get_post_type());

    the_post_navigation(
      array(
        'prev_text' => '<span class="nav-subtitle">' . esc_html__('Previous:', 'hostel-33') . '</span> <span class="nav-title">%title</span>',
        'next_text' => '<span class="nav-subtitle">' . esc_html__('Next:', 'hostel-33') . '</span> <span class="nav-title">%title</span>',
      )
    );

    // If comments are open or we have at least one comment, load up the comment template.
    if (comments_open() || get_comments_number()) :
      comments_template();
    endif;
    echo '</div>';
  endwhile; // End of the loop. 
  ?>
</main><!-- #main -->

<?php
get_sidebar();
get_footer();
