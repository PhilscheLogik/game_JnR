class Bubble extends Movement {
  w = 720;
  h = 405;

  constructor(path) {
    super().loadImage(path);
    this.y = 0 + Math.random() * 320; 
    this.x=0;   
  }
}
