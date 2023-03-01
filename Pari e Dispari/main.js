'use strict'
//define  sum function
function sum (var1,var2) {
    return var1 + var2
}

//let  player  choose odd or even
const playerChoice = prompt('scegli pari o dispari:');

//let player choose number  beetween  1 and 5
const playerNumber = parseInt(prompt('scegli un  numero  da  1 a 5:'));
const computerNumber = Math.floor(Math.random() * 5) + 1;

//checking sum and result
let result = "";
  
if (sum (playerNumber,computerNumber) % 2 === 0 && playerChoice === "pari") {
    result = "hai vinto!";
} else if (sum (playerNumber,computerNumber) % 2 !== 0 && playerChoice === "dispari") {
    result = "hai vinto!";  
} else {
    result = "hai perso!";
}

console.log(`${playerNumber},${computerNumber},${result}`);

