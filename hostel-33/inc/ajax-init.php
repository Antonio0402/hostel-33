<?php
class AjaxInit
{
  public function __construct()
  {
    add_action('wp_enqueue_scripts', array($this, 'hostel_33_ajax_scripts'));
    include_once get_template_directory() . '/inc/switch-group.php';
    include_once get_template_directory() . '/inc/address-map.php';
    include_once get_template_directory() . '/inc/support-form.php';
    include_once get_template_directory() . '/inc/contact-form.php';
    $switch_group = new SwitchGroup('switch_branch');
    $address_map = new AddressMap('get_address');
    $support_form = new SupportForm();
    $contact_form = new ContactForm();
  }

  public function hostel_33_ajax_scripts()
  {
    wp_enqueue_script('hostel-33-switch-ajax-script', get_template_directory_uri() . '/build/branch-switch.js', array('hostel-33-main-script'), '1.0', true);
    wp_enqueue_script('hostel-33-address-ajax-script', get_template_directory_uri() . '/build/address-map.js', array('hostel-33-main-script'), '1.0', true);
    wp_enqueue_script('hostel-33-support-form-ajax-script', get_template_directory_uri() . '/build/support-form.js', array('hostel-33-main-script'), '1.0', true);
    if (is_page('contact')) {
      wp_enqueue_script('hostel-33-contact-form-ajax-script', get_template_directory_uri() . '/build/contact-form.js', array('hostel-33-main-script'), '1.0', true);
      wp_localize_script('hostel-33-contact-form-ajax-script', 'contactFormAjaxData', array(
        'root_url' => get_site_url(),
        'ajax_url' => admin_url('admin-ajax.php'),
        'action' => 'contact_form',
        'nonce' => wp_create_nonce('wp_contact_form_nonce'),
      ));
    }
    wp_localize_script('hostel-33-switch-ajax-script', 'switchAjaxData', array(
      'root_url' => get_site_url(),
      'ajax_url' => admin_url('admin-ajax.php'),
      'action' => 'switch_branch',
      'nonce' => wp_create_nonce('wp_switch_branch_nonce'),
    ));
    wp_localize_script('hostel-33-address-ajax-script', 'addressAjaxData', array(
      'root_url' => get_site_url(),
      'ajax_url' => admin_url('admin-ajax.php'),
      'action' => 'get_address',
      'nonce' => wp_create_nonce('wp_get_address_nonce'),
    ));
    wp_localize_script('hostel-33-support-form-ajax-script', 'supportFormAjaxData', array(
      'root_url' => get_site_url(),
      'ajax_url' => admin_url('admin-ajax.php'),
      'action' => 'support_form',
      'nonce' => wp_create_nonce('wp_support_form_nonce'),
    ));
  }
}

new AjaxInit();
