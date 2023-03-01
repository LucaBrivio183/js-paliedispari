'use strict'

//define  function
function palindromeCheck(word) {

    //confront the first letter with last letter for every letter going to the center
    for (let i = 0; i < word.length-1; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
        return 'non è palindroma';
        }
    }
    return 'è palindroma';
  }

let userWord = prompt('inserisci una parola');
let check  = palindromeCheck(userWord);
console.log(`${check}`);

const print = document.querySelector('h1');
print.innerHTML = `${userWord} ${check}`;