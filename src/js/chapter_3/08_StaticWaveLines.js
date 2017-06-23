import Calculation from '../modules/Calculation';

class Sketch {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.strokeStyle = 'white';
    this.angle = 0;
    this.aVelocity = 0.1;
  }

  draw() {
    this.ctx.beginPath();

    for (let x = 0; x <= this.cw; x += 5) {
      const y = Calculation.map(Math.sin(this.angle), -1, 1, 0, this.ch);
      this.ctx.lineTo(x, y);
      this.angle += this.aVelocity;
    }

    this.ctx.stroke();
  }
}

const sketch = new Sketch();

sketch.draw();
