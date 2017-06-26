import Canvas from '../modules/Canvas';
import PVector from '../modules/PVector';
import Vector from '../modules/Vector';

class Bob extends Canvas {
  constructor(option) {
    super(option);

    this.location = new PVector(this.cw / 2, 300);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
    this.gravity = new PVector(0, 20);
    this.damping = 0.98;
    this.mass = 24;
    this.c = 0.5;
    this.normal = 1;
    this.frictionMag = this.c * this.normal;
  }

  applyForce(force) {
    let f = force.get();

    f.x = f.x / this.mass;
    f.y = f.y / this.mass;
    this.acceleration.add(f);
  }

  update() {
    const friction = new PVector(this.velocity.get().x, this.velocity.get().y);
    friction.mult(-1);
    friction.normalize();
    friction.mult(this.frictionMag);

    this.applyForce(friction);
    this.applyForce(this.gravity);
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.location.x, this.location.y, this.mass * 2, 0, 2 * Math.PI);
    this.ctx.fill();
  }
}

class Spring extends Canvas {
  constructor(option) {
    super(option);

    this.anchor = new PVector(this.cw / 2, 0);
    this.length = 300;
    this.k = 0.1;
  }

  connect(bob) {
    const vector = Vector.sub(bob.location, this.anchor);
    const force = new PVector(vector.x, vector.y);
    const d = force.mag();
    const stretch = d - this.length;

    force.normalize();
    force.mult(-1 * this.k * stretch);
    bob.applyForce(force);
  }

  draw(bob) {
    this.ctx.fillRect(this.anchor.x - 15, this.anchor.y, 30, 30);
    this.ctx.beginPath();
    this.ctx.moveTo(this.anchor.x, this.anchor.y);
    this.ctx.lineTo(bob.location.x, bob.location.y);
    this.ctx.stroke();
  }
}

class Sketch extends Canvas {
  constructor(option) {
    super(option);

    this.bob = new Bob({el: 'canvas'});
    this.spring = new Spring({el: 'canvas'});
    this.animation = this.animation.bind(this);
  }

  draw() {
    this.spring.connect(this.bob);
    this.bob.update();
    this.ctx.clearRect(0, 0, this.cw, this.ch);
    this.bob.draw();
    this.spring.draw(this.bob);
  }

  animation() {
    window.requestAnimationFrame(this.animation);
    this.draw();
  }
}

const sketch = new Sketch({el: 'canvas'});

sketch.animation();
