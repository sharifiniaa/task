webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/NavBar */ "./src/components/NavBar.tsx");
/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Footer */ "./src/components/Footer.tsx");
/* harmony import */ var _src_components_QuoteCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/QuoteCard */ "./src/components/QuoteCard.tsx");



var _jsxFileName = "C:\\Users\\Hosein\\Desktop\\Projects\\test-project\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();




 // import Pagination from '../src/components/Pagination';

var IndexPage = function IndexPage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      quotes = _useState[0],
      setQuotes = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_NavBar__WEBPACK_IMPORTED_MODULE_2__["NavBar"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container mx-auto  max-w-7xl",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-row flex-wrap justify-start mt-4",
        children: quotes && quotes.map(function (quote, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_QuoteCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
            quote: quote
          }, "quote-".concat(index), false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 36
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(IndexPage, "hjCKSoZtJfMNmWCPDkX2VuJhOww=");

_c = IndexPage;
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

var _c;

$RefreshReg$(_c, "IndexPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsInVzZVN0YXRlIiwicXVvdGVzIiwic2V0UXVvdGVzIiwibWFwIiwicXVvdGUiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtDQUVBOztBQUlBLElBQU1BLFNBQWEsR0FBRyxTQUFoQkEsU0FBZ0IsR0FBTTtBQUFBOztBQUFBLGtCQUVJQyxzREFBUSxDQUFxQixJQUFyQixDQUZaO0FBQUEsTUFFakJDLE1BRmlCO0FBQUEsTUFFVEMsU0FGUzs7QUFLeEIsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFLLGVBQVMsRUFBQyw4QkFBZjtBQUFBLDZCQU9JO0FBQUssaUJBQVMsRUFBQyw0Q0FBZjtBQUFBLGtCQUNLRCxNQUFNLElBQ0hBLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBbUJDLEtBQW5CLEVBQXFDO0FBQzVDLDhCQUFPLHFFQUFDLGlFQUFEO0FBQWtDLGlCQUFLLEVBQUVEO0FBQXpDLDZCQUF5QkMsS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNILFNBRkQ7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBZ0JJLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQko7QUFBQSxrQkFESjtBQW9CSCxDQXpCRDs7R0FBTU4sUzs7S0FBQUEsUztBQTJCU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGM2OWRjNDA3ZWRmOTM3ZmE3ODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBRdW90ZXMgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdW90ZXMnO1xyXG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9OYXZCYXInO1xyXG5pbXBvcnQgeyBRdW90ZVR5cGUgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy90eXBlcyc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvRm9vdGVyJztcclxuaW1wb3J0IFF1b3RlQ2FyZCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdW90ZUNhcmQnO1xyXG4vLyBpbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5jb25zdCBJbmRleFBhZ2U6IEZDID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtxdW90ZXMsIHNldFF1b3Rlc10gPSB1c2VTdGF0ZTxRdW90ZVR5cGVbXSB8IG51bGw+KG51bGwpXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvICBtYXgtdy03eGxcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNlYXJjaCByZXN1bHRzIGZvciAnYnVkZGhhJzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LXN0YXJ0IG10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cXVvdGVzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3Rlcy5tYXAoKHF1b3RlOiBRdW90ZVR5cGUsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8UXVvdGVDYXJkIGtleT17YHF1b3RlLSR7aW5kZXh9YH0gcXVvdGU9e3F1b3RlfSAvPjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=