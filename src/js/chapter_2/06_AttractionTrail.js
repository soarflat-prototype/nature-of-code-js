import PVector from '../modules/PVector';
import random from '../modules/random';

class Attractor {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');

    // Vector Setup
    this.location = new PVector(this.cw / 2, this.ch / 2);
    this.mass = 30;
    this.G = 1;
  }

  draw() {
    this.ctx.fillStyle = 'white';
    this.ctx.beginPath();
    this.ctx.arc(this.location.x, this.location.y, this.mass, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  attract(mover) {
    const direction = PVector.sub(this.location, mover.location);
    const force = new PVector(direction.x, direction.y);
    let distance = force.mag();
    distance = PVector.constrain(distance, 5, 20);

    force.normalize();
    const strength = (this.G * this.mass * mover.mass) / (distance * distance);
    force.mult(strength);

    return force;
  }
}

class Mover {
  constructor(x, y) {
    // Canvas Setup
    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');

    // Vector Setup
    this.location = new PVector(x, y);
    this.velocity = new PVector(1, 0);
    this.acceleration = new PVector(0, 0);
    this.mass = 1;
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

  draw() {
    this.ctx.fillStyle = 'white';
    this.ctx.beginPath();
    this.ctx.arc(this.location.x, this.location.y, 10, 0, 2 * Math.PI);
    this.ctx.fill();
  }
}

class Main {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');

    this.mover = new Mover(this.cw / 3, this.ch / 4);
    this.attractor = new Attractor();
    this.animation = this.animation.bind(this);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.cw, this.ch);

    const f = this.attractor.attract(this.mover);

    this.mover.applyForce(f);
    this.mover.update();

    this.attractor.draw();
    this.mover.draw();
  }

  animation() {
    window.requestAnimationFrame(this.animation);
    this.draw();
  }
}

const main = new Main();

main.animation();
