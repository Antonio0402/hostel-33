<?php

/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package Hostel_33
 */

get_header();
?>

<main id="primary" class="site-main">
  <?php
  echo get_page_banner(
    array(
      'title' => 'Oops! That page can&rsquo;t be found.'
    )
  );
  ?>
  <section class="error-404 not-found">
    <img src="<?php echo get_theme_file_uri('/assets/images/page-not-found.svg') ?>" alt="page not found image" />
    <a role="link" class="btn | color-primary text-400" data-style="gradient" href="<?php site_url('/') ?>">
      <?php esc_html_e('Go Home', 'hostel-33'); ?>
    </a>
    <div class="page-content">
      <p><?php esc_html_e('It looks like nothing was found at this location. Maybe try one of the links below or a search?', 'hostel-33'); ?></p>
      <?php get_search_form(); ?>
      <div class="widgets-container">
        <?php the_widget('WP_Widget_Recent_Posts'); ?>

        <div class="widget widget_categories">
          <h2 class="widget-title"><?php esc_html_e('Most Searched Categories', 'hostel-33'); ?></h2>
          <ul>
            <?php
            // wp_list_categories(
            //   array(
            //     'orderby'    => 'count',
            //     'order'      => 'DESC',
            //     'show_count' => 1,
            //     'title_li'   => '',
            //     'number'     => 10,
            //   )
            // );
            /* Get the list of taxonomy from custom post type */
            $args = array(
              'public'   => true,
              '_builtin' => false // It needs to be false to get custom post type
            );
            $output = 'names'; // or objects
            $operator = 'and'; // 'and' or 'or'
            $taxonomies = get_taxonomies($args, $output, $operator);
            foreach ($taxonomies as $taxonomy) {
              $terms = get_terms($taxonomy);
              foreach ($terms as $term) {
                echo '<li><a href="' . get_term_link($term) . '">' . $term->name . '</a></li>';
              }
            }
            ?>
          </ul>
        </div><!-- .widget -->
      </div>
      <?php
      /* translators: %1$s: smiley */
      // $hostel_33_archive_content = '<p>' . sprintf(esc_html__('Try looking in the monthly archives. %1$s', 'hostel-33'), convert_smilies(':)')) . '</p>';
      // the_widget('WP_Widget_Archives', 'dropdown=1', "after_title=</h2>$hostel_33_archive_content");

      // the_widget('WP_Widget_Tag_Cloud');
      ?>

    </div><!-- .page-content -->
  </section><!-- .error-404 -->

</main><!-- #main -->

<?php
get_footer();
