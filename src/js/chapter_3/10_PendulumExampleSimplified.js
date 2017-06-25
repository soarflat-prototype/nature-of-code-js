import PVector from '../modules/PVector';
import Calculation from '../modules/Calculation';

class Pendulum {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.strokeStyle = 'white';
    this.ctx.fillStyle = 'white';

    this.location = new PVector(0, 0);
    this.origin = new PVector(this.cw / 2, 0);
    this.r = 200;
    this.angle = Math.PI / 4;
    this.aVelocity = 0.0;
    this.aAcceleration = 0.0;
    this.damping = 0.995;
    this.gravity = 0.4;
    this.animation = this.animation.bind(this);
  }

  update() {
    this.aAcceleration = (-1 * this.gravity / this.r) * Math.sin(this.angle);
    this.aVelocity += this.aAcceleration;
    this.angle += this.aVelocity;
    this.aVelocity *= this.damping;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.cw, this.ch);
    this.location.set(this.r * Math.sin(this.angle), this.r * Math.cos(this.angle));
    this.location.add(this.origin);

    this.ctx.beginPath();
    this.ctx.moveTo(this.origin.x, this.origin.y);
    this.ctx.lineTo(this.location.x, this.location.y);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.arc(this.location.x, this.location.y, 30, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  animation() {
    window.requestAnimationFrame(this.animation);
    this.update();
    this.draw();
  }
}

const pendulum = new Pendulum();

pendulum.animation();
