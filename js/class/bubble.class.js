class Bubble extends Movement {
  w = 720;
  h = 405;

  constructor(path, x, y) {
    super().loadImage(path);
    this.y = y; 
    this.x = -100 + Math.random() * 720 ;   
     

    this.moveToUp();
  }
}
