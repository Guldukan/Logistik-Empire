//==UserScript==
// @name         logemp12_ketschup
// @namespace    
// @version      2.2.0
// @description  Filtert die Gebäudeanzeige auf Tomatenfabrik
// @match        https://game.logistics-empire.com/*
// @grant        none
//==/UserScript==

window.openTomatenfabrikMenu = function() {
    // Nutzt die interne Suche, um nach "Tomatenfabrik" zu filtern
    window.applyBuildingFilter("Tomatenfabrik");
};
