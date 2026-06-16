<?php
define('POPUP_MAKER_SUPPORT_FORM_ID', '141');

class SupportForm
{
  public function __construct()
  {
    add_action('wp_ajax_support_form', array($this, 'support_form'));
    add_action('wp_ajax_nopriv_support_form', array($this, 'support_form'));
  }

  function support_form()
  {
    try {

      check_ajax_referer('wp_support_form_nonce', 'nonce');

      $phone = sanitize_text_field($_POST['phone']);
      $phone = preg_replace('/[^0-9]/', '', $phone);

      if (empty($phone)) {
        wp_send_json_error('Phone number is required');
      }

      // Save the phone number to the database of forminator
      Forminator_API::initialize();
      $form_id = get_option('support_form_id') ?? '';
      // Check if form exists
      $form = Forminator_API::get_form($form_id);

      // If form doesn't exist, create it
      if (is_wp_error($form)) {
        // Define a simpler wrapper structure with just a phone field
        $wrappers = array(
          array(
            'wrapper_id' => 'wrapper-phone-field',
            'fields'     => array(
              array(
                'element_id'      => 'phone-1',
                'type'            => 'phone',
                'cols'            => '12',
                "required"        => true,
                "field_label"     => __("Phone Number", 'hostel-33'),
                "placeholder"     => __("E.g. +84 123456789", 'hostel-33'),
                'limit' => 15,
                'validation_text' => __('Please enter a valid phone number', 'hostel-33'),
              ),
            ),
          )
        );
        // Simplified settings
        $settings = array(
          "formName"                    => 'Support Form',
          "thankyou"                    => "true",
          "thankyou-message"            => __("Thank you for contacting us,  We will call you back shortly.", 'hostel-33'),
          "use-custom-submit"           => "true",
          "custom-submit-text"          => __("Call me", 'hostel-33'),
          'form-type' => 'custom-form',
          'submission-behaviour' => 'behaviour-thankyou',
        );
        // Create the form
        $created_form_id = Forminator_API::add_form(
          'Support Form',
          $wrappers,
          $settings
        );

        if (is_wp_error($created_form_id)) {
          wp_send_json_error('Failed to create form: ' . $created_form_id->get_error_message());
          return;
        }

        $form_id = $created_form_id;
        // Store the form ID in an option for future use
        update_option('support_form_id', $form_id);
      }

      // Prepare data for submission
      $data = array(
        array(
          'name' => 'phone-1',
          'value'    => $phone,
        ),
      );

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
}
