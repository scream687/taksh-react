'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { NumberTicker } from '@/components/motion/NumberTicker';

export function StatsStrip() {
  return (
    <motion.div
      className="stats-strip"
      aria-label="Studio at a glance"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="stats-strip__inner">
        <div className="stats-strip__item">
          <div className="stats-strip__val">
            <NumberTicker value={6} className="stats-strip__num" />
            <span className="stats-strip__suffix">+</span>
          </div>
          <span className="stats-strip__label">Brands shaped</span>
        </div>

        <div className="stats-strip__item">
          <div className="stats-strip__val">
            <span className="stats-strip__num">4</span>
            <span className="stats-strip__suffix">wk</span>
          </div>
          <span className="stats-strip__label">Sprint delivery</span>
        </div>

        <div className="stats-strip__item">
          <div className="stats-strip__val">
            <NumberTicker value={100} className="stats-strip__num" />
            <span className="stats-strip__suffix">%</span>
          </div>
          <span className="stats-strip__label">Fixed-price engagements</span>
        </div>

        <div className="stats-strip__item">
          <div className="stats-strip__val">
            <span className="stats-strip__num">3</span>
          </div>
          <span className="stats-strip__label">Industries served</span>
        </div>
      </div>
    </motion.div>
  );
}

export default StatsStrip;
