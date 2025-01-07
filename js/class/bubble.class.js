/** DE
 * Erstellt eine Luftblase mit einer zufälligen Position und startet ihre Bewegung nach oben.
 */

/** EN
 * Creates a bubble with a random position and initiates its upward movement.
 */
class Bubble extends Movement {
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
  w = 720;

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
  h = 405;

  /** DE
   * Initialisiert eine Luftblase mit einem Bildpfad und einer zufälligen horizontalen Position.
   * Startet die Bewegung nach oben.
   * @param {string} path - Bildpfad der Luftblase.
   * @param {number} x - Horizontale Startposition.
   * @param {number} y - Vertikale Startposition.
   */
  /** EN
   * Initializes a bubble with an image path and a random horizontal position.
   * Starts the upward movement.
   * @param {string} path - Image path of the bubble.
   * @param {number} x - Horizontal start position.
   * @param {number} y - Vertical start position.
   */
  constructor(path, x, y) {
    super().loadImage(path);
    this.y = y; 
    this.x = -100 + Math.random() * 720 ; 
    this.moveToUp();
  }
}
