<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Hostel_33
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="https://gmpg.org/xfn/11">
  <?php if (is_singular() && pings_open(get_queried_object())) : ?>
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
  <?php endif; ?>
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <?php wp_body_open(); ?>
  <div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'hostel-33'); ?></a>
    <?php
    $is_front_page = is_front_page();
    ?>
    <header id="masthead" class="site-header" style="position: <?php echo $is_front_page ? 'fixed' : 'relative'; ?>; background-color: <?php echo $is_front_page ? 'transparent' : 'white'; ?>;">
      <div class="header-container">
        <div class="site-branding">
          <a href="<?php echo site_url(); ?>">
            <img src="<?php echo esc_url(site_url('/wp-content/uploads/2025/03/hostel-33-logo.png')) ?>" alt="<?php bloginfo('name'); ?>">
          </a>
        </div>
        <button class="btn menu-hamburger hide-on-desktop" data-style="btn-icon" aria-controls="main-navigation" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="overlay fade-out"></div>
        <nav id="site-navigation" class="main-navigation">
          <ul id="primary-menu" class="main-menu hide-on-mobile" data-visible="false">
            <?php echo get_header_nav_menu('Primary Menu'); ?>
          </ul>
        </nav>
        <!-- Open a call to target phone number -->
        <button role="button" class="btn site-cta" data-style="btn-cta"
          onclick="window.open('tel:02963861371')" aria-label="<?php esc_html_e('Call to book', 'hostel-33'); ?>">
          <i class="fa-solid fa-phone"></i>
          <span class="screen-reader-text"><?php esc_html_e('Call to book', 'hostel-33'); ?></span>
          <?php esc_html_e('Call to book', 'hostel-33'); ?>
        </button>
      </div>
      <div class="divider"></div>
    </header>