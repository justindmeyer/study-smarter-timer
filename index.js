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

// TO-DO: make it so its not just a break timer on repeat! maybe define a function for ending the timer so that i can do if/else things easier?? idk

function startTimer(){
    console.log("Starting the timer.");
    document.getElementById("status").innerHTML = "Study";
    interval = setInterval(()=> {
        timeLeft--;
        updateTimer();
        if(timeLeft === 0){
            clearInterval(interval);
            if (confirm("Time for a break! Press OK to continue. Press cancel to end study session.")) {
                timeLeft = 5;
                updateTimer();
                startTimer();
                document.getElementById("status").innerHTML = "Break";
            } else {
                resetTimer();
            }
        }
    }, 1000)
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