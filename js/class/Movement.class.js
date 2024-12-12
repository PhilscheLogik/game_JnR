class Movement {
  x = 10;
  y = 10;
  w = 288;
  h = 48;
  img;
  imgCache={}

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr){
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imgCache[path] = img;
    });
  }

  moveTo() {
    console.log("test");
  }
}
