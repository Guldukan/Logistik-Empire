//==UserScript==
// @name         logemp23_piza
// @namespace    
// @version      2.2.1
// @description  Filtert die Gebäudeanzeige auf Pizza
// @match        https://game.logistics-empire.com/*
// @grant        none
//==/UserScript==

window.openPizzaMenu = function() {
    // Nutzt die interne Suche, um nach "Pizza" zu filtern
    window.applyBuildingFilter("Pizza");
};
