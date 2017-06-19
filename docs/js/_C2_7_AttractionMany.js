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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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
  }, {
    key: "staticDiv2",
    value: function staticDiv2(n1, n2) {
      var x = n1.x / n2;
      var y = n1.y / n2;

      return {
        x: x,
        y: y
      };
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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = random;
function random(min, max) {
  return Math.random() * (max + 1 - min) + min;
}

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PVector = __webpack_require__(0);

var _PVector2 = _interopRequireDefault(_PVector);

var _random = __webpack_require__(1);

var _random2 = _interopRequireDefault(_random);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Attractor = function () {
  function Attractor() {
    _classCallCheck(this, Attractor);

    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');

    // Vector Setup
    this.location = new _PVector2.default(this.cw / 2, this.ch / 2);
    this.mass = 30;
    this.G = 1;
  }

  _createClass(Attractor, [{
    key: 'draw',
    value: function draw() {
      this.ctx.fillStyle = 'white';
      this.ctx.beginPath();
      this.ctx.arc(this.location.x, this.location.y, this.mass, 0, 2 * Math.PI);
      this.ctx.fill();
    }
  }, {
    key: 'attract',
    value: function attract(mover) {
      var direction = _PVector2.default.sub(this.location, mover.location);
      var force = new _PVector2.default(direction.x, direction.y);
      var distance = force.mag();
      distance = _PVector2.default.constrain(distance, 5, 20);

      force.normalize();
      var strength = this.G * this.mass * mover.mass / (distance * distance);
      force.mult(strength);

      return force;
    }
  }]);

  return Attractor;
}();

var Mover = function () {
  function Mover(x, y, mass) {
    _classCallCheck(this, Mover);

    // Canvas Setup
    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');

    // Vector Setup
    this.location = new _PVector2.default(x, y);
    this.velocity = new _PVector2.default(1, 0);
    this.acceleration = new _PVector2.default(0, 0);
    this.mass = mass;
  }

  _createClass(Mover, [{
    key: 'applyForce',
    value: function applyForce(force) {
      var f = force.get();

      // 力を質量で除算
      f.x = f.x / this.mass;
      f.y = f.y / this.mass;
      this.acceleration.add(f);
    }
  }, {
    key: 'update',
    value: function update() {
      this.velocity.add(this.acceleration);
      this.location.add(this.velocity);
      this.acceleration.mult(0);
    }
  }, {
    key: 'draw',
    value: function draw() {
      this.ctx.fillStyle = 'white';
      this.ctx.beginPath();
      this.ctx.arc(this.location.x, this.location.y, this.mass, 0, 2 * Math.PI);
      this.ctx.fill();
    }
  }]);

  return Mover;
}();

var Movers = function () {
  function Movers() {
    _classCallCheck(this, Movers);

    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.movers = [];
    this.count = 30;

    for (var i = 0; i < this.count; i += 1) {
      this.movers.push(new Mover((0, _random2.default)(0, this.cw), (0, _random2.default)(0, this.ch), (0, _random2.default)(5, 25)));
    }
    this.animation = this.animation.bind(this);
    this.attractor = new Attractor();
  }

  _createClass(Movers, [{
    key: 'draw',
    value: function draw() {
      var _this = this;

      this.ctx.clearRect(0, 0, this.cw, this.ch);

      this.movers.forEach(function (mover) {
        var f = _this.attractor.attract(mover);

        mover.applyForce(f);
        mover.update();

        _this.attractor.draw();
        mover.draw();
      });
    }
  }, {
    key: 'animation',
    value: function animation() {
      window.requestAnimationFrame(this.animation);
      this.draw();
    }
  }]);

  return Movers;
}();

var movers = new Movers();

movers.animation();

/***/ })

/******/ });