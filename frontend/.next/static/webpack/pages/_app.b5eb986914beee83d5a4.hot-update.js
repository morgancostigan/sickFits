webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/CartItem.js":
/*!********************************!*\
  !*** ./components/CartItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/formatMoney */ \"./lib/formatMoney.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master/sick-fits/frontend/components/CartItem.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar CartItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].li.withConfig({\n  displayName: \"CartItem__CartItemStyles\",\n  componentId: \"sc-1rm9l7o-0\"\n})([\"\"]); //end CartItemStyles\n\n_c = CartItemStyles;\n\nvar CartItem = function CartItem(_ref) {\n  var cartItem = _ref.cartItem;\n  return __jsx(CartItemStyles, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    width: \"100\",\n    src: cartItem.item.image,\n    alt: cartItem.item.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    claasName: \"cart-item-details\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }, cartItem.item.title), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }, Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cartItem.item.price), ' * ', __jsx(\"em\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  }, cartItem.quantity, \" \\xD7 \"))));\n}; // end CartItem \n\n\n_c2 = CartItem;\nCartItem.propTypes = {\n  cartItem: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartItem);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CartItemStyles\");\n$RefreshReg$(_c2, \"CartItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0SXRlbS5qcz81YWNmIl0sIm5hbWVzIjpbIkNhcnRJdGVtU3R5bGVzIiwic3R5bGVkIiwibGkiLCJDYXJ0SXRlbSIsImNhcnRJdGVtIiwiaXRlbSIsImltYWdlIiwidGl0bGUiLCJmb3JtYXRNb25leSIsInByaWNlIiwicXVhbnRpdHkiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHQyx5REFBTSxDQUFDQyxFQUFWO0FBQUE7QUFBQTtBQUFBLFFBQXBCLEMsQ0FFRTs7S0FGSUYsYzs7QUFJTixJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLE1BQUVDLFFBQUYsUUFBRUEsUUFBRjtBQUFBLFNBQ2IsTUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLFNBQUssRUFBQyxLQUFYO0FBQWlCLE9BQUcsRUFBRUEsUUFBUSxDQUFDQyxJQUFULENBQWNDLEtBQXBDO0FBQTJDLE9BQUcsRUFBRUYsUUFBUSxDQUFDQyxJQUFULENBQWNFLEtBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtILFFBQVEsQ0FBQ0MsSUFBVCxDQUFjRSxLQUFuQixDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQyxnRUFBVyxDQUFDSixRQUFRLENBQUNDLElBQVQsQ0FBY0ksS0FBZixDQURoQixFQUVLLEtBRkwsRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tMLFFBQVEsQ0FBQ00sUUFEZCxXQUhKLENBRkosQ0FGSixDQURhO0FBQUEsQ0FBakIsQyxDQWVDOzs7TUFmS1AsUTtBQWlCTkEsUUFBUSxDQUFDUSxTQUFULEdBQXFCO0FBQ2pCUCxVQUFRLEVBQUVRLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBRFYsQ0FBckI7QUFJZVgsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnRJdGVtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmb3JtYXRNb25leSBmcm9tICcuLi9saWIvZm9ybWF0TW9uZXknO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBDYXJ0SXRlbVN0eWxlcyA9IHN0eWxlZC5saSBgXG5cbmA7Ly9lbmQgQ2FydEl0ZW1TdHlsZXNcblxuY29uc3QgQ2FydEl0ZW0gPSAoe2NhcnRJdGVtfSkgPT4gXG4gICAgPENhcnRJdGVtU3R5bGVzPlxuICAgICAgICA8aW1nIHdpZHRoPScxMDAnIHNyYz17Y2FydEl0ZW0uaXRlbS5pbWFnZX0gYWx0PXtjYXJ0SXRlbS5pdGVtLnRpdGxlfSAvPlxuICAgICAgICA8ZGl2IGNsYWFzTmFtZT1cImNhcnQtaXRlbS1kZXRhaWxzXCI+XG4gICAgICAgICAgICA8aDM+e2NhcnRJdGVtLml0ZW0udGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIHtmb3JtYXRNb25leShjYXJ0SXRlbS5pdGVtLnByaWNlKX1cbiAgICAgICAgICAgICAgICB7JyAqICd9XG4gICAgICAgICAgICAgICAgPGVtPlxuICAgICAgICAgICAgICAgICAgICB7Y2FydEl0ZW0ucXVhbnRpdHl9ICZ0aW1lczsge31cbiAgICAgICAgICAgICAgICA8L2VtPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICA8L0NhcnRJdGVtU3R5bGVzPlxuOy8vIGVuZCBDYXJ0SXRlbSBcblxuQ2FydEl0ZW0ucHJvcFR5cGVzID0ge1xuICAgIGNhcnRJdGVtOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRJdGVtOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CartItem.js\n");

/***/ })

})