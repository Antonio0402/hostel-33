<?php

class Register_Custom_Post_Type
{
  /**
   * Register_Post_Type constructor.
   */

  public function __construct()
  {
    add_action("init", [$this, "register_post_type"]);
    add_action('after_switch_theme', [$this, 'hostel_33_flush_rewrite_rules']);
    add_action('wp_insert_post', [$this, 'save_single_room_type'], 10, 2);
    // Run this once manually from an admin page, or hook to admin_init with a flag
    // add_action('admin_init', [$this, 'cleanup_all_room_taxonomy_terms']);
  }

  public function register_post_type()
  {
    $room_labels = [
      'name' => esc_html__('Rooms', 'hostel-33'),
      'singular_name' => esc_html__('Room', 'hostel-33'),
      'add_new' => esc_html__('Add New Room', 'hostel-33'),
      'add_new_item' => esc_html__('Add New Room', 'hostel-33'),
      'edit_item' => esc_html__('Edit Room', 'hostel-33'),
      'new_item' => esc_html__('New Room', 'hostel-33'),
      'view_item' => esc_html__('View Room', 'hostel-33'),
      'search_items' => esc_html__('Search Rooms', 'hostel-33'),
      'not_found' => esc_html__('No Rooms Found', 'hostel-33'),
      'not_found_in_trash' => esc_html__('No Rooms Found in Trash', 'hostel-33'),
      'parent_item_colon' => esc_html__('Parent Room:', 'hostel-33'),
      'all_items' => esc_html__('All Rooms', 'hostel-33'),
      'archives' => esc_html__('Room Archives', 'hostel-33'),
      'attributes' => esc_html__('Room Attributes', 'hostel-33'),
      'insert_into_item' => esc_html__('Insert into Room', 'hostel-33'),
      'uploaded_to_this_item' => esc_html__('Uploaded to this Room', 'hostel-33'),
      'featured_image' => esc_html__('Room Image', 'hostel-33'),
      'set_featured_image' => esc_html__('Set Room Image', 'hostel-33'),
      'remove_featured_image' => esc_html__('Remove Room Image', 'hostel-33'),
      'use_featured_image' => esc_html__('Use as Room Image', 'hostel-33'),
      'filter_items_list' => esc_html__('Filter Rooms List', 'hostel-33'),
      'filter_by_date' => esc_html__('Filter Rooms by Date', 'hostel-33'),
      'items_list_navigation' => esc_html__('Rooms List Navigation', 'hostel-33'),
      'items_list' => esc_html__('Rooms List', 'hostel-33'),
      'item_published' => esc_html__('Room Published', 'hostel-33'),
      'item_published_privately' => esc_html__('Room Published Privately', 'hostel-33'),
      'item_reverted_to_draft' => esc_html__('Room Reverted to Draft', 'hostel-33'),
      'item_scheduled' => esc_html__('Room Scheduled', 'hostel-33'),
      'item_updated' => esc_html__('Room Updated', 'hostel-33'),
      'item_link' => esc_html__('Room Link', 'hostel-33'),
      'item_link_description' => esc_html__('A link to a room', 'hostel-33'),
    ];
    $room_cpt_icon = 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48cGF0aCBkPSJNMzIgMzJjMTcuNyAwIDMyIDE0LjMgMzIgMzJsMCAyNTYgMjI0IDAgMC0xNjBjMC0xNy43IDE0LjMtMzIgMzItMzJsMjI0IDBjNTMgMCA5NiA0MyA5NiA5NmwwIDIyNGMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMmwwLTMyLTIyNCAwLTMyIDBMNjQgNDE2bDAgMzJjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJMMCA2NEMwIDQ2LjMgMTQuMyAzMiAzMiAzMnptMTQ0IDk2YTgwIDgwIDAgMSAxIDAgMTYwIDgwIDgwIDAgMSAxIDAtMTYweiIvPjwvc3ZnPg==';
    register_post_type('room', [
      'labels' =>  $room_labels,
      'capabilities_type' => 'room',
      'map_meta_cap' => true,
      'description' => esc_html__('Create a new room for your hostel', 'hostel-33'),
      'public' => true,
      'hierarchical' => false,
      'show_ui' => true,
      'menu_icon' => "data:image/svg+xml;base64,{$room_cpt_icon}",
      'supports' => ['title', 'editor', 'thumbnail', 'excerpt'],
      'has_archive' => true,
      'rewrite' => [
        'slug' => 'rooms',
      ],
      'delete_with_user' => false,
      'show_in_rest' => true,
    ]);
    if (!taxonomy_exists('room_type')) {
      $room_type_labels = [
        'name' => esc_html__('Room Types', 'hostel-33'),
        'singular_name' => esc_html__('Room Type', 'hostel-33'),
        'search_items' => esc_html__('Search Room Types', 'hostel-33'),
        'all_items' => esc_html__('All Room Types', 'hostel-33'),
        'parent_item' => esc_html__('Parent Room Type', 'hostel-33'),
        'parent_item_colon' => esc_html__('Parent Room Type:', 'hostel-33'),
        'edit_item' => esc_html__('Edit Room Type', 'hostel-33'),
        'update_item' => esc_html__('Update Room Type', 'hostel-33'),
        'add_new_item' => esc_html__('Add New Room Type', 'hostel-33'),
        'new_item_name' => esc_html__('New Room Type Name', 'hostel-33'),
        'not_found' => esc_html__('No Room Types Found', 'hostel-33'),
        'menu_name' => esc_html__('Room Types', 'hostel-33'),
      ];
      register_taxonomy(
        'room_type',
        'room',
        array(
          'labels' => $room_type_labels,
          'description' => esc_html__('Identify the room type that a single room belong to in the hostel', 'hostel-33'),
          'public' => true,
          'hierarchical' => true,
          'show_ui' => true,
          'show_in_nav_menus' => false,
          'show_in_menu' => true,
          'show_admin_column' => true,
          'show_in_rest' => true,
          'rewrite' => array('slug' => 'room-types'),
          'query_var' => true,
          'meta_box_cb' => function ($post, $box) {
            // Only use custom metabox in classic editor
            if (!use_block_editor_for_post_type($post->post_type)) {
              $this->room_type_meta_box($post, $box);
            }
          },
        )
      );
    }

    $branch_label = [
      'name' => esc_html__('Branches', 'hostel-33'),
      'singular_name' => esc_html__('Branch', 'hostel-33'),
      'add_new' => esc_html__('Add New Branch', 'hostel-33'),
      'add_new_item' => esc_html__('Add New Branch', 'hostel-33'),
      'edit_item' => esc_html__('Edit Branch', 'hostel-33'),
      'new_item' => esc_html__('New Branch', 'hostel-33'),
      'view_item' => esc_html__('View Branch', 'hostel-33'),
      'search_items' => esc_html__('Search Branches', 'hostel-33'),
      'not_found' => esc_html__('No Branches Found', 'hostel-33'),
      'not_found_in_trash' => esc_html__('No Branches Found in Trash', 'hostel-33'),
      'parent_item_colon' => esc_html__('Parent Branch:', 'hostel-33'),
      'all_items' => esc_html__('All Branches', 'hostel-33'),
      'archives' => esc_html__('Branch Archives', 'hostel-33'),
      'attributes' => esc_html__('Branch Attributes', 'hostel-33'),
      'insert_into_item' => esc_html__('Insert into Branch', 'hostel-33'),
      'uploaded_to_this_item' => esc_html__('Uploaded to this Branch', 'hostel-33'),
      'featured_image' => esc_html__('Branch Image', 'hostel-33'),
      'set_featured_image' => esc_html__('Set Branch Image', 'hostel-33'),
      'remove_featured_image' => esc_html__('Remove Branch Image', 'hostel-33'),
      'use_featured_image' => esc_html__('Use as Branch Image', 'hostel-33'),
      'filter_items_list' => esc_html__('Filter Branches List', 'hostel-33'),
      'filter_by_date' => esc_html__('Filter Branches by Date', 'hostel-33'),
      'items_list_navigation' => esc_html__('Branches List Navigation', 'hostel-33'),
      'items_list' => esc_html__('Branches List', 'hostel-33'),
      'item_published' => esc_html__('Branch Published', 'hostel-33'),
      'item_published_privately' => esc_html__('Branch Published Privately', 'hostel-33'),
      'item_reverted_to_draft' => esc_html__('Branch Reverted to Draft', 'hostel-33'),
      'item_scheduled' => esc_html__('Branch Scheduled', 'hostel-33'),
      'item_updated' => esc_html__('Branch Updated', 'hostel-33'),
      'item_link' => esc_html__('Branch Link', 'hostel-33'),
      'item_link_description' => esc_html__('A link to a branch', 'hostel-33'),
    ];
    register_post_type('branch', [
      'labels' =>  $branch_label,
      'capabilities_type' => 'branch',
      'map_meta_cap' => true,
      'description' => esc_html__('Create a new branch for your hostel', 'hostel-33'),
      'public' => true,
      'hierarchical' => false,
      'show_ui' => true,
      'menu_icon' => "dashicons-building",
      'supports' => ['title', 'editor', 'thumbnail', 'excerpt'],
      'has_archive' => true,
      'rewrite' => [
        'slug' => 'branches',
      ],
      'delete_with_user' => false,
      'show_in_rest' => true,
    ]);
  }

  public function hostel_33_flush_rewrite_rules()
  {
    $this->register_post_type();
    flush_rewrite_rules();
  }
  public function room_type_meta_box($post, $box)
  {
    $taxonomy = $box['args']['taxonomy'];
    $tax_name = esc_attr($taxonomy);
    $terms = get_terms(['taxonomy' => $taxonomy, 'hide_empty' => false]);
    $post_terms = get_the_terms($post->ID, $taxonomy);
    $current = ($post_terms && !is_wp_error($post_terms) ? array_pop($post_terms) : false);
    $current_id = ($current ? $current->term_id : 0);

    // Add nonce for security
    wp_nonce_field('hostel33_room_type_nonce', 'hostel33_room_type_nonce');
    ob_start();
?>

    <div class="components-base-control">
      <div class="components-base-control__field">
        <div data-wp-component="InputBase" class="components-flex components-input-base components-select-control">
          <div data-wp-component="FlexItem" class="components-flex-item"><label data-wp-component="Text" for="room_type" class="components-truncate components-text components-input-control__label">
              <?php esc_html_e('Select the primary room type', 'hostel-33'); ?>
            </label>
          </div>
          <div class="components-input-control__container ">
            <span class="components-input-control__suffix">
              <div data-wp-component="InputControlSuffixWrapper" class="components-input-control-suffix-wrapper">
                <div class="component-input-control-suffix-icon">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" aria-hidden="true" focusable="false">
                    <path d="M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"></path>
                  </svg>
                </div>
              </div>
            </span>
            <div aria-hidden="true" class="components-input-control__backdrop"></div>
          </div>
        </div>
      </div>
    </div>
    <select class="room-type-list" id="room_type" name="tax_input[<?php echo $tax_name; ?>][]">>
      <option value=""><?php esc_html_e('— Select —', 'hostel-33'); ?></option>
      <?php foreach ($terms as $term) : ?>
        <option value="<?php echo esc_attr($term->term_id); ?>"
          <?php selected($current_id, $term->term_id); ?>>
          <?php echo esc_html($term->name); ?></option>
      <?php endforeach; ?>
    </select>
<?php
    echo ob_get_clean();
  }
  public function save_single_room_type($post)
  {
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
      return;
    }

    if (!isset($_POST['hostel33_room_type_nonce']) || !wp_verify_nonce($_POST['hostel33_room_type_nonce'], 'hostel33_room_type_nonce')) {
      return;
    }

    if (!current_user_can('edit_post', $post)) {
      return;
    }

    if ($post->post_type !== 'room') {
      return;
    }

    $post_id = $post->ID;
    $existing_terms = wp_get_object_terms($post_id, 'room_type');

    // Yoast primary term takes precedence if available
    $primary_term_id = 0;
    if (class_exists('WPSEO_Primary_Term')) {
      $wpseo_primary_term = new WPSEO_Primary_Term('room_type', $post_id);
      $primary_term_id = $wpseo_primary_term->get_primary_term();

      if ($primary_term_id > 0) {
        $post['tax_input'] = [
          'room_type' => [$primary_term_id]
        ];
        return $post_id;
      }
    }

    // If no primary term but multiple terms exist, keep only first one
    if (!empty($existing_terms) && !is_wp_error($existing_terms)) {
      if (count($existing_terms) > 1) {
        $post['tax_input'] = [
          'room_type' => [$existing_terms[0]->term_id]
        ];
        return $post_id;
      }
    }
  }

  public function cleanup_all_room_taxonomy_terms()
  {
    $rooms = get_posts([
      'post_type' => 'room',
      'posts_per_page' => -1,
      'fields' => 'ids'
    ]);

    foreach ($rooms as $room_id) {
      $terms = wp_get_object_terms($room_id, 'room_type');
      if (!empty($terms) && !is_wp_error($terms) && count($terms) > 1) {
        wp_set_object_terms($room_id, $terms[0]->term_id, 'room_type', false);
      }
    }
  }
}

new Register_Custom_Post_Type();
