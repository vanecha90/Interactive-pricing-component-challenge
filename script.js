"use strict";
//add variants with query selectors of all items that changes when slider move
let view = document.getElementById("pageView");
let cost = document.getElementById("cost");
let cost2 = document.getElementById("cost2");//this is for mobile
let sliderR = document.getElementById("price-slider");
let toggle = document.getElementById("billing");
//make array with pageviews values
let pageViews = ["10K", "50K", "100K", "500K", "1M"];
//make array with montly price
let perMonth = [8, 12, 16, 24, 36];
//toggle is off
let yearlyOn = false;

//make slider move and change number and views
sliderR.addEventListener("input", function () {
  updateVal();
  cost.innerHTML = perMonth[sliderR.value];
  view.innerHTML = pageViews[sliderR.value];
  let colorbar = sliderR.value * 25;
  sliderR.style.background = `linear-gradient(
    to right,
    hsl(174, 77%, 80%) 0%,
    hsl(174, 77%, 80%) ${colorbar}%,
    hsl(224, 65%, 95%) 0%,
    hsl(224, 65%, 95%) 100%`
});

//toogle true/false... this will tell if the toggle is on
toggle.addEventListener('change', function(){
  if(yearlyOn === false){
    yearlyOn = true;
  }else{
    yearlyOn = false;
  }
  updateVal();
});

//if tooggle is on it will execute this..chaning the value
function updateVal(){
  if(yearlyOn){
    cost.innerHTML = perMonth[sliderR.value] * .75;
  }else{
    cost.innHTML =perMonth[sliderR.value];
  }
}
