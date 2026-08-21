'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SPRINT_PHASES = [
  {
    num: '01',
    week: 'WEEK 01 · DIAGNOSTICS',
    name: 'Interrogate & Diagnose',
    thesis: 'We extract the unvarnished truth before writing a single word of positioning.',
    body: 'Most agency briefs are polite fictions. We bypass the marketing assumptions and go straight to the tension: 1-on-1 interviews with your founders, churn analysis, sales-call teardowns, and deep competitive scanning to locate where category messages currently fail.',
    artifact: 'The Tension Matrix & Founder Thesis',
    format: '30-Page Analytical Dossier',
  },
  {
    num: '02',
    week: 'WEEK 02 · POSITIONING',
    name: 'Carve & Articulate',
    thesis: 'The single sentence that holds your entire commercial strategy together.',
    body: 'We strip away category jargon and build your core narrative pillars. Who are you exclusively built for? What category orthodoxy do you reject? Why is choosing your competitor an active compromise? We establish the sharp commercial conviction that makes every next hire and product decision obvious.',
    artifact: 'Category Doctrine & Messaging Pillars',
    format: 'Core Narrative Framework',
  },
  {
    num: '03',
    week: 'WEEK 03 · IDENTITY SYSTEM',
    name: 'Shape & Systemize',
    thesis: 'A living design language engineered for instant category recognition.',
    body: 'Strategy without visual authority is invisible. We translate the narrative into a production identity system: bespoke typographic scale, calibrated color tokens, layout geometry, and high-impact digital collateral designed to stand out against monochromatic competitors.',
    artifact: 'Tokenized Identity & Design Tokens',
    format: 'Production Figma & Asset Library',
  },
  {
    num: '04',
    week: 'WEEK 04 · EXECUTION',
    name: 'Ship & Calibrate',
    thesis: 'Handover with zero ambiguity and 90 days of commercial momentum.',
    body: 'We do not deliver decks that gather dust. We build live marketing assets, walk through every asset with your executive and engineering teams, calibrate initial market feedback, and provide a 90-day roadmap so the team executes with relentless clarity.',
    artifact: 'GTM War-Chest & 90-Day Execution Plan',
    format: 'Market-Ready Launch Kit',
  },
];

export function ProcessSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="section process-editorial-section" id="process">
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

        {/* Editorial Monograph Rows */}
        <div className="proc-mono__list">
          {SPRINT_PHASES.map((phase, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <motion.article
                key={phase.num}
                className={`proc-mono__row ${isHovered ? 'is-active' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Left Phase Telemetry */}
                <div className="proc-mono__left">
                  <span className="proc-mono__num">{phase.num}</span>
                  <span className="proc-mono__week">{phase.week}</span>
                </div>

                {/* Center Content Column */}
                <div className="proc-mono__center">
                  <h3 className="proc-mono__title">{phase.name}</h3>
                  <blockquote className="proc-mono__thesis">
                    &ldquo;{phase.thesis}&rdquo;
                  </blockquote>
                  <p className="proc-mono__body">{phase.body}</p>
                </div>

                {/* Right Artifact Capsule */}
                <div className="proc-mono__right">
                  <div className="proc-mono__artifact-box">
                    <span className="proc-mono__artifact-label">Shipped Output</span>
                    <span className="proc-mono__artifact-title">{phase.artifact}</span>
                    <span className="proc-mono__artifact-format">{phase.format}</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Studio Standards Note */}
        <motion.div
          className="proc-mono__footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="proc-mono__footer-pill">
            <span className="proc-mono__footer-dot" />
            <span>TWO ENGAGEMENTS PER SPRINT CADENCE · NO JUNIOR LAYERS · FIXED 28-DAY SCOPE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProcessSection;
