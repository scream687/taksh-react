'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PROCESS_STEPS = [
  {
    num: '01',
    week: 'Week 01',
    name: 'Listen',
    desc: "Founder calls, market scan, customer interviews. We ask the questions you've stopped asking yourself.",
  },
  {
    num: '02',
    week: 'Week 02',
    name: 'Carve',
    desc: 'Positioning, narrative, naming where needed. The sentence that holds everything else together.',
  },
  {
    num: '03',
    week: 'Week 03',
    name: 'Shape',
    desc: 'Identity system, voice guide, the first piece of work that proves it. Not a deck — a thing you can use.',
  },
  {
    num: '04',
    week: 'Week 04',
    name: 'Ship',
    desc: "Handover, GTM plan, and the first 90 days mapped. We don't disappear — we calibrate.",
  },
];

export function ProcessSection() {
  return (
    <section
      className="section process-section"
      id="process"
      style={{
        background: 'var(--white, #FFFFFF)',
        borderTop: '1px solid var(--border, rgba(0,0,0,0.08))',
        borderBottom: '1px solid var(--border, rgba(0,0,0,0.08))',
      }}
    >
      <div className="container">
        {/* Section Head */}
        <motion.div
          className="section__head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label">Process · 03</span>
          <h2 className="section__title">
            Four weeks to a<br />
            brand you can <em>defend.</em>
          </h2>
        </motion.div>

        {/* Process Timeline Wrapper */}
        <div className="process-wrapper">
          <div className="proc-rail" aria-hidden="true">
            <div className="proc-rail__fill" id="proc-fill" />
          </div>

          <div className="process-timeline">
            <div className="process-timeline__line" aria-hidden="true">
              <div className="process-timeline__fill" id="proc-fill-v" />
            </div>

            <div className="process">
              {PROCESS_STEPS.map((step, index) => (
                <motion.div
                  key={step.num}
                  className="process__step"
                  data-step={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="proc-node">
                    <span className="proc-node__num">{step.num}</span>
                    <span className="proc-node__ring" aria-hidden="true" />
                  </div>
                  <div className="proc-body" data-week={step.num} style={{ opacity: 1, transform: 'none' }}>
                    <div className="process__week">{step.week}</div>
                    <div className="process__name">{step.name}</div>
                    <div className="process__desc">{step.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
