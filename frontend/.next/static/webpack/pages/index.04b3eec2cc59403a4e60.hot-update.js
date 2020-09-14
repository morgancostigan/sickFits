webpackHotUpdate_N_E("pages/index",{

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: default, CURRENT_USER_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CURRENT_USER_QUERY\", function() { return CURRENT_USER_QUERY; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/react-apollo.esm.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master/sick-fits/frontend/components/User.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\" \\n    query {\\n        me {\\n            id\\n            email\\n            name\\n            permissions\\n            cart {\\n                id\\n                quantity\\n                item {\\n                    id\\n                    title\\n                    image\\n                    price\\n                    description\\n                }\\n            }\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar CURRENT_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());\n\nvar User = function User(props) {\n  return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_3__[\"Query\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    query: CURRENT_USER_QUERY,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }), function (payload) {\n    return props.children(payload);\n  });\n};\n\n_c = User;\nUser.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\n\nvar _c;\n\n$RefreshReg$(_c, \"User\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyLmpzPzU2NTgiXSwibmFtZXMiOlsiQ1VSUkVOVF9VU0VSX1FVRVJZIiwiZ3FsIiwiVXNlciIsInByb3BzIiwicGF5bG9hZCIsImNoaWxkcmVuIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGtCQUFrQixHQUFHQyxrREFBSCxtQkFBeEI7O0FBc0JBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUFDLEtBQUs7QUFBQSxTQUNkLE1BQUMsa0RBQUQseUZBQVdBLEtBQVg7QUFBa0IsU0FBSyxFQUFFSCxrQkFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNLLFVBQUFJLE9BQU87QUFBQSxXQUFJRCxLQUFLLENBQUNFLFFBQU4sQ0FBZUQsT0FBZixDQUFKO0FBQUEsR0FEWixDQURjO0FBQUEsQ0FBbEI7O0tBQU1GLEk7QUFNTkEsSUFBSSxDQUFDSSxTQUFMLEdBQWlCO0FBQ2JELFVBQVEsRUFBRUUsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURaLENBQWpCO0FBSWVQLG1FQUFmO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IENVUlJFTlRfVVNFUl9RVUVSWSA9IGdxbGAgXG4gICAgcXVlcnkge1xuICAgICAgICBtZSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgZW1haWxcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIHBlcm1pc3Npb25zXG4gICAgICAgICAgICBjYXJ0IHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIHF1YW50aXR5XG4gICAgICAgICAgICAgICAgaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgIHByaWNlXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYDtcblxuY29uc3QgVXNlciA9IHByb3BzID0+IChcbiAgICA8UXVlcnkgey4uLnByb3BzfSBxdWVyeT17Q1VSUkVOVF9VU0VSX1FVRVJZfT5cbiAgICAgICAge3BheWxvYWQgPT4gcHJvcHMuY2hpbGRyZW4ocGF5bG9hZCl9XG4gICAgPC9RdWVyeT5cbilcblxuVXNlci5wcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG5leHBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfTsgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/User.js\n");

/***/ })

})