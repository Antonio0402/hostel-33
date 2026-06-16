<?php
$room_card_index = 0;
$all_room_of_branch = $args['all_room_of_branch'];
$unique_room_of_room_types = $args['unique_room_of_room_types'];
?>
<swiper-container
  id="rooms-swiper"
  slides-per-view="auto"
  speed="500"
  effect="coverflow"
  coverflow-effect-rotate="50"
  coverflow-effect-depth="100"
  coverflow-effect-stretch="0"
  coverflow-effect-modifier="1"
  coverflow-effect-slide-shadows="true"
  centered-slides="true"
  space-between="30"
  active-slide-center="true"
  grab-cursor="true"
  keyboard="true">
  <?php
  while ($all_room_of_branch->have_posts()) :
    $all_room_of_branch->the_post();
    $post_id = get_the_ID();
    $room_types = wp_get_post_terms($post_id, 'room_type', array('fields' => 'names'));
    // Check is the room type is not empty array
    if (!empty($room_types)) {
      $room_type_slug = strip_tags($room_types[0]); // Get the first/primary room type
      if (!in_array($room_type_slug, $unique_room_of_room_types)) {
        $unique_room_of_room_types[] = $room_type_slug;
  ?>
        <swiper-slide>
          <?php get_template_part('template-parts/content-room-card'); ?>
        </swiper-slide>
  <?php
        $room_card_index++;
      }
    } else {
      continue;
    }
  endwhile;
  ?>
</swiper-container>
<div class="control-group" data-style="room-slider-control">
  <?php echo get_slider_control_group($unique_room_of_room_types);
  ?>
</div>
<?php
