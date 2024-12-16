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

  swim_sound = new Audio("./asset/audio/effects/char/swim.mp3");

  constructor(path, divisor) {
    super().loadImage(path);

    this.totalFrames = divisor;

    // this.loadImages(this.IMG_ANIMATION);
    this.animate();
  }

  playSwimSound(audio) {
    if (audio.paused) {
      audio.currentTime = 0; // Zurücksetzen, wenn pausiert
      audio.play().catch((err) => {
        console.error('Fehler beim Abspielen des Sounds:', err);
      });
    }
  }

  animate() {
    setInterval(() => {
      this.swim_sound.pause();
      
      if (
        this.world.keyboard.RIGHT &&
        this.x < this.world.level.level_max_x_coordinate
      ) {
        this.x += this.speed;

        this.otherDirection = false;
        this.swim_sound.play();
      }

      if (this.world.keyboard.LEFT && this.x > 0) {
        this.x -= this.speed;

        this.otherDirection = true;
        this.swim_sound.play();
      }

      this.world.camera_x = -this.x;

      if (this.world.keyboard.UP && this.y > 0) {
        this.y -= this.speed;
        this.swim_sound.play();
      }

      if (this.world.keyboard.DOWN && this.y < this.world.level.level_max_y_coordinate) {
        this.y += this.speed;
        this.swim_sound.play();
      }

      // this.world.camera_y = -this.y;
    }, 100 / 6);

    setInterval(() => {
      if (
        this.world.keyboard.RIGHT ||
        this.world.keyboard.LEFT ||
        this.world.keyboard.UP ||
        this.world.keyboard.DOWN
      ) {
        if (this.x < this.world.level.level_max_x_coordinate) {
          this.x += this.speed;
        }
        if (this.x > 0) {
          this.x -= this.speed;
        }

        if (this.y > 0) {
          this.y -= this.speed;
        }

        if (this.y < this.world.level.level_max_y_coordinate) {
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
