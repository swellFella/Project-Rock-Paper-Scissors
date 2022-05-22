let playerScore = 0;
let computerScore = 0;

const messageContainer = document.querySelector('.messageContainer');
const scoreContainer = document.querySelector('.scoreContainer');
const scores = document.querySelector('.scores');
scores.textContent = (`Player score: ${playerScore} | Computer score: ${computerScore}`);



// creates a nodelist of all buttons
const buttons = document.querySelectorAll('button');
// .forEach method to iterate through each button
buttons.forEach((button) => {
    // while iterating through a button, add a 'click' event listener
    // on click, 
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});

/**
 * Function that randomly selects rock, paper, or scissors
 * and returns the that value.
 */
function randomPlay(){
    const choices = ['rock','paper','scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}



/**
 * Function that takes the players button click value and compares it to the computer selection.
 * If the playerSelection and computerSelection are equal, return a tie message.
 * If playerSelection beats computerSeleciton, playerScore increases by 1.
 * If computerSelection beats playerSelection, computerScore increases by 1.
 * At the end of the function, check both playerScore and computerScore.
 * If playerScore or computerScore reaches 5, call winner() function.
 */
function playRound(playerSelection){
    let computerSelection = randomPlay();
    // Player and computer TIE
    if(playerSelection === computerSelection){
        const para = document.createElement('p');
        para.textContent = `TIE! You both selected ${playerSelection}`;
        messageContainer.insertBefore(para, messageContainer.firstChild);
    }
    // Player beats computer
    else if(
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')){
            const message = document.createElement('p');
            message.setAttribute('class','message');
            message.textContent = `WIN! You selected ${playerSelection}, computer selected ${computerSelection}.`;
            messageContainer.insertBefore(message,messageContainer.firstChild);
            playerScore++;
            
    }
    // Computer beats player
    else if(
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')){
            const message = document.createElement('p');
            message.setAttribute('class','message');
            message.textContent = `LOSE! You selected ${playerSelection}, computer selected ${computerSelection}.`;
            messageContainer.insertBefore(message, messageContainer.firstChild);
            computerScore++;
    }
    
    scores.textContent = (`Player score: ${playerScore} | Computer score: ${computerScore}`);
    if(checkScore(playerScore, computerScore)){
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        const playAgain = document.createElement('button');
        playAgain.setAttribute('type','button');
        playAgain.textContent = 'Play again';
        playAgain.addEventListener('click', reloadWindow);
        messageContainer.insertBefore(playAgain, messageContainer.firstChild);
        if(playerScore > computerScore){
            const message = document.createElement('p');
            message.setAttribute('class','message');
            message.textContent = 'You defeat the computer! You won!'
            messageContainer.insertBefore(message, messageContainer.firstChild);
        }
        else{
            const message = document.createElement('p');
            message.setAttribute('class','message');
            message.textContent = 'The computer beat you! You lost!'
            messageContainer.insertBefore(message, messageContainer.firstChild);
        }
    }
    else{
        return;
    }
}

function checkScore(playerScore, computerScore){
    if(playerScore === 5 || computerScore === 5){
        return true;
    }
    else{
        return false;
    }
}

function reloadWindow(){
    location.reload();
}