class Bubbles extends Movement {
    constructor() {
      super().loadImage(
        "../../asset//img/img_sharkie/3_background/Alternativ/background 3/5.png"
      );
      this.y = 0 + Math.random()*100;     
      this.w = 576;
      this.h = 324;
    }
  }
  