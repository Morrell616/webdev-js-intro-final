"use strict";

const enterGuessInput = document.getElementById("guess-input");
const currentGuessListed = document.getElementById("current-guess");
const guessMessageUpdate = document.getElementById("guess-message");
const computersGuess = document.getElementById("computer-guess");
const guessHistory = document.getElementById("guess-history");

const submissionBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn")


const number = Math.floor(Math.random() * 100) +1;
let userGuess = null;
let theGuessHistory =[];// to show past guesses use this variable
let guessMessage = ""//put guess message here
let attempts = 0;
const maxAttempts = 3;
let gameOver = false;


function firstGuess() {
    userGuess = parseInt(enterGuessInput.value); //let user enter their guess\
    console.log(userGuess);// parseInt makes sure it is read a number

    if(userGuess > number) {
            guessMessage = "your guess is too high"; 
        } else if (userGuess < number) {
            guessMessage = "your guess is too low";
        } else if (userGuess === number) { 
            guessMessage = "you win!";
            gameOver= true;
        }
        console.log(guessMessage);
        
        
    }

render ()

  

function enterGuessTwo () {

}

function enterGuessThree () {



}

function render () {
    currentGuessListed.textContent = userGuess;// text content links back to above and html
    guessMessageUpdate.textContent = guessMessage;
    computersGuess.textContent = number;
    guessHistory.textContent = theGuessHistory.join(", ");  

  }
  // type in element from top of javascript and set it equal to functon name.
  submissionBtn.addEventListener("click", function () {
      // Call the render function
      firstGuess();
      render();
  });
