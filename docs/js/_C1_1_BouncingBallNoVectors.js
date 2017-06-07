class BouncingBallNoVectors {

  constructor() {
    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = 'white';
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    this.radius = 5;
    this.xSpeed = 1;
    this.ySpeed = 3.3;
    this.animation = this.animation.bind(this);
  }

  draw() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x > this.cw || this.x < 0) {
      this.xSpeed = this.xSpeed * -1;
    }

    if (this.y > this.ch || this.y < 0) {
      this.ySpeed = this.ySpeed * -1;
    }

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  animation() {
    window.requestAnimationFrame(this.animation);
    this.draw();
  }

}

const bouncingBallNoVectors = new BouncingBallNoVectors();

bouncingBallNoVectors.animation();
