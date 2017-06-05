import Walker from './modules/Walker';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const walker = new Walker({ ctx: ctx });

walker.animation();
