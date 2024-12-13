class Fishman extends Enemy {
  constructor(path, divisor) {
    super().loadImage(path);

    this.totalFrames = divisor;

    this.x = 50 + Math.random() * 550;
    this.y = 0 + Math.random() * 400;
    this.w = 192;
    this.animate();
  }
}
