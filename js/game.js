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

  canvas.width = 720; // Interne Auflösung
  canvas.height = 480; // Interne Auflösung
  canvas.style.width = "720px"; // Sichtbare Größe
  canvas.style.height = "480px"; // Sichtbare Größe

  world = new World(canvas);  
  console.log(world);
};

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
