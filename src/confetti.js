const fireConfetti = () => {
  window.confetti({
    particleCount: 10,
    spread: 5,
    origin: { y: 0.6 },
    zIndex: 10000
  });
}

// Fire confetti when feature shipped is received.
aha.on('aha.workflow-board.shipped', fireConfetti);
// Also wire up manual command.
aha.on('confetti', fireConfetti);

// load canvas-confetti
let confettiEl = document.createElement("script");
confettiEl.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.3.3/dist/confetti.browser.js";
confettiEl.async = true;
document.head.appendChild(confettiEl);
