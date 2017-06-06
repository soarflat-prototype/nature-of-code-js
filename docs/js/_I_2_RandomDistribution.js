class Distribution {

  constructor(option) {
    this.ctx = option.ctx;
    this.ctx.fillStyle = 'white';
    this.count = 20;
    this.width = window.innerWidth / this.count;
    this.height = window.innerHeight;
    this.randomCounts = (() => {
      let array = [];
      for (let i = 0, max = this.count; i < max; i += 1) {
        array.push(0);
      }
      return array;
    })();
    this.animation = this.animation.bind(this);
  }

  draw() {
    const index = Math.floor(Math.random() * this.randomCounts.length);

    this.randomCounts[index] += 1;
    this.ctx.fillRect(index * this.width, this.height - this.randomCounts[index], this.width, 1);
  }

  animation() {
    window.requestAnimationFrame(this.animation);
    this.draw();
  }

}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const distribution = new Distribution({ ctx: ctx });

distribution.animation();
