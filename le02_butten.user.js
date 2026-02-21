//==UserScript==
// @name         le02_butten
// @namespace    
// @version      2.1.8
// @description  Initialisiert UI-Buttons (Gebäude + Header)
// @match        https://game.logistics-empire.com/*
// @grant        none
//==/UserScript==


// Gebäude-Button aufruf in LE funktionen 
// -------------------------------------------------------------
(function() {
    'use strict';

    function waitForGebaeude() {
        if (window.insertGebaeudeButton) {
            window.insertGebaeudeButton();
        } else {
            setTimeout(waitForGebaeude, 100);
        }
    }

    waitForGebaeude();
})();

// Header-Buttons Aufruf in Funktionen (Tomaten, Getreide, Fleisch)
// -------------------------------------------------------------
(function() {
    'use strict';

    function waitForHeaderFramework() {
        if (window.initDefaultHeaderButtons) {
            window.initDefaultHeaderButtons();
        } else {
            setTimeout(waitForHeaderFramework, 100);
        }
    }

    waitForHeaderFramework();
})();