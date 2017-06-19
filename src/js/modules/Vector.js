/**
 * ベクトルの演算をする静的クラス
 */
export default class Vector {
  static sub(v1, v2) {
    return {
      x: v1.x - v2.x,
      y: v1.y - v2.y,
    };
  }

  static div(n) {
    this.x = this.x / n;
    this.y = this.y / n;
  }

  static mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  static normalize() {
    const m = this.mag();

    if (m !== 0) {
      this.div(m);
    }
  }

  static random2D() {
    this.x = (Math.random() * 2) - 1;
    this.y = (Math.random() * 2) - 1;

    this.normalize();

    return {
      x: this.x,
      y: this.y
    };
  }

  static constrain(n, min, max) {
    return Math.max(Math.min(n, max), min);
  }
}
