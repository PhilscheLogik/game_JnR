class World {
  ctx;
  canvas;
  keyboard;

  character = new PlayableCharacter(
    "../../asset/img/img_sharkie/1_sharkie/10_steam_man/Swim.png",
    6
  );
  enemies = [
    new Fish("../../asset/img/img_sharkie/2_enemy/6_fish/Walk.png", 4),
    new Fishman("../../asset/img/img_sharkie/2_enemy/5_fish_man/Idle.png", 4),
    new Fish("../../asset/img/img_sharkie/2_enemy/6_fish/Walk.png", 4),
    new Fish("../../asset/img/img_sharkie/2_enemy/6_fish/Walk.png", 4),
    new Fishman("../../asset/img/img_sharkie/2_enemy/5_fish_man/Idle.png", 4),
  ];

  // -----------------------------------------------
  foregrounds = [
    new Bubble(
      "../../asset//img/img_sharkie/3_background/Alternativ/background 3/5.png"
    ),
    new BackgroundObject(
      "../../asset//img/img_sharkie/3_background/Alternativ/background 3/6.png",
      0,
      0,
      720,
      480
    ),
  ];

  // -----------------------------------------------
  backgroundObjects = [
    new BackgroundObject(
      "../../asset//img/img_sharkie/3_background/Alternativ/background 3/1.png",
      0,
      0,
      720,
      480
    ),
    new BackgroundObject(
      "../../asset//img/img_sharkie/3_background/Alternativ/background 2/5.png",
      0,
      0,
      720,
      480
    ),
    new BackgroundObject(
      "../../asset//img/img_sharkie/3_background/Alternativ/background 3/2.png",
      0,
      0,
      720,
      405
    ),
    new BackgroundObject(
      "../../asset//img/img_sharkie/3_background/Alternativ/background 3/3.png",
      0,
      0,
      720,
      480
    ),
    new Bubble(
      "../../asset//img/img_sharkie/3_background/Alternativ/background 3/4.png"
    ),
  ];

  // -----------------------------------------------
  addObjToMapComplete(obj) {
    obj.forEach((item) => {
      this.addToMapComplete(item);
    });
  }

  // -----------------------------------------------
  addObjToMapInParts(obj, divisor) {
    obj.forEach((item) => this.addToMapInParts(item, divisor));
  }

  // -----------------------------------------------
  addToMapComplete(item) {
    if (item.otherDirection) {
      this.ctx.save();
      // this.ctx.translate(item.img.width, 0);
      this.ctx.scale(-1, 1);
      this.ctx.drawImage(item.img, -item.x, item.y, item.w, item.h);
    } else {
      this.ctx.drawImage(item.img, item.x, item.y, item.w, item.h);
    }
    this.ctx.restore();
  }

  // -----------------------------------------------
  addToMapInParts(item, divisor) {
    if (item.otherDirection) {
      this.ctx.save();
      // this.ctx.translate(item.img.width, 0);
      this.ctx.scale(-1, 1);
      this.ctx.drawImage(
        item.img,
        (item.w / divisor) * item.frameIndex,
        0,
        item.w / divisor,
        item.h,
        -item.x - item.w / divisor,
        item.y,
        item.w / divisor,
        item.h
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
        item.w / divisor,
        item.h
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

    // zeichnet Backgrounds
    this.addObjToMapComplete(this.backgroundObjects);

    // zeichnet Player
    this.addToMapInParts(this.character, 6);

    // zeichnet die Feinde
    this.addObjToMapInParts(this.enemies, 4);

    // zeichnet Luftblasen
    this.addObjToMapComplete(this.foregrounds);

    // let self = this;
    // requestAnimationFrame(function(){
    //   self.draw();
    // });
    requestAnimationFrame(() => {
      this.draw();
    });
  }
}
