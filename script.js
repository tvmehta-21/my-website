// Countdown timer for Las Vegas GP
function updateCountdown() {
    // Set your target date here - Las Vegas GP (November 22, 2025, Pacific Time)
    const targetDate = new Date('2025-12-18T00:00:00-08:00').getTime();
    
    const now = new Date().getTime();
    const distance = targetDate - now;
    
    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
    // Display the result
    const countdownElement = document.getElementById('countdown');
    
    if (distance < 0) {
        countdownElement.textContent = "Event has passed";
    } else {
        countdownElement.textContent = `${days} days, ${hours} hours, ${minutes} mins`;
    }
}

// Update countdown every minute
updateCountdown();
setInterval(updateCountdown, 60000); // Update every 60 seconds
