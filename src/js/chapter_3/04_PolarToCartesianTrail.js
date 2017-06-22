class Sketch {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = 'white';
    this.r = 100;
    this.theta = 0;
    this.animation = this.animation.bind(this);
  }

  draw() {
    const x = this.r * Math.cos(this.theta);
    const y = this.r * Math.sin(this.theta);

    this.ctx.clearRect(0, 0, this.cw, this.ch);
    this.ctx.save();
    this.ctx.translate(this.cw / 2, this.ch / 2);
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(x - (30 / 2), y - (30 / 2), 30, 30);
    this.ctx.restore();
    this.theta += 0.05;
  }

  animation() {
    window.requestAnimationFrame(this.animation);
    this.draw();
  }
}

const sketch = new Sketch();

sketch.animation();
