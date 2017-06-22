import PVector from '../modules/PVector';
import random from '../modules/random';

class Oscillator {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = 'white';
    this.ctx.strokeStyle = 'white';

    this.angle = new PVector(0, 0);
    this.velocity = new PVector(random(0.01, 0.05) / 100, random(0.01, 0.05) / 100);
    this.amplitude = new PVector(random(0, this.cw / 2), random(0, this.ch / 2));
  }

  update() {
    this.angle.add(this.velocity);
  }

  draw() {
    const x = this.amplitude.x * Math.cos(this.angle.x);
    const y = this.amplitude.y * Math.cos(this.angle.y);

    this.ctx.save();
    this.ctx.translate(this.cw / 2, this.ch / 2);
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(x - 15, y - 15);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.arc(x - (30 / 2), y - (30 / 2), 15, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.restore();
  }
}

class Oscillators {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.oscillators = [];
    this.count = 30;

    for(let i = 0; i < this.count; i += 1) {
      this.oscillators.push(new Oscillator());
    }

    this.animation = this.animation.bind(this);
  }

  update() {
    this.oscillators.forEach((oscillator) => {
      oscillator.update();
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.cw, this.ch);
    this.oscillators.forEach((oscillator) => {
      oscillator.update();
      oscillator.draw();
    });
  }

  animation() {
    window.requestAnimationFrame(this.animation);
    this.update();
    this.draw();
  }
}

const oscillators = new Oscillators();

oscillators.animation();
