class PlayableCharacter extends Movement {
  // IMG_ANIMATION = [
  //   "../../asset/img/img_sharkie/1_sharkie/10_steam_man/Idle2.png",
  //   "../../asset/img/img_sharkie/1_sharkie/10_steam_man/Swim.png",
  //   "../../asset/img/img_sharkie/1_sharkie/10_steam_man/Swim2.png",
  // ];
  // currentIndex = 0;
  frameIndex = 0;
  totalFrames = 6;

  constructor(path, divisor) {
    super().loadImage(path);

    this.totalFrames = divisor;

    // this.loadImages(this.IMG_ANIMATION);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.frameIndex++;
      if (this.frameIndex >= this.totalFrames) {
        this.frameIndex = 0;
      }

      // let i = this.currentIndex % this.IMG_ANIMATION.length;
      // let path = this.IMG_ANIMATION[this.currentIndex];
      // this.img = this.imgCache[path];
      // this.currentIndex++;
      // if (this.currentIndex >= this.IMG_ANIMATION.length) {
      //   this.currentIndex = 0;
      // }
    }, 200);
  }
}
