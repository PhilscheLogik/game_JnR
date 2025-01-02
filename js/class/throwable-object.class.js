class ThrowableObject extends Movement {
  w = 24;
  h = 24;
  y_start= -50;  

  IMG_BUBBLE =
    "../../asset/img/art/7_effects/bubble_b2_transparent.png";

  constructor(x,y, divisor) {
    super().loadImage(this.IMG_BUBBLE);
    this.totalFrames = divisor; 
    this.throw(x,y);
     
  }

  throw(x,y){
    this.x = x+50;
    this.y = y+10;

    const interval = setInterval(() => {
        this.x += 2;
        this.y -= Math.pow(0.5, 2);        
    }, 1000 / 60);

    // intervalIds.push(interval);

  }
}
