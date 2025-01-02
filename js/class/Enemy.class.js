class Enemy extends Movement {
  frameIndex = 0;
  totalFrames = 6;  
  w = 192;

  constructor(path, divisor) {
    super().loadImage(path);
    this.x = 150 + Math.random() * 500;
    this.y = 150 + Math.random() * 200;
    this.totalFrames = divisor;     

    this.speed = 0.5 + Math.random() * 2;
    this.animate();
  }

  animate() {
    if (Math.random() < 0.45) {
      this.moveToRight();
    } else {
      this.moveToLeft();
    }

    setInterval(() => {
      this.frameIndex++;
      if (this.frameIndex >= this.totalFrames) {
        this.frameIndex = 0;
      }
    }, 200);
    
  }
}
