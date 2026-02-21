//==UserScript==
// @name         le03_header
// @namespace    
// @version      2.2.1
// @description  Konfiguration der Header-Buttons
// @match        https://game.logistics-empire.com/*
// @grant        none
//==/UserScript==
// -------------------------------------------------------------
// Standard Header-Buttons (Tomaten, Getreide, Fleisch)
// -------------------------------------------------------------
window.initDefaultHeaderButtons = function() {
    const headerButtons = [
        {
            id: "btnResetFilter",
            icon: "https://game.logistics-empire.com/assets/building_overview-DiaGYDuG.avif",
            tooltip: "Filter zurücksetzen (Alle anzeigen)",
            onClick: () => {
                // Interne Suche zurücksetzen (Klick auf das X)
                const closeBtn = document.querySelector('button[data-tutorial-id="filter_by_search"]');
                if (closeBtn) {
                    closeBtn.click();
                }
                console.log("Suche zurückgesetzt.");
            }
        },
        {
            id: "btnAckerbauHeader",
            icon: "https://game.logistics-empire.com/assets/icon_bld_grain_farm-rcE6Chcw.avif",
            tooltip: "Ackerbau & Pflanzen",
            onClick: () => {
                if (window.openLebensmittelMenu) {
                    window.openLebensmittelMenu();
                }
            }
        },
        {
            id: "btnFleischHeader",
            icon: "https://game.logistics-empire.com/assets/icon_bld_meat_factory-DeFS9SW1.avif",
            tooltip: "Fleisch & Vieh",
            onClick: () => {
                if (window.openFleischMenu) {
                    window.openFleischMenu();
                } else {
                    console.log("Fleisch-Menü ist noch nicht verbunden.");
                }
            }
        },
        {
            id: "btnStoffeHeader",
            icon: "https://game.logistics-empire.com/assets/shop_ctg_textiles-BCF4KR7y.avif",
            tooltip: "Stoffe und Garne",
            onClick: () => {
                if (window.openStoffeMenu) {
                    window.openStoffeMenu();
                }
            }
        },
        {
            id: "btnKleidungHeader",
            icon: "https://game.logistics-empire.com/assets/res_indigo_clothes-JQr_V6yn.avif",
            tooltip: "Kleidung",
            onClick: () => {
                if (window.openKleidungMenu) {
                    window.openKleidungMenu();
                }
            }
        },
        {
            id: "btnfertigproduckteHeader",
            icon: "https://game.logistics-empire.com/assets/vehicle_storage_class_break_bulk_small-DHuwzeb-.avif",
            tooltip: "Fertigprodukte",
            onClick: () => {
                if (window.openFertigprodukteMenu) {
                    window.openFertigprodukteMenu();
                }
            }
        },
    ];
    window.initHeaderButtons(headerButtons);
};
