class Movement {
  x = 10;
  y = 10;
  w = 288;
  h = 48;
  img;
  imgCache = {};
  currentIndex = 0;
  speed = 0.5;
  otherDirection = false;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imgCache[path] = img;
    });
  }

  moveToLeft() {
    setInterval(() => {
      this.x -= this.speed;
      if (this.x < -50) {
        this.x = 750;
        this.y = 0 + Math.random() * 400;
      }
    }, 100 / 6);
  }

  moveToRight() {
    setInterval(() => {
      this.x += this.speed;
      if (this.x > 750) {
        this.x = -50;
        this.y = 0 + Math.random() * 400;
      }
    }, 100 / 6);
  }

  moveToUp() {
    setInterval(() => {
      this.y -= this.speed;

      if (this.y < -100) {
        this.y = 480;
        this.x = -100 + Math.random() * 720;
      }
    }, 100 / 6);
  }

  moveToDown() {
    setInterval(() => {
      this.y += this.speed;

      if (this.y > 500) {
        this.y = -100;
        this.x = -100 + Math.random() * 200;
      }
    }, 100 / 6);
  }  
}
