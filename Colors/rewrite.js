// ==UserScript==
// @name         Blacket Rewrite Theme
// @version      1.0.0
// @description  Rewrite (Slightly Darker) theme for Blacket!
// @icon         https://blacket.org/content/logo.png

// @author       pablmao/monkxy
// @namespace    http://pablmao.com & http://monkxy.com

// @match        https://*.blacket.org/*

// @require      https://blacket.org/lib/js/jquery.js
// ==/UserScript==

(async () => {
    setTimeout(() => {
        console.log(
            "%c[monkxy's black scripts] theme loaded successfully!",
            "color: #fff; padding: 10px; border-radius: 5px; font-size: 20px; font-weight: bold; text-shadow: 0px 0px 10px #fff;"
        );
    }, 1000);

    let $ = jQuery;

    let css = `
        .styles__blooketText___1pMBG-camelCase {
            font-size:2.083vw;
            font-family: Titan One, sans-serif;
            text-decoration: none;
            color: white;
            filter: drop-shadow(0.000vw 0.000vw 0.260vw black);
            text-align: center;
        }

        .styles__background___2J-JA-camelCase {
            background-color: #343434 !important;
        }

        .styles__infoContainer___2uI-S-camelCase {
            background-color: #2f2f2f !important;
        }

        .styles__sidebar___1XqWi-camelCase {
            background-color: #212121 !important;
        }
    `;

    $('head').append(`<style>${css}</style>`);
})();
