"use strict";console.log(">> Ready :)");const button=document.querySelector(".js__button"),numberElement=document.querySelector(".js__input"),clueElement=document.querySelector(".js__clue"),counterElement=document.querySelector(".js__counter");let counter=0,randomNumber=0;const max=100;function getRandomNumber(e){return Math.ceil(Math.random()*e)}function getNumber(){const e=numberElement.value;return console.log(e),e}function checkNumber(e){e>100?clueElement.innerHTML="El número debe estar entre 1 y 100":e<randomNumber?clueElement.innerHTML="Demasiado bajo":e==randomNumber?clueElement.innerHTML="¡¡¡Has ganado campeona!!!":e>randomNumber&&(clueElement.innerHTML="Demasiado alto")}function handleClickButton(e){e.preventDefault();checkNumber(getNumber()),counter++,counterElement.innerHTML(counter)}randomNumber=getRandomNumber(100),console.log("Mi número aleatorio es "+randomNumber),button.addEventListener("click",handleClickButton);