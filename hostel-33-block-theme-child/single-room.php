<?php

/**
 * The template for displaying single room
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Hostel_33
 */

get_header();

?>

<main id="primary" class="site-main">

  <?php
  while (have_posts()) :
    the_post();
    if (has_post_thumbnail()) {
      $photo = get_the_post_thumbnail_url();
    } else {
      $photo = get_field('room_thumbnail_images')['url'];
    }
    echo get_page_banner(
      array(
        'photo' => $photo,
        'title' => 'Room Details',
        'subtitle' => get_the_title()
      )
    );
    get_template_part('template-parts/content', get_post_type());
  endwhile;
  the_posts_navigation(
    array(
      'prev_text' => '<span class="nav-subtitle">' . esc_html__('Previous:', 'hostel-33') . '</span> <span class="nav-title">%title</span>',
      'next_text' => '<span class="nav-subtitle">' . esc_html__('Next:', 'hostel-33') . '</span> <span class="nav-title">%title</span>',
    )
  );

  // If comments are open or we have at least one comment, load up the comment template.
  if (comments_open() || get_comments_number()) :
    comments_template();
  endif;
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
