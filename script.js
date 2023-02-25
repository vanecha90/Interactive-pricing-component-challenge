"use strict";
//add variants with query selectors of all items that changes when slider move
let view = document.getElementById("pageView");
let cost = document.getElementById("cost");
let cost2 = document.getElementById("cost2");
let slider = document.getElementById("price-slider");
let toggle = document.getElementById("billing");
let range = document.getElementsByClassName("range");
//make array with pageviews values
let pageViews = ["10K", "50K", "100K", "500K", "1M"];
//make array with montly price
let perMonth = [8, 12, 16, 24, 36];

//make slider move and change number
slider.addEventListener("input", function () {
  cost.innerHTML = perMonth[4];
});
