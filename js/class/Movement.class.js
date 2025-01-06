/** DE
 * Basisklasse für bewegliche Objekte im Spiel. Erbt von der DrawableObject-Klasse.
 */
/** EN
 * Base class for moving objects in the game. Inherits from the DrawableObject class.
 */
class Movement extends DrawableObject {
  /** DE
   * Bewegungsgeschwindigkeit des Objekts.
   * @type {number}
   */
  /** EN
   * Movement speed of the object.
   * @type {number}
   */
  speed = 0.5;

  /** DE
   * Legt fest, ob sich das Objekt in die andere Richtung bewegt.
   * @type {boolean}
   */
  /** EN
   * Indicates whether the object is moving in the other direction.
   * @type {boolean}
   */
  otherDirection = false;

  /** DE
   * Energie des Objekts (Lebensenergie).
   * @type {number}
   */
  /** EN
   * Energy of the object (health points).
   * @type {number}
   */
  energy = 80;

  /** DE
   * Zeitstempel des letzten Treffers.
   * @type {number}
   */
  /** EN
   * Timestamp of the last hit received.
   * @type {number}
   */
  lastHit = 0;

  /** DE
   * Todesanimation aktiv.
   * @type {boolean}
   */
  /** EN
   * Death animation active.
   * @type {boolean}
   */
  deathframe = true;

  /** DE
   * Schadenswert, der bei Treffern verursacht wird.
   * @type {number}
   */
  /** EN
   * Damage value inflicted on collisions.
   * @type {number}
   */
  dmgValue = 80;

  /** DE
   * Anzahl gesammelter Münzen.
   * @type {number}
   */
  /** EN
   * Number of collected coins.
   * @type {number}
   */
  coinCount = 0;

  /** DE
   * Munitionsvorrat.
   * @type {number}
   */
  /** EN
   * Ammunition magazine.
   * @type {number}
   */
  magazine = 0;

  /** DE
   * Konfiguration für das Todesbild.
   * @type {object}
   */
  /** EN
   * Configuration for the death image.
   * @type {object}
   */
  IMG_DEATH = {
    path: "../../asset/img/art/2_enemy/06_fish/Attack.png",
    animationCount: 6,
  };

  /** DE
   * Lässt das Objekt nach links laufen.
   */
  /** EN
   * Makes the object move to the left.
   */
  moveToLeft() {
    setInterval(() => {
      this.x -= this.speed;
      this.otherDirection = true;
      if (this.x < -500) {
        this.x = 1500;
        this.y = 100 + Math.random() * 300;
      }
    }, 100 / 6);
  }

  /** DE
   * Lässt das Objekt nach rechts laufen.
   */
  /** EN
   * Makes the object move to the right.
   */
  moveToRight() {
    setInterval(() => {
      this.x += this.speed;
      this.otherDirection = false;
      if (this.x > 1450) {
        this.x = -50;
        this.y = 100 + Math.random() * 300;
      }
    }, 100 / 6);
  }

  /** DE
   * Lässt das Objekt nach oben laufen.
   */
  /** EN
   * Makes the object move to the top.
   */
  moveToUp() {
    setInterval(() => {
      this.y -= this.speed;

      if (this.y < -100) {
        this.y = 480;
        this.x = -200 + Math.random() * 1000;
      }
    }, 100 / 6);
  }

  /** DE
   * Lässt das Objekt nach unten laufen.
   */
  /** EN
   * Makes the object move to the bottom.
   */
  moveToDown() {
    setInterval(() => {
      this.y += this.speed;

      if (this.y > 500) {
        this.y = -100;
        this.x = -100 + Math.random() * 200;
      }
    }, 100 / 6);
  }

  /** DE
   * Überprüft, ob das Objekt mit einem anderen Objekt kollidiert - AABB Kollision.
   * @param {DrawableObject} other - Das andere Objekt, mit dem die Kollision geprüft werden soll.
   * @returns {boolean} - True, wenn eine Kollision vorliegt, sonst False.
   */
  /** EN
   * Checks for collision between this object and another object - AABB collision.
   * @param {DrawableObject} other - The other object to check for collision with.
   * @returns {boolean} - True if there is a collision, False otherwise.
   */
  calcCollision(other) {
    return (
      this.x + this.offset.x <
        other.x + other.offset.x + other.boundingBox.w - other.offset.w &&
      this.x + this.offset.x + this.boundingBox.w - this.offset.w >
        other.x + other.offset.x &&
      this.boundingBox.y + this.offset.y <
        other.boundingBox.y +
          other.offset.y +
          other.boundingBox.h -
          other.offset.h &&
      this.boundingBox.y + this.offset.y + this.boundingBox.h - this.offset.h >
        other.boundingBox.y + other.offset.y
    );
  }

  /** DE
   * Prüft, ob das Objekt tot ist (keine Energie mehr hat).
   * @returns {boolean} - True, wenn das Objekt tot ist, sonst False.
   */
  /** EN
   * Checks if the object is dead (has no energy left).
   * @returns {boolean} - True if the object is dead, False otherwise.
   */
  isDead() {
    return this.energy <= 0;
  }

  /** DE
   * Fügt dem Objekt Schaden zu und aktualisiert den Zustand basierend auf dem verursachenden Objekt.
   * @param {Object} obj - Das Objekt, das den Schaden verursacht.
   */
  /** EN
   * Inflicts damage on the object and updates the object's state based on the damaging object.
   * @param {Object} obj - The object causing the damage.
   */
  hit(obj) {
    if (obj instanceof Endboss) {
      this.energy -= 20;
    } else if (obj instanceof Enemy) {
      this.energy -= 10;
    }

    if (this.isDead()) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /** DE
   * Lässt das Objekt einen Gegenstand aufnehmen.
   * @param {Object} obj - Der aufzunehmende Gegenstand.
   */
  /** EN
   * Makes the object pick up an item.
   * @param {Object} obj - The item to be picked up.
   */
  pickUp(obj) {
    if (obj instanceof Ammunition) {
      this.magazine += 40;
    } else if (obj instanceof Coin) {
      this.coinCount += 20;
    }
  }

  /** DE
   * Überprüft, ob das Objekt verletzt ist (innerhalb der letzten 2 Sekunden getroffen wurde).
   * @returns {boolean} - True, wenn das Objekt verletzt ist, sonst False.
   */
  /** EN
   * Checks if the object is hurt (has been hit within the last 2 seconds).
   * @returns {boolean} - True if the object is hurt, False otherwise.
   */
  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 2;
  }

  /** DE
   * Fügt dem Objekt Schaden durch ein Wurfobjekt zu.
   * @param {Object} obj - Das Wurfobjekt.
   */
  /** EN
   * Inflicts damage on the object by a throwable object.
   * @param {Object} obj - The throwable object.
   */
  dmg(obj) {
    if (obj instanceof ThrowableObject) {
      this.energy -= this.dmgValue;
    }

    if (this.isDead()) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }
}
