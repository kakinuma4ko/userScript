// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match    http://bgm.tv/user/kakinuma
// @match    http://bgm.tv/group/topic/346774
// @grant        none
// ==/UserScript==

(function() {

    var name = '29TamperTest';
    var namedoc = document.createElement('li');
    namedoc.innerHTML = name;
    $('ul.timeline').append(namedoc);

    var opurl = document.querySelector(".postTopic").querySelector("a.avatar").href;

    var a = document.querySelectorAll("a.l");
    console.log(a[0]);
})();
