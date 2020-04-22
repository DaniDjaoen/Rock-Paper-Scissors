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
let roundsTotal = 0;
let roundsWon = 0;
let roundsLost= 0;
let roundsInvalid = 0;
let checkPlayerSelectionMsg;
playRound();

// The Game
function playRound(playerSelection = prompt("What do you choose?"), computerSelection = computerPlay()) {
    roundsTotal = roundsTotal + 1;
    if (playerSelection === null) {
        console.log("[[[ GAME SCORE ]]]")
        console.log(`Total Rounds: ${roundsTotal}`);
        console.log(`Total Rounds Won: ${roundsWon}`);
        console.log(`Total Rounds Loat: ${roundsLost}`);
        console.log(`Total Rounds Invalid: ${roundsInvalid}`)
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
        console.log(roundResult);
        return;
    } else {
        roundsInvalid = roundsInvalid + 1;
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
        console.log(`Why true? Because player selection was [${playerSelection}]`);
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
        roundsWon = roundsWon + 1;
        roundResult = roundResults[1];
    } else if (playerSelection == playOptions[1] && computerSelection == playOptions[0]) {
        roundsWon = roundsWon + 1;
        roundResult = roundResults[1];
    } else if (playerSelection == playOptions[2] && computerSelection == playOptions[1]) {
        roundsWon = roundsWon + 1;
        roundResult = roundResults[1];
    } else {
        roundsLost = roundsLost + 1;
        roundResult = roundResults[2];
    }
    return roundResult;
}
// Check out what the player entered and see if it doesnt match our list of Options
function checkPlayerSelection (playerSelection) {
    if (playerSelection == playOptions[0] || playerSelection == playOptions[1] || playerSelection == playOptions[2]) {
        //console.log(`Why true? Because player selection was [${playerSelection}]`);
        return true;
    } else {
        //console.log(`Why false? Because player selection was [${playerSelection}]`);
        return false;
    }
}
