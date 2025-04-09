import './../stylesheets/main.scss';

import StickyHeader from './sticky-header';
import SwiperBanner from './swiper-banner';
import HamburgerMenu from './menu-hamburger';

const stickyHeader = new StickyHeader();
const pageBannerSwiper = new SwiperBanner('.page-banner');
const roomSliderSwiper = new SwiperBanner('.room-slider');
const hamburgerMenu = new HamburgerMenu();