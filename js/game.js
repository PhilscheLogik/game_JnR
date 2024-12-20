"use strict";
/** BUG ANIMATION
 * nach einer Animation z.B. beim Drücken von Q, wird danach
 * nicht das ursprüngliche Bild angezeigt
 * -> verschoben auf später, da Idle noch nicht hinzugefügt
 */

/** BUG SOUND
 * Pause des swim sounds ist zu hören - ggf. abändern
 */

/** GAME IDEE INGAME EFFECT
 * man könnte eine Variable setzen bei Enemies und Player, damit die
 * Funktion addToMapInParts(..,.., Faktor) in world den Faktor nicht
 * mehr benötigt. So könnte man unterschiedliche Werte bei den
 * Gegner einsetzten, vielleicht auch ein
 * Item, welches den Endboss entschärft/verkleinert.
 */

/** GAME IDEE NEW ENEMY
 * Man könnte Bodentruppen von oben regnen lassen (sterben
 * bei Bodenkontakt) - einfach die animate() {} bei der
 * neuen Klassen überschreiben
 * die Gegnerart schlägt einfach immer verzweifelt xD
 */

/** OPTIMIERUNG
 * addToMapComplete() bzw.
 * addToMapInParts() optimieren und ggf. auslagern
 */

/** Allgemeine Info
 *
 */
// ----------------------------------------- Anfang ------------------------------------------------------
/** DE
 * Initialisiert verschiedene Funktionen: ...
 */
const init = () => {
  canvas = document.getElementById("canvas");

  canvas.width = 720;
  canvas.height = 480;

  world = new World(canvas, keyboard);
  console.log(world);

  // let x_c = 2;
  // let y_c = 2;
  // let w_c = 6;
  // let h_c = 4;

  // let x_e = 0
  // let y_e = 0;
  // let w_e = 3;
  // let h_e = 3;

  // console.log(`(x_c:${x_c}| y_c:${y_c}), (w_c:${w_c}| h_c:${h_c})`);
  // console.log(`(x_e:${x_e}| y_e:${y_e}), (w_e:${w_e}| h_e:${h_e})`);
  // console.log();
  // console.log('---------- Junus ----------');
  // console.log(`x_c + w_c > x_e: ${x_c + w_c > x_e}`);
  // console.log(`y_c + h_c > y_e: ${y_c + h_c > y_e}`);
  // console.log(`x_c < x_e: ${x_c < x_e}`);
  // console.log(`y_c < y_e + h_e: ${y_c < y_e + h_e}`);
  // console.log();
  // console.log('---------- Meine ----------');
  // console.log(`x_c + w_c > x_e: ${x_c + w_c > x_e}`);
  // console.log(`y_c + h_c > y_e: ${y_c + h_c > y_e}`);
  // console.log(`x_c + w_c > w_e: ${x_c + w_c > w_e}`);
  // console.log(`y_c + h_c > h_e: ${y_c + h_c > h_e}`);
};

document.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "KeyW":
    case "ArrowUp":
      keyboard.UP = true;
      break;

    case "KeyA":
    case "ArrowLeft":
      keyboard.LEFT = true;
      break;

    case "KeyS":
    case "ArrowDown":
      keyboard.DOWN = true;
      break;

    case "KeyD":
    case "ArrowRight":
      keyboard.RIGHT = true;
      break;

    case "KeyQ":
      keyboard.Q = true;
      break;

    case "KeyE":
      keyboard.E = true;
      break;

    case "Space":
      keyboard.SPACE = true;
      break;

    default:
      // console.log(`Unmapped key: ${event.code}`);
      break;
  }
});

document.addEventListener("keyup", (event) => {
  switch (event.code) {
    case "KeyW":
    case "ArrowUp":
      keyboard.UP = false;

      break;

    case "KeyA":
    case "ArrowLeft":
      keyboard.LEFT = false;
      break;

    case "KeyS":
    case "ArrowDown":
      keyboard.DOWN = false;
      break;

    case "KeyD":
    case "ArrowRight":
      keyboard.RIGHT = false;
      break;

    case "KeyQ":
      keyboard.Q = false;
      break;

    case "KeyE":
      keyboard.E = false;
      break;

    case "Space":
      keyboard.SPACE = false;
      break;

    default:
      // console.log(`Unmapped key: ${event.code}`);
      break;
  }
});

// -------------- Zeug --------------------
/** DE
 * Entfernt das Overlay-Element.
 * @param {String} id
 */
const closeOverlay = (id) => {
  const overlay = document.getElementById(id);
  const parent = overlay.parentNode;
  parent.removeChild(overlay);
};

// ----------------------------------------- Sonstige ------------------------------------------------------
/** DE
 * Schaltet eine Klasse für ein HTML-Element um.
 * @param {string} id - ID des HTML-Elements.
 * @param {string} classname - Name der Klasse, die umgeschaltet werden soll.
 */
const toggleClass = (id, classname) => {
  let idRef = document.getElementById(id);
  idRef.classList.toggle(classname);
};
