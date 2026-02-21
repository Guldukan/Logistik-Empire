//==UserScript==
// @name         le08_fertigprodukte
// @namespace    
// @version      2.2.4
// @description  Fertigprodukte Menü
// @match        https://game.logistics-empire.com/*
// @grant        none
//==/UserScript==

window.openFertigprodukteMenu = function () {
    // Alte Buttons und Loops aufräumen
    window.clearSearchDivButtons();

    // Pizza
    window.insertButtonInSearchDiv(
        "btnPizza",
        "https://game.logistics-empire.com/assets/icon_bld_bakery-jjxzNfJk.avif",
        () => {
            if (window.openPizzaMenu) {
                window.openPizzaMenu();
            } else {
                console.log("Fehler: openPizzaMenu (logemp23) nicht geladen!");
            }
        },
        "Pizza"
    );

    // Snack
    window.insertButtonInSearchDiv(
        "btnSnack",
        "https://game.logistics-empire.com/assets/icon_bld_bakery-jjxzNfJk.avif", // Ggf. Icon anpassen
        () => {
            if (window.opensnackMenu) {
                window.opensnackMenu();
            }
        },
        "Snack"
    );
    window.insertButtonInSearchDiv(
        "btnBaeckerei",
        "https://game.logistics-empire.com/assets/icon_bld_bakery-jjxzNfJk.avif",
        () => {
            if (window.openBaeckereiMenu) {
                window.openBaeckereiMenu();
            }
        },
        "Baeckerei"
    );
};