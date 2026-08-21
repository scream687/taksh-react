'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MagnetButton } from '@/components/motion/MagnetButton';

const HERO_WORDS_LINE1 = ['Strategy', '&'];
const HERO_WORDS_LINE2 = ['marketing,'];
const HERO_WORDS_LINE3 = [
  { text: 'shaped', isItalic: true, isBlue: false },
  { text: 'with', isItalic: false, isBlue: false },
  { text: 'intent.', isItalic: false, isBlue: true },
];

const blurWordVariants = {
  hidden: {
    filter: 'blur(14px)',
    opacity: 0,
    y: 20,
  },
  visible: (custom: number) => ({
    filter: 'blur(0px)',
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.15 + custom * 0.08,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

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

  let wordIndex = 0;

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

          {/* Kinetic Blur-In Headline */}
          <h1 className="hero__title">
            <span style={{ display: 'block' }}>
              {HERO_WORDS_LINE1.map((word) => {
                const idx = wordIndex++;
                return (
                  <motion.span
                    key={word}
                    custom={idx}
                    variants={blurWordVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ display: 'inline-block', marginRight: '0.28em', willChange: 'transform, filter, opacity' }}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </span>

            <span style={{ display: 'block' }}>
              {HERO_WORDS_LINE2.map((word) => {
                const idx = wordIndex++;
                return (
                  <motion.span
                    key={word}
                    custom={idx}
                    variants={blurWordVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ display: 'inline-block', marginRight: '0.28em', willChange: 'transform, filter, opacity' }}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </span>

            <span style={{ display: 'block' }}>
              {HERO_WORDS_LINE3.map((item) => {
                const idx = wordIndex++;
                return (
                  <motion.span
                    key={item.text}
                    custom={idx}
                    variants={blurWordVariants}
                    initial="hidden"
                    animate="visible"
                    className={item.isBlue ? 'blue' : ''}
                    style={{
                      display: 'inline-block',
                      marginRight: '0.28em',
                      fontFamily: item.isItalic ? "'Instrument Serif', Georgia, serif" : undefined,
                      fontStyle: item.isItalic ? 'italic' : undefined,
                      fontWeight: item.isItalic ? 400 : undefined,
                      willChange: 'transform, filter, opacity',
                    }}
                  >
                    {item.text}
                  </motion.span>
                );
              })}
            </span>
          </h1>

          {/* Statement & Action Buttons */}
          <motion.div
            className="hero__bottom"
            initial={{ opacity: 0, filter: 'blur(8px)', y: 16 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="hero__statement">
              Taksh is a strategy &amp; marketing studio for growth-stage businesses — built to help brands think sharper, move faster, and grow with intent.
            </p>
            <div className="hero__cta">
              <MagnetButton strength={10}>
                <a className="btn btn--primary" href="#contact">
                  Start a project <span className="arrow">→</span>
                </a>
              </MagnetButton>

              <MagnetButton strength={8}>
                <a className="btn btn--ghost" href="#services">
                  See the work
                </a>
              </MagnetButton>

              <MagnetButton strength={8}>
                <button
                  type="button"
                  className="btn-waitlist"
                  onClick={onOpenWaitlist}
                >
                  Join Waitlist
                </button>
              </MagnetButton>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Marquee ticker */}
      <section className="marquee" aria-label="Brand pillars">
        <div className="marquee__track">
          <span>
            Strategy <span className="blue-tri" />
          </span>
          <span>
            Positioning <span className="blue-tri" />
          </span>
          <span>
            Identity <span className="blue-tri" />
          </span>
          <span>
            Go-to-Market <span className="blue-tri" />
          </span>
          <span>
            Systems <span className="blue-tri" />
          </span>
          <span>
            Real Estate <span className="blue-tri" />
          </span>
        </div>
        <div className="marquee__track" aria-hidden="true">
          <span>
            Strategy <span className="blue-tri" />
          </span>
          <span>
            Positioning <span className="blue-tri" />
          </span>
          <span>
            Identity <span className="blue-tri" />
          </span>
          <span>
            Go-to-Market <span className="blue-tri" />
          </span>
          <span>
            Systems <span className="blue-tri" />
          </span>
          <span>
            Real Estate <span className="blue-tri" />
          </span>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
