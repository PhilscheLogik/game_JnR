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

  pick_up_sound_path = "./asset/audio/effects/actions/power_up_pickup.mp3";
  pick_up_sound = new Audio(this.pick_up_sound_path);

  dmg_sound_path = "./asset/audio/effects/enemies/damage_enemy.mp3";
  dmg_sound = new Audio(this.dmg_sound_path);

  player_sound_path = "./asset/audio/effects/actions/dmg.mp3";
  player_sound = new Audio(this.player_sound_path);

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

    if (item.isDead()) {
      console.log("Animation Tod erkannt");
      item.img.src = item.IMG_DEATH.path;
      item.totalFrames = item.IMG_DEATH.animationCount;
      if (item.deathframe) {
        item.frameIndex = 0;
        item.deathframe = false;
      }

      if (item.frameIndex >= item.totalFrames) {
        item.frameIndex = item.totalFrames - 1;
        console.log("letzter Frame");
      }
    }

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
    const SFXSlider = document.getElementById("effects-volume");
    SFXSlider.addEventListener("input", (e) => {
      const volume = Number(e.target.value);
      this.pick_up_sound.volume = volume;
      this.dmg_sound.volume = volume;
    });

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
      this.checkEnemiesDeath();
      this.checkCollisionsItems();
      this.checkThrow();
      this.checkBubbleAttack();
    }, 500);
  }

  checkEnemiesDeath() {
    this.level.enemies.forEach((enemy, i) => {
      if (!enemy.deathframe && enemy.frameIndex >= 5) {
        this.level.enemies.splice(i, 1);
      }
    });
    if (!this.level.endboss.deathframe && this.level.endboss.frameIndex >= 3) {
      createWinScreen();
      toggleClass("menu-section", "d_none");
      toggleClass("canvas", "d_none");
    }
  }

  checkBubbleAttack() {
    this.level.enemies.forEach((enemy) => {
      this.isCollisionBubble(enemy);
    });
    this.isCollisionBubble(this.level.endboss);
  }

  isCollisionBubble(obj) {
    console.log("---------------------");
    this.bubbleAttack.forEach((bubble, i) => {
      if (bubble.calcCollision(obj)) {
        obj.dmg(bubble);
        this.bubbleAttack.splice(i, 1);
        this.dmg_sound = new Audio(this.dmg_sound_path);
        this.dmg_sound.play();
      }
      if (
        bubble.x > 1500 ||
        bubble.y > 550 ||
        bubble.x < -100 ||
        bubble.y < -100
      ) {
        this.bubbleAttack.splice(i, 1);
      }
    });
  }

  checkThrow() {
    if (this.keyboard.Q && this.character.magazine > 0) {
      let bubble = new ThrowableObject(this.character.x, this.character.y, 1);
      this.bubbleAttack.push(bubble);
      this.character.magazine -= 10;
      this.muniBar.setPercentageItem(this.character.magazine);
      this.coinBar.setPercentageItem(this.character.coinCount);
    }
  }

  checkCollisionsFoes() {
    this.level.enemies.forEach((enemy) => {
      this.isCollisionHitPlayer(enemy);
    });
    this.isCollisionHitPlayer(this.level.endboss);
  }

  isCollisionHitPlayer(obj) {
    if (this.character.calcCollision(obj)) {
      this.character.hit(obj);
      this.statusBar.setPercentageEnergy(this.character.energy);
      this.player_sound = new Audio(this.player_sound_path);
      this.player_sound.play();
    }
  }

  checkCollisionsItems() {
    this.level.coins.forEach((coin, i) => {
      this.isCollisionPickUpPlayer(coin, i);
    });
    this.level.ammunitions.forEach((ammunition, i) => {
      this.isCollisionPickUpPlayer(ammunition, i);
    });
  }

  isCollisionPickUpPlayer(obj, i) {
    if (this.character.calcCollision(obj)) {
      this.character.pickUp(obj);
      this.muniBar.setPercentageItem(this.character.magazine);
      this.coinBar.setPercentageItem(this.character.coinCount);
      if (obj instanceof Coin) {
        this.level.coins.splice(i, 1);
        console.log(this.coinBar);
      }
      if (obj instanceof Ammunition) {
        this.level.ammunitions.splice(i, 1);
        console.log(this.muniBar);
      }
      this.pick_up_sound = new Audio(this.pick_up_sound_path);
      this.pick_up_sound.play();
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
    this.addObjToMapInParts(this.bubbleAttack, 1, 1);

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
