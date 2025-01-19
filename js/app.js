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


/* started thinking through the pseudo code needed for each guess and was going to write out
//function for each guess and quickly realized that alot of the code was repetitive
and there had to be a better way to consolidate the code. SO began  while loop that stated while these things are true 
continue through this loop of inputing a guess and giving a response. 

*/

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
       theGuessHistory.push(userGuess); // pushes guessed number to history.
        
    
    }
function incrementAttempts() {
    attempts++;
    if (attempts >= maxAttempts && !gameOver) {
        guessMessage = "Sorry you lost. Want to try again hit Restart";
        gameOver = true;
    }
 if (gameOver) {
    submissionBtn.disabled = true;
    restartBtn.disabled = false;
    
}
}

function restartGame()        {
    const number = Math.floor(Math.random() * 100) +1;
    let userGuess = null;
    let theGuessHistory =[];// to show past guesses use this variable
    let guessMessage = ""//put guess message here
    let attempts = 0;
    let gameOver = false;   
    
    restartBtn.disabled = true;
    submissionBtn.disabled = false;
               }
    render();

 


//store guess to guess history
//make restat button enabled with two turns left and then start guessTwo
  


function render () {
    currentGuessListed.textContent = userGuess;// text content links back to above and html
    guessMessageUpdate.textContent = guessMessage;
    computersGuess.textContent = number;
    guessHistory.textContent = theGuessHistory.join(", ");  

  }
      // type in element from top of javascript and set it equal to functon name.
      // Call the render function for each thing i want to happen upon the submission button being pressed.
 submissionBtn.addEventListener("click", function () { 
        if (!gameOver) { 
            firstGuess(); 
            incrementAttempts(); 
            render(); } });
     restartBtn.addEventListener("click" , restartGame);
  