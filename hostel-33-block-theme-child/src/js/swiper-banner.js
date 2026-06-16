class SwiperBanner {
  constructor(targetParent) {
    // Wait for both DOM and Swiper to be fully loaded
    this.targetParent = targetParent;
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
    if (!this.targetParent) {
      console.log(this.targetParent);
      console.warn('Swiper target parent not found in the DOM');
      return;
    }
    this.parent = document.querySelector(this.targetParent);
    this.swiperEl = this.parent?.querySelector('swiper-container');
    const controls = this.parent?.querySelector('.control-group');
    if (!this.swiperEl || !controls) {
      console.warn('Swiper elements not found in the DOM');
      return;
    }

    this.prev = controls.querySelector('.button-prev');
    this.next = controls.querySelector('.button-next');
    this.pagination = controls.querySelector('.pagination');

    // Check if 

    // Wait for Swiper to be initialized
    this.bindEvents();
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

          if (this.swiperEl && this.swiperEl.swiper) {
            // Use swiper to go to the slide
            this.swiperEl.swiper.slideTo(clickedIndex);
          }

          // Use the existing updatePagination function for consistency
          this.updatePagination(clickedIndex);
        });
      });

      // Set up slide change listener once, outside the click handlers
      if (this.swiperEl && this.swiperEl.swiper) {
        this.swiperEl.swiper.on('slideChange', () => {
          this.updatePagination(this.swiperEl.swiper.activeIndex);
        });

        // Initialize pagination with current slide
        this.updatePagination(this.swiperEl.swiper.activeIndex);
      }
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

  updatePagination(activeIndex) {
    if (!this.pagination) return;

    const bullets = this.pagination.querySelectorAll('.pagination-bullet');
    bullets.forEach((bullet, index) => {
      // Set aria-selected based on whether index matches activeIndex
      bullet.setAttribute('aria-selected', index === activeIndex ? 'true' : 'false');
      if (activeIndex === 0) {
        this.prev.classList.add('hidden');
      }
      else {
        this.prev.classList.remove('hidden');
      }
      if (activeIndex === bullets.length - 1) {
        this.next.classList.add('hidden');
      }
      else {
        this.next.classList.remove('hidden');
      }
    });
  }
}

export default SwiperBanner;