<?php
function get_header_nav_menu($menu_name, $is_show_chidren = true)
{
  /* Get the nav_menu by name */
  if (!$menu_name) {
    return;
  }
  $nav_menu  = wp_get_nav_menu_object($menu_name);
  $menu_items = wp_get_nav_menu_items($nav_menu->term_id);
?>
  <?php
  $menu_list = '';
  $menu_children = array();
  foreach ((array) $menu_items as $item) {
    $parent_page_id = wp_get_post_parent_id($item->object_id);
    $parent_id = $item->menu_item_parent;
    if ($parent_page_id && $parent_id == 0) {
      $real_parent_id = array_search($parent_page_id, array_column($menu_items, 'object_id'));
      $parent_id = $menu_items[$real_parent_id]->ID;
    }
    if (!isset($menu_children[$parent_id])) {
      $menu_children[$parent_id] = array();
    }
    $menu_children[$parent_id][] = $item;
  }
  /* Check menu_children is not empty array */
  if (isset($menu_children[0])) {
    foreach ($menu_children[0] as $parent_item) {
      $parent_id = $parent_item->ID;
      $title = $parent_item->title;
      $url = $parent_item->url;
      $is_item_selected = (empty($_SERVER['HTTPS']) ? 'http' : 'https') . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]" === $url;
      $item_selected_class = $is_item_selected ? 'current-menu-item' : '' . '';
      // Check if this item has children
      if (isset($menu_children[$parent_id]) && $is_show_chidren) {
        // Parent with dropdown
        // Check the current url is the same as the parent url
        $menu_list .= '<li class="menu-item drop-down-menu ' . $item_selected_class . '">';
        $menu_list .= '<a href="' . esc_url($url) . '">' . esc_html($title) . ' <span class="dropdown-icon">▼</span></a>';
        $menu_list .= '<ul class="sub-menu">';

        // Loop through children
        foreach ($menu_children[$parent_id] as $child_item) {
          $child_title = $child_item->title;
          $child_url = $child_item->url;
          $menu_list .= '<li class="menu-item"><a href="' . esc_url($child_url) . '">' . esc_html($child_title) . '</a></li>';
        }

        $menu_list .= '</ul></li>';
      } else {
        // Simple menu item without children
        $menu_list .= '<li class="menu-item ' . $item_selected_class . '"><a href="' . esc_url($url) . '">' . esc_html($title) . '</a></li>';
      }
    }
  }

  return $menu_list;
}
