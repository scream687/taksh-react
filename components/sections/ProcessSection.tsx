'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from '@/components/motion/ScrollStack';

export const SPRINT_PHASES = [
  {
    num: '01',
    week: 'WEEK 01 · DIAGNOSTICS',
    name: 'Interrogate & Diagnose',
    thesis: 'Extracting unvarnished commercial truth.',
    tag: 'Tension Matrix',
    theme: 'card-theme-01',
    iconType: 'diagnostics',
  },
  {
    num: '02',
    week: 'WEEK 02 · POSITIONING',
    name: 'Carve & Articulate',
    thesis: 'The single sentence holding strategy together.',
    tag: 'Category Doctrine',
    theme: 'card-theme-02',
    iconType: 'positioning',
  },
  {
    num: '03',
    week: 'WEEK 03 · IDENTITY SYSTEM',
    name: 'Shape & Systemize',
    thesis: 'A living design language for instant category authority.',
    tag: 'Tokenized Identity',
    theme: 'card-theme-03',
    iconType: 'identity',
  },
  {
    num: '04',
    week: 'WEEK 04 · EXECUTION',
    name: 'Ship & Calibrate',
    thesis: 'Production handover with zero ambiguity and 90-day momentum.',
    tag: 'GTM War-Chest',
    theme: 'card-theme-04',
    iconType: 'execution',
  },
];

function RenderCardIcon({ type }: { type: string }) {
  if (type === 'diagnostics') {
    return (
      <div className="proc-ref__icon-frame">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <line x1="7" y1="8" x2="17" y2="8" />
          <line x1="7" y1="12" x2="15" y2="12" />
          <line x1="7" y1="16" x2="12" y2="16" />
        </svg>
      </div>
    );
  }
  if (type === 'positioning') {
    return (
      <div className="proc-ref__icon-frame">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      </div>
    );
  }
  if (type === 'identity') {
    return (
      <div className="proc-ref__icon-frame">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="2" />
          <rect x="14" y="3" width="7" height="7" rx="2" />
          <rect x="14" y="14" width="7" height="7" rx="2" />
          <rect x="3" y="14" width="7" height="7" rx="2" />
        </svg>
      </div>
    );
  }
  return (
    <div className="proc-ref__icon-frame">
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    </div>
  );
}

export function ProcessSection() {
  return (
    <section className="section process-stack-section" id="process">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section__head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label">Method · 03</span>
          <h2 className="section__title">
            The architecture of a<br />
            four-week <em>sprint.</em>
          </h2>
          <p
            style={{
              fontSize: 'clamp(16px, 1.2vw, 19px)',
              color: 'var(--muted, #6E6E6E)',
              maxWidth: '680px',
              lineHeight: '1.6',
              margin: '0',
            }}
          >
            Positioning is not an academic exercise. It is a four-stage process of elimination, pressure-testing, and rapid production execution.
          </p>
        </motion.div>

        {/* Reference-Styled ScrollStack */}
        <div style={{ marginTop: '48px', marginBottom: '32px' }}>
          <ScrollStack>
            {SPRINT_PHASES.map((phase) => (
              <ScrollStackItem key={phase.num} itemClassName={`proc-ref-card ${phase.theme}`}>
                <div className="proc-ref__inner">
                  {/* Left Column: Bold Typography & Minimal Subtitle */}
                  <div className="proc-ref__text-side">
                    <div className="proc-ref__pill-badge">
                      <span className="proc-ref__pill-dot" />
                      <span>{phase.week}</span>
                    </div>

                    <h3 className="proc-ref__title">{phase.name}</h3>

                    <p className="proc-ref__thesis">
                      &ldquo;{phase.thesis}&rdquo;
                    </p>

                    <div className="proc-ref__tag-badge">
                      <span>Shipped Output:</span>
                      <strong>{phase.tag}</strong>
                    </div>
                  </div>

                  {/* Right Column: Large Minimal Icon Frame */}
                  <div className="proc-ref__icon-side">
                    <RenderCardIcon type={phase.iconType} />
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

        {/* Bottom Studio Standards Note */}
        <div className="proc-stack__footer">
          <div className="proc-mono__footer-pill">
            <span className="proc-mono__footer-dot" />
            <span>TWO ENGAGEMENTS PER SPRINT CADENCE · NO JUNIOR LAYERS · FIXED 28-DAY SCOPE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
