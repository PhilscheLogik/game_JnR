class DrawableObject {
  img = new Image();
  frameIndex = 0;
  totalFrames = 6;

  x = 50;
  y = 50;
  w = 288;
  h = 48;

  loadImage(path) {
    this.img.src = path;    
  }

  drawRect(ctx) {
    ctx.beginPath();
    ctx.lineWdth = "5";
    ctx.strokeStyle = "blue";
    ctx.rect(
      this.boundingBox.x,
      this.boundingBox.y,
      this.boundingBox.w,
      this.boundingBox.h
    );
    ctx.stroke();
  }
}
