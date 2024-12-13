class Enemy extends Movement {
  frameIndex = 0;
  totalFrames = 6;
  speed = 1;

  constructor() {
    super().loadImage("../../asset/img/img_sharkie/2_enemy/6_fish/Idle.png");
    this.x = 150 + Math.random() * 100;
    this.w = 192;

    this.speed = 0.5 + Math.random() * 2;
  }

  animate() {
    this.moveToRight();

    setInterval(() => {
      this.frameIndex++;
      if (this.frameIndex >= this.totalFrames) {
        this.frameIndex = 0;
      }
    }, 200);
  }
}
