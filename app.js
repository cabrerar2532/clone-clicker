'use strict'
const audio = new Audio('/assets/audio/click.mp3');
let globalScore = 0;
document.addEventListener('contextmenu', event => event.preventDefault());
function domScoreLoader(score) {
    document.querySelector('.globalScore').textContent = score;
}

let domMuffinButton = document.querySelector('.theButton').addEventListener('click', function () {
globalScore ++;
domScoreLoader(globalScore);
audio.play();
})
