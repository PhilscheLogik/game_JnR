class Endboss extends Enemy {
  frameIndex = 0;
  w = 384;
  h = 48;

  constructor(path, divisor) {
    super().loadImage(path);    

    this.totalFrames = divisor;

    this.x = 500;
    this.y = 300;
    
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
