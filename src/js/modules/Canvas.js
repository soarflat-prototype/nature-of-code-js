export default class Canvas {
  constructor(option) {
    this.canvas = document.getElementById(option.el);
    this.canvas.width = this.cw = window.innerWidth;
    this.canvas.height = this.ch = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = 'white';
    this.ctx.strokeStyle = 'white';
  }
}