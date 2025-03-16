import './../stylesheets/main.scss';

import SwiperBanner from './swiper-banner';

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('swiper-container')) {
    new SwiperBanner();
  }
});