function updateCountdown() {
    const now = new Date();
    const newYear = new Date('January 1, 2025 00:00:00');
    const diff = newYear - now;

    if (diff <= 0) {
        document.querySelector('.timer').innerHTML = '🎉 Happy New Year 2025! 🎉';
        clearInterval(timerInterval);
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();
