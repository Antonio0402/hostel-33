<?php
$room_title_base_on_bed = [
  1 => 'Single',
  2 => 'Double',
  3 => 'Triple',
  4 => 'Quad',
  5 => 'Dormitory',
];

$room_image = get_field('room_thumbnail_images');
$room_price = get_field('price');
$room_status = get_field('is_availability');
$room_bed = get_field('number_of_beds');
$room_bathroom = get_field('number_of_bathrooms');
$room_title_suffix = esc_html__($room_title_base_on_bed[$room_bed] . ' Room with ' . $room_title_base_on_bed[$room_bathroom] . _n(' Bathroom',  ' Bathrooms', $room_bathroom, 'hostel-33'), 'hostel-33');
if ($room_bed) {
  $room_title = $room_title_suffix;
} else {
  $room_title = get_the_title();
}

?>
<figure class="room-card" data-style="room-card-flat">
  <header>
    <img src="<?php echo $room_image['url']; ?>" alt="<?php echo $room_image['alt']; ?>">
  </header>
  <figcaption class="content">
    <h4 class="title | text-400"><?php echo $room_title; ?></h4>
    <div class="room-info">
      <span class="beds">
        <i class="fa-solid fa-bed"></i>
        <span class="text-400 color-black"><?php echo $room_bed . ' ' . _n('bed', 'beds', $room_bed, 'hostel-33') ?></span>
      </span>
      <span class="bathrooms">
        <i class="fa-solid fa-bath"></i>
        <span class="text-400 color-black"><?php echo $room_bathroom . ' ' . _n('bathroom', 'bathrooms', $room_bathroom, 'hostel-33') ?></span>
      </span>
    </div>
    <div class="room-price color-primary text-500 fw-medium"><?php echo format_money($room_price) . ' / ' . esc_html__('Night', 'hostel') ?></div>
    <p class="room-description text-300"><?php if (has_excerpt()) {
                                            echo get_the_excerpt();
                                          } else {
                                            echo wp_trim_words(get_the_content(), 18);
                                          } ?>
      Generous floorspace and magnificent original ceiling beams mark out these deliciously decadent rooms with their precious silk lampshades and sapient fin de siècle design touches. What better way to celebrate the joyful lightness by Cassida hotels.
    </p>
  </figcaption>
  <footer>
    <a class="btn room-card__explore | color-primary text-400" data-variant="btn-sm" data-style="gradient" href="<?php the_permalink(); ?>">
      <?php esc_html_e('Explore now', 'hostel-33'); ?>
    </a>
  </footer>
</figure>