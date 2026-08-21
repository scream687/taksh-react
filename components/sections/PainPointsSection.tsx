'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TensionItem {
  num: string;
  quote: string;
  quoteHighlight: string;
  symptom: string;
  diagnosis: string;
  outcome: string;
}

const TENSIONS: TensionItem[] = [
  {
    num: '01',
    quote: 'We look and sound like every other competitor',
    quoteHighlight: 'in the room.',
    symptom: 'Safe consensus marketing. Trying to appeal to everyone, resulting in zero category conviction.',
    diagnosis: 'When buyers cannot immediately name why you exist, price becomes their only decision metric.',
    outcome: 'Category Differentiation & Defensible Market POV',
  },
  {
    num: '02',
    quote: 'We are burning paid acquisition budget',
    quoteHighlight: 'just to keep CAC flat.',
    symptom: 'Scaling performance marketing into fuzzy messaging. Budget burns before the core doctrine is solved.',
    diagnosis: 'No amount of ad spend fixes a positioning vacuum. Performance marketing only amplifies what is already clear.',
    outcome: 'Higher Organic Conversion & Capital Efficiency',
  },
  {
    num: '03',
    quote: 'Our website, pitch deck, and sales calls tell',
    quoteHighlight: 'three different stories.',
    symptom: 'Internal narrative drift. Executive leadership, product, and sales speak different languages.',
    diagnosis: 'Internal ambiguity leaks straight to enterprise buyers. Deals stall when the narrative lacks unified conviction.',
    outcome: 'Single Unifying Commercial Doctrine',
  },
  {
    num: '04',
    quote: 'Revenue has plateaued despite shipping product',
    quoteHighlight: 'at relentless velocity.',
    symptom: 'Relying on feature releases to drive growth instead of commanding category perception.',
    diagnosis: 'You do not have a product deficit — you have a perception ceiling. Market leadership is won on positioning authority.',
    outcome: 'Category Leadership & Uncontested Pricing Power',
  },
];

export function PainPointsSection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setActiveIdx(activeIdx === idx ? null : idx);
  };

  return (
    <section className="section section--void tension-section" id="pain">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section__head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label label--paper">Sound familiar? · 02</span>
          <h2 className="section__title" style={{ color: '#F5F5F3' }}>
            The problem isn&apos;t
            <br />
            the <em>product.</em>
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
            Four commercial bottlenecks growth founders face &mdash; and the strategic diagnosis behind each.
          </p>
        </motion.div>

        {/* Monumental Typographic Tension Stream */}
        <div className="tension-stream">
          {TENSIONS.map((item, idx) => {
            const isOpen = activeIdx === idx;
            return (
              <motion.div
                key={item.num}
                className={`tension-row ${isOpen ? 'is-open' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Clickable Header Bar */}
                <button
                  type="button"
                  className="tension-row__trigger"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="tension-row__num">{item.num}</span>

                  <div className="tension-row__quote-wrap">
                    <span className="tension-row__quote">
                      &ldquo;{item.quote}{' '}
                      <em>{item.quoteHighlight}</em>&rdquo;
                    </span>
                  </div>

                  <div className="tension-row__toggle-icon" aria-hidden="true">
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      +
                    </motion.span>
                  </div>
                </button>

                {/* Expanded Diagnosis Teardown */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="tension-row__drawer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="tension-row__drawer-inner">
                        {/* Column 1: The Symptom */}
                        <div className="tension-col tension-col--symptom">
                          <span className="tension-col__label">The False Assumption</span>
                          <p className="tension-col__text">{item.symptom}</p>
                        </div>

                        {/* Column 2: The Diagnosis */}
                        <div className="tension-col tension-col--diagnosis">
                          <span className="tension-col__label tension-col__label--blue">The Strategic Diagnosis</span>
                          <p className="tension-col__text tension-col__text--bold">{item.diagnosis}</p>
                        </div>

                        {/* Column 3: The Shipped Antidote */}
                        <div className="tension-col tension-col--outcome">
                          <span className="tension-col__label">Sprint Resolution</span>
                          <div className="tension-col__badge">
                            <span className="tension-col__badge-dot" />
                            <span>{item.outcome}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Studio Note */}
        <div className="tension-footer">
          <div className="proc-mono__footer-pill" style={{ background: '#141414', borderColor: 'var(--border-dark)', color: 'var(--on-dark)' }}>
            <span className="proc-mono__footer-dot" />
            <span>SOLVED IN A FIXED 28-DAY POSITIONING SPRINT · NO RETAINERS · DIRECT FOUNDER DELIVERY</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PainPointsSection;
