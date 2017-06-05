class Walker {

  constructor(option) {
    this.ctx = option.ctx;
    this.ctx.fillStyle = 'white';
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    this.animation = this.animation.bind(this);
  }

  step() {
    const rand = Math.floor(Math.random() * 4);

    if (rand === 0) {
      this.x += 1;
    } else if (rand === 1) {
      this.x -= 1;
    } else if (rand === 2) {
      this.y += 1;
    } else if (rand === 3) {
      this.y -= 1;
    }
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

export default Walker;
