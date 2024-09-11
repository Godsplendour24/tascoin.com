// Countdown Timer for Launch Date
function countdown() {
    const launchDate = new Date("2024-12-01T00:00:00").getTime();
    const now = new Date().getTime();
    const distance = launchDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "Launched!";
    }
}

setInterval(countdown, 1000);
