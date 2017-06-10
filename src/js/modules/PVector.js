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
   * ベクトルの大きさを算出する
   */
  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /**
   * 正規化
   */
  normalize() {
    const m = this.mag();

    if (m !== 0) {
      this.div(m);
    }
  }

  limit(max) {
    const m = this.mag();

    if (m > max) {
      this.normalize();
      this.mult(max)
    }
  }
}