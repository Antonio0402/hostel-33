<?php

/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package Hostel_33
 */

get_header();
?>

<main id="primary" class="site-main">

  <?php
  echo get_page_banner(
    array(
      'title' => esc_html__('Search Results for: %s', 'hostel-33') . '<span>' . get_search_query() . '</span>'
    ),
  );
  if (have_posts()) {
    echo '<div class="search-results">';
    while (have_posts()) :
      the_post();

      /**
       * Run the loop for the search to output the results.
       * If you want to overload this in a child theme then include a file
       * called content-search.php and that will be used instead.
       */
      get_template_part('template-parts/content', 'search');

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
  get_search_form();
  ?>

</main><!-- #main -->

<?php
get_footer();
