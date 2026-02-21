//==UserScript==
// @name         logemp14_muehle
// @namespace    
// @version      2.1.8
// @description  Filtert die Gebäudeanzeige auf Mühle
// @match        https://game.logistics-empire.com/*
// @grant        none
//==/UserScript==

window.openMuehleMenu = function() {
    // Nutzt die interne Suche, um nach "Mühle" zu filtern
    window.applyBuildingFilter("Mühle");
};
