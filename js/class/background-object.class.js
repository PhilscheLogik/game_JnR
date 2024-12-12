class BackgroundObject extends Movement {
  // w = 576;
  // h = 324;

  constructor(imgPath, x, y, w, h) {
    super().loadImage(imgPath);
    this.y = y; // 480 - this.h
    this.x = x;
    this.w = w;
    this.h = h;
  }
}
