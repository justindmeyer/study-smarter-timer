const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

let interval;
let timeLeft = 10;

function updateTimer(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    timer.innerHTML = formattedTime;
};

function startTimer(){
    console.log("Starting the timer.");
    interval = setInterval(()=> {
        timeLeft--;
        updateTimer();
        if(timeLeft === 0){
            clearInterval(interval);
            alert("Time for a break!");
            timeLeft = 10;
        };
    document.getElementById("status").innerHTML = "Study";
    }, 1000);
};

function stopTimer(){
    console.log("Stopping the timer.");
    clearInterval(interval);
};

function resetTimer(){
    console.log("Resetting the timer.");
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
    document.getElementById("status").innerHTML = "";
};