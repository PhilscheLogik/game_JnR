class StatusBar extends DrawableObject {
  frameIndex = 0;
  totalFrames = 9;
  percentage = 100;
  otherDirection = false;

  x = 5;
  y = 5;
  w = 880;
  h = 48;

  IMG_LP_BAR = {
    path: "../../asset/img/img_sharkie/4_ui/status_bar/lp_bar.png",
    animationCount: 9,
  };

  constructor() {
    super().loadImage(this.IMG_LP_BAR.path);
    this.totalFrames = this.IMG_LP_BAR.animationCount;
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    this.resolveImageIndex();
    console.log(this.percentage);
    
    // hier muss war rein
  }

  resolveImageIndex() {
    if (this.percentage == 100) {
      this.frameIndex = 0;
      console.log(this.frameIndex,this.percentage);
    } else if (this.percentage > 87.5) {
      this.frameIndex = 1;
      console.log(this.frameIndex,this.percentage);
    } else if (this.percentage > 75) {
      this.frameIndex = 2;
      console.log(this.frameIndex,this.percentage);
    } else if (this.percentage > 62.5) {
      this.frameIndex = 3;
      console.log(this.frameIndex,this.percentage);
    } else if (this.percentage > 50) {
      this.frameIndex = 4;
      console.log(this.frameIndex,this.percentage);
    } else if (this.percentage > 37.5) {
      this.frameIndex = 5;
      console.log(this.frameIndex,this.percentage);
    } else if (this.percentage > 25) {
      this.frameIndex = 6;
      console.log(this.frameIndex,this.percentage);
    } else if (this.percentage > 12.5) {
      this.frameIndex = 7;
      console.log(this.frameIndex,this.percentage);
    } else if (this.percentage == 0) {
      this.frameIndex = 8;
      console.log(this.frameIndex,this.percentage);
    }
  }
}
