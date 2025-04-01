<?php
$section_id = basename(__FILE__, ".php"); // auto create ID, you can name too
$arr_section[$section_id] =
  array(
    'title' => __('Edit Homepage Section', OPTIONS_TEXTDOMAIN),
    'description' => __('Editing the content of all sections on your website homepage', OPTIONS_TEXTDOMAIN),
    'fields' => array(
      array(
        'id' => 'ht33_slogan',
        'type' => 'text',
        'label' => __('Company Slogan', OPTIONS_TEXTDOMAIN),
        'default' => '',
        'placeholder' => __('Your company\'s catchy slogan', OPTIONS_TEXTDOMAIN),
        'note' => __('Enter your catchy slogan which float above the main banner images', OPTIONS_TEXTDOMAIN),
        'required' => true,
        'sanitize_callback' => 'sanitize_text_field'
      ),
      array(
        'id' => 'ht33_cta_text',
        'type' => 'text',
        'label' => __('Call to action text', OPTIONS_TEXTDOMAIN),
        'default' => '',
        'placeholder' => __('Call us now for a lowest price ever!', OPTIONS_TEXTDOMAIN),
        'note' => __('Enter your cta text that appears inside the button float above main banner', OPTIONS_TEXTDOMAIN),
        'required' => true,
        'sanitize_callback' => 'sanitize_text_field'
      ),
      array(
        'id' => 'ht33_cta_href',
        'type' => 'text',
        'label' => __('Edit the cta button \'s anchor', OPTIONS_TEXTDOMAIN),
        'default' => '',
        'placeholder' => __('hostel-rooms-section', OPTIONS_TEXTDOMAIN),
        'note' => __('Enter the id of the HTML tag that your want to scroll to when click on CTA button', OPTIONS_TEXTDOMAIN),
        'sanitize_callback' => 'sanitize_text_field'
      ),
      array(
        'id' => 'ht33_selling_point_1',
        'type' => 'text',
        'label' => __('Selling Point 1', OPTIONS_TEXTDOMAIN),
        'default' => '',
        'placeholder' => __('Free parking', OPTIONS_TEXTDOMAIN),
        'note' => __('Enter your one of selling point need to promote for your customer on website', OPTIONS_TEXTDOMAIN),
        'sanitize_callback' => 'sanitize_text_field'
      ),
      array(
        'id' => 'ht33_selling_point_2',
        'type' => 'text',
        'label' => __('Selling Point 2', OPTIONS_TEXTDOMAIN),
        'default' => '',
        'placeholder' => __('Free parking', OPTIONS_TEXTDOMAIN),
        'note' => __('Enter your one of selling point need to promote for your customer on website', OPTIONS_TEXTDOMAIN),
        'sanitize_callback' => 'sanitize_text_field'
      ),
      array(
        'id' => 'ht33_selling_point_3',
        'type' => 'text',
        'label' => __('Selling Point 3', OPTIONS_TEXTDOMAIN),
        'default' => '',
        'placeholder' => __('Free parking', OPTIONS_TEXTDOMAIN),
        'note' => __('Enter your one of selling point need to promote for your customer on website', OPTIONS_TEXTDOMAIN),
        'sanitize_callback' => 'sanitize_text_field'
      ),
      array(
        'id' => 'ht33_selling_point_4',
        'type' => 'text',
        'label' => __('Selling Point 4', OPTIONS_TEXTDOMAIN),
        'default' => '',
        'placeholder' => __('Free parking', OPTIONS_TEXTDOMAIN),
        'note' => __('Enter your one of selling point need to promote for your customer on website', OPTIONS_TEXTDOMAIN),
        'sanitize_callback' => 'sanitize_text_field'
      ),
      array(
        'id' => 'ht33_selling_point_5',
        'type' => 'text',
        'label' => __('Selling Point 5', OPTIONS_TEXTDOMAIN),
        'default' => '',
        'placeholder' => __('Free parking', OPTIONS_TEXTDOMAIN),
        'note' => __('Enter your one of selling point need to promote for your customer on website', OPTIONS_TEXTDOMAIN),
        'sanitize_callback' => 'sanitize_text_field'
      ),
      array(
        'id' => 'ht33_selling_point_6',
        'type' => 'text',
        'label' => __('Selling Point 6', OPTIONS_TEXTDOMAIN),
        'default' => '',
        'placeholder' => __('Free parking', OPTIONS_TEXTDOMAIN),
        'note' => __('Enter your one of selling point need to promote for your customer on website', OPTIONS_TEXTDOMAIN),
        'sanitize_callback' => 'sanitize_text_field'
      ),
      array(
        'id' => 'ht33_competitive_advantage',
        'type' => 'text',
        'label' => __('Your most weight competitive advantage', OPTIONS_TEXTDOMAIN),
        'default' => '',
        'placeholder' => __('Family Room - Need bigger space for entire family', OPTIONS_TEXTDOMAIN),
        'note' => __('Enter your headline for the most weight of your competitive advantage compare to others', OPTIONS_TEXTDOMAIN),
        'sanitize_callback' => 'sanitize_text_field'
      ),
      array(
        'id' => 'ht33_competitive_advantage_description',
        'type' => 'editor',
        'label' => 'Editor',
        'height' => '',
        'default' => 'Your default content',
        'note' => __('Enter your detail list of all feature that competitive advantage provide', OPTIONS_TEXTDOMAIN),
      ),
    ),
  );
