//==UserScript==
// @name       logemp33_weberei
// @namespace    
// @version      2.2.0
// @description  Filtert die Gebäudeanzeige auf Weberei
// @match        https://game.logistics-empire.com/*
// @grant        none
//==/UserScript==

window.openWebereiMenu = function() {
    // Nutzt die interne Suche, um nach "Weberei" zu filtern
    window.applyBuildingFilter("Weberei");
};