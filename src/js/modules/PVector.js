/**
 * ベクトルの演算をするクラス
 */
export default class PVector {

  /**
   * @param {number} x - x方向のベクトル
   * @param {number} y - y方向のベクトル
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * 加算
   */
  add(v) {
    this.x = this.x - v.x;
    this.y = this.y - v.y;
  }

  /**
   * 減算
   */
  sub(v) {
    this.x = this.x - v.x;
    this.y = this.y - v.y;
  }

  /**
   * 掛け算
   */
  mult(n) {
    this.x = this.x * n;
    this.y = this.y * n;
  }

  /**
   * 割り算
   */
  div(n) {
    this.x = this.x / n;
    this.y = this.y / n;
  }

  /**
   * ベクトルの大きさを返す
   */
  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /**
   * 正規化（ベクトルの大きさを維持しつつ、大きさを1にすること）
   */
  normalize() {
    const m = this.mag();

    if (m !== 0) {
      this.div(m);
    }
  }

  /**
   * ベクトルの大きさが引数maxより大きい場合、ベクトルの大きさをmaxにする。
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
}