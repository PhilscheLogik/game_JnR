"use strict";

/** Allgemeine Info
 *  
 */
// ----------------------------------------- Anfang ------------------------------------------------------
/** DE
 * Initialisiert verschiedene Funktionen: ...
 */
const init = () => {
};

// ---------------------------------------- Daten speichern ------------------------------------------------------
/** DE 
 * Speichert die Datenbankobjekte meals und stats als JSON-String ins Local Storage. 
 */
const saveLocalStorage = () => {
  localStorage.setItem("meals", JSON.stringify(meals));
};

// -------------- Zeug --------------------
/** DE
 * Entfernt das Overlay-Element.
 * @param {String} id 
 */
const closeOverlay = (id) => {
  const overlay = document.getElementById(id); // Hole das übergeordnete Element
  const parent = overlay.parentNode;
  parent.removeChild(overlay); // Entferne das Div vom übergeordneten Element
};

// ----------------------------------------- Sonstige ------------------------------------------------------
/** DE
 * Schaltet eine Klasse für ein HTML-Element um.
 * @param {string} id - Die ID des HTML-Elements.
 * @param {string} classname - Der Name der Klasse, die umgeschaltet werden soll.
 */
const toggleClass = (id, classname) => {
  let idRef = document.getElementById(id);
  idRef.classList.toggle(classname);
};