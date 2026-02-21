//==UserScript==
// @name         logemp11_gewaechshaus
// @namespace    
// @version      2.2.0
// @description  Filtert die Gebäudeanzeige auf Gewächshäuser
// @match        https://game.logistics-empire.com/*
// @grant        none
//==/UserScript==

window.openGewaechshausMenu = function() {
    // Nutzt die interne Suche, um nach "Gewächshaus" zu filtern
    window.applyBuildingFilter("Gewächshaus");
};
