// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match    http://www.0v0.com/cn/*
// @grant        none
// ==/UserScript==

(function() {
    var a = document.querySelectorAll("td.text");
    var id = a[0].innerText;

    var url2 = "http://www.0v0.com/common/search/searchword="
    var id2 = id.replace(/-/,"%2B");

    var namedoc = document.createElement('a');
    namedoc.innerHTML = "<div id=\"video_id\" class=\"item\"><table><tbody><tr><td class=\"header\">Video:</td><td class=\"text\"><a href=\""+url2+""+id2+"\" target=\"_blank\">"+"0v0"+"</a></td></tr></tbody></table></div>"

    $('div#video_info').append(namedoc);

})();
