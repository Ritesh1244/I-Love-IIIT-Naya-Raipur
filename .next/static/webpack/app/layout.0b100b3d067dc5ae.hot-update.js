"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"01f23408f7da\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2M4YTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIwMWYyMzQwOGY3ZGFcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const navLinks = [\n        {\n            name: \"Home\",\n            href: \"/\"\n        },\n        {\n            name: \"About\",\n            href: \"/about\"\n        },\n        {\n            name: \"Curriculum\",\n            href: \"/curriculum\"\n        },\n        {\n            name: \"T&P Cell\",\n            href: \"/tnp\"\n        },\n        {\n            name: \"Patents\",\n            href: \"/patents\"\n        },\n        {\n            name: \"Contact\",\n            href: \"/contact\"\n        }\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            if (window.innerWidth >= 768 && isOpen) {\n                setIsOpen(false);\n            }\n        };\n        window.addEventListener(\"resize\", handleResize);\n        handleResize();\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, [\n        isOpen\n    ]);\n    const toggleNavbar = ()=>{\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"fixed z-50 w-full bg-black bg-opacity-60 backdrop-blur-md\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-[1550px] flex flex-wrap items-center justify-between mx-auto p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    href: \"/\",\n                    className: \"flex items-center space-x-3 rtl:space-x-reverse\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://www.iiitnr.ac.in/sites/all/themes/iiit/head.png\",\n                            className: \"h-9\",\n                            alt: \"i love iiitnr logo\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\my\\\\IIIT-NR-CLONE\\\\components\\\\Navbar.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"self-center text-2xl font-semibold text-white whitespace-nowrap\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-lg lg:text-2xl\",\n                                children: [\n                                    \"I \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"em\", {}, void 0, false, {\n                                        fileName: \"D:\\\\my\\\\IIIT-NR-CLONE\\\\components\\\\Navbar.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    \"Love IIIT Naya Raipur\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\my\\\\IIIT-NR-CLONE\\\\components\\\\Navbar.js\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\my\\\\IIIT-NR-CLONE\\\\components\\\\Navbar.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\my\\\\IIIT-NR-CLONE\\\\components\\\\Navbar.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: toggleNavbar,\n                    type: \"button\",\n                    className: \"inline-flex items-center justify-center w-10 h-10 p-2 text-red-500 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300\",\n                    \"aria-controls\": \"navbar-default\",\n                    \"aria-expanded\": isOpen,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"sr-only\",\n                            children: \"Toggle navigation menu\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\my\\\\IIIT-NR-CLONE\\\\components\\\\Navbar.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined),\n                        isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: \"w-5 h-5\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            stroke: \"currentColor\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                strokeWidth: \"2\",\n                                d: \"M6 18L18 6M6 6l12 12\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\my\\\\IIIT-NR-CLONE\\\\components\\\\Navbar.js\",\n                                lineNumber: 71,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\my\\\\IIIT-NR-CLONE\\\\components\\\\Navbar.js\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: \"w-5 h-5\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            fill: \"none\",\n                            viewBox: \"0 0 17 14\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                stroke: \"currentColor\",\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                strokeWidth: \"2\",\n                                d: \"M1 1h15M1 7h15M1 13h15\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\my\\\\IIIT-NR-CLONE\\\\components\\\\Navbar.js\",\n                                lineNumber: 85,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\my\\\\IIIT-NR-CLONE\\\\components\\\\Navbar.js\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\my\\\\IIIT-NR-CLONE\\\\components\\\\Navbar.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat(isOpen ? \"block\" : \"hidden\", \" w-full md:block md:w-auto\"),\n                    id: \"navbar-default\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"flex flex-col p-4 mt-4 font-medium bg-gray-900 border border-gray-100 rounded-lg md:p-0 md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent md:dark:bg-transparent\",\n                        children: navLinks.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: link.href,\n                                    className: \"block py-2 px-1 lg:px-3 rounded-md md:p-0 text-white transition-all duration-300 \".concat(pathname === link.href ? \"bg-red-400 bg-transparent md:bg-transparent md:text-red-500\" : \"hover:bg-gray-800 md:hover:bg-transparent md:hover:text-red-500\"),\n                                    \"aria-current\": pathname === link.href ? \"page\" : undefined,\n                                    onClick: ()=>setIsOpen(false),\n                                    children: link.name\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\my\\\\IIIT-NR-CLONE\\\\components\\\\Navbar.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"D:\\\\my\\\\IIIT-NR-CLONE\\\\components\\\\Navbar.js\",\n                                lineNumber: 101,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\my\\\\IIIT-NR-CLONE\\\\components\\\\Navbar.js\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\my\\\\IIIT-NR-CLONE\\\\components\\\\Navbar.js\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\my\\\\IIIT-NR-CLONE\\\\components\\\\Navbar.js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\my\\\\IIIT-NR-CLONE\\\\components\\\\Navbar.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"/tbCOIG4/tEDYdI/7qOjOswFa8E=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2YmFyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRW1EO0FBQ3RCO0FBQ2lCO0FBRTlDLE1BQU1LLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU1PLFdBQVdKLDREQUFXQTtJQUU1QixNQUFNSyxXQUFXO1FBQ2Y7WUFBRUMsTUFBTTtZQUFRQyxNQUFNO1FBQUk7UUFDMUI7WUFBRUQsTUFBTTtZQUFTQyxNQUFNO1FBQVM7UUFDaEM7WUFBRUQsTUFBTTtZQUFjQyxNQUFNO1FBQWM7UUFDMUM7WUFBRUQsTUFBTTtZQUFZQyxNQUFNO1FBQU87UUFDakM7WUFBRUQsTUFBTTtZQUFXQyxNQUFNO1FBQVc7UUFDcEM7WUFBRUQsTUFBTTtZQUFXQyxNQUFNO1FBQVc7S0FDckM7SUFFRFQsZ0RBQVNBLENBQUM7UUFDUixNQUFNVSxlQUFlO1lBQ25CLElBQUlDLE9BQU9DLFVBQVUsSUFBSSxPQUFPUixRQUFRO2dCQUN0Q0MsVUFBVTtZQUNaO1FBQ0Y7UUFFQU0sT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUg7UUFDbENBO1FBRUEsT0FBTyxJQUFNQyxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVSjtJQUNwRCxHQUFHO1FBQUNOO0tBQU87SUFFWCxNQUFNVyxlQUFlO1FBQ25CVixVQUFVLENBQUNEO0lBQ2I7SUFFQSxxQkFDRSw4REFBQ1k7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNoQixpREFBSUE7b0JBQ0hRLE1BQUs7b0JBQ0xRLFdBQVU7O3NDQUVWLDhEQUFDRTs0QkFDQ0MsS0FBSTs0QkFDSkgsV0FBVTs0QkFDVkksS0FBSTs7Ozs7O3NDQUVOLDhEQUFDQzs0QkFBS0wsV0FBVTtzQ0FDZCw0RUFBQ0s7Z0NBQUtMLFdBQVU7O29DQUFzQjtrREFDbEMsOERBQUNNOzs7OztvQ0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUlqQiw4REFBQ0M7b0JBQ0NDLFNBQVNWO29CQUNUVyxNQUFLO29CQUNMVCxXQUFVO29CQUNWVSxpQkFBYztvQkFDZEMsaUJBQWV4Qjs7c0NBRWYsOERBQUNrQjs0QkFBS0wsV0FBVTtzQ0FBVTs7Ozs7O3dCQUN6QmIsdUJBQ0MsOERBQUN5Qjs0QkFDQ1osV0FBVTs0QkFDVmEsT0FBTTs0QkFDTkMsTUFBSzs0QkFDTEMsU0FBUTs0QkFDUkMsUUFBTztzQ0FFUCw0RUFBQ0M7Z0NBQ0NDLGVBQWM7Z0NBQ2RDLGdCQUFlO2dDQUNmQyxhQUFZO2dDQUNaQyxHQUFFOzs7Ozs7Ozs7O3NEQUlOLDhEQUFDVDs0QkFDQ1osV0FBVTs0QkFDVmEsT0FBTTs0QkFDTkMsTUFBSzs0QkFDTEMsU0FBUTtzQ0FFUiw0RUFBQ0U7Z0NBQ0NELFFBQU87Z0NBQ1BFLGVBQWM7Z0NBQ2RDLGdCQUFlO2dDQUNmQyxhQUFZO2dDQUNaQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLViw4REFBQ3BCO29CQUNDRCxXQUFXLEdBQStCLE9BQTVCYixTQUFTLFVBQVUsVUFBUztvQkFDMUNtQyxJQUFHOzhCQUVILDRFQUFDQzt3QkFBR3ZCLFdBQVU7a0NBQ1hWLFNBQVNrQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ25CLDhEQUFDQzswQ0FDQyw0RUFBQzNDLGlEQUFJQTtvQ0FDSFEsTUFBTWlDLEtBQUtqQyxJQUFJO29DQUNmUSxXQUFXLG9GQUlWLE9BSENYLGFBQWFvQyxLQUFLakMsSUFBSSxHQUNsQixnRUFDQTtvQ0FFTm9DLGdCQUFjdkMsYUFBYW9DLEtBQUtqQyxJQUFJLEdBQUcsU0FBU3FDO29DQUNoRHJCLFNBQVMsSUFBTXBCLFVBQVU7OENBRXhCcUMsS0FBS2xDLElBQUk7Ozs7OzsrQkFYTG1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CdkI7R0FsSE14Qzs7UUFFYUQsd0RBQVdBOzs7S0FGeEJDO0FBb0hOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFyLmpzP2ZiY2EiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xyXG5cclxuICBjb25zdCBuYXZMaW5rcyA9IFtcclxuICAgIHsgbmFtZTogXCJIb21lXCIsIGhyZWY6IFwiL1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQWJvdXRcIiwgaHJlZjogXCIvYWJvdXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN1cnJpY3VsdW1cIiwgaHJlZjogXCIvY3VycmljdWx1bVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVCZQIENlbGxcIiwgaHJlZjogXCIvdG5wXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYXRlbnRzXCIsIGhyZWY6IFwiL3BhdGVudHNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbnRhY3RcIiwgaHJlZjogXCIvY29udGFjdFwiIH0sXHJcbiAgXTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDc2OCAmJiBpc09wZW4pIHtcclxuICAgICAgICBzZXRJc09wZW4oZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICBoYW5kbGVSZXNpemUoKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICB9LCBbaXNPcGVuXSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZU5hdmJhciA9ICgpID0+IHtcclxuICAgIHNldElzT3BlbighaXNPcGVuKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJmaXhlZCB6LTUwIHctZnVsbCBiZy1ibGFjayBiZy1vcGFjaXR5LTYwIGJhY2tkcm9wLWJsdXItbWRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1bMTU1MHB4XSBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG14LWF1dG8gcC00XCI+XHJcbiAgICAgICAgPExpbmtcclxuICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMyBydGw6c3BhY2UteC1yZXZlcnNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LmlpaXRuci5hYy5pbi9zaXRlcy9hbGwvdGhlbWVzL2lpaXQvaGVhZC5wbmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTlcIlxyXG4gICAgICAgICAgICBhbHQ9XCJpIGxvdmUgaWlpdG5yIGxvZ29cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlbGYtY2VudGVyIHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxnOnRleHQtMnhsXCI+XHJcbiAgICAgICAgICAgICAgSSA8ZW0+PC9lbT5Mb3ZlIElJSVQgTmF5YSBSYWlwdXJcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVOYXZiYXJ9XHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTEwIGgtMTAgcC0yIHRleHQtcmVkLTUwMCByb3VuZGVkLWxnIG1kOmhpZGRlbiBob3ZlcjpiZy1ncmF5LTgwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS0zMDBcIlxyXG4gICAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhci1kZWZhdWx0XCJcclxuICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e2lzT3Blbn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb24gbWVudTwvc3Bhbj5cclxuICAgICAgICAgIHtpc09wZW4gPyAoXHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTUgaC01XCJcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk02IDE4TDE4IDZNNiA2bDEyIDEyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTUgaC01XCJcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNyAxNFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICAgICAgICAgICAgICBkPVwiTTEgMWgxNU0xIDdoMTVNMSAxM2gxNVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNPcGVuID8gXCJibG9ja1wiIDogXCJoaWRkZW5cIn0gdy1mdWxsIG1kOmJsb2NrIG1kOnctYXV0b2B9XHJcbiAgICAgICAgICBpZD1cIm5hdmJhci1kZWZhdWx0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTQgbXQtNCBmb250LW1lZGl1bSBiZy1ncmF5LTkwMCBib3JkZXIgYm9yZGVyLWdyYXktMTAwIHJvdW5kZWQtbGcgbWQ6cC0wIG1kOmZsZXgtcm93IG1kOnNwYWNlLXgtNiBydGw6c3BhY2UteC1yZXZlcnNlIG1kOm10LTAgbWQ6Ym9yZGVyLTAgbWQ6YmctdHJhbnNwYXJlbnQgbWQ6ZGFyazpiZy10cmFuc3BhcmVudFwiPlxyXG4gICAgICAgICAgICB7bmF2TGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsuaHJlZn1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmxvY2sgcHktMiBweC0xIGxnOnB4LTMgcm91bmRlZC1tZCBtZDpwLTAgdGV4dC13aGl0ZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSA9PT0gbGluay5ocmVmXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiYmctcmVkLTQwMCBiZy10cmFuc3BhcmVudCBtZDpiZy10cmFuc3BhcmVudCBtZDp0ZXh0LXJlZC01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcImhvdmVyOmJnLWdyYXktODAwIG1kOmhvdmVyOmJnLXRyYW5zcGFyZW50IG1kOmhvdmVyOnRleHQtcmVkLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWN1cnJlbnQ9e3BhdGhuYW1lID09PSBsaW5rLmhyZWYgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX0gLy8gQ2xvc2UgbW9iaWxlIG1lbnUgb24gbGluayBjbGlja1xyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7bGluay5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJ1c2VQYXRobmFtZSIsIk5hdmJhciIsImlzT3BlbiIsInNldElzT3BlbiIsInBhdGhuYW1lIiwibmF2TGlua3MiLCJuYW1lIiwiaHJlZiIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvZ2dsZU5hdmJhciIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImltZyIsInNyYyIsImFsdCIsInNwYW4iLCJlbSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ0eXBlIiwiYXJpYS1jb250cm9scyIsImFyaWEtZXhwYW5kZWQiLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZVdpZHRoIiwiZCIsImlkIiwidWwiLCJtYXAiLCJsaW5rIiwiaW5kZXgiLCJsaSIsImFyaWEtY3VycmVudCIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Navbar.js\n"));

/***/ })

});