class Angular {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.angle = 0;
    this.aVelocity = 0;
    this.aAcceleration = 0.0001;
    this.ctx.translate(this.cw / 2, this.ch / 2);
  }

  update() {
    this.aVelocity += this.aAcceleration;
    this.angle += this.aVelocity;
  }

  draw() {
    this.ctx.strokeStyle = 'white';
    this.ctx.fillStyle = 'white';
    this.ctx.clearRect(0, 0, this.cw, this.ch);
    this.ctx.rotate(this.angle * Math.PI / 180);

    this.ctx.beginPath();
    this.ctx.moveTo(-50, 0);
    this.ctx.lineTo(50, 0);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.arc(50, 0, 10, 0, 2 * Math.PI);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.arc(-50, 0, 10, 0, 2 * Math.PI);
    this.ctx.stroke();
  }
}

class Sketch {
  constructor() {
    this.angular = new Angular();
    this.animation = this.animation.bind(this);
  }

  update() {
    this.angular.update();
  }

  draw() {
    this.angular.draw();
  }

  animation() {
    window.requestAnimationFrame(this.animation);
    this.update();
    this.draw();
  }
}

const sketch = new Sketch();

sketch.animation();
