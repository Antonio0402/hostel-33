<?php

function get_all_room_of_brach(string $current_branch_id): WP_Query | null
{
  $all_room_of_branch = new WP_Query(array(
    'post_type' => 'room',
    'posts_per_page' => -1,
    'meta_query' => array(
      array(
        'key' => 'branch',
        'compare' => 'LIKE',
        'value' => '"' . $current_branch_id . '"'
      )
    ),
    'tax_query' => array(
      array(
        'taxonomy' => 'room_type',
        'field' => 'slug',
        'terms' => get_terms(['taxonomy' => 'room_type', 'fields' => 'slugs', 'hide_empty' => false]),
        'operator' => 'IN'
      )
    )
  ));
  if ($all_room_of_branch->have_posts()) {
    return $all_room_of_branch;
  }
  return null;
}
