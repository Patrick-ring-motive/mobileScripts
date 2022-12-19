// ==UserScript==
// @name        Yahoo Finance adblock
// @namespace   Violentmonkey Scripts
// @match       https://*.yahoo.com/*
// @grant       GM.xmlHttpRequest
// @version     1.0
// @author      -
// @description 6/16/2020, 9:50:11 AM

// ==/UserScript==








init();



function init() {
  var mycss = document.createElement('style');
  var s = `

div#finance-reminder-index,
div.monalixa-sticky-footer,
div#mrt-node-Lead-1-Ad,
iframe[allow*="advertising"],
div[id*="Overlay"]
{
   display: none !important;
   visibility: hidden !important;
   opacity: 0 !important;
   max-height: 0px !important;
   height: 0px !important;
   transform: scale(0,0) !important;
   position: absolute !important;
   z-index: -99 !important;
}

`;

  mycss.innerHTML = s
  document.head.appendChild(mycss);

}

setInterval(function() { let b = document.querySelector('button[aria-label="Close"]'); if (b) { b.click(); } }, 1000);
