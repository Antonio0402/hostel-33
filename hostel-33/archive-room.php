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

  <?php
  echo get_page_banner(
    array(
      'title' => $title,
      'subtitle' => $subtitle,
      'photo' => $photo
    )
  );
  if (have_posts()) {
    get_template_part('template-parts/content', 'breadcrumb');
    echo '<div class="rooms-container">';
    while (have_posts()) :
      the_post();
      get_template_part('template-parts/content', 'room-flat-card');
    endwhile;
    echo '</div>';
    the_posts_navigation(
      array(
        'prev_text' => 'Previous &raquo;',
        'next_text' => '&laquo; Next'
      )
    );
  } else {
    get_template_part('template-parts/content', 'none');
  }
  ?>
  <div class="extra-services">
    <div class="extra-service__content">
      <h2 class="title"><?php esc_html_e('Extra Services', 'hostel-33') ?></h2>
      <p class="detail">Vivamus imperdiet justo quis interdum interdum. Donec et augue in massa vehicula elementum.</p>
      <div class="extra-service__list">
        <p>Phasellus sed elementum dui. Mauris pretium dictum consectetur. </p>
        <ul>
          <?php
          $extra_services = [
            'Vestibulum laoreet dolor nec felis.'
          ];
          /* Create new array of same value from extra_services but has 3x elements */
          $extra_services = array_merge($extra_services, $extra_services, $extra_services);
          $extra_services[] = 'Pellentesque tincidunt. Sed elit lorem.';
          $extra_services[] = 'Maximus ac ante vitae, scelerisque sagittis magna.';
          ?>
          <?php foreach ($extra_services as $service) : ?>
            <li><?php echo $service; ?></li>
          <?php endforeach; ?>
        </ul>
      </div>
      <button class="btn room-card__book-now | color-primary text-400" data-variant="btn-sm" data-style="btn-outline">
        <?php esc_html_e('Book now', 'hostel-33'); ?>
      </button>
    </div>
    <div class="extra-service-cards">
      <?php
      $extra_services_data = HOSTEL_33_EXTRA_SERVICES;
      foreach ($extra_services_data as $extra_service) {
        get_template_part('template-parts/content', 'extra-service-card', $extra_service);
      }
      ?>
    </div>
  </div>
</main><!-- #main -->

<?php
get_footer();
