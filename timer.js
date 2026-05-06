const TIMER_DURATION = 5000;

// Get timer display element
const timerDisplay = document.getElementById("timer");

// Check if an end time already exists
let endTime = localStorage.getItem("attackEndTime");

// If not, create one
if (!endTime) {
  endTime = Date.now() + TIMER_DURATION;
  localStorage.setItem("attackEndTime", endTime);
}

// Update timer every 10ms
const countdown = setInterval(() => {
  const timeLeft = endTime - Date.now();

  // Prevent negative display
  const safeTime = Math.max(timeLeft, 0);

  // Update display
  if (timerDisplay) {
    timerDisplay.innerText = (safeTime / 1000).toFixed(2);
  }

  // Timer finished
  if (timeLeft <= 0) {
    clearInterval(countdown);

    // Clear stored timer
    localStorage.removeItem("attackEndTime");

    // Redirect
    window.location.href = "p1-timeout.html";
  }
}, 10);
