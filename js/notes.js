
/*
enter guess 1 
  1. Initialize game variables: number = random number between 1 and 100 
  guess_history = [] 
  max_attempts = 3 attempts = 0 
  game_over = False 
  

 
  
  2.  Function guess_number(guess): 
    if game_over: return "Game is over. Please restart to play again."
    add guess to guess_history attempts += 1 
    if guess > number: message = "Too high" elif guess < number: message = "Too low" else: message = "You win" game_over = True
    if attempts >= max_attempts and guess != number: message = "You lost. 
    The correct number was " + str(number) game_over = True return message

    function(guessTheNumber(guess))  

  3. Function current_guess(): if not guess_history: 
  return "No guesses made yet" return guess_history[-1] 

  4. Function computer_guess(): return random number between 1 and 100 
  
  5. Function guess_history(): return guess_history 
  
  6. Function submit_guess(guess): if game_over: return "Game is over.
  Please restart to play again." return guess_number(guess) 
  
  7. Function reset_game(): number = random number between 1 and 100 
  guess_history = [] attempts = 0 game_over = False return "Game has been reset. You can start guessing again." 
  
  8. Enable submit_guess button at the beginning of the game and disable when game is over 
  
  9. Enable restart button when game is over, otherwise disable at the start 
  
  10. When reset button is clicked, call reset_game() and reset values.


)  */