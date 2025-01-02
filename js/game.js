"use strict";

/** BUG SOUND
 * Fehler bei der Einstellung der Sounds
 * Wenn nichts ausgewählt wurde, wird der Sound bei Spielbeginn dennoch abgespielt
 * SFX Sound von der Welt wird abgespielt, aber nicht in der Lautstärke 
 * des Sliders -> Player funktioniert, aber auch ähnlich wie oben, wenn nichts ausgewählt, 
 * dann dennoch abgespielt
 */

/** BUG SOUND
 * Pause des swim sounds ist zu hören - ggf. abändern
 */

/** GAME IDEE INGAME EFFECT
 * man könnte eine Variable setzen bei Enemies und Player, damit die
 * Funktion addToMapInParts(..,.., Faktor) in world den Faktor nicht
 * mehr benötigt. So könnte man unterschiedliche Werte bei den
 * Gegner einsetzen, vielleicht auch ein
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
  changeMusic(level_path, menuSound);

  canvas.width = 720;
  canvas.height = 480;

  world = null;
  world = new World(canvas, keyboard);
  console.log(world);
  
};

const clearAllIntervals = () => {
  let id = setTimeout(() => {}, 0);
  while (id--) {
    clearTimeout(id);
  }
}

menuSound.loop = true;
musicSlider.addEventListener("input", (e) => {
  const volume = Number(e.target.value);
  menuSound.volume = volume;
  if (menuSound.paused) {
    menuSound.play();
  }
});

const changeMusic = (newPath, obj) => {
  obj.pause();
  obj.src = newPath; 
  obj.load(); 
  obj.play();
}

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


/** DE
 * Entfernt das Overlay-Element.
 * @param {String} id
 */
const closeOverlay = (id) => {
  const overlay = document.getElementById(id);
  const parent = overlay.parentNode;
  parent.removeChild(overlay);
};

/** DE
 * Schaltet eine Klasse für ein HTML-Element um.
 * @param {string} id - ID des HTML-Elements.
 * @param {string} classname - Name der Klasse, die umgeschaltet werden soll.
 */
const toggleClass = (id, classname) => {
  let idRef = document.getElementById(id);
  idRef.classList.toggle(classname);
};
