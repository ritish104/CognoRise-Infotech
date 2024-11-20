
const targetDateInput = document.getElementById('target-date');
const startBtn = document.getElementById('start-btn');
const daysSpan = document.getElementById('days');
const hoursSpan = document.getElementById('hours');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');

let countdownInterval;

startBtn.addEventListener('click', () => {
  const targetDate = new Date(targetDateInput.value);
  if (isNaN(targetDate.getTime())) {
    alert('Please select a valid date and time.');
    return;
  }

  clearInterval(countdownInterval);
  startCountdown(targetDate);
});

function startCountdown(targetDate) {
  countdownInterval = setInterval(() => {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      alert('Countdown finished!');
      updateDisplay(0, 0, 0, 0);
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    updateDisplay(days, hours, minutes, seconds);
  }, 1000);
}

function updateDisplay(days, hours, minutes, seconds) {
  daysSpan.textContent = String(days).padStart(2, '0');
  hoursSpan.textContent = String(hours).padStart(2, '0');
  minutesSpan.textContent = String(minutes).padStart(2, '0');
  secondsSpan.textContent = String(seconds).padStart(2, '0');
}
