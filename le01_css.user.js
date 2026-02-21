// ==UserScript==
// @name         le01_css
// @namespace    
// @version      2.2.1
// @description  Zentrales CSS für alle Log-Empi Module (Ghost-Edition)
// @match        https://game.logistics-empire.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    /* ============================================================= */
    /* ZENTRALES STYLESHEET                                          */
    /* ============================================================= */
    const css = /* css */ `
        /* Basis-Icons */
        .pb-nav-icon {
            width: 64px;
            height: 64px;
            object-fit: contain;
            cursor: pointer;
        }

        /* Hover-Effekte für Header-Icons */
        .pb-header-icon {
            transition: transform 0.15s ease, filter 0.15s ease;
        }

        button:hover .pb-header-icon {
            filter: brightness(1.25);
            transform: scale(1.12);
        }

        /* ------------------------------------------------------- */
        /* JS-Tooltip Container (Ghost-Effekt)                     */
        /* ------------------------------------------------------- */
        #pb-tooltip-container {
            position: fixed;
            background: rgba(0, 0, 0, 0.9);
            color: #fff;
            padding: 6px 10px;
            border-radius: 6px;
            font-size: 14px;
            white-space: nowrap;
            pointer-events: none;
            z-index: 100000;
            box-shadow: 0 2px 8px rgba(0,0,0,0.5);
            
            /* Ghost-Effekt Grundzustand */
            opacity: 0;
            transform: translateX(-50%) translateY(5px);
            transition: opacity 0.2s ease, transform 0.2s ease;
            
            /* Startposition außerhalb des Sichtfelds */
            top: -100px; 
            left: -100px;
        }

        /* Sichtbarer Zustand */
        #pb-tooltip-container.visible {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }

        /* ------------------------------------------------------- */
        /* Pfeil-Design                                            */
        /* ------------------------------------------------------- */
        #pb-tooltip-container::after {
            content: "";
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            border-width: 6px;
            border-style: solid;
        }

        /* Pfeil oben (Tooltip sitzt unten) */
        #pb-tooltip-container.bottom::after {
            bottom: 100%;
            border-color: transparent transparent rgba(0, 0, 0, 0.9) transparent;
        }

        /* Pfeil unten (Tooltip sitzt oben) */
        #pb-tooltip-container.top::after {
            top: 100%;
            border-color: rgba(0, 0, 0, 0.9) transparent transparent transparent;
        }
    `;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    /* ============================================================= */
    /* TOOLTIP LOGIK                                                 */
    /* ============================================================= */
    const tooltipEl = document.createElement("div");
    tooltipEl.id = "pb-tooltip-container";
    document.body.appendChild(tooltipEl);

    document.addEventListener("mouseenter", function(e) {
        const btn = e.target.closest("[data-tooltip]");
        if (!btn) return;

        // Native Tooltips unterdrücken
        const originalTitle = btn.getAttribute('title');
        if (originalTitle) {
            btn.setAttribute('data-original-title', originalTitle);
            btn.removeAttribute('title');
        }

        tooltipEl.textContent = btn.dataset.tooltip;
        
        const rect = btn.getBoundingClientRect();
        const ttHeight = tooltipEl.offsetHeight || 30;
        
        let top = rect.top - ttHeight - 10;
        let left = rect.left + (rect.width / 2);
        let placement = "top";

        if (top < 10) {
            top = rect.bottom + 10;
            placement = "bottom";
        }

        tooltipEl.style.top = top + "px";
        tooltipEl.style.left = left + "px";
        tooltipEl.className = `visible ${placement}`;
    }, true);

    document.addEventListener("mouseleave", function(e) {
        const btn = e.target.closest("[data-tooltip]");
        if (btn) {
            tooltipEl.classList.remove("visible");
            const originalTitle = btn.getAttribute('data-original-title');
            if (originalTitle) {
                btn.setAttribute('title', originalTitle);
                btn.removeAttribute('data-original-title');
            }
        }
    }, true);
    
    window.addEventListener("scroll", () => tooltipEl.classList.remove("visible"), true);
})();