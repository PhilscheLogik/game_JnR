/** DE
 * Basisklasse für Objekte, die im Spiel gezeichnet werden können.
 */
/** EN
 * Base class for objects that can be drawn in the game.
 */
class DrawableObject {

  /** DE
   * Bild für das Objekt.
   * @type {Object}
   */
  /** EN
   * Image for the object.
   * @type {Object}
   */
  img = new Image();

  /** DE
   * Start Index für das Bild.
   * @type {number}
   */
  /** EN
   * Start index for the image.
   * @type {number}
   */
  frameIndex = 0;

  /** DE
   * Maximale Anzahl der Frames im Bild.
   * @type {number}
   */
  /** EN
   * Maximum number of frames in the image.
   * @type {number}
   */
  totalFrames = 6;

  /** DE
   * x Koordinate.
   * @type {number} 
   */
  /** EN
   * x Coordinate.
   * @type {number}
   */
  x = 50;

  /** DE
   * y Koordinate.
   * @type {number} 
   */
  /** EN
   * y Coordinate.
   * @type {number}
   */
  y = 50;

  /** DE
   * wight Koordinate.
   * @type {number} 
   */
  /** EN
   * wight Coordinate.
   * @type {number}
   */
  w = 288;

  /** DE
   * height Koordinate.
   * @type {number} 
   */
  /** EN
   * height Coordinate.
   * @type {number}
   */
  h = 48;

  /** DE 
   * @param {number} x - X-Koordinate der Bounding Box.
   * @param {number} y - Y-Koordinate der Bounding Box.
   * @param {number} w - Breite der Bounding Box.
   * @param {number} h - Höhe der Bounding Box.
   */
  /** EN
   * @param {number} x - X-coordinate of the bounding box.
   * @param {number} y - Y-coordinate of the bounding box.
   * @param {number} w - Width of the bounding box.
   * @param {number} h - Height of the bounding box.
   */
  boundingBox = { x: 0, y: 0, w: 0, h: 0 };

  /** DE 
   * @param {number} x - X-Koordinate des offset.
   * @param {number} y - Y-Koordinate des offset.
   * @param {number} w - Breite des offset.
   * @param {number} h - Höhe des offset.
   */
  /** EN
   * @param {number} x - X-coordinate of the offset.
   * @param {number} y - Y-coordinate of the offset.
   * @param {number} w - Width of the offset.
   * @param {number} h - Height of the offset.
   */
  offset = { x: 0, y: 0, w: 0, h: 0 };

  /** DE
   * Aktualisiert die Bounding Box des Objekts.
   * @param {number} x - X-Koordinate der Bounding Box.
   * @param {number} y - Y-Koordinate der Bounding Box.
   * @param {number} w - Breite der Bounding Box.
   * @param {number} h - Höhe der Bounding Box.
   */
  /** EN
   * Updates the bounding box of the object.
   * @param {number} x - X-coordinate of the bounding box.
   * @param {number} y - Y-coordinate of the bounding box.
   * @param {number} w - Width of the bounding box.
   * @param {number} h - Height of the bounding box.
   */
  updateBoundingBox(x, y, w, h) {
    this.boundingBox = { x, y, w, h };
  }

  /** DE
   * Lädt das Bild für das Objekt.
   * @param {string} path - Pfad zum Bild.
   */
  /** EN
   * Loads the image for the object.
   * @param {string} path - Path to the image.
   */
  loadImage(path) {
    this.img.src = path;    
  }

   /** DE
   * Zeichnet die Bounding Box des Objekts auf den Canvas.
   * @param {CanvasRenderingContext2D} ctx - 2D-Rendering-Kontext des Canvas.
   */
  /** EN
   * Draws the bounding box of the object on the canvas.
   * @param {CanvasRenderingContext2D} ctx - 2D rendering context of the canvas.
   */
  drawRect(ctx) {
    ctx.beginPath();
    ctx.lineWdth = "5";
    ctx.strokeStyle = "blue";
    ctx.rect(
      this.boundingBox.x,
      this.boundingBox.y,
      this.boundingBox.w,
      this.boundingBox.h
    );
    ctx.stroke();
  }

  /** DE
   * Zeichnet die Offset-Bounding Box des Objekts auf den Canvas.
   * @param {CanvasRenderingContext2D} ctx - 2D-Rendering-Kontext des Canvas.
   */
  /** EN
   * Draws the offset bounding box of the object on the canvas.
   * @param {CanvasRenderingContext2D} ctx - 2D rendering context of the canvas.
   */
  drawOffsetRect(ctx) {
    ctx.beginPath();
    ctx.lineWdth = "3";
    ctx.strokeStyle = "red";
    ctx.rect(
      this.boundingBox.x + this.offset.x,
      this.boundingBox.y + this.offset.y,
      this.boundingBox.w - this.offset.w,
      this.boundingBox.h - this.offset.h      
    );
    ctx.stroke();
  }
}
