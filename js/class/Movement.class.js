class Movement {
  x = 20;
  y = 30;
  w = 150;
  h = 100;


  img;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveTo() {
    console.log("test");
  }
}
