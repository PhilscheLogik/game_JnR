class Bubble extends Movement {
  w = 720;
  h = 405;

  constructor(path) {
    super().loadImage(path);
    this.y = 480; 
    this.x= -100 + Math.random() * 200;   

    this.animate();
  }
//--------------------------------------
  animate(){
    setInterval( () => {
      this.y -=0.5;

      if (this.y < -100) {
        this.y = 480; 
        this.x = -100 + Math.random() * 200; 
      }
    }, 100/6)


      
  }
}
