'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/layout/ThemeToggle';

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#industries', label: 'Industries' },
  { href: '#team', label: 'Team' },
  { href: '#manifesto', label: 'Manifesto' },
  { href: '/real-estate', label: 'Real Estate', internal: true },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    toggleRef.current?.focus();
  }, []);

  // Lock page scroll (and Lenis) while the drawer owns the viewport.
  useEffect(() => {
    if (!isMenuOpen) return;

    const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
    const previousOverflow = document.body.style.overflow;

    lenis?.stop();
    document.body.style.overflow = 'hidden';
    drawerRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      lenis?.start();
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <nav className="nav" id="nav">
      <div className="nav__inner">
        <Link href="/" className="nav__brand" aria-label="Taksh — home">
          <Image
            src="/logo-wordmark.png"
            alt="Taksh"
            width={128}
            height={36}
            style={{ height: '32px', width: 'auto', display: 'block' }}
            priority
            suppressHydrationWarning
          />
        </Link>

        <div className="nav__links">
          {NAV_LINKS.map((link) =>
            link.internal ? (
              <Link key={link.href} href={link.href} className="magnetic">
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className="magnetic">
                {link.label}
              </a>
            )
          )}
        </div>

        <a className="nav__cta magnetic" href="#contact">
          Start a project <span className="arrow">→</span>
        </a>

        <ThemeToggle />

        <button
          ref={toggleRef}
          type="button"
          className={`nav__burger ${isMenuOpen ? 'is-open' : ''}`}
          aria-expanded={isMenuOpen}
          aria-controls="nav-drawer"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => (isMenuOpen ? closeMenu() : setIsMenuOpen(true))}
        >
          <span className="nav__burger-bar" />
          <span className="nav__burger-bar" />
        </button>
      </div>

      <div
        className={`nav__scrim ${isMenuOpen ? 'is-open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        id="nav-drawer"
        ref={drawerRef}
        className={`nav__drawer ${isMenuOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        tabIndex={-1}
        inert={!isMenuOpen}
      >
        <ul className="nav__drawer-list">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href} style={{ '--i': i } as React.CSSProperties}>
              {link.internal ? (
                <Link href={link.href} onClick={closeMenu}>
                  {link.label}
                </Link>
              ) : (
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <a className="nav__drawer-cta" href="#contact" onClick={closeMenu}>
          Start a project <span className="arrow">→</span>
        </a>

        <div className="nav__drawer-foot">
          <span>hello@taksh.in</span>
          <span>Booking Q3 · 2026</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
