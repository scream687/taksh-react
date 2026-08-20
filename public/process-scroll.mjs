import { animate, scroll } from 'https://cdn.jsdelivr.net/npm/motion@latest/+esm';

try {
  const section = document.getElementById('process');
  const fill = document.getElementById('proc-fill');
  const steps = [...document.querySelectorAll('.process__step')];
  const nodes = [...document.querySelectorAll('.proc-node')];

  if (!section || !fill || !steps.length) {
    throw null;
  }

  const THRESHOLDS = [0.05, 0.32, 0.62, 0.90];
  const done = new Set();

  // Motion calls this as (progress, info). Older builds passed the info
  // object first, which is why `({ y })` used to work — under motion@latest
  // it destructures a number, yields undefined, and the rail never moves.
  // Accept both shapes so a future CDN bump cannot silently kill it again.
  scroll((progress, info) => {
    const p = typeof progress === 'number'
      ? progress
      : (progress && progress.y && progress.y.progress);
    if (typeof p !== 'number' || Number.isNaN(p)) return;

    fill.style.width = `${Math.min(100, Math.max(0, p * 100))}%`;
    fill.classList.toggle('orb-on', p > 0.02 && p < 0.98);

    steps.forEach((step, i) => {
      if (p >= THRESHOLDS[i] && !done.has(i)) {
        done.add(i);
        step.classList.add('is-active');
        if (nodes[i]) {
          animate(nodes[i], { scale: [0.9, 1.15, 1] }, { duration: 0.45, easing: [0.34, 1.56, 0.64, 1] });
        }
      }
      if (p < THRESHOLDS[i] - 0.03 && done.has(i)) {
        done.delete(i);
        step.classList.remove('is-active');
      }
    });
  }, {
    target: section,
    offset: ['start 65%', 'end 35%']
  });
} catch(e) {
  if (e) console.warn('Motion scroll skipped:', e);
}
