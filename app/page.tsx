'use client';

import React, { useState } from 'react';
import Script from 'next/script';
import { MotionConfig } from 'framer-motion';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { Preloader } from '@/components/layout/Preloader';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WaitlistDrawer } from '@/components/layout/WaitlistDrawer';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsStrip } from '@/components/sections/StatsStrip';
import { PainPointsSection } from '@/components/sections/PainPointsSection';
import { ManifestoSection } from '@/components/sections/ManifestoSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { TeamSection } from '@/components/team/TeamSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
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
      <Preloader />

      {/* One static canvas. Blue stays a signal, not an ambient wash. */}
      <div className="ambient-mesh" aria-hidden="true" />

      {/* Custom Context Cursor */}
      <div className="cursor" id="cursor" />

      {/* Floating Pill Navigation */}
      <Navbar />

      {/* Page Content Layout with Smooth Scroll */}
      <SmoothScroll>
        <main id="main-content" className="overflow-x-clip w-full max-w-full">
          <HeroSection onOpenWaitlist={() => setIsWaitlistOpen(true)} />
          <StatsStrip />
          <PainPointsSection />
          <ManifestoSection />
          <ServicesSection />
          <ProcessSection />
          <IndustriesSection />
          <TestimonialsSection />
          <TeamSection />
          <FAQSection />
          <ContactSection />
        </main>

        {/* Footer & Bottom Banner */}
        <Footer />
      </SmoothScroll>

      {/* Early Access Waitlist Drawer */}
      <WaitlistDrawer
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />

      {/* Client Motion & Interactive Scripts */}
      <Script src="/site-init.js" strategy="afterInteractive" />
      <Script src="/effects.js" strategy="afterInteractive" />
    </MotionConfig>
  );
}