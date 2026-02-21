//==UserScript==
// @name         le00_funktionen
// @namespace    
// @version      2.3.0
// @description  Funktionen Global!
// @match        https://game.logistics-empire.com/*
// @grant        none
//==/UserScript==

// -------------------------------------------------------------
// Globaler MutationObserver – wartet auf DOM-Elemente
// -------------------------------------------------------------
window.waitForElement = function(selector, callback) {

    function check() {
        const el = document.querySelector(selector);
        console.log("Observer check:", selector);
        if (el) {
            callback(el);
            observer.disconnect();
        }
    }

    const observer = new MutationObserver(check);

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    check();
};

// -------------------------------------------------------------
// Globale Hilfsfunktion: createNavButton
// -------------------------------------------------------------
window.createNavButton = function(id, imgSrc, onClick, tooltipText) {
    const wrapper = document.createElement("div");
    wrapper.id = id;
    wrapper.className = "relative";

    const img = document.createElement("img");
    img.src = imgSrc;
    img.draggable = false;
    img.classList.add("pb-nav-icon");

    wrapper.appendChild(img);

    if (onClick) wrapper.addEventListener("click", onClick);

    if (tooltipText) {
        wrapper.setAttribute("data-tooltip", tooltipText);
    }

    return wrapper;
};

// -------------------------------------------------------------
// Globale Funktion: insertGebaeudeButton
// -------------------------------------------------------------
window.insertGebaeudeButton = function() {
    function tryInsert() {
        const leftNav = document.querySelector('[data-tutorial-id="navigation-left-section"]');
        const tradeBtn = document.querySelector('[data-tutorial-id="navigation-main-trade-center"]');

        if (!leftNav || !tradeBtn) {
            setTimeout(tryInsert, 200);
            return;
        }

        // Wenn der Button schon da ist, nichts tun
        if (document.querySelector("#btnWork")) return;

        const btnWork = window.createNavButton(
            "btnWork",
            "https://game.logistics-empire.com/assets/building_overview-DiaGYDuG.avif",
            () => {
                const buildingIcon = [...document.querySelectorAll("img")]
                    .find(img => img.src.includes("navbar_main_business"));

                if (buildingIcon) {
                    buildingIcon.click();
                }
            },
            "LE Übersicht"
        );
        leftNav.insertBefore(btnWork, tradeBtn.parentElement);
    }
    tryInsert();
};

// -------------------------------------------------------------
// Globale Filter-Funktion für Gebäude
// -------------------------------------------------------------
window.applyBuildingFilter = function(filterName) {
    // Interne Suchfunktion: Eingabefeld anhand des Placeholders "Suche"
    const searchInput = document.querySelector('input[placeholder="Suche"]');
    
    if (searchInput) {
        searchInput.focus();

        // Wert setzen, dass Vue/React es bemerkt
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
        if (nativeInputValueSetter) {
            nativeInputValueSetter.call(searchInput, filterName);
        } else {
            searchInput.value = filterName;
        }
        
        // Trigger für das Framework (Vue/React), um die Suche zu starten
        searchInput.dispatchEvent(new Event('input', { bubbles: true }));
        searchInput.dispatchEvent(new Event('change', { bubbles: true }));
        
        console.log(`Interne Suche aktiviert: ${filterName}`);
    } else {
        console.warn("Suchfeld nicht gefunden. Bist du in der Gebäudeübersicht?");
    }
};

// -------------------------------------------------------------
// Entfernt alle Buttons aus dem Such-Div (für Untermenüs)
// -------------------------------------------------------------
window.clearSearchDivButtons = function() {
    // 1. Alle laufenden Loops/Observer stoppen, damit sie die Buttons nicht sofort wieder einfügen
    if (window.activeSearchButtonLoops) {
        window.activeSearchButtonLoops.forEach(stop => stop());
        window.activeSearchButtonLoops = [];
    }

    // Anker auf das Suchfeld ändern, da der Close-Button verschwinden kann
    const searchInput = document.querySelector('input[placeholder="Suche"]');
    if (!searchInput) return;

    const searchContainer = searchInput.parentElement.parentElement;
    if (!searchContainer) return;

    // Wir entfernen nur unsere eigenen Buttons (die wir eingefügt haben)
    // Erkennbar daran, dass sie NICHT das data-tutorial-id Attribut haben oder eine bestimmte Klasse
    // Da wir IDs vergeben haben, können wir danach filtern oder einfach alle Buttons nach dem Search-Input prüfen.
    
    const buttons = searchContainer.querySelectorAll("button");
    buttons.forEach(btn => {
        // Lösche Buttons, die eine ID haben (unsere) und nicht der Close/Search Button sind
        if (btn.id && btn.id !== "btnSearch" && !btn.hasAttribute("data-tutorial-id")) {
            btn.remove();
        }
    });
};

// -------------------------------------------------------------
// Header-Button Framework
// -------------------------------------------------------------
window.createHeaderButton = function(id, icon, onClick, tooltipText) {
    const topRight = document.querySelector('#headerBar .flex.flex-nowrap.items-center > div.gap-md.flex');
    // Verbesserter Selektor: Sucht nach dem Container im Header, der die Icons enthält.
    // Wir suchen im #headerBar nach einem div, das "gap-md" und "flex" hat.
    let topRight = document.querySelector('#headerBar .flex.flex-nowrap.items-center > div.gap-md.flex');
    
    // Fallback: Falls die Klassen sich geändert haben, nehmen wir das letzte Div im Header-Wrapper
    if (!topRight) topRight = document.querySelector('#headerBar > div > div:last-child');

    if (!topRight) {
        setTimeout(() => window.createHeaderButton(id, icon, onClick, tooltipText), 200);
        return;
    }

    if (document.querySelector("#" + id)) return;

    const btn = document.createElement("button");
    btn.id = id;
    btn.className = "bb-base-button variant--neutral size--md shape--square content--icon theme--light";
    
    // ZWINGT die Buttons nebeneinander, falls der Container spinnt (Fix für Treppen-Effekt)
    btn.style.display = "inline-flex"; 

    // ⭐ Tooltip: Nutze den übergebenen Text oder generiere Fallback aus ID
    btn.setAttribute("data-tooltip", tooltipText || id.replace("btn", "").replace("Header", ""));

    const img = document.createElement("img");
    img.src = icon;
    img.draggable = false;
    img.classList.add("pb-header-icon");

    btn.appendChild(img);

    if (onClick) btn.addEventListener("click", onClick);

    topRight.appendChild(btn);

    if (window.sortHeaderButtons) {
        window.sortHeaderButtons();
    }
};


window.sortHeaderButtons = function() {
    const topRight = document.querySelector('#headerBar .flex.flex-nowrap.items-center > div.gap-md.flex');
    let topRight = document.querySelector('#headerBar .flex.flex-nowrap.items-center > div.gap-md.flex');
    if (!topRight) topRight = document.querySelector('#headerBar > div > div:last-child');
    if (!topRight) return;

    const order = window.headerButtonOrder || [];

    order.forEach(id => {
        const el = document.querySelector("#" + id);
        if (el) topRight.appendChild(el);
    });
};

window.initHeaderButtons = function(buttons) {
    window.headerButtonOrder = buttons.map(b => b.id);
    buttons.forEach(btn => {
        window.createHeaderButton(btn.id, btn.icon, btn.onClick, btn.tooltip);
    });
};

// -------------------------------------------------------------
// Fügt Button in das Such-Div ein (z.B. für Produktions-Menüs)
// -------------------------------------------------------------
window.activeSearchButtonLoops = [];

window.insertButtonInSearchDiv = function(id, icon, onClick, tooltipText) {
    // Helper: Button erstellen
    const createBtn = () => {
        const btn = document.createElement("button");
        btn.id = id;
        btn.type = "button";
        btn.className = "bb-base-button variant--neutral size--md shape--square content--icon theme--light ml-auto";

        const img = document.createElement("img");
        img.src = icon;
        img.draggable = false;

        if (tooltipText) {
            btn.setAttribute("data-tooltip", tooltipText);
        }

        btn.appendChild(img);

        if (onClick) btn.addEventListener("click", onClick);
        return btn;
    };

    // State für diese Instanz
    let intervalId = null;

    // Stop-Funktion registrieren (für clearSearchDivButtons)
    const stop = () => {
        if (intervalId) clearInterval(intervalId);
    };
    
    if (!window.activeSearchButtonLoops) window.activeSearchButtonLoops = [];
    window.activeSearchButtonLoops.push(stop);

    function checkAndInsert() {
        // Wir suchen das Suchfeld, da es stabil ist (im Gegensatz zum Close-Button)
        const searchInput = document.querySelector('input[placeholder="Suche"]');
        if (!searchInput) return;

        // Container finden (Input -> Wrapper -> Container)
        const searchContainer = searchInput.parentElement.parentElement;
        if (!searchContainer) return;

        // Button einfügen, falls er fehlt
        if (!searchContainer.querySelector("#" + id)) {
            searchContainer.appendChild(createBtn());
        }
    }

    // Polling starten (alle 500ms prüfen)
    intervalId = setInterval(checkAndInsert, 500);
    
    // Sofort einmal ausführen
    checkAndInsert();
};
