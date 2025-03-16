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
$room_status = get_field('is_available');
$room_bed = get_field('number_of_beds');
$room_bathroom = get_field('number_of_bathrooms');
$room_title_suffix = esc_html__($room_title_base_on_bed[$room_bed] . ' Room with ' . $room_title_base_on_bed[$room_bathroom] . _n(' Bathroom',  ' Bathrooms', $room_bathroom, 'hostel-33'), 'hostel-33');
if ($room_bed) {
  $room_title = $room_title_suffix;
} else {
  $room_title = get_the_title();
}
?>

<figure class="room-card">
  <header>
    <img src="<?php echo $room_image['url']; ?>" alt="<?php echo $room_image['alt']; ?>">
    <div class="price | color-primary text-400"><?php echo format_money($room_price); ?></div>
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
  </figcaption>
  <footer>
    <button class="btn | color-primary text-400" data-variant="btn-sm" data-style="btn-outline">
      <?php esc_html_e('Book now', 'hostel-33'); ?>
    </button>
    <p>
      <i class="fa-solid fa-circle-dot" style="color: <?php $room_status ? 'var(--colors-contrary)' : 'var(--color-black-50)'; ?>"></i>
      <span class="text-300"> <?php
                              if ($room_status) {
                                echo esc_html__('Available', 'hostel-33');
                              } else {
                                echo esc_html__('Not available', 'hostel-33');
                              }
                              ?>
      </span>
    </p>
  </footer>
</figure>
</swiper-slide>