import PVector from '../modules/PVector';

class Mover {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = 'white';
    this.location = new PVector(this.cw / 2, this.ch / 2);
    this.velocity = new PVector(0, 0);
    this.direction = new PVector(0, 0);
    this.mouse = {
      x: 0,
      y: 0,
    };
    this.width = 30;
    this.height = 10;
    this.topSpeed = 5;
    this.animation = this.animation.bind(this);
    this.addEventListener();
  }

  update() {
    const dir = PVector.sub(this.mouse, this.location);
    this.direction.set(dir.x, dir.y);
    this.direction.normalize();
    this.direction.mult(0.5);

    const acceleration = this.direction;

    this.velocity.add(acceleration);
    this.velocity.limit(this.topSpeed);
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
    const angle = Math.atan2(this.velocity.y, this.velocity.x);

    this.ctx.clearRect(0, 0, this.cw, this.ch);
    this.ctx.save();
    this.ctx.translate(this.location.x, this.location.y);
    this.ctx.rotate(angle);
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(-(this.width / 2), -(this.height / 2), this.width, this.height);
    this.ctx.restore();
  }

  animation() {
    window.requestAnimationFrame(this.animation);
    this.update();
    this.checkEdges();
    this.draw();
  }

  addEventListener() {
    this.canvas.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
  }
}

const mover = new Mover();

mover.animation();
