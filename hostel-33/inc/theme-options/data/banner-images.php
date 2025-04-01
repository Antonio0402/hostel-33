<?php
function get_banner_images_from_theme_options()
{
  // Define default images
  $default_images = array_fill(0, 3, HOSTEL_33_BANNER_IMAGES);

  // Get banner images from metadata
  $banner_images = ht33_get_image_data('ht33_page_banner');

  // Check if banner images exist
  if ($banner_images) {
    // Ensure there are exactly 3 images
    $banner_images = array_merge($banner_images, $default_images);
    $banner_images = array_slice($banner_images, 0, 3);

    // Map banner images to include metadata
    $banner_images = array_map(function ($image) {
      return [
        'image' => get_metadata_for_image($image['id']),
        'alt' => $image['title'],
      ];
    }, $banner_images);
  } else {
    // Use default images if no banner images are found
    $banner_images = array_map(function ($image) {
      return [
        'image' => $image['image'],
        'alt' => $image['alt'],
      ];
    }, $default_images);
  }

  return $banner_images;
}
