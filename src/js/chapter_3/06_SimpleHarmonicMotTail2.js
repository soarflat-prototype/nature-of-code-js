class Sketch {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = 'white';
    this.angle = 0;
    this.aVelocity = 0.05;
    this.animation = this.animation.bind(this);
  }

  draw() {
    const amplitude = 200;
    const x = amplitude * Math.cos(this.angle);
    this.angle += this.aVelocity;

    this.ctx.clearRect(0, 0, this.cw, this.ch);
    this.ctx.save();
    this.ctx.translate(this.cw / 2, this.ch / 2);
    this.ctx.fillRect(x - 15, -15, 30, 30);
    this.ctx.restore();
  }

  animation() {
    window.requestAnimationFrame(this.animation);
    this.draw();
  }
}

const sketch = new Sketch();

sketch.animation();
