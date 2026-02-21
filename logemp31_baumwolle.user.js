//==UserScript==
// @name         logemp31_baumwolle
// @namespace    
// @version      2.2.0
// @description  Filtert die Gebäudeanzeige auf Baumwollplantage
// @match        https://game.logistics-empire.com/*
// @grant        none
//==/UserScript==

window.openBaumwolleMenu = function() {
    // Nutzt die interne Suche, um nach "Baumwollplantage" zu filtern
    window.applyBuildingFilter("Faserhof");
};