/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Alphabet.js":
/*!****************************!*\
  !*** ./src/js/Alphabet.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Alphabet; });\nclass Alphabet {\n  constructor(name, ...characters) {\n    this.characters = []\n    this.name = name\n    this.target = '.js-alphabet'\n    this.BsClass = { char: 'badge badge-dark rounded-circle mr-1 display-4 ' }\n    characters && this.addChars(...characters)\n    this.renderChars()\n  }\n\n  get() {\n    return {\n      name: this.name,\n      characters: this.charact,\n    }\n  }\n\n  addOneChar(char) {\n    this.characters =\n      char.length === 1 && this.characters.findIndex(el => el === char) === -1\n        ? [...this.characters, char]\n        : this.characters\n  }\n\n  addChars(...parameters) {\n    parameters.forEach(param => this.addOneChar(param))\n  }\n\n  switchIndexes(firstChar, secondChar) {\n    if (\n      firstChar.length === 1 &&\n      secondChar.length === 1 &&\n      firstChar !== secondChar\n    ) {\n      const firstIndex = this.characters.findIndex(el => el === firstChar)\n      const secondIndex = this.characters.findIndex(el => el === secondChar)\n      this.updateCharList(firstChar, secondIndex)\n      this.updateCharList(secondChar, firstIndex)\n    }\n  }\n\n  updateCharList(char, index) {\n    index = index ? index : this.characters.findIndex(e => char === e)\n    this.characters =\n      index > -1\n        ? [\n            ...this.characters.slice(0, index),\n            char,\n            ...this.characters.slice(index + 1),\n          ]\n        : [...this.characters, char]\n  }\n\n  deleteOneChar(char) {\n    const index = this.characters.findIndex(el => el === char)\n    if (index > -1) {\n      this.characters = [\n        ...this.characters.slice(0, index),\n        ...this.characters.slice(index + 1),\n      ]\n    }\n  }\n\n  deleteChars(...chars) {\n    chars.forEach(char => this.deleteOneChar(char))\n  }\n  renderChars() {\n    this.characters.forEach(char => this.renderChar(char))\n  }\n  renderChar(char) {\n    const charEl = document.createElement('div')\n    charEl.className = `char ${this.BsClass.char}`\n    charEl.innerHTML = char\n    document\n      .querySelector(this.target)\n      .insertAdjacentElement('beforeend', charEl)\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/Alphabet.js?");

/***/ }),

/***/ "./src/js/Language.js":
/*!****************************!*\
  !*** ./src/js/Language.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Language; });\n/* harmony import */ var _Alphabet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alphabet */ \"./src/js/Alphabet.js\");\n\n\nclass Language {\n  constructor(name) {\n    this.name = name\n    this.alphabetList = []\n    this.dictionnary = []\n  }\n  get() {\n    return this\n  }\n\n  updateName(newName) {\n    newName = newName.trim()\n    this.name = newName.length > 0 ? newName : this.name\n  }\n\n  addAlphabet(newAlphabet) {\n    this.alphabetList =\n      newAlphabet instanceof _Alphabet__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n        ? [...this.alphabetList, newAlphabet]\n        : this.alphabetList\n  }\n\n  deleteAphabet(Alphabet, index) {\n    index = index\n      ? index\n      : this.alphabetList.findIndex(e => e.name === Alphabet.name)\n\n    this.alphabetList = [\n      ...this.alphabetList.slice(0, index),\n      ...this.alphabetList.slice(0, index + 1),\n    ]\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/Language.js?");

/***/ }),

/***/ "./src/js/Word.js":
/*!************************!*\
  !*** ./src/js/Word.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Word; });\n/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Language */ \"./src/js/Language.js\");\n\nclass Word {\n  constructor(word, type, lang) {\n    this.BsClass = 'col-lg-3'\n    this.target = '.js-word'\n    this.word = word.trim()\n    this.type = type || 'word'\n    this.translationWords = []\n    this.definition = []\n    this.lang = lang instanceof _Language__WEBPACK_IMPORTED_MODULE_0__[\"default\"] ? lang : new _Language__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('unknown')\n    this.renderWord()\n  }\n\n  get() {\n    return this\n  }\n\n  updateWord(word) {\n    word = word.trim()\n    this.word = word.length > 0 ? word : this.word\n  }\n\n  updateType(type) {\n    type = type.trim()\n    this.type = type.length > 0 ? type : this.type\n  }\n\n  addOneTranslation(word) {\n    this.translation =\n      word instanceof Word ? [...this.translation, word] : this.translation\n  }\n\n  addTranslations(...translations) {\n    translations.forEach(translation => this.addOneTranslation(translation))\n  }\n\n  updateTranslation(oldTranslation, newTranslation, index) {\n    index = index\n      ? index\n      : this.translation.findIndex(\n          e => e.word === oldTranslation.word && e.type === oldTranslation.type\n        )\n    this.translation =\n      newTranslation instanceof Word && index > -1\n        ? [\n            ...this.translation.slice(0, index),\n            newTranslation,\n            ...this.translation.slice(0, index + 1),\n          ]\n        : this.translation\n  }\n\n  deleteTranslation(word, index) {\n    index = index\n      ? index\n      : this.translation.findIndex(\n          e => e.word === word.word && e.type === word.type\n        )\n    this.translation =\n      word instanceof Word && index > -1\n        ? [\n            ...this.translation.slice(0, index),\n            ...this.translation.slice(0, index + 1),\n          ]\n        : this.translation\n  }\n  renderWord() {\n    const wordEl = document.createElement('div')\n    wordEl.className = this.BsClass\n    const wordHtml = `<div class=\"card bg-light pb-3 text-center m-3\">\n    <h5 class=\"card-header  bg-dark text-white\">${this.word}</h5> \n\n</div>`\n    wordEl.innerHTML = wordHtml\n    document\n      .querySelector(this.target)\n      .insertAdjacentElement('beforeend', wordEl)\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/Word.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n/* harmony import */ var _Alphabet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alphabet */ \"./src/js/Alphabet.js\");\n/* harmony import */ var _Word__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Word */ \"./src/js/Word.js\");\n\n\n\nconst alphabet = [\n  'a',\n  'b',\n  'c',\n  'd',\n  'e',\n  'f',\n  'g',\n  'h',\n  'i',\n  'j',\n  'k',\n  'l',\n  'm',\n  'n',\n  'o',\n  'p',\n  'q',\n  'r',\n  's',\n  't',\n  'u',\n  'v',\n  'w',\n  'x',\n  'y',\n  'z',\n]\nconst word = [\n  'ABONNIRONS',\n  'ABONNIRONT',\n  'ABORD',\n  'ABORDA',\n  'ABORDABLE',\n  'ABORDABLES',\n  'ABORDAGE',\n  'ABORDAGES',\n  'ABORDAI',\n  'ABORDAIENT',\n  'ABORDAIS',\n  'ABORDAIT',\n  'ABORDAMES',\n  'ABORDANT',\n  'ABORDAS',\n  'ABORDASSE',\n  'ABORDASSENT',\n  'ABORDASSES',\n  'ABORDASSIEZ',\n  'ABORDASSIONS',\n  'ABORDAT',\n  'ABORDATES',\n  'ABORDE',\n  'ABORDEE',\n  'ABORDEES',\n  'ABORDENT',\n  'ABORDER',\n  'ABORDERA',\n  'ABORDERAI',\n  'ABORDERAIENT',\n  'ABORDERAIS',\n  'ABORDERAIT',\n  'ABORDERAS',\n  'ABORDERENT',\n  'ABORDEREZ',\n  'ABORDERIEZ',\n  'ABORDERIONS',\n  'ABORDERONS',\n  'ABORDERONT',\n  'ABORDES',\n  'ABORDEUR',\n  'ABORDEURS',\n  'ABORDEZ',\n  'ABORDIEZ',\n  'ABORDIONS',\n  'ABORDONS',\n  'ABORDS',\n  'ABORIGENE',\n]\n\nnew _Alphabet__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('fran8', ...alphabet)\nword.forEach(word => new _Word__WEBPACK_IMPORTED_MODULE_2__[\"default\"](word))\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: get, getAll, initModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAll\", function() { return getAll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initModule\", function() { return initModule; });\nfunction get(sel) {\n  return document.querySelector(sel)\n}\n\nfunction getAll(sel) {\n  return Array.from(document.querySelectorAll(sel))\n}\n\nfunction initModule(name, callback) {\n  getAll(`[data-js=${name}]`).forEach(el => {\n    callback(el)\n  })\n}\n\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ })

/******/ });