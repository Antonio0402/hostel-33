/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/menu-hamburger.js":
/*!**********************************!*\
  !*** ./src/js/menu-hamburger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class HamburgerMenu {
  constructor() {
    this.header = document.getElementById('masthead');
    this.menu = document.querySelector('.menu-hamburger');
    this.nav = document.getElementById('primary-menu');
    this.overlay = document.querySelector('#masthead .overlay');
    this.events();
  }
  events() {
    this.menu.addEventListener('click', () => this.toggleMenu());
    window.addEventListener('resize', () => {
      if (window.innerWidth > 640) {
        this.closeMenu();
        this.fadeOut(this.overlay);
      }
    });
    window.addEventListener('click', e => {
      if (e.target.closest('.menu-hamburger') === null && e.target.closest('#primary-menu') === null) {
        this.closeMenu();
        this.fadeOut(this.overlay);
      }
    });
  }
  toggleMenu() {
    if (this.menu.getAttribute('aria-expanded') === 'true') {
      this.menu.setAttribute('aria-expanded', 'false');
      this.nav.dataset.visible = 'false';
      this.fadeOut(this.nav);
      this.fadeOut(this.overlay);
      setTimeout(() => {
        this.nav.classList.remove('fade-out');
      }, 1000);
    } else {
      this.menu.setAttribute('aria-expanded', 'true');
      this.nav.dataset.visible = 'true';
      this.fadeIn(this.nav);
      this.fadeIn(this.overlay);
    }
  }
  closeMenu() {
    this.menu.setAttribute('aria-expanded', 'false');
    this.nav.dataset.visible = 'false';
  }
  fadeOut = element => {
    element.classList.remove('fade-in');
    element.classList.add('fade-out');
  };
  fadeIn = element => {
    element.classList.remove('fade-out');
    element.classList.add('fade-in');
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HamburgerMenu);

/***/ }),

/***/ "./src/js/smooth-scroll.js":
/*!*********************************!*\
  !*** ./src/js/smooth-scroll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class SmoothScroll {
  constructor(props) {
    const {
      target,
      targetPosition,
      duration,
      easing,
      callback
    } = props;
    this.target = target;
    this.targetPosition = targetPosition || this.target?.offsetTop || 0;
    this.duration = duration || 800;
    this.easing = easing || 'easeInOutQuad';
    this.callback = callback || null;
    this.smoothScrollTo = this.smoothScrollTo.bind(this);
    this.init();
  }
  init() {
    if (!this.target) return;
    this.target.addEventListener('click', this.smoothScrollTo);
  }
  static smoothScrollTo(targetPosition, duration = 800, easingName = 'easeInOutQuad', callback) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    // Easing functions
    const easings = {
      linear: t => t,
      easeInQuad: t => t * t,
      easeOutQuad: t => t * (2 - t),
      easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
      easeInCubic: t => t * t * t,
      easeOutCubic: t => --t * t * t + 1,
      easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    };
    const easing = easings[easingName] || easings.easeInOutQuad;

    // Animation loop
    function animate(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easing(progress);
      window.scrollTo(0, startPosition + distance * easedProgress);
      if (timeElapsed < duration) {
        requestAnimationFrame(animate);
      } else {
        if (typeof callback === 'function') callback();
      }
    }

    // Start animation
    requestAnimationFrame(animate);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmoothScroll);

/***/ }),

/***/ "./src/js/sticky-header.js":
/*!*********************************!*\
  !*** ./src/js/sticky-header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smooth_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smooth-scroll */ "./src/js/smooth-scroll.js");

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
    pageBannerScroll.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(pageBannerScroll.getAttribute('data-scroll-to'));
      console.log(target);
      if (target) {
        _smooth_scroll__WEBPACK_IMPORTED_MODULE_0__["default"].smoothScrollTo(target.offsetTop - 120, 800, 'easeInOutCubic');
      }
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StickyHeader);

/***/ }),

/***/ "./src/js/swiper-banner.js":
/*!*********************************!*\
  !*** ./src/js/swiper-banner.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
        bullet.addEventListener('click', e => {
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
      } else {
        this.prev.classList.remove('hidden');
      }
      if (activeIndex === bullets.length - 1) {
        this.next.classList.add('hidden');
      } else {
        this.next.classList.remove('hidden');
      }
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwiperBanner);

/***/ }),

/***/ "./src/stylesheets/main.scss":
/*!***********************************!*\
  !*** ./src/stylesheets/main.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../stylesheets/main.scss */ "./src/stylesheets/main.scss");
/* harmony import */ var _sticky_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sticky-header */ "./src/js/sticky-header.js");
/* harmony import */ var _swiper_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swiper-banner */ "./src/js/swiper-banner.js");
/* harmony import */ var _menu_hamburger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-hamburger */ "./src/js/menu-hamburger.js");




const stickyHeader = new _sticky_header__WEBPACK_IMPORTED_MODULE_1__["default"]();
// const pageBannerSwiper = new SwiperBanner('.page-banner');
const roomSliderSwiper = new _swiper_banner__WEBPACK_IMPORTED_MODULE_2__["default"]('.room-slider');
const hamburgerMenu = new _menu_hamburger__WEBPACK_IMPORTED_MODULE_3__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map