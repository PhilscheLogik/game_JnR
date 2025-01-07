/** DE
 * Repräsentiert ein Level im Spiel.
 * Enthält Informationen über Feinde, Endgegner, Vordergrundobjekte, Hintergrundobjekte, Munition und Münzen.
 */
/** EN
 * Represents a level in the game.
 * Contains information about enemies, endboss, foreground objects, background objects, ammunition, and coins.
 */
class Level {
  /** DE
   * Array von Feinden in diesem Level.
   * @type {Array}
   */
  /** EN
   * Array of enemies in this level.
   * @type {Array}
   */
  enemies;

  /** DE
   * Endgegner des Levels.
   * @type {Object}
   */
  /** EN
   * Endboss of the level.
   * @type {Object}
   */
  endboss;

  /** DE
   * Vordergrundobjekte (z.B. Plattformen).
   * @type {Array}
   */
  /** EN
   * Foreground objects (e.g. platforms).
   * @type {Array}
   */
  foregrounds;

  /** DE
   * Hintergrundobjekte (z.B. Dekoration).
   * @type {Array}
   */
  /** EN
   * Background objects (e.g. decoration).
   * @type {Array}
   */
  backgroundObjects;

  /** DE
   * Munition im Level.
   * @type {Array}
   */
  /** EN
   * Ammunition in the level.
   * @type {Array}
   */
  ammunitions;

  /** DE
   * Münzen im Level.
   * @type {Array}
   */
  /** EN
   * Coins in the level.
   * @type {Array}
   */
  coins;

  /** DE
   * Maximale X-Koordinate des Levels.
   * @type {number}
   */
  /** EN
   * Maximum X coordinate of the level.
   * @type {number}
   */
  level_max_x_coordinate = 1390;

  /** DE
   * Maximale Y-Koordinate des Levels.
   * @type {number}
   */
  /** EN
   * Maximum Y coordinate of the level.
   * @type {number}
   */
  level_max_y_coordinate = 430;

  /** DE
   * Konstruktor der Level-Klasse.
   * @param {Array} enemies Array von Feinden.
   * @param {Object} endboss Endgegner.
   * @param {Array} foregrounds Vordergrundobjekte.
   * @param {Array} backgroundObjects Hintergrundobjekte.
   * @param {Array} ammunitions Munition.
   * @param {Array} coins Münzen.
   */
  /** EN
   * Constructor of the Level class.
   * @param {Array} enemies Array of enemies.
   * @param {Object} endboss Endboss.
   * @param {Array} foregrounds Foreground objects.
   * @param {Array} backgroundObjects Background objects.
   * @param {Array} ammunitions Ammunition.
   * @param {Array} coins Coins.
   */
  constructor(enemies, endboss, foregrounds, backgroundObjects, ammunitions, coins) {
    this.enemies = enemies;
    this.endboss = endboss;
    this.foregrounds = foregrounds;
    this.backgroundObjects = backgroundObjects;
    this.ammunitions = ammunitions;
    this.coins = coins;
  }
}