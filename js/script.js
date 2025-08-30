let userTime;
let timeIntervel;
let isRunning = false;

const timerDisplay = document.getElementById("timerBox");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

function l(l) {
  console.log(l);
}

const startTimer = (givenTime) => {
  timeIntervel = setInterval(() => {
    const minutes = parseInt(givenTime / 60, 10);
    const seconds = parseInt(givenTime % 60, 10);

    const minDisply = minutes < 10 ? `0${minutes}` : minutes;
    const secDisply = seconds < 10 ? `0${seconds}` : seconds;

    timerDisplay.textContent = `${minDisply}:${secDisply}`;

    if (givenTime-- < 0) {
      clearInterval(timeIntervel);
      timerDisplay.textContent = "Breath Out";
      setTimeout(() => {
        timerDisplay.textContent = "Breath in";
        startTimer(userTime);
      }, 3000);
    }
  }, 1000);
};

const stop = () => {
  clearInterval(timeIntervel);
  timerDisplay.textContent = "Breath in";
  isRunning = false;
};

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    userTime = 15;
    startTimer(userTime);
    isRunning = true;
  }
});

stopBtn.addEventListener("click", () => {
  stop();
  isRunning = false;
});
