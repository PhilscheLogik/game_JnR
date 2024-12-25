class World {
  ctx;
  canvas;
  keyboard;
  camera_x = 50;
  camera_y = 50;
  character = new PlayableCharacter();
  level = level1;
  statusBar = new StatusBar(1);
  coinBar = new StatusBar(2);
  muniBar = new StatusBar(3);
  bubbleAttack = [];

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
      this.ctx.scale(-1, 1);
      this.ctx.drawImage(item.img, -item.x, item.y, item.w, item.h);
    } else {
      this.ctx.drawImage(item.img, item.x, item.y, item.w, item.h);
    }
    this.ctx.restore();
  }

  // -----------------------------------------------
  addToMapInParts(item, divisor, factor) {
    let x_coordinate = item.x;
    this.ctx.save();

    if (item.otherDirection) {
      this.ctx.scale(-1, 1);
      x_coordinate = -item.x - item.w / divisor;
    }

    this.ctx.drawImage(
      item.img,
      (item.w / divisor) * item.frameIndex,
      0,
      item.w / divisor,
      item.h,
      x_coordinate,
      item.y,
      (item.w / divisor) * factor,
      item.h * factor
    );

    item.updateBoundingBox(
      x_coordinate,
      item.y,
      (item.w / divisor) * factor,
      item.h * factor
    );

    item.drawRect(this.ctx);

    this.ctx.restore();
  }

  addToMapStatus(item, divisor, factor) {
    this.ctx.drawImage(
      item.img,
      (item.w / divisor) * item.frameIndex,
      0,
      item.w / divisor,
      item.h,
      item.x,
      item.y,
      (item.w / divisor) * factor,
      item.h * factor
    );
  }

  /* -----------------------------------------------*/
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  run() {
    setInterval(() => {
      this.checkCollisionsFoes();
      this.checkThrow();
    }, 500);
  }

  checkThrow(){
    if(this.keyboard.Q){
      let bubble = new ThrowableObject(this.character.x, this.character.y)
      this.bubbleAttack.push(bubble)
    }
  }

  checkCollisionsFoes() {
    this.level.enemies.forEach((enemy) => {
      this.isCollisionHitPlayer(enemy);
    });
    this.isCollisionHitPlayer(this.level.endboss);
  }

  isCollisionHitPlayer(foe) {
    if (this.character.calcCollision(foe)) {
      this.character.hit(foe);
      this.statusBar.setPercentage(this.character.energy);
      this.muniBar.setPercentage(this.character.energy);
      this.coinBar.setPercentage(this.character.energy);
    }
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
    this.addToMapInParts(this.level.endboss, 4, 4);

    // zeichnet Muni
    this.addObjToMapInParts(this.level.ammunitions, 5, 0.5);

     // zeichnet Coins
     this.addObjToMapInParts(this.level.coins, 8, 0.5);

    // zeichnet Player
    this.addToMapInParts(this.character, 6, 1.5);

    // BubbleAttack
    this.addObjToMapComplete(this.bubbleAttack);

    // zeichnet Luftblasen
    this.addObjToMapComplete(this.level.foregrounds);

    // status
    this.ctx.translate(-this.camera_x, 0);
    this.addToMapStatus(this.statusBar, 9, 0.8);
    this.addToMapStatus(this.coinBar, 9, 0.8);
    this.addToMapStatus(this.muniBar, 9, 0.8);
    this.ctx.translate(this.camera_x, 0);

    this.ctx.translate(-this.camera_x, 0);

    requestAnimationFrame(() => {
      this.draw();
    });
  }
}
