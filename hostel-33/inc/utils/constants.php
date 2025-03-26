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

// Extra Services
define('HOSTEL_33_EXTRA_SERVICES', [
  [
    'image' => [
      'url' => get_theme_file_uri('/assets/images/pork-crackling.jpg'),
      'alt' => 'Port Crackling',
    ],
    'price' => 250000,
    'title' => 'Port Crackling',
    'unit' => 'kg'
  ],
  [
    'image' => [
      'url' => get_theme_file_uri('/assets/images/box-meal.jpg'),
      'alt' => 'Box Meals',
    ],
    'price' => 60000,
    'title' => 'Box Meals',
    'unit' => 'box'
  ],
  [
    'image' => [
      'url' => get_theme_file_uri('/assets/images/offering.jpeg'),
      'alt' => 'Offering',
    ],
    'price' => 0,
    'title' => 'Offering',
    'unit' => 'piece'
  ],
]);

define('HOSTEL_33_ROOM_TITLE_BASE_ON_BED', [
  1 => 'Single',
  2 => 'Double',
  3 => 'Triple',
  4 => 'Quad',
  5 => 'Dormitory',
]);
