webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/NavBar */ "./src/components/NavBar.tsx");
/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Footer */ "./src/components/Footer.tsx");
/* harmony import */ var _src_components_QuoteCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/QuoteCard */ "./src/components/QuoteCard.tsx");





var _jsxFileName = "C:\\Users\\Hosein\\Desktop\\Projects\\test-project\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();




 // import Pagination from '../src/components/Pagination';

var IndexPage = function IndexPage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      quotes = _useState[0],
      setQuotes = _useState[1];

  var fetchQuotes = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var a;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              try {} catch (err) {
                // handle error
                console.log(err);
              } finally {// disable the loading
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchQuotes() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_src_components_NavBar__WEBPACK_IMPORTED_MODULE_4__["NavBar"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "container mx-auto  max-w-7xl",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "flex flex-row flex-wrap justify-start mt-4",
        children: quotes && quotes.map(function (quote, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_src_components_QuoteCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
            quote: quote
          }, "quote-".concat(index), false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 36
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_src_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsInVzZVN0YXRlIiwicXVvdGVzIiwic2V0UXVvdGVzIiwiZmV0Y2hRdW90ZXMiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibWFwIiwicXVvdGUiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0NBRUE7O0FBSUEsSUFBTUEsU0FBYSxHQUFHLFNBQWhCQSxTQUFnQixHQUFNO0FBQUE7O0FBQUEsa0JBRUlDLHNEQUFRLENBQXFCLElBQXJCLENBRlo7QUFBQSxNQUVqQkMsTUFGaUI7QUFBQSxNQUVUQyxTQUZTOztBQUt4QixNQUFNQyxXQUFXO0FBQUEsZ01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCLGtCQUFJLENBRUgsQ0FGRCxDQUdBLE9BQU1DLEdBQU4sRUFBVTtBQUNOO0FBQ0FDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNILGVBTkQsU0FPUSxDQUNKO0FBQ0g7O0FBVmU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWEQsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFjQSxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUssZUFBUyxFQUFDLDhCQUFmO0FBQUEsNkJBT0k7QUFBSyxpQkFBUyxFQUFDLDRDQUFmO0FBQUEsa0JBQ0tGLE1BQU0sSUFDSEEsTUFBTSxDQUFDTSxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFtQkMsS0FBbkIsRUFBcUM7QUFDNUMsOEJBQU8scUVBQUMsaUVBQUQ7QUFBa0MsaUJBQUssRUFBRUQ7QUFBekMsNkJBQXlCQyxLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBQ0gsU0FGRDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFnQkkscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCSjtBQUFBLGtCQURKO0FBb0JILENBdkNEOztHQUFNVixTOztLQUFBQSxTO0FBeUNTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMjA0MmUwMDdhNmI5ZThmOGU5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFF1b3RlcyB9IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1b3Rlcyc7XHJcbmltcG9ydCB7IE5hdkJhciB9IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL05hdkJhcic7XHJcbmltcG9ydCB7IFF1b3RlVHlwZSB9IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL3R5cGVzJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQgUXVvdGVDYXJkIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1F1b3RlQ2FyZCc7XHJcbi8vIGltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbmNvbnN0IEluZGV4UGFnZTogRkMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3F1b3Rlcywgc2V0UXVvdGVzXSA9IHVzZVN0YXRlPFF1b3RlVHlwZVtdIHwgbnVsbD4obnVsbCk7XHJcblxyXG5cclxuICAgIGNvbnN0IGZldGNoUXVvdGVzID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgYVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgY2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgLy8gaGFuZGxlIGVycm9yXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIC8vIGRpc2FibGUgdGhlIGxvYWRpbmdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvICBtYXgtdy03eGxcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNlYXJjaCByZXN1bHRzIGZvciAnYnVkZGhhJzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LXN0YXJ0IG10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cXVvdGVzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3Rlcy5tYXAoKHF1b3RlOiBRdW90ZVR5cGUsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8UXVvdGVDYXJkIGtleT17YHF1b3RlLSR7aW5kZXh9YH0gcXVvdGU9e3F1b3RlfSAvPjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=