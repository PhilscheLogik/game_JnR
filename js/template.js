"use strict";
/**
 * Hier werden Funktionen gespeichert, die HTML Code rendern.
 */
// ----------------------------------------- Warenkorb ------------------------------------------------------
/** DE
 * Rendert den Warenkorb, nutzt dazu createCartItems()(src=script.js).
 * @returns Gibt dazu benötigten HTML Code zurück.
 */
const renderCart = () => `
<h2>Warenkorb</h2>
<section class="cart-section">
  ${createCartItems()}
</section>
${renderBilling()}
<button id="btn-packet" onclick="madeOrder()">Bestellung aufgeben</button>
`;