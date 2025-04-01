<?php
$section_id = basename(__FILE__, ".php"); // auto create ID, you can name too
$arr_section[$section_id] =
  array(
    'title' => __('Social Account', OPTIONS_TEXTDOMAIN),
    'description' => __('Set up all your social account display on website', OPTIONS_TEXTDOMAIN),
    'fields' => array(
      //only declare array fields here............./
      array(
        'id' => 'ht33_facebook',
        'type' => 'text',
        'label' => __('Facebook Account', OPTIONS_TEXTDOMAIN),
        'default' => '',
        'placeholder' => __('https://facebook.com.vn/nguyenvana', OPTIONS_TEXTDOMAIN),
        'note' => __('Enter your official Facebook account that customer connect to your', OPTIONS_TEXTDOMAIN),
        'sanitize_callback' => 'sanitize_url'
      ),

      array(
        'id' => 'ht33_tiktok',
        'type' => 'text',
        'label' => __('Tiktok Account', OPTIONS_TEXTDOMAIN),
        'default' => '',
        'placeholder' => __('https://tiktok.com/nguyenvana', OPTIONS_TEXTDOMAIN),
        'note' => __('Enter your official Tiktok account that customer connect to your', OPTIONS_TEXTDOMAIN),
        'sanitize_callback' => 'sanitize_url'
      ),

      array(
        'id' => 'ht33_zalo',
        'type' => 'text',
        'label' => __('Zalo Account', OPTIONS_TEXTDOMAIN),
        'default' => '',
        'placeholder' => __('012345678', OPTIONS_TEXTDOMAIN),
        'note' => __('Enter your official Zalo account that customer connect to your', OPTIONS_TEXTDOMAIN),
        'sanitize_callback' => 'sanitize_text_field'
      ),
    )
  );
