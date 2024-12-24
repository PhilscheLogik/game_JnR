class Fish extends Enemy {
  w = 192;
  h = 48;

  constructor(path, divisor) {
    super().loadImage(path);

    this.totalFrames = divisor;

    this.x = 150 + Math.random() * 500;
    this.y = 150 + Math.random() * 200;
    this.animate();
  }
}
