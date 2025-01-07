/** DE
 * Repräsentiert ein sammelbares Objekt im Spiel und animiert es.
 */
/** EN
 * Represents a collectible item in the game and animates it.
 */
class Item extends Movement {
  /** DE
   * Initialisiert ein Item mit einem Bild und zufälligen Positionen.
   * @param {string} imgPath - Pfad zum Bild des Items.
   */
  /** EN
   * Initializes an item with an image and random positions.
   * @param {string} imgPath - Path to the item's image.
   */
  constructor(imgPath) {
    super().loadImage(imgPath);
    this.x = 150 + Math.random() * 600;
    this.y = 50 + Math.random() * 300;
    this.animate();
  }

  /** DE
   * Animiert das Item, indem es die Frames zyklisch wechselt.
   */
  /** EN
   * Animates the item by cycling through frames.
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
