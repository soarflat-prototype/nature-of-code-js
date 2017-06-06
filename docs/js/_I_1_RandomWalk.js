class Walker {

  constructor(option) {
    this.ctx = option.ctx;
    this.ctx.fillStyle = 'white';
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    this.animation = this.animation.bind(this);
  }

  step() {
    const stepX = Math.random() * 2 - 1;
    const stepY = Math.random() * 2 - 1;

    this.x += stepX;
    this.y += stepY;
  }

  draw() {
    this.ctx.fillRect(this.x, this.y, 1, 1);
  }

  animation() {
    window.requestAnimationFrame(this.animation);
    this.step();
    this.draw();
  }

}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const walker = new Walker({ ctx: ctx });

walker.animation();
