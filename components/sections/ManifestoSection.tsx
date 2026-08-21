'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PRINCIPLES = [
  {
    num: '01',
    name: 'Precise',
    not: 'Not sloppy',
    desc: "Every word and pixel is intentional. We don't ship rough drafts to clients — we ship answers.",
  },
  {
    num: '02',
    name: 'Confident',
    not: 'Not arrogant',
    desc: "We know what we do. We don't oversell it. The work makes the case.",
  },
  {
    num: '03',
    name: 'Minimal',
    not: 'Not cold',
    desc: "Less noise, more signal. If a section has to argue for itself, it doesn't belong.",
  },
  {
    num: '04',
    name: 'Sharp',
    not: 'Not aggressive',
    desc: "Direct, clear, no fluff. We don't hide behind jargon — and we won't let your brand either.",
  },
  {
    num: '05',
    name: 'Young',
    not: 'Not immature',
    desc: "Energy of a founder. Thinking of a veteran. We're new but we're not green.",
  },
  {
    num: '06',
    name: 'Grounded',
    not: 'Not pretentious',
    desc: 'Indian roots, global standards. Built for the world.',
  },
];

export function ManifestoSection() {
  return (
    <section className="section section--void" id="manifesto">
      <div className="container">
        {/* Section Head */}
        <motion.div
          className="section__head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label label--paper">Manifesto · 01</span>
          <h2 className="section__title">
            The brand is not a veneer.
            <br />
            It is the <em>operating system.</em>
          </h2>
        </motion.div>

        {/* 6 Principles Grid */}
        <div className="principles">
          {PRINCIPLES.map((item, index) => (
            <motion.div
              key={item.num}
              className="principle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="principle__num">{item.num}</div>
              <div className="principle__name">{item.name}</div>
              <div className="principle__not">{item.not}</div>
              <div className="principle__desc">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ManifestoSection;
