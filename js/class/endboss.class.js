/** DE
 * Repräsentiert den Endgegner im Spiel und animiert ihn.
 */
/** EN
 * Represents the final boss in the game and animates him.
 */
class Endboss extends Enemy {
  frameIndex = 0;

  /** DE
   * wight Koordinate.
   * von der Klasse DrawableObject
   * @type {number}
   */
  /** EN
   * wight Coordinate.
   * from the class DrawableObject
   * @type {number}
   */
  w = 288;

  /** DE
   * height Koordinate.
   * von der Klasse DrawableObject
   * @type {number}
   */
  /** EN
   * height Coordinate.
   * from the class DrawableObject
   * @type {number}
   */
  h = 72;

  /** DE
   * Energie des Objekts (Lebensenergie) von der Klasse Movement
   * @type {number}
   */
  /** EN
   * Energy of the object (health points) from the class Movement
   * @type {number}
   */
  energy = 640;

  /** DE
   * Bewegungsgeschwindigkeit des Objekts von der Klasse Movement
   * @type {number}
   */
  /** EN
   * Movement speed of the object from the class Movement
   * @type {number}
   */
  speed = 0.1;

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
  offset = { x: 230, y: 200, w: 100, h: 0 };

  /** DE
   * Konfiguration für das Todesbild von der Klasse Movement
   * @type {object}
   */
  /** EN
   * Configuration for the death image from the class Movement
   * @type {object}
   */
  IMG_DEATH = {
    path: "./asset/img/art/2_enemy/7_endboss/3 Big bloated/Big_bloated_death.png",
    animationCount: 4,
  };

  /** DE
   * Konfiguration für das Laufen
   * @type {object}
   */
  /** EN
   * Configuration for the walk
   * @type {object}
   */
  IMG_WALK = {
    path: "./asset/img/art/2_enemy/7_endboss/3 Big bloated/Big_bloated_walk2.png",
    animationCount: 6,
  };

  /** DE
   * Initialisiert einen Gegner mit einem Bild, Animationsframes und Position.
   * @param {string} path - Pfad zum Bild des Gegners.
   * @param {number} divisor - Anzahl der Animationsframes.
   */
  /** EN
   * Initializes an enemy with an image, animation frames, and position.
   * @param {string} path - Path to the enemy's image.
   * @param {number} divisor - Number of animation frames.
   */
  constructor(path, divisor) {
    super().loadImage(path);
    this.totalFrames = divisor;

    this.x = 1000;
    this.y = -150;
  }

  moveToLeft() {
    setInterval(() => {
      this.x -= this.speed;
      this.otherDirection = true;
      if (this.x < -1000) {
        this.x = 1500;
        this.y = -150;
      }
    }, 100 / 6);
  }
  /** DE
   * Animiert den Endgegner
   */
  /** EN
   * Animates the endboss
   */
  animate() {
    setInterval(() => {
      this.frameIndex++;
      if (this.frameIndex >= this.totalFrames) {
        this.frameIndex = 0;
      }
    }, 200);
  }
}
