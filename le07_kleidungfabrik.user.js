//==UserScript==
// @name         logemp44_kleidung
// @namespace    
// @version      2.2.0
// @description  Kleidung
// @match        https://game.logistics-empire.com/*
// @grant        none
//==/UserScript==

window.openKleidungMenu = function () {
    // 1. Kleidungsfabrik
    window.insertButtonInSearchDiv(
        "btnKleidungFactory",
        "https://game.logistics-empire.com/assets/res_indigo_clothes-JQr_V6yn.avif",
        () => console.log("Kleidungsfabrik geklickt"),
        "Kleidungsfabrik"
    );
};