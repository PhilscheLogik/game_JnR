"use strict";

/** DE
 * Erstellt das Startmenü und fügt es dem HTML-Element mit der ID "menu-section" hinzu.
 */
/** EN
 * Creates the start menu and appends it to the HTML element with the ID "menu-section".
 */
const createStartMenu = () => {    
  let contentRef = document.getElementById("menu-section");  
  contentRef.innerHTML = renderStartMenu();
};

/** DE
 * Rendert den HTML-Inhalt für das Startmenü.
 * @returns {string} Der generierte HTML-Code für das Startmenü.
 */
/** EN
 * Renders the HTML content for the start menu.
 * @returns {string} The generated HTML code for the start menu.
 */
const renderStartMenu = () => `
<div>
  <h2 id="h2-title" >The Sunken Ships</h2>  
  <div>
    <button
      onclick="init(), toggleClass('menu-section','d_none'), toggleClass('canvas-section','d_none')"
    >
      Game Start
    </button>
    <button
      onclick="createHowToPlay()"
    >
      Wie ist die Steuerung?
    </button>
  </div>
  ${renderBubbleMenu()}  
</div>`;

/** DE
 * Erstellt das "HowToPlay"-Menü und fügt es dem HTML-Element mit der ID "menu-section" hinzu.
 */
/** EN
 * Creates the "How to Play" menu and appends it to the HTML element with the ID "menu-section".
 */
const createHowToPlay = () => {
  let contentRef = document.getElementById("menu-section");
  contentRef.innerHTML = renderHowToPlay();
};

/** DE
 * Rendert den HTML-Inhalt für das HowToPlay-menü.
 * @returns {string} Der generierte HTML-Code.
 */
/** EN
 * Renders the HTML content for the How To Play menu.
 * @returns {string} The generated HTML code.
 */
const renderHowToPlay = () => `
<div>  
  <h2 id="h2-htp" >HOW TO PLAY</h2>
  <section class="clue-section">
    <p><span><span class="key">↑</span> <span class="key">W</span></span> <span>Mit der Pfeiltaste 'oben' oder der Taste 'W' ist eine Bewegung nach oben möglich.</span></p>
    <p><span><span class="key">←</span> <span class="key">A</span></span> <span>Mit der Pfeiltaste 'links' oder der Taste 'A' ist eine Bewegung nach links möglich.</span></p>
    <p><span><span class="key">↓</span> <span class="key">S</span></span> <span>Mit der Pfeiltaste 'unten' oder der Taste 'S' ist eine Bewegung nach unten möglich.</span></p>
    <p><span><span class="key">→</span> <span class="key">D</span></span> <span>Mit der Pfeiltaste 'rechts' oder der Taste 'D' ist eine Bewegung nach rechts möglich.</span></p>    
    <p><span class="key">Q</span> <span>Mit der Taste 'Q' kann man schießen, <br> wenn Munition vorhanden ist.</span></p>
    <p><span class="key">E</span> <span>Mit der gedrückten Taste 'E' in gewünschter Richtung kann man porten/glitchen.</span></p>
  </section>

  <div>    
    <button
      onclick="createStartMenu()"
    >
      Zurück
    </button>
  </div>
  ${renderBubbleMenu()}  
</div>`;

/** DE
 * Erstellt das Game Over-Menü und fügt es dem HTML-Element mit der ID "menu-section" hinzu.
 */
/** EN
 * Creates the Game Over menu and appends it to the HTML element with the ID "menu-section".
 */
const createGameOver = () => {
  let contentRef = document.getElementById("menu-section");
  contentRef.innerHTML = renderGameOver();
  changeMusic(music_path, menuSound);   
  clearAllIntervals(); 
  
};

/** DE
 * Rendert den HTML-Inhalt für das GameOver-menü.
 * @returns {string} Der generierte HTML-Code.
 */
/** EN
 * Renders the HTML content for the GameOver menu.
 * @returns {string} The generated HTML code.
 */
const renderGameOver = () => `
<div class="go-overlay">  
  <h2 id="h2-fail">GAME OVER</h2>

  <span>Niederlage fortsetzen?</span>
  <div>
    <button
      onclick="init(), toggleClass('menu-section','d_none'), toggleClass('canvas-section','d_none')"
    >
    Ja 
    </button>
    <button
      onclick="createStartMenu()"
    >
      Zurück
    </button>
  </div>
  ${renderBubbleMenu()}  
</div>`;

/** DE
 * Erstellt das WinScreen-Menü und fügt es dem HTML-Element mit der ID "menu-section" hinzu.
 */
/** EN
 * Creates the WinScreen menu and appends it to the HTML element with the ID "menu-section".
 */
const createWinScreen = () => {
  let contentRef = document.getElementById("menu-section");
  contentRef.innerHTML = renderWinScreen();
  changeMusic(music_path, menuSound); 

  clearAllIntervals();   
};

/** DE
 * Rendert den HTML-Inhalt für das WinScreen-menü.
 * @returns {string} Der generierte HTML-Code.
 */
/** EN
 * Renders the HTML content for the WinScreen menu.
 * @returns {string} The generated HTML code.
 */
const renderWinScreen = () => `
<div class="win-overlay"> 
  <h2 id="h2-win">WIN</h2>

  <span>Nochmal?</span>
  <div>
    <button
      onclick="init(), toggleClass('menu-section','d_none'), toggleClass('canvas-section','d_none')"
    >
    Ja 
    </button>
    <button
      onclick="createStartMenu()"
    >
      Zurück
    </button>
  </div>
  ${renderBubbleMenu()}  
</div>`;

/** DE
 * Rendert den HTML-Inhalt für das Bubbles für den Hintergrund.
 * @returns {string} Der generierte HTML-Code.
 */
/** EN
 * Renders the HTML content for the bubbles for the background.
 * @returns {string} The generated HTML code .
 */
const renderBubbleMenu = () =>`
<div class="menu-bubble bubble--1"></div>
<div class="menu-bubble bubble--2"></div>
<div class="menu-bubble bubble--3"></div>
<div class="menu-bubble bubble--4"></div>
<div class="menu-bubble bubble--5"></div>
<div class="menu-bubble bubble--6"></div>
`