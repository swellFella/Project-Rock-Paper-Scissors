playOptions = ['Rock','Paper','Scissors'];
let win;
let lose;
/**
* Function called computerPlay that will randomly return either
* 'Rock', 'Paper', or 'Scissors'. This function will be used to
* make the computer opponent select a play.
*/
function computerPlay(){
    randomIndex = Math.floor(Math.random()*playOptions.length);
    return playOptions[randomIndex].toLowerCase();
}
/**
 * Funciton called playerPlay that will promt the player to enter a play.
 */
function playerPlay(){
    return prompt("Enter your play: ").toLowerCase();
}
/**
 * Function that plays a single round of Rock Paper Scissors.
 * The function should take two parmeters - playerSelection and
 * computerSelection - and then return a string that declares
 * the winner of the round like so: "You Lose! Paper beats Rock"
 */
function playRound(playerSelection, computerSelection){
     playerSelection = playerPlay();
     computerSelection = computerPlay();

     winMessage = `You win! ${playerSelection} beats ${computerSelection}`;
     loseMessage = `You lose! ${computerSelection} beats ${playerSelection}`;



     if(playerSelection == computerSelection){
         console.log(`TIE! You both picked ${playerSelection}.`);
     }
     /*Player selects ROCK*/
     else if(playerSelection == 'rock' && computerSelection == 'paper'){
        console.log(loseMessage);
        lose = true;
     }
     else if(playerSelection == 'rock' && computerSelection == 'scissors'){
         console.log(winMessage);
         win = true;
     }
     /*Player selects PAPER */
     else if(playerSelection == 'paper' && computerSelection == 'rock'){
         console.log(winMessage);
         win = true;
     }
     else if(playerSelection == 'paper' && computerSelection == 'scissors'){
         console.log(loseMessage);
         lose = true;
     }
     /*Player selects SCISSORS*/
     else if(playerSelection == 'scissors' && computerSelection == 'rock'){
         console.log(loseMessage);
         lose = true;
     }
     else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        console.log(winMessage);
        win = true;
     }
}

/**
 * Function called game() that calls the playRound() funciton inside of it
 * to play a 5 round game. The function will keep track of score
 * and report a winner or loser at the end.
 */
function game(){
    let playerScore = 0;
    let computerScore = 0;
    let winner = null;
    for(let i = 0; i < 5; i++){
        playRound()
        if(Boolean(win)){
            playerScore++;
        }
        else if(Boolean(lose)){
            computerScore++;
        }
        if(playerScore > computerScore){
            winner = 'The player';
        }
        else if(playerScore < computerScore){
            winner = 'The computer';
        }
        else{
            winner = 'Nobody';
        }
    }
    console.log(`You won ${playerScore} times.
        The computer won ${computerScore} times.
        ${winner} wins!`);
}