/** DE
 * Repräsentiert ein werfbares Objekt (z.B. eine Blase).
 * Erweitert die Klasse `Movement` und fügt spezifische Eigenschaften und Methoden für werfbare Objekte hinzu.
 */
/** EN
 * Represents a throwable object (e.g. a bubble).
 * Extends the `Movement` class and adds specific properties and methods for throwable objects.
 */
class ThrowableObject extends Movement {
  /** DE
   * Breite des Objekts in Pixel von der Klasse DrawableObject.
   * @type {number}
   */
  /** EN
   * Width of the object in pixels from the class DrawableObject.
   * @type {number}
   */
  w = 24;

  /** DE
   * Höhe des Objekts in Pixel von der Klasse DrawableObject.
   * @type {number}
   */
  /** EN
   * Height of the object in pixels from the class DrawableObject.
   * @type {number}
   */
  h = 24;

  /** DE
   * Startposition des Objekts auf der y-Achse.
   * @type {number}
   */
  /** EN
   * Starting position of the object on the y-axis.
   * @type {number}
   */
  y_start = -50;

  /** DE
   * Pfad zum Bild des Objekts.
   * @type {string}
   */
  /** EN
   * Path to the image of the object.
   * @type {string}
   */
  IMG_BUBBLE = "./../../asset/img/art/7_effects/bubble_b2_transparent.png";

  /** DE
   * Konstruktor der Klasse.
   * @param {number} x Startposition auf der x-Achse.
   * @param {number} y Startposition auf der y-Achse.
   * @param {number} divisor Anzahl der Frames für die Animation.
   */
  /** EN
   * Constructor of the class.
   * @param {number} x Starting position on the x-axis.
   * @param {number} y Starting position on the y-axis.
   * @param {number} divisor Number of frames for the animation.
   */
  constructor(x, y, divisor) {
    super().loadImage(this.IMG_BUBBLE);
    this.totalFrames = divisor;
    this.throw(x, y);
  }

  /** DE
   * Wirft das Objekt. Setzt die Anfangsposition und startet eine Bewegungsanimation.
   * @param {number} x Startposition auf der x-Achse.
   * @param {number} y Startposition auf der y-Achse.
   */
  /** EN
   * Throws the object. Sets the initial position and starts a movement animation.
   * @param {number} x Starting position on the x-axis.
   * @param {number} y Starting position on the y-axis.
   */
  throw(x, y) {
    this.x = x + 50;
    this.y = y + 10;

    const interval = setInterval(() => {
      this.x += 2;
      this.y -= Math.pow(0.5, 2);
    }, 1000 / 60);
  }
}
