//==UserScript==
// @name         logemp24_snack
// @namespace    
// @version      2.2.1
// @description  Filtert die Gebäudeanzeige auf Snack
// @match        https://game.logistics-empire.com/*
// @grant        none
//==/UserScript==

window.opensnackMenu = function() {
    // Nutzt die interne Suche, um nach "Snack" zu filtern
    window.applyBuildingFilter("Snack");
};
