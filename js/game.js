"use strict";

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
  // canvas.style.width = "720px";
  // canvas.style.height = "480px";

  world = new World(canvas);
  console.log(world);
};

document.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "KeyW":
    case "ArrowUp": 
    keyboard.UP = true;
      console.log("Move Up ON");
      break;

    case "KeyA":
    case "ArrowLeft":
      keyboard.LEFT = true;
      console.log("Move Left ON");
      break;

    case "KeyS":
    case "ArrowDown":
      keyboard.DOWN = true;
      console.log("Move Down ON");
      break;

    case "KeyD":
    case "ArrowRight": 
    keyboard.RIGHT = true;
      console.log("Move Right ON");
      break;

    case "KeyQ":
      keyboard.Q = true;
      console.log("Special Action (Q) ON");
      break;

    case "Space":
      keyboard.SPACE = true;
      console.log("Jump or Action (Space) ON");
      break;

    default:
      console.log(`Unmapped key: ${event.code}`);
      break;
  }
});

document.addEventListener("keyup", (event) => {
  switch (event.code) {
    case "KeyW":
    case "ArrowUp": 
    keyboard.UP = false;
      console.log("Move Up OFF");
      break;

    case "KeyA":
    case "ArrowLeft":
      keyboard.LEFT = false;
      console.log("Move Left OFF");
      break;

    case "KeyS":
    case "ArrowDown":
      keyboard.DOWN = false;
      console.log("Move Down OFF");
      break;

    case "KeyD":
    case "ArrowRight": 
    keyboard.RIGHT = false;
      console.log("Move Right OFF");
      break;

    case "KeyQ":
      keyboard.Q = false;
      console.log("Special Action (Q) OFF");
      break;

    case "Space":
      keyboard.SPACE = false;
      console.log("Jump or Action (Space) OFF");
      break;

    default:
      console.log(`Unmapped key: ${event.code}`);
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
