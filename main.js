//Sets .active to active timer button (removes it from others).


//Initial values for the variables.
let initialTime = 1500;
let timePassed = 0;
let timeLeft = initialTime;


//Formats the time in SS/MM format.
const formatTime = function(time) {
    const minutesLeft = Math.floor(time / 60); 
    let secondsLeft = time % 60; 
    if (secondsLeft < 10) {
        secondsLeft = `0${secondsLeft}`;
    }

    return `${minutesLeft}:${secondsLeft}`; 
}


//Starts the countdown. Takes initialTime in seconds (value from button-click).
const startCountdown = function(initialTime) {
    timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = initialTime - timePassed;

        document.getElementById("countdownTime").innerHTML = formatTime(timeLeft);
        updateTimerCircle(initialTime);

        if (timeLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}


//Calculates + sets the animation on the countdown.
const updateTimerCircle = function(initialTime) {
    let timeFraction = timeLeft / initialTime;
    let timeFractionOffset = timeFraction - (1 / initialTime) * (1 - timeFraction);

    const circleDasharray = `${(timeFractionOffset * 283).toFixed(0)} 283`; 

    const remainingTimeCircle = document.getElementById("remainingTime");
    remainingTimeCircle.setAttribute("stroke-dasharray", circleDasharray);
 }


startCountdown(300)