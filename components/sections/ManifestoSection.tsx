'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ScrollRevealSentence } from '@/components/motion/ScrollRevealText';
import { GradualBlur } from '@/components/motion/GradualBlur';

const PRINCIPLES = [
  {
    num: '01',
    lead: 'Precise —',
    italicText: 'never sloppy.',
    rest: "Every word and pixel is intentional. We do not ship rough drafts to clients — we ship unequivocal answers.",
  },
  {
    num: '02',
    lead: 'Confident —',
    italicText: 'never arrogant.',
    rest: "We know what we do and we refuse to oversell it. The work makes the case on its own merit.",
  },
  {
    num: '03',
    lead: 'Minimal —',
    italicText: 'never cold.',
    rest: "Less noise, more signal. If a paragraph or design token has to argue for its own existence, it gets deleted.",
  },
  {
    num: '04',
    lead: 'Sharp —',
    italicText: 'never aggressive.',
    rest: "Direct, clear, no fluff. We do not hide behind consultant jargon — and we will not let your brand do so either.",
  },
  {
    num: '05',
    lead: 'Young —',
    italicText: 'never green.',
    rest: "The relentless pace of a growth founder paired with the tactical clarity of veteran operators.",
  },
  {
    num: '06',
    lead: 'Grounded —',
    italicText: 'built for the world.',
    rest: 'Indian roots, global standards. Engineered for growth-stage businesses competing at international scale.',
  },
];

export function ManifestoSection() {
  return (
    <section className="section section--void" id="manifesto" style={{ position: 'relative' }}>
      {/* Top & Bottom Gradual Scroll Blur */}
      <GradualBlur position="both" height="60px" strength={8} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
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

        {/* Kinetic Scroll-Revealed Principles */}
        <div style={{ marginTop: '32px' }}>
          {PRINCIPLES.map((item) => (
            <ScrollRevealSentence
              key={item.num}
              num={item.num}
              lead={item.lead}
              italicText={item.italicText}
              rest={item.rest}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ManifestoSection;
