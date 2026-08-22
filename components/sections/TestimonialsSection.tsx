'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlurText } from '@/components/motion/BlurText';

export interface Testimonial {
  id: string;
  num: string;
  client: string;
  role: string;
  company: string;
  category: string;
  metric: string;
  outcome: string;
  quote: string;
  sprint: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'vanguard',
    num: '01',
    client: 'Aarav Singhania',
    role: 'Founder & Managing Director',
    company: 'Vanguard Living',
    category: 'Luxury Real Estate',
    metric: '₹42 Cr Pre-Launch Pipeline',
    outcome: '100% Sold Out in 28 Days',
    quote:
      'Taksh completely rewrote our commercial thesis. Instead of competing on price per square foot like every standard builder, our new narrative established an unmatched luxury aura that closed our marquee phase in record time.',
    sprint: 'Real Estate Architecture Sprint',
  },
  {
    id: 'aethel',
    num: '02',
    client: 'Meera Nambiar',
    role: 'Co-Founder & CEO',
    company: 'Aethel Wellness',
    category: 'D2C & Consumer Health',
    metric: '-44% Blended CAC',
    outcome: 'Category Leadership Secured',
    quote:
      'Before Taksh, our customer acquisition cost was climbing because our messaging was indistinguishable from other wellness brands. Taksh delivered a singular, defensible point of view that immediately shifted customer conversion.',
    sprint: 'Brand & GTM Doctrine Sprint',
  },
  {
    id: 'nexus',
    num: '03',
    client: 'Devansh Mehta',
    role: 'Managing Partner',
    company: 'Nexus Horizon Capital',
    category: 'Venture Capital & Advisory',
    metric: 'Series A Repositioning',
    outcome: 'Accelerated Capital Close',
    quote:
      'Taksh is the only strategy studio we recommend across our growth portfolio. They don’t deliver 80-page PDF fluff — they deliver ruthless clarity, razor-sharp messaging, and instant commercial velocity.',
    sprint: 'Executive Positioning Sprint',
  },
  {
    id: 'forma',
    num: '04',
    client: 'Priya Chawla',
    role: 'Principal Architect',
    company: 'Studio Forma',
    category: 'Spatial Design & Architecture',
    metric: '3.4x Average Deal Size',
    outcome: 'International Commission Wins',
    quote:
      'The typographic conviction, brand discipline, and digital craft Taksh engineered elevated our firm into international marquee enterprise bids. The return on engagement was proven within our very first pitch.',
    sprint: 'Identity & Interactive Systems',
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = TESTIMONIALS[activeIndex];

  return (
    <section className="section testimonials-section" id="testimonials" style={{ borderTop: '1px solid var(--border, #E0DDD6)' }}>
      <div className="container">
        {/* Section Head */}
        <div className="section__head">
          <span className="label">Founder Endorsements · 06</span>
          <h2 className="section__title">
            <BlurText text="What happens when the" delay={0.05} />
            <br />
            <em>thinking</em> <BlurText text="gets sharper." delay={0.15} />
          </h2>
        </div>

        {/* Interactive Testimonials Split Canvas */}
        <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginTop: '48px' }}>
          {/* Left Column: Client Selector List */}
          <div className="testimonials-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {TESTIMONIALS.map((t, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`testimonial-tab ${isSelected ? 'is-active' : ''}`}
                  style={{
                    textAlign: 'left',
                    padding: '24px 28px',
                    background: isSelected ? 'var(--white, #FFFFFF)' : 'transparent',
                    border: `1px solid ${isSelected ? 'var(--border, #E0DDD6)' : 'transparent'}`,
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isSelected ? '0 12px 32px rgba(0,0,0,0.04)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '11px', color: isSelected ? 'var(--blue, #2D5BE3)' : 'var(--muted, #888888)', letterSpacing: '0.1em' }}>
                      CLIENT {t.num} · {t.category.toUpperCase()}
                    </span>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--blue, #2D5BE3)', background: 'var(--blue-light, rgba(45,91,227,0.08))', padding: '4px 10px', borderRadius: '999px' }}>
                      {t.metric}
                    </span>
                  </div>
                  <div style={{ fontSize: '19px', fontWeight: 600, color: 'var(--ink, #1A1A1A)' }}>
                    {t.client}
                  </div>
                  <div style={{ fontSize: '14px', color: 'var(--muted, #6E6E6E)', marginTop: '2px' }}>
                    {t.role}, <strong style={{ color: 'var(--ink, #1A1A1A)', fontWeight: 500 }}>{t.company}</strong>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Featured Testimonial Spotlight */}
          <div
            className="testimonial-spotlight"
            style={{
              background: 'var(--white, #FFFFFF)',
              border: '1px solid var(--border, #E0DDD6)',
              borderRadius: '4px',
              padding: 'clamp(32px, 4vw, 56px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}
              >
                <div>
                  {/* Top Sprint Telemetry Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--blue, #2D5BE3)' }} />
                    <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '12px', letterSpacing: '0.08em', color: 'var(--muted, #6E6E6E)', textTransform: 'uppercase' }}>
                      {activeItem.sprint} · VERIFIED OUTCOME
                    </span>
                  </div>

                  {/* Quote Statement */}
                  <blockquote
                    style={{
                      margin: 0,
                      fontSize: 'clamp(20px, 2vw, 28px)',
                      lineHeight: 1.45,
                      color: 'var(--ink, #1A1A1A)',
                      fontWeight: 400,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    &ldquo;{activeItem.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Bottom Verified Impact Pill */}
                <div
                  style={{
                    marginTop: '40px',
                    paddingTop: '24px',
                    borderTop: '1px solid var(--border, #E0DDD6)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--ink, #1A1A1A)' }}>
                      {activeItem.client}
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--muted, #6E6E6E)' }}>
                      {activeItem.role} — {activeItem.company}
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono, monospace)', color: 'var(--blue, #2D5BE3)', fontWeight: 600 }}>
                      {activeItem.outcome}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
