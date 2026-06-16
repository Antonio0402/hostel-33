/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main-features/block.json":
/*!**************************************!*\
  !*** ./src/main-features/block.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"hostel-33/main-features","title":"Hostel 33 Main Features","editorScript":"file:./index.js","render":"file:./render.php"}');

/***/ }),

/***/ "./src/main-features/edit.jsx":
/*!************************************!*\
  !*** ./src/main-features/edit.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template */ "./src/main-features/template.jsx");






function EditComponent({
  attributes,
  setAttributes
}) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'expanded-container',
    style: {
      marginInline: 'auto'
    }
  });
  const {
    mainImage,
    heading,
    subHeading
  } = attributes;
  const onSelectImage = newImage => {
    setAttributes({
      mainImage: {
        url: newImage.url,
        alt: newImage.alt
      }
    });
  };
  const onRemoveImage = () => {
    setAttributes({
      mainImage: {
        url: '',
        alt: ''
      }
    });
  };
  const onSelectImageURL = newUrl => {
    setAttributes({
      mainImage: {
        url: newUrl,
        alt: ''
      }
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "two-column-section",
    "data-section": "selling-points"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "points"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    class: "title | text-600 color-primary"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PlainText, {
    value: heading,
    onChange: content => setAttributes({
      heading: content
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Heading', 'hostel-33')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    allowedBlocks: [],
    template: _template__WEBPACK_IMPORTED_MODULE_5__["default"],
    templateLock: "all",
    renderAppender: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.ButtonBlockAppender, null)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "img-wrapper"
  }, mainImage.url ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaReplaceFlow, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Replace Image', 'hostel-33'),
    onSelect: onSelectImage,
    onSelectURL: onSelectImageURL,
    accept: "image/*",
    allowedTypes: ['image'],
    mediaURL: mainImage.url
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
    onClick: onRemoveImage
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(`Remove Main Image`, 'hostel-33')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: mainImage.url,
    alt: mainImage.alt
  }), (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_4__.isBlobURL)(mainImage.url) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, null)) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaPlaceholder, {
    onSelect: onSelectImage,
    onSelectURL: onSelectImageURL,
    accept: "image/*",
    allowedTypes: ['image'],
    disableMediaButtons: !!mainImage.url
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditComponent);

/***/ }),

/***/ "./src/main-features/template.jsx":
/*!****************************************!*\
  !*** ./src/main-features/template.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const TEMPLATE = [['core/group', {
  className: 'point-list',
  tagName: 'ul'
}, [['core/group', {
  className: 'text-500 color-black',
  tagName: 'li'
}, [['font-awesome/icon'], ['core/paragraph', {
  content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Free parking.', 'hostel-33'),
  tagName: 'span'
}]]], ['core/group', {
  className: 'text-500 color-black',
  tagName: 'li'
}, [['font-awesome/icon'], ['core/paragraph', {
  content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Free parking.', 'hostel-33'),
  tagName: 'span'
}]]], ['core/group', {
  className: 'text-500 color-black',
  tagName: 'li'
}, [['font-awesome/icon'], ['core/paragraph', {
  content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Free parking.', 'hostel-33'),
  tagName: 'span'
}]]], ['core/group', {
  className: 'text-500 color-black',
  tagName: 'li'
}, [['font-awesome/icon'], ['core/paragraph', {
  content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Free parking.', 'hostel-33'),
  tagName: 'span'
}]]], ['core/group', {
  className: 'text-500 color-black',
  tagName: 'li'
}, [['font-awesome/icon'], ['core/paragraph', {
  content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Free parking.', 'hostel-33'),
  tagName: 'span'
}]]], ['core/group', {
  className: 'text-500 color-black',
  tagName: 'li'
}, [['font-awesome/icon'], ['core/paragraph', {
  content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Free parking.', 'hostel-33'),
  tagName: 'span'
}]]]]], ['hostel-33/cta-button', {
  content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Choose your room', 'hostel-33'),
  style: 'btn-outline',
  size: 'base',
  tagName: 'button',
  disableIcon: true
}]];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TEMPLATE);

/***/ }),

/***/ "@wordpress/blob":
/*!******************************!*\
  !*** external ["wp","blob"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["blob"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!*************************************!*\
  !*** ./src/main-features/index.jsx ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/main-features/edit.jsx");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/main-features/block.json");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  attributes: {
    heading: {
      type: 'string',
      default: 'We offer for guest'
    },
    mainImage: {
      type: 'object',
      default: {
        url: '',
        alt: ''
      }
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: SaveComponent
});
function SaveComponent({
  attributes
}) {
  const {
    heading,
    mainImage
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: 'expanded-container'
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "two-column-section",
    "data-section": "selling-points"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "points"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    class: "title | text-600 color-primary"
  }, heading), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "img-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: mainImage.url,
    alt: mainImage.alt
  }))));
}
})();

/******/ })()
;
//# sourceMappingURL=index.js.map