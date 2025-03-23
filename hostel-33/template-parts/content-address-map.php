<?php
$id = $args['id'];
$address_detail = get_post_meta($id, 'address_detail', true);
$phone_number = get_post_meta($id, 'phone_number', true);
$email = get_post_meta($id, 'branch_email', true);
$map_embed_key = get_post_meta($id, 'map_embed_location', true);
?>

<div class="address-container">
  <div class="address">
    <div class="address-item">
      <h4 class="title"><?php esc_html_e('Address', 'hostel-33') ?></h4>
      <div class="content">
        <i class="fa-solid fa-map-marker-alt fa-lg color-primary"></i>
        <p class="text-500 color-black"><?php esc_html_e($address_detail, 'hostel-33') ?></p>
      </div>
    </div>
    <div class="address-item">
      <h4 class="title"><?php esc_html_e('Contact Details', 'hostel-33') ?></h4>
      <div class="content">
        <i class="fa-solid fa-phone fa-lg color-primary"></i>
        <p class="text-500 color-black"><?php esc_html_e("Phone: $phone_number", 'hostel-33') ?></p>
      </div>
      <?php if ($email): ?>
        <div class="content">
          <i class="fa-solid fa-envelope fa-lg color-primary"></i>
          <p class="text-500 color-black"><?php esc_html_e("Email: $email", 'hostel-33') ?></p>
        </div>
      <?php endif; ?>
    </div>
  </div>
  <div class="map-container">
    <iframe src="https://www.google.com/maps/embed?<?php echo $map_embed_key ?> width=" 640" height="480" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</div>