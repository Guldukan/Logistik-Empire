//==UserScript==
// @name         logemp15_baecker
// @namespace    
// @version      2.1.8
// @description  Filtert die Gebäudeanzeige auf Bäckerei
// @match        https://game.logistics-empire.com/*
// @grant        none
//==/UserScript==

window.openBaeckereiMenu = function() {
    // Nutzt die interne Suche, um nach "Bäckerei" zu filtern
    window.applyBuildingFilter("Bäckerei");
};
