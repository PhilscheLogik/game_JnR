"use strict";
/** DE
 * HTML5 Canvas-Element, auf dem das Spiel gerendert wird.
 * @type {HTMLCanvasElement}
 */
/** EN
 * HTML5 canvas element on which the game is rendered.
 * @type {HTMLCanvasElement}
 */
let canvas;

/** DE
 * Spielwelt-Objekt.
 * @type {Object}
 */
/** EN
 * Game world object.
 * @type {Object}
 */
let world;

/** DE
 * Keyboard-Eingabe-Objekt.
 * @type {Object}
 */
/** EN
 * Keyboard input object.
 * @type {Object}
 */
let keyboard = new Keyboard();

/** DE
 * Pfad zur Chill-Drum-Musikdatei für das Hauptmenü.
 * @type {string}
 */
/** EN
 * Path to the chill drum music file for the main menu.
 * @type {string}
 */
let music_path = "./asset/audio/music/menu/chill_drum.mp3";

/** DE
 * Pfad zur Ambient-Musikdatei für die Level.
 * @type {string}
 */
/** EN
 * Path to the ambient music file for the level.
 * @type {string}
 */
let level_path = "./asset/audio/music/levels/ambient.mp3";

/** DE
 * HTML-Element, das eine Warnung bei falscher Geräteausrichtung anzeigt.
 * @type {HTMLElement}
 */
/** EN
 * HTML element that displays a warning in the event of incorrect device alignment.
 * @type {HTMLElement}
 */
const orientationWarning = document.getElementById("orientation-warning");

/** DE
 * HTML5-Slider-Element zur Steuerung der Musiklautstärke.
 * @type {HTMLInputElement}
 */
/** EN
 * HTML5 slider element for controlling the music volume.
 * @type {HTMLInputElement}
 */
const musicSlider = document.getElementById("music-volume");

/** DE
 * HTML5-Slider-Element zur Steuerung der Soundeffektlautstärke.
 * @type {HTMLInputElement}
 */
/** EN
 * HTML5 slider element for controlling the sound effect volume.
 * @type {HTMLInputElement}
 */
const SFXSlider = document.getElementById("effects-volume");

/** DE
 * Erstellt ein neues Audio-Objekt für die Hintergrundmusik im Menü und konfiguriert es.
 * @type {HTMLAudioElement}
 */
/** EN
 * Creates a new audio object for the background music in the menu and configures it.
 * @type {HTMLAudioElement}
 */
let menuSound = new Audio(music_path);

/** DE
 * Setzt die Lautstärke des Menü-Hintergrundsounds auf 0 (stumm).
 * @type {number}
 */
/** EN
 * Sets the volume of the menu background sound to 0 (mute).
 * @type {number}
 */
menuSound.volume = 0;

/** DE
 * Aktiviert die Wiederholung des Menü-Hintergrundsounds.
 * @type {boolean}
 */
/** EN
 * Activates the repetition of the menu background sound.
 * @type {boolean}
 */
menuSound.loop = true;