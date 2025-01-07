/** DE
 * Erstellt eine Münze als Item im Spiel.
 */

/** EN
 * Creates a coin as an item in the game.
 */
class Coin extends Item {
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
  totalFrames = 8;

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
  w = 384;

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
  h = 48;

  /** DE
   * Initialisiert die Münze mit einem spezifischen Bildpfad.
   */
  /** EN
   * Initializes the coin with a specific image path.
   */
  constructor() {
    const IMG_ITEM_PATH = "./../../asset/img/art/8_items/coin_transparent.png";
    super(IMG_ITEM_PATH);
  }
}
