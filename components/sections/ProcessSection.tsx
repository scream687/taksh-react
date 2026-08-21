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
    tag: 'Tension Matrix & Diagnostic Dossier',
    visualType: 'diagnostics',
  },
  {
    num: '02',
    week: 'WEEK 02 · POSITIONING',
    name: 'Carve & Articulate',
    thesis: 'The single sentence holding strategy together.',
    tag: 'Category Doctrine & Narrative Framework',
    visualType: 'positioning',
  },
  {
    num: '03',
    week: 'WEEK 03 · IDENTITY SYSTEM',
    name: 'Shape & Systemize',
    thesis: 'A living design language for instant category authority.',
    tag: 'Tokenized Identity & Production System',
    visualType: 'identity',
  },
  {
    num: '04',
    week: 'WEEK 04 · EXECUTION',
    name: 'Ship & Calibrate',
    thesis: 'Production handover with zero ambiguity and 90-day momentum.',
    tag: 'GTM War-Chest & 90-Day Execution Kit',
    visualType: 'execution',
  },
];

function RenderCardVisual({ type }: { type: string }) {
  if (type === 'diagnostics') {
    return (
      <div className="proc-studio__card-visual">
        <div className="proc-studio__vis-top">
          <span className="proc-studio__vis-tag">DIAGNOSTIC DOSSIER</span>
          <span className="proc-studio__vis-live">
            <span className="proc-studio__pulse-dot" />
            LIVE
          </span>
        </div>
        <div className="proc-studio__metrics">
          <div className="proc-studio__metric-row">
            <span className="proc-studio__metric-label">Founder Tension</span>
            <span className="proc-studio__metric-val">100% Isolated</span>
          </div>
          <div className="proc-studio__metric-row">
            <span className="proc-studio__metric-label">Churn Blindspot</span>
            <span className="proc-studio__metric-val">Decoded</span>
          </div>
          <div className="proc-studio__metric-row">
            <span className="proc-studio__metric-label">Category Failure</span>
            <span className="proc-studio__metric-val">Audited</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'positioning') {
    return (
      <div className="proc-studio__card-visual">
        <div className="proc-studio__vis-top">
          <span className="proc-studio__vis-tag">CATEGORY DOCTRINE</span>
          <span className="proc-studio__vis-live">
            <span className="proc-studio__pulse-dot" />
            VALIDATED
          </span>
        </div>
        <div className="proc-studio__metrics">
          <div className="proc-studio__metric-row">
            <span className="proc-studio__metric-label">Singular POV</span>
            <span className="proc-studio__metric-val">Defensible</span>
          </div>
          <div className="proc-studio__metric-row">
            <span className="proc-studio__metric-label">Competitor Moat</span>
            <span className="proc-studio__metric-val">Established</span>
          </div>
          <div className="proc-studio__metric-row">
            <span className="proc-studio__metric-label">Commercial Thesis</span>
            <span className="proc-studio__metric-val">Aligned</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'identity') {
    return (
      <div className="proc-studio__card-visual">
        <div className="proc-studio__vis-top">
          <span className="proc-studio__vis-tag">SYSTEM TOKENS</span>
          <span className="proc-studio__vis-live">
            <span className="proc-studio__pulse-dot" />
            PRODUCTION
          </span>
        </div>
        <div className="proc-studio__swatches">
          <div className="proc-studio__swatch" style={{ background: '#2D5BE3' }}>
            <span>Cobalt</span>
          </div>
          <div className="proc-studio__swatch" style={{ background: '#1A1A1A' }}>
            <span>Ink</span>
          </div>
          <div className="proc-studio__swatch" style={{ background: '#E0DDD6', color: '#1A1A1A' }}>
            <span>Border</span>
          </div>
        </div>
        <div className="proc-studio__metric-row" style={{ marginTop: '8px' }}>
          <span className="proc-studio__metric-label">Type System</span>
          <span className="proc-studio__metric-val">Instrument & Inter</span>
        </div>
      </div>
    );
  }

  return (
    <div className="proc-studio__card-visual">
      <div className="proc-studio__vis-top">
        <span className="proc-studio__vis-tag">GTM WAR-CHEST</span>
        <span className="proc-studio__vis-live" style={{ color: '#10B981' }}>
          <span className="proc-studio__pulse-dot" style={{ background: '#10B981', boxShadow: '0 0 8px #10B981' }} />
          READY
        </span>
      </div>
      <div className="proc-studio__metrics">
        <div className="proc-studio__metric-row">
          <span className="proc-studio__metric-label">Figma System</span>
          <span className="proc-studio__metric-val">Handed Over ↗</span>
        </div>
        <div className="proc-studio__metric-row">
          <span className="proc-studio__metric-label">Sprint Timeline</span>
          <span className="proc-studio__metric-val">Fixed 28 Days</span>
        </div>
        <div className="proc-studio__metric-row">
          <span className="proc-studio__metric-label">GTM Execution</span>
          <span className="proc-studio__metric-val">90-Day Trajectory</span>
        </div>
      </div>
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

        {/* Studio-Grade ScrollStack */}
        <div style={{ marginTop: '48px', marginBottom: '32px' }}>
          <ScrollStack>
            {SPRINT_PHASES.map((phase) => (
              <ScrollStackItem key={phase.num} itemClassName="proc-ref-card">
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

                  {/* Right Column: Studio Deliverable Specimen */}
                  <div className="proc-ref__visual-side">
                    <RenderCardVisual type={phase.visualType} />
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
