/* ═══════════════════════════════════════════════════
   Taksh Effects — effects.js
   Implements all 13 interactive effects
═══════════════════════════════════════════════════ */
(() => {
  'use strict';

  /* ── 0. MOBILE NAV HAMBURGER ───────────────────── */
  const hamburger = document.getElementById('nav-hamburger');
  const navDrawer = document.getElementById('nav-drawer');
  const navDrawerOverlay = document.getElementById('nav-drawer-overlay');
  const navDrawerClose = document.getElementById('nav-drawer-close');

  if (hamburger && navDrawer) {
    const openMenu = () => {
      hamburger.classList.add('is-open');
      hamburger.setAttribute('aria-expanded', 'true');
      navDrawer.classList.add('open');
      navDrawerOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      navDrawer.classList.remove('open');
      navDrawerOverlay.classList.remove('open');
      document.body.style.overflow = '';
    };

    hamburger.addEventListener('click', () => {
      navDrawer.classList.contains('open') ? closeMenu() : openMenu();
    });

    navDrawerOverlay.addEventListener('click', closeMenu);
    if (navDrawerClose) navDrawerClose.addEventListener('click', closeMenu);

    navDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  /* ── 1. LOGO PRELOADER ───────────────────────── */
  const preloader = document.getElementById('preloader');
  if (preloader) {
    const dismiss = () => preloader.classList.add('hidden');
    if (document.readyState === 'complete') {
      setTimeout(dismiss, 400);
    } else {
      window.addEventListener('load', () => setTimeout(dismiss, 400));
    }
    setTimeout(dismiss, 2500);
  }

  /* ── 2. ANIMATED LIQUID BACKGROUND ──────────── */
  const blobs = document.querySelectorAll('.liquid-bg__blob');
  if (blobs.length) {
    let tx = window.innerWidth / 2, ty = window.innerHeight / 2;
    let cx = tx, cy = ty;
    document.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });
    const tickBlobs = () => {
      cx += (tx - cx) * 0.04;
      cy += (ty - cy) * 0.04;
      blobs.forEach((blob, i) => {
        const f = (i + 1) * 0.06;
        blob.style.transform = `translate(${(cx - window.innerWidth/2) * f}px,${(cy - window.innerHeight/2) * f}px)`;
      });
      requestAnimationFrame(tickBlobs);
    };
    tickBlobs();
  }


  /* ── 4. THEME CHANGER ────────────────────────── */
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    // Restore saved preference (default is light)
    if (localStorage.getItem('taksh-theme') === 'dark') {
      document.body.classList.add('dark-mode');
    }
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('taksh-theme',
        document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
  }

  /* ── 5. ANIMATED SVG UNDERLINE ───────────────── */
  const underlineTargets = [
    ...document.querySelectorAll('.nav__links a'),
    ...document.querySelectorAll('.footer__col a'),
  ];
  underlineTargets.forEach(link => {
    if (link.dataset.ulDone) return;
    link.dataset.ulDone = '1';
    link.classList.add('svg-ul');
    link.style.position = 'relative';
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'svg-ul__line');
    svg.setAttribute('viewBox', '0 0 100 8');
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.setAttribute('aria-hidden', 'true');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('class', 'svg-ul__path');
    path.setAttribute('d', 'M2 4 Q 25 1, 50 4 T 98 4');
    svg.appendChild(path);
    link.appendChild(svg);
  });

  /* ── 6. DRAWER MODAL ─────────────────────────── */
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerEl      = document.getElementById('drawer');
  const drawerClose   = document.getElementById('drawer-close');

  const openDrawer = () => {
    drawerOverlay?.classList.add('open');
    drawerEl?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const closeDrawer = () => {
    drawerOverlay?.classList.remove('open');
    drawerEl?.classList.remove('open');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-drawer-open]').forEach(el =>
    el.addEventListener('click', e => { e.preventDefault(); openDrawer(); })
  );
  drawerOverlay?.addEventListener('click', closeDrawer);
  drawerClose?.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

  /* ── 7. WAITLIST FORM ────────────────────────── */
  const waitlistForm = document.getElementById('waitlist-form');
  if (waitlistForm) {
    waitlistForm.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = waitlistForm.querySelector('button[type="submit"]');
      const nameEl  = waitlistForm.querySelector('input[name="name"]');
      const emailEl = waitlistForm.querySelector('input[name="email"]');

      if (!emailEl?.value.includes('@')) {
        emailEl.style.borderColor = '#f87171';
        setTimeout(() => { emailEl.style.borderColor = ''; }, 1500);
        return;
      }

      btn.textContent = 'Joining…';
      btn.disabled = true;

      // Replace with actual endpoint if available
      await new Promise(r => setTimeout(r, 1400));

      waitlistForm.style.display = 'none';
      const successEl = document.getElementById('waitlist-success');
      if (successEl) successEl.style.display = 'block';
    });
  }

  /* ── 8. ROTATE CARDS (3D TILT) ───────────────── */
  const applyTilt = () => {
    document.querySelectorAll('.rotate-card').forEach(card => {
      if (card.dataset.tiltDone) return;
      card.dataset.tiltDone = '1';
      card.addEventListener('mousemove', e => {
        const r   = card.getBoundingClientRect();
        const x   = (e.clientX - r.left) / r.width  - 0.5;
        const y   = (e.clientY - r.top)  / r.height - 0.5;
        card.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateZ(10px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(900px) rotateY(0) rotateX(0) translateZ(0)';
      });
    });
  };
  applyTilt();

  /* ── 9. LIQUID IMAGE ─────────────────────────── */
  const applyLiquid = () => {
    document.querySelectorAll('.liquid-img-wrap').forEach(wrap => {
      if (wrap.dataset.liquidDone) return;
      wrap.dataset.liquidDone = '1';
      wrap.addEventListener('mousemove', e => {
        const r = wrap.getBoundingClientRect();
        wrap.style.setProperty('--lx', ((e.clientX - r.left) / r.width  * 100).toFixed(1) + '%');
        wrap.style.setProperty('--ly', ((e.clientY - r.top)  / r.height * 100).toFixed(1) + '%');
      });
    });
  };
  applyLiquid();

  /* ── 10. FACEBOOK SHARE ──────────────────────── */
  document.querySelectorAll('[data-fb-share]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const url = encodeURIComponent(btn.dataset.fbShare || window.location.href);
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        'fb-share',
        'width=580,height=400,resizable=yes'
      );
    });
  });

  /* ── 11. TEXT EMBED (staggered word reveal) ──── */
  const prepTextEmbeds = () => {
    document.querySelectorAll('.text-embed:not([data-te-done])').forEach(el => {
      el.dataset.teDone = '1';
      const words = el.textContent.trim().split(/\s+/);
      el.innerHTML = words.map((w, i) =>
        `<span class="word" style="transition-delay:${(i * 55)}ms">${w}&nbsp;</span>`
      ).join('');

      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          obs.disconnect();
        }
      }, { threshold: 0.25 });
      obs.observe(el);
    });
  };
  prepTextEmbeds();

  /* ── 12. DYNAMIC TOGGLE ──────────────────────── */
  document.querySelectorAll('.dynamic-toggle').forEach(tog => {
    tog.setAttribute('role', 'switch');
    tog.setAttribute('tabindex', '0');
    const toggle = () => {
      const on = tog.getAttribute('aria-checked') !== 'true';
      tog.setAttribute('aria-checked', String(on));
      tog.dispatchEvent(new CustomEvent('toggle-change', { detail: { on }, bubbles: true }));
    };
    tog.addEventListener('click', toggle);
    tog.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggle(); } });
  });

  /* ── STATS COUNTER ANIMATION ────────────────── */
  const easeOutQuart = t => 1 - Math.pow(1 - t, 4);
  document.querySelectorAll('.stats-strip__num[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    let started = false;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return;
      started = true;
      const duration = 1400;
      const start = performance.now();
      const tick = now => {
        const p = Math.min((now - start) / duration, 1);
        el.textContent = Math.round(easeOutQuart(p) * target);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      };
      requestAnimationFrame(tick);
      obs.disconnect();
    }, { threshold: 0.5 });
    obs.observe(el);
  });

  /* ── PROCESS LINE GRADIENT DEF ───────────────── */
  const processSVG = document.querySelector('.process-line');
  if (processSVG) {
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.innerHTML = `<linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#2D5BE3"/>
      <stop offset="100%" stop-color="#6C3DE3"/>
    </linearGradient>`;
    processSVG.prepend(defs);
  }

  /* ── PROCESS STEP REVEAL (replaces basic reveal) ─ */
  const stepObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); stepObs.unobserve(e.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('.process__step').forEach(el => stepObs.observe(el));

  /* ── GENERAL REVEAL OBSERVER ─ */
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); revealObs.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  // Wire any [data-theme-toggle] dynamic-toggle elements to dark-mode
  document.addEventListener('toggle-change', e => {
    const tog = e.target.closest('.dynamic-toggle[data-theme-toggle]');
    if (tog) {
      const on = e.detail.on;
      document.body.classList.toggle('dark-mode', on);
      localStorage.setItem('taksh-theme', on ? 'dark' : 'light');
    }
  });

})();
