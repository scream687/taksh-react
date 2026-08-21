'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export interface ScrollRevealSentenceProps {
  num: string;
  lead: string;
  italicText: string;
  rest: string;
}

export function ScrollRevealSentence({
  num,
  lead,
  italicText,
  rest,
}: ScrollRevealSentenceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 85%', 'center 50%'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [0.35, 0.75, 1]);
  const color = useTransform(scrollYProgress, [0, 1], ['rgba(245, 245, 243, 0.4)', 'rgba(245, 245, 243, 1)']);
  const x = useTransform(scrollYProgress, [0, 1], [10, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        x,
        position: 'relative',
        padding: '32px 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'grid',
        gridTemplateColumns: 'minmax(60px, 80px) 1fr',
        gap: 'clamp(20px, 3vw, 48px)',
        alignItems: 'baseline',
      }}
      className="manifesto-reveal-row"
    >
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '13px',
          fontWeight: 700,
          color: '#2D5BE3',
          letterSpacing: '0.04em',
        }}
      >
        {num}
      </span>

      <motion.p
        style={{
          color,
          fontSize: 'clamp(20px, 2.3vw, 32px)',
          fontWeight: 500,
          lineHeight: 1.35,
          letterSpacing: '-0.02em',
          margin: 0,
        }}
      >
        {lead}{' '}
        <span
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontStyle: 'italic',
            fontWeight: 400,
            color: '#FFFFFF',
            letterSpacing: '-0.01em',
          }}
        >
          {italicText}
        </span>{' '}
        {rest}
      </motion.p>
    </motion.div>
  );
}

export default ScrollRevealSentence;
