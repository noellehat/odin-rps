let choices = ["rock", "paper", "scissors"];
// TODO: loop this 5 times and determine a winner
playGame ()


//function that will randomly return 'rock' 'paper' or 'scissors'
function getComputerChoice(choices) {
    //let computerSelection = choices[Math.floor(Math.random()*choices.length)];
    let computerSelection = choices[1];
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
            console.log("Draw! Try again.");
        } else if (compSelection[0] && (plrSelection = "scissors")) {
            console.log("Rock beats scissors! Computer wins!");
        } else if (compSelection[1] && (plrSelection = "rock")) {
            console.log("Paper covers rock! Computer wins!");
        } else if (compSelection[2] && (plrSelection = "paper")) {
            console.log("Scissors cuts paper! Computer wins!");
        } else if ((plrSelection = "rock") && compSelection[2]) {
            console.log("Rock beats scissors! Player wins!");
        } else if ((plrSelection = "paper") && compSelection[0]) {
            console.log("Paper covers rock! Player wins!");
        } else if ((plrSelection = "scissors") && compSelection[1]) {
            console.log("Scissors cuts paper! Player wins!");
        } else console.log("You mispelled it dingus.");
        // TODO: see who won the game
}
