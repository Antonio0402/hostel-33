<?php
class AddressMap
{
  public function __construct($ajax_name)
  {
    add_action("wp_ajax_{$ajax_name}", array($this, 'get_address'));
    add_action("wp_ajax_nopriv_{$ajax_name}", array($this, 'get_address'));
  }

  public function get_address()
  {
    check_ajax_referer('wp_rest', 'nonce');

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
      wp_send_json_error('Only POST requests are allowed');
    }
    if (!isset($_POST['branch'])) {
      wp_send_json_error('Branch ID is required');
    }
    $branch_id = sanitize_text_field($_POST['branch']);
    error_log('Branch ID', $branch_id);
    echo get_template_part('template-parts/content-address-map', null, array('id' => $branch_id));
    die();
  }
}
