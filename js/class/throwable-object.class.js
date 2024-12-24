class ThrowableObject extends Movement {
  w = 24;
  h = 24;
  y_start= -50;  

  IMG_BUBBLE =
    "../../asset/img/art/7_effects/bubble_b2_transparent.png";

  constructor() {
    super().loadImage(this.IMG_BUBBLE);
    this.throw(150,150);
  }

  throw(x,y){
    this.x = x;
    this.y = y;

    const interval = setInterval(() => {
        this.x += 2;
        this.y -= Math.pow(0.5, 2);         
        if (
            this.x > 1500 || this.y > 550 || 
            this.x < -100 || this.y < -100
        ) {
            clearInterval(interval);
            console.log("Objekt nicht mehr sichtbar, Intervall gestoppt");
        }
    }, 1000 / 60);

  }
}
