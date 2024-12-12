class Fish extends Enemy {
  
    constructor() {
      super().loadImage(
        "../../asset/img/img_sharkie/2_enemy/6_fish/Idle.png"
      );
      this.w = 192; 
      this.h = 48;     
    //   this.enlarge(2);      
      this.x = 50 + Math.random()*550;  
      this.y= 0 + Math.random()*400;   
      
    }
  }