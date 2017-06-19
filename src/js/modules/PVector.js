/**
 * ベクトルの演算をするクラス
 */
export default class PVector {
  /**
   * @param {number} x - x方向のベクトル
   * @param {number} y - y方向のベクトル
   */
  constructor(x, y) {
    this.x = (x) ? x : 0;
    this.y = (y) ? y : 0;
  }

  /**
   * メンバ変数(x, y)に引数vのメンバ変数(x, y)を加算する
   * @param {object} v PVectorのインスタンス
   */
  add(v) {
    this.x = this.x + v.x;
    this.y = this.y + v.y;
  }

  /**
   * メンバ変数(x, y)に引数vのメンバ変数(x, y)を減算する
   * @param {object} v PVectorのインスタンス
   */
  sub(v) {
    this.x = this.x - v.x;
    this.y = this.y - v.y;
  }

  /**
   * メンバ変数(x, y)を引数で乗算する
   * @param {number} n 乗数
   */
  mult(n) {
    this.x = this.x * n;
    this.y = this.y * n;
  }

  /**
   * メンバ変数(x, y)を引数で除算する
   * @param {number} n 除数
   */
  div(n) {
    this.x = this.x / n;
    this.y = this.y / n;
  }

  /**
   * ベクトルの大きさを返す
   * @return {number} ベクトルの大きさ
   */
  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /**
   * 正規化（ベクトルの大きさを維持しつつ、大きさを1にすること）をする
   */
  normalize() {
    const m = this.mag();

    if (m !== 0) {
      this.div(m);
    }
  }

  /**
   * ベクトルの大きさが引数maxより大きい場合、ベクトルの大きさをmaxにする
   * @param {number} max - ベクトルの最大値
   */
  limit(max) {
    const m = this.mag();

    if (m > max) {
      this.normalize();
      this.mult(max)
    }
  }

  set(x, y) {
    this.x = x;
    this.y = y;
  }

  get() {
    return {
      x: this.x,
      y: this.y,
    };
  }

  static random2D() {
    this.x = (Math.random() * 2) - 1;
    this.y = (Math.random() * 2) - 1;

    this.staticNormalize();

    return {
      x: this.x,
      y: this.y
    };
  }

  static sub(v1, v2) {
    return {
      x: v1.x - v2.x,
      y: v1.y - v2.y,
    };
  }

  static staticNormalize() {
    const m = this.staticMag();

    if (m !== 0) {
      this.staticDiv(m);
    }
  }

  static staticMag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  static staticDiv(n) {
    this.x = this.x / n;
    this.y = this.y / n;
  }

  static staticDiv2(n1, n2) {
    const x = n1.x / n2;
    const y = n1.y / n2;

    return {
      x,
      y
    };
  }

  /**
   * @method constrain
   * @param  {Number} n    number to constrain
   * @param  {Number} min  minimum limit
   * @param  {Number} max  maximum limit
   * @return {Number}      constrained number
   */
  static constrain(n, min, max) {
    return Math.max(Math.min(n, max), min);
  }
}