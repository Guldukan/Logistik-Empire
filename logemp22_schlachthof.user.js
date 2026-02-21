//==UserScript==
// @name         logemp22_schlachthof
// @namespace    
// @version      2.1.8
// @description  Filtert die Gebäudeanzeige auf Schlachthof
// @match        https://game.logistics-empire.com/*
// @grant        none
//==/UserScript==

window.openSchlachthofMenu = function() {
    // Nutzt die interne Suche, um nach "Schlachthof" zu filtern
    window.applyBuildingFilter("Fleischfabrik");
};
