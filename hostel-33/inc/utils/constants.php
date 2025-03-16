<?php

/**
 * Theme Constants
 *
 * @package Hostel33
 */

// Prevent direct access
if (!defined('ABSPATH')) {
  exit;
}

// Banner Images
define('HOSTEL_33_BANNER_IMAGES', [
  [
    'image' => get_theme_file_uri('/assets/images/page-banner-1.png'),
    'alt' => 'page-banner-1',
  ],
  [
    'image' => get_theme_file_uri('/assets/images/page-banner-2.png'),
    'alt' => 'page-banner-2',
  ],
  [
    'image' => get_theme_file_uri('/assets/images/page-banner-3.png'),
    'alt' => 'page-banner-3',
  ]
]);

// Selling Points
define('HOSTEL_33_SELLING_POINTS', [
  'Free parking',
  'Free wifi',
  'No noise of traffic',
  'Dormitory rooms',
  'Eating and drinking space',
  'Separated bathroom'
]);

// Exclusive Advantages 
define('HOSTEL_33_EXCLUSIVE_ADVANTAGES', [
  [
    'icon' => '<i class="fa-solid fa-money-check-dollar fa-2xl"></i>',
    'content' => 'Lowest Rate Guarantee',
  ],
  [
    'icon' => '<i class="fa-solid fa-restroom fa-2xl"></i>',
    'content' => 'Private + shared bathroom',
  ],
  [
    'icon' => '<i class="fa-solid fa-building-circle-check fa-2xl"></i>',
    'content' => 'Early check-in',
  ],
]);
