class PVector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(v) {
    this.x = this.x + v.x;
    this.y = this.y + v.y;
  }
}

class BouncingBallVectors {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = 'white';
    this.location = new PVector(100, 100);
    this.velocity = new PVector(2.5, 5);
    this.radius = 2;
    this.animation = this.animation.bind(this);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.cw, this.ch);
    this.location.add(this.velocity);

    if (this.location.x > this.cw || this.location.x < 0) {
      this.velocity.x = this.velocity.x * -1;
    }

    if (this.location.y > this.ch || this.location.y < 0) {
      this.velocity.y = this.velocity.y * -1;
    }

    this.ctx.beginPath();
    this.ctx.arc(this.location.x, this.location.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  animation() {
    window.requestAnimationFrame(this.animation);
    this.draw();
  }
}

const bouncingBallVectors = new BouncingBallVectors();

bouncingBallVectors.animation();
