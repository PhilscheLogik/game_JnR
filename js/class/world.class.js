class World {
  ctx;
  canvas;
  keyboard;
  camera_x = 50;
  camera_y = 50;
  character = new PlayableCharacter();
  statusBar = new StatusBar(1);
  coinBar = new StatusBar(2);
  muniBar = new StatusBar(3);
  bubbleAttack = [];

  pick_up_sound_path = "./asset/audio/effects/actions/power_up_pickup.mp3";
  pick_up_sound = new Audio(this.pick_up_sound_path);

  dmg_sound_path = "./asset/audio/effects/enemies/damage_enemy.mp3";
  dmg_sound = new Audio(this.dmg_sound_path);

  player_dmg_sound_path = "./asset/audio/effects/actions/dmg.mp3";
  player_dmg_sound = new Audio(this.player_dmg_sound_path);

  hit_sound_path = "./asset/audio/effects/actions/hit.mp3";
  hit_sound = new Audio(this.hit_sound_path);

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
      item.img.src = item.IMG_DEATH.path;
      item.totalFrames = item.IMG_DEATH.animationCount;
      if (item.deathframe) {
        item.frameIndex = 0;
        item.deathframe = false;
      }
      if (item.frameIndex >= item.totalFrames) {
        item.frameIndex = item.totalFrames - 1;
      }
    }
    if (item.otherDirection) {
      this.ctx.scale(-1, 1);
      x_coordinate = -item.x - (item.w / divisor) * factor;
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
    // item.drawRect(this.ctx);
    // item.drawOffsetRect(this.ctx);
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

  SFXVolume() {
    let SFXSlider = document.getElementById("effects-volume");
    return SFXSlider.value;
  }

  /* -----------------------------------------------*/
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.level = createLevel1();

    this.draw();
    this.setWorld();
    this.run();
  }

  run() {
    setInterval(() => {
      this.checkCollisionsEnemy();
      this.checkEnemiesDeath();
      this.checkCollisionsItems();
      this.checkThrow();
      this.checkDash();
      this.checkBubbleAttack();
      this.checkEndbossWalk();
    }, 500);

    setInterval(() => {
      this.checkIdle();
    }, 10000);
  }

  checkIdle() {
    if (this.keyboard.TIME) {
      this.keyboard.TIME = false;
    }
  }

  checkDash() {
    if (this.keyboard.E) {
      if (this.keyboard.UP && this.character.y > 50) {
        this.character.y -= 20;
      }

      if (
        this.keyboard.RIGHT &&
        this.character.x < this.level.level_max_x_coordinate
      ) {
        this.character.x += 20;
      }

      if (this.keyboard.LEFT && this.character.x > 0) {
        this.character.x -= 20;
      }

      if (
        this.keyboard.DOWN &&
        this.character.y < this.level.level_max_y_coordinate
      ) {
        this.character.y += 20;
      }
    }
  }

  checkEndbossWalk() {
    if (this.level.endboss.x - this.character.x < 250) {
      this.level.endboss.img.src = this.level.endboss.IMG_WALK.path;
      this.level.endboss.totalFrames =
        this.level.endboss.IMG_WALK.animationCount;
      this.level.endboss.moveToLeft();
    }
  }

  checkEnemiesDeath() {
    this.level.enemies.forEach((enemy, i) => {
      if (!enemy.deathframe && enemy.frameIndex >= 5) {
        this.level.enemies.splice(i, 1);
      }
    });
    if (!this.level.endboss.deathframe && this.level.endboss.frameIndex >= 2) {
      createWinScreen();
      toggleClass("menu-section", "d_none");
      toggleClass("canvas-section", "d_none");
    }
  }

  checkBubbleAttack() {
    this.level.enemies.forEach((enemy) => {
      this.isCollisionBubble(enemy);
    });
    this.isCollisionBubble(this.level.endboss);
  }

  isCollisionBubble(obj) {
    this.bubbleAttack.forEach((bubble, i) => {
      if (bubble.calcCollision(obj)) {
        obj.dmg(bubble);
        this.bubbleAttack.splice(i, 1);
        this.dmg_sound = new Audio(this.dmg_sound_path);
        this.dmg_sound.volume = this.SFXVolume();
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
    if (
      this.keyboard.Q &&
      (this.character.magazine > 0 || this.level.coins.length == 0)
    ) {
      let bubble = new ThrowableObject(this.character.x, this.character.y, 1);
      this.bubbleAttack.push(bubble);
      this.character.magazine -= 10;
      this.muniBar.setPercentageItem(this.character.magazine);
      this.coinBar.setPercentageItem(this.character.coinCount);
      this.hit_sound = new Audio(this.hit_sound_path);
      this.hit_sound.volume = this.SFXVolume();
      this.hit_sound.play();
    }
  }

  checkCollisionsEnemy() {
    this.level.enemies.forEach((enemy) => {
      this.isCollisionHitPlayer(enemy);
    });
    this.isCollisionHitPlayer(this.level.endboss);
  }

  isCollisionHitPlayer(obj) {
    if (this.character.calcCollision(obj)) {
      this.character.hit(obj);
      this.statusBar.setPercentageEnergy(this.character.energy);
      this.player_dmg_sound = new Audio(this.player_dmg_sound_path);
      this.player_dmg_sound.volume = this.SFXVolume();
      this.player_dmg_sound.play();
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
      }
      if (obj instanceof Ammunition) {
        this.level.ammunitions.splice(i, 1);
      }
      this.pick_up_sound = new Audio(this.pick_up_sound_path);
      this.pick_up_sound.volume = this.SFXVolume();
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
    this.addObjToMapInParts(this.level.enemies, 4, 2);

    // zeichnet Endboss
    this.addToMapInParts(this.level.endboss, 4, 9);

    // zeichnet Muni
    this.addObjToMapInParts(this.level.ammunitions, 5, 0.5);

    // zeichnet Coins
    this.addObjToMapInParts(this.level.coins, 8, 0.5);

    // zeichnet Player
    this.addToMapInParts(this.character, 6, 1.2);

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
