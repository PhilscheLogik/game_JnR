class Endboss extends Enemy {
  frameIndex = 0;
  w = 288;
  h = 72;
  energy = 240;

  IMG_DEATH = {
    path: "../../asset/img/art/2_enemy/7_endboss/3 Big bloated/Big_bloated_death.png",
    animationCount: 4,
  };

  constructor(path, divisor) {
    super(path, divisor);

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
