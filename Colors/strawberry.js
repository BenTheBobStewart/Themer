// ==UserScript==
// @name         Strawberry Theme
// @version      1.0.0
// @description  Strawberry (Warm Red) theme for Blacket!
// @icon         https://blacket.org/content/logo.png

// @author       pablmao
// @namespace    http://pablmao.com

// @match        https://*.blacket.org/*

// @require      https://blacket.org/lib/js/jquery.js
// ==/UserScript==

(async () => {
    setTimeout(() => {
        console.log(
            "%c [strawberrytheme.js] Theme Successfully Loaded.",
            "color: #e05a5e; padding: 10px; border-radius: 5px; font-size: 20px; font-weight: bold; text-shadow: 0px 0px 10px #e05a5e;"
        );
    }, 1000);

    let $ = jQuery;

    let css = `
        .styles__blooketText___1pMBG-camelCase {
            font-size: 40px;
            font-family: Titan One, sans-serif;
            text-decoration: none;
            color: white;
            filter: drop-shadow(0px 0px 5px white);
            margin-bottom: 20px;
            text-align: center;
        }

        .styles__background___2J-JA-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__bazaarItem___Meg69-camelCase {
            background-color: #de7e82 !important;
            transition: 0.2s ease-in-out;
        }

        .styles__bazaarItem___Meg69-camelCase:hover {
            background-color: #222222 !important;
            transform: scale(1.05);
        }

        .styles__bazaarItems___KmNa2-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__blookGridContainer___AK47P-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__button___2hNZo-camelCase,
        .styles__buttonFilled___23Dcn-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__buttonInside___39vdp-camelCase,
        .styles__front___vcvuy-camelCase {
            background-color: #de7e82 !important;
            color: #e05a5e !important;
        }

        .styles__cardContainer___NGmjp-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__chatCurrentRoom___MCaV4-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__chatEmojiButton___8RFa2-camelCase {
            background-color: #e05a5e !important;
            transition: 0.2s ease-in-out;
        }

        .styles__chatEmojiButton___8RFa2-camelCase:hover {
            background-color: #de7e82 !important;
        }

        .styles__chatInputContainer___gkR4A-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__chatRoomsListContainer___Gk4Av-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__chatRoomsTitle___fR4Av-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__chatRooms___o5ASb-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__chatUploadButton___g39Ac-camelCase {
            background-color: #e05a5e !important;
            transition: 0.2s ease-in-out;
        }

        .styles__chatUploadButton___g39Ac-camelCase:hover {
            background-color: #de7e82 !important;
        }

        .styles__container___1BPm9-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__container___2VzTy-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__container___3St5B-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__containerHeader___3xghM-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__containerHeaderInside___2omQm-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__containerHeaderRight___3xghM-camelCase,
        .styles__containerHeaderRightFriends___3xghM-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__editHeaderContainer___2G1ji-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__edge___3eWfq-camelCase {
            background-color: #de7e82 !important;
        }

        .styles__formsForm___MvA35-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__header___22Ne2-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__header___2O21B-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__headerBadgeBg___12ogR-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__headerSide___1r1-b-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__horizontalBlookGridLine___4SAvz-camelCase {
            background-color: #de7e82 !important;
        }

        .styles__infoContainer___2uI-S-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__input___2XTSp-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__left___9beun-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__loginButton___1e3jI-camelCase {
            background-color: #de7e82 !important;
            color: #e05a5e !important;
        }

        .styles__myTokenAmount___ANKHA-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__otherTokenAmount___SEGGS-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__postsContainer___39_IQ-camelCase {
            background-color: #de7e82 !important;
        }

        .styles__profileContainer___CSuIE-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__profileDropdownMenu___2jUAA-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__profileDropdownOption___ljZXD-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__profileDropdownOption___ljZXD-camelCase:hover {
            background-color: #de7e82 !important;
        }

        .styles__rightButtonInside___14imT-camelCase {
            color: #e05a5e !important;
        }

        .styles__sidebar___1XqWi-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__signUpButton___3_ch3-camelCase {
            background-color: #e05a5e !important;
            color: #de7e82 !important;
        }

        .styles__statContainer___QKuOF-camelCase {
            background-color: #de7e82 !important;
        }

        .styles__statsContainer___QnrRB-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__toastContainer___o4pCa-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__tokenContainer___3yBv--camelCase {
            background-color: #e05a5e !important;
        }

        .styles__tradingContainer___B1ABS-camelCase {
            background-color: #e05a5e !important;
        }

        .styles__verticalBlookGridLine___rQWaZ-camelCase {
            background-color: #de7e82 !important;
        }

        #searchInput {
            background-color: #de7e82 !important;
        }

        textarea {
            background-color: #e05a5e !important;
        }

        .toastMessage {
            background-color: #e05a5e !important;
        }

        input {
            background-color: #e05a5e !important;
        }

        hr {
            background-color: #de7e82 !important;
        }
    `;

    $('head').append(`<style>${css}</style>`);
})();
