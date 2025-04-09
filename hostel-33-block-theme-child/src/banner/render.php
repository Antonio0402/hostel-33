<?php
$banner_images = $attributes['bannerImages'] ?? [];
$slogan = $attributes['slogan'] ?? [];
$ctaButtonBlocks = $attributes['ctaButtonBlocks'] ?? '';
?>
<div class="page-banner expanded-container">
  <swiper-container
    slides-per-view="1"
    speed="500"
    effect="fade"
    autoplay="true"
    autoplay-delay="5000">
    <?php
    foreach ($banner_images as $key => $banner_image): ?>
      <swiper-slide style="background-image: url(<?php echo esc_url($banner_image['url']); ?>);" aria-label="<?php echo esc_attr($banner_image['alt']); ?>"></swiper-slide>
    <?php endforeach;
    ?>
  </swiper-container>
  <div class="control-group" data-style="page-banner-control">
    <?php echo get_slider_control_group($banner_images, 'url'); ?>
  </div>
  <div class="content">
    <div class="content-wrapper">
      <h1 class="title" style="color: <?php echo esc_attr($slogan['color'] ?? 'var(--color-black)'); ?>"><?php esc_html_e($slogan['content'] ?? '', 'hostel-33') ?></h1>
      <div class="divider"></div>
      <div class="btn-group">
        <?php echo $ctaButtonBlocks ? do_blocks($ctaButtonBlocks) : ''; ?>
      </div>
    </div>
  </div>
</div>