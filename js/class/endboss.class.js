class Endboss extends Enemy {
  frameIndex = 0;
  w = 288;
  h = 72;
  energy = 240;

  constructor(path, divisor) {
    super(path,divisor)

    this.x = 1000;
    this.y = 200;
    
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
