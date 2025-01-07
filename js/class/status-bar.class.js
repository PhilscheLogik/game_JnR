/** DE
 * Repräsentiert die Statusleiste im Spiel.
 * Erweitert die `DrawableObject`-Klasse um spezifische Eigenschaften und Methoden für die Statusleiste.
 */
/** EN
 * Represents the status bar in the game.
 * Extends the `DrawableObject` class with specific properties and methods for the status bar.
 */
class StatusBar extends DrawableObject {
  /** DE
   * Start Index für das Bild. Kommt von der Klasse drawable-object.
   * @type {number}
   */
  /** EN
   * Start index for the image. Comes from the drawable-object class
   * @type {number}
   */
  frameIndex = 0;

  /** DE
   * Maximale Anzahl der Frames im Bild. Kommt von der Klasse drawable-object.
   * @type {number}
   */
  /** EN
   * Maximum number of frames in the image. Comes from the drawable-object class.
   * @type {number}
   */
  totalFrames = 9;

  /** DE
   * Prozentsatz der aktuellen Anzeige (z.B. Prozent der verbleibenden Lebenspunkte).
   * @type {number}
   */
  /** EN
   * Percentage of the current display (e.g., percentage of remaining health points).
   * @type {number}
   */
  percentage = 80;

  /** DE
   * Boolean, um anzuzeigen, ob sich das Objekt in die andere Richtung bewegt.
   * @type {boolean}
   */
  /** EN
   * Boolean to indicate whether the object is moving in the other direction.
   * @type {boolean}
   */
  otherDirection = false;

  /** DE
   * Konfiguration für das Lebensbalken-Bild.
   * @type {Object}
   */
  /** EN
   * Configuration for the health bar image.
   * @type {Object}
   */
  IMG_LP_BAR = {
    path: "./asset/img/art/4_ui/status_bar/lp2_bar.png",
    animationCount: 9,
    x: 5,
    y: 5,
    w: 864,
    h: 48,
  };

  /** DE
   * Konfiguration für das Münzbalken-Bild.
   * @type {Object}
   */
  /** EN
   * Configuration for the coin bar image.
   * @type {Object}
   */
  IMG_COIN_BAR = {
    path: "./asset/img/art/4_ui/status_bar/plasma_y_bar.png",
    animationCount: 9,
    x: 5,
    y: 50,
    w: 216,
    h: 96,
  };

  /** DE
   * Konfiguration für das Munitionsbalken-Bild.
   * @type {Object}
   */
  /** EN
   * Configuration for the ammunition bar image.
   * @type {Object}
   */
  IMG_MUNI_BAR = {
    path: "./asset/img/art/4_ui/status_bar/plasma_b_bar.png",
    animationCount: 9,
    x: 25,
    y: 50,
    w: 216,
    h: 96,
  };

  /** DE
   * Konstruktor der StatusBar-Klasse.
   * @param {number} index - Index, um das zu ladende Bild auszuwählen.
   */
  /** EN
   * Constructor of the StatusBar class.
   * @param {number} index - Index to select the image to be loaded.
   */
  constructor(index) {
    super();

    if (index == 1) {
      this.initImage(this.IMG_LP_BAR);
    }
    if (index == 2) {
      this.initImage(this.IMG_COIN_BAR);
    }
    if (index == 3) {
      this.initImage(this.IMG_MUNI_BAR);
    }
  }

  /** DE
   * Initialisiert das Bild des Objekts basierend auf den übergebenen Konfigurationsdaten.
   * @param {Object} obj - Objekt mit den Bildinformationen (Pfad, Anzahl der Frames, Position, Größe).
   */
  /** EN
   * Initializes the image of the object based on the given configuration data.
   * @param {Object} obj - Object containing image information (path, frame count, position, size).
   */
  initImage(obj) {
    this.loadImage(obj.path);
    this.totalFrames = obj.animationCount;
    this.x = obj.x;
    this.y = obj.y;
    this.w = obj.w;
    this.h = obj.h;
  }

  /** DE
   * Setzt den Prozentsatz für die Energieanzeige.
   * @param {number} percentage - Prozentsatz der Energie (0-100).
   */
  /** EN
   * Sets the percentage for the energy display.
   * @param {number} percentage - Percentage of energy (0-100).
   */
  setPercentageEnergy(percentage) {
    this.percentage = percentage;
    this.resolveImageIndexEnergy();
  }

  /** DE
   * Berechnet den aktuellen Frame-Index für die Energieanzeige basierend auf dem Prozentsatz.
   */
  /** EN
   * Calculates the current frame index for the energy display based on the percentage.
   */
  resolveImageIndexEnergy() {
    if (this.percentage == 80) {
      this.frameIndex = 0;
    } else if (this.percentage >= 70) {
      this.frameIndex = 1;
    } else if (this.percentage >= 60) {
      this.frameIndex = 2;
    } else if (this.percentage >= 50) {
      this.frameIndex = 3;
    } else if (this.percentage >= 40) {
      this.frameIndex = 4;
    } else if (this.percentage >= 30) {
      this.frameIndex = 5;
    } else if (this.percentage >= 20) {
      this.frameIndex = 6;
    } else if (this.percentage >= 10) {
      this.frameIndex = 7;
    } else if (this.percentage == 0) {
      this.frameIndex = 8;
    }
  }

  /** DE
   * Setzt den Prozentsatz für die Anzeige von Gegenständen (z.B. Munition, Münzen).
   * @param {number} percentage - Prozentsatz der Anzeige (0-100).
   */
  /** EN
   * Sets the percentage for the display of items (e.g., ammunition, coins).
   * @param {number} percentage - Percentage of the display (0-100).
   */
  setPercentageItem(percentage) {
    this.percentage = percentage;
    this.resolveImageIndexItem();
  }

  /** DE
   * Berechnet den aktuellen Frame-Index für die Anzeige von Gegenständen basierend auf dem Prozentsatz.
   */
  /** EN
   * Calculates the current frame index for the item display based on the percentage.
   */
  resolveImageIndexItem() {
    if (this.percentage >= 80) {
      this.frameIndex = 8;
    } else if (this.percentage >= 70) {
      this.frameIndex = 7;
    } else if (this.percentage >= 60) {
      this.frameIndex = 6;
    } else if (this.percentage >= 50) {
      this.frameIndex = 5;
    } else if (this.percentage >= 40) {
      this.frameIndex = 4;
    } else if (this.percentage >= 30) {
      this.frameIndex = 3;
    } else if (this.percentage >= 20) {
      this.frameIndex = 2;
    } else if (this.percentage >= 10) {
      this.frameIndex = 1;
    } else if (this.percentage == 0) {
      this.frameIndex = 0;
    }
  }
}
