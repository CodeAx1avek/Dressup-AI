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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clerk/nextjs */ \"@clerk/nextjs\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _libs_ga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/libs/ga */ \"./libs/ga/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    // Set up useEffect hook to handle route changes\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const handleRouteChange = (url)=>{\n            _libs_ga__WEBPACK_IMPORTED_MODULE_4__.pageview(url);\n        };\n        // Subscribe to route change events\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        // Unsubscribe from route change events when component is unmounted\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__.ClerkProvider, {\n        frontendApi: process.env.pk_test_YWNjdXJhdGUtbW9yYXktNS5jbGVyay5hY2NvdW50cy5kZXYk,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthWrapper, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shakt\\\\Desktop\\\\CODE PLAY GROUND\\\\NODE JS\\\\Dressup-AI\\\\pages\\\\_app.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\shakt\\\\Desktop\\\\CODE PLAY GROUND\\\\NODE JS\\\\Dressup-AI\\\\pages\\\\_app.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\shakt\\\\Desktop\\\\CODE PLAY GROUND\\\\NODE JS\\\\Dressup-AI\\\\pages\\\\_app.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\nfunction AuthWrapper({ children }) {\n    const { session } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        // Define an array of routes that should not trigger redirection\n        const nonRedirectRoutes = [\n            \"/SignInPage\",\n            \"/SignUpPage\"\n        ];\n        // Check if there's no active session and the current route is not exempt from redirection\n        if (!session && !nonRedirectRoutes.includes(router.pathname)) {\n            router.push(\"/AuthenticationPage\"); // Redirect to the authentication page\n        }\n    }, [\n        session,\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: children\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQzRCO0FBRWxCO0FBQ1I7QUFDRTtBQUtuQixTQUFTSyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVELE1BQU1DLFNBQVNOLHNEQUFTQTtJQUV4QixnREFBZ0Q7SUFDaERFLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTUssb0JBQW9CLENBQUNDO1lBQ3pCUCw4Q0FBVyxDQUFDTztRQUNkO1FBRUEsbUNBQW1DO1FBQ25DRixPQUFPSSxNQUFNLENBQUNDLEVBQUUsQ0FBQyx1QkFBdUJKO1FBRXhDLG1FQUFtRTtRQUNuRSxPQUFPO1lBQ0xELE9BQU9JLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLHVCQUF1Qkw7UUFDM0M7SUFDRixHQUFHO1FBQUNELE9BQU9JLE1BQU07S0FBQztJQUVsQixxQkFDRSw4REFBQ1osd0RBQWFBO1FBQ1plLGFBQWFDLFFBQVFDLEdBQUcsQ0FBQ0Msd0RBQXdEO2tCQUVqRiw0RUFBQ0M7c0JBQ0MsNEVBQUNiO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEM7QUFFQSxTQUFTWSxZQUFZLEVBQUVDLFFBQVEsRUFBaUM7SUFDOUQsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR3BCLHlEQUFVQTtJQUM5QixNQUFNTyxTQUFTTixzREFBU0E7SUFFeEJFLGdEQUFTQSxDQUFDO1FBQ1IsZ0VBQWdFO1FBQ2hFLE1BQU1rQixvQkFBb0I7WUFBQztZQUFlO1NBQWM7UUFFeEQsMEZBQTBGO1FBQzFGLElBQUksQ0FBQ0QsV0FBVyxDQUFDQyxrQkFBa0JDLFFBQVEsQ0FBQ2YsT0FBT2dCLFFBQVEsR0FBRztZQUM1RGhCLE9BQU9pQixJQUFJLENBQUMsd0JBQXdCLHNDQUFzQztRQUM1RTtJQUNGLEdBQUc7UUFBQ0o7UUFBU2I7S0FBTztJQUVwQixxQkFBTztrQkFBR1k7O0FBQ1oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vdXRmaXRhbnlvbmUvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5pbXBvcnQgeyBDbGVya1Byb3ZpZGVyLCB1c2VTZXNzaW9uIH0gZnJvbSBcIkBjbGVyay9uZXh0anNcIjtcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyBnYSBmcm9tICdAL2xpYnMvZ2EnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBdXRoZW50aWNhdGlvblBhZ2UgZnJvbSAnLi9BdXRoZW50aWNhdGlvblBhZ2UnO1xyXG5pbXBvcnQgU2lnbkluUGFnZSBmcm9tICcuL1NpZ25Jbic7IC8vIEltcG9ydCB5b3VyIHNpZ24taW4gcGFnZSBjb21wb25lbnRcclxuaW1wb3J0IFNpZ25VcFBhZ2UgZnJvbSAnLi9TaWduVXAnOyAvLyBJbXBvcnQgeW91ciBzaWduLXVwIHBhZ2UgY29tcG9uZW50XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLyBTZXQgdXAgdXNlRWZmZWN0IGhvb2sgdG8gaGFuZGxlIHJvdXRlIGNoYW5nZXNcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsOiBzdHJpbmcpID0+IHtcclxuICAgICAgZ2EucGFnZXZpZXcodXJsKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gU3Vic2NyaWJlIHRvIHJvdXRlIGNoYW5nZSBldmVudHNcclxuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcblxyXG4gICAgLy8gVW5zdWJzY3JpYmUgZnJvbSByb3V0ZSBjaGFuZ2UgZXZlbnRzIHdoZW4gY29tcG9uZW50IGlzIHVubW91bnRlZFxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtyb3V0ZXIuZXZlbnRzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2xlcmtQcm92aWRlclxyXG4gICAgICBmcm9udGVuZEFwaT17cHJvY2Vzcy5lbnYucGtfdGVzdF9ZV05qZFhKaGRHVXRiVzl5WVhrdE5TNWpiR1Z5YXk1aFkyTnZkVzUwY3k1a1pYWWt9XHJcbiAgICA+XHJcbiAgICAgIDxBdXRoV3JhcHBlcj5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvQXV0aFdyYXBwZXI+XHJcbiAgICA8L0NsZXJrUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQXV0aFdyYXBwZXIoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xyXG4gIGNvbnN0IHsgc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gRGVmaW5lIGFuIGFycmF5IG9mIHJvdXRlcyB0aGF0IHNob3VsZCBub3QgdHJpZ2dlciByZWRpcmVjdGlvblxyXG4gICAgY29uc3Qgbm9uUmVkaXJlY3RSb3V0ZXMgPSBbXCIvU2lnbkluUGFnZVwiLCBcIi9TaWduVXBQYWdlXCJdO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIHRoZXJlJ3Mgbm8gYWN0aXZlIHNlc3Npb24gYW5kIHRoZSBjdXJyZW50IHJvdXRlIGlzIG5vdCBleGVtcHQgZnJvbSByZWRpcmVjdGlvblxyXG4gICAgaWYgKCFzZXNzaW9uICYmICFub25SZWRpcmVjdFJvdXRlcy5pbmNsdWRlcyhyb3V0ZXIucGF0aG5hbWUpKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL0F1dGhlbnRpY2F0aW9uUGFnZVwiKTsgLy8gUmVkaXJlY3QgdG8gdGhlIGF1dGhlbnRpY2F0aW9uIHBhZ2VcclxuICAgIH1cclxuICB9LCBbc2Vzc2lvbiwgcm91dGVyXSk7XHJcblxyXG4gIHJldHVybiA8PntjaGlsZHJlbn08Lz47XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNsZXJrUHJvdmlkZXIiLCJ1c2VTZXNzaW9uIiwidXNlUm91dGVyIiwiZ2EiLCJ1c2VFZmZlY3QiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsInBhZ2V2aWV3IiwiZXZlbnRzIiwib24iLCJvZmYiLCJmcm9udGVuZEFwaSIsInByb2Nlc3MiLCJlbnYiLCJwa190ZXN0X1lXTmpkWEpoZEdVdGJXOXlZWGt0TlM1amJHVnlheTVoWTJOdmRXNTBjeTVrWlhZayIsIkF1dGhXcmFwcGVyIiwiY2hpbGRyZW4iLCJzZXNzaW9uIiwibm9uUmVkaXJlY3RSb3V0ZXMiLCJpbmNsdWRlcyIsInBhdGhuYW1lIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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