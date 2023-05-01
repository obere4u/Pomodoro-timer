
//Selectors

const pomodoroTimer = document.querySelector(".pomodoro_timer");
const pomodoroStart = document.querySelector(".pomodoro_buttons__start");
const pomodoroStop = document.querySelector(".pomodoro_buttons__stop");
const pomodoroReset = document.querySelector(".pomodoro_buttons__reset");

let interval;
let timeLeft = 1500; //25 minutes

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    let formattedTime = `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`

    //padStart adds leading zero


    pomodoroTimer.innerHTML = formattedTime;
}


function startTimer() {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer()
        
        //To make user experience better by using colors to show timeLeft
        if (timeLeft > 600) {
            pomodoroTimer.style.color = "#003200"
        } else if (timeLeft >= 300 && timeLeft <= 600) {
            pomodoroTimer.style.color = "#616b04"
        }else {
            pomodoroTimer.style.color = "red";
        }

        if (timeLeft === 0) {
            clearInterval(interval);
            alert('Times Up');
            timeLeft = 1500;
        }

    }, 1000); 
}

function stopTimer() {
    clearInterval(interval)
}

function resetTimer() {
    clearInterval(interval)
    timeLeft = 1500;
    updateTimer();
}



// Event Listeners
pomodoroStart.addEventListener("click", startTimer);
pomodoroStop.addEventListener("click", stopTimer);
pomodoroReset.addEventListener("click", resetTimer);