<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Hostel_33
 */

?>

<footer id="colophon" class="site-footer expanded-container">
  <div class="footer-container">
    <div id="footer-navigation">
      <div class="popular-places">
        <h4 class="title"><?php esc_html_e('Popular Places', 'hostel-33'); ?></h4>
        <ul role="list" class="menu-list">
          <li><a href="#"><?php esc_html_e('New York', 'hostel-33'); ?></a></li>
          <li><a href="#"><?php esc_html_e('Los Angeles', 'hostel-33'); ?></a></li>
          <li><a href="#"><?php esc_html_e('San Francisco', 'hostel-33'); ?></a></li>
          <li><a href="#"><?php esc_html_e('Chicago', 'hostel-33'); ?></a></li>
          <li><a href="#"><?php esc_html_e('Miami', 'hostel-33'); ?></a></li>
        </ul>
      </div>
      <div class="footer-menu">
        <h4 class="title"><?php esc_html_e('Pages', 'hostel-33'); ?></h4>
        <ul role="list" class="menu-list">
          <?php echo get_header_nav_menu('Primary Menu', false); ?>
        </ul>
      </div>
    </div>
    <div class="support-form">
      <form class="support-card" id="hostel33-support-form" method="POST">
        <div class="logo">
          <a href="<?php echo site_url(); ?>">
            <img src="<?php echo esc_url(site_url('/wp-content/uploads/2025/03/hostel-33-logo.png')) ?>" alt="<?php bloginfo('name'); ?>">
          </a>
        </div>
        <div class="content">
          <h4 class="title"><?php esc_html_e('Do you have any question?', 'hostel-33'); ?></h4>
          <p class="description"><?php esc_html_e('
Please fill in your phone number for direct support and latest deal.', 'hostel-33'); ?></p>
          <input type="text" name="phone-input" id="phone-input" placeholder="<?php esc_html_e('Enter your phone number', 'hostel-33') ?>">
          <div class="form-message"></div>
        </div>
        <div class="button-group">
          <button type="submit" class="btn btn-primary" data-variant="btn-sm"><?php esc_html_e('call me', 'hostel-33'); ?></button>
          <div class="social-sharing">
            <?php if (ht33_get_option('ht33_facebook')): ?>
              <div class="icon-wrapper">
                <a href="<?php echo esc_attr(esc_url(ht33_get_option('ht33_facebook') ?? '#')) ?>"><i class="fab fa-facebook-f"></i></a>
              </div>
            <?php endif; ?>
            <?php if (ht33_get_option('ht33_tiktok')):
            ?>
              <div class="icon-wrapper">
                <a href="<?php echo esc_attr(esc_url(ht33_get_option('ht33_tiktok') ?? '#')) ?>"><i class="fa-solid fa-tiktok"></i></a>
              </div>
            <?php endif; ?>
            <?php if (ht33_get_option('ht33_zalo')): ?>
              <div class="icon-wrapper">
                <a href="<?php echo esc_attr(esc_url(ht33_get_option('ht33_zalo') ?? '#')) ?>"><i class="fa-solid fa-zalo"></i></a>
              </div>
            <?php endif; ?>
          </div>
        </div>
      </form>
    </div>
  </div>
  <div class="divider"></div>
  <div class="site-info">
    <a href="<?php echo esc_url(__('https://antonio-doan.tech/', 'hostel-33')); ?>">
      <?php
      /* translators: %s: CMS name, i.e. WordPress. */
      $current_year = date('Y');
      printf(esc_html__('The copyright %1$s by %2$s', 'hostel-33'), $current_year, 'Antonio');
      ?>
    </a>
    <div class="credits">
      <span class="sep"> | </span>
      <?php
      /* translators: 1: Theme name, 2: Theme author. */
      printf(esc_html__('Theme: %1$s by %2$s.', 'hostel-33'), 'hostel-33', '<a href="http://antonio-doan.tech">Antonio</a>');
      ?>
    </div>
  </div><!-- .site-info -->
</footer><!-- #colophon -->
</div><!-- #page -->

<?php
wp_footer();
?>

</body>

</html>