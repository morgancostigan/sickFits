webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/*! exports provided: default, LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOCAL_STATE_QUERY\", function() { return LOCAL_STATE_QUERY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TOGGLE_CART_MUTATION\", function() { return TOGGLE_CART_MUTATION; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/react-apollo.esm.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CartItem */ \"./components/CartItem.js\");\n/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/SickButton */ \"./components/styles/SickButton.js\");\n/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/CartStyles */ \"./components/styles/CartStyles.js\");\n/* harmony import */ var _styles_CloseButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/CloseButton */ \"./components/styles/CloseButton.js\");\n/* harmony import */ var _styles_Supreme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/Supreme */ \"./components/styles/Supreme.js\");\n/* harmony import */ var _lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/calcTotalPrice */ \"./lib/calcTotalPrice.js\");\n/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/formatMoney */ \"./lib/formatMoney.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master/sick-fits/frontend/components/Cart.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    mutation {\\n        toggleCart @client\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    query {\\n        # @client tells apollo this is local and not from db\\n        cartOpen @client\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\n\n\nvar LOCAL_STATE_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject()); //end LOCAL_STATE_QUERY\n\nvar TOGGLE_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2()); //end TOGGLE_CART_MUTATION\n\nvar Cart = function Cart() {\n  return __jsx(_User__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, function (_ref) {\n    var me = _ref.data.me;\n    if (!me) return null;\n    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__[\"Mutation\"], {\n      mutation: TOGGLE_CART_MUTATION,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 13\n      }\n    }, function (toggleCart) {\n      return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__[\"Query\"], {\n        query: LOCAL_STATE_QUERY,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 17\n        }\n      }, function (_ref2) {\n        var data = _ref2.data;\n        return __jsx(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          open: data.cartOpen,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 21\n          }\n        }, __jsx(\"header\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 25\n          }\n        }, __jsx(_styles_CloseButton__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          onClick: toggleCart,\n          title: \"close\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 29\n          }\n        }, \"\\xD7\"), __jsx(_styles_Supreme__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 29\n          }\n        }, me.name, \"'s Cart\"), __jsx(\"p\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 37\n          }\n        }, \"There \", me.cart.length === 1 ? 'is' : 'are', \" \", me.cart.length, \" item\", me.cart.length === 1 ? '' : 's', \" in your cart.\")), __jsx(\"ul\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 25\n          }\n        }, me.cart.map(function (cartItem) {\n          return __jsx(_CartItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            key: cartItem.id,\n            cartItem: cartItem,\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 29\n            }\n          });\n        })), __jsx(\"footer\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 25\n          }\n        }, __jsx(\"p\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 29\n          }\n        }, Object(_lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(me.cart)), __jsx(_styles_SickButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 29\n          }\n        }, \"Check Out\")));\n      });\n    });\n  });\n}; //end \n\n\n_c = Cart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cart);\n\n\nvar _c;\n\n$RefreshReg$(_c, \"Cart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0LmpzP2ZmYzEiXSwibmFtZXMiOlsiTE9DQUxfU1RBVEVfUVVFUlkiLCJncWwiLCJUT0dHTEVfQ0FSVF9NVVRBVElPTiIsIkNhcnQiLCJtZSIsImRhdGEiLCJ0b2dnbGVDYXJ0IiwiY2FydE9wZW4iLCJuYW1lIiwiY2FydCIsImxlbmd0aCIsIm1hcCIsImNhcnRJdGVtIiwiaWQiLCJjYWxjVG90YWxQcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsaUJBQWlCLEdBQUdDLGtEQUFILG1CQUF2QixDLENBS0U7O0FBRUYsSUFBTUMsb0JBQW9CLEdBQUdELGtEQUFILG9CQUExQixDLENBSUU7O0FBRUYsSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxTQUNULE1BQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPLGdCQUFxQjtBQUFBLFFBQVZDLEVBQVUsUUFBbEJDLElBQWtCLENBQVZELEVBQVU7QUFDeEIsUUFBRyxDQUFDQSxFQUFKLEVBQVEsT0FBTyxJQUFQO0FBQ1IsV0FDSSxNQUFDLHFEQUFEO0FBQVUsY0FBUSxFQUFFRixvQkFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDLFVBQUNJLFVBQUQ7QUFBQSxhQUNHLE1BQUMsa0RBQUQ7QUFBTyxhQUFLLEVBQUVOLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUFBLFlBQUVLLElBQUYsU0FBRUEsSUFBRjtBQUFBLGVBQ0csTUFBQywwREFBRDtBQUFZLGNBQUksRUFBRUEsSUFBSSxDQUFDRSxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNJLE1BQUMsMkRBQUQ7QUFBYSxpQkFBTyxFQUFFRCxVQUF0QjtBQUFrQyxlQUFLLEVBQUMsT0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixFQUlJLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFVRixFQUFFLENBQUNJLElBQWIsWUFKSixFQUtZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVVKLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRQyxNQUFSLEtBQW1CLENBQW5CLEdBQXVCLElBQXZCLEdBQThCLEtBQXhDLE9BQWdETixFQUFFLENBQUNLLElBQUgsQ0FBUUMsTUFBeEQsV0FBcUVOLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRQyxNQUFSLEtBQW1CLENBQW5CLEdBQXVCLEVBQXZCLEdBQTRCLEdBQWpHLG1CQUxaLENBREosRUFRSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0tOLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRRSxHQUFSLENBQVksVUFBQUMsUUFBUTtBQUFBLGlCQUNyQixNQUFDLGlEQUFEO0FBQVUsZUFBRyxFQUFFQSxRQUFRLENBQUNDLEVBQXhCO0FBQTRCLG9CQUFRLEVBQUVELFFBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEcUI7QUFBQSxTQUFwQixDQURMLENBUkosRUFjSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFJRSxvRUFBYyxDQUFDVixFQUFFLENBQUNLLElBQUosQ0FBbEIsQ0FESixFQUVJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSixDQWRKLENBREg7QUFBQSxPQURELENBREg7QUFBQSxLQURELENBREo7QUEyQkgsR0E3QkQsQ0FEUztBQUFBLENBQWIsQyxDQStCRTs7O0tBL0JJTixJO0FBaUNTQSxtRUFBZjtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFF1ZXJ5LCBNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCBVc2VyIGZyb20gJy4vVXNlcic7XG5pbXBvcnQgQ2FydEl0ZW0gZnJvbSAnLi9DYXJ0SXRlbSc7XG5pbXBvcnQgU2lja0J1dHRvbiBmcm9tICcuL3N0eWxlcy9TaWNrQnV0dG9uJztcbmltcG9ydCBDYXJ0U3R5bGVzIGZyb20gJy4vc3R5bGVzL0NhcnRTdHlsZXMnO1xuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gJy4vc3R5bGVzL0Nsb3NlQnV0dG9uJztcbmltcG9ydCBTdXByZW1lIGZyb20gJy4vc3R5bGVzL1N1cHJlbWUnO1xuaW1wb3J0IGNhbGNUb3RhbFByaWNlIGZyb20gJy4uL2xpYi9jYWxjVG90YWxQcmljZSc7IFxuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gJy4uL2xpYi9mb3JtYXRNb25leSdcblxuY29uc3QgTE9DQUxfU1RBVEVfUVVFUlkgPSBncWwgYFxuICAgIHF1ZXJ5IHtcbiAgICAgICAgIyBAY2xpZW50IHRlbGxzIGFwb2xsbyB0aGlzIGlzIGxvY2FsIGFuZCBub3QgZnJvbSBkYlxuICAgICAgICBjYXJ0T3BlbiBAY2xpZW50XG4gICAgfVxuYDsvL2VuZCBMT0NBTF9TVEFURV9RVUVSWVxuXG5jb25zdCBUT0dHTEVfQ0FSVF9NVVRBVElPTiA9IGdxbCBgXG4gICAgbXV0YXRpb24ge1xuICAgICAgICB0b2dnbGVDYXJ0IEBjbGllbnRcbiAgICB9XG5gOy8vZW5kIFRPR0dMRV9DQVJUX01VVEFUSU9OXG5cbmNvbnN0IENhcnQgPSAoKSA9PiAoIFxuICAgIDxVc2VyPnsoIHtkYXRhOiB7IG1lIH19KSA9PiB7IFxuICAgICAgICBpZighbWUpIHJldHVybiBudWxsOyAgICAgICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TXV0YXRpb24gbXV0YXRpb249e1RPR0dMRV9DQVJUX01VVEFUSU9OfT5cbiAgICAgICAgICAgIHsodG9nZ2xlQ2FydCkgPT4gKFxuICAgICAgICAgICAgICAgIDxRdWVyeSBxdWVyeT17TE9DQUxfU1RBVEVfUVVFUll9PlxuICAgICAgICAgICAgICAgIHsoe2RhdGF9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxDYXJ0U3R5bGVzIG9wZW49e2RhdGEuY2FydE9wZW59PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VCdXR0b24gb25DbGljaz17dG9nZ2xlQ2FydH0gdGl0bGU9XCJjbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmdGltZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DbG9zZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3VwcmVtZT57bWUubmFtZX0ncyBDYXJ0PC9TdXByZW1lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGhlcmUge21lLmNhcnQubGVuZ3RoID09PSAxID8gJ2lzJyA6ICdhcmUnfSB7bWUuY2FydC5sZW5ndGh9IGl0ZW17bWUuY2FydC5sZW5ndGggPT09IDEgPyAnJyA6ICdzJ30gaW4geW91ciBjYXJ0LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZS5jYXJ0Lm1hcChjYXJ0SXRlbSA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FydEl0ZW0ga2V5PXtjYXJ0SXRlbS5pZH0gY2FydEl0ZW09e2NhcnRJdGVtfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NhbGNUb3RhbFByaWNlKG1lLmNhcnQpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2lja0J1dHRvbj5DaGVjayBPdXQ8L1NpY2tCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJ0U3R5bGVzPlxuICAgICAgICAgICAgICAgICl9PC9RdWVyeT5cbiAgICAgICAgICAgICl9PC9NdXRhdGlvbj5cbiAgICAgICAgKTtcbiAgICB9fTwvVXNlcj5cbik7Ly9lbmQgXG5cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG5leHBvcnQgeyBMT0NBTF9TVEFURV9RVUVSWSwgVE9HR0xFX0NBUlRfTVVUQVRJT04gfTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Cart.js\n");

/***/ })

})