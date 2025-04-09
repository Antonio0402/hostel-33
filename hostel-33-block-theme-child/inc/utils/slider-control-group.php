<?php
function get_slider_control_group($items, $target_key = null)
{
  ob_start();
?>
  <div part="button-prev" class="button-prev hidden" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-container">
    <i class="fa-solid fa-circle-chevron-left fa-2xl"></i>
  </div>
  <div part="button-next" class="button-next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-container">
    <i class="fa-solid fa-circle-chevron-right fa-2xl"></i>
  </div>
  <div part="pagination" class="pagination pagination-bullets pagination-horizontal">
    <?php
    foreach ($items as $key => $value) {
      if ($target_key) {
        if ($value[$target_key] !== ''): ?>
          <span class="pagination-bullet" tabindex="0" role="button" aria-label="Go to slide <?php echo ($key + 1) ?>" aria-controls="swiper-container" aria-selected="<?php echo $key === 0 ? 'true' : 'false' ?>"></span>
        <?php endif;
      } else { ?>
        <span class="pagination-bullet" tabindex="0" role="button" aria-label="Go to slide <?php echo ($key + 1) ?>" aria-controls="swiper-container" aria-selected="<?php echo $key === 0 ? 'true' : 'false' ?>"></span>
    <?php }
    }
    ?>
  </div>
<?php
  return ob_get_clean();
}
