"use strict";
/**
 * Hier werden Funktionen gespeichert, die HTML Code rendern.
 */
// ----------------------------------------- Warenkorb ------------------------------------------------------


const createStartMenu = () => {    
  let contentRef = document.getElementById("menu-section");  
  contentRef.innerHTML = renderStartMenu();
};

/** DE
 * Rendert den Warenkorb, nutzt dazu createCartItems()(src=script.js).
 * @returns Gibt dazu benötigten HTML Code zurück.
 */
const renderStartMenu = () => `
<div>
  <h2 id="h2-title" >The Sunken Ship</h2>  
  <div>
    <button
      onclick="init(), toggleClass('menu-section','d_none'), toggleClass('canvas','d_none')"
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

const createHowToPlay = () => {
  let contentRef = document.getElementById("menu-section");
  contentRef.innerHTML = renderHowToPlay();
};

const renderHowToPlay = () => `
<div>  
  <h2 id="h2-htp" >HOW TO PLAY</h2>
  <section class="clue-section">
    <p><span><span class="key">↑</span> <span class="key">W</span></span> <span>Mit der Pfeiltaste 'oben' oder der Taste 'W' ist eine Bewegung nach oben möglich.</span></p>
    <p><span><span class="key">←</span> <span class="key">A</span></span> <span>Mit der Pfeiltaste 'links' oder der Taste 'A' ist eine Bewegung nach links möglich.</span></p>
    <p><span><span class="key">↓</span> <span class="key">S</span></span> <span>Mit der Pfeiltaste 'unten' oder der Taste 'S' ist eine Bewegung nach unten möglich.</span></p>
    <p><span><span class="key">→</span> <span class="key">D</span></span> <span>Mit der Pfeiltaste 'rechts' oder der Taste 'D' ist eine Bewegung nach rechts möglich.</span></p>    
    <p><span class="key">Q</span> <span>Mit der Taste 'Q' kann man schießen.</span></p>
    <p><span class="key"> </span> <span>Mit der Taste 'Leertaste' kann man #.</span></p>
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

const createGameOver = () => {
  let contentRef = document.getElementById("menu-section");
  contentRef.innerHTML = renderGameOver();
  changeMusic(music_path, menuSound);
};

const renderGameOver = () => `
<div class="go-overlay">  
  <h2 id="h2-fail">GAME OVER</h2>

  <span>Niederlage fortsetzen?</span>
  <div>
    <button
      onclick="init(), toggleClass('menu-section','d_none'), toggleClass('canvas','d_none')"
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

const createWinScreen = () => {
  let contentRef = document.getElementById("menu-section");
  contentRef.innerHTML = renderWinScreen();
};

const renderWinScreen = () => `
<div class="win-overlay"> 
  <h2 id="h2-win">WIN</h2>

  <span>Nochmal?</span>
  <div>
    <button
      onclick="init(), toggleClass('menu-section','d_none'), toggleClass('canvas','d_none')"
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

const renderBubbleMenu = () =>`
<div class="menu-bubble bubble--1"></div>
<div class="menu-bubble bubble--2"></div>
<div class="menu-bubble bubble--3"></div>
<div class="menu-bubble bubble--4"></div>
<div class="menu-bubble bubble--5"></div>
<div class="menu-bubble bubble--6"></div>
`