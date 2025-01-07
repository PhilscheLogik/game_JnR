/** DE
 * Erstellt ein Hintergrundobjekt mit den angegebenen Bildpfad, Position und Größe.
 */

/** EN
 * Creates a background object with the given image path, position, and size.
 */
class BackgroundObject extends Movement {

  /** DE
   * Initialisiert ein Hintergrundobjekt mit Bildpfad, Position und Größe.
   * @param {string} imgPath - Bildpfad des Hintergrundobjekts.
   * @param {number} x - Horizontale Position des Objekts.
   * @param {number} y - Vertikale Position des Objekts.
   * @param {number} w - Breite des Objekts.
   * @param {number} h - Höhe des Objekts.
   */
  /** EN
   * Initializes a background object with an image path, position, and size.
   * @param {string} imgPath - Image path of the background object.
   * @param {number} x - Horizontal position of the object.
   * @param {number} y - Vertical position of the object.
   * @param {number} w - Width of the object.
   * @param {number} h - Height of the object.
   */
  constructor(imgPath, x, y, w, h) {
    super().loadImage(imgPath);
    this.y = y;
    this.x = x;
    this.w = w;
    this.h = h;
  }
}
