<?php
if (!session_id()) {
  session_start();
}
get_header();
?>

<main id="primary" class="site-main">

  <?php
  while (have_posts()) :
    the_post();
    echo get_page_banner();
  ?>
    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
      <?php hostel_33_post_thumbnail(); ?>

      <div class="entry-content">
        <?php
        the_content();
        ?>
      </div><!-- .entry-content -->
      <div class="two-column-section" data-section="contact-section">
        <div class="questions">
          <h2 class="title | text-700 color-black"><?php esc_html_e('Got a question?', 'hostel-33') ?></h2>
          <p class="description | text-400 color-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <?php
          $all_branch = new WP_Query(array(
            'post_type' => 'branch',
            'posts_per_page' => -1,
            'orderby' => 'title',
            'order' => 'ASC'
          ));
          if ($all_branch->have_posts()) :
            if (isset(($_SESSION['branch_id']))) {
              $current_branch_id = get_post($_SESSION['branch_id']);
              $current_branch = $all_branch->posts[array_search($current_branch_id, $all_branch->posts)];
            } else {
              $current_branch = $all_branch->posts[0];
            }
            $address_detail = get_post_meta($current_branch->ID, 'address_detail', true);
            $phone_number = get_post_meta($current_branch->ID, 'phone_number', true);
            $email = get_post_meta($current_branch->ID, 'branch_email', true);
            $map_embed_key = get_post_meta($current_branch->ID, 'map_embed_location', true);
          ?>
            <div class="contact-info">
              <div>
                <div class="icon-wrapper">
                  <i class="fa-solid fa-phone"></i>
                </div>
                <p><?php echo $phone_number; ?></p>
              </div>
              <div>
                <?php if ($email): ?>
                  <div class="icon-wrapper">
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                  <p><?php echo $email ?></p>
                <?php endif; ?>
              </div>
              <div>
                <div class="icon-wrapper">
                  <i class="fa-solid fa-map"></i>
                </div>
                <p><?php echo $address_detail ?></p>
              </div>
              <div>
                <div class="icon-wrapper">
                  <i class="fa-solid fa-clock"></i>
                </div>
                <p><?php esc_html_e('24/24 - Everyday', 'hostel-33') ?></p>
              </div>
            </div>
          <?php endif; ?>
        </div>
        <form action="" method="post" class="contact-form">
          <div class="contact-form-group">
            <div class="contact-form-item">
              <label for="contact-form-name">Name</label>
              <input type="text" name="contact-form-name" placeholder="<?php esc_html_e('Enter your name', 'hostel-33') ?>" required>
            </div>
            <div class="contact-form-item">
              <label for="contact-form-email">Email</label>
              <input type="email" name="contact-form-email" placeholder="<?php esc_html_e('Enter your email', 'hostel-33') ?>" required>
            </div>
          </div>
          <div class="contact-form-item">
            <label for="contact-form-message">Message</label>
            <textarea name="message" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" class="btn contact-form-submit" data-style="gradient">Send Message<i class="fa-solid fa-paper-plane"></i></button>
        </form>
      </div>
      <?php if (get_edit_post_link()) : ?>
        <footer class="contact-footer">
          <div class="headline" data-style="reserve">
            <p></p>
            <small></small>
          </div>
          <div class="headline" data-style="contact">
            <p></p>
            <small></small>
          </div>
        </footer><!-- .entry-footer -->
      <?php endif; ?>
    </article><!-- #post-<?php the_ID(); ?> -->
  <?php


  endwhile; // End of the loop.
  ?>

</main><!-- #main -->

<?php
get_footer();
