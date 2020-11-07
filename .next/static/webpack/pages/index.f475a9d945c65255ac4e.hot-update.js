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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "C:\\Users\\Hosein\\Desktop\\Projects\\test-project\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();




 // import Pagination from '../src/components/Pagination';



var IndexPage = function IndexPage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      quotes = _useState[0],
      setQuotes = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var source = axios__WEBPACK_IMPORTED_MODULE_7___default.a.CancelToken.source();
    fetchQuotes(source);
  }, []);

  var fetchQuotes = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(source) {
      var _yield$axios, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_7___default()({
                method: 'get',
                url: 'https://jsonplaceholder.typicode.com/todos/',
                cancelToken: source.token
              });

            case 3:
              _yield$axios = _context.sent;
              data = _yield$axios.data;
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              // handle error
              console.log(_context.t0);

            case 10:
              _context.prev = 10;
              return _context.finish(10);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7, 10, 12]]);
    }));

    return function fetchQuotes(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_src_components_NavBar__WEBPACK_IMPORTED_MODULE_4__["NavBar"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
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
            lineNumber: 54,
            columnNumber: 36
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_src_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(IndexPage, "0VPHYiRtcA6KwZuiqIU2apflnVw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsInVzZVN0YXRlIiwicXVvdGVzIiwic2V0UXVvdGVzIiwidXNlRWZmZWN0Iiwic291cmNlIiwiYXhpb3MiLCJDYW5jZWxUb2tlbiIsImZldGNoUXVvdGVzIiwibWV0aG9kIiwidXJsIiwiY2FuY2VsVG9rZW4iLCJ0b2tlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibWFwIiwicXVvdGUiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7Q0FFQTs7QUFDQTs7QUFHQSxJQUFNQSxTQUFhLEdBQUcsU0FBaEJBLFNBQWdCLEdBQU07QUFBQTs7QUFBQSxrQkFFSUMsc0RBQVEsQ0FBcUIsSUFBckIsQ0FGWjtBQUFBLE1BRWpCQyxNQUZpQjtBQUFBLE1BRVRDLFNBRlM7O0FBS3hCQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxNQUFNLEdBQUdDLDRDQUFLLENBQUNDLFdBQU4sQ0FBa0JGLE1BQWxCLEVBQWY7QUFDQUcsZUFBVyxDQUFDSCxNQUFELENBQVg7QUFDSCxHQUhRLEVBR04sRUFITSxDQUFUOztBQU1BLE1BQU1HLFdBQVc7QUFBQSxnTUFBRyxpQkFBTUgsTUFBTjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVXQyw0Q0FBSyxDQUFDO0FBQ3pCRyxzQkFBTSxFQUFFLEtBRGlCO0FBRXpCQyxtQkFBRyxFQUFFLDZDQUZvQjtBQUd6QkMsMkJBQVcsRUFBRU4sTUFBTSxDQUFDTztBQUhLLGVBQUQsQ0FGaEI7O0FBQUE7QUFBQTtBQUVKQyxrQkFGSSxnQkFFSkEsSUFGSTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBVVo7QUFDQUMscUJBQU8sQ0FBQ0MsR0FBUjs7QUFYWTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWFAsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFtQkEsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFLLGVBQVMsRUFBQyw4QkFBZjtBQUFBLDZCQU9JO0FBQUssaUJBQVMsRUFBQyw0Q0FBZjtBQUFBLGtCQUNLTixNQUFNLElBQ0hBLE1BQU0sQ0FBQ2MsR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBbUJDLEtBQW5CLEVBQXFDO0FBQzVDLDhCQUFPLHFFQUFDLGlFQUFEO0FBQWtDLGlCQUFLLEVBQUVEO0FBQXpDLDZCQUF5QkMsS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNILFNBRkQ7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBZ0JJLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQko7QUFBQSxrQkFESjtBQW9CSCxDQWxERDs7R0FBTWxCLFM7O0tBQUFBLFM7QUFvRFNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY0NzVhOWQ5NDVjNjUyNTVhYzRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUXVvdGVzIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUXVvdGVzJztcclxuaW1wb3J0IHsgTmF2QmFyIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTmF2QmFyJztcclxuaW1wb3J0IHsgUXVvdGVUeXBlIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvdHlwZXMnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0Zvb3Rlcic7XHJcbmltcG9ydCBRdW90ZUNhcmQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUXVvdGVDYXJkJztcclxuLy8gaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUGFnaW5hdGlvbic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuY29uc3QgSW5kZXhQYWdlOiBGQyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbcXVvdGVzLCBzZXRRdW90ZXNdID0gdXNlU3RhdGU8UXVvdGVUeXBlW10gfCBudWxsPihudWxsKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzb3VyY2UgPSBheGlvcy5DYW5jZWxUb2tlbi5zb3VyY2UoKTtcclxuICAgICAgICBmZXRjaFF1b3Rlcyhzb3VyY2UpXHJcbiAgICB9LCBbXSlcclxuXHJcblxyXG4gICAgY29uc3QgZmV0Y2hRdW90ZXMgPSBhc3luYyhzb3VyY2UpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3MvJyxcclxuICAgICAgICAgICAgICAgIGNhbmNlbFRva2VuOiBzb3VyY2UudG9rZW5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgY2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgLy8gaGFuZGxlIGVycm9yXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIC8vIGRpc2FibGUgdGhlIGxvYWRpbmdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvICBtYXgtdy03eGxcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNlYXJjaCByZXN1bHRzIGZvciAnYnVkZGhhJzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LXN0YXJ0IG10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cXVvdGVzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3Rlcy5tYXAoKHF1b3RlOiBRdW90ZVR5cGUsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8UXVvdGVDYXJkIGtleT17YHF1b3RlLSR7aW5kZXh9YH0gcXVvdGU9e3F1b3RlfSAvPjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=