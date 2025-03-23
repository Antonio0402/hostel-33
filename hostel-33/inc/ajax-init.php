<?php
class AjaxInit
{
  public function __construct()
  {
    add_action('wp_enqueue_scripts', array($this, 'hostel_33_ajax_scripts'));
    include_once get_template_directory() . '/inc/switch-group.php';
    include_once get_template_directory() . '/inc/address-map.php';
    $switch_group = new SwitchGroup('switch_branch');
    $address_map = new AddressMap('get_address');
  }

  public function hostel_33_ajax_scripts()
  {
    wp_enqueue_script('hostel-33-switch-ajax-script', get_template_directory_uri() . '/build/branch-switch.js', array('hostel-33-main-script'), '1.0', true);
    wp_enqueue_script('hostel-33-address-ajax-script', get_template_directory_uri() . '/build/address-map.js', array('hostel-33-main-script'), '1.0', true);
    wp_localize_script('hostel-33-switch-ajax-script', 'switchAjaxData', array(
      'root_url' => get_site_url(),
      'ajax_url' => admin_url('admin-ajax.php'),
      'action' => 'switch_branch',
      'nonce' => wp_create_nonce('wp_rest'),
    ));
    wp_localize_script('hostel-33-address-ajax-script', 'addressAjaxData', array(
      'root_url' => get_site_url(),
      'ajax_url' => admin_url('admin-ajax.php'),
      'action' => 'get_address',
      'nonce' => wp_create_nonce('wp_rest'),
    ));
  }
}

new AjaxInit();
