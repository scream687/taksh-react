'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from '@/components/motion/SpotlightCard';

const PAIN_POINTS = [
  {
    num: '01',
    symptom: 'The Invisible Trap',
    lead: 'No clear positioning',
    thesis: 'You look and sound like every other brand in the room.',
    desc: 'The product is solid, but nobody can articulate why you and not them. When category positioning is vague, buyers default to the safest incumbent.',
    tag: 'DIAGNOSTIC: COMMODITY TRAP',
    iconType: 'invisible',
  },
  {
    num: '02',
    symptom: 'The Capital Burn',
    lead: 'Wasted acquisition spend',
    thesis: 'Campaigns launch before the strategy is solved.',
    desc: 'Paid budget burns fast without a defensible category doctrine. Pouring performance marketing into fuzzy messaging only scales your CAC.',
    tag: 'DIAGNOSTIC: CAPITAL DILUTION',
    iconType: 'burn',
  },
  {
    num: '03',
    symptom: 'Narrative Fracturing',
    lead: 'Inconsistent story across touchpoints',
    thesis: 'Deck, website, and sales calls tell three different stories.',
    desc: 'Your executive team says one thing; your marketing says another. Enterprise buyers feel the internal ambiguity even before the first demo ends.',
    tag: 'DIAGNOSTIC: STRATEGIC DRIFT',
    iconType: 'fracture',
  },
  {
    num: '04',
    symptom: 'Perception Bottleneck',
    lead: 'Stalled growth at scale',
    thesis: 'Revenue plateaus despite shipping features at high velocity.',
    desc: "You don't have a product problem — you have a perception ceiling. Market leadership is won on category conviction, not incremental feature releases.",
    tag: 'DIAGNOSTIC: PERCEPTION CEILING',
    iconType: 'ceiling',
  },
];

function RenderPainGraphic({ type }: { type: string }) {
  if (type === 'invisible') {
    return (
      <div className="pain-card__graphic-frame">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="12" stroke="#2D5BE3" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="16" cy="16" r="5" stroke="#2D5BE3" strokeWidth="1.5" />
          <line x1="6" y1="6" x2="26" y2="26" stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  if (type === 'burn') {
    return (
      <div className="pain-card__graphic-frame">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 8L14 18L19 13L28 22" stroke="#2D5BE3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 16V22H22" stroke="#2D5BE3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="28" cy="22" r="3" fill="#EF4444" />
        </svg>
      </div>
    );
  }
  if (type === 'fracture') {
    return (
      <div className="pain-card__graphic-frame">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="7" width="9" height="7" rx="2" stroke="#2D5BE3" strokeWidth="1.5" opacity="0.7" />
          <rect x="18" y="7" width="9" height="7" rx="2" stroke="#2D5BE3" strokeWidth="1.5" opacity="0.7" />
          <rect x="11.5" y="18" width="9" height="7" rx="2" stroke="#2D5BE3" strokeWidth="1.5" />
          <line x1="9.5" y1="14" x2="16" y2="18" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="2 2" />
          <line x1="22.5" y1="14" x2="16" y2="18" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="2 2" />
        </svg>
      </div>
    );
  }
  return (
    <div className="pain-card__graphic-frame">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="5" y1="8" x2="27" y2="8" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M16 26V11" stroke="#2D5BE3" strokeWidth="2" strokeLinecap="round" />
        <polyline points="10 17 16 11 22 17" stroke="#2D5BE3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="8" r="2.5" fill="#EF4444" />
      </svg>
    </div>
  );
}

export function PainPointsSection() {
  return (
    <section className="section section--void pain-section" id="pain">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="pain__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="pain__header-left">
            <span className="label label--paper">Sound familiar? · 02</span>
            <h2 className="section__title" style={{ color: '#F5F5F3', marginTop: '16px' }}>
              The problem isn&apos;t<br />
              the <em>product.</em>
            </h2>
          </div>

          <div className="pain__header-right">
            <p className="pain__header-desc">
              Most growth-stage companies do not suffer from engineering deficits. They suffer from positioning entropy — where market message decays as the product scales.
            </p>
            <div className="pain__live-status">
              <span className="pain__pulse-node" />
              <span>4 CRITICAL POSITIONING BOTTLENECKS IDENTIFIED</span>
            </div>
          </div>
        </motion.div>

        {/* 4-Card High-Craft Diagnostic Bento Grid */}
        <div className="pain__grid">
          {PAIN_POINTS.map((item) => (
            <SpotlightCard
              key={item.num}
              className="pain-card"
              spotlightColor="rgba(45, 91, 227, 0.16)"
            >
              <div className="pain-card__inner">
                {/* Top Row: Symptom Pill, Num & Diagnostic Graphic */}
                <div className="pain-card__top">
                  <div className="pain-card__badge-group">
                    <span className="pain-card__num">{item.num}</span>
                    <span className="pain-card__symptom-pill">{item.symptom}</span>
                  </div>
                  <RenderPainGraphic type={item.iconType} />
                </div>

                {/* Center: Core Lead & Italic Thesis */}
                <div className="pain-card__content">
                  <h3 className="pain-card__lead">{item.lead}</h3>
                  <p className="pain-card__thesis">
                    &ldquo;{item.thesis}&rdquo;
                  </p>
                  <p className="pain-card__desc">{item.desc}</p>
                </div>

                {/* Bottom: Monospace Diagnostic Telemetry Tag */}
                <div className="pain-card__footer">
                  <span className="pain-card__tag">{item.tag}</span>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Bottom Strategic Solution Bridge */}
        <div className="pain__footer-bridge">
          <div className="proc-mono__footer-pill" style={{ background: '#141414', borderColor: 'var(--border-dark)', color: 'var(--on-dark)' }}>
            <span className="proc-mono__footer-dot" />
            <span>SOLVED IN A FIXED 28-DAY SPRINT · ZERO RETAINERS · DIRECT FOUNDER ACCESS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PainPointsSection;
