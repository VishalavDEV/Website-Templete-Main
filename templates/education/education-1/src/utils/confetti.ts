export const triggerConfetti = (opts?: any) => {
  if (typeof window !== 'undefined' && typeof (window as any).confetti === 'function') {
    try {
      (window as any).confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        ...opts,
      });
    } catch (e) {}
  }
};
