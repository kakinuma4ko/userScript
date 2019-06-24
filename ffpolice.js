// ==UserScript==
// @name         ffpolice
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match    https://cn.fflogs.com/reports/*
// @grant        none
// ==/UserScript==

// div.top-level-view-tabs.big-tab-table
(function() {
    var thisUrl = window.location.href;
    var patt=new RegExp("reports/[a-zA-Z0-9]+");
    var rid = patt.exec(thisUrl);
    var id = rid[0].substring(8);
    var xivana = "https://xivanalysis.com/find/";
    $('div#top-level-view-tabs.big-tab-table').append("<a href=\""+xivana+id+"\" class=\"big-tab view-type-tab selected\" target=\"_blank\"><span class=\"zmdi zmdi-eye\"></span> <span class=\"big-tab-text\"><br>出警!</span></a>");
})();
