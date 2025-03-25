<?php
class SwitchGroup
{
  public function __construct($ajax_name)
  {
    add_action("wp_ajax_{$ajax_name}", array($this, 'switch_branch'));
    add_action("wp_ajax_nopriv_{$ajax_name}", array($this, 'switch_branch'));
  }

  public function switch_branch()
  {

    check_ajax_referer('wp_switch_branch_nonce', 'nonce');


    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
      wp_send_json_error('Only POST requests are allowed');
    }
    if (!isset($_POST['branch'])) {
      wp_send_json_error('Branch ID is required');
    }
    $branch_id = sanitize_text_field($_POST['branch']);
    include_once __DIR__ . '/utils/all-room-of-branch.php';
    $all_room_of_branch = get_all_room_of_brach($branch_id);
    if ($all_room_of_branch !== null) {
      setcookie('hostel33_branch', $branch_id, time() + 3600, COOKIEPATH, COOKIE_DOMAIN);
      echo get_template_part('template-parts/content-room-slider', null, array('all_room_of_branch' => $all_room_of_branch, 'unique_room_of_room_types' => []));
    } else {
      echo '<p class="room-not-found">';
      echo 'No room found for this branch';
      echo '</p>';
    }
    die();
  }
}
