class Fishman extends Enemy {
  
    constructor() {
      super().loadImage(
        "../../asset/img/img_sharkie/2_enemy/5_fish_man/Idle.png"
      );
      this.x = 0 + Math.random()*600;  
      this.y= 0 + Math.random()*400;   
      this.w = 192;
    }
  }