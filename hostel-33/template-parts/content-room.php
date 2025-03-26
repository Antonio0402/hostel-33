<?php
$room_title_base_on_bed = HOSTEL_33_ROOM_TITLE_BASE_ON_BED;
$room_images = get_field('room_images');
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
<div class="page-container">
  <div class="metabox single-room-meta">
    <div class="metabox__room-info">
      <span class="beds">
        <i class="fa-solid fa-bed"></i>
        <span class="text-400"><?php echo $room_bed . ' ' . _n('bed', 'beds', $room_bed, 'hostel-33') ?></span>
      </span>
      <span class="bathrooms">
        <i class="fa-solid fa-bath"></i>
        <span class="text-400"><?php echo $room_bathroom . ' ' . _n('bathroom', 'bathrooms', $room_bathroom, 'hostel-33') ?></span>
      </span>
      <span class="person">
        <i class="fa-solid fa-person"></i>
        <span class="text-400"><?php echo $room_bed * 2 . ' ' . _n('person', 'persons', $room_bed * 2, 'hostel-33') ?></span>
      </span>
    </div>
  </div>
  <article class="single-room-content">
    <header class="entry-header">
      <h2 class="title | text-700 fw-light"><?php echo $room_title; ?></h2>
    </header><!-- .entry-header -->
    <div class="entry-content">
      <div class="single-room-prices">
        <div class=" single-room-price color-primary text-500 fw-medium"><?php echo format_money($room_price) . ' / ' . esc_html__('Night', 'hostel') ?></div>
        <p>
          <i class="fa-solid fa-circle-dot" style="color: <?php echo $room_status ? 'var(--colors-contrary)' : 'var(--colors-black-50)'; ?>"></i>
          <span class="text-400"> <?php
                                  if ($room_status) {
                                    echo esc_html__('Available', 'hostel-33');
                                  } else {
                                    echo esc_html__('Not available', 'hostel-33');
                                  }
                                  ?>
          </span>
        </p>
      </div>
      <div class="single-room-images">
        <div class="single-room-images__main">
          <img src="<?php echo $room_images[0]['url']; ?>" alt="<?php echo $room_images[0]['alt']; ?>">
        </div>
        <div class="single-room-images__sub">
          <?php
          for ($i = 1; $i < count($room_images); $i++) {
            echo '<img src="' . $room_images[$i]['url'] . '" alt="' . $room_images[$i]['alt'] . '">';
          }
          ?>
        </div>
      </div>
      <div class="single-room-main-content text-300">
        <?php
        the_content();

        wp_link_pages(
          array(
            'before' => '<div class="page-links">' . esc_html__('Pages:', 'hostel-33'),
            'after'  => '</div>',
            'link_before' => '<span class="page-number">',
            'link_after' => '</span>',
          )
        );
        ?>
      </div>
      <footer class="entry-footer footer-cta">
        <div class="single-room-footer-cta">
          <p class="text-500 color-primary"><?php esc_html_e('worry about vacancy during the crowed time of Ba’s festival?', 'hostel-33') ?></p>
          <p class="text-400 color-secondary"><?php esc_html_e('Your reservation will be keep up to 3 months', 'hostel-33') ?></p>
        </div>
        <p class="headline text-600 color-primary" data-style="headline-cta"><strong><?php esc_html_e('Call us now!! 0296 - 3861371', 'hostel-33') ?></strong></p>
      </footer>
  </article>
</div>