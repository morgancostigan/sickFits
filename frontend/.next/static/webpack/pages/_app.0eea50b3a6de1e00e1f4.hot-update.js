webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/RemoveFromCart.js":
/*!**************************************!*\
  !*** ./components/RemoveFromCart.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/react-apollo.esm.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master/sick-fits/frontend/components/RemoveFromCart.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__[\"default\"])([\"\\n    mutation removeFromCart($id: ID!) {\\n        removeFromCart(id: $id) {\\n            # to remove from cache\\n            id\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nvar REMOVE_FROM_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_10___default()(_templateObject()); //end REMOVE_FROM_CART_MUTATION\n\nvar BigButton = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].button.withConfig({\n  displayName: \"RemoveFromCart__BigButton\",\n  componentId: \"emvtd6-0\"\n})([\"font-size:3rem;background:none;border:0;&:hover{color:\", \";cursor:pointer;}\"], function (props) {\n  return props.theme.red;\n}); //end BigButton\n\n_c = BigButton;\n\nvar RemoveFromCart = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(RemoveFromCart, _Component);\n\n  var _super = _createSuper(RemoveFromCart);\n\n  function RemoveFromCart() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, RemoveFromCart);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"update\", function (cache, payload) {\n      console.log('running remove from cart update function'); //1 read the cache\n\n      var data = cache.readQuery({\n        query: _User__WEBPACK_IMPORTED_MODULE_13__[\"CURRENT_USER_QUERY\"]\n      });\n      console.log(data); //2 remove item from the cart\n\n      var cartItemId = payload.data.removeFromCart.id;\n      data.me.cart = data.me.cart.filter(function (cartItem) {\n        return cartItem.id !== cartItemId;\n      }); //3 write it back to the cache\n\n      cache.writeQuery({\n        query: _User__WEBPACK_IMPORTED_MODULE_13__[\"CURRENT_USER_QUERY\"],\n        data: data\n      });\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(RemoveFromCart, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_9__[\"Mutation\"], {\n        mutation: REMOVE_FROM_CART_MUTATION,\n        variables: {\n          id: this.props.id\n        },\n        update: this.update //\n        ,\n        optimisticResponse: {\n          __typename: 'Mutation'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 13\n        }\n      }, function (removeFromCart, _ref) {\n        var loading = _ref.loading,\n            error = _ref.error;\n        return __jsx(BigButton, {\n          onClick: function onClick() {\n            removeFromCart()[\"catch\"](function (err) {\n              return alert(err.message);\n            });\n          },\n          title: \"Delete Item\",\n          disabled: loading,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 21\n          }\n        }, \"\\xD7\");\n      });\n    }\n  }]);\n\n  return RemoveFromCart;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\nObject(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(RemoveFromCart, \"propTypes\", {\n  id: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string.isRequired\n});\n\n; //end RemoveFromCart\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RemoveFromCart);\n\nvar _c;\n\n$RefreshReg$(_c, \"BigButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZW1vdmVGcm9tQ2FydC5qcz9iMjVlIl0sIm5hbWVzIjpbIlJFTU9WRV9GUk9NX0NBUlRfTVVUQVRJT04iLCJncWwiLCJCaWdCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iLCJwcm9wcyIsInRoZW1lIiwicmVkIiwiUmVtb3ZlRnJvbUNhcnQiLCJjYWNoZSIsInBheWxvYWQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInJlYWRRdWVyeSIsInF1ZXJ5IiwiQ1VSUkVOVF9VU0VSX1FVRVJZIiwiY2FydEl0ZW1JZCIsInJlbW92ZUZyb21DYXJ0IiwiaWQiLCJtZSIsImNhcnQiLCJmaWx0ZXIiLCJjYXJ0SXRlbSIsIndyaXRlUXVlcnkiLCJ1cGRhdGUiLCJfX3R5cGVuYW1lIiwibG9hZGluZyIsImVycm9yIiwiZXJyIiwiYWxlcnQiLCJtZXNzYWdlIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLHlCQUF5QixHQUFHQyxtREFBSCxtQkFBL0IsQyxDQU9FOztBQUVGLElBQU1DLFNBQVMsR0FBR0MsMERBQU0sQ0FBQ0MsTUFBVjtBQUFBO0FBQUE7QUFBQSxvRkFLRSxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEdBQWhCO0FBQUEsQ0FMUCxDQUFmLEMsQ0FRRTs7S0FSSUwsUzs7SUFVQU0sYzs7Ozs7Ozs7Ozs7Ozs7OztpTkFPTyxVQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFDekJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLDBDQUFaLEVBRHlCLENBRXpCOztBQUNBLFVBQU1DLElBQUksR0FBR0osS0FBSyxDQUFDSyxTQUFOLENBQWdCO0FBQUVDLGFBQUssRUFBRUMseURBQWtCQTtBQUEzQixPQUFoQixDQUFiO0FBQ0FMLGFBQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUFaLEVBSnlCLENBS3pCOztBQUNBLFVBQU1JLFVBQVUsR0FBR1AsT0FBTyxDQUFDRyxJQUFSLENBQWFLLGNBQWIsQ0FBNEJDLEVBQS9DO0FBQ0FOLFVBQUksQ0FBQ08sRUFBTCxDQUFRQyxJQUFSLEdBQWVSLElBQUksQ0FBQ08sRUFBTCxDQUFRQyxJQUFSLENBQWFDLE1BQWIsQ0FBb0IsVUFBQUMsUUFBUTtBQUFBLGVBQUlBLFFBQVEsQ0FBQ0osRUFBVCxLQUFnQkYsVUFBcEI7QUFBQSxPQUE1QixDQUFmLENBUHlCLENBUXpCOztBQUNBUixXQUFLLENBQUNlLFVBQU4sQ0FBaUI7QUFBRVQsYUFBSyxFQUFFQyx5REFBVDtBQUE2QkgsWUFBSSxFQUFKQTtBQUE3QixPQUFqQjtBQUNILEs7Ozs7Ozs7NkJBQ1E7QUFBQTs7QUFDTCxhQUNJLE1BQUMscURBQUQ7QUFDQSxnQkFBUSxFQUFFYix5QkFEVjtBQUVBLGlCQUFTLEVBQUU7QUFBQ21CLFlBQUUsRUFBRSxLQUFLZCxLQUFMLENBQVdjO0FBQWhCLFNBRlg7QUFHQSxjQUFNLEVBQUUsS0FBS00sTUFIYixDQUlBO0FBSkE7QUFLQSwwQkFBa0IsRUFBRTtBQUNoQkMsb0JBQVUsRUFBRTtBQURJLFNBTHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FVSyxVQUFDUixjQUFEO0FBQUEsWUFBa0JTLE9BQWxCLFFBQWtCQSxPQUFsQjtBQUFBLFlBQTJCQyxLQUEzQixRQUEyQkEsS0FBM0I7QUFBQSxlQUNHLE1BQUMsU0FBRDtBQUNBLGlCQUFPLEVBQUUsbUJBQU07QUFDWFYsMEJBQWMsV0FBZCxDQUF1QixVQUFBVyxHQUFHO0FBQUEscUJBQUlDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDRSxPQUFMLENBQVQ7QUFBQSxhQUExQjtBQUNILFdBSEQ7QUFJQSxlQUFLLEVBQUMsYUFKTjtBQUtBLGtCQUFRLEVBQUVKLE9BTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESDtBQUFBLE9BVkwsQ0FESjtBQXVCSDs7OztFQTFDd0JLLCtDOzswRkFBdkJ4QixjLGVBQ2lCO0FBQ2ZXLElBQUUsRUFBRWMsa0RBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFETixDOztBQTBDdEIsQyxDQUFDOztBQUVhM0IsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlbW92ZUZyb21DYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE11dGF0aW9uIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7IFxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IENVUlJFTlRfVVNFUl9RVUVSWSB9IGZyb20gJy4vVXNlcic7XG5cbmNvbnN0IFJFTU9WRV9GUk9NX0NBUlRfTVVUQVRJT04gPSBncWwgYFxuICAgIG11dGF0aW9uIHJlbW92ZUZyb21DYXJ0KCRpZDogSUQhKSB7XG4gICAgICAgIHJlbW92ZUZyb21DYXJ0KGlkOiAkaWQpIHtcbiAgICAgICAgICAgICMgdG8gcmVtb3ZlIGZyb20gY2FjaGVcbiAgICAgICAgICAgIGlkXG4gICAgICAgIH1cbiAgICB9XG5gOy8vZW5kIFJFTU9WRV9GUk9NX0NBUlRfTVVUQVRJT05cblxuY29uc3QgQmlnQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IDA7XG4gICAgJjpob3ZlcntcbiAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucmVkfTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbmA7Ly9lbmQgQmlnQnV0dG9uXG5cbmNsYXNzIFJlbW92ZUZyb21DYXJ0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH07XG4gICAgLy90aGlzIHVwZGF0ZSBmdW5jdGlvbiBnZXRzIGNhbGxlZCBhcyBzb29uIGFzIHdlIGdldCBhIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlciB0aGF0IHRoZSBtdXRhdGlvbiBoYXMgYmVlbiBwZXJmb3JtZWRcbiAgICAvL2NhY2hlIGlzIHRoZSBhcG9sbG8gY2FjaGVcbiAgICAvL3BheWxvYWQgaXMgdGhlIHJldHVybiBmcm9tIHRoZSBzZXJ2ZXIgYWZ0ZXIgdGhlIGdxbCBtdXRhdGlvblxuICAgIHVwZGF0ZSA9IChjYWNoZSwgcGF5bG9hZCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncnVubmluZyByZW1vdmUgZnJvbSBjYXJ0IHVwZGF0ZSBmdW5jdGlvbicpO1xuICAgICAgICAvLzEgcmVhZCB0aGUgY2FjaGVcbiAgICAgICAgY29uc3QgZGF0YSA9IGNhY2hlLnJlYWRRdWVyeSh7IHF1ZXJ5OiBDVVJSRU5UX1VTRVJfUVVFUll9KTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIC8vMiByZW1vdmUgaXRlbSBmcm9tIHRoZSBjYXJ0XG4gICAgICAgIGNvbnN0IGNhcnRJdGVtSWQgPSBwYXlsb2FkLmRhdGEucmVtb3ZlRnJvbUNhcnQuaWQ7XG4gICAgICAgIGRhdGEubWUuY2FydCA9IGRhdGEubWUuY2FydC5maWx0ZXIoY2FydEl0ZW0gPT4gY2FydEl0ZW0uaWQgIT09IGNhcnRJdGVtSWQpXG4gICAgICAgIC8vMyB3cml0ZSBpdCBiYWNrIHRvIHRoZSBjYWNoZVxuICAgICAgICBjYWNoZS53cml0ZVF1ZXJ5KHsgcXVlcnk6IENVUlJFTlRfVVNFUl9RVUVSWSwgZGF0YX0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TXV0YXRpb24gXG4gICAgICAgICAgICBtdXRhdGlvbj17UkVNT1ZFX0ZST01fQ0FSVF9NVVRBVElPTn0gXG4gICAgICAgICAgICB2YXJpYWJsZXM9e3tpZDogdGhpcy5wcm9wcy5pZH19XG4gICAgICAgICAgICB1cGRhdGU9e3RoaXMudXBkYXRlfVxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIG9wdGltaXN0aWNSZXNwb25zZT17e1xuICAgICAgICAgICAgICAgIF9fdHlwZW5hbWU6ICdNdXRhdGlvbicsXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsocmVtb3ZlRnJvbUNhcnQsIHtsb2FkaW5nLCBlcnJvcn0pID0+IFxuICAgICAgICAgICAgICAgICAgICA8QmlnQnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVGcm9tQ2FydCgpLmNhdGNoKGVyciA9PiBhbGVydChlcnIubWVzc2FnZSkpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRlbGV0ZSBJdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgJnRpbWVzO1xuICAgICAgICAgICAgICAgICAgICA8L0JpZ0J1dHRvbj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L011dGF0aW9uPiBcbiAgICAgICAgKTtcbiAgICB9XG59Oy8vZW5kIFJlbW92ZUZyb21DYXJ0XG5cbmV4cG9ydCBkZWZhdWx0IFJlbW92ZUZyb21DYXJ0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RemoveFromCart.js\n");

/***/ })

})