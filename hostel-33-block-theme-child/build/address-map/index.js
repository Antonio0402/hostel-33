/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/address-map/AddressItem.jsx":
/*!*****************************************!*\
  !*** ./src/address-map/AddressItem.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const AddressItem = ({
  title,
  iconClass,
  value,
  onChange,
  placeholder,
  prefix = ''
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "address-item"
  }, title && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    className: "title"
  }, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `fa-solid ${iconClass} fa-lg color-primary`
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "text-500 color-black"
  }, prefix, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    tagName: "span"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddressItem);

/***/ }),

/***/ "./src/address-map/MapContainer.jsx":
/*!******************************************!*\
  !*** ./src/address-map/MapContainer.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const MapContainer = ({
  mapEmbedKey,
  onEdit,
  onChange
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "map-container"
  }, mapEmbedKey ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
    icon: "edit",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Edit Map Embed Key', 'hostel-33'),
    onClick: onEdit
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
    src: `https://www.google.com/maps/embed?${mapEmbedKey}`,
    width: "640",
    height: "480",
    style: {
      border: 0
    },
    allowFullScreen: true,
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade"
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "text-500 color-black"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Map Embed Key: ', 'hostel-33'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PlainText, {
    value: mapEmbedKey,
    onChange: onChange,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Enter your map embed key', 'hostel-33'),
    tagName: "span"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapContainer);

/***/ }),

/***/ "./src/address-map/block.json":
/*!************************************!*\
  !*** ./src/address-map/block.json ***!
  \************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"hostel-33/address-map","title":"Hostel 33 Address Map","category":"hostel-33","editorScript":"file:./index.js","render":"file:./render.php"}');

/***/ }),

/***/ "./src/address-map/constant.js":
/*!*************************************!*\
  !*** ./src/address-map/constant.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   POST_META_BRANCH: () => (/* binding */ POST_META_BRANCH)
/* harmony export */ });
const POST_META_BRANCH = {
  addressDetail: 'address_detail',
  phone: 'phone_number',
  email: 'branch_email',
  mapEmbedKey: 'map_embed_location'
};

/***/ }),

/***/ "./src/address-map/edit.jsx":
/*!**********************************!*\
  !*** ./src/address-map/edit.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant */ "./src/address-map/constant.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _AddressItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddressItem */ "./src/address-map/AddressItem.jsx");
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MapContainer */ "./src/address-map/MapContainer.jsx");








function EditComponent({
  attributes,
  setAttributes
}) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: "address-container"
  });
  const {
    branchId,
    addressDetail,
    phone,
    email,
    mapEmbedKey
  } = attributes;
  // Retrieve branchId from cookies
  // Retrieve branchId from cookies and update the block's attributes
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const cookieBranchId = document.cookie.split('; ').find(row => row.startsWith('hostel33_branch='))?.split('=')[1];
    if (cookieBranchId && cookieBranchId !== branchId) {
      setAttributes({
        branchId: cookieBranchId
      });
    }
  }, [branchId]);

  // Fetch post meta data
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (!branchId) return;
    if (branchId) {
      // Fetch post meta using the REST API
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
        path: `/wp/v2/branch/${branchId}`
      }).then(post => {
        // Assuming 'your_meta_key' is the meta key registered in PHP
        const meta = post.acf || {};
        const postMetaValues = Object.values(_constant__WEBPACK_IMPORTED_MODULE_3__.POST_META_BRANCH);
        const postMetaKeys = Object.keys(_constant__WEBPACK_IMPORTED_MODULE_3__.POST_META_BRANCH);
        const updatedAttributes = [addressDetail, phone, email, mapEmbedKey].reduce((acc, curr, index) => {
          if (!curr) {
            acc[postMetaKeys[index]] = meta[postMetaValues[index]] || '';
          }
          return acc;
        }, {});
        setAttributes(updatedAttributes);
      }).catch(error => {
        console.error('Error fetching post meta:', error);
      });
    }
  }, [branchId]);

  // Update post meta data
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (!branchId) return;
    // Update post meta using the REST API
    const postMetaKeys = Object.values(_constant__WEBPACK_IMPORTED_MODULE_3__.POST_META_BRANCH);
    const updatedMeta = [addressDetail, phone, email, mapEmbedKey].reduce((acc, curr, index) => {
      if (curr) {
        acc[postMetaKeys[index]] = curr;
      }
      return acc;
    }, {});
    if (!Object.keys(updatedMeta).length) return;
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
      path: `/wp/v2/branch/${branchId}`,
      method: 'POST',
      data: {
        meta: updatedMeta
      }
    }).then(response => {
      console.log('Post meta updated successfully:', response);
    }).catch(error => {
      console.error('Error updating post meta:', error);
    });
  }, [addressDetail, phone, email, mapEmbedKey]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "address"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AddressItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Address', 'hostel-33'),
    iconClass: "fa-map-marker-alt",
    value: addressDetail,
    onChange: value => setAttributes({
      addressDetail: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enter address', 'hostel-33')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AddressItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Contact Details', 'hostel-33'),
    iconClass: "fa-phone",
    value: phone,
    onChange: value => setAttributes({
      phone: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enter phone number', 'hostel-33'),
    prefix: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Phone: ', 'hostel-33')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AddressItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    iconClass: "fa-envelope",
    value: email,
    onChange: value => setAttributes({
      email: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Enter email address', 'hostel-33'),
    prefix: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Email: ', 'hostel-33')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MapContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mapEmbedKey: mapEmbedKey,
    onEdit: () => setAttributes({
      mapEmbedKey: ''
    }),
    onChange: value => setAttributes({
      mapEmbedKey: value
    })
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditComponent);

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

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

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

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
/*!***********************************!*\
  !*** ./src/address-map/index.jsx ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/address-map/edit.jsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/address-map/block.json");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  attributes: {
    addressDetail: {
      type: 'string'
    },
    phone: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    mapEmbedKey: {
      type: 'string'
    },
    branchId: {
      type: 'number'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: SaveComponent
});
function SaveComponent({
  attributes
}) {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: "address-container"
  });
  const {
    addressDetail,
    phone,
    email,
    mapEmbedKey
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "address"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "address-item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    class: "title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Address', 'hostel-33')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    class: "fa-solid fa-map-marker-alt fa-lg color-primary"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "text-500 color-black"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(addressDetail, 'hostel-33')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "address-item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    class: "title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Contact Details', 'hostel-33')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    class: "fa-solid fa-phone fa-lg color-primary"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "text-500 color-black"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(`Phone: ${phone}`, 'hostel-33'))), email && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    class: "fa-solid fa-envelope fa-lg color-primary"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "text-500 color-black"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(`Email: ${email}`, 'hostel-33'))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "map-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
    src: `https://www.google.com/maps/embed?${mapEmbedKey} width=" 640" height="480" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`
  })));
}
})();

/******/ })()
;
//# sourceMappingURL=index.js.map