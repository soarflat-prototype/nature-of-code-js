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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calculation = function () {
  function Calculation() {
    _classCallCheck(this, Calculation);
  }

  _createClass(Calculation, null, [{
    key: "map",

    /**
     * ある範囲から別の範囲に数値を再マップする
     *
     * @method map
     * @param  {Number} value  変換される値
     * @param  {Number} start1 現在の値の範囲の下限
     * @param  {Number} stop1  現在の値の範囲の上限
     * @param  {Number} start2 再マップしたい値の範囲の下限
     * @param  {Number} stop2  再マップしたい値の範囲の上限
     * @return {Number}        再マップされた数値
     * @example
     * // returns 100
     * map(50, 0, 100, 0, 200)
     */
    value: function map(value, start1, stop1, start2, stop2) {
      return (value - start1) / (stop1 - start1) * (stop2 - start2) + start2;
    }
  }]);

  return Calculation;
}();

exports.default = Calculation;

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Calculation = __webpack_require__(2);

var _Calculation2 = _interopRequireDefault(_Calculation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sketch = function () {
  function Sketch() {
    _classCallCheck(this, Sketch);

    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.strokeStyle = 'white';
    this.angle = 0;
    this.aVelocity = 0.1;
  }

  _createClass(Sketch, [{
    key: 'draw',
    value: function draw() {
      this.ctx.beginPath();

      for (var x = 0; x <= this.cw; x += 5) {
        var y = _Calculation2.default.map(Math.sin(this.angle), -1, 1, 0, this.ch);
        this.ctx.lineTo(x, y);
        this.angle += this.aVelocity;
      }

      this.ctx.stroke();
    }
  }]);

  return Sketch;
}();

var sketch = new Sketch();

sketch.draw();

/***/ })

/******/ });