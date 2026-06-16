<?php
class DynamicBlockPlaceholder
{
  private $name;
  private $domain;
  private $render_callback;
  public function __construct($name, $domain, $render_callback = false)
  {
    $this->name = $name;
    $this->domain = $domain;
    $this->render_callback = $render_callback;
    add_action('init', array($this, 'register_dynamic_block'));
  }

  public function register_dynamic_block()
  {
    $dependencies = get_stylesheet_directory_uri() . '/build/' . $this->name . '.asset.php';
    if (file_exists($dependencies)) {
      $dependencies = require $dependencies;
    } else {
      $dependencies = [
        'dependencies' =>  ['wp-blocks', 'wp-element', 'wp-editor', 'wp-components'],
        'version' => time()
      ];
    }
    wp_register_script(
      $this->name . '-block-script',
      get_stylesheet_directory_uri() . '/build/' . $this->name . '/index.js',
      $dependencies['dependencies'],
      $dependencies['version'],
      true
    );
    $register_args = array(
      'api_version' => 3,
      'editor_script' => $this->name . '-block-script',
    );
    if ($this->render_callback) {
      $register_args['render_callback'] = [$this, 'retrieve_render_callback'];
    }
    if (function_exists('register_block_type')) {
      register_block_type(
        $this->domain . '/' . $this->name,
        $register_args
      );
    }
  }

  function retrieve_render_callback($attributes, $content)
  {
    ob_start();
    require get_theme_file_path('/blocks/' . $this->name . '.php');
    return ob_get_clean();
  }
}
function new_modern_blocks()
{
  $themeDir = get_stylesheet_directory();
  $buildDir = $themeDir . '/build';
  register_block_type_from_metadata($buildDir . '/button');
  register_block_type_from_metadata($buildDir . '/header');
  register_block_type_from_metadata($buildDir . '/banner');
  register_block_type_from_metadata($buildDir . '/why-choose-us');
  register_block_type_from_metadata($buildDir . '/main-features');
  register_block_type_from_metadata($buildDir . '/rooms-swiper');
  register_block_type_from_metadata($buildDir . '/ribbon');
  register_block_type_from_metadata($buildDir . '/list-item');
  register_block_type_from_metadata($buildDir . '/competitive-advantages');
  register_block_type_from_metadata($buildDir . '/address-map');
  register_block_type_from_metadata($buildDir . '/map-section');
  register_block_type_from_metadata($buildDir . '/footer');
  register_block_type_from_metadata($buildDir . '/blogindex');
  register_block_type_from_metadata($buildDir . '/archive');
  register_block_type_from_metadata($buildDir . '/page');
  register_block_type_from_metadata($buildDir . '/single');
  register_block_type_from_metadata($buildDir . '/404');
  register_block_type_from_metadata($buildDir . '/search');
  register_block_type_from_metadata($buildDir . '/page-contact');
  register_block_type_from_metadata($buildDir . '/archive-room');
}

add_action("init", "new_modern_blocks");

//* Registering the block collection on WordPress 6.7+
// add_action('init', 'create_new_modern_blocks_collection');

// function create_new_modern_blocks_collection()
// {
//   $themeDir = get_stylesheet_directory();
//   $buildDir = $themeDir . '/build';
//   wp_register_block_metadata_collection($buildDir, $buildDir . '/blocks-manifest.php');
//   $manifest_data = require $buildDir . '/blocks-manifest.php';
//   foreach (array_keys($manifest_data) as $block_type) {
//     register_block_type($buildDir . "/{$block_type}");
//   }
// }


//* Registering the block collection without loop on WordPress 6.8+
// add_action('init', 'create_new_modern_blocks_collection');

// function create_new_modern_blocks_collection()
// {
  // $themeDir = get_stylesheet_directory();
  //   $buildDir = $themeDir . '/build';
  // wp_register_block_types_from_metadata_collection($buildDir, $buildDir . '/blocks-manifest.php');
// }
