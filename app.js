"use strict";
const audio = new Audio("/assets/audio/click.mp3");
let globalScore = 0;
document.addEventListener("contextmenu", (event) => event.preventDefault());
//functions
function domScoreLoader(score) {
  document.querySelector(".globalScore").textContent = score;
}
let upgradeScore = 0;
//increment by one
function incrementValue() {
  while (upgradeScore) {
    globalScore++;
    domScoreLoader(globalScore);
  }
}
// Click to increase value
let domMuffinButton = document
  .querySelector(".theButton")
  .addEventListener("click", function () {
    globalScore++;
    domScoreLoader(globalScore);
    audio.play();
  });
//button to add an upgrade
document.querySelector(".perks1").addEventListener("click", function () {
  upgradeScore = 1;
  incrementValue();
});
document.querySelector(".perks2").addEventListener("click", function () {
  upgradeScore = 0;
  incrementValue();
});
