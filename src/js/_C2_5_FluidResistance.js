import PVector from './modules/PVector';
import random from './modules/random';

class Liquid {
  constructor(ctx, x, y, w, h, c) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
  }

  draw() {
    this.ctx.globalAlpha = 0.5;
    this.ctx.fillStyle = 'rgb(0, 0, 255)';
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
    this.ctx.globalAlpha = 1;
  }

  contains(mover) {
    const liquid = mover.location;

    return liquid.x > this.x && liquid.x < this.x + this.w && liquid.y > this.y && liquid.y < this.y + this.h;
  }

  drag(mover) {
    const speed = mover.velocity.mag();
    const dragMagnitude = this.c * speed * speed;
    const dragForce = new PVector(mover.velocity.x, mover.velocity.y);

    dragForce.mult(-1);
    dragForce.normalize();
    dragForce.mult(dragMagnitude);

    return dragForce;
  }
}

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

    // Vector Setup
    this.location = new PVector(x, y);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
    this.mass = mass;
    this.gravity = new PVector(0, 0.1 * mass);
  }

  update() {
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
    this.ctx.fillStyle = 'white';
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
    this.liquid = new Liquid(this.ctx, 0, this.ch / 2, this.cw, this.ch, 0.5);

    this.animation = this.animation.bind(this);

    for(let i = 0; i < this.count; i += 1) {
      this.movers.push(new Mover(random(0, this.cw), random(0, 100), random(5, 15)));
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
      if (this.liquid.contains(mover)) {
        const dragForce = this.liquid.drag(mover);
        mover.applyForce(dragForce);
      }
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
    this.liquid.draw();
    this.movers.forEach((mover) => {
      mover.draw();
    });
  }
}

const movers = new Movers();

movers.animation();
