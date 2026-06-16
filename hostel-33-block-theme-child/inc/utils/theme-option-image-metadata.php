<?php
function get_metadata_for_image($image_id, $size = 'large')
{
  $image = wp_get_attachment_image_src($image_id, $size);
  if ($image) {
    return $image[0];
  }
  return null;
}
