/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (936:9)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|  * @param {Function} fn Passed the created element and returns a boolean result\\n|  */\\n> function assert( fn ) {\\n| \\tvar el = document.createElement( \\\"fieldset\\\" );\\n| \");\n\n//# sourceURL=webpack://webpack-practice/./node_modules/jquery/dist/jquery.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/app.service */ \"./src/modules/app.service.js\");\n/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/config */ \"./src/modules/config.js\");\n/* harmony import */ var _modules_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/header.component */ \"./src/modules/header.component.js\");\n\r\n\r\n\r\n\r\nconsole.log(\"Config key:\", _modules_config__WEBPACK_IMPORTED_MODULE_1__.config.key);\r\n\r\nconst service = new _modules_app_service__WEBPACK_IMPORTED_MODULE_0__.default(\"Hello world!\");\r\nservice.log();\r\n\n\n//# sourceURL=webpack://webpack-practice/./src/index.js?");

/***/ }),

/***/ "./src/modules/app.service.js":
/*!************************************!*\
  !*** ./src/modules/app.service.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AppService)\n/* harmony export */ });\nclass AppService {\r\n  constructor(text) {\r\n    this.text = text;\r\n  }\r\n\r\n  log() {\r\n    console.log(\"[App service]:\", this.text);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://webpack-practice/./src/modules/app.service.js?");

/***/ }),

/***/ "./src/modules/config.js":
/*!*******************************!*\
  !*** ./src/modules/config.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config)\n/* harmony export */ });\nconst config = {\r\n  key: \"123456\",\r\n};\r\n\n\n//# sourceURL=webpack://webpack-practice/./src/modules/config.js?");

/***/ }),

/***/ "./src/modules/header.component.js":
/*!*****************************************!*\
  !*** ./src/modules/header.component.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\njquery__WEBPACK_IMPORTED_MODULE_0___default()(\"<h1 />\").text(\"Hello world from JQuery\").appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"header\"));\r\n\r\n// const header = document.querySelector(\"header\");\r\n\r\n// header.insertAdjacentHTML(\"afterbegin\", \"<h1></h1>\");\r\n\r\n// const h1 = document.querySelector(\"h1\");\r\n\r\n// h1.textContent = \"Hello world from JS\";\r\n\n\n//# sourceURL=webpack://webpack-practice/./src/modules/header.component.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;