webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/RemoveFromCart.js":
/*!**************************************!*\
  !*** ./components/RemoveFromCart.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/react-apollo.esm.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/macbookpro/Documents/Tier-4/Advanced-React-master/sick-fits/frontend/components/RemoveFromCart.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__[\"default\"])([\"\\n    mutation removeFromCart($id: ID!) {\\n        removeFromCart(id: $id) {\\n            # to remove from cache\\n            id\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nvar REMOVE_FROM_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_10___default()(_templateObject()); //end REMOVE_FROM_CART_MUTATION\n\nvar BigButton = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].button.withConfig({\n  displayName: \"RemoveFromCart__BigButton\",\n  componentId: \"emvtd6-0\"\n})([\"font-size:3rem;background:none;border:0;&:hover{color:\", \";cursor:pointer;}\"], function (props) {\n  return props.theme.red;\n}); //end BigButton\n\n_c = BigButton;\n\nvar RemoveFromCart = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(RemoveFromCart, _Component);\n\n  var _super = _createSuper(RemoveFromCart);\n\n  function RemoveFromCart() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, RemoveFromCart);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"update\", function (cache, payload) {\n      console.log('running remove from cart update function'); //1 read the cache\n\n      var data = cache.readQuery({\n        query: _User__WEBPACK_IMPORTED_MODULE_13__[\"CURRENT_USER_QUERY\"]\n      });\n      console.log(data); //2 remove item from the cart\n\n      var cartItemId = payload.data.removeFromCart.id;\n      data.me.cart = data.me.cart.filter(function (cartItem) {\n        return cartItem.id !== cartItemId;\n      }); //3 write it back to the cache\n\n      cache.writeQuery({\n        query: _User__WEBPACK_IMPORTED_MODULE_13__[\"CURRENT_USER_QUERY\"],\n        data: data\n      });\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(RemoveFromCart, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_9__[\"Mutation\"], {\n        mutation: REMOVE_FROM_CART_MUTATION,\n        variables: {\n          id: this.props.id\n        },\n        update: this.update //\n        ,\n        optimisticResponse: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 13\n        }\n      }, function (removeFromCart, _ref) {\n        var loading = _ref.loading,\n            error = _ref.error;\n        return __jsx(BigButton, {\n          onClick: function onClick() {\n            removeFromCart()[\"catch\"](function (err) {\n              return alert(err.message);\n            });\n          },\n          title: \"Delete Item\",\n          disabled: loading,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 21\n          }\n        }, \"\\xD7\");\n      });\n    }\n  }]);\n\n  return RemoveFromCart;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\nObject(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(RemoveFromCart, \"propTypes\", {\n  id: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string.isRequired\n});\n\n; //end RemoveFromCart\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RemoveFromCart);\n\nvar _c;\n\n$RefreshReg$(_c, \"BigButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZW1vdmVGcm9tQ2FydC5qcz9iMjVlIl0sIm5hbWVzIjpbIlJFTU9WRV9GUk9NX0NBUlRfTVVUQVRJT04iLCJncWwiLCJCaWdCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iLCJwcm9wcyIsInRoZW1lIiwicmVkIiwiUmVtb3ZlRnJvbUNhcnQiLCJjYWNoZSIsInBheWxvYWQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInJlYWRRdWVyeSIsInF1ZXJ5IiwiQ1VSUkVOVF9VU0VSX1FVRVJZIiwiY2FydEl0ZW1JZCIsInJlbW92ZUZyb21DYXJ0IiwiaWQiLCJtZSIsImNhcnQiLCJmaWx0ZXIiLCJjYXJ0SXRlbSIsIndyaXRlUXVlcnkiLCJ1cGRhdGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJlcnIiLCJhbGVydCIsIm1lc3NhZ2UiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEseUJBQXlCLEdBQUdDLG1EQUFILG1CQUEvQixDLENBT0U7O0FBRUYsSUFBTUMsU0FBUyxHQUFHQywwREFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLG9GQUtFLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsR0FBaEI7QUFBQSxDQUxQLENBQWYsQyxDQVFFOztLQVJJTCxTOztJQVVBTSxjOzs7Ozs7Ozs7Ozs7Ozs7O2lOQU9PLFVBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUN6QkMsYUFBTyxDQUFDQyxHQUFSLENBQVksMENBQVosRUFEeUIsQ0FFekI7O0FBQ0EsVUFBTUMsSUFBSSxHQUFHSixLQUFLLENBQUNLLFNBQU4sQ0FBZ0I7QUFBRUMsYUFBSyxFQUFFQyx5REFBa0JBO0FBQTNCLE9BQWhCLENBQWI7QUFDQUwsYUFBTyxDQUFDQyxHQUFSLENBQVlDLElBQVosRUFKeUIsQ0FLekI7O0FBQ0EsVUFBTUksVUFBVSxHQUFHUCxPQUFPLENBQUNHLElBQVIsQ0FBYUssY0FBYixDQUE0QkMsRUFBL0M7QUFDQU4sVUFBSSxDQUFDTyxFQUFMLENBQVFDLElBQVIsR0FBZVIsSUFBSSxDQUFDTyxFQUFMLENBQVFDLElBQVIsQ0FBYUMsTUFBYixDQUFvQixVQUFBQyxRQUFRO0FBQUEsZUFBSUEsUUFBUSxDQUFDSixFQUFULEtBQWdCRixVQUFwQjtBQUFBLE9BQTVCLENBQWYsQ0FQeUIsQ0FRekI7O0FBQ0FSLFdBQUssQ0FBQ2UsVUFBTixDQUFpQjtBQUFFVCxhQUFLLEVBQUVDLHlEQUFUO0FBQTZCSCxZQUFJLEVBQUpBO0FBQTdCLE9BQWpCO0FBQ0gsSzs7Ozs7Ozs2QkFDUTtBQUFBOztBQUNMLGFBQ0ksTUFBQyxxREFBRDtBQUNBLGdCQUFRLEVBQUViLHlCQURWO0FBRUEsaUJBQVMsRUFBRTtBQUFDbUIsWUFBRSxFQUFFLEtBQUtkLEtBQUwsQ0FBV2M7QUFBaEIsU0FGWDtBQUdBLGNBQU0sRUFBRSxLQUFLTSxNQUhiLENBSUE7QUFKQTtBQUtBLDBCQUFrQixNQUxsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBT0ssVUFBQ1AsY0FBRDtBQUFBLFlBQWtCUSxPQUFsQixRQUFrQkEsT0FBbEI7QUFBQSxZQUEyQkMsS0FBM0IsUUFBMkJBLEtBQTNCO0FBQUEsZUFDRyxNQUFDLFNBQUQ7QUFDQSxpQkFBTyxFQUFFLG1CQUFNO0FBQ1hULDBCQUFjLFdBQWQsQ0FBdUIsVUFBQVUsR0FBRztBQUFBLHFCQUFJQyxLQUFLLENBQUNELEdBQUcsQ0FBQ0UsT0FBTCxDQUFUO0FBQUEsYUFBMUI7QUFDSCxXQUhEO0FBSUEsZUFBSyxFQUFDLGFBSk47QUFLQSxrQkFBUSxFQUFFSixPQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREg7QUFBQSxPQVBMLENBREo7QUFvQkg7Ozs7RUF2Q3dCSywrQzs7MEZBQXZCdkIsYyxlQUNpQjtBQUNmVyxJQUFFLEVBQUVhLGtEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBRE4sQzs7QUF1Q3RCLEMsQ0FBQzs7QUFFYTFCLDZFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZW1vdmVGcm9tQ2FydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnOyBcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tICcuL1VzZXInO1xuXG5jb25zdCBSRU1PVkVfRlJPTV9DQVJUX01VVEFUSU9OID0gZ3FsIGBcbiAgICBtdXRhdGlvbiByZW1vdmVGcm9tQ2FydCgkaWQ6IElEISkge1xuICAgICAgICByZW1vdmVGcm9tQ2FydChpZDogJGlkKSB7XG4gICAgICAgICAgICAjIHRvIHJlbW92ZSBmcm9tIGNhY2hlXG4gICAgICAgICAgICBpZFxuICAgICAgICB9XG4gICAgfVxuYDsvL2VuZCBSRU1PVkVfRlJPTV9DQVJUX01VVEFUSU9OXG5cbmNvbnN0IEJpZ0J1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiAwO1xuICAgICY6aG92ZXJ7XG4gICAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnJlZH07XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5gOy8vZW5kIEJpZ0J1dHRvblxuXG5jbGFzcyBSZW1vdmVGcm9tQ2FydCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB9O1xuICAgIC8vdGhpcyB1cGRhdGUgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgYXMgc29vbiBhcyB3ZSBnZXQgYSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXIgdGhhdCB0aGUgbXV0YXRpb24gaGFzIGJlZW4gcGVyZm9ybWVkXG4gICAgLy9jYWNoZSBpcyB0aGUgYXBvbGxvIGNhY2hlXG4gICAgLy9wYXlsb2FkIGlzIHRoZSByZXR1cm4gZnJvbSB0aGUgc2VydmVyIGFmdGVyIHRoZSBncWwgbXV0YXRpb25cbiAgICB1cGRhdGUgPSAoY2FjaGUsIHBheWxvYWQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3J1bm5pbmcgcmVtb3ZlIGZyb20gY2FydCB1cGRhdGUgZnVuY3Rpb24nKTtcbiAgICAgICAgLy8xIHJlYWQgdGhlIGNhY2hlXG4gICAgICAgIGNvbnN0IGRhdGEgPSBjYWNoZS5yZWFkUXVlcnkoeyBxdWVyeTogQ1VSUkVOVF9VU0VSX1FVRVJZfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAvLzIgcmVtb3ZlIGl0ZW0gZnJvbSB0aGUgY2FydFxuICAgICAgICBjb25zdCBjYXJ0SXRlbUlkID0gcGF5bG9hZC5kYXRhLnJlbW92ZUZyb21DYXJ0LmlkO1xuICAgICAgICBkYXRhLm1lLmNhcnQgPSBkYXRhLm1lLmNhcnQuZmlsdGVyKGNhcnRJdGVtID0+IGNhcnRJdGVtLmlkICE9PSBjYXJ0SXRlbUlkKVxuICAgICAgICAvLzMgd3JpdGUgaXQgYmFjayB0byB0aGUgY2FjaGVcbiAgICAgICAgY2FjaGUud3JpdGVRdWVyeSh7IHF1ZXJ5OiBDVVJSRU5UX1VTRVJfUVVFUlksIGRhdGF9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE11dGF0aW9uIFxuICAgICAgICAgICAgbXV0YXRpb249e1JFTU9WRV9GUk9NX0NBUlRfTVVUQVRJT059IFxuICAgICAgICAgICAgdmFyaWFibGVzPXt7aWQ6IHRoaXMucHJvcHMuaWR9fVxuICAgICAgICAgICAgdXBkYXRlPXt0aGlzLnVwZGF0ZX1cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICBvcHRpbWlzdGljUmVzcG9uc2VcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7KHJlbW92ZUZyb21DYXJ0LCB7bG9hZGluZywgZXJyb3J9KSA9PiBcbiAgICAgICAgICAgICAgICAgICAgPEJpZ0J1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRnJvbUNhcnQoKS5jYXRjaChlcnIgPT4gYWxlcnQoZXJyLm1lc3NhZ2UpKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEZWxldGUgSXRlbVwiXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICZ0aW1lcztcbiAgICAgICAgICAgICAgICAgICAgPC9CaWdCdXR0b24+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9NdXRhdGlvbj4gXG4gICAgICAgICk7XG4gICAgfVxufTsvL2VuZCBSZW1vdmVGcm9tQ2FydFxuXG5leHBvcnQgZGVmYXVsdCBSZW1vdmVGcm9tQ2FydDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/RemoveFromCart.js\n");

/***/ })

})