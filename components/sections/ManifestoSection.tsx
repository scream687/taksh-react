'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from '@/components/motion/SpotlightCard';
import { GradualBlur } from '@/components/motion/GradualBlur';

const PRINCIPLES = [
  {
    num: '01',
    lead: 'Precise',
    italicText: 'never sloppy.',
    body: 'Every word and pixel is intentional. We do not ship rough drafts to clients — we ship unequivocal answers.',
    tag: 'LAT: 12.9716° N · GRID: 0.5px',
    graphicType: 'crosshair',
    spanClass: 'manifesto-card--wide',
  },
  {
    num: '02',
    lead: 'Confident',
    italicText: 'never arrogant.',
    body: 'We know what we do and we refuse to oversell it. The work makes the case on its own merit.',
    tag: 'EQUILIBRIUM · 1.0',
    graphicType: 'scale',
    spanClass: '',
  },
  {
    num: '03',
    lead: 'Minimal',
    italicText: 'never cold.',
    body: 'Less noise, more signal. If a paragraph or design token has to argue for its own existence, it gets deleted.',
    tag: 'SIGNAL RATIO: 99.4%',
    graphicType: 'signal',
    spanClass: '',
  },
  {
    num: '04',
    lead: 'Sharp',
    italicText: 'never aggressive.',
    body: 'Direct, clear, no fluff. We do not hide behind consultant jargon — and we will not let your brand do so either.',
    tag: 'CONVICTION · NO JARGON',
    graphicType: 'diamond',
    spanClass: '',
  },
  {
    num: '05',
    lead: 'Young',
    italicText: 'never green.',
    body: 'The relentless pace of a growth founder paired with the tactical clarity of veteran operators.',
    tag: 'VELOCITY: 28-DAY SPRINT',
    graphicType: 'velocity',
    spanClass: '',
  },
  {
    num: '06',
    lead: 'Grounded',
    italicText: 'built for the world.',
    body: 'Indian roots, global standards. Engineered for growth-stage businesses competing at international scale.',
    tag: 'BLR · SFO · NYC · LON',
    graphicType: 'globe',
    spanClass: 'manifesto-card--wide',
  },
];

function RenderMicroGraphic({ type }: { type: string }) {
  if (type === 'crosshair') {
    return (
      <div className="manifesto-graphic">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="14" stroke="#2D5BE3" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="18" cy="18" r="3" fill="#2D5BE3" />
          <line x1="18" y1="2" x2="18" y2="8" stroke="#2D5BE3" strokeWidth="1.5" />
          <line x1="18" y1="28" x2="18" y2="34" stroke="#2D5BE3" strokeWidth="1.5" />
          <line x1="2" y1="18" x2="8" y2="18" stroke="#2D5BE3" strokeWidth="1.5" />
          <line x1="28" y1="18" x2="34" y2="18" stroke="#2D5BE3" strokeWidth="1.5" />
        </svg>
      </div>
    );
  }
  if (type === 'scale') {
    return (
      <div className="manifesto-graphic">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <line x1="6" y1="18" x2="30" y2="18" stroke="#2D5BE3" strokeWidth="2" />
          <polygon points="18,8 22,18 14,18" fill="#2D5BE3" opacity="0.8" />
          <circle cx="10" cy="24" r="4" stroke="#2D5BE3" strokeWidth="1.5" />
          <circle cx="26" cy="24" r="4" stroke="#2D5BE3" strokeWidth="1.5" />
        </svg>
      </div>
    );
  }
  if (type === 'signal') {
    return (
      <div className="manifesto-graphic">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <rect x="6" y="24" width="4" height="6" rx="1" fill="#2D5BE3" opacity="0.4" />
          <rect x="13" y="19" width="4" height="11" rx="1" fill="#2D5BE3" opacity="0.6" />
          <rect x="20" y="14" width="4" height="16" rx="1" fill="#2D5BE3" opacity="0.8" />
          <rect x="27" y="8" width="4" height="22" rx="1" fill="#2D5BE3" />
        </svg>
      </div>
    );
  }
  if (type === 'diamond') {
    return (
      <div className="manifesto-graphic">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <polygon points="18,4 32,18 18,32 4,18" stroke="#2D5BE3" strokeWidth="1.8" fill="rgba(45, 91, 227, 0.12)" />
          <circle cx="18" cy="18" r="3" fill="#2D5BE3" />
        </svg>
      </div>
    );
  }
  if (type === 'velocity') {
    return (
      <div className="manifesto-graphic">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M6 18H30M30 18L22 10M30 18L22 26" stroke="#2D5BE3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="6" y1="12" x2="16" y2="12" stroke="#2D5BE3" strokeWidth="1.5" strokeDasharray="2 3" opacity="0.5" />
          <line x1="6" y1="24" x2="20" y2="24" stroke="#2D5BE3" strokeWidth="1.5" strokeDasharray="2 3" opacity="0.5" />
        </svg>
      </div>
    );
  }
  return (
    <div className="manifesto-graphic">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="14" stroke="#2D5BE3" strokeWidth="1.8" />
        <ellipse cx="18" cy="18" rx="7" ry="14" stroke="#2D5BE3" strokeWidth="1.2" strokeDasharray="2 2" />
        <line x1="4" y1="18" x2="32" y2="18" stroke="#2D5BE3" strokeWidth="1.4" />
      </svg>
    </div>
  );
}

export function ManifestoSection() {
  return (
    <section className="section section--void manifesto-section" id="manifesto" style={{ position: 'relative' }}>
      {/* Top & Bottom Optical Gradual Blur */}
      <GradualBlur position="both" height="60px" strength={8} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Head */}
        <motion.div
          className="section__head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label label--paper">Manifesto · 06</span>
          <h2 className="section__title" style={{ color: '#F5F5F3' }}>
            The brand is not a veneer.
            <br />
            It is the <em style={{ color: '#60A5FA' }}>operating system.</em>
          </h2>
          <p
            style={{
              fontSize: 'clamp(16px, 1.2vw, 19px)',
              color: 'rgba(245, 245, 243, 0.65)',
              maxWidth: '640px',
              lineHeight: '1.6',
              margin: '12px 0 0 0',
            }}
          >
            Six uncompromising principles governing how we think, write, design, and deliver.
          </p>
        </motion.div>

        {/* 6-Card High-End Bento Grid */}
        <div className="manifesto-bento-grid">
          {PRINCIPLES.map((item) => (
            <SpotlightCard
              key={item.num}
              className={`manifesto-bento-card ${item.spanClass}`}
              spotlightColor="rgba(45, 91, 227, 0.18)"
            >
              <div className="manifesto-card__body">
                {/* Card Top: Number, Tag & Micro-Graphic */}
                <div className="manifesto-card__header">
                  <div className="manifesto-card__num-wrap">
                    <span className="manifesto-card__num">{item.num}</span>
                    <span className="manifesto-card__tag">{item.tag}</span>
                  </div>
                  <RenderMicroGraphic type={item.graphicType} />
                </div>

                {/* Card Center: Lead & Italic Heading */}
                <div className="manifesto-card__title-wrap">
                  <h3 className="manifesto-card__lead">
                    {item.lead}{' '}
                    <span className="manifesto-card__italic">&mdash; {item.italicText}</span>
                  </h3>
                </div>

                {/* Card Bottom: Body Statement */}
                <p className="manifesto-card__text">
                  {item.body}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Studio Doctrine Guarantee Pill */}
        <div className="manifesto-footer-note">
          <div className="proc-mono__footer-pill">
            <span className="proc-mono__footer-dot" />
            <span>UNCOMPROMISING COMMERCIAL RIGOR · PRODUCTION FIGMA DELIVERABLES · FIXED 28-DAY SPRINT</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManifestoSection;
