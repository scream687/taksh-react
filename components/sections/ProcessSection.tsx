'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from '@/components/motion/ScrollStack';

export const SPRINT_PHASES = [
  {
    num: '01',
    week: 'WEEK 01 · DIAGNOSTICS',
    name: 'Interrogate & Diagnose',
    thesis: 'Uncovering the tension before writing a single word.',
    points: [
      '1-on-1 Founder & Customer Deep-Dives',
      'Competitor Blindspot & Churn Teardowns',
      'Category Failure Vector Analysis',
    ],
    artifact: 'The Tension Matrix',
    format: '30-Page Analytical Dossier',
  },
  {
    num: '02',
    week: 'WEEK 02 · POSITIONING',
    name: 'Carve & Articulate',
    thesis: 'The single sentence that defends your entire category.',
    points: [
      'Singular Category Point of View',
      'Defensible Messaging Architecture',
      'Anti-Orthodoxy Category Manifesto',
    ],
    artifact: 'Category Doctrine',
    format: 'Core Narrative Framework',
  },
  {
    num: '03',
    week: 'WEEK 03 · IDENTITY SYSTEM',
    name: 'Shape & Systemize',
    thesis: 'A living design language engineered for instant recognition.',
    points: [
      'Bespoke Typographic & Layout Scale',
      'Calibrated Color & Token Architecture',
      'Digital Collateral & Visual Standards',
    ],
    artifact: 'Tokenized Identity',
    format: 'Production Asset Library',
  },
  {
    num: '04',
    week: 'WEEK 04 · EXECUTION',
    name: 'Ship & Calibrate',
    thesis: 'Handover with zero ambiguity and immediate commercial momentum.',
    points: [
      'Production-Ready Launch Kit',
      'Executive & Team Delivery Walkthrough',
      '90-Day Go-to-Market Execution Plan',
    ],
    artifact: 'GTM War-Chest',
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

        {/* Precision Hardware ScrollStack */}
        <div style={{ marginTop: '48px', marginBottom: '40px' }}>
          <ScrollStack
            itemScale={0.02}
            baseScale={0.92}
            rotationAmount={0.6}
            blurAmount={1.5}
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

                  {/* Center Content: Headline, Thesis & 3 Bullet Deliverables */}
                  <div className="proc-stack__content">
                    <div className="proc-stack__main-col">
                      <h3 className="proc-stack__title">{phase.name}</h3>
                      <p className="proc-stack__thesis">
                        &ldquo;{phase.thesis}&rdquo;
                      </p>

                      {/* 3 Ultra-Clean Key Deliverables */}
                      <ul className="proc-stack__points">
                        {phase.points.map((point, i) => (
                          <li key={i} className="proc-stack__point">
                            <span className="proc-stack__point-bullet">✦</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
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
