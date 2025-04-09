<?php
$is_front_page = is_front_page();
?>
<header id="masthead" class="site-header" style="position: <?php echo $is_front_page ? 'fixed' : 'relative'; ?>; background-color: <?php echo $is_front_page ? 'transparent' : 'white'; ?>;">
  <div class="header-container">
    <?php
    if ($attributes['firstInnerBlock']) {
      echo do_blocks($attributes['firstInnerBlock']);
    }
    ?>
    <button class="btn menu-hamburger hide-on-desktop" data-style="btn-icon" aria-controls="main-navigation" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div class="overlay fade-out"></div>
    <nav id="site-navigation" class="main-navigation">
      <ul id="primary-menu" class="main-menu hide-on-mobile" data-visible="false">
        <?php echo get_header_nav_menu($attributes['menuName'] ?? 'Primary Menu'); ?>
      </ul>
    </nav>
    <!-- Open a call to target phone number -->
    <?php
    if ($attributes['lastInnerBlock']) {
      echo do_blocks($attributes['lastInnerBlock']);
    }
    ?>
  </div>
  <div class="divider"></div>
</header>