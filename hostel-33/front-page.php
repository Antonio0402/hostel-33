<?php
get_header();
$banner_images = HOSTEL_33_BANNER_IMAGES;

$selling_points = HOSTEL_33_SELLING_POINTS;

$exclusive_advantages = HOSTEL_33_EXCLUSIVE_ADVANTAGES;
?>

<div class="page-banner expanded-container">
  <swiper-container slides-per-view="1" speed="500" loop="true">
    <?php
    foreach ($banner_images as $key => $banner_image): ?>
      <swiper-slide style="background-image: url(<?php echo $banner_image['image']; ?>);" aria-label="<?php echo $banner_image['alt']; ?>"></swiper-slide>
    <?php endforeach;
    ?>
  </swiper-container>
  <div class="control-group">
    <?php echo get_slider_control_group($banner_images, 'image'); ?>
  </div>
  <div class="content">
    <div class="content-wrapper">
      <h1 class="title"><?php esc_html_e('A peaceful place with good-bargain-budget', 'hostel-33') ?></h1>
      <div class="divider"></div>
      <div class="btn-group">
        <button role="navigation" class="btn" data-style="gradient">
          <span class="screen-reader-text"><?php esc_html_e('check THE UNBEATABLE PRICE today', 'hostel-33'); ?></span>
          <?php esc_html_e('Check THE UNBEATABLE PRICE today', 'hostel-33'); ?><i class="fa-solid fa-arrow-down"></i></button>
      </div>
    </div>
  </div>
</div>
<section class="two-column-section" data-section="why-choose-us">
  <img src=" <?php echo get_theme_file_uri('/assets/images/hostel-33-exterior.png') ?>" alt="Hostel 33 exterior image">
  <div class="content">
    <h2 class="heading"><?php esc_html_e('Welcome to hostel 33', 'hostel-33') ?></h2>
    <p class="sub-heading"><?php esc_html_e('Located in the most crowned in ba temple’s front gate area', 'hostel-33') ?></p>
    <div class="description"><?php esc_html_e('We are owned-family hostel which are within walking distance of most popular sacred temple located at Chau Doc city of Southwestern region.
      With more than 30 years of experience, we assure to provide for you a great place to rest where you can feel like home when taking a pilgrimage tour to Ba temple. More than 29 rooms with all air-cooled and hot-water available are neat decoration will bring you a comfortable and intimate atmosphere with your friends and family. ', 'hostel-33') ?></div>
    <p class="headline" data-style="headline-cta"><strong><?php esc_html_e('Booking call! 0296 - 3861371', 'hostel-33') ?></strong></p>
  </div>
</section>

<section class="expanded-container">
  <div class="two-column-section" data-section="selling-points">
    <div class="points">
      <h3 class="title | text-600 color-primary"><?php esc_html_e('We offer for guest', 'hostel-33') ?></h3>
      <ul class="point-list" role="list">
        <?php foreach ($selling_points as $point): ?>
          <li class="text-500 color-black">
            <i class="fa-solid fa-circle-check fa-sm color-primary"></i>
            <?php esc_html_e($point, 'hostel-33'); ?>
          </li>
        <?php endforeach; ?>
      </ul>
      <button role="button" class="btn" data-style="btn-outline">
        <?php esc_html_e('Choose your room', 'hostel-33'); ?>
      </button>
    </div>
    <div class="img-wrapper">
      <img src="<?php echo get_theme_file_uri('/assets/images/picture-selling-point.png') ?>" alt="Hostel 33 rooms picture gallery">
    </div>
  </div>
</section>

<?php
$all_branch = new WP_Query(array(
  'post_type' => 'branch',
  'posts_per_page' => -1,
  'orderby' => 'title',
  'order' => 'ASC'
));
?>

<section class="hostel-rooms-section">
  <div class="headline-section">
    <h3 class="title | color-primary text-800">Hotel Rooms</h3>
    <?php if ($all_branch->have_posts()) :
      $post_count = $all_branch->post_count;
      $index = 0;
      $current_branch = $all_branch->posts[0];
    ?>
      <div class="switch-group">
        <style>
          .switch-group {
            width: <?php echo 156 * $all_branch->post_count; ?>px;
          }

          .switch-group label[data-style='switch'].active {
            transform: translateX(<?php echo 146 * $index; ?>px);
          }
        </style>
        <?php
        while ($all_branch->have_posts()) :
          $all_branch->the_post();
          $default_checked = $index === 0 ? 'active' : '';
        ?>
          <input hidden type="radio" name="branch" id="branch-<?php the_ID(); ?>" data-checked="<?php the_ID() ?>">
          <label class="btn <?php echo $default_checked ?>" data-style="switch" for="branch-<?php the_ID(); ?>"><?php the_title(); ?></label>
        <?php
          $index++;
        endwhile;
        wp_reset_postdata();
        ?>
      </div>
    <?php endif; ?>
  </div>
  <?php
  $all_room_of_branch = new WP_Query(array(
    'post_type' => 'room',
    'posts_per_page' => -1,
    'meta_query' => array(
      array(
        'key' => 'branch',
        'compare' => 'LIKE',
        'value' => '"' . $current_branch->ID . '"'
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
  // Only show one room in each room_type taxonomy
  if ($all_room_of_branch->have_posts()) :
    $unique_room_of_room_types = [];
  ?>
    <div class="room-slider">
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
        $room_card_index = 0;
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
    </div>
  <?php
    wp_reset_postdata();
  endif;
  ?>
  <!-- Create a slider of swiper 3D images -->
</section>

<section class="expanded-container">
  <div class="two-column-section" data-section="exclusive-advantages">
    <div class="panel">
      <div class="ribbon">
        <div class="label">
          <h4><?php esc_html_e('Stay more - save more', 'hostel-33') ?></h4>
          <p><?php echo esc_html__('Just from ', 'hostel-33') . '<span class="color-primary">' . esc_html__('$20/5 beds', 'hostel-33') . '</span>' . esc_html__(' - room/night', 'hostel-33'); ?></p>
        </div>
        <button class="btn" data-style="btn-cta" data-variant="btn-sm">
          <i class="fa-solid fa-phone"></i>
          <?php esc_html_e('Call to book', 'hostel-33') ?>
        </button>
      </div>
    </div>
    <div class="advantages">
      <h3 class="title | text-600 color-black"><?php esc_html_e('Need bigger space for entire family', 'hostel-33') ?></h3>
      <ul class="advantages-list" role="list">
        <?php foreach ($exclusive_advantages as $advantage) : ?>
          <li class="text-500 color-black advantage-item">
            <div class="icon-wrapper">
              <?php echo $advantage['icon']; ?>
            </div>
            <p class="text-500 color-black">
              <?php esc_html_e($advantage['content'], 'hostel-33') ?>
            </p>
          </li>
        <?php endforeach;
        ?>
      </ul>
    </div>
  </div>
</section>
<?php
$address_detail = get_post_meta($current_branch->ID, 'address_detail', true);
$phone_number = get_post_meta($current_branch->ID, 'phone_number', true);
$email = get_post_meta($current_branch->ID, 'branch_email', true);
$map_embed_key = get_post_meta($current_branch->ID, 'map_embed_location', true);

?>

<section class="address-section">
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
</section>

<?php
get_footer();
?>