import PVector from './modules/PVector';
import random from './modules/random';

class Mover {
  applyForce(force) {
    let f = force.get();

    // 力を質量で除算
    f.x = f.x / this.mass;
    f.y = f.y / this.mass;
    this.acceleration.add(f);
  }

  constructor(x, y, mass) {
    // Canvas Setup
    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = 'white';

    // Vector Setup
    this.location = new PVector(x, y);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
    this.mass = mass;
    this.wind = new PVector(0.01, 0);
    this.gravity = new PVector(0, 0.1 * mass);
    // 摩擦係数
    this.c = 0.1;
    // 垂直抗力
    this.normal = 1;
    this.frictionMag = this.c * this.normal;
  }

  update() {
    const friction = new PVector(this.velocity.get().x, this.velocity.get().y);
    friction.mult(-1);
    friction.normalize();
    friction.mult(this.frictionMag);

    this.applyForce(friction);
    this.applyForce(this.wind);
    this.applyForce(this.gravity);
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
    this.ctx.beginPath();
    this.ctx.arc(this.location.x, this.location.y, this.mass, 0, 2 * Math.PI);
    this.ctx.fill();
  }
}

class Movers {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.movers = [];
    this.count = 30;
    this.animation = this.animation.bind(this);

    for(let i = 0; i < this.count; i += 1) {
      this.movers.push(new Mover(0, 0, random(5, 15)));
    }
  }

  animation() {
    window.requestAnimationFrame(this.animation);
    this.update();
    this.checkEdges();
    this.draw();
  }

  update() {
    this.movers.forEach((mover) => {
      mover.update();
    });
  }

  checkEdges() {
    this.movers.forEach((mover) => {
      mover.checkEdges();
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.cw, this.ch);

    this.movers.forEach((mover) => {
      mover.draw();
    });
  }
}

const movers = new Movers();

movers.animation();
