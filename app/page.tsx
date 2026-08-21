'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WaitlistDrawer } from '@/components/layout/WaitlistDrawer';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsStrip } from '@/components/sections/StatsStrip';
import { PainPointsSection } from '@/components/sections/PainPointsSection';
import { ManifestoSection } from '@/components/sections/ManifestoSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { TeamSection } from '@/components/team/TeamSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      {/* Skip to Content for Accessibility */}
      <a
        href="#services"
        style={{
          position: 'absolute',
          top: '-100%',
          left: '16px',
          zIndex: 10000,
          padding: '12px 24px',
          background: 'var(--ink, #121212)',
          color: 'var(--paper, #F5F5F3)',
          fontSize: '14px',
          fontWeight: 500,
          textDecoration: 'none',
          transition: 'top 0.2s',
        }}
        onFocus={(e) => {
          e.currentTarget.style.top = '16px';
        }}
        onBlur={(e) => {
          e.currentTarget.style.top = '-100%';
        }}
      >
        Skip to content
      </a>

      {/* Preloader & Ambient Liquid Canvas */}
      <div id="preloader" aria-hidden="true">
        <Image className="preloader__logo" src="/logo-symbol.png" alt="Taksh" width={64} height={64} priority />
        <div className="preloader__bar" />
      </div>

      <div className="liquid-bg" aria-hidden="true">
        <div className="liquid-bg__blob liquid-bg__blob--1" />
        <div className="liquid-bg__blob liquid-bg__blob--2" />
        <div className="liquid-bg__blob liquid-bg__blob--3" />
      </div>

      <div className="ambient-mesh">
        <div className="orb orb-1" />
        <div className="orb orb-2 orb-v" />
        <div className="orb orb-3" />
        <div className="streak" style={{ left: '20%', animationDelay: '0s' }} />
        <div className="streak" style={{ left: '50%', animationDelay: '-5s' }} />
        <div className="streak" style={{ left: '80%', animationDelay: '-10s' }} />
      </div>

      {/* Interactive Theme Switcher */}
      <ThemeToggle />

      {/* Custom Context Cursor */}
      <div className="cursor" id="cursor" />

      {/* Floating Pill Navigation */}
      <Navbar />

      {/* Page Content Layout */}
      <main id="main-content" className="overflow-x-hidden w-full max-w-full">
        <HeroSection onOpenWaitlist={() => setIsWaitlistOpen(true)} />
        <StatsStrip />
        <PainPointsSection />
        <ManifestoSection />
        <ServicesSection />
        <ProcessSection />
        <IndustriesSection />
        <TeamSection />
        <FAQSection />
        <ContactSection />
      </main>

      {/* Footer & Bottom Banner */}
      <Footer />

      {/* Early Access Waitlist Drawer */}
      <WaitlistDrawer
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />

      {/* Client Motion & Interactive Scripts */}
      <Script src="/site-init.js" strategy="afterInteractive" />
      <Script src="/effects.js" strategy="afterInteractive" />
      <Script src="/taksh.js" strategy="lazyOnload" />
    </>
  );
}