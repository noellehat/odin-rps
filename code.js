let choices = ["rock", "paper", "scissors"];
let playerWin = 0;
let computerWin = 0;
// TODO: loop this 5 times and determine a winner
//playRound ()
//console.log(playRound())

//function that will randomly return 'rock' 'paper' or 'scissors'
function getComputerChoice(choices) {
    let computerSelection = choices[Math.floor(Math.random()*choices.length)];
    //let computerSelection = choices[0];
    console.log("The computer chose: " + computerSelection);
    return computerSelection;
}

function getPlayerChoice() {
    let playerChoice = prompt("choose rock, paper, or scissors");
    //let playerChoice = choices[0];
    playerChoice = playerChoice.toLowerCase();
    console.log("The player chose: " + playerChoice)
    return playerChoice
}

//function that plays a single round of rock paper scissors, takes two parameters
function playRound() {
    console.log("Play da game hit!")
    let compSelection = getComputerChoice(choices);

    let plrSelection = getPlayerChoice();
        if (plrSelection == compSelection) {
            return "Draw! Try again.";
        } else if (plrSelection == "rock") {
            if (compSelection == "scissors") {
                playerWin++;
                return "Rock beats scissors! Player wins!";
            } else {
                computerWin++;
                return "Paper covers rock! Computer wins!";
            }
        } else if (plrSelection == "paper") {
            if (compSelection == "rock") {
                playerWin++;
                return "Paper covers rock! Player wins!";
            } else {
                computerWin++;
                return "Scissors beats paper! Computer wins!";
            }
        } else if (plrSelection == "scissors") {
            if (compSelection == "paper") {
                playerWin++
                return "Scissors cuts paper! Player wins!";
            } else {
                computerWin++
                return "Rock beats scissors! Computer wins!";
            }
        } else {
            return "You typed something funny, dingus.";
        }        
}
// TODO: see who won the game
//wins tracker
//console.log("Player: " + playerWin + " " + "Computer: " + computerWin)
