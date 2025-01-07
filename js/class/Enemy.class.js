/** DE
 * Repräsentiert einen Gegner im Spiel und animiert ihn.
 */
/** EN
 * Represents an enemy in the game and animates it.
 */
class Enemy extends Movement {
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
   * wight Koordinate.
   * von der Klasse DrawableObject
   * @type {number}
   */
  /** EN
   * wight Coordinate.
   * from the class DrawableObject
   * @type {number}
   */
  w = 192;

  /** DE
   * Initialisiert einen Gegner mit einem Bild, zufälligen Positionen und Bewegungen.
   * @param {string} path - Pfad zum Bild des Gegners.
   * @param {number} divisor - Anzahl der Animationsframes.
   */
  /** EN
   * Initializes an enemy with an image, random positions, and movements.
   * @param {string} path - Path to the enemy's image.
   * @param {number} divisor - Number of animation frames.
   */
  constructor(path, divisor) {
    super().loadImage(path);
    this.x = 300 + Math.random() * 500;
    this.y = 150 + Math.random() * 200;
    this.totalFrames = divisor;

    this.speed = 0.5 + Math.random() * 2;
    this.animate();
  }

  /** DE
   * Animiert den Gegner, indem Bewegungsrichtung und Frames zyklisch geändert werden.
   */
  /** EN
   * Animates the enemy by cycling through movement direction and frames.
   */
  animate() {
    if (Math.random() < 0.45) {
      this.moveToRight();
    } else {
      this.moveToLeft();
    }

    setInterval(() => {
      this.frameIndex++;
      if (this.frameIndex >= this.totalFrames) {
        this.frameIndex = 0;
      }
    }, 200);
  }
}
