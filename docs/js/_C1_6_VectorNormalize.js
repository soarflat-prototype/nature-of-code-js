class PVector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  sub(v) {
    this.x = this.x - v.x;
    this.y = this.y - v.y;
  }

  mult(n) {
    this.x = this.x * n;
    this.y = this.y * n;
  }

  div(n) {
    this.x = this.x / n;
    this.y = this.y / n;
  }

  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  normalize() {
    const m = this.mag();

    if (m !== 0) {
      this.div(m);
    }
  }

}

class VectorNormalize {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.strokeStyle = 'white';
    this.ctx.fillStyle = 'white';
    this.mouse = { x: 0, y: 0};
    this.center = new PVector(window.innerWidth / 2, window.innerHeight / 2);
    this.animation = this.animation.bind(this);
    this.addEventListener();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.cw, this.ch);

    const mouse = new PVector(this.mouse.x, this.mouse.y);

    mouse.sub(this.center);
    mouse.normalize();
    mouse.mult(100);

    this.ctx.beginPath();
    this.ctx.moveTo(this.center.x, this.center.y);
    this.ctx.lineTo(this.center.x + mouse.x, this.center.y + mouse.y);
    this.ctx.stroke();
  }

  animation() {
    window.requestAnimationFrame(this.animation);
    this.draw();
  }

  addEventListener() {
    this.canvas.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
  }
}

const vectorNormalize = new VectorNormalize();

vectorNormalize.animation();
