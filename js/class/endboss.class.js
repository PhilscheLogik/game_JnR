class Endboss extends Enemy {
  frameIndex = 0;
  w = 288;
  h = 72;
  energy = 640;

  speed = 0.1;

  IMG_DEATH = {
    path: "../../asset/img/art/2_enemy/7_endboss/3 Big bloated/Big_bloated_death.png",
    animationCount: 4,
  };

  IMG_WALK = {
    path: "../../asset/img/art/2_enemy/7_endboss/3 Big bloated/Big_bloated_walk2.png",
    animationCount: 6,
  };

  constructor(path, divisor) {
    super(path, divisor);

    this.totalFrames = divisor;

    this.x = 1000;
    this.y = -150;
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
