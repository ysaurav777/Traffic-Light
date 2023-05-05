let ready = document.getElementById("readyButton");
let stop = document.getElementById("stopButton");
let go = document.getElementById("goButton");
let stopLight = document.getElementById("stopLight");
let readyLight = document.getElementById("readyLight");
let goLight = document.getElementById("goLight");

function stopB() {
    stop.style.backgroundColor = "#cf1124";
    stopLight.style.backgroundColor = "#cf1124";
    ready.style.backgroundColor = "#4b5069";
    readyLight.style.backgroundColor = "#4b5069";
    go.style.backgroundColor = "#4b5069";
    goLight.style.backgroundColor = "#4b5069";
}

function readyB() {
    stop.style.backgroundColor = "#4b5069";
    stopLight.style.backgroundColor = "#4b5069";
    ready.style.backgroundColor = "#f7c948";
    readyLight.style.backgroundColor = "#f7c948";
    go.style.backgroundColor = "#4b5069";
    goLight.style.backgroundColor = "#4b5069";
}

function goB() {
    stop.style.backgroundColor = "#4b5069";
    stopLight.style.backgroundColor = "#4b5069";
    ready.style.backgroundColor = "#4b5069";
    readyLight.style.backgroundColor = "#4b5069";
    go.style.backgroundColor = "#199473";
    goLight.style.backgroundColor = "#199473";
}