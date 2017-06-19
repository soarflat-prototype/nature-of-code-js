import PVector from '../modules/PVector';
import random from '../modules/random';

class Mover {
  constructor(x, y, mass) {
    // Canvas Setup
    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');

    // Vector Setup
    this.location = new PVector(x, y);
    this.velocity = new PVector(1, 0);
    this.acceleration = new PVector(0, 0);
    this.angle = 0;
    this.aVelocity = 0;
    this.aAcceleration = 0.1;
    this.mass = mass;
    this.G = 0.1;
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

    this.aAcceleration = this.acceleration.x;
    this.aVelocity += this.aAcceleration;
    this.aVelocity = PVector.constrain(this.aVelocity, -5, 5);
    this.angle += this.aVelocity;

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
    this.ctx.save();
    this.ctx.translate(this.location.x, this.location.y);
    this.ctx.rotate(this.angle * Math.PI / 180);
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(- (this.mass / 2), -(this.mass / 2), this.mass, this.mass);
    this.ctx.restore();
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

class Movers {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.movers = [];
    this.count = 30;

    for(let i = 0; i < this.count; i += 1) {
      this.movers.push(new Mover(random(0, this.cw), random(0, this.ch), random(5, 25)));
    }

    this.animation = this.animation.bind(this);
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

    this.movers.forEach((mover, index) => {
      this.movers.forEach((_mover, _index) => {
        if (_index !== index) {
          const f = _mover.attract(mover);
          mover.applyForce(f);
        }
      });

      mover.update();
      mover.checkEdges();
      mover.draw();
    });
  }

  animation() {
    window.requestAnimationFrame(this.animation);
    this.update();
    this.draw();
  }
}

const movers = new Movers();

movers.animation();
