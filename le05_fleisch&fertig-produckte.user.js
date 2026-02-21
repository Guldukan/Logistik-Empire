//==UserScript==
// @name         le05_fleisch&fertig-produckte
// @namespace    
// @version      2.1.8
// @description  Definiert das Fleisch-Menü und dessen Buttons.
// @match        https://game.logistics-empire.com/*
// @grant        none
//==/UserScript==

// =================================================================================
// Fleisch & Vieh Menü
// Diese Funktion wird vom "Fleisch & Vieh"-Button im Header aufgerufen.
// =================================================================================
window.openFleischMenu = function () {
    // Alte Buttons und Loops aufräumen
    window.clearSearchDivButtons();

    // --- Fleisch & Wurst ---
    window.insertButtonInSearchDiv(
        "btnMetzgerei",
        "https://game.logistics-empire.com/assets/icon_bld_meat_factory-DeFS9SW1.avif",
        () => {
            if (window.openMetzgereiMenu) {
                window.openMetzgereiMenu();
            }
        },
        "Metzgerei"
    );
    window.insertButtonInSearchDiv(
        "btnSchlachthof",
        "https://game.logistics-empire.com/assets/icon_bld_meat_factory-DeFS9SW1.avif",
        () => {
            if (window.openSchlachthofMenu) {
                window.openSchlachthofMenu();
            }
        },
        "Fleischfabrik"
    );
};
