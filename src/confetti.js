import canvasConfetti from 'https://cdn.skypack.dev/canvas-confetti';
// Instrument Command.
aha.on('confetti-when-done.confetti', () => {
  canvasConfetti({
    particleCount: 30,
    spread: 70,
    origin: { y: 0.7 },
    zIndex: 10000,
    useWorker: false
  });
});

// Bind Command to 'shipped' event.
aha.on({ event: 'aha.workflow-board.shipped' }, () => {
  aha.executeCommand('confetti-when-done.confetti');
});
