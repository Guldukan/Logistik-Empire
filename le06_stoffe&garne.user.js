//==UserScript==
// @name         le06_stoffe&garne
// @namespace    
// @version      2.2.0
// @description  Definiert das Stoffe & Garne Menü und dessen Buttons.
// @match        https://game.logistics-empire.com/*
// @grant        none
//==/UserScript==

// =================================================================================
// Stoffe & Garne Menü
// Diese Funktion wird vom "Stoffe & Garne"-Button im Header aufgerufen.
// =================================================================================
window.openStoffeMenu = function () {
    // Alte Buttons und Loops aufräumen
    window.clearSearchDivButtons();

    // 1. Baumwollplantage (logemp31)
    window.insertButtonInSearchDiv(
        "btnBaumwolle",
        "https://game.logistics-empire.com/assets/res_cotton-D32gBv5A.avif", // Icon für Baumwolle
        () => {
            if (window.openBaumwolleMenu) {
                window.openBaumwolleMenu();
            }
        },
        "Baumwollplantage"
    );

    // 2. Spinnerei (logemp32)
    window.insertButtonInSearchDiv(
        "btnSpinnerei",
        "https://game.logistics-empire.com/assets/res_yarn-D-32g-lW.avif", // Icon für Garn/Spinnerei
        () => {
            if (window.openSpinnereiMenu) {
                window.openSpinnereiMenu();
            }
        },
        "Spinnerei"
    );

    // 3. Weberei (logemp33)
    window.insertButtonInSearchDiv(
        "btnWeberei",
        "https://game.logistics-empire.com/assets/icon_bld_warehouse_dry_textile-CO0nTVe8.avif",
        () => {
            if (window.openWebereiMenu) {
                window.openWebereiMenu();
            }
        },
        "Weberei"
    );
};