<?php

/**
 * Hostel 33 functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Hostel_33
 */

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

if (! function_exists('hostel_33_setup')) {
    /**
     * Sets up theme defaults and registers support for various WordPress features.
     *
     * Note that this function is hooked into the after_setup_theme hook, which runs before the init hook.
     * The init hook is too late for some features, such as indicating support for post thumbnails.
     */
    function hostel_33_setup()
    {
        load_child_theme_textdomain(
            'hostel-33',
            get_stylesheet_directory() . '/languages'
        );
        //* Add theme support for block templates helping to turn on Full Site Editing
        add_theme_support('block-templates');

        // This theme uses wp_nav_menu() in one location.
        register_nav_menus(
            array(
            'header-menu' => esc_html__('Primary Menu', 'hostel-33'),
            'social-menu' => esc_html__('Social Links Menu', 'hostel-33'),
            )
        );

        add_image_size('pageBanner', 1800);
        add_editor_style('build/main.css');
    }
}

if (! function_exists('hostel_33_scripts')) {
    /**
     * Enqueue scripts and styles.
     */
    function hostel_33_scripts()
    {
        wp_enqueue_style('hostel-33-style', get_stylesheet_uri(), array(), GENERATE_VERSION);
        wp_style_add_data('hostel-33-style', 'rtl', 'replace');
        wp_enqueue_script(
            'hostel-33-swiper',
            'https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js',
            array(),
            GENERATE_VERSION,
            false
        );

        wp_enqueue_script(
            'hostel-33-main-script',
            get_stylesheet_directory_uri() . '/build/main.js',
            array('hostel-33-swiper', 'jquery'),
            time(),
            true
        );
        wp_add_inline_script('hostel-33-main-script', 'console.log("Swiper script loaded successfully");', 'after');
        // wp_enqueue_style(
        //     'hostel-33-google-fonts',
        //     'https://fonts.googleapis.com/css2?family=Inter:wght@100..900' .
        //     '&family=Oswald:wght@200..700&display=swap'
        // );
        wp_enqueue_style('hostel-33-main-style', get_stylesheet_directory_uri() . '/build/main.css', [], GENERATE_VERSION);

        if (is_singular() && comments_open() && get_option('thread_comments')) {
            wp_enqueue_script('comment-reply');
        }

        wp_localize_script('hostel-33-main-script', 'hostel33Data', array(
          'root_url' => get_site_url(),
          'ajax_url' => admin_url('admin-ajax.php'),
          'nonce' => wp_create_nonce('wp_rest'),
        ));
    }
}
function remove_ver_from_cdn($src)
{

    if (strpos($src, 'cdn.jsdelivr.net')) {
        $src = remove_query_arg('ver', $src);
    }
    return $src;
}
add_filter('script_loader_src', 'remove_ver_from_cdn', 9999);

/**
 * Bootstrap function to add hooks and require files.
 */
function hostel_33_bootstrap()
{
    add_action('after_setup_theme', 'hostel_33_setup');
    add_action('wp_enqueue_scripts', 'hostel_33_scripts');
    add_filter('script_loader_src', 'remove_ver_from_cdn', 9999);

    $child_theme_dir = get_stylesheet_directory();

    /**
     * Install Required Plugins for Hostel 33 theme
     */
    require_once $child_theme_dir . '/plugins-init.php';

    /**
     * Register Custom Post Types
     */
    require $child_theme_dir . '/inc/cpt-init.php';
    /**
     * Implement the Custom Header feature.
     */
    require $child_theme_dir . '/inc/header-nav-menu.php';

    /**
     * Utilities functions
     */
    require $child_theme_dir . '/inc/utils/index.php';

    /**
     * Ajax functions
     */
    require $child_theme_dir . '/inc/ajax-init.php';

    /**
     * Custom template tags for this theme.
     */
    require $child_theme_dir . '/inc/template-tags.php';

    /**
     * Honeybadger Error Monitoring
     */
    require $child_theme_dir . '/inc/honeybadger-monitor.php';

    /**
     * Gutenberg Block Placeholder
     */
    // require $child_theme_dir . '/inc/static-block-placeholder.php';
    require $child_theme_dir . '/inc/dynamic-block-placeholder.php';
}
hostel_33_bootstrap();
