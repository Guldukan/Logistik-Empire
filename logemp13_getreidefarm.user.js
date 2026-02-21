//==UserScript==
// @name         logemp13_getreidefarm
// @namespace    
// @version      2.1.8
// @description  Filtert die Gebäudeanzeige auf Getreidefarm
// @match        https://game.logistics-empire.com/*
// @grant        none
//==/UserScript==

window.openGetreidefarmMenu = function() {
    // Nutzt die interne Suche, um nach "Getreidefarm" zu filtern
    window.applyBuildingFilter("Getreidefarm");
};
