'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagnetButton } from '@/components/motion/MagnetButton';
import { BlurText } from '@/components/motion/BlurText';

const SOCIAL_LINKS = [
  { name: 'Instagram', url: 'https://instagram.com/' },
  { name: 'LinkedIn', url: 'https://linkedin.com/' },
  { name: 'Read.cv', url: 'https://read.cv/' },
  { name: 'Twitter', url: 'https://x.com/' },
];

const ROTATING_WORDS = ['brand.', 'thesis.', 'narrative.', 'category.', 'vision.', 'future.'];

export function ContactSection() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="contact-cta" id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Cinematic Ambient Background Glow Orb */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(400px, 60vw, 900px)',
          height: 'clamp(300px, 45vw, 600px)',
          background: 'radial-gradient(circle, rgba(45, 91, 227, 0.28) 0%, rgba(45, 91, 227, 0.08) 45%, transparent 75%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span className="label label--paper">Let&apos;s talk · 07</span>
        <h2 className="contact-cta__title" style={{ display: 'flex', flexDirection: 'column' }}>
          <div>
            <BlurText text="Let's talk about" delay={0.05} />
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.22em', flexWrap: 'wrap' }}>
            <BlurText text="your" delay={0.15} />
            <span
              style={{
                display: 'inline-block',
                position: 'relative',
                overflow: 'hidden',
                verticalAlign: 'bottom',
                height: '1.08em',
                lineHeight: 1,
              }}
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.em
                  key={ROTATING_WORDS[wordIndex]}
                  initial={{ y: '100%', opacity: 0, filter: 'blur(8px)' }}
                  animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: '-100%', opacity: 0, filter: 'blur(8px)' }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="contact-cta__accent"
                  style={{ display: 'inline-block' }}
                >
                  {ROTATING_WORDS[wordIndex]}
                </motion.em>
              </AnimatePresence>
            </span>
          </div>
        </h2>

        <motion.div
          className="contact-cta__row"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            paddingTop: '40px',
            marginTop: '60px',
          }}
        >
          <div className="contact-cta__details" style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'flex-start' }}>
            {/* Email Column */}
            <div>
              <div className="label label--paper" style={{ marginBottom: '8px', color: 'rgba(245, 245, 243, 0.55)' }}>
                Email
              </div>
              <a
                href="mailto:hello@taksh.in"
                style={{ color: 'var(--on-dark, #FFFFFF)', fontSize: '18px', fontWeight: 500, transition: 'color 0.2s' }}
              >
                hello@taksh.in
              </a>
            </div>

            {/* Web Column */}
            <div>
              <div className="label label--paper" style={{ marginBottom: '8px', color: 'rgba(245, 245, 243, 0.55)' }}>
                Web
              </div>
              <a
                href="https://taksh.in"
                style={{ color: 'var(--on-dark, #FFFFFF)', fontSize: '18px', fontWeight: 500, transition: 'color 0.2s' }}
              >
                taksh.in
              </a>
            </div>

            {/* Socials Column */}
            <div>
              <div className="label label--paper" style={{ marginBottom: '8px', color: 'rgba(245, 245, 243, 0.55)' }}>
                Socials
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--on-dark, #FFFFFF)',
                      fontSize: '16px',
                      fontWeight: 500,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--blue-on-dark, #4E7BF0)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--on-dark, #FFFFFF)')}
                  >
                    {s.name} <span style={{ fontSize: '12px', opacity: 0.6 }}>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Magnet Button */}
          <MagnetButton strength={12}>
            <a
              className="contact-cta__btn"
              href="mailto:hello@taksh.in"
              style={{
                background: 'var(--blue, #2D5BE3)',
                color: '#FFFFFF',
                padding: '18px 32px',
                borderRadius: '4px',
                fontWeight: 600,
                fontSize: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(45, 91, 227, 0.3)',
                transition: 'all 0.25s ease',
              }}
            >
              Start a project <span style={{ fontSize: '18px' }}>→</span>
            </a>
          </MagnetButton>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
