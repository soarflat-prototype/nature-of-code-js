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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ベクトルの演算をするクラス
 */
var PVector = function () {
  /**
   * @param {number} x - x方向のベクトル
   * @param {number} y - y方向のベクトル
   */
  function PVector(x, y) {
    _classCallCheck(this, PVector);

    this.x = x ? x : 0;
    this.y = y ? y : 0;
  }

  /**
   * メンバ変数(x, y)に引数vのメンバ変数(x, y)を加算する
   * @param {object} v PVectorのインスタンス
   */


  _createClass(PVector, [{
    key: "add",
    value: function add(v) {
      this.x = this.x + v.x;
      this.y = this.y + v.y;
    }

    /**
     * メンバ変数(x, y)に引数vのメンバ変数(x, y)を減算する
     * @param {object} v PVectorのインスタンス
     */

  }, {
    key: "sub",
    value: function sub(v) {
      this.x = this.x - v.x;
      this.y = this.y - v.y;
    }

    /**
     * メンバ変数(x, y)を引数で乗算する
     * @param {number} n 乗数
     */

  }, {
    key: "mult",
    value: function mult(n) {
      this.x = this.x * n;
      this.y = this.y * n;
    }

    /**
     * メンバ変数(x, y)を引数で除算する
     * @param {number} n 除数
     */

  }, {
    key: "div",
    value: function div(n) {
      this.x = this.x / n;
      this.y = this.y / n;
    }

    /**
     * ベクトルの大きさを返す
     * @return {number} ベクトルの大きさ
     */

  }, {
    key: "mag",
    value: function mag() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /**
     * 正規化（ベクトルの大きさを維持しつつ、大きさを1にすること）をする
     */

  }, {
    key: "normalize",
    value: function normalize() {
      var m = this.mag();

      if (m !== 0) {
        this.div(m);
      }
    }

    /**
     * ベクトルの大きさが引数maxより大きい場合、ベクトルの大きさをmaxにする
     * @param {number} max - ベクトルの最大値
     */

  }, {
    key: "limit",
    value: function limit(max) {
      var m = this.mag();

      if (m > max) {
        this.normalize();
        this.mult(max);
      }
    }
  }, {
    key: "set",
    value: function set(x, y) {
      this.x = x;
      this.y = y;
    }
  }, {
    key: "get",
    value: function get() {
      return {
        x: this.x,
        y: this.y
      };
    }
  }], [{
    key: "random2D",
    value: function random2D() {
      this.x = Math.random() * 2 - 1;
      this.y = Math.random() * 2 - 1;

      this.staticNormalize();

      return {
        x: this.x,
        y: this.y
      };
    }
  }, {
    key: "sub",
    value: function sub(v1, v2) {
      return {
        x: v1.x - v2.x,
        y: v1.y - v2.y
      };
    }
  }, {
    key: "staticNormalize",
    value: function staticNormalize() {
      var m = this.staticMag();

      if (m !== 0) {
        this.staticDiv(m);
      }
    }
  }, {
    key: "staticMag",
    value: function staticMag() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }, {
    key: "staticDiv",
    value: function staticDiv(n) {
      this.x = this.x / n;
      this.y = this.y / n;
    }

    /**
     * @method constrain
     * @param  {Number} n    number to constrain
     * @param  {Number} min  minimum limit
     * @param  {Number} max  maximum limit
     * @return {Number}      constrained number
     */

  }, {
    key: "constrain",
    value: function constrain(n, min, max) {
      return Math.max(Math.min(n, max), min);
    }
  }]);

  return PVector;
}();

exports.default = PVector;

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PVector = __webpack_require__(0);

var _PVector2 = _interopRequireDefault(_PVector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mover = function () {
  function Mover() {
    _classCallCheck(this, Mover);

    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = 'white';
    this.location = new _PVector2.default(this.cw / 2, this.ch / 2);
    this.velocity = new _PVector2.default(0, 0);
    this.direction = new _PVector2.default(0, 0);
    this.mouse = {
      x: 0,
      y: 0
    };
    this.width = 30;
    this.height = 10;
    this.topSpeed = 5;
    this.animation = this.animation.bind(this);
    this.addEventListener();
  }

  _createClass(Mover, [{
    key: 'update',
    value: function update() {
      var dir = _PVector2.default.sub(this.mouse, this.location);
      this.direction.set(dir.x, dir.y);
      this.direction.normalize();
      this.direction.mult(0.5);

      var acceleration = this.direction;

      this.velocity.add(acceleration);
      this.velocity.limit(this.topSpeed);
      this.location.add(this.velocity);
    }
  }, {
    key: 'checkEdges',
    value: function checkEdges() {
      if (this.location.x > this.cw) {
        this.location.x = 0;
      } else if (this.location.x < 0) {
        this.location.x = this.cw;
      }

      if (this.location.y > this.ch) {
        this.location.y = 0;
      } else if (this.location.y < 0) {
        this.location.y = this.ch;
      }
    }
  }, {
    key: 'draw',
    value: function draw() {
      var angle = Math.atan2(this.velocity.y, this.velocity.x);

      this.ctx.clearRect(0, 0, this.cw, this.ch);
      this.ctx.save();
      this.ctx.translate(this.location.x, this.location.y);
      this.ctx.rotate(angle);
      this.ctx.fillStyle = 'white';
      this.ctx.fillRect(-(this.width / 2), -(this.height / 2), this.width, this.height);
      this.ctx.restore();
    }
  }, {
    key: 'animation',
    value: function animation() {
      window.requestAnimationFrame(this.animation);
      this.update();
      this.checkEdges();
      this.draw();
    }
  }, {
    key: 'addEventListener',
    value: function addEventListener() {
      var _this = this;

      this.canvas.addEventListener('mousemove', function (e) {
        _this.mouse.x = e.clientX;
        _this.mouse.y = e.clientY;
      });
    }
  }]);

  return Mover;
}();

var mover = new Mover();

mover.animation();

/***/ })

/******/ });