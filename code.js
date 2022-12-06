let choices = ["rock", "paper", "scissors"];
// TODO: loop this 5 times and determine a winner
playGame ()


//function that will randomly return 'rock' 'paper' or 'scissors'
function getComputerChoice(choices) {
    //let computerSelection = choices[Math.floor(Math.random()*choices.length)];
    let computerSelection = choices[0];
    console.log("The computer chose: " + computerSelection);
    return computerSelection;
}

function getPlayerChoice() {
    //let playerChoice = prompt("choose rock, paper, or scissors");
    let playerChoice = choices[0];
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
            console.log("Draw! Try again.")
        } else console.log("okay")
        // TODO: see who won the game
}
