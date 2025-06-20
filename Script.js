function startCountdown(card) {
  const text = card.querySelector('#text');

  // Prevent multiple clicks
  if (text.dataset.clicked === "true") return;
  text.dataset.clicked = "true";

  let count = 4;
  const countdownInterval = setInterval(() => {
    text.textContent = count;
    count--;
    if (count < 0) {
      clearInterval(countdownInterval);
      text.classList.remove('reveal');
      setTimeout(() => {
        text.textContent = '৳7000';
        text.classList.add('reveal');
        launchConfetti(120);
      }, 100);
    }
  }, 600); // countdown speed
}

function launchConfetti(count) {
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.backgroundColor = randomColor();
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = Math.random() * 50 + 'px';
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 1500);
  }
}

function randomColor() {
  const colors = ['#f43f5e', '#10b981', '#3b82f6', '#f59e0b', '#a855f7', '#ec4899'];
  return colors[Math.floor(Math.random() * colors.length)];
}
