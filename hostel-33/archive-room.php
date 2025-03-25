<?php

/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Hostel_33
 */

get_header();
if (is_tax()) {
  $term = get_term_by('slug', get_query_var('term'), get_query_var('taxonomy'));
  $title = $term->name;
  $subtitle = $term->description;
} else {
  $title = __('Rooms and Suites', 'hostel-33');
  $subtitle = get_the_archive_description();
  $photo = get_theme_file_uri('/assets/images/rooms-banner.avif');
}
?>

<main id="primary" class="site-main">

  <?php if (have_posts()) {
    /* Start the Loop */
    echo get_page_banner(
      array(
        'title' => $title,
        'subtitle' => $subtitle,
        'photo' => $photo
      )
    );
    echo '<div class="rooms-container">';
    while (have_posts()) :
      the_post();
  ?>

      <?php
      get_template_part('template-parts/content', 'room-flat-card');
      ?>

  <?php

    endwhile;

    the_posts_navigation();
  } else {
    get_template_part('template-parts/content', 'none');
  }
  ?>
  </div>
  <div class="extra-services">
    <div class="extra-service__content">
      <h2 class="title"><?php esc_html_e('Extra Services', 'hostel-33') ?></h2>
      <p class="detail">Vivamus imperdiet justo quis interdum interdum. Donec et augue in massa vehicula elementum.</p>
      <div class="extra-service__list">
        <p>Phasellus sed elementum dui. Mauris pretium dictum consectetur. </p>
        <ul></ul>
      </div>
    </div>
    <div class="extra-service-cards">
      <?php
      get_template_part('template-parts/content', 'extra-service-card');
      ?>
    </div>
  </div>
</main><!-- #main -->

<?php
get_footer();
