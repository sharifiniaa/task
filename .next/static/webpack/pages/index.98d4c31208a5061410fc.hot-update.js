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
    return function () {
      source.cancel();
    };
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

              if (data) {
                setQuotes(data.slice(0));
                console.log(data);
              }

              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              // handle error
              console.log(_context.t0);

            case 11:
              _context.prev = 11;
              return _context.finish(11);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8, 11, 13]]);
    }));

    return function fetchQuotes(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_src_components_NavBar__WEBPACK_IMPORTED_MODULE_4__["NavBar"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
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
            lineNumber: 62,
            columnNumber: 36
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_src_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsInVzZVN0YXRlIiwicXVvdGVzIiwic2V0UXVvdGVzIiwidXNlRWZmZWN0Iiwic291cmNlIiwiYXhpb3MiLCJDYW5jZWxUb2tlbiIsImZldGNoUXVvdGVzIiwiY2FuY2VsIiwibWV0aG9kIiwidXJsIiwiY2FuY2VsVG9rZW4iLCJ0b2tlbiIsImRhdGEiLCJzbGljZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJxdW90ZSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtDQUVBOztBQUNBOztBQUdBLElBQU1BLFNBQWEsR0FBRyxTQUFoQkEsU0FBZ0IsR0FBTTtBQUFBOztBQUFBLGtCQUVJQyxzREFBUSxDQUFxQixJQUFyQixDQUZaO0FBQUEsTUFFakJDLE1BRmlCO0FBQUEsTUFFVEMsU0FGUzs7QUFLeEJDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLE1BQU0sR0FBR0MsNENBQUssQ0FBQ0MsV0FBTixDQUFrQkYsTUFBbEIsRUFBZjtBQUNBRyxlQUFXLENBQUNILE1BQUQsQ0FBWDtBQUVBLFdBQU8sWUFBTTtBQUNUQSxZQUFNLENBQUNJLE1BQVA7QUFDSCxLQUZEO0FBR0gsR0FQUSxFQU9OLEVBUE0sQ0FBVDs7QUFVQSxNQUFNRCxXQUFXO0FBQUEsZ01BQUcsaUJBQU1ILE1BQU47QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFV0MsNENBQUssQ0FBQztBQUN6Qkksc0JBQU0sRUFBRSxLQURpQjtBQUV6QkMsbUJBQUcsRUFBRSw2Q0FGb0I7QUFHekJDLDJCQUFXLEVBQUVQLE1BQU0sQ0FBQ1E7QUFISyxlQUFELENBRmhCOztBQUFBO0FBQUE7QUFFSkMsa0JBRkksZ0JBRUpBLElBRkk7O0FBUVosa0JBQUdBLElBQUgsRUFBUztBQUNMWCx5QkFBUyxDQUFDVyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFYLENBQUQsQ0FBVDtBQUNBQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDSDs7QUFYVztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWNaO0FBQ0FFLHFCQUFPLENBQUNDLEdBQVI7O0FBZlk7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVhULFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBdUJBLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBSyxlQUFTLEVBQUMsOEJBQWY7QUFBQSw2QkFPSTtBQUFLLGlCQUFTLEVBQUMsNENBQWY7QUFBQSxrQkFDS04sTUFBTSxJQUNIQSxNQUFNLENBQUNnQixHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFtQkMsS0FBbkIsRUFBcUM7QUFDNUMsOEJBQU8scUVBQUMsaUVBQUQ7QUFBa0MsaUJBQUssRUFBRUQ7QUFBekMsNkJBQXlCQyxLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBQ0gsU0FGRDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFnQkkscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCSjtBQUFBLGtCQURKO0FBb0JILENBMUREOztHQUFNcEIsUzs7S0FBQUEsUztBQTREU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOThkNGMzMTIwOGE1MDYxNDEwZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBRdW90ZXMgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdW90ZXMnO1xyXG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9OYXZCYXInO1xyXG5pbXBvcnQgeyBRdW90ZVR5cGUgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy90eXBlcyc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvRm9vdGVyJztcclxuaW1wb3J0IFF1b3RlQ2FyZCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdW90ZUNhcmQnO1xyXG4vLyBpbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5jb25zdCBJbmRleFBhZ2U6IEZDID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtxdW90ZXMsIHNldFF1b3Rlc10gPSB1c2VTdGF0ZTxRdW90ZVR5cGVbXSB8IG51bGw+KG51bGwpO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IGF4aW9zLkNhbmNlbFRva2VuLnNvdXJjZSgpO1xyXG4gICAgICAgIGZldGNoUXVvdGVzKHNvdXJjZSlcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgc291cmNlLmNhbmNlbCgpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG5cclxuICAgIGNvbnN0IGZldGNoUXVvdGVzID0gYXN5bmMoc291cmNlKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3RvZG9zLycsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxUb2tlbjogc291cmNlLnRva2VuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWYoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgc2V0UXVvdGVzKGRhdGEuc2xpY2UoMCkpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICBjYXRjaChlcnIpe1xyXG4gICAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgLy8gZGlzYWJsZSB0aGUgbG9hZGluZ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gIG1heC13LTd4bFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2VhcmNoIHJlc3VsdHMgZm9yICdidWRkaGEnPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZmxleC13cmFwIGp1c3RpZnktc3RhcnQgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtxdW90ZXMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVzLm1hcCgocXVvdGU6IFF1b3RlVHlwZSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxRdW90ZUNhcmQga2V5PXtgcXVvdGUtJHtpbmRleH1gfSBxdW90ZT17cXVvdGV9IC8+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==