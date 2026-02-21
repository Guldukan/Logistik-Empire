//==UserScript==
// @name       logemp32_stoffe
// @namespace    
// @version      2.2.0
// @description  Stoffe und Garne Menü
// @match        https://game.logistics-empire.com/*
// @grant        none
//==/UserScript==

window.openSpinnereiMenu = function() {
    // Nutzt die interne Suche, um nach "Spinnerei" zu filtern
    window.applyBuildingFilter("Spinnerei");
};