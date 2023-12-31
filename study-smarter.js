const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");
var session = 0;
var tag = document.getElementById("help");
var button = document.getElementById("helpButton");

button.addEventListener("click", showHelp);
start.addEventListener("click", startTimer, session = 1);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

let interval;
let timeLeft = 1500;

function updateTimer(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    timer.innerHTML = formattedTime;
};

function startTimer(){
    console.log("Starting the timer.");
    if (session === 1) {
        document.getElementById("status").innerHTML = "Study";
    } else if (session === 2) {
        document.getElementById("status").innerHTML = "Break";
    }
    interval = setInterval(()=> {
        timeLeft--;
        updateTimer();
        console.log("Session is" + session);
        if (timeLeft === 0 && session === 1) {
            clearInterval(interval);
            session = 2;
            if (confirm("Time for a break! Press OK to continue. Press cancel to end study session.")) {
                timeLeft = 300;
                updateTimer();
                startTimer();
            } else {
                resetTimer();
                session = 1;
                }
        } else if (timeLeft === 0 && session === 2) {
            clearInterval(interval);
            session = 1;
            if (confirm("Time to study again! Press OK to continue. Press cancel to end study session.")) {
                timeLeft = 1500;
                updateTimer();
                startTimer();
            } else {
                resetTimer();
                session = 1;
                }
        }
    }, 1000);
}

function stopTimer(){
    console.log("Stopping the timer.");
    clearInterval(interval);
};

function resetTimer(){
    console.log("Resetting the timer.");
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
    session = 1;
    document.getElementById("status").innerHTML = "";
};

function showHelp(){
tag.classList.toggle("help");
};