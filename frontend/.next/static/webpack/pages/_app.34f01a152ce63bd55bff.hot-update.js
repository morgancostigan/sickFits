webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/CartCount.js":
/*!*********************************!*\
  !*** ./components/CartCount.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/index.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master/sick-fits/frontend/components/CartCount.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar AnimationStyles = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span.withConfig({\n  displayName: \"CartCount__AnimationStyles\",\n  componentId: \"xxvp4g-0\"\n})([\"position:relative;.count{display:block;position:relative;trans}\"]); //end AnimationStyles styles\n\nvar Dot = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"CartCount__Dot\",\n  componentId: \"xxvp4g-1\"\n})([\"background:\", \";color:white;border-radius:50%;padding:0.5rem;line-height:2rem;min-width:3rem;margin-left:1rem;font-weight:100;font-feature-settings:\\\"tnum\\\";font-variant-numeric:tabular-nums;\"], function (props) {\n  return props.theme.red;\n}); //end Dot styles\n\n_c = Dot;\n\nvar CartCount = function CartCount(_ref) {\n  var count = _ref.count;\n  return __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_3__[\"TransitionGroup\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_3__[\"CSSTransition\"], {\n    unmountOnExit: true,\n    className: \"count\",\n    classNames: \"count\",\n    key: count,\n    timeout: {\n      enter: 4000,\n      exit: 4000\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(Dot, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, count)));\n}; //end CartCount\n\n\n_c2 = CartCount;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartCount);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Dot\");\n$RefreshReg$(_c2, \"CartCount\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0Q291bnQuanM/NmE4ZiJdLCJuYW1lcyI6WyJBbmltYXRpb25TdHlsZXMiLCJzdHlsZWQiLCJzcGFuIiwiRG90IiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInJlZCIsIkNhcnRDb3VudCIsImNvdW50IiwiZW50ZXIiLCJleGl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsSUFBVjtBQUFBO0FBQUE7QUFBQSx1RUFBckIsQyxDQU9FOztBQUVGLElBQU1DLEdBQUcsR0FBR0YseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSx3TUFDUyxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEdBQWhCO0FBQUEsQ0FEZCxDQUFULEMsQ0FXRTs7S0FYSUosRzs7QUFhTixJQUFNSyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQ2QsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxvRUFBRDtBQUFlLGlCQUFhLE1BQTVCO0FBQ0EsYUFBUyxFQUFDLE9BRFY7QUFDa0IsY0FBVSxFQUFDLE9BRDdCO0FBRUEsT0FBRyxFQUFFQSxLQUZMO0FBRVksV0FBTyxFQUFFO0FBQUVDLFdBQUssRUFBRSxJQUFUO0FBQWVDLFVBQUksRUFBRTtBQUFyQixLQUZyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUksTUFBQyxHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTUYsS0FBTixDQUpKLENBREosQ0FEYztBQUFBLENBQWxCLEMsQ0FTQzs7O01BVEtELFM7QUFXU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnRDb3VudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7IFxuaW1wb3J0IHsgVHJhbnNpdGlvbkdyb3VwLCBDU1NUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tICcuL1VzZXInO1xuXG5jb25zdCBBbmltYXRpb25TdHlsZXMgPSBzdHlsZWQuc3BhbmBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmNvdW50e1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0cmFuc1xuICAgIH1cbmA7Ly9lbmQgQW5pbWF0aW9uU3R5bGVzIHN0eWxlc1xuXG5jb25zdCBEb3QgPSBzdHlsZWQuZGl2YFxuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucmVkfTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICBtaW4td2lkdGg6IDNyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwidG51bVwiO1xuICAgIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XG5gOy8vZW5kIERvdCBzdHlsZXNcblxuY29uc3QgQ2FydENvdW50ID0gKHsgY291bnQgfSkgPT4gXG4gICAgPFRyYW5zaXRpb25Hcm91cD5cbiAgICAgICAgPENTU1RyYW5zaXRpb24gdW5tb3VudE9uRXhpdFxuICAgICAgICBjbGFzc05hbWU9XCJjb3VudFwiIGNsYXNzTmFtZXM9XCJjb3VudFwiIFxuICAgICAgICBrZXk9e2NvdW50fSB0aW1lb3V0PXt7IGVudGVyOiA0MDAwLCBleGl0OiA0MDAwIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxEb3Q+e2NvdW50fTwvRG90PlxuICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgPC9UcmFuc2l0aW9uR3JvdXA+XG47Ly9lbmQgQ2FydENvdW50XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRDb3VudDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CartCount.js\n");

/***/ })

})