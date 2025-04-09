/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!********************************!*\
  !*** ./src/js/contact-form.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const CONTACT_ITEM_NAMES = ['name', 'email', 'message'];
class ContactForm {
  constructor() {
    this.form = document.getElementById('hostel33-contact-form');
    if (!this.form) return;
    this.timeout = null;
    this.initForm();
  }
  initForm(e) {
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.submitForm();
    });
  }
  async submitForm() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    const messageEl = this.form.querySelector('.contact-form-message');
    const contactItemData = {};
    const contactFormItem = this.form.querySelectorAll('.contact-form-item');
    contactFormItem.forEach(formItem => {
      const itemEl = formItem.querySelector('input, textarea');
      const itemName = itemEl.getAttribute('name').replace('contact-form-', '').trim();
      if (CONTACT_ITEM_NAMES.includes(itemName)) {
        contactItemData[itemName] = itemEl.value;
      }
    });
    try {
      const formData = new FormData();
      formData.append('action', contactFormAjaxData?.action);
      formData.append('nonce', contactFormAjaxData?.nonce);
      Object.keys(contactItemData).forEach(key => {
        formData.append(key, contactItemData[key]);
      });
      const response = await fetch(supportFormAjaxData.ajax_url, {
        method: 'POST',
        headers: {
          'X-WP-Nonce': contactFormAjaxData.nonce
        },
        body: formData
      });
      const data = await response.json();
      if (data.success && !data.data.message) {
        // Reset form
        this.form.reset();

        // Trigger Popup Maker popup
        if (typeof PUM !== 'undefined' && data.data.popup_id) {
          /* Only open in 5s then close it*/
          PUM.open(data.data.popup_id);
          this.timeout = setTimeout(() => {
            PUM.close(data.data.popup_id);
          }, 1000);
        }
      } else {
        // Error case - wp_send_json_error() response
        let errorMessage = 'An error occurred during submission.';

        // Extract error message from WordPress response
        if (data.data) {
          errorMessage = typeof data.data === 'string' ? data.data : data.data.message || errorMessage;
        }

        // Show error message
        messageEl.innerHTML = `<p class="error">${errorMessage}</p>`;
      }
    } catch (error) {
      console.error('Form submission error:', error);
      messageEl.innerHTML = '<p class="error">An unexpected error occurred. Please try again.</p>';
    }
  }
}
document.addEventListener('DOMContentLoaded', () => {
  new ContactForm();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);
/******/ })()
;
//# sourceMappingURL=contact-form.js.map