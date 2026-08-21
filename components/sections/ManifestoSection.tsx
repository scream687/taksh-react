'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PRINCIPLES = [
  {
    num: '01',
    lead: 'Precise',
    tension: 'never sloppy.',
    body: 'Every word and pixel is intentional. We do not ship rough drafts to clients — we ship unequivocal answers.',
  },
  {
    num: '02',
    lead: 'Confident',
    tension: 'never arrogant.',
    body: 'We know what we do and we refuse to oversell it. The work makes the case on its own merit.',
  },
  {
    num: '03',
    lead: 'Minimal',
    tension: 'never cold.',
    body: 'Less noise, more signal. If a paragraph or design token has to argue for its own existence, it gets deleted.',
  },
  {
    num: '04',
    lead: 'Sharp',
    tension: 'never aggressive.',
    body: 'Direct, clear, no fluff. We do not hide behind consultant jargon — and we will not let your brand do so either.',
  },
  {
    num: '05',
    lead: 'Young',
    tension: 'never green.',
    body: 'The relentless pace of a growth founder paired with the tactical clarity of veteran operators.',
  },
  {
    num: '06',
    lead: 'Grounded',
    tension: 'built for the world.',
    body: 'Indian roots, global standards. Engineered for growth-stage businesses competing at international scale.',
  },
];

export function ManifestoSection() {
  return (
    <section className="section section--void manifesto-section" id="manifesto">
      <div className="container">
        {/* Section Head */}
        <motion.div
          className="section__head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label label--paper">Manifesto · 06</span>
          <h2 className="section__title">
            The brand is not a veneer.
            <br />
            It is the <em>operating system.</em>
          </h2>
          <p
            style={{
              fontSize: 'clamp(16px, 1.2vw, 19px)',
              color: 'rgba(245, 245, 243, 0.65)',
              maxWidth: '640px',
              lineHeight: '1.6',
              margin: '0',
            }}
          >
            Six uncompromising principles governing how we think, write, design, and deliver.
          </p>
        </motion.div>

        {/* Pure Swiss Typographic Grid */}
        <div className="manifesto-grid">
          {PRINCIPLES.map((item, idx) => (
            <motion.div
              key={item.num}
              className="manifesto-tile"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="manifesto-tile__num">{item.num}</span>

              <div className="manifesto-tile__headline">
                <span className="manifesto-tile__lead">{item.lead}</span>
                <span className="manifesto-tile__dash"> &mdash; </span>
                <em className="manifesto-tile__tension">{item.tension}</em>
              </div>

              <p className="manifesto-tile__body">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Studio Note */}
        <div className="manifesto-footer">
          <div className="proc-mono__footer-pill" style={{ background: '#141414', borderColor: 'var(--border-dark)', color: 'var(--on-dark)' }}>
            <span className="proc-mono__footer-dot" />
            <span>UNCOMPROMISING COMMERCIAL RIGOR · PRODUCTION FIGMA DELIVERABLES · FIXED 28-DAY SPRINT</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManifestoSection;
