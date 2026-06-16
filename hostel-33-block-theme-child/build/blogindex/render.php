<main id="primary" class="site-main">
  <?php
  echo get_page_banner(array(
    'title' => esc_html__('Welcome to our blog', 'hostel-33'),
    'subtitle' => esc_html__('Keep up with our latest news', 'hostel-33')
  ));
  if (have_posts()) {
    if (is_home() && ! is_front_page()) :
  ?>
      <div class="page-container">
        <div>
          <h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
        </div>
      <?php
    endif;
    if (!is_home()) {
      get_template_part('template-parts/content', 'breadcrumb');
    }
    /* Start the Loop */
    while (have_posts()) :
      the_post();

      ?>

        <div class="metabox entry-meta">
          <div class="metabox__home-link">
            <a href="<?php echo site_url('/') ?>"><i class="fa fa-home" aria-hidden="true"></i> Back to home</a>
          </div>
        </div>
    <?php
      /*
             * Include the Post-Type-specific template for the content.
             * If you want to override this in a child theme, then include a file
             * called content-___.php (where ___ is the Post Type name) and that will be used instead.
             */
      get_template_part('template-parts/content', get_post_type());

    endwhile;
  } else {

    get_template_part('template-parts/content', 'none');
  }
    ?>
    <div>
</main><!-- #main -->