(() => {
  'use strict';
  const cursor = document.getElementById('cursor');
  let mouseX = 0, mouseY = 0;
  if (window.matchMedia("(pointer: fine)").matches && cursor) {
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    });
    document.querySelectorAll('a, button, .faq__q, .magnetic').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
    });
    document.querySelectorAll('.magnetic').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
        btn.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
      });
      btn.addEventListener('mouseenter', () => {
        btn.style.transition = 'none';
      });
    });
  }

  // Disable Lenis smooth scroll on mobile for better performance
  const isMobile = window.innerWidth < 768;
  if (!isMobile && typeof Lenis !== 'undefined') {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }

  const nav = document.getElementById('nav');
  const onScroll = () => { if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 8); };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const fmt = new Intl.DateTimeFormat('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Asia/Kolkata', hour12: false });
  const tick = () => {
    const t = fmt.format(new Date()) + ' IST';
    const a = document.getElementById('clock');
    if (a) a.textContent = t;
    const b = document.getElementById('clock-foot');
    if (b) b.textContent = t;
  };
  tick();
  setInterval(tick, 1000);

  document.querySelectorAll('.faq__item').forEach(item => {
    const q = item.querySelector('.faq__q');
    if (q) {
      q.addEventListener('click', () => {
        const open = item.classList.contains('is-open');
        document.querySelectorAll('.faq__item').forEach(i => i.classList.remove('is-open'));
        if (!open) item.classList.add('is-open');
      });
    }
  });

  // Reveal observer with immediate viewport check
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -5% 0px', threshold: 0.01 });

  document.querySelectorAll('.reveal').forEach(el => {
    io.observe(el);
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
      el.classList.add('is-in');
    }
  });

  if (window.matchMedia('(pointer: fine)').matches) {
    const industries = document.querySelectorAll('.industry');
    industries.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        card.style.transform = `translate3d(0, -8px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = `translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)`;
      });
    });
  }
})();
