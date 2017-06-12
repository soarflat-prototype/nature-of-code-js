export default function random(min, max) {
  return (Math.random() * ((max + 1) - min)) + min;
}