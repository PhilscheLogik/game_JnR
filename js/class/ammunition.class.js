class Ammunition extends Item {
  frameIndex = 0;
  totalFrames = 5;  
  w = 170;
  h=52;

  constructor() {
    super().loadImage("../../asset/img/art/8_items/munit_transparent.png");
    this.x = 150 + Math.random() * 600;
    this.y = Math.random() * 300;
    this.animate();    
  }

  
}
