class Enemy extends Movement {
  constructor() {
    super().loadImage("../../asset/img/img_sharkie/2_enemy/6_fish/Idle.png");
    this.x = 150 + Math.random() * 100;
    this.w = 192;
  }

  enlarge(factor) {
    this.w = this.w * factor;
    this.h = this.h * factor;
    
  }
}
