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
};

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

    default:
      // console.log(`Unmapped key: ${event.code}`);
      break;
  }
});

const handleTouchEvent = (event, isPressed) => {
  const button = event.target; // Das berührte Element
  const keyCode = button.dataset.key; // Den zugeordneten Datenwert auslesen

  if (keyCode) {
    switch (keyCode) {
      case "ArrowUp":
        keyboard.UP = isPressed;
        break;
      case "ArrowLeft":
        keyboard.LEFT = isPressed;
        break;
      case "ArrowDown":
        keyboard.DOWN = isPressed;
        break;
      case "ArrowRight":
        keyboard.RIGHT = isPressed;
        break;
      case "KeyQ":
        keyboard.Q = isPressed;
        break;
      case "KeyE":
        keyboard.E = isPressed;
        break;
      default:
        // Optional: unmapped keys
        // console.log(`Unmapped key: ${keyCode}`);
        break;
    }
  }
};

// Touch-Interaktion hinzufügen
document.querySelectorAll(".control-button").forEach((button) => {
  button.addEventListener("touchstart", (event) => {
    handleTouchEvent(event, true); // Taste gedrückt
  });

  button.addEventListener("touchend", (event) => {
    handleTouchEvent(event, false); // Taste losgelassen
  });
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

// Funktion zur Überprüfung der Ausrichtung
const checkOrientation = () => {
  if (window.innerWidth < window.innerHeight) {
    // Hochformat
    orientationWarning.classList.remove("d_none");
  } else {
    // Querformat
    orientationWarning.classList.add("d_none");
  }
};
window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);

document.getElementById("myButton").addEventListener("click", () => {
  const section = document.getElementById("main-content");
  // Scrollt die Section in den sichtbaren Bereich
  section.scrollIntoView({ behavior: "smooth" });
});
