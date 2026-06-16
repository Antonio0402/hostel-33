/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/branch-switch.js":
/*!*********************************!*\
  !*** ./src/js/branch-switch.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _swiper_banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swiper-banner */ "./src/js/swiper-banner.js");

class BranchSwitch {
  constructor() {
    this.branchSwitch = document.querySelector('.switch-group');
    if (!this.branchSwitch) return;
    this.bindEvents();
  }
  bindEvents() {
    const switchButton = this.branchSwitch.querySelectorAll('input');
    switchButton.forEach(button => {
      button.addEventListener('change', e => this.switchBranch(e));
    });
  }
  switchBranch(e) {
    const target = e.currentTarget;
    const branch = target.getAttribute('data-checked');
    const labels = this.branchSwitch.querySelectorAll('label');
    this.loader = this.branchSwitch.parentElement.parentElement.querySelector('.loader');
    this.roomSlider = this.branchSwitch.parentElement.parentElement.querySelector('.room-slider');
    labels.forEach(label => {
      label.classList.remove('active');
    });
    target.nextElementSibling.classList.add('active');
    this.handleSwitch(branch);
  }
  async handleSwitch(branch) {
    try {
      this.loader.style.display = 'block';
      this.roomSlider.style.display = 'none';
      // Create FormData instead of JSON
      const formData = new FormData();
      formData.append('action', switchAjaxData.action); // 'switch_branch'
      formData.append('branch', branch);
      formData.append('nonce', switchAjaxData.nonce);
      const response = await fetch(`${switchAjaxData.ajax_url}`, {
        method: 'POST',
        headers: {
          'X-WP-Nonce': switchAjaxData.nonce
        },
        body: formData
      });
      const result = await response.text();
      if (result) {
        if (this.roomSlider) {
          this.roomSlider.innerHTML = result;
          this.roomSlider.style.display = 'revert';
          this.loader.style.display = 'none';
        }
        const roomSliderSwiper = new _swiper_banner__WEBPACK_IMPORTED_MODULE_0__["default"]('.room-slider');
      } else {
        console.error('No response from the server');
      }
    } catch (error) {
      console.error(error);
    }
  }
}
new BranchSwitch();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BranchSwitch);

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
/*!*******************************!*\
  !*** ./src/js/address-map.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _branch_switch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./branch-switch.js */ "./src/js/branch-switch.js");

class AddressMap extends _branch_switch_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this.addressSection = document.querySelector('.address-section');
    if (!this.addressSection) return;
    this.listenToBranchSwitch();
  }
  listenToBranchSwitch() {
    const switchButton = this.branchSwitch.querySelectorAll('input');
    switchButton.forEach(button => {
      button.addEventListener('change', e => this.updateData(e));
    });
  }
  updateData(e) {
    const target = e.currentTarget;
    const branch = target.getAttribute('data-checked');
    this.handleAddress(branch);
  }
  async handleAddress(branch) {
    try {
      // Create FormData instead of JSON
      const formData = new FormData();
      formData.append('action', addressAjaxData.action);
      formData.append('branch', branch);
      formData.append('nonce', addressAjaxData.nonce);
      const response = await fetch(`${addressAjaxData.ajax_url}`, {
        method: 'POST',
        headers: {
          'X-WP-Nonce': addressAjaxData.nonce
        },
        body: formData
      });
      const result = await response.text();
      if (result) {
        this.addressSection.innerHTML = result;
      } else {
        console.error('No response from the server');
      }
    } catch (error) {
      console.error(error);
    }
  }
}
// Initialize form when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new AddressMap();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddressMap);
})();

/******/ })()
;
//# sourceMappingURL=address-map.js.map