'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
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
          />
        </Link>
        <div className="nav__links">
          <a href="#services" className="magnetic">
            Services
          </a>
          <a href="#process" className="magnetic">
            Process
          </a>
          <a href="#industries" className="magnetic">
            Industries
          </a>
          <a href="#team" className="magnetic">
            Team
          </a>
          <a href="#manifesto" className="magnetic">
            Manifesto
          </a>
          <Link href="/real-estate" className="magnetic">
            Real Estate
          </Link>
        </div>
        <a className="nav__cta magnetic" href="#contact">
          Start a project <span className="arrow">→</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
