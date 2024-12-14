class PlayableCharacter extends Movement {
  // IMG_ANIMATION = [
  //   "../../asset/img/img_sharkie/1_sharkie/10_steam_man/Idle2.png",
  //   "../../asset/img/img_sharkie/1_sharkie/10_steam_man/Swim.png",
  //   "../../asset/img/img_sharkie/1_sharkie/10_steam_man/Swim2.png",
  // ];
  // currentIndex = 0;
  frameIndex = 0;
  totalFrames = 6;
  world;
  speed = 3;

  constructor(path, divisor) {
    super().loadImage(path);

    this.totalFrames = divisor;

    // this.loadImages(this.IMG_ANIMATION);
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT) {
        if (this.x < 670) {
          this.x += this.speed;          
        }
        this.otherDirection = false;
      }

      if (this.world.keyboard.LEFT) {
        if (this.x > 0) {
          this.x -= this.speed;          
        }
        this.otherDirection = true;
      }

      if (this.world.keyboard.UP) {
        if (this.y > 0) {
          this.y -= this.speed;
        }
      }

      if (this.world.keyboard.DOWN) {
        if (this.y < 430) {
          this.y += this.speed;
        }
      }
    }, 100 / 6);

    setInterval(() => {
      if (
        this.world.keyboard.RIGHT ||
        this.world.keyboard.LEFT ||
        this.world.keyboard.UP ||
        this.world.keyboard.DOWN
      ) {
        if (this.x < 670) {
          this.x += this.speed;
        }
        if (this.x > 0) {
          this.x -= this.speed;
        }

        if (this.y > 0) {
          this.y -= this.speed;
        }

        if (this.y < 410) {
          this.y += this.speed;
        }

        // Animation
        this.frameIndex++;
        if (this.frameIndex >= this.totalFrames) {
          this.frameIndex = 0;
        }
      }

      // let i = this.currentIndex % this.IMG_ANIMATION.length;
      // let path = this.IMG_ANIMATION[this.currentIndex];
      // this.img = this.imgCache[path];
      // this.currentIndex++;
      // if (this.currentIndex >= this.IMG_ANIMATION.length) {
      //   this.currentIndex = 0;
      // }
    }, 100);
  }
}
