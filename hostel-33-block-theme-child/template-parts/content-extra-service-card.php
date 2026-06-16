<?php
$room_image = $args['image'];
$room_price = $args['price'];
$room_title = $args['title'];
$unit = $args['unit'];
?>
<figure class="room-card" data-style="room-card-flat" data-variant="simple">
  <header>
    <img src=" <?php echo $room_image['url']; ?>" alt="<?php echo $room_image['alt']; ?>">
  </header>
  <figcaption class="content">
    <h4 class="title | text-300"><?php echo $room_title; ?></h4>
    <div class="room-price color-primary text-500 fw-medium"><?php if (!$room_price) {
                                                                echo 'Various';
                                                              } else {
                                                                echo esc_html_e('Only from ', 'hostel-33') . format_money($room_price) . ' / ' . esc_html__($unit, 'hostel');
                                                              }
                                                              ?>
    </div>
    <p class="room-description text-300">
      Hotel ut nisan the duru Orci miss natoque vasa ince X Clean sorem ipsum morbin
    </p>
  </figcaption>
</figure>