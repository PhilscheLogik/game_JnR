class StatusBar extends DrawableObject {
  frameIndex = 0;
  totalFrames = 9;
  percentage = 100;
  otherDirection = false;  

  IMG_LP_BAR = {
    path: "../../asset/img/art/4_ui/status_bar/lp2_bar.png",
    animationCount: 9,
    x: 5,
    y: 5,
    w: 864,
    h: 48,
  };

  IMG_COIN_BAR = {
    path: "../../asset/img/art/4_ui/status_bar/plasma_y_bar.png",
    animationCount: 9,
    x: 5,
    y: 50,
    w: 216,
    h: 96,
  };

  IMG_MUNI_BAR = {
    path: "../../asset/img/art/4_ui/status_bar/plasma_b_bar.png",
    animationCount: 9,
    x: 25,
    y: 50,
    w: 216,
    h: 96,
  };

  constructor(index) {
    super();

    if (index == 1) {
      this.initImage(this.IMG_LP_BAR)
    }
    if (index == 2) {
      this.initImage(this.IMG_COIN_BAR)
    }
    if (index == 3) {
      this.initImage(this.IMG_MUNI_BAR)
    }
  }

  initImage(obj){
    
      this.loadImage(obj.path);
      this.totalFrames = obj.animationCount;
      this.x = obj.x;
      this.y = obj.y;
      this.w = obj.w;
      this.h = obj.h;
    }

  setPercentage(percentage) {
    this.percentage = percentage;
    this.resolveImageIndex();
    console.log(this.percentage);

    // hier muss war rein
  }

  resolveImageIndex() {
    if (this.percentage == 80) {
      this.frameIndex = 0;
      console.log(this.frameIndex, this.percentage);
    } else if (this.percentage >= 70) {
      this.frameIndex = 1;
      console.log(this.frameIndex, this.percentage);
    } else if (this.percentage >= 60) {
      this.frameIndex = 2;
      console.log(this.frameIndex, this.percentage);
    } else if (this.percentage >= 50) {
      this.frameIndex = 3;
      console.log(this.frameIndex, this.percentage);
    } else if (this.percentage >= 40) {
      this.frameIndex = 4;
      console.log(this.frameIndex, this.percentage);
    } else if (this.percentage >= 30) {
      this.frameIndex = 5;
      console.log(this.frameIndex, this.percentage);
    } else if (this.percentage >= 20) {
      this.frameIndex = 6;
      console.log(this.frameIndex, this.percentage);
    } else if (this.percentage >= 10) {
      this.frameIndex = 7;
      console.log(this.frameIndex, this.percentage);
    } else if (this.percentage == 0) {
      this.frameIndex = 8;
      console.log(this.frameIndex, this.percentage);
    }
  }
}
