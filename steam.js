// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://steamcommunity.com/*
// @grant        none
// ==/UserScript==

(function() {
    var a = document.querySelectorAll("div#searchResultsRows");
    var b = document.querySelectorAll("div#BG_top");

    console.log(a[0]);
    console.log(b[0]);
})();
