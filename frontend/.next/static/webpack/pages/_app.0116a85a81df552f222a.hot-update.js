webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/CartItem.js":
/*!********************************!*\
  !*** ./components/CartItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/formatMoney */ \"./lib/formatMoney.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _RemoveFromCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RemoveFromCart */ \"./components/RemoveFromCart.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master/sick-fits/frontend/components/CartItem.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar CartItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].li.withConfig({\n  displayName: \"CartItem__CartItemStyles\",\n  componentId: \"sc-1rm9l7o-0\"\n})([\"padding:1rem 0;border-bottom:1px solid \", \";display:grid;align-items:center;grid-template-columns:auto 1fr auto;img{margin-right:10px;};h3,p{margin:0;};\"], function (props) {\n  return props.theme.lightgrey;\n}); //end CartItemStyles\n\n_c = CartItemStyles;\n\nvar CartItem = function CartItem(_ref) {\n  var cartItem = _ref.cartItem;\n  return __jsx(CartItemStyles, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    width: \"100\",\n    src: cartItem.item.image,\n    alt: cartItem.item.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    claasName: \"cart-item-details\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, cartItem.item.title), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cartItem.item.price * cartItem.quantity), ' --- ', __jsx(\"em\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 17\n    }\n  }, cartItem.quantity, \" \\xD7 \", Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cartItem.item.price), \" each\"))), __jsx(_RemoveFromCart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    id: cartItem.id,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }));\n}; // end CartItem \n\n\n_c2 = CartItem;\nCartItem.propTypes = {\n  cartItem: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartItem);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CartItemStyles\");\n$RefreshReg$(_c2, \"CartItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0SXRlbS5qcz81YWNmIl0sIm5hbWVzIjpbIkNhcnRJdGVtU3R5bGVzIiwic3R5bGVkIiwibGkiLCJwcm9wcyIsInRoZW1lIiwibGlnaHRncmV5IiwiQ2FydEl0ZW0iLCJjYXJ0SXRlbSIsIml0ZW0iLCJpbWFnZSIsInRpdGxlIiwiZm9ybWF0TW9uZXkiLCJwcmljZSIsInF1YW50aXR5IiwiaWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHQyx5REFBTSxDQUFDQyxFQUFWO0FBQUE7QUFBQTtBQUFBLGlLQUVXLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsU0FBaEI7QUFBQSxDQUZoQixDQUFwQixDLENBWUU7O0tBWklMLGM7O0FBY04sSUFBTU0sUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxNQUFFQyxRQUFGLFFBQUVBLFFBQUY7QUFBQSxTQUNiLE1BQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxTQUFLLEVBQUMsS0FBWDtBQUFpQixPQUFHLEVBQUVBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxLQUFwQztBQUEyQyxPQUFHLEVBQUVGLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjRSxLQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLSCxRQUFRLENBQUNDLElBQVQsQ0FBY0UsS0FBbkIsQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0MsZ0VBQVcsQ0FBQ0osUUFBUSxDQUFDQyxJQUFULENBQWNJLEtBQWQsR0FBc0JMLFFBQVEsQ0FBQ00sUUFBaEMsQ0FEaEIsRUFFSyxPQUZMLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLTixRQUFRLENBQUNNLFFBRGQsWUFDaUNGLGdFQUFXLENBQUNKLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjSSxLQUFmLENBRDVDLFVBSEosQ0FGSixDQUZKLEVBWUksTUFBQyx1REFBRDtBQUFnQixNQUFFLEVBQUVMLFFBQVEsQ0FBQ08sRUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpKLENBRGE7QUFBQSxDQUFqQixDLENBZ0JDOzs7TUFoQktSLFE7QUFrQk5BLFFBQVEsQ0FBQ1MsU0FBVCxHQUFxQjtBQUNqQlIsVUFBUSxFQUFFUyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURWLENBQXJCO0FBSWVaLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJ0SXRlbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSAnLi4vbGliL2Zvcm1hdE1vbmV5JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZW1vdmVGcm9tQ2FydCBmcm9tICcuL1JlbW92ZUZyb21DYXJ0JztcblxuY29uc3QgQ2FydEl0ZW1TdHlsZXMgPSBzdHlsZWQubGkgYFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5saWdodGdyZXl9O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XG4gICAgaW1nIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH07XG4gICAgaDMsIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfTtcbmA7Ly9lbmQgQ2FydEl0ZW1TdHlsZXNcblxuY29uc3QgQ2FydEl0ZW0gPSAoe2NhcnRJdGVtfSkgPT4gXG4gICAgPENhcnRJdGVtU3R5bGVzPlxuICAgICAgICA8aW1nIHdpZHRoPScxMDAnIHNyYz17Y2FydEl0ZW0uaXRlbS5pbWFnZX0gYWx0PXtjYXJ0SXRlbS5pdGVtLnRpdGxlfSAvPlxuICAgICAgICA8ZGl2IGNsYWFzTmFtZT1cImNhcnQtaXRlbS1kZXRhaWxzXCI+XG4gICAgICAgICAgICA8aDM+e2NhcnRJdGVtLml0ZW0udGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIHtmb3JtYXRNb25leShjYXJ0SXRlbS5pdGVtLnByaWNlICogY2FydEl0ZW0ucXVhbnRpdHkpfVxuICAgICAgICAgICAgICAgIHsnIC0tLSAnfVxuICAgICAgICAgICAgICAgIDxlbT5cbiAgICAgICAgICAgICAgICAgICAge2NhcnRJdGVtLnF1YW50aXR5fSAmdGltZXM7IHtmb3JtYXRNb25leShjYXJ0SXRlbS5pdGVtLnByaWNlKX0gZWFjaFxuICAgICAgICAgICAgICAgIDwvZW0+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8UmVtb3ZlRnJvbUNhcnQgaWQ9e2NhcnRJdGVtLmlkfS8+XG4gICAgXG4gICAgPC9DYXJ0SXRlbVN0eWxlcz5cbjsvLyBlbmQgQ2FydEl0ZW0gXG5cbkNhcnRJdGVtLnByb3BUeXBlcyA9IHtcbiAgICBjYXJ0SXRlbTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0SXRlbTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CartItem.js\n");

/***/ })

})