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
    // High-Craft Diagnostics Scanner: Radar Crosshairs + Resonance Pulse Wave
    return (
      <div className="proc-ref__icon-frame" title="Diagnostics Resonance & Tension Scan">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Radar Perimeter Circle */}
          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" opacity="0.4" />
          <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          <circle cx="24" cy="24" r="3" fill="currentColor" />
          {/* Crosshairs */}
          <line x1="24" y1="4" x2="24" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="24" y1="38" x2="24" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="4" y1="24" x2="10" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="38" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          {/* Diagnostic Pulse Waveform across center */}
          <path
            d="M8 24H15L18 16L22 32L26 14L30 28L33 24H40"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }
  if (type === 'positioning') {
    // Sharp Category POV Vector Compass & North Star Diamond
    return (
      <div className="proc-ref__icon-frame" title="Category Doctrine & Vector Compass">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer Orbital Ring */}
          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" opacity="0.3" />
          {/* Degree Ticks */}
          <circle cx="24" cy="24" r="15" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 4" opacity="0.6" />
          {/* 8-Point Compass Star */}
          <polygon
            points="24,4 27.5,18.5 42,24 27.5,29.5 24,44 20.5,29.5 6,24 20.5,18.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
            fill="currentColor"
            fillOpacity="0.1"
          />
          {/* Core Needle */}
          <polygon points="24,8 27,24 24,22 21,24" fill="currentColor" />
          <circle cx="24" cy="24" r="2.5" fill="currentColor" />
        </svg>
      </div>
    );
  }
  if (type === 'identity') {
    // 4-Quadrant Living Design System Matrix (Aa glyph, token swatch, geometry, grid)
    return (
      <div className="proc-ref__icon-frame" title="Tokenized Identity & Design Tokens">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Matrix Frame Container */}
          <rect x="6" y="6" width="36" height="36" rx="8" stroke="currentColor" strokeWidth="2" />
          <line x1="24" y1="6" x2="24" y2="42" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
          <line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
          
          {/* Quadrant 1: Typography 'A' glyph */}
          <path d="M12 20L15 11L18 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="13.2" y1="17.5" x2="16.8" y2="17.5" stroke="currentColor" strokeWidth="1.8" />
          
          {/* Quadrant 2: Geometry primitive overlap */}
          <circle cx="33" cy="15" r="4.5" stroke="currentColor" strokeWidth="1.8" />
          <rect x="29" y="11" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
          
          {/* Quadrant 3: Color Palette Token Swatches */}
          <circle cx="12.5" cy="33" r="2.5" fill="currentColor" />
          <circle cx="18.5" cy="33" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          
          {/* Quadrant 4: Layout Grid Nodes */}
          <circle cx="30" cy="30" r="1.5" fill="currentColor" />
          <circle cx="36" cy="30" r="1.5" fill="currentColor" />
          <circle cx="30" cy="36" r="1.5" fill="currentColor" />
          <circle cx="36" cy="36" r="1.5" fill="currentColor" />
        </svg>
      </div>
    );
  }
  // Phase 04 Execution: High-Velocity GTM Rocket Launch
  return (
    <div className="proc-ref__icon-frame" title="GTM Production Launch Kit">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Launch Trajectory Arc */}
        <path d="M8 40C12 36 18 32 26 28" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
        
        {/* Rocket Fuselage */}
        <path
          d="M24 10C27 13 36 21 36 30C33 33 28 34 24 34C20 34 15 33 12 30C12 21 21 13 24 10Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="currentColor"
          fillOpacity="0.08"
        />
        {/* Rocket Porthole */}
        <circle cx="24" cy="22" r="3.5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
        
        {/* Rocket Fins */}
        <path d="M12 26L7 32C7 32 10 34 14 33" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M36 26L41 32C41 32 38 34 34 33" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Thrust Propulsion Flames */}
        <path d="M21 34L24 41L27 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="24" y1="36" x2="24" y2="43" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
        <div style={{ marginTop: '36px', marginBottom: '24px' }}>
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

                  {/* Right Column: Large Bespoke Theme Icon Frame */}
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
