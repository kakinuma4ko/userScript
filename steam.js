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
    function haha() {
        console.log('haha');
    }


    function func1(n){
        var rows = document.getElementById("searchResultsRows")
        var lists = rows.querySelectorAll('#searchResultsRows>div');

        var funcBtn = document.createElement('a');
        funcBtn.setAttribute('class','btn_green_white_innerfade btn_medium market_noncommodity_buyorder_button');

        function haha() {
        console.log('haha');
    }
        funcBtn.setAttribute('onclick',(function () {
        console.log('haha');
    })());


        funcBtn.innerHTML = 'AAA';

        var myList = document.createElement('div');
        myList.setAttribute('class','market_listing_row');
        myList.innerHTML = 'AAA';


        var resultsTable = document.getElementById('searchResultsTable');

        myList.append(funcBtn);
        resultsTable.prepend(myList);

        console.log(resultsTable);

        for (var i=0;i<10;i++){
            console.log(lists[i]);
        }
    }

    setTimeout(func1,3000)

})();
