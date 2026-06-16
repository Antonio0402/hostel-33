<section class="address-section">
  <?php
  if (isset(($_COOKIE['hostel33_branch'])) && $_COOKIE['hostel33_branch'] !== null) {
    $current_branch_id = get_post($_COOKIE['hostel33_branch'])->ID;
  } else {
    $current_branch_id = $attributes['branchId'];
  }
  get_template_part('template-parts/content-address-map', null, array('id' => $current_branch_id));
  ?>
</section>