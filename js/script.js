let userTime;
let timeIntervel;

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

    const minDisply = minutes < 10 ?`0${minutes}` : minutes;
    const secDisply = seconds < 10 ?`0${seconds}` : seconds;

    timerDisplay.textContent = `${minDisply}:${secDisply}`;

    if (givenTime-- < 0) {
      clearInterval(timeIntervel);
      timerDisplay.textContent = "Breath Out";
      setTimeout(()=>{
        timerDisplay.textContent = "Breath in";
        startTimer(userTime);
      },3000);
    } 
  }, 1000);
};

startBtn.addEventListener("click", () => {
  userTime = 15;
  startTimer(userTime);
});

stopBtn.addEventListener("click", () => {});
