<?php
$section_id = basename(__FILE__, ".php"); // auto create ID, you can name too
$arr_section[$section_id] =
  array(
    'title' => __('Company Information', OPTIONS_TEXTDOMAIN),
    'description' => __('General information about your company', OPTIONS_TEXTDOMAIN),
    'fields' => array(
      //only declare array fields here............./

      // Text
      array(
        'id' => 'ht33_company_name',
        'type' => 'text',
        'label' => __('Company name', OPTIONS_TEXTDOMAIN),
        'default' => '',
        'placeholder' => __('Your company\'s name', OPTIONS_TEXTDOMAIN),
        'note' => __('Enter the name of your company that you want to display on the website', OPTIONS_TEXTDOMAIN),
        'required' => true,
        'sanitize_callback' => 'sanitize_text_field'
      ),

      // Image: is_multiple = false 
      array(
        'id' => 'ht33_company_logo',
        'type' => 'image',
        'is_multiple' => false,
        'hide_attribute' => false,
        'label' => __('Company Logo', OPTIONS_TEXTDOMAIN),
        'default' => '',
        'btn_text' => __('Select logo', OPTIONS_TEXTDOMAIN),
        'media_upload_title' => __('Select or Upload Media Of Your Chosen Persuasion', OPTIONS_TEXTDOMAIN),
        'media_upload_btn_text' => __('Use this media', OPTIONS_TEXTDOMAIN),
        'no_photo_text' => __('No photos. Please click below button to upload photo', OPTIONS_TEXTDOMAIN),
        'sanitize_callback' => ['sanitize_mime_type', 'image'],
        'required' => true,
      ),

      // Textarea
      array(
        'id' => 'ht33_company_description',
        'type' => 'textarea',
        'rows' => 5,
        'label' => __('Company Description', OPTIONS_TEXTDOMAIN),
        'default' => '',
        'placeholder' => __('Enter a brief description of your company', OPTIONS_TEXTDOMAIN),
        'note' => __('Enter a brief description of your company that you want to display on the website', OPTIONS_TEXTDOMAIN),
        'sanitize_callback' => 'sanitize_textarea_field',
        'required' => true,
      ),

      array(
        'id' => 'ht33_company_phone',
        'type' => 'text',
        'label' => __('Phone number', OPTIONS_TEXTDOMAIN),
        'default' => '',
        'placeholder' => __('Your company\'s phone number', OPTIONS_TEXTDOMAIN),
        'note' => __('Enter the phone number of your company that you want to display and receive calls', OPTIONS_TEXTDOMAIN),
        'required' => true,
        'sanitize_callback' => 'sanitize_text_field'
      ),

      array(
        'id' => 'ht33_company_hotline',
        'type' => 'text',
        'label' => __('Hotline', OPTIONS_TEXTDOMAIN),
        'default' => '',
        'placeholder' => __('Your company\'s hotline number', OPTIONS_TEXTDOMAIN),
        'note' => __('Enter the hotline number of your company that you want to display and receive calls', OPTIONS_TEXTDOMAIN),
        'sanitize_callback' => 'sanitize_text_field'
      ),

      array(
        'id' => 'ht33_company_email',
        'type' => 'text',
        'label' => __('Company email', OPTIONS_TEXTDOMAIN),
        'default' => '',
        'placeholder' => __('Your company\'s email', OPTIONS_TEXTDOMAIN),
        'note' => __('Enter the email of your company that you want to display and receive emails', OPTIONS_TEXTDOMAIN),
        'sanitize_callback' => 'sanitize_email',
        'required' => true,
      ),

      // Textarea
      array(
        'id' => 'ht33_company_address',
        'type' => 'textarea',
        'rows' => 5,
        'label' => __('Company Address', OPTIONS_TEXTDOMAIN),
        'default' => '',
        'placeholder' => __('856 Pham Van Bach Street,.etc.', OPTIONS_TEXTDOMAIN),
        'note' => __('Enter the official address of your company location', OPTIONS_TEXTDOMAIN),
        'sanitize_callback' => 'sanitize_textarea_field',
        'required' => true,
      ),

      // Image: is_multiple = true 
      array(
        'id' => 'ht33_page_banner',
        'type' => 'image',
        'is_multiple' => true,
        'hide_attribute' => false,
        'label' => __('Home Page Banner', OPTIONS_TEXTDOMAIN),
        'default' => '',
        'btn_text' => __('Select Image', OPTIONS_TEXTDOMAIN),
        'media_upload_title' => __('Select or Upload Media Of Your Chosen Persuasion', OPTIONS_TEXTDOMAIN),
        'media_upload_btn_text' => __('Use this media', OPTIONS_TEXTDOMAIN),
        'no_photo_text' => __('No photos. Please click below button to upload photo', OPTIONS_TEXTDOMAIN),
        'sanitize_callback' => ['sanitize_mime_type', 'image'],
        'note' => __('Select 3 images for the home page banner', OPTIONS_TEXTDOMAIN),
        'required' => true,
      ),

    )
  );
