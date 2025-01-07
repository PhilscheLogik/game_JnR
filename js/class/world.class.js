/** DE
 * Repräsentiert die gesamte Spielwelt.
 * Enthält Referenzen auf das Canvas, die Tastatur, den Charakter, Statusleisten und andere Spielobjekte.
 */
/** EN
 * Represents the entire game world.
 * Contains references to the canvas, keyboard, character, status bars, and other game objects.
 */
class World {
  /** DE
   * 2D-Rendering-Kontext des Canvas.
   * @type {CanvasRenderingContext2D}
   */
  /** EN
   * 2D rendering context of the canvas.
   * @type {CanvasRenderingContext2D}
   */
  ctx;

  /** DE
   * Das HTML5 Canvas-Element.
   * @type {HTMLCanvasElement}
   */
  /** EN
   * The HTML5 canvas element.
   * @type {HTMLCanvasElement}
   */
  canvas;

  /** DE
   * Objekt, das den Zustand der Tastatur speichert.
   * @type {Keyboard}
   */
  /** EN
   * Object that stores the state of the keyboard.
   * @type {Keyboard}
   */
  keyboard;

  /** DE
   * X-Koordinate der Kamera.
   * @type {number}
   */
  /** EN
   * X-coordinate of the camera.
   * @type {number}
   */
  camera_x = 50;

  /** DE
   * Y-Koordinate der Kamera.
   * @type {number}
   */
  /** EN
   * Y-coordinate of the camera.
   * @type {number}
   */
  camera_y = 50;

  /** DE
   * Der spielbare Charakter.
   * @type {PlayableCharacter}
   */
  /** EN
   * The playable character.
   * @type {PlayableCharacter}
   */
  character = new PlayableCharacter();

  /** DE
   * Repräsentiert eine Statusleiste, die den Zustand eines Spielers oder Objekts anzeigt.
   * @param {number} type Der Typ der Statusleiste (z.B. 1 für Gesundheit, 2 für Munition).
   */
  /** EN
   * Represents a status bar that displays the status of a player or object.
   * @param {number} type The type of the status bar (e.g., 1 for health, 2 for ammo).
   */
  statusBar = new StatusBar(1);

  /** DE
   * Repräsentiert die Statusleiste für Münzen.
   * @type {StatusBar}
   */
  /** EN
   * Represents the status bar for coins.
   * @type {StatusBar}
   */
  coinBar = new StatusBar(2);

  /** DE
   * Repräsentiert die Statusleiste für Munition.
   * @type {StatusBar}
   */
  /** EN
   * Represents the ammo status bar.
   * @type {StatusBar}
   */
  muniBar = new StatusBar(3);

  /** DE
   * Ein Array, das alle Blasenangriffe speichert.
   * @type {Array}
   */
  /** EN
   * An array that stores all bubble attacks.
   * @type {Array}
   */
  bubbleAttack = [];

  /** DE
   * Pfad zur Sounddatei für das Aufheben von Gegenständen.
   * @type {string}
   */
  /** EN
   * Path to the sound file for picking up items.
   * @type {string}
   */
  pick_up_sound_path = "./asset/audio/effects/actions/power_up_pickup.mp3";

  /** DE
   * Audio-Objekt für den Sound beim Aufheben von Gegenständen.
   * @type {HTMLAudioElement}
   */
  /** EN
   * Audio object for the sound when picking up items.
   * @type {HTMLAudioElement}
   */
  pick_up_sound = new Audio(this.pick_up_sound_path);

  /** DE
   * Pfad zur Sounddatei für den Schadenseffekt.
   * @type {string}
   */
  /** EN
   * Path to the sound file for the damage effect.
   * @type {string}
   */
  dmg_sound_path = "./asset/audio/effects/enemies/damage_enemy.mp3";

  /** DE
   * Audio-Objekt für den Schadenseffekt.
   * @type {HTMLAudioElement}
   */
  /** EN
   * Audio object for the damage effect.
   * @type {HTMLAudioElement}
   */
  dmg_sound = new Audio(this.dmg_sound_path);

  /** DE
   * Pfad zur Sounddatei für den Schaden des Spielers.
   * @type {string}
   */
  /** EN
   * Path to the sound file for player damage.
   * @type {string}
   */
  player_dmg_sound_path = "./asset/audio/effects/actions/dmg.mp3";

  /** DE
   * Audio-Objekt für den Schaden des Spielers.
   * @type {HTMLAudioElement}
   */
  /** EN
   * Audio object for player damage.
   * @type {HTMLAudioElement}
   */
  player_dmg_sound = new Audio(this.player_dmg_sound_path);

  /** DE
   * Pfad zur Sounddatei für Treffer.
   * @type {string}
   */
  /** EN
   * Path to the sound file for hits.
   * @type {string}
   */
  hit_sound_path = "./asset/audio/effects/actions/hit.mp3";

  /** DE
   * Audio-Objekt für Treffer-Sound.
   * @type {HTMLAudioElement}
   */
  /** EN
   * Audio object for the hit sound.
   * @type {HTMLAudioElement}
   */
  hit_sound = new Audio(this.hit_sound_path);

  /** DE
   * Fügt eine Reihe von Objekten zur Spielwelt hinzu.
   * Iteriert über alle Objekte und ruft für jedes die Methode `addToMapComplete` auf.
   * @param {Array} obj Ein Array von Objekten, die hinzugefügt werden sollen.
   */
  /** EN
   * Adds a collection of objects to the game world.
   * Iterates over all objects and calls the `addToMapComplete` method for each.
   * @param {Array} obj An array of objects to be added.
   */
  addObjToMapComplete(obj) {
    obj.forEach((item) => {
      this.addToMapComplete(item);
    });
  }

  /** DE
   * Fügt Objekte in Teilen zur Spielwelt hinzu.
   * Teilt Objekte in kleinere Teile auf und fügt sie rekursiv hinzu.
   * @param {Array} obj Ein Array von Objekten, die hinzugefügt werden sollen.
   * @param {number} divisor Teiler für die Aufteilung.
   * @param {number} factor Faktor für die Skalierung.
   */
  /** EN
   * Adds objects to the game world in parts.
   * Splits objects into smaller parts and adds them recursively.
   * @param {Array} obj An array of objects to be added.
   * @param {number} divisor Divisor for splitting.
   * @param {number} factor Factor for scaling.
   */
  addObjToMapInParts(obj, divisor, factor) {
    obj.forEach((item) => this.addToMapInParts(item, divisor, factor));
  }

  /** DE
   * Fügt ein Objekt vollständig zur Spielwelt hinzu.
   * Berücksichtigt die Richtung des Objekts für die korrekte Darstellung.
   * @param {Object} item Das hinzuzufügende Objekt.
   */
  /** EN
   * Adds an object completely to the game world.
   * Considers the direction of the object for correct rendering.
   * @param {Object} item The object to be added.
   */
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

  /** DE
   * Fügt ein Objekt in Teilen zur Spielwelt hinzu und berücksichtigt dabei seinen Todeszustand und Blickrichtung.
   * @param {Object} item Das hinzuzufügende Objekt.
   *   @param {number} item.x Die x-Koordinate des Objekts.
   *   @param {number} item.y Die y-Koordinate des Objekts.
   *   @param {number} item.w Die Breite des Objekts.
   *   @param {number} item.h Die Höhe des Objekts.
   *   @param {boolean} item.otherDirection Ob das Objekt in die entgegengesetzte Richtung zeigt.
   *   @param {Function} item.isDead Methode, die prüft, ob das Objekt tot ist.
   *   @param {string} item.IMG_DEATH.path Pfad zum Bild des Objekts im Todeszustand.
   *   @param {number} item.IMG_DEATH.animationCount Anzahl der Frames für die Todesanimation.
   *   @param {boolean} item.deathframe Flag, das angibt, ob der Todesframe initialisiert wurde.
   *   @param {number} item.frameIndex Index des aktuellen Frames in der Animation.
   *   @param {Function} item.updateBoundingBox Methode, um die Hitbox des Objekts zu aktualisieren.
   *   @param {HTMLImageElement} item.img Das Bild des Objekts.
   * @param {number} divisor Teiler für die Aufteilung des Bildes.
   * @param {number} factor Faktor für die Skalierung des Objekts.
   */
  /** EN
   * Adds an object to the game world in parts, considering its death state and facing direction.
   * @param {Object} item The object to be added.
   *   @param {number} item.x The x-coordinate of the object.
   *   @param {number} item.y The y-coordinate of the object.
   *   @param {number} item.w The width of the object.
   *   @param {number} item.h The height of the object.
   *   @param {boolean} item.otherDirection Whether the object is facing the opposite direction.
   *   @param {Function} item.isDead Method to check if the object is dead.
   *   @param {string} item.IMG_DEATH.path Path to the image of the object in the death state.
   *   @param {number} item.IMG_DEATH.animationCount Number of frames for the death animation.
   *   @param {boolean} item.deathframe Flag indicating if the death frame has been initialized.
   *   @param {number} item.frameIndex Index of the current frame in the animation.
   *   @param {Function} item.updateBoundingBox Method to update the hitbox of the object.
   *   @param {HTMLImageElement} item.img The image of the object.
   * @param {number} divisor Divisor for splitting the image.
   * @param {number} factor Factor for scaling the object.
   */
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

  /** DE
   * Fügt ein Objekt in einem bestimmten Zustand zur Spielwelt hinzu.
   * @param {Object} item Das hinzuzufügende Objekt.
   *   @param {number} item.x Die x-Koordinate des Objekts.
   *   @param {number} item.y Die y-Koordinate des Objekts.
   *   @param {number} item.w Die Breite des Objekts.
   *   @param {number} item.h Die Höhe des Objekts.
   *   @param {number} item.frameIndex Der aktuelle Frame der Animation.
   *   @param {HTMLImageElement} item.img Das Bild des Objekts.
   * @param {number} divisor Teiler für die Aufteilung des Bildes in Frames.
   * @param {number} factor Faktor für die Skalierung des Objekts.
   */
  /** EN
   * Adds an object in a specific status to the game world.
   * @param {Object} item The object to be added.
   *   @param {number} item.x The x-coordinate of the object.
   *   @param {number} item.y The y-coordinate of the object.
   *   @param {number} item.w The width of the object.
   *   @param {number} item.h The height of the object.
   *   @param {number} item.frameIndex The current frame of the animation.
   *   @param {HTMLImageElement} item.img The image of the object.
   * @param {number} divisor Divisor for splitting the image into frames.
   * @param {number} factor Factor for scaling the object.
   */
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

  /** DE
   * Gibt den Lautstärkewert des Effekt-Sliders zurück.
   * @returns {number} Lautstärke der Effekte.
   */
  /** EN
   * Returns the volume value from the effects slider.
   * @returns {number} Volume of the effects.
   */
  SFXVolume() {
    let SFXSlider = document.getElementById("effects-volume");
    return SFXSlider.value;
  }

  /** DE
   * Konstruktor für die Spielwelt. Initialisiert Canvas, Steuerung, Level und startet das Spiel.
   * @param {HTMLCanvasElement} canvas - Das Canvas-Element des Spiels.
   * @param {Object} keyboard - Die Tastatursteuerung des Spiels.
   */
  /** EN
   * Constructor for the game world. Initializes canvas, controls, level, and starts the game.
   * @param {HTMLCanvasElement} canvas - The game's canvas element.
   * @param {Object} keyboard - The game's keyboard controls.
   */
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.level = createLevel1();

    this.draw();
    this.setWorld();
    this.run();
  }

  /** DE
   * Führt regelmäßig Kollisionsprüfungen und andere Spielaktionen aus.
   */
  /** EN
   * Regularly performs collision checks and other game actions.
   */
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

  /** DE
   * Überprüft, ob der Spieler inaktiv ist, und setzt den Zeitwert zurück.
   */
  /** EN
   * Checks if the player is idle and resets the time value.
   */
  checkIdle() {
    if (this.keyboard.TIME) {
      this.keyboard.TIME = false;
    }
  }

  /** DE
   * Prüft, ob ein Dash durchgeführt wird, und bewegt den Charakter entsprechend.
   */
  /** EN
   * Checks if a dash is performed and moves the character accordingly.
   */
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

  /** DE
   * Lässt den Endboss laufen, wenn sich der Charakter in der Nähe befindet.
   */
  /** EN
   * Makes the end boss walk when the character is nearby.
   */
  checkEndbossWalk() {
    if (this.level.endboss.x - this.character.x < 300) {
      this.level.endboss.img.src = this.level.endboss.IMG_WALK.path;
      this.level.endboss.totalFrames =
        this.level.endboss.IMG_WALK.animationCount;
      this.level.endboss.moveToLeft();
    }
  }

  /** DE
   * Überprüft den Tod von Gegnern und zeigt einen Sieg-Bildschirm, wenn alle besiegt sind.
   */
  /** EN
   * Checks for enemy deaths and displays a win screen if all are defeated.
   */
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

  /** DE
   * Überprüft die Kollisionen von Blasenangriffen mit Gegnern.
   */
  /** EN
   * Checks collisions of bubble attacks with enemies.
   */
  checkBubbleAttack() {
    this.level.enemies.forEach((enemy) => {
      this.isCollisionBubble(enemy);
    });
    this.isCollisionBubble(this.level.endboss);
  }

  /** DE
   * Überprüft und behandelt Kollisionen zwischen Blasenangriffen und einem Objekt.
   */
  /** EN
   * Checks and handles collisions between bubble attacks and an object.
   */
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

  /** DE
   * Überprüft, ob ein Blasenangriff geworfen wird, und aktualisiert die Anzeigen.
   */
  /** EN
   * Checks if a bubble attack is thrown and updates the UI elements.
   */
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

  /** DE
   * Überprüft Kollisionen zwischen dem Spieler und Gegnern.
   */
  /** EN
   * Checks collisions between the player and enemies.
   */
  checkCollisionsEnemy() {
    this.level.enemies.forEach((enemy) => {
      this.isCollisionHitPlayer(enemy);
    });
    this.isCollisionHitPlayer(this.level.endboss);
  }

  /** DE
   * Behandelt Kollisionen zwischen dem Spieler und einem Gegner.
   */
  /** EN
   * Handles collisions between the player and an enemy.
   */
  isCollisionHitPlayer(obj) {
    if (this.character.calcCollision(obj)) {
      this.character.hit(obj);
      this.statusBar.setPercentageEnergy(this.character.energy);
      this.player_dmg_sound = new Audio(this.player_dmg_sound_path);
      this.player_dmg_sound.volume = this.SFXVolume();
      this.player_dmg_sound.play();
    }
  }

  /** DE
   * Überprüft Kollisionen zwischen dem Spieler und aufnehmbaren Objekten.
   */
  /** EN
   * Checks collisions between the player and collectible objects.
   */
  checkCollisionsItems() {
    this.level.coins.forEach((coin, i) => {
      this.isCollisionPickUpPlayer(coin, i);
    });
    this.level.ammunitions.forEach((ammunition, i) => {
      this.isCollisionPickUpPlayer(ammunition, i);
    });
  }

  /** DE
   * Behandelt das Aufnehmen eines Objekts durch den Spieler.
   */
  /** EN
   * Handles the player picking up an object.
   */
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

  /** DE
   * Verknüpft die Spielfigur mit der Welt.
   */
  /** EN
   * Links the character to the world.
   */
  setWorld() {
    this.character.world = this;
  }

  /** DE
   * Zeichnet die Spielwelt und alle Objekte auf die Canvas.
   */
  /** EN
   * Renders the game world and all objects onto the canvas.
   */
  draw() {
    // löscht das Fenster
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);
    this.addObjToMapComplete(this.level.backgroundObjects);
    this.addObjToMapInParts(this.level.enemies, 4, 2);
    this.addToMapInParts(this.level.endboss, 4, 9);
    this.addObjToMapInParts(this.level.ammunitions, 5, 0.5);
    this.addObjToMapInParts(this.level.coins, 8, 0.5);
    this.addToMapInParts(this.character, 6, 1.2);
    this.addObjToMapInParts(this.bubbleAttack, 1, 1);
    this.addObjToMapComplete(this.level.foregrounds);
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
