class PVector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(v) {
    this.x = this.x - v.x;
    this.y = this.y - v.y;
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

  limit(max) {
    const m = this.mag();

    if (m > max) {
      this.normalize();
      this.mult(max)
    }
  }

  normalize() {
    const m = this.mag();

    if (m !== 0) {
      this.div(m);
    }
  }
}

class Mover {
  constructor() {
    // Canvas Setup
    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = 'white';

    // Vector Setup
    this.location = new PVector(30, 30);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);

    this.radius = 10;
    this.isMouseDown = false;
    this.animation = this.animation.bind(this);

    this.addEventListener();
  }

  /**
   * 力を加える
   */
  applyForce(force) {
    this.acceleration = force;
  }

  update() {
    if (this.isMouseDown) {
      const wind = new PVector(0.5, 0);
      this.applyForce(wind);
    }

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topSpeed);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }

  checkEdges() {
    if (this.location.x > this.cw) {
      this.location.x = 0;
    } else if (this.location.x < 0) {
      this.location.x = this.cw;
    }

    if (this.location.y > this.ch) {
      this.location.y = 0;
    } else if (this.location.y < 0) {
      this.location.y = this.ch;
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.cw, this.ch);
    this.ctx.beginPath();
    this.ctx.arc(this.location.x, this.location.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  animation() {
    window.requestAnimationFrame(this.animation);
    this.update();
    this.checkEdges();
    this.draw();
  }

  addEventListener() {
    this.canvas.addEventListener('mousedown', () => {
      this.isMouseDown = true;
    });

    this.canvas.addEventListener('mouseup', () => {
      this.isMouseDown = false;
      this.velocity.x = 0;
      this.velocity.y = 0;
    });
  }

}

const mover = new Mover();

mover.animation();
