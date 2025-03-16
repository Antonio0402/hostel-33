class SwiperBanner {
  constructor() {
    // Wait for both DOM and Swiper to be fully loaded
    this.initWhenReady();
  }

  initWhenReady() {
    // Check if DOM is already loaded
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      this.setupSwiper();
    } else {
      document.addEventListener('DOMContentLoaded', () => this.setupSwiper());
    }
  }

  setupSwiper() {
    // Get elements after DOM is loaded
    this.swiperEl = document.querySelector('swiper-container');
    const controls = document.querySelector('.page-banner .control-group');

    if (!this.swiperEl || !controls) {
      console.warn('Swiper elements not found in the DOM');
      return;
    }

    this.prev = controls.querySelector('.button-prev');
    this.next = controls.querySelector('.button-next');
    this.pagination = controls.querySelector('.pagination');

    // Wait for Swiper to be initialized
    this.swiperEl.addEventListener('swiper-init', () => {
      console.log('Swiper initialized!');
      this.bindEvents();
    });
  }

  bindEvents() {
    if (this.prev) {
      this.prev.addEventListener('click', () => this.onPrevClick());
    }

    if (this.next) {
      this.next.addEventListener('click', () => this.onNextClick());
    }

    if (this.pagination) {
      const bullets = this.pagination.querySelectorAll('.pagination-bullet');
      bullets.forEach((bullet, index) => {
        bullet.setAttribute('data-index', index);
        bullet.addEventListener('click', (e) => {
          const clickedIndex = parseInt(e.target.getAttribute('data-index'));
          this.swiperEl.swiper.slideTo(clickedIndex);

          // Update active bullet
          bullets.forEach(b => b.classList.remove('pagination-bullet-active'));
          e.target.classList.add('pagination-bullet-active');
        });
      });
    }
  }

  onPrevClick() {
    if (this.swiperEl && this.swiperEl.swiper) {
      this.swiperEl.swiper.slidePrev();
    }
  }

  onNextClick() {
    if (this.swiperEl && this.swiperEl.swiper) {
      this.swiperEl.swiper.slideNext();
    }
  }
}

// Ensure the class is initialized
document.addEventListener('DOMContentLoaded', () => {
  new SwiperBanner();
});

export default SwiperBanner;