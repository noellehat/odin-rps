let choices = ["rock", "paper", "scissors"];
// TODO: loop this 5 times and determine a winner
//playGame ()
console.log(playGame())

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
function playGame() {
    console.log("Play da game hit!")
    let compSelection = getComputerChoice(choices);

    let plrSelection = getPlayerChoice();
        if (plrSelection == compSelection) {
            console.log("Draw! Try again.");
        } else if (plrSelection == "rock") {
            if (compSelection == "scissors") {
                return "Rock beats scissors! Player wins!"
            } else {
                return "Paper covers rock! Computer wins!"
            }
        } else if (plrSelection == "paper") {
            if (compSelection == "rock") {
                return "Paper covers rock! Player wins!"
            } else {
                return "Scissors beats paper! Computer wins!"
            }
        } else if (plrSelection == "scissors") {
            if (compSelection == "paper") {
                return "Scissors cuts paper! Player wins!"
            } else {
                return "Rock beats scissors! Computer wins!"
            }
        } else {
            return "You typed something funny, dingus."
        }
        // TODO: see who won the game
}
