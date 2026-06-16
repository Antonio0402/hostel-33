<?php
$POPUP_MAKER_SUPPORT_FORM_ID = POPUP_MAKER_SUPPORT_FORM_ID;

class ContactForm
{
  private $CONTACT_FORM_ID = 155;
  private $CONTACT_FORM_FIELD_ID = [
    'name' => 'name-1',
    'email' => 'email-1',
    'message' => 'textarea-1',
  ];
  public function __construct()
  {
    add_action('wp_ajax_contact_form', array($this, 'contact_form'));
    add_action('wp_ajax_nopriv_contact_form', array($this, 'contact_form'));
  }

  function contact_form()
  {
    try {

      check_ajax_referer('wp_contact_form_nonce', 'nonce');

      $name = sanitize_text_field($_POST['name']);
      $email = sanitize_email($_POST['email']);
      $message = sanitize_text_field($_POST['message']);

      if (empty($name) || empty($email) || empty($message)) {
        wp_send_json_error('Phone number, email and message are required');
      }

      // Save the phone number to the database of forminator
      Forminator_API::initialize();
      $form_id = get_option('contact_form_id') ?: $this->CONTACT_FORM_ID;

      $form = Forminator_API::get_form($form_id);

      // If form doesn't exist, create it
      if (is_wp_error($form)) {
        wp_send_json_error('Form not found, please contact the administrator');
        // Store the form ID in an option for future use
        update_option('support_form_id', $form_id);
      }

      // Prepare data for submission
      $data = $this->get_contact_form_entry();

      // Submit the entry
      $entry_id = Forminator_API::add_form_entry($form_id, $data);

      if (is_wp_error($entry_id)) {
        error_log('Adding entry data failed: ' . $entry_id->get_error_message());
        return;
      }

      if ($entry_id) {
        // Send success response
        wp_send_json_success(array(
          'message' => NULL,
          'entry_id' => $entry_id,
          'popup_id' => POPUP_MAKER_SUPPORT_FORM_ID,
        ));
      }
    } catch (Exception $e) {
      error_log('Exception during form submission: ' . $e->getMessage());
      wp_send_json_error('An error occurred during submission: ' . $e->getMessage());
    }
  }

  function get_contact_form_entry()
  {
    $entry_data = [];

    foreach ($this->CONTACT_FORM_FIELD_ID as $field => $form_field_id) {
      if (isset($_POST[$field])) {
        $entry_data[] = [
          'name' => $form_field_id,
          'value' => $_POST[$field]
        ];
      }
    }

    return $entry_data;
  }

  function wpmudev_form_id_by_name($page_title, $output = OBJECT)
  {
    global $wpdb;
    $post = $wpdb->get_var($wpdb->prepare("SELECT ID FROM $wpdb->posts WHERE post_title = %s AND post_type='forminator_forms'", $page_title));
    if ($post) {
      return $post;
    }

    return null;
  }
}
