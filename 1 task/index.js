const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let remainingTime = seconds;

    const timerInterval = setInterval(() => {
      remainingTime -= 1;
      updateClock();
    }, 1000);

    updateClock();

    function updateClock() {
      let hours = Math.floor((remainingTime / (60 * 60)) % 24);
      let minutes = Math.floor((remainingTime / 60) % 60);
      let seconds = Math.floor(remainingTime % 60);

      timerEl.innerHTML = `${`0${hours}`.slice(-2)}:${`0${minutes}`.slice(-2)}:${`0${seconds}`.slice(-2)}`;

      if (remainingTime <= 0) {
        clearInterval(timerInterval);
        buttonEl.disabled = false;
      }
    }
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("keypress", function (e) {
  if (e.key.match(/\D/g)) {
    e.preventDefault();
  }
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  
  buttonEl.disabled = true;
  inputEl.value = "";
});
