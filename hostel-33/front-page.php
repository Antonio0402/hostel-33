<?php
// Start using session
if (!session_id()) {
  session_start();
}
get_header();
$banner_images = HOSTEL_33_BANNER_IMAGES;

$selling_points = HOSTEL_33_SELLING_POINTS;

$exclusive_advantages = HOSTEL_33_EXCLUSIVE_ADVANTAGES;
?>

<div class="page-banner expanded-container">
  <swiper-container
    slides-per-view="1"
    speed="500"
    effect="fade"
    autoplay="true"
    autoplay-delay="5000">
    <?php
    foreach ($banner_images as $key => $banner_image): ?>
      <swiper-slide style="background-image: url(<?php echo $banner_image['image']; ?>);" aria-label="<?php echo $banner_image['alt']; ?>"></swiper-slide>
    <?php endforeach;
    ?>
  </swiper-container>
  <div class="control-group" data-style="page-banner-control">
    <?php echo get_slider_control_group($banner_images, 'image'); ?>
  </div>
  <div class="content">
    <div class="content-wrapper">
      <h1 class="title"><?php esc_html_e('A peaceful place with good-bargain-budget', 'hostel-33') ?></h1>
      <div class="divider"></div>
      <div class="btn-group">
        <button role="navigation" class="btn" data-style="gradient" data-scroll-to="#hostel-rooms-section">
          <span class=" screen-reader-text"><?php esc_html_e('check THE UNBEATABLE PRICE today', 'hostel-33'); ?></span>
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

<section id="hostel-rooms-section" class="hostel-rooms-section">
  <div class="headline-section">
    <h3 class="title | color-primary text-800">Hotel Rooms</h3>
    <?php if ($all_branch->have_posts()) :
      $post_count = $all_branch->post_count;
      $index = 0;
      // Check if the branch_id session is set
      if (isset(($_COOKIE['hostel33_branch'])) && $_COOKIE['hostel33_branch'] !== null) {
        $current_branch_id = get_post($_COOKIE['hostel33_branch']);
        $current_branch = $all_branch->posts[array_search($current_branch_id, $all_branch->posts)];
      } else {
        $current_branch = $all_branch->posts[0];
      }
    ?>
      <form class="switch-group" action="POST">
        <style>
          .switch-group {
            width: <?php echo 156 * $all_branch->post_count; ?>px;
            --padding-block: 12px;
            --padding-inline: 24px;
            --group-padding: 8px;
          }
        </style>
        <?php
        while ($all_branch->have_posts()) :
          $all_branch->the_post();
          $default_checked = $index === 0 ? 'active' : '';
        ?>
          <style>
            .switch-group label[data-switch="<?php echo $index; ?>"].active~.switch-highlight {
              transform: translateX(<?php echo 100 * $index; ?>%);
              width: calc(100% / <?php echo $all_branch->post_count; ?> - var(--padding-inline) / 2 + var(--group-padding) / 2);
            }
          </style>
          <input hidden type="radio" name="branch" id="branch-<?php the_ID(); ?>" data-checked="<?php the_ID() ?>">
          <label class="btn <?php echo $default_checked ?>" data-switch="<?php echo $index; ?>" data-style="switch" for="branch-<?php the_ID(); ?>"><?php the_title(); ?></label>
        <?php
          $index++;
        endwhile;
        wp_reset_postdata();
        ?>
        <div class="switch-highlight"></div>
      </form>
    <?php endif; ?>
  </div>
  <?php
  $all_room_of_branch = get_all_room_of_brach($current_branch->ID);
  // Only show one room in each room_type taxonomy
  if ($all_room_of_branch !== null) :
    $unique_room_of_room_types = [];
  ?>
    <!-- Loader -->
    <div class="lds-ellipsis loader" style="display: none;">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="room-slider">
      <?php
      get_template_part('template-parts/content-room-slider', null, array('all_room_of_branch' => $all_room_of_branch, 'unique_room_of_room_types' => $unique_room_of_room_types));
      ?>
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
        <button class="btn" data-style="btn-cta" data-variant="btn-sm" onclick="window.open('tel:02963861371')" aria-label="<?php esc_html_e('Call to book', 'hostel-33'); ?>">
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

?>

<section class="address-section">
  <?php
  get_template_part('template-parts/content-address-map', null, array('id' => $current_branch->ID));
  ?>
</section>

<?php
get_footer();
?>