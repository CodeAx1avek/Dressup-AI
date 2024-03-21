/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./libs/ga/index.ts":
/*!**************************!*\
  !*** ./libs/ga/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   event: () => (/* binding */ event),\n/* harmony export */   pageview: () => (/* binding */ pageview)\n/* harmony export */ });\n// log the pageview with their URL\nconst pageview = (url)=>{\n    window.gtag(\"config\", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {\n        page_path: url\n    });\n};\n// log specific events happening.\nconst event = ({ action, params })=>{\n    window.gtag(\"event\", action, params);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL2dhL2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQWtDO0FBQzNCLE1BQU1BLFdBQVcsQ0FBQ0M7SUFDckJDLE9BQU9DLElBQUksQ0FBQyxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLDRCQUE0QixFQUFFO1FBQzlEQyxXQUFXTjtJQUNiO0FBQ0YsRUFBQztBQUVELGlDQUFpQztBQUMxQixNQUFNTyxRQUFRLENBQUMsRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUU7SUFDdENSLE9BQU9DLElBQUksQ0FBQyxTQUFTTSxRQUFRQztBQUMvQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3V0Zml0YW55b25lLy4vbGlicy9nYS9pbmRleC50cz9hMzUwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxvZyB0aGUgcGFnZXZpZXcgd2l0aCB0aGVpciBVUkxcclxuZXhwb3J0IGNvbnN0IHBhZ2V2aWV3ID0gKHVybCkgPT4ge1xyXG4gICAgd2luZG93Lmd0YWcoJ2NvbmZpZycsIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9BTkFMWVRJQ1MsIHtcclxuICAgICAgcGFnZV9wYXRoOiB1cmwsXHJcbiAgICB9KVxyXG4gIH1cclxuICBcclxuICAvLyBsb2cgc3BlY2lmaWMgZXZlbnRzIGhhcHBlbmluZy5cclxuICBleHBvcnQgY29uc3QgZXZlbnQgPSAoeyBhY3Rpb24sIHBhcmFtcyB9KSA9PiB7XHJcbiAgICB3aW5kb3cuZ3RhZygnZXZlbnQnLCBhY3Rpb24sIHBhcmFtcylcclxuICB9Il0sIm5hbWVzIjpbInBhZ2V2aWV3IiwidXJsIiwid2luZG93IiwiZ3RhZyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HT09HTEVfQU5BTFlUSUNTIiwicGFnZV9wYXRoIiwiZXZlbnQiLCJhY3Rpb24iLCJwYXJhbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./libs/ga/index.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clerk/nextjs */ \"@clerk/nextjs\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _libs_ga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/libs/ga */ \"./libs/ga/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n// Import required modules and components\n\n\n\n\n\n\n// Define the App component\nfunction App({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    // Set up useEffect hook to handle route changes\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const handleRouteChange = (url)=>{\n            _libs_ga__WEBPACK_IMPORTED_MODULE_4__.pageview(url);\n        };\n        // Subscribe to route change events\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        // Unsubscribe from route change events when component is unmounted\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    // Render the ClerkProvider component wrapping the Component and passing pageProps\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__.ClerkProvider, {\n        frontendApi: process.env.pk_test_YWNjdXJhdGUtbW9yYXktNS5jbGVyay5hY2NvdW50cy5kZXYk,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\shakt\\\\Desktop\\\\CODE PLAY GROUND\\\\NODE JS\\\\Dressup-AI\\\\pages\\\\_app.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\shakt\\\\Desktop\\\\CODE PLAY GROUND\\\\NODE JS\\\\Dressup-AI\\\\pages\\\\_app.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBeUM7O0FBQ1g7QUFDZ0I7QUFFTjtBQUNSO0FBQ0U7QUFFbEMsMkJBQTJCO0FBQ1osU0FBU0ksSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUM1RCxNQUFNQyxTQUFTTixzREFBU0E7SUFFeEIsZ0RBQWdEO0lBQ2hERSxnREFBU0EsQ0FBQztRQUNSLE1BQU1LLG9CQUFvQixDQUFDQztZQUN6QlAsOENBQVcsQ0FBQ087UUFDZDtRQUVBLG1DQUFtQztRQUNuQ0YsT0FBT0ksTUFBTSxDQUFDQyxFQUFFLENBQUMsdUJBQXVCSjtRQUV4QyxtRUFBbUU7UUFDbkUsT0FBTztZQUNMRCxPQUFPSSxNQUFNLENBQUNFLEdBQUcsQ0FBQyx1QkFBdUJMO1FBQzNDO0lBQ0YsR0FBRztRQUFDRCxPQUFPSSxNQUFNO0tBQUM7SUFFbEIsa0ZBQWtGO0lBQ2xGLHFCQUNFLDhEQUFDWCx3REFBYUE7UUFDWmMsYUFBYUMsUUFBUUMsR0FBRyxDQUFDQyx3REFBd0Q7a0JBRWpGLDRFQUFDWjtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3V0Zml0YW55b25lLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgcmVxdWlyZWQgbW9kdWxlcyBhbmQgY29tcG9uZW50c1xyXG5pbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0IHsgQ2xlcmtQcm92aWRlciB9IGZyb20gXCJAY2xlcmsvbmV4dGpzXCI7XHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0ICogYXMgZ2EgZnJvbSAnQC9saWJzL2dhJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gRGVmaW5lIHRoZSBBcHAgY29tcG9uZW50XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vIFNldCB1cCB1c2VFZmZlY3QgaG9vayB0byBoYW5kbGUgcm91dGUgY2hhbmdlc1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgICBnYS5wYWdldmlldyh1cmwpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTdWJzY3JpYmUgdG8gcm91dGUgY2hhbmdlIGV2ZW50c1xyXG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcclxuXHJcbiAgICAvLyBVbnN1YnNjcmliZSBmcm9tIHJvdXRlIGNoYW5nZSBldmVudHMgd2hlbiBjb21wb25lbnQgaXMgdW5tb3VudGVkXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcclxuICAgIH07XHJcbiAgfSwgW3JvdXRlci5ldmVudHNdKTtcclxuXHJcbiAgLy8gUmVuZGVyIHRoZSBDbGVya1Byb3ZpZGVyIGNvbXBvbmVudCB3cmFwcGluZyB0aGUgQ29tcG9uZW50IGFuZCBwYXNzaW5nIHBhZ2VQcm9wc1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2xlcmtQcm92aWRlclxyXG4gICAgICBmcm9udGVuZEFwaT17cHJvY2Vzcy5lbnYucGtfdGVzdF9ZV05qZFhKaGRHVXRiVzl5WVhrdE5TNWpiR1Z5YXk1aFkyTnZkVzUwY3k1a1pYWWt9XHJcbiAgICA+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvQ2xlcmtQcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJDbGVya1Byb3ZpZGVyIiwidXNlUm91dGVyIiwiZ2EiLCJ1c2VFZmZlY3QiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsInBhZ2V2aWV3IiwiZXZlbnRzIiwib24iLCJvZmYiLCJmcm9udGVuZEFwaSIsInByb2Nlc3MiLCJlbnYiLCJwa190ZXN0X1lXTmpkWEpoZEdVdGJXOXlZWGt0TlM1amJHVnlheTVoWTJOdmRXNTBjeTVrWlhZayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@clerk/nextjs":
/*!********************************!*\
  !*** external "@clerk/nextjs" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@clerk/nextjs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();