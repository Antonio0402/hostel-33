/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
        bullet.addEventListener('click', e => {
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
/* harmony import */ var _swiper_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swiper-banner */ "./src/js/swiper-banner.js");



// Initialize components
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('swiper-container')) {
    new _swiper_banner__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map