const body = document.querySelector("body");

const stageLoad = document.querySelector("#stage-0");
const stageStart = document.querySelector("#stage-1");
const stagePlay = document.querySelector("#stage-2");
const stageResult = document.querySelector("#stage-3")
const stages = document.querySelector(".stages");

const btnQuickRound = document.querySelector("#game-start-quick-btn");
const btnShortRound = document.querySelector("#game-start-short-btn");
const btnLongRound = document.querySelector("#game-start-long-btn");

const btnRockAction = document.querySelector("#rock-action");
const btnPaperAction = document.querySelector("#paper-action");
const btnScissorAction = document.querySelector("#scissor-action");

const hidePlayerActions = document.querySelector("#game-player-action-options");
const hidePlayerActionsInput = document.querySelectorAll(".game-input");
const loadNextRoundText = document.querySelector("#loading-next-round");
const changePlayerInstruction = document.querySelector("#game-player-instruction-text");

const gameHumanActionShow = document.querySelector("#human-action-img");
const gameHumanActionResult = document.querySelector("#human-action-result");

const gameCpuActionShow = document.querySelector("#cpu-action-img");
const gameCpuActionResult = document.querySelector("#cpu-action-result");

const gameCurrentRound = document.querySelector("#game-current-round");
const gameCurrentRoundLeft = document.querySelector("#game-current-rounds-left");
const gameCurrentMaxRounds = document.querySelector("#game-current-max-rounds");

const showGamesWon = document.querySelector("#games-won");
const showGamesTie = document.querySelector("#games-tie");
const showGamesLost = document.querySelector("#games-lost");

const showRockChosen = document.querySelector("#action-rock-chosen");
const showPaperChosen = document.querySelector("#action-paper-chosen");
const showScissorChosen = document.querySelector("#action-scissor-chosen");


const rockImg = "assets/images/action_rock.svg";
const paperImg = "assets/images/action_paper.svg";
const scissorImg = "assets/images/action_scissor.svg";

loadNextRoundText.style.display = "none";

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        stageLoad.style.display = "block";
        document.title = "Rock Paper Scissors | Loading Game ...";
    } else {
        setTimeout(function(){
            stageLoad.style.display = "none";
            stageStart.style.display = "block";
            document.title = "Rock Paper Scissors | Play Now";
        }, 6000)
    }
}
// Hide Start Game Stage
function playGameStage() {
    stageStart.style.display = "none";
    stagePlay.style.display = "block";
}
let roundsWon = 0;
let roundsLost = 0;
let roundsTie = 0;
// The main logic
function game(rounds = 0) {
    roundsWon = 0;
    roundsLost = 0;
    roundsTie = 0;
    // Start the game
    console.log("Game Started!");
    playGameStage();
    // Set the max round for this game
    let maxRounds = rounds;
    let currentRound = 0;
    let currentRoundsLeft = rounds;
    console.log(`This game has ${maxRounds} rounds.`);
    gameCurrentRound.textContent = currentRound;
    gameCurrentMaxRounds.textContent = maxRounds;
    gameCurrentRoundLeft.textContent = currentRoundsLeft;

    let rockChosen = 0;
    let paperChosen = 0;
    let scissorChosen = 0;
    // Game actions
    // Game score
    // Game computer
    btnRockAction.addEventListener('click', function () {
        let humanActionResult = getHumanAction(action = "rock");
        rockChosen = rockChosen + 1;
        console.log(`Chosen [ROCK]: ${rockChosen}`);
        showRockChosen.textContent = `[ROCK] chosen ${rockChosen} times.`;
        currentRound = playRound(currentRound, maxRounds);
        currentRoundsLeft = currentRoundsLeft - 1;
        gameCurrentRoundLeft.textContent = currentRoundsLeft;
        console.log(`Current rounds left: ${currentRoundsLeft}`);
        let cpuActionResult = getCpuAction();
        let roundResultCounter = getRoundResult(humanActionResult, cpuActionResult);
        countRoundResults(roundResultCounter);
        intervalBetweenRounds();
    });
    btnPaperAction.addEventListener('click', function () {
        let humanActionResult = getHumanAction(action = "paper");
        paperChosen = paperChosen + 1;
        console.log(`Chosen [PAPER]: ${paperChosen}`);
        showPaperChosen.textContent = `[PAPER] chosen ${paperChosen} times.`;
        currentRound = playRound(currentRound, maxRounds);
        currentRoundsLeft = currentRoundsLeft - 1;
        gameCurrentRoundLeft.textContent = currentRoundsLeft;
        console.log(`Current rounds left: ${currentRoundsLeft}`);
        let cpuActionResult = getCpuAction();
        let roundResultCounter = getRoundResult(humanActionResult, cpuActionResult);
        countRoundResults(roundResultCounter);
        intervalBetweenRounds();
    });
    btnScissorAction.addEventListener('click', function () {
        let humanActionResult = getHumanAction(action = "scissor");
        scissorChosen = scissorChosen + 1;
        console.log(`Chosen [SCISSOR]: ${scissorChosen}`);
        showScissorChosen.textContent = `[SCISSOR] chosen ${scissorChosen} times.`;
        currentRound = playRound(currentRound, maxRounds);
        currentRoundsLeft = currentRoundsLeft - 1;
        gameCurrentRoundLeft.textContent = currentRoundsLeft;
        console.log(`Current rounds left: ${currentRoundsLeft}`);
        let cpuActionResult = getCpuAction();
        let roundResultCounter = getRoundResult(humanActionResult, cpuActionResult);
        countRoundResults(roundResultCounter);
        intervalBetweenRounds();
    });

};
function intervalBetweenRounds () {
    hidePlayerActionsInput.forEach(e => e.style.display= "none");
        loadNextRoundText.style.display = "block";
        setTimeout( function(){
            hidePlayerActionsInput.forEach(e => e.style.display = "block");
            loadNextRoundText.style.display = "none";
        }, 1000);
};
function countRoundResults(roundResultCounter) {
    let gameRoundResults = [];
    switch (roundResultCounter) {
        case "won":
            roundsWon = roundsWon + 1;
            break;
        case "tie":
            roundsTie = roundsTie + 1;
            break;
        case "lost":
            roundsLost = roundsLost + 1;
            break;
    };
    gameRoundResults = [
        `Total Rounds [WON]: ${roundsWon}`,
        `Total Rounds [TIE]: ${roundsTie}`,
        `Total Rounds [LOST]: ${roundsLost}`
    ];
    console.log(gameRoundResults);
    showGamesWon.textContent = gameRoundResults[0];
    showGamesTie.textContent = gameRoundResults[1];
    showGamesLost.textContent = gameRoundResults[2];
}
function getRoundResult(humanActionResult, cpuActionResult) {
    const humanWonText = "Human Player: [WON]!!";
    const humanLostText = "Human Player: [LOST]!";
    const roundDrawText = "Both Players: [TIE]."
    const cpuWonText = "CPU Player: [WON]!";
    const cpuLostText = "CPU Player: [LOST]!";
    const wonCode = "won";
    const lostCode = "lost";
    const tieCode = "tie";

    if (humanActionResult == cpuActionResult) {
        gameHumanActionResult.textContent = roundDrawText;
        gameCpuActionResult.textContent = roundDrawText;
        console.log(`Human Player: ${humanActionResult}`);
        console.log(`CPU Player: ${cpuActionResult}`);
        return tieCode;
    } else if (humanActionResult == "rock" && cpuActionResult == "scissor") {
        gameHumanActionResult.textContent = humanWonText;
        gameCpuActionResult.textContent = cpuLostText;
        console.log(`Human Player: ${humanActionResult}`);
        console.log(`CPU Player: ${cpuActionResult}`);
        return wonCode;
    } else if (humanActionResult == "paper" && cpuActionResult == "rock") {
        gameHumanActionResult.textContent = humanWonText;
        gameCpuActionResult.textContent = cpuLostText;
        console.log(`Human Player: ${humanActionResult}`);
        console.log(`CPU Player: ${cpuActionResult}`);
        return wonCode;
    } else if (humanActionResult == "scissor" && cpuActionResult == "paper") {
        gameHumanActionResult.textContent = humanWonText;
        gameCpuActionResult.textContent = cpuLostText;
        console.log(`Human Player: ${humanActionResult}`);
        console.log(`CPU Player: ${cpuActionResult}`);
        return wonCode;
    } else {
        gameHumanActionResult.textContent = humanLostText;
        gameCpuActionResult.textContent = cpuWonText;
        console.log(`Human Player: ${humanActionResult}`);
        console.log(`CPU Player: ${cpuActionResult}`);
        return lostCode;
    }
}
function playRound(currentRound, maxRounds) {
    currentRound = currentRound + 1;
    gameCurrentRound.textContent = currentRound;
    console.log(`Current round: ${currentRound}`);
    if (currentRound == maxRounds) {
        hidePlayerActions.style.display = "none";
        changePlayerInstruction.textContent = "Instruction: Generating Game Score, please wait 3 seconds.";
        setTimeout(function() {
            stagePlay.style.display = "none";
            stageResult.style.display = "block";
        }, 3000);
    }
    return currentRound;
}
// Get the human player action
function getHumanAction(action = "none") {
    let humanAction = action;
    console.log(`Human action: ${humanAction}`);
    switch (action) {
        case "rock":
            gameHumanActionShow.src = rockImg;
            return humanAction;
        case "paper":
            gameHumanActionShow.src = paperImg;
            return humanAction;
        case "scissor":
            gameHumanActionShow.src = scissorImg;
            return humanAction;
    }
}
function getCpuAction() {
    let cpuOptions = ["rock", "paper", "scissor", "paper", "rock", "scissor"];
    let currentRoundAction = cpuOptions[Math.floor(Math.random() * cpuOptions.length)];
    console.log(`CPU choose [${currentRoundAction}]`);
    switch (currentRoundAction) {
        case "rock":
            gameCpuActionShow.src = rockImg;
            break;
        case "paper":
            gameCpuActionShow.src = paperImg;
            break;
        case "scissor":
            gameCpuActionShow.src = scissorImg;
            break;
    }
    return currentRoundAction;
}
// Rounds chooser buttons
btnQuickRound.addEventListener("click", function() {
    game(3);
    hidePlayerActions.style.display = "grid";
});
btnShortRound.addEventListener("click", function() {
    game(6);
    hidePlayerActions.style.display = "grid";
});
btnLongRound.addEventListener("click", function() {
    game(10);
    hidePlayerActions.style.display = "grid";
});

const btnStartNewGame = document.querySelector("#new-game-btn");
btnStartNewGame.addEventListener("click", function(){
    //stageResult.style.display = "none";
    //stageStart.style.display = "block";
    window.location.reload();
});