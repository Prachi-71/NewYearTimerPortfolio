// Countdown Timer Logic
function updateCountdown() {
    const now = new Date();
    const newYear = new Date('January 1, 2025 00:00:00');
    const diff = newYear - now;

    if (diff <= 0) {
        showHappyNewYearMessage();
        clearInterval(timerInterval);
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Function to show "Happy New Year" message
function showHappyNewYearMessage() {
    document.querySelector('.timer').innerHTML = '🎉 Happy New Year 2025! 🎉';
}

// Event listener for the "Preview" button
document.getElementById('previewButton').addEventListener('click', showHappyNewYearMessage);

// Start the countdown
const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();
