// Countdown Timer
function updateCountdown() {
    const countdownDate = new Date('May 2, 2025 20:00:00').getTime();
    const now = new Date().getTime();
    const distance = countdownDate - now;
    
    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display results
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    
    // If countdown is finished
    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown').innerHTML = '<h3>The Event Has Started!</h3>';
    }
}

// Update countdown every second
const countdownTimer = setInterval(updateCountdown, 1000);

// Initial call
updateCountdown();
