class Movement {
  x = 20;
  y = 150;
  w = 288;
  h = 48;
  img;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveTo() {
    console.log("test");
  }
}
