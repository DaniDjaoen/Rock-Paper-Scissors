const body = document.querySelector("body");
const stageLoad = document.querySelector("#stage-0");
const stageStart = document.querySelector("#stage-1");
const stages = document.querySelector(".stages");
const btnQuickRound = document.querySelector("#game-start-quick-btn");
const btnShortRound = document.querySelector("#game-start-short-btn");
const btnLongRound = document.querySelector("#game-start-long-btn");

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        stageLoad.style.display = "block";
        document.title = "Rock Paper Scissors | Loading Game ...";
    } else {
        stageLoad.style.display = "none";
        stageStart.style.display = "block";
        document.title = "Rock Paper Scissors | Play Now";
    }
}
function game(rounds = 0) {
    let maxRounds = rounds;
    alert(`This game has ${maxRounds}`);
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