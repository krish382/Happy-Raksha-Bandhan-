document.getElementById("clickButton").addEventListener("click", function() {
    var timer = document.getElementById("timer");
    var timerSound = document.getElementById("timerSound");
    var countdown = 3;

    document.getElementById("greetingCard").style.display = "none"; // Hide the greeting card after button click
    timer.style.display = "block";
    timerSound.play();

    var countdownInterval = setInterval(function() {
        timer.textContent = countdown;
        countdown--;

        if (countdown < 0) {
            clearInterval(countdownInterval);
            timer.style.display = "none";
            var message = document.getElementById("message");
            message.style.display = "flex";
            var video = document.getElementById("video");
            video.style.display = "block";
            video.play();
            timerSound.pause();
            timerSound.currentTime = 0;
        }
    }, 1000); // 1000 milliseconds = 1 second
});
