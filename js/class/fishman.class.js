/** DE
 * Spezieller Gegenertyp
 */
/** EN
 * Specialised opponent type
 */
class Fishman extends Enemy {
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
  w = 192;

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
   * von der Klasse DrawableObject
   * @param {number} x - X-Koordinate des offset.
   * @param {number} y - Y-Koordinate des offset.
   * @param {number} w - Breite des offset.
   * @param {number} h - Höhe des offset.
   */
  /** EN
   * from the class DrawableObject
   * @param {number} x - X-coordinate of the offset.
   * @param {number} y - Y-coordinate of the offset.
   * @param {number} w - Width of the offset.
   * @param {number} h - Height of the offset.
   */
  offset = { x: 0, y: 0, w: 24, h: 0 };

  /** DE
   * Konfiguration für das Todesbild von der Klasse Movement
   * @type {object}
   */
  /** EN
   * Configuration for the death image from the class Movement
   * @type {object}
   */
  IMG_DEATH = {
    path: "./asset/img/art/2_enemy/5_fish_man/Death.png",
    animationCount: 6,
  };
}
