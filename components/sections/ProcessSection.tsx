'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from '@/components/motion/ScrollStack';

export const SPRINT_PHASES = [
  {
    num: '01',
    phase: 'PHASE 01',
    week: 'WEEK 01 · DIAGNOSTICS',
    name: 'Interrogate & Diagnose',
    thesis: 'We extract the unvarnished truth before writing a single word of positioning.',
    body: 'Most agency briefs are polite fictions. We bypass the marketing assumptions and go straight to the tension: 1-on-1 interviews with your founders, churn analysis, sales-call teardowns, and deep competitive scanning to locate where category messages currently fail.',
    artifact: 'The Tension Matrix & Founder Thesis',
    format: '30-Page Analytical Dossier',
  },
  {
    num: '02',
    phase: 'PHASE 02',
    week: 'WEEK 02 · POSITIONING',
    name: 'Carve & Articulate',
    thesis: 'The single sentence that holds your entire commercial strategy together.',
    body: 'We strip away category jargon and build your core narrative pillars. Who are you exclusively built for? What category orthodoxy do you reject? Why is choosing your competitor an active compromise? We establish the sharp commercial conviction that makes every next hire and product decision obvious.',
    artifact: 'Category Doctrine & Messaging Pillars',
    format: 'Core Narrative Framework',
  },
  {
    num: '03',
    phase: 'PHASE 03',
    week: 'WEEK 03 · IDENTITY SYSTEM',
    name: 'Shape & Systemize',
    thesis: 'A living design language engineered for instant category recognition.',
    body: 'Strategy without visual authority is invisible. We translate the narrative into a production identity system: bespoke typographic scale, calibrated color tokens, layout geometry, and high-impact digital collateral designed to stand out against monochromatic competitors.',
    artifact: 'Tokenized Identity & Design Tokens',
    format: 'Production Figma & Asset Library',
  },
  {
    num: '04',
    phase: 'PHASE 04',
    week: 'WEEK 04 · EXECUTION',
    name: 'Ship & Calibrate',
    thesis: 'Handover with zero ambiguity and 90 days of commercial momentum.',
    body: 'We do not deliver decks that gather dust. We build live marketing assets, walk through every asset with your executive and engineering teams, calibrate initial market feedback, and provide a 90-day roadmap so the team executes with relentless clarity.',
    artifact: 'GTM War-Chest & 90-Day Execution Plan',
    format: 'Market-Ready Launch Kit',
  },
];

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

        {/* Official React Bits ScrollStack */}
        <div style={{ marginTop: '48px', marginBottom: '40px' }}>
          <ScrollStack
            useWindowScroll={true}
            itemDistance={56}
            itemScale={0.03}
            itemStackDistance={26}
            stackPosition="16%"
            scaleEndPosition="8%"
            baseScale={0.88}
            rotationAmount={0.8}
          >
            {SPRINT_PHASES.map((phase) => (
              <ScrollStackItem key={phase.num} itemClassName="proc-stack-item">
                <div className="proc-stack__card-content">
                  {/* Top Phase Header */}
                  <div className="proc-stack__card-top">
                    <div className="proc-stack__num-badge">
                      <span className="proc-stack__num">{phase.num}</span>
                      <span className="proc-stack__week">{phase.week}</span>
                    </div>
                    <div className="proc-stack__live-badge">
                      <span className="proc-stack__dot" />
                      <span>Sprint Milestone</span>
                    </div>
                  </div>

                  {/* Center Content: Headline & Thesis */}
                  <div className="proc-stack__content">
                    <div className="proc-stack__main-col">
                      <h3 className="proc-stack__title">{phase.name}</h3>
                      <blockquote className="proc-stack__thesis">
                        &ldquo;{phase.thesis}&rdquo;
                      </blockquote>
                      <p className="proc-stack__body">{phase.body}</p>
                    </div>

                    {/* Right Artifact Capsule */}
                    <div className="proc-stack__artifact-col">
                      <div className="proc-stack__artifact-box">
                        <span className="proc-stack__artifact-label">Shipped Output</span>
                        <span className="proc-stack__artifact-title">{phase.artifact}</span>
                        <span className="proc-stack__artifact-format">{phase.format}</span>
                      </div>
                    </div>
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
