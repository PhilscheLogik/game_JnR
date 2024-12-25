class Item extends Movement {
    
    animate() {
        setInterval(() => {
          this.frameIndex++;
          if (this.frameIndex >= this.totalFrames) {
            this.frameIndex = 0;
          }
        }, 200);
      }
}
