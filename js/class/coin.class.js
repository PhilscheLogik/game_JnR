class Coin extends Item {
    frameIndex = 0;
    totalFrames = 8;  
    w = 384;
    h=48;
  
    constructor() {
      super().loadImage("../../asset/img/art/8_items/coin_transparent.png");
      this.x = 150 + Math.random() * 600;
      this.y = Math.random() * 300;
      this.animate();    
    }
}
