import Calculation from '../modules/Calculation';

class Sketch {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = 'white';
    this.ctx.globalAlpha = 0.8;
    this.startAngle = 0;
    this.aVelocity = 0.1;
    this.animation = this.animation.bind(this);
  }

  update() {
    this.startAngle += 0.02;
  }

  draw() {
    let angle = this.startAngle;

    this.ctx.clearRect(0, 0, this.cw, this.ch);
    this.ctx.beginPath();

    for (let x = 0; x <= this.cw; x += 24) {
      const y = Calculation.map(Math.sin(angle), -1, 1, 0, this.ch);
      this.ctx.beginPath();
      this.ctx.arc(x, y, 30, 0, 2 * Math.PI);
      this.ctx.fill();
      angle += this.aVelocity;
    }
  }

  animation() {
    window.requestAnimationFrame(this.animation);
    this.update();
    this.draw();
  }
}

const sketch = new Sketch();

sketch.animation();
