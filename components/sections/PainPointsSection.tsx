'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PAIN_POINTS = [
  {
    num: '01',
    title: 'No clear positioning',
    desc: 'You look and sound like every other brand in the room. The product is solid — but nobody can explain why you, not them.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Wasted ad spend',
    desc: 'Campaigns launch before the strategy does. Budget burns fast without a brand foundation — and the numbers never lie about it.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Inconsistent messaging',
    desc: "Your website, pitch deck, and sales calls each tell a different story. Buyers feel the gap even if they can't name it.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Stalled growth',
    desc: "Revenue has plateaued and you know it's a brand problem, not a product problem. The ceiling is real — and it's made of perception.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
  },
];

export function PainPointsSection() {
  return (
    <section className="section pain-section" id="pain">
      <div className="container">
        <motion.div
          className="pain__head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label label--paper" style={{ opacity: 0.6 }}>
            Sound familiar? ·
          </span>
          <h2 className="section__title" style={{ color: 'var(--on-dark)', marginTop: '16px' }}>
            The problem isn&apos;t
            <br />
            the <em>product.</em>
          </h2>
        </motion.div>

        <div className="pain__grid">
          {PAIN_POINTS.map((item, index) => (
            <motion.div
              key={item.num}
              className="pain__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="pain__num">{item.num}</span>
              <div className="pain__icon" aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="pain__title">{item.title}</h3>
              <p className="pain__desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PainPointsSection;
