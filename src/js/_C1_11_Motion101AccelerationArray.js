import PVector from './modules/PVector';

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
    this.radius = 10;
    this.topSpeed = Math.random() * 5 + 10;
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
    this.ctx.beginPath();
    this.ctx.arc(this.location.x, this.location.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  addEventListener() {
    this.canvas.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
  }
}

class Movers {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.movers = [];
    this.count = 20;
    this.animation = this.animation.bind(this);

    for(let i = 0; i < this.count; i += 1) {
      this.movers.push(new Mover());
    }
  }

  animation() {
    window.requestAnimationFrame(this.animation);
    this.update();
    this.checkEdges();
    this.draw();
  }

  update() {
    for(let i = 0; i < this.count; i += 1) {
      this.movers[i].update();
    }
  }

  checkEdges() {
    for(let i = 0; i < this.count; i += 1) {
      this.movers[i].checkEdges();
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.cw, this.ch);
    for(let i = 0; i < this.count; i += 1) {
      this.movers[i].draw();
    }
  }
}

const movers = new Movers();

movers.animation();
