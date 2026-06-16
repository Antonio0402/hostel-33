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
    <h3 class="title | color-primary text-800"><?php esc_html_e('Hotel Rooms', 'hostel33-33') ?></h3>
    <?php if ($all_branch->have_posts()) :
      $post_count = $all_branch->post_count;
      $index = 0;
      // Check if the branch_id session is set
      if (isset(($_COOKIE['hostel33_branch'])) && $_COOKIE['hostel33_branch'] !== null) {
        $current_branch_id = get_post($_COOKIE['hostel33_branch']);
        $current_branch = $all_branch->posts[array_search($current_branch_id, $all_branch->posts)];
      } else {
        $current_branch = $all_branch->posts[0];
        setcookie('hostel33_branch', $current_branch->ID, time() + 3600, '/');
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