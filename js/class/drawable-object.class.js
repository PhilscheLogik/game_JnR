class DrawableObject {
  img = new Image();
  frameIndex = 0;
  totalFrames = 6;

  x = 50;
  y = 50;
  w = 288;
  h = 48;

  boundingBox = { x: 0, y: 0, w: 0, h: 0 };

  offset = { x: 0, y: 0, w: 0, h: 0 };

  updateBoundingBox(x, y, w, h) {
    this.boundingBox = { x, y, w, h };
  }

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

  drawOffsetRect(ctx) {
    ctx.beginPath();
    ctx.lineWdth = "3";
    ctx.strokeStyle = "red";
    ctx.rect(
      this.boundingBox.x + this.offset.x,
      this.boundingBox.y + this.offset.y,
      this.boundingBox.w - this.offset.w,
      this.boundingBox.h - this.offset.h      
    );
    ctx.stroke();
  }
}
