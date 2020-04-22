const body = document.querySelector("body");
const stageLoad = document.querySelector("#stage-0");

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        body.style.visibility = "hidden";
        stageLoad.style.visibility = "visible";
    } else {
        body.style.visibility = "visible";
        stageLoad.style.visibility = "hidden";
    }
}