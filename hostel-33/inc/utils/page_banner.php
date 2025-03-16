<?php
function get_page_banner($args = NULL)
{
  if (!isset($args['title'])) {
    $args['title'] = get_the_title();
  }
  if (!isset($args['photo'])) {
    if (get_field('banner_photo') and !is_archive() and !is_home()) {
      $args['photo'] = get_field('banner_photo')['sizes']['pageBanner'];
    }
  }
?>
  <div class="expanded-container">
    <div class="page-banner" style="<?php if (!isset($args['photo'])) {
                                      echo 'background-color: var(--colors-primary);';
                                    } else {
                                      echo 'background-image: url(' . $args['photo'] . ');';
                                    } ?>">
      <div class="page-banner__content">
        <h1 class="page-banner__title"><?php echo $args['title']; ?></h1>
      </div>
    </div>
  </div>
<?php
}
