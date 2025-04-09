import SmoothScroll from "./smooth-scroll";

class StickyHeader {
  constructor() {
    this.initWhenReady();
  }

  initWhenReady() {
    document.addEventListener('DOMContentLoaded', () => {
      this.setupStickyHeader();
      this.setupPageBannerScroll();
    });
  }

  setupStickyHeader() {
    this.header = document.getElementById('masthead');
    if (!this.header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        this.header.classList.add('sticky');
        this.header.style.top = '0';
      } else {
        this.header.classList.remove('sticky');
        this.header.style.top = 'auto';
      }
    });
  }

  setupPageBannerScroll() {
    const pageBannerScroll = document.querySelector('.page-banner button[role="navigation"]');
    if (!pageBannerScroll) return;

    pageBannerScroll.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(pageBannerScroll.getAttribute('data-scroll-to'));
      console.log(target);
      if (target) {
        SmoothScroll.smoothScrollTo(target.offsetTop - 120, 800
          , 'easeInOutCubic'
        );
      }
    });
  }
}

export default StickyHeader;