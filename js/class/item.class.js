class Item extends Movement {
  

  constructor(imgPath) {
    super().loadImage(imgPath);
    this.x = 150 + Math.random() * 600;
    this.y = 50+Math.random() * 300;
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
