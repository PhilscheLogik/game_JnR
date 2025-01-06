"use strict";

/** DE
 * Initialisiert das Spiel, indem das Canvas-Element konfiguriert, die Musik gewechselt
 * und die Spielwelt neu erstellt wird. 
 */
/** EN
 * Initializes the game by setting up the canvas element, switching the music,
 * and recreating the game world. 
 */
const init = () => {
  canvas = document.getElementById("canvas");
  changeMusic(level_path, menuSound);

  canvas.width = 720;
  canvas.height = 480;

  world = null;
  world = new World(canvas, keyboard);  
};

/** DE
 * Löscht alle aktiven Intervalle und Zeitgeber im aktuellen Fenster.
 * Diese Funktion durchläuft alle IDs von Zeitgebern und entfernt sie nacheinander.
 */
/** EN
 * Clears all active intervals and timers in the current window.
 * This function iterates through all timer IDs and removes them one by one.
 */
const clearAllIntervals = () => {
  let id = setTimeout(() => {}, 0);
  while (id--) {
    clearTimeout(id);
  }
};

/** DE
 * Passt die Lautstärke der Hintergrundmusik an, basierend auf dem Schieberegler-Wert, 
 * und startet die Musik, falls sie pausiert ist.
 * @param {Event} e - Das Eingabeereignis des Schiebereglers.
 */
/** EN
 * Adjusts the background music volume based on the slider value 
 * and starts the music if it is paused.
 * @param {Event} e - The input event from the slider.
 */
musicSlider.addEventListener("input", (e) => {
  const volume = Number(e.target.value);
  menuSound.volume = volume;
  if (menuSound.paused) {
    menuSound.play();
  }
});

/** DE
 * Ändert die Musik, indem eine neue Datei geladen und abgespielt wird.
 * @param {string} newPath - Der Pfad zur neuen Audiodatei.
 * @param {HTMLAudioElement} obj - Das Audio-Objekt, das die Musik abspielt.
 */
/** EN
 * Changes the music by loading and playing a new audio file.
 * @param {string} newPath - The path to the new audio file.
 * @param {HTMLAudioElement} obj - The audio object playing the music.
 */
const changeMusic = (newPath, obj) => {
  obj.pause();
  obj.src = newPath;
  obj.load();
  obj.play();
};

/** DE
 * Überwacht das Loslassen von Tasten und setzt entsprechende Werte im Tastatur-Objekt zurück.
 * @param {Event} event - Das Tastaturereignis, das die losgelassene Taste beschreibt.
 */
/** EN
 * Monitors key release events and resets corresponding values in the keyboard object.
 * @param {Event} event - The keyboard event describing the released key.
 */
document.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "KeyW":
    case "ArrowUp":
      keyboard.UP = true;
      keyboard.TIME = true;
      break;

    case "KeyA":
    case "ArrowLeft":
      keyboard.LEFT = true;
      keyboard.TIME = true;
      break;

    case "KeyS":
    case "ArrowDown":
      keyboard.DOWN = true;
      keyboard.TIME = true;
      break;

    case "KeyD":
    case "ArrowRight":
      keyboard.RIGHT = true;
      keyboard.TIME = true;
      break;

    case "KeyQ":
      keyboard.Q = true;
      keyboard.TIME = true;
      break;

    case "KeyE":
      keyboard.E = true;
      keyboard.TIME = true;
      break;

    default:
      // console.log(`Unmapped key: ${event.code}`);
      break;
  }
});

/** DE
 * Überwacht das Loslassen von Tasten und setzt entsprechende Werte im Tastatur-Objekt zurück.
 * @param {Event} event - Das Tastaturereignis, das die losgelassene Taste beschreibt.
 */
/** EN
 * Monitors key release events and resets corresponding values in the keyboard object.
 * @param {Event} event - The keyboard event describing the released key.
 */
document.addEventListener("keyup", (event) => {
  switch (event.code) {
    case "KeyW":
    case "ArrowUp":
      keyboard.UP = false;
      keyboard.TIME = true;
      break;

    case "KeyA":
    case "ArrowLeft":
      keyboard.LEFT = false;
      keyboard.TIME = true;
      break;

    case "KeyS":
    case "ArrowDown":
      keyboard.DOWN = false;
      keyboard.TIME = true;
      break;

    case "KeyD":
    case "ArrowRight":
      keyboard.RIGHT = false;
      keyboard.TIME = true;
      break;

    case "KeyQ":
      keyboard.Q = false;
      keyboard.TIME = true;
      break;

    case "KeyE":
      keyboard.E = false;
      keyboard.TIME = true;
      break;

    default:
      // console.log(`Unmapped key: ${event.code}`);
      break;
  }
});

/** DE
 * Handhabt Touch-Ereignisse und setzt entsprechende Tastenwerte basierend auf den gedrückten Buttons.
 * @param {Event} event - Das Touch-Event, das das Ziel enthält.
 * @param {boolean} isPressed - Gibt an, ob die Taste gedrückt (true) oder losgelassen (false) wurde.
 */
/** EN
 * Handles touch events and sets corresponding key values based on the pressed buttons.
 * @param {Event} event - The touch event containing the target button.
 * @param {boolean} isPressed - Indicates whether the key is pressed (true) or released (false).
 */
const handleTouchEvent = (event, isPressed) => {
  const button = event.target;
  const keyCode = button.dataset.key;

  if (keyCode) {
    switch (keyCode) {
      case "ArrowUp":
        keyboard.UP = isPressed;
        keyboard.TIME = true;
        break;
      case "ArrowLeft":
        keyboard.LEFT = isPressed;
        keyboard.TIME = true;
        break;
      case "ArrowDown":
        keyboard.DOWN = isPressed;
        keyboard.TIME = true;
        break;
      case "ArrowRight":
        keyboard.RIGHT = isPressed;
        keyboard.TIME = true;
        break;
      case "KeyQ":
        keyboard.Q = isPressed;
        keyboard.TIME = true;
        break;
      case "KeyE":
        keyboard.E = isPressed;
        keyboard.TIME = true;
        break;
      default:        
        // console.log(`Unmapped key: ${keyCode}`);
        break;
    }
  }
};

/** DE
 * Schaltet eine Klasse für ein HTML-Element um.
 * @param {string} id - ID des HTML-Elements.
 * @param {string} classname - Name der Klasse, die umgeschaltet werden soll.
 */
/** EN
 * Switches a class for a HTML element.
 * @param {string} id - ID of the HTML element.
 * @param {string} classname - Name of the class to be switched.
 */
const toggleClass = (id, classname) => {
  let idRef = document.getElementById(id);
  idRef.classList.toggle(classname);
};

/** DE
 * Überprüft die Orientierung des Bildschirms und zeigt eine Warnung, wenn sich das Gerät im Hochformat befindet. 
 * Fügt die Klasse "d_none" hinzu oder entfernt sie vom Element "orientationWarning", basierend auf der Bildschirmorientierung.
 */
/** EN
 * Checks the screen orientation and displays a warning if the device is in portrait mode.
 * Adds or removes the "d_none" class from the "orientationWarning" element based on the screen orientation.
 */
const checkOrientation = () => {
  if (window.innerWidth < window.innerHeight) {    
    orientationWarning.classList.remove("d_none");
  } else {    
    orientationWarning.classList.add("d_none");
  }
};

/** DE
 * Scrollt eine bestimmte Sektion der Webseite in den sichtbaren Bereich,
 * wenn ein Button angeklickt wird.
 * @event click
 * @param {void}
 */
/** EN
 * Scrolls a specific section of the webpage into view when a button is clicked.
 * @event click
 * @param {void}
 */
document.getElementById("myButton").addEventListener("click", () => {
  const section = document.getElementById("main-content");
  section.scrollIntoView({ behavior: "smooth" });
});

/** DE
 * Fügt allen Steuerungsschaltflächen Touch-Ereignisse hinzu,
 * um Interaktionen wie das Drücken und Loslassen zu verarbeiten.
 * @event touchstart - Wird ausgelöst, wenn der Benutzer eine Taste berührt.
 * @event touchend - Wird ausgelöst, wenn der Benutzer die Taste loslässt.
 */
/** EN
 * Adds touch event listeners to all control buttons to handle interactions 
 * like pressing and releasing.
 * @event touchstart - Triggered when the user touches a button.
 * @event touchend - Triggered when the user releases the button.
 */
document.querySelectorAll(".control-button").forEach((button) => {
  button.addEventListener("touchstart", (event) => {
    handleTouchEvent(event, true); 
  });

  button.addEventListener("touchend", (event) => {
    handleTouchEvent(event, false); 
  });
});

/** DE
 * Fügt einen Event Listener hinzu, der die Funktion "checkOrientation" aufruft, 
 * sobald die gesamte Seite, einschließlich aller Bilder und Frames, vollständig geladen wurde.
 */
/** EN
 * Adds an event listener that calls the function "checkOrientation" once the entire page, 
 * including all frames, objects, and images, has been completely loaded.
 */
window.addEventListener("load", checkOrientation);

/** DE
 * Fügt einen Event Listener hinzu, der die Funktion "checkOrientation" jedes Mal aufruft, 
 * wenn die Größe des Browserfensters geändert wird.
 */
/** EN
 * Adds an event listener that calls the function "checkOrientation" 
 * every time the browser window is resized.
 */
window.addEventListener("resize", checkOrientation);