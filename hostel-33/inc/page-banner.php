<?php
function get_page_banner($args)
{
  if ($args['title']) {
    $title = $args['title'];
  } else {
    $title = get_the_title();
  }
}
