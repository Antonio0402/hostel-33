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
  $title = get_the_archive_title();
  $subtitle = get_the_archive_description();
}
?>

<main id="primary" class="site-main">

  <?php
  echo get_page_banner(
    array(
      'title' => $title,
      'subtitle' => $subtitle,
    )
  );
  if (have_posts()) {
    echo '<div class="archive-section">';
    while (have_posts()) :
      the_post(); ?>
      <div class="post-item">
        <?php if (has_post_thumbnail(get_the_ID())) : ?>
          <a href="<?php the_permalink(get_the_ID()); ?>">
            <?php
            $attr = array(
              'sizes' => '(min-width: 1180px) 300px, (min-width: 960px) calc(21.5vw + 51px), (min-width: 380px) 300px, calc(50vw + 120px)'
            );
            echo get_the_post_thumbnail(get_the_ID(), 'medium', $attr);
            ?>
          </a>
        <?php endif; ?>
        <div class="post-item__content">
          <h2 class="headline text-500 fw-medium">
            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
          </h2>
          <div class="metabox text-300 fw-light">
            <p>Posted by <?php the_author_posts_link(); ?> on <?php the_time('d-m-y'); ?> in <?php echo get_the_category_list(", ") ?></p>
          </div>
          <div class="genneric-content text-400">
            <?php the_excerpt(); ?>
            <p><a class="btn btn--blue" href="<?php the_permalink(); ?>">Continue reading &raquo;</a></p>
          </div>
        </div>

      </div>
  <?php
    endwhile;
    echo '</div>';
    the_posts_pagination(
      array(
        'prev_text' => __('Previous', 'hostel-33'),
        'next_text' => __('Next', 'hostel-33'),
        'screen_reader_text' => __('Posts navigation', 'hostel-33'),
        'mid_size' => 1
      )
    );
  } else {
    get_template_part('template-parts/content', 'none');
  }
  ?>

</main><!-- #main -->

<?php
get_footer();
