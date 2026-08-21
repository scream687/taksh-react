'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function HeroSection({ onOpenWaitlist }: { onOpenWaitlist?: () => void }) {
  const [timeString, setTimeString] = useState<string>('—');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        };
        setTimeString(now.toLocaleTimeString('en-GB', options) + ' IST');
      } catch {
        setTimeString('14:00:00 IST');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="hero">
        <div className="container">
          {/* Metadata Row */}
          <motion.div
            className="hero__meta"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero__meta-item">
              <span className="label">Studio</span>
              <span className="v">India</span>
            </div>
            <div className="hero__meta-item">
              <span className="label">Established</span>
              <span className="v">2026 · v1.0</span>
            </div>
            <div className="hero__meta-item">
              <span className="label">Local time</span>
              <span className="v clock">{timeString}</span>
            </div>
            <div className="hero__meta-item">
              <span className="label">Status</span>
              <span className="v" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                <span className="pulse"></span>
                Booking Q3 · 2026
              </span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Strategy &amp;
            <br />
            marketing,
            <br />
            <em>shaped</em> with <span className="blue">intent.</span>
          </motion.h1>

          {/* Statement & Action Buttons */}
          <motion.div
            className="hero__bottom"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="hero__statement">
              Taksh is a strategy &amp; marketing studio for growth-stage businesses — built to help brands think sharper, move faster, and grow with intent.
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary magnetic" href="#contact">
                Start a project <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost magnetic" href="#services">
                See the work
              </a>
              <button
                type="button"
                className="btn-waitlist magnetic"
                onClick={onOpenWaitlist}
              >
                Join waitlist
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Infinite Marquee Strip */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          <span>Strategy<span className="blue-tri"></span></span>
          <span>Positioning<span className="blue-tri"></span></span>
          <span>Go-to-Market<span className="blue-tri"></span></span>
          <span>Content<span className="blue-tri"></span></span>
          <span>Performance<span className="blue-tri"></span></span>
          <span>Consultancy<span className="blue-tri"></span></span>
          <span>Strategy<span className="blue-tri"></span></span>
          <span>Positioning<span className="blue-tri"></span></span>
          <span>Go-to-Market<span className="blue-tri"></span></span>
          <span>Content<span className="blue-tri"></span></span>
          <span>Performance<span className="blue-tri"></span></span>
          <span>Consultancy<span className="blue-tri"></span></span>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
