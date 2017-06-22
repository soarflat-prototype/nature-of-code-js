class Sketch {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = 'white';
    this.animation = this.animation.bind(this);
    this.start = null;
  }

  draw(frameCount) {
    const period = 1000;
    const amplitude = 200;
    const x = amplitude * Math.cos(Math.PI * frameCount / period);

    this.ctx.clearRect(0, 0, this.cw, this.ch);
    this.ctx.save();
    this.ctx.translate(this.cw / 2, this.ch / 2);
    this.ctx.fillRect(x - 15, -15, 30, 30);
    this.ctx.restore();
  }

  animation(timestamp) {
    window.requestAnimationFrame(this.animation);

    if (!this.start) {
      this.start = timestamp;
    }

    const frameCount = timestamp - this.start;

    this.draw(frameCount);
  }
}

const sketch = new Sketch();

sketch.animation();
