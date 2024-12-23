class Endboss extends Enemy {
  frameIndex = 0;
  w = 288;
  h = 72;

  constructor(path, divisor) {
    super().loadImage(path);    

    this.totalFrames = divisor;

    this.x = 1000;
    this.y = 200;
    
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.frameIndex++;
      if (this.frameIndex >= this.totalFrames) {
        this.frameIndex = 0;
      }
    }, 200);
  }
}
