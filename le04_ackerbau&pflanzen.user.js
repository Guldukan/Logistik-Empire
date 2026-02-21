//==UserScript==
// @name         le04_ackerbau&pflanzen
// @namespace    
// @version      2.1.8
// @description  Definiert das zentrale Lebensmittel-Menü und dessen Buttons.
// @match        https://game.logistics-empire.com/*
// @grant        none
//==/UserScript==

// =================================================================================
// Ackerbau & Pflanzen Menü
// Diese Funktion wird vom "Ackerbau & Pflanzen"-Button im Header aufgerufen.
// Sie enthält die Buttons für die pflanzliche Lebensmittelproduktion.
// =================================================================================
window.openLebensmittelMenu = function () {
    // Alte Buttons und Loops aufräumen
    window.clearSearchDivButtons();

    // --- Ketchup & Tomaten ---
    window.insertButtonInSearchDiv(
        "btnGewaechshausFactory",
        "https://game.logistics-empire.com/assets/icon_bld_mega_greenhouse-BZg4XyKx.avif",
        () => {
            if (window.openGewaechshausMenu) {
                window.openGewaechshausMenu();
            } else {
                console.log("Gewächshaus-Logik noch nicht geladen.");
            }
        },
        "Gewächshaus"
    );
    window.insertButtonInSearchDiv(
        "btnTomatenFactory",
        "https://game.logistics-empire.com/assets/icon_bld_tomato_factory-B46OL5Vd.avif",
        () => {
            if (window.openTomatenfabrikMenu) {
                window.openTomatenfabrikMenu();
            }
        },
        "Tomatenfabrik"
    );

    // --- Brotproduktion ---
    window.insertButtonInSearchDiv(
        "btnGetreideFarm",
        "https://game.logistics-empire.com/assets/icon_bld_grain_farm-rcE6Chcw.avif",
        () => {
            if (window.openGetreidefarmMenu) {
                window.openGetreidefarmMenu();
            }
        },
        "Getreidefarm"
    );
    window.insertButtonInSearchDiv(
        "btnMuehle",
        "https://game.logistics-empire.com/assets/icon_bld_mill-DaJO0L1l.avif", 
        () => {
            if (window.openMuehleMenu) {
                window.openMuehleMenu();
            }
        },
        "Mühle"
    );
};