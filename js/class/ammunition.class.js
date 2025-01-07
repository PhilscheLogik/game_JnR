/** DE
 * Erstellt eine Muntion als Item im Spiel.
 */

/** EN
 * Creates a ammunition as an item in the game.
 */
class Ammunition extends Item {
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
  totalFrames = 5;

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
  w = 170;

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
  h = 52;

  /** DE
   * Initialisiert die Munition mit einem spezifischen Bildpfad.
   */
  /** EN
   * Initializes the ammunition with a specific image path.
   */
  constructor() {
    const IMG_ITEM_PATH = "./../../asset/img/art/8_items/munit_transparent.png";
    super(IMG_ITEM_PATH);
  }
}
