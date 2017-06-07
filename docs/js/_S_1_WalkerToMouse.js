class WalkerToMouse {

  constructor(option) {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = 'white';
    this.halfWidth = window.innerWidth / 2;
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    this.mousePointX = 0;
    this.animation = this.animation.bind(this);
    this.addEventListener();
  }

  step() {
    const stepX = (this.mousePointX > this.halfWidth) ? Math.random() * 2 : Math.random() * 2 - 2;
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

  addEventListener() {
    this.canvas.addEventListener('mousemove', (e) => {
      this.mousePointX = e.clientX;
    });
  }

}

const walkerToMouse = new WalkerToMouse();

walkerToMouse.animation();
