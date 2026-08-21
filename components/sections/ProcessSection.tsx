'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SPRINT_STEPS = [
  {
    num: '01',
    week: 'WEEK 01',
    name: 'Listen & Diagnose',
    headline: 'Founder alignment & market diagnostics',
    desc: "We ask the uncomfortable questions you've stopped asking yourself. Uncovering the real tension between how you see your product and how the market perceives it.",
    deliverables: ['Founder Deep-Dive', 'Competitive Audit', 'Diagnostic Synthesis'],
  },
  {
    num: '02',
    week: 'WEEK 02',
    name: 'Carve & Position',
    headline: 'Category point-of-view & narrative',
    desc: 'The single sentence that holds everything else together. We carve out your category space, core messaging pillars, and the conviction that makes every next decision obvious.',
    deliverables: ['Category Narrative', 'Messaging Architecture', 'Value Proposition'],
  },
  {
    num: '03',
    week: 'WEEK 03',
    name: 'Shape & Systemize',
    headline: 'Identity system & design hierarchy',
    desc: 'Not an abstract deck — a living system you can immediately deploy. Bespoke typography hierarchy, color rules, and the first live assets that prove the positioning in the wild.',
    deliverables: ['Visual Identity System', 'Design Tokens & Rules', 'Launch Key Assets'],
  },
  {
    num: '04',
    week: 'WEEK 04',
    name: 'Ship & Calibrate',
    headline: 'GTM roadmap & production handover',
    desc: 'Handover with zero ambiguity. We map your first 90 days of go-to-market execution, conduct team walk-throughs, and stay close to calibrate live response.',
    deliverables: ['GTM Launch Roadmap', 'Production Brand Assets', '90-Day Calibration'],
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="section process-section-v2" id="process">
      <div className="container">
        {/* Section Head */}
        <motion.div
          className="section__head"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label">Process · 03</span>
          <h2 className="section__title">
            Four weeks to a<br />
            brand you can <em>defend.</em>
          </h2>
          <p
            style={{
              fontSize: '16.5px',
              color: 'var(--muted, #6E6E6E)',
              maxWidth: '640px',
              lineHeight: '1.6',
              margin: '0',
            }}
          >
            A fixed-price, four-week intensive sprint that takes founders from ambiguous positioning to market-ready conviction.
          </p>
        </motion.div>

        {/* Interactive Sprint Timeline Header */}
        <div className="proc-v2__rail-wrapper" aria-hidden="true">
          <div className="proc-v2__rail-bar">
            <motion.div
              className="proc-v2__rail-progress"
              animate={{ width: `${((activeStep + 1) / SPRINT_STEPS.length) * 100}%` }}
              transition={{ type: 'spring', stiffness: 220, damping: 28 }}
            />
          </div>
        </div>

        {/* 4 Sprint Cards Grid */}
        <div className="proc-v2__grid">
          {SPRINT_STEPS.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <motion.article
                key={step.num}
                className={`proc-v2__card ${isActive ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveStep(index)}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Step Header */}
                <div className="proc-v2__card-top">
                  <div className="proc-v2__num-badge">
                    <span className="proc-v2__num">{step.num}</span>
                    <span className="proc-v2__week">{step.week}</span>
                  </div>
                  <span className="proc-v2__status-dot" />
                </div>

                {/* Main Name & Headline */}
                <h3 className="proc-v2__title">{step.name}</h3>
                <h4 className="proc-v2__subheadline">{step.headline}</h4>

                {/* Narrative Description */}
                <p className="proc-v2__desc">{step.desc}</p>

                {/* Key Deliverables */}
                <div className="proc-v2__deliverables">
                  <span className="proc-v2__deliv-label">Key Outputs</span>
                  <ul className="proc-v2__deliv-list">
                    {step.deliverables.map((item) => (
                      <li key={item} className="proc-v2__deliv-item">
                        <span className="proc-v2__deliv-bullet">↗</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Sprint Guarantee Footer Strip */}
        <div className="proc-v2__guarantee">
          <div className="proc-v2__guarantee-item">
            <span className="proc-v2__guarantee-label">Sprint Timeline</span>
            <span className="proc-v2__guarantee-value">Strict 28 Calendar Days</span>
          </div>
          <div className="proc-v2__guarantee-item">
            <span className="proc-v2__guarantee-label">Engagement Model</span>
            <span className="proc-v2__guarantee-value">100% Fixed Price · Zero Scope Drift</span>
          </div>
          <div className="proc-v2__guarantee-item">
            <span className="proc-v2__guarantee-label">Team Access</span>
            <span className="proc-v2__guarantee-value">Direct Dedicated Slack Channel</span>
          </div>
          <div className="proc-v2__guarantee-item">
            <span className="proc-v2__guarantee-label">Deliverable Format</span>
            <span className="proc-v2__guarantee-value">Production Code, Figma, & Assets</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
