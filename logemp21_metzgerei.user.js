//==UserScript==
// @name        logemp21_metzgerei
// @namespace    
// @version      2.1.8
// @description  Filtert die Gebäudeanzeige auf Metzgerei
// @match        https://game.logistics-empire.com/*
// @grant        none
//==/UserScript==

window.openMetzgereiMenu = function() {
    // Nutzt die interne Suche, um nach "Metzgerei" zu filtern
    window.applyBuildingFilter("Metzgerei");
};
