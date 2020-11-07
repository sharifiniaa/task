webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/*! exports provided: NavBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBar", function() { return NavBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/categories */ "./src/data/categories.ts");
/* harmony import */ var _helper_hook_useOutSideClick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/hook/useOutSideClick */ "./src/helper/hook/useOutSideClick.tsx");


var _jsxFileName = "C:\\Users\\Hosein\\Desktop\\Projects\\test-project\\src\\components\\NavBar.tsx",
    _this = undefined,
    _s = $RefreshSig$();

 // mock data

 // custom hook


var NavBar = function NavBar() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      toggleDropdown = _useState[0],
      setToggleDropDown = _useState[1];

  var DropDownRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(_helper_hook_useOutSideClick__WEBPACK_IMPORTED_MODULE_3__["default"])(DropDownRef, function () {
    if (toggleDropdown) setToggleDropDown(false);
  });

  var handleToggle = function handleToggle() {
    setToggleDropDown(!toggleDropdown);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: "lg:px-16 px-6 bg-teal flex flex-wrap items-center bg-teal-400 lg:py-0 py-2",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container mx-auto  max-w-7xl",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex justify-between",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex-1 justify-start items-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              width: "32",
              height: "36",
              viewBox: "0 0 32 36",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                d: "M15.922 35.798c-.946 0-1.852-.228-2.549-.638l-10.825-6.379c-1.428-.843-2.549-2.82-2.549-4.501v-12.762c0-1.681 1.12-3.663 2.549-4.501l10.825-6.379c.696-.41 1.602-.638 2.549-.638.946 0 1.852.228 2.549.638l10.825 6.379c1.428.843 2.549 2.82 2.549 4.501v12.762c0 1.681-1.12 3.663-2.549 4.501l-10.825 6.379c-.696.41-1.602.638-2.549.638zm0-33.474c-.545 0-1.058.118-1.406.323l-10.825 6.383c-.737.433-1.406 1.617-1.406 2.488v12.762c0 .866.67 2.05 1.406 2.488l10.825 6.379c.348.205.862.323 1.406.323.545 0 1.058-.118 1.406-.323l10.825-6.383c.737-.433 1.406-1.617 1.406-2.488v-12.757c0-.866-.67-2.05-1.406-2.488l-10.825-6.379c-.348-.21-.862-.328-1.406-.328zM26.024 13.104l-7.205 13.258-3.053-5.777-3.071 5.777-7.187-13.258h4.343l2.803 5.189 3.107-5.832 3.089 5.832 2.821-5.189h4.352z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "menu-toggle",
          className: "pointer-cursor lg:hidden block",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            className: "fill-current text-gray-900",
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
              children: "menu"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "hidden",
          type: "checkbox",
          id: "menu-toggle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex-2 justify-between flex-grow hidden lg:flex lg:items-center lg:w-auto w-full",
          id: "menu",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "relative text-teal-600 flex-grow py-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "search",
              name: "seyrch",
              placeholder: "Search",
              className: "bg-teal h-10 px-5 pr-10 rounded-md w-full text-lg sm:text-sm focus:outline-none"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "submit",
              className: "absolute right-0 top-0 mt-3 mr-4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              className: "lg:flex items-center justify-between text-base text-teal-800 pt-4 lg:pt-0",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "relative",
                ref: DropDownRef,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  type: "button",
                  className: "inline-flex justify-center  px-4 py-2 bg-teal text-sm leading-5 font-medium text-teal-700 hover:text-white focus:outline-none focus:border-teal-300 focus:shadow-outline-teal active:bg-teal-50 active:text-teal-800 transition ease-in-out duration-150",
                  id: "options-menu",
                  "aria-haspopup": "true",
                  "aria-expanded": "true",
                  onClick: handleToggle,
                  children: ["All Categories", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                    className: "-mr-1 ml-2 h-5 w-5",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                      fillRule: "evenodd",
                      d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                      clipRule: "evenodd"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 75,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ".concat(!toggleDropdown && 'hidden'),
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rounded-md bg-white shadow-xs",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "py-1",
                      role: "menu",
                      "aria-orientation": "vertical",
                      "aria-labelledby": "options-menu",
                      children: _data_categories__WEBPACK_IMPORTED_MODULE_2__["categories"] === null || _data_categories__WEBPACK_IMPORTED_MODULE_2__["categories"] === void 0 ? void 0 : _data_categories__WEBPACK_IMPORTED_MODULE_2__["categories"].map(function (item) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          href: "#",
                          // href example => /item.name || item-id
                          className: "block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",
                          role: "menuitem",
                          children: item.name
                        }, item.id, false, {
                          fileName: _jsxFileName,
                          lineNumber: 96,
                          columnNumber: 53
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 89,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  type: "button",
                  className: "inline-flex justify-center  px-4 py-2 bg-teal text-sm leading-5 font-medium text-teal-700 hover:text-white focus:outline-none focus:border-teal-300 focus:shadow-outline-teal active:bg-teal-50 active:text-teal-800 transition ease-in-out duration-150",
                  id: "options-menu",
                  "aria-haspopup": "true",
                  "aria-expanded": "true",
                  children: "Top 100"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  type: "button",
                  className: "inline-flex justify-center  px-4 py-2 bg-teal text-sm leading-5 font-medium text-teal-700 hover:text-white focus:outline-none focus:border-teal-300 focus:shadow-outline-teal active:bg-teal-50 active:text-teal-800 transition ease-in-out duration-150",
                  id: "options-menu",
                  "aria-haspopup": "true",
                  "aria-expanded": "true",
                  children: "Top Authors"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, _this);
};

_s(NavBar, "sf9eMyE6UEFF8s4XnTws6xK8XHA=", false, function () {
  return [_helper_hook_useOutSideClick__WEBPACK_IMPORTED_MODULE_3__["default"]];
});

_c = NavBar;

var _c;

$RefreshReg$(_c, "NavBar");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzeCJdLCJuYW1lcyI6WyJOYXZCYXIiLCJ1c2VTdGF0ZSIsInRvZ2dsZURyb3Bkb3duIiwic2V0VG9nZ2xlRHJvcERvd24iLCJEcm9wRG93blJlZiIsInVzZVJlZiIsInVzZU91dHNpZGVDbGljayIsImhhbmRsZVRvZ2dsZSIsImNhdGVnb3JpZXMiLCJtYXAiLCJpdGVtIiwibmFtZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7Q0FHQTs7QUFDQTtBQUVPLElBQU1BLE1BQWdCLEdBQUcsU0FBbkJBLE1BQW1CLEdBQU07QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxLQUFELENBRGxCO0FBQUEsTUFDM0JDLGNBRDJCO0FBQUEsTUFDWEMsaUJBRFc7O0FBRWxDLE1BQU1DLFdBQVcsR0FBR0Msb0RBQU0sQ0FBZ0IsSUFBaEIsQ0FBMUI7QUFFQUMsOEVBQWUsQ0FBQ0YsV0FBRCxFQUFjLFlBQU07QUFDL0IsUUFBSUYsY0FBSixFQUFvQkMsaUJBQWlCLENBQUMsS0FBRCxDQUFqQjtBQUN2QixHQUZjLENBQWY7O0FBSUEsTUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QkoscUJBQWlCLENBQUMsQ0FBQ0QsY0FBRixDQUFqQjtBQUNILEdBRkQ7O0FBSUEsc0JBQ0k7QUFBUSxhQUFTLEVBQUMsNEVBQWxCO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsOEJBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsc0JBQWY7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMsbUNBQWY7QUFBQSxpQ0FDSTtBQUFHLGdCQUFJLEVBQUMsR0FBUjtBQUFBLG1DQUNJO0FBQUssbUJBQUssRUFBQyxJQUFYO0FBQWdCLG9CQUFNLEVBQUMsSUFBdkI7QUFBNEIscUJBQU8sRUFBQyxXQUFwQztBQUFnRCxtQkFBSyxFQUFDLDRCQUF0RDtBQUFBLHFDQUNJO0FBQU0saUJBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFTSTtBQUFPLGlCQUFPLEVBQUMsYUFBZjtBQUE2QixtQkFBUyxFQUFDLGdDQUF2QztBQUFBLGlDQUNJO0FBQ0kscUJBQVMsRUFBQyw0QkFEZDtBQUVJLGlCQUFLLEVBQUMsNEJBRlY7QUFHSSxpQkFBSyxFQUFDLElBSFY7QUFJSSxrQkFBTSxFQUFDLElBSlg7QUFLSSxtQkFBTyxFQUFDLFdBTFo7QUFBQSxvQ0FPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQSixlQVFJO0FBQU0sZUFBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRKLGVBcUJJO0FBQU8sbUJBQVMsRUFBQyxRQUFqQjtBQUEwQixjQUFJLEVBQUMsVUFBL0I7QUFBMEMsWUFBRSxFQUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBckJKLGVBdUJJO0FBQUssbUJBQVMsRUFBQyxrRkFBZjtBQUFrRyxZQUFFLEVBQUMsTUFBckc7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUMsdUNBQWY7QUFBQSxvQ0FDSTtBQUNJLGtCQUFJLEVBQUMsUUFEVDtBQUVJLGtCQUFJLEVBQUMsUUFGVDtBQUdJLHlCQUFXLEVBQUMsUUFIaEI7QUFJSSx1QkFBUyxFQUFDO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQU9JO0FBQVEsa0JBQUksRUFBQyxRQUFiO0FBQXNCLHVCQUFTLEVBQUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFVSTtBQUFBLG1DQUNJO0FBQUksdUJBQVMsRUFBQywyRUFBZDtBQUFBLHNDQUNJO0FBQUkseUJBQVMsRUFBQyxVQUFkO0FBQXlCLG1CQUFHLEVBQUVFLFdBQTlCO0FBQUEsd0NBQ0k7QUFDSSxzQkFBSSxFQUFDLFFBRFQ7QUFFSSwyQkFBUyxFQUFDLDBQQUZkO0FBR0ksb0JBQUUsRUFBQyxjQUhQO0FBSUksbUNBQWMsTUFKbEI7QUFLSSxtQ0FBYyxNQUxsQjtBQU1JLHlCQUFPLEVBQUVHLFlBTmI7QUFBQSw0REFTSTtBQUNJLDZCQUFTLEVBQUMsb0JBRGQ7QUFFSSx5QkFBSyxFQUFDLDRCQUZWO0FBR0ksMkJBQU8sRUFBQyxXQUhaO0FBSUksd0JBQUksRUFBQyxjQUpUO0FBQUEsMkNBTUk7QUFDSSw4QkFBUSxFQUFDLFNBRGI7QUFFSSx1QkFBQyxFQUFDLG9IQUZOO0FBR0ksOEJBQVEsRUFBQztBQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQXdCSTtBQUNJLDJCQUFTLDZFQUNMLENBQUNMLGNBQUQsSUFBbUIsUUFEZCxDQURiO0FBQUEseUNBS0k7QUFBSyw2QkFBUyxFQUFDLCtCQUFmO0FBQUEsMkNBQ0k7QUFDSSwrQkFBUyxFQUFDLE1BRGQ7QUFFSSwwQkFBSSxFQUFDLE1BRlQ7QUFHSSwwQ0FBaUIsVUFIckI7QUFJSSx5Q0FBZ0IsY0FKcEI7QUFBQSxnQ0FNS00sMkRBTkwsYUFNS0EsMkRBTkwsdUJBTUtBLDJEQUFVLENBQUVDLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRDtBQUFBLDRDQUNiO0FBQ0ksOEJBQUksRUFBQyxHQURUO0FBR0k7QUFDQSxtQ0FBUyxFQUFDLGdKQUpkO0FBS0ksOEJBQUksRUFBQyxVQUxUO0FBQUEsb0NBT0tBLElBQUksQ0FBQ0M7QUFQViwyQkFFU0QsSUFBSSxDQUFDRSxFQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBRGE7QUFBQSx1QkFBaEI7QUFOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQXFESTtBQUFBLHVDQUNJO0FBQ0ksc0JBQUksRUFBQyxRQURUO0FBRUksMkJBQVMsRUFBQywwUEFGZDtBQUdJLG9CQUFFLEVBQUMsY0FIUDtBQUlJLG1DQUFjLE1BSmxCO0FBS0ksbUNBQWMsTUFMbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXJESixlQWdFSTtBQUFBLHVDQUNJO0FBQ0ksc0JBQUksRUFBQyxRQURUO0FBRUksMkJBQVMsRUFBQywwUEFGZDtBQUdJLG9CQUFFLEVBQUMsY0FIUDtBQUlJLG1DQUFjLE1BSmxCO0FBS0ksbUNBQWMsTUFMbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWhFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQThISCxDQTFJTTs7R0FBTVosTTtVQUlUTSxvRTs7O0tBSlNOLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMThhZjUxMWQwMzk4ZWNiZTkyYWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gbW9jayBkYXRhXHJcbmltcG9ydCB7IGNhdGVnb3JpZXMgfSBmcm9tICcuLi9kYXRhL2NhdGVnb3JpZXMnO1xyXG5cclxuLy8gY3VzdG9tIGhvb2tcclxuaW1wb3J0IHVzZU91dHNpZGVDbGljayBmcm9tICcuLi9oZWxwZXIvaG9vay91c2VPdXRTaWRlQ2xpY2snO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdkJhcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdG9nZ2xlRHJvcGRvd24sIHNldFRvZ2dsZURyb3BEb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IERyb3BEb3duUmVmID0gdXNlUmVmPEhUTUxMSUVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICAgIHVzZU91dHNpZGVDbGljayhEcm9wRG93blJlZiwgKCkgPT4ge1xyXG4gICAgICAgIGlmICh0b2dnbGVEcm9wZG93bikgc2V0VG9nZ2xlRHJvcERvd24oZmFsc2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFRvZ2dsZURyb3BEb3duKCF0b2dnbGVEcm9wZG93bik7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJsZzpweC0xNiBweC02IGJnLXRlYWwgZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGJnLXRlYWwtNDAwIGxnOnB5LTAgcHktMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvICBtYXgtdy03eGxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzZcIiB2aWV3Qm94PVwiMCAwIDMyIDM2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUuOTIyIDM1Ljc5OGMtLjk0NiAwLTEuODUyLS4yMjgtMi41NDktLjYzOGwtMTAuODI1LTYuMzc5Yy0xLjQyOC0uODQzLTIuNTQ5LTIuODItMi41NDktNC41MDF2LTEyLjc2MmMwLTEuNjgxIDEuMTItMy42NjMgMi41NDktNC41MDFsMTAuODI1LTYuMzc5Yy42OTYtLjQxIDEuNjAyLS42MzggMi41NDktLjYzOC45NDYgMCAxLjg1Mi4yMjggMi41NDkuNjM4bDEwLjgyNSA2LjM3OWMxLjQyOC44NDMgMi41NDkgMi44MiAyLjU0OSA0LjUwMXYxMi43NjJjMCAxLjY4MS0xLjEyIDMuNjYzLTIuNTQ5IDQuNTAxbC0xMC44MjUgNi4zNzljLS42OTYuNDEtMS42MDIuNjM4LTIuNTQ5LjYzOHptMC0zMy40NzRjLS41NDUgMC0xLjA1OC4xMTgtMS40MDYuMzIzbC0xMC44MjUgNi4zODNjLS43MzcuNDMzLTEuNDA2IDEuNjE3LTEuNDA2IDIuNDg4djEyLjc2MmMwIC44NjYuNjcgMi4wNSAxLjQwNiAyLjQ4OGwxMC44MjUgNi4zNzljLjM0OC4yMDUuODYyLjMyMyAxLjQwNi4zMjMuNTQ1IDAgMS4wNTgtLjExOCAxLjQwNi0uMzIzbDEwLjgyNS02LjM4M2MuNzM3LS40MzMgMS40MDYtMS42MTcgMS40MDYtMi40ODh2LTEyLjc1N2MwLS44NjYtLjY3LTIuMDUtMS40MDYtMi40ODhsLTEwLjgyNS02LjM3OWMtLjM0OC0uMjEtLjg2Mi0uMzI4LTEuNDA2LS4zMjh6TTI2LjAyNCAxMy4xMDRsLTcuMjA1IDEzLjI1OC0zLjA1My01Ljc3Ny0zLjA3MSA1Ljc3Ny03LjE4Ny0xMy4yNThoNC4zNDNsMi44MDMgNS4xODkgMy4xMDctNS44MzIgMy4wODkgNS44MzIgMi44MjEtNS4xODloNC4zNTJ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZW51LXRvZ2dsZVwiIGNsYXNzTmFtZT1cInBvaW50ZXItY3Vyc29yIGxnOmhpZGRlbiBibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdGV4dC1ncmF5LTkwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5tZW51PC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCAzaDIwdjJIMFYzem0wIDZoMjB2MkgwVjl6bTAgNmgyMHYySDB2LTJ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJoaWRkZW5cIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cIm1lbnUtdG9nZ2xlXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTIganVzdGlmeS1iZXR3ZWVuIGZsZXgtZ3JvdyBoaWRkZW4gbGc6ZmxleCBsZzppdGVtcy1jZW50ZXIgbGc6dy1hdXRvIHctZnVsbFwiIGlkPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtdGVhbC02MDAgZmxleC1ncm93IHB5LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZXlyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy10ZWFsIGgtMTAgcHgtNSBwci0xMCByb3VuZGVkLW1kIHctZnVsbCB0ZXh0LWxnIHNtOnRleHQtc20gZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0wIHRvcC0wIG10LTMgbXItNFwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsZzpmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC1iYXNlIHRleHQtdGVhbC04MDAgcHQtNCBsZzpwdC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJlbGF0aXZlXCIgcmVmPXtEcm9wRG93blJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXgganVzdGlmeS1jZW50ZXIgIHB4LTQgcHktMiBiZy10ZWFsIHRleHQtc20gbGVhZGluZy01IGZvbnQtbWVkaXVtIHRleHQtdGVhbC03MDAgaG92ZXI6dGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXRlYWwtMzAwIGZvY3VzOnNoYWRvdy1vdXRsaW5lLXRlYWwgYWN0aXZlOmJnLXRlYWwtNTAgYWN0aXZlOnRleHQtdGVhbC04MDAgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi0xNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvcHRpb25zLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVG9nZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbGwgQ2F0ZWdvcmllc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIi1tci0xIG1sLTIgaC01IHctNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk01LjI5MyA3LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTAgMTAuNTg2bDMuMjkzLTMuMjkzYTEgMSAwIDExMS40MTQgMS40MTRsLTQgNGExIDEgMCAwMS0xLjQxNCAwbC00LTRhMSAxIDAgMDEwLTEuNDE0elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG9yaWdpbi10b3AtcmlnaHQgYWJzb2x1dGUgcmlnaHQtMCBtdC0yIHctNTYgcm91bmRlZC1tZCBzaGFkb3ctbGcgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdG9nZ2xlRHJvcGRvd24gJiYgJ2hpZGRlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgYmctd2hpdGUgc2hhZG93LXhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLW9yaWVudGF0aW9uPVwidmVydGljYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJvcHRpb25zLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXM/Lm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhyZWYgZXhhbXBsZSA9PiAvaXRlbS5uYW1lIHx8IGl0ZW0taWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgdGV4dC1zbSBsZWFkaW5nLTUgdGV4dC1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTEwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy1ncmF5LTEwMCBmb2N1czp0ZXh0LWdyYXktOTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwibWVudWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBqdXN0aWZ5LWNlbnRlciAgcHgtNCBweS0yIGJnLXRlYWwgdGV4dC1zbSBsZWFkaW5nLTUgZm9udC1tZWRpdW0gdGV4dC10ZWFsLTcwMCBob3Zlcjp0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItdGVhbC0zMDAgZm9jdXM6c2hhZG93LW91dGxpbmUtdGVhbCBhY3RpdmU6YmctdGVhbC01MCBhY3RpdmU6dGV4dC10ZWFsLTgwMCB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTE1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm9wdGlvbnMtbWVudVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvcCAxMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXgganVzdGlmeS1jZW50ZXIgIHB4LTQgcHktMiBiZy10ZWFsIHRleHQtc20gbGVhZGluZy01IGZvbnQtbWVkaXVtIHRleHQtdGVhbC03MDAgaG92ZXI6dGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXRlYWwtMzAwIGZvY3VzOnNoYWRvdy1vdXRsaW5lLXRlYWwgYWN0aXZlOmJnLXRlYWwtNTAgYWN0aXZlOnRleHQtdGVhbC04MDAgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi0xNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvcHRpb25zLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb3AgQXV0aG9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImxnOm1sLTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBsZzptYi0wIG1iLTQgcG9pbnRlci1jdXJzb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHctMTAgaC0xMCBib3JkZXItMiBib3JkZXItdHJhbnNwYXJlbnQgaG92ZXI6Ym9yZGVyLXRlYWwtNDAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy8xMTI4MTQzMTIxNDc1MzQyMzM3L2U4dGtoUmF6X25vcm1hbC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQW5keSBMZXZlcmVuelwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=