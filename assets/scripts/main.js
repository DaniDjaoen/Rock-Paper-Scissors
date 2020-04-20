const playOptions = [
    "ROCK",
    "PAPER",
    "SCISSORS"
];

const roundResults = [
    "This round: Is a TIE.",
    "This round: The Player WINS!",
    "This round: The Computer WINS!",
    "This round: ** PLAYER SELECTION ERROR **"
];
let roundResult;
playRound();
// The Game
function playRound(playerSelection = prompt("What do you choose?"), computerSelection = computerPlay()) {
    if (playerSelection === null) {
        console.log("~~ The End ~~");
        return;
    }
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    console.log(`The player selected [${playerSelection}] - The computer selected [${computerSelection}]`);

    playingRound(playerSelection, computerSelection);

    redoRound(playerSelection);
}
// The Backend

// Randomize computer choice
function computerPlay() {
    let thisRound = playOptions[Math.floor(Math.random() * playOptions.length)];
    return thisRound;
}
// Start playing the round
function playingRound(playerSelection, computerSelection){
    if (isRoundValid(playerSelection)) {
        getWinner(playerSelection, computerSelection);
        return;
    } else {
        console.log(roundResults[3]);
        return;
    }
}
// Do a new round
function redoRound(playerSelection) {
    nextRound = playerSelection = prompt(`Please enter one of the following options: ${playOptions[0]}, ${playOptions[1]}, ${playOptions[2]}`)
    playRound(nextRound);
}
// Check if round is valid if player insterted one of the permited options
function isRoundValid(playerSelection) {
    if (checkPlayerSelection(playerSelection)) {
        return true;
    } else {
        return false;
    }
}
// Get the winner
function getWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        roundResult = roundResults[0];
    } else if (playerSelection == playOptions[0] && computerSelection == playOptions[2]) {
        roundResult = roundResults[1];
    } else if (playerSelection == playOptions[1] && computerSelection == playOptions[0]) {
        roundResult = roundResults[1];
    } else if (playerSelection == playOptions[2] && computerSelection == playOptions[1]) {
        roundResult = roundResults[1];
    } else {
        roundResult = roundResults[2];
    }
    return roundResult;
}
// Check out what the player entered and see if it doesnt match our list of Options
function checkPlayerSelection (playerSelection) {
    if (playerSelection == playOptions[0] || playerSelection == playOptions[1] || playerSelection == playOptions[2]) {
        console.log(`Why true? Because player selection was [${playerSelection}]`)
        return true;
    } else {
        console.log(`Why false? Because player selection was [${playerSelection}]`);
        return false;
    }
}
