<?php
class StaticBlockPlaceHolder
{
  private $name;
  private $domain;
  function __construct($name, $domain)
  {
    $this->name = $name;
    $this->domain = $domain;
    add_action('init', array($this, 'register_static_block'));
  }

  function register_static_block()
  {
    wp_register_script(
      $this->name . '-block-script',
      get_stylesheet_directory_uri() . '/blocks/' . $this->name . '.js',
      ['wp-blocks', 'wp-element'],
      time(),
      true
    );

    $register_args = array(
      'editor_script' => $this->name . '-block-script',
      'render_callback' => array($this, 'retrieve_render_callback'),
    );

    register_block_type(
      $this->domain . '/' . $this->name,
      $register_args
    );

    // if (is_wp_error($result)) {
    //   error_log('Block registration failed: ' . $result->get_error_message());
    // } else {
    //   error_log('Block registered successfully: ' . $this->domain . '/' . $this->name);
    // }
  }

  function retrieve_render_callback($attributes, $content)
  {
    $file_path = get_stylesheet_directory() . '/blocks/' . $this->name . '.php';
    error_log('Attempting to load block template: ' . $file_path);

    if (!file_exists($file_path)) {
      $file_path = get_template_directory() . '/blocks/' . $this->name . '.php'; // Fallback to parent theme
    }

    if (file_exists($file_path)) {
      ob_start();
      require $file_path;
      return ob_get_clean();
    }
    error_log('Block template not found: ' . $file_path);
    return;
  }
}
