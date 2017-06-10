import PVector from './modules/PVector';

class Mover {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = 'white';
    this.location = new PVector(this.cw / 2, this.ch / 2);
    this.velocity = new PVector(Math.floor(Math.random() * 3) - 2, Math.floor(Math.random() * 3) - 2);
    this.radius = 10;
    this.animation = this.animation.bind(this);
  }

  update() {
    this.location.add(this.velocity);
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
}

const mover = new Mover();

mover.animation();
