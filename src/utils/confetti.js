import confetti from 'canvas-confetti';

export function fireHeartConfetti() {
  const count = 50;
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 9999,
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  // Multi-stage fireworks of pastel pinks, creams, and golds
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    colors: ['#FF758F', '#FFB3C6', '#FFD6E0'],
  });
  fire(0.2, {
    spread: 60,
    colors: ['#FFE5EC', '#FF8FA3', '#E8D5F5'],
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
    colors: ['#FF4D6D', '#FFB3C6', '#FFF0F3', '#FFC93C'],
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    colors: ['#FF758F', '#C8B6FF'],
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
    colors: ['#FF8FA3', '#FFD166'],
  });
}

export function gentleHeartShower() {
  const end = Date.now() + 1200;
  const colors = ['#FF758F', '#FFB3C6', '#FFAAA6', '#FFF0F5'];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
      zIndex: 9999,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
      zIndex: 9999,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
