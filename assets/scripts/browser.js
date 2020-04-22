const body = document.querySelector("body");
const stageLoad = document.querySelector("#stage-0");
const stageStart = document.querySelector("#stage-1");
const stagePlay = document.querySelector("#stage-2");
const stages = document.querySelector(".stages");
const btnQuickRound = document.querySelector("#game-start-quick-btn");
const btnShortRound = document.querySelector("#game-start-short-btn");
const btnLongRound = document.querySelector("#game-start-long-btn");

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
function game(rounds = 0) {
    // Start the game
    console.log("Game Started!");
    playGameStage();
    // Set the max round for this game
    let maxRounds = rounds;
    console.log(`This game has ${maxRounds} rounds.`);
    // Game actions
    // Game score
    // Game computer
}
btnQuickRound.addEventListener("click", function() {
    game(3);
});
btnShortRound.addEventListener("click", function() {
    game(6);
});
btnLongRound.addEventListener("click", function() {
    game(10);
});
function playGameStage() {
    stageStart.style.display = "none";
    stagePlay.style.display = "block";
}