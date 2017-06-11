import PVector from './modules/PVector';

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
    this.wind = new PVector(1, 0);
    this.gravity = new PVector(0, 10);
    this.mass = 10;

    this.radius = 10;
    this.topSpeed = 5;
    this.animation = this.animation.bind(this);
  }

  applyForce(force) {
    let f = force.get();

    // 力を質量で除算
    f.x = f.x / this.mass;
    f.y = f.y / this.mass;
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }

  checkEdges() {
    if (this.location.x > this.cw) {
      this.location.x = this.cw;
      this.velocity.x *= -1;
    } else if (this.location.x < 0) {
      this.location.x = 0;
      this.velocity.x *= -1;
    }

    if (this.location.y > this.ch) {
      this.location.y = this.ch;
      this.velocity.y *= -1;
    } else if (this.location.y < 0) {
      this.location.y = 0;
      this.velocity.y *= -1;
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
    this.applyForce(this.wind);
    this.applyForce(this.gravity);
    this.update();
    this.checkEdges();
    this.draw();
  }
}

const mover = new Mover();

mover.animation();
