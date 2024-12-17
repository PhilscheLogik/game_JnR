class World {
  ctx;
  canvas;
  keyboard;
  camera_x = 50;
  camera_y = 50;



  character = new PlayableCharacter();

  level = level1;

  addObjToMapComplete(obj) {
    obj.forEach((item) => {
      this.addToMapComplete(item);
    });
  }

  // -----------------------------------------------
  addObjToMapInParts(obj, divisor, factor) {
    obj.forEach((item) => this.addToMapInParts(item, divisor, factor));
  }

  // -----------------------------------------------
  addToMapComplete(item) {
    if (item.otherDirection) {
      this.ctx.save();
      // this.ctx.translate(item.img.w, 0);
      this.ctx.scale(-1, 1);
      this.ctx.drawImage(item.img, -item.x, item.y, item.w, item.h);
    } else {
      this.ctx.drawImage(item.img, item.x, item.y, item.w, item.h);
    }
    this.ctx.restore();
  }

  // -----------------------------------------------
  addToMapInParts(item, divisor, factor) {
    if (item.otherDirection) {
      this.ctx.save();
      // this.ctx.translate(item.img.w, 0);
      this.ctx.scale(-1, 1);
      this.ctx.drawImage(
        item.img,
        (item.w / divisor) * item.frameIndex,
        0,
        item.w / divisor,
        item.h,
        -item.x - item.w / divisor,
        item.y,
        item.w / divisor * factor,
        item.h *factor
      );
    } else {
      this.ctx.drawImage(
        item.img,
        (item.w / divisor) * item.frameIndex,
        0,
        item.w / divisor,
        item.h,
        item.x,
        item.y,
        item.w / divisor * factor,
        item.h *factor
      );
    }
    this.ctx.restore();
  }

  /* -----------------------------------------------*/
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
  }

  setWorld() {
    this.character.world = this;
  }

  // -----------------------------------------------
  draw() {
    // löscht das Fenster
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);

    // zeichnet Backgrounds
    this.addObjToMapComplete(this.level.backgroundObjects);

    // zeichnet die Feinde
    this.addObjToMapInParts(this.level.enemies, 4, 1.5);

    // zeichnet Endboss
    this.addToMapInParts(this.level.endboss, 6, 4);

    // zeichnet Player
    this.addToMapInParts(this.character, 6, 1);

    // zeichnet Luftblasen
    this.addObjToMapComplete(this.level.foregrounds);

    this.ctx.translate(-this.camera_x, 0);

    requestAnimationFrame(() => {
      this.draw();
    });
  }
}
