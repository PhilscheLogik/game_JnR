/** DE
 * Repräsentiert den spielbaren Charakter.
 * Erweitert die Klasse `Movement` und fügt spezifische Eigenschaften und Methoden hinzu, die für einen spielbaren Charakter relevant sind.
 */
/** EN
 * Represents the playable character.
 * Extends the `Movement` class and adds specific properties and methods relevant to a playable character.
 */
class PlayableCharacter extends Movement {
  /** DE
   * Start Index für das Bild.
   * von der Klasse DrawableObject
   * @type {number}
   */
  /** EN
   * Start index for the image.
   * from the class DrawableObject
   * @type {number}
   */
  frameIndex = 0;

  /** DE
   * Maximale Anzahl der Frames im Bild.
   * von der Klasse DrawableObject
   * @type {number}
   */
  /** EN
   * Maximum number of frames in the image.
   * from the class DrawableObject
   * @type {number}
   */
  totalFrames = 6;

  /** DE
   * von der Klasse DrawableObject
   * @param {number} x - X-Koordinate des offset.
   * @param {number} y - Y-Koordinate des offset.
   * @param {number} w - Breite des offset.
   * @param {number} h - Höhe des offset.
   */
  /** EN
   * from the class DrawableObject
   * @param {number} x - X-coordinate of the offset.
   * @param {number} y - Y-coordinate of the offset.
   * @param {number} w - Width of the offset.
   * @param {number} h - Height of the offset.
   */
  offset = { x: 5, y: 10, w: 20, h: 15 };

  /** DE
   * Bewegungsgeschwindigkeit des Objekts.
   * von der Klasse Movement
   * @type {number}
   */
  /** EN
   * Movement speed of the object.
   * from the class Movement
   * @type {number}
   */
  speed = 3;

  /** DE
   * Referenz auf die Spielwelt (globaler Kontext).
   * @type {Object}
   */
  /** EN
   * Reference to the game world (global context).
   * @type {Object}
   */
  world;

  /** DE
   * Audio-Objekt für das Schwimmgeräusch.
   * @type {HTMLAudioElement}
   */
  /** EN
   * Audio object for the swimming sound.
   * @type {HTMLAudioElement}
   */
  swim_sound = new Audio("./asset/audio/effects/char/swim2.mp3");

  /** DE
   * Audio-Objekt für das Todesgeräusch.
   * @type {HTMLAudioElement}
   */
  /** EN
   * Audio object for the death sound.
   * @type {HTMLAudioElement}
   */
  death_sound = new Audio("./asset/audio/effects/enemies/sinister_laugh.mp3");

  /** DE
   * Konfiguration für das Schwimm-Animationsbild.
   * @type {Object}
   */
  /** EN
   * Configuration for the swimming animation image.
   * @type {Object}
   */
  IMG_SWIM = {
    path: "../../asset/img/art/1_character/01_steam_man/Swim.png",
    animationCount: 6,
  };

  /** DE
   * Konfiguration für das Attacke-Animationsbild.
   * @type {Object}
   */
  /** EN
   * Configuration for the attacking animation image.
   * @type {Object}
   */
  IMG_ATTACK = {
    path: "../../asset/img/art/1_character/01_steam_man/Attack3.png",
    animationCount: 6,
  };

  /** DE
   * Konfiguration für das Idle-Animationsbild.
   * @type {Object}
   */
  /** EN
   * Configuration for the Idle animation image.
   * @type {Object}
   */
  IMG_IDLE = {
    path: "../../asset/img/art/1_character/01_steam_man/Idle.png",
    animationCount: 6,
  };

  /** DE
   * Konfiguration für das lange Idle-Animationsbild.
   * @type {Object}
   */
  /** EN
   * Configuration for the long Idle animation image.
   * @type {Object}
   */
  IMG_IDLE_LONG = {
    path: "../../asset/img/art/1_character/01_steam_man/Idle3.png",
    animationCount: 6,
  };

  /** DE
   * Konfiguration für das Tod-Animationsbild.
   * @type {Object}
   */
  /** EN
   * Configuration for the death animation image.
   * @type {Object}
   */
  IMG_DEATH = {
    path: "../../asset/img/art/1_character/01_steam_man/Death.png",
    animationCount: 6,
  };

  /** DE
   * Konfiguration für das Schaden-Animationsbild.
   * @type {Object}
   */
  /** EN
   * Configuration for the damage animation image.
   * @type {Object}
   */
  IMG_HURT = {
    path: "../../asset/img/art/1_character/01_steam_man/Hurt6.png",
    animationCount: 6,
  };

  /** DE
   * Konstruktor der Klasse. Initialisiert den Charakter und setzt die Anfangswerte.
   */
  /** EN
   * Constructor of the class. Initializes the character and sets initial values.
   */
  constructor() {
    super().loadImage(this.IMG_IDLE.path);

    this.currentState = "IDLE";
    this.totalFrames = Number(this.IMG_IDLE.animationCount);

    this.swim_sound.volume = 0;
    this.death_sound.volume = 0;

    const SFXSlider = document.getElementById("effects-volume");
    SFXSlider.addEventListener("input", (e) => {
      const volume = Number(e.target.value);
      this.swim_sound.volume = volume;
      this.death_sound.volume = volume;
    });

    this.animate();
  }

  /** DE
   * Setzt den aktuellen Zustand der Spielfigur und aktualisiert die Animation entsprechend.
   * @param {string} newState - Der neue Zustand (z.B. "IDLE", "SWIM", "ATTACK").
   */
  /** EN
   * Sets the current state of the game character and updates the animation accordingly.
   * @param {string} newState - The new state (e.g., "IDLE", "SWIM", "ATTACK").
   */
  setState(newState) {
    if (this.currentState === newState) return;
    this.currentState = newState;
    switch (newState) {
      case "IDLE":
        this.img.src = this.IMG_IDLE.path;
        this.totalFrames = this.IMG_IDLE.animationCount;
        break;
      case "SWIM":
        this.img.src = this.IMG_SWIM.path;
        this.totalFrames = this.IMG_SWIM.animationCount;
        break;
      case "ATTACK":
        this.img.src = this.IMG_ATTACK.path;
        this.totalFrames = this.IMG_ATTACK.animationCount;
        break;
      case "IDLE_LONG":
        this.img.src = this.IMG_IDLE_LONG.path;
        this.totalFrames = this.IMG_IDLE_LONG.animationCount;
        break;
      case "HURT":
        this.img.src = this.IMG_HURT.path;
        this.totalFrames = this.IMG_HURT.animationCount;
        break;
      case "DEATH":
        this.img.src = this.IMG_DEATH.path;
        this.totalFrames = this.IMG_DEATH.animationCount;
        break;
    }
    this.frameIndex = 0;
  }

  /** DE
   * Führt einen Angriff aus.
   */
  /** EN
   * Executes an attack.
   */
  executeAttack() {
    if (this.isAttacking) return;
    this.isAttacking = true;

    const interval = setInterval(() => {
      this.frameIndex++;
      if (this.frameIndex >= this.totalFrames) {
        clearInterval(interval);
        this.isAttacking = false;
      }
    }, 200);
  }

  /** DE
   * Bewegt den Charakter nach rechts.
   */
  /** EN
   * Moves the character to the right.
   */
  moveRight() {
    this.x += this.speed;
    this.otherDirection = false;
    this.swim_sound.play();
  }

  /** DE
   * Bewegt den Charakter nach links.
   */
  /** EN
   * Moves the character to the left.
   */
  moveLeft() {
    this.x -= this.speed;
    this.otherDirection = true;
    this.swim_sound.play();
  }

  /** DE
   * Bewegt den Charakter nach oben.
   */
  /** EN
   * Moves the character up.
   */
  moveUp() {
    this.y -= this.speed;
    this.swim_sound.play();
  }

  /** DE
   * Bewegt den Charakter nach unten.
   */
  /** EN
   * Moves the character down.
   */
  moveDown() {
    this.y += this.speed;
    this.swim_sound.play();
  }

  /** DE
   * Hauptanimations-Loop des Charakters.
   * Prüft kontinuierlich den Spielzustand und aktualisiert Animation, Position und Soundeffekte entsprechend.
   */
  /** EN
   * Main animation loop of the character.
   * Continuously checks the game state and updates animation, position, and sound effects accordingly.
   */
  animate() {
    let stateInterval = setInterval(() => {
      this.swim_sound.pause();

      if (this.isDead()) {
        this.setState("DEATH");
        this.death_sound.play();
        clearInterval(stateInterval);
        setTimeout(() => {
          toggleClass("canvas-section", "d_none");
          toggleClass("menu-section", "d_none");
          createGameOver();
        }, 1000);
      } else if (this.isHurt()) {
        this.setState("HURT");
        setTimeout(() => {}, 1000);
      } else if (this.world.keyboard.Q) {
        this.setState("ATTACK");
        this.executeAttack();
        return;
      } else if (
        this.world.keyboard.RIGHT &&
        this.x < this.world.level.level_max_x_coordinate
      ) {
        this.setState("SWIM");
        this.moveRight();
      } else if (this.world.keyboard.LEFT && this.x > 0) {
        this.setState("SWIM");
        this.moveLeft();
      } else if (!this.world.keyboard.TIME) {
        this.setState("IDLE_LONG");
      } else {
        this.setState("IDLE");
      }

      if (this.world.keyboard.UP && this.y > 50) {
        this.moveUp();
      }

      if (
        this.world.keyboard.DOWN &&
        this.y < this.world.level.level_max_y_coordinate
      ) {
        this.moveDown();
      }

      this.world.camera_x = -this.x + 50;
      this.world.camera_y = -this.y + 55;
    }, 100 / 6);

    let animationIntervall = setInterval(() => {
      this.frameIndex++;
      if (
        this.currentState === "DEATH" &&
        this.frameIndex >= this.totalFrames
      ) {
        clearInterval(animationIntervall);
      } else if (this.frameIndex >= this.totalFrames) {
        this.frameIndex = 0;
        if (this.currentState === "ATTACK") {
          this.setState("IDLE");
        }
      }
    }, 200);
  }
}
