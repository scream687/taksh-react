import { animate, scroll } from 'https://cdn.jsdelivr.net/npm/motion@latest/+esm';
try {
  const section = document.getElementById('process');
  const fill = document.getElementById('proc-fill');
  const steps = [...document.querySelectorAll('.process__step')];
  const bodies = [...document.querySelectorAll('.proc-body')];
  const nodes = [...document.querySelectorAll('.proc-node')];
  if (!section || !fill || !steps.length) {
    console.warn('Process elements not found, skipping scroll animation');
    throw null;
  }
  const THRESHOLDS = [0.02, 0.33, 0.65, 0.95];
  const done = new Set();
  scroll(({ y }) => {
    const p = y && y.progress;
    if (p === undefined) return;
    fill.style.width = `${p * 100}%`;
    fill.classList.toggle('orb-on', p > 0.01 && p < 0.99);
    steps.forEach((step, i) => {
      if (p >= THRESHOLDS[i] && !done.has(i)) {
        done.add(i);
        step.classList.add('is-active');
        animate(nodes[i], { scale: [0.78, 1.15, 1] }, { duration: 0.55, easing: [0.34, 1.56, 0.64, 1] });
        animate(bodies[i], { opacity: [0, 1], y: [14, 0] }, { duration: 0.5, easing: [0.23, 1, 0.32, 1], delay: 0.12 });
      }
      if (p < THRESHOLDS[i] - 0.02 && done.has(i)) {
        done.delete(i);
        step.classList.remove('is-active');
        bodies[i].style.opacity = '0';
        bodies[i].style.transform = 'translateY(14px)';
      }
    });
  }, { target: section, offset: ['start 75%', 'end 25%'] });
} catch(e) {
  if (e) console.warn('Motion scroll skipped:', e);
}
