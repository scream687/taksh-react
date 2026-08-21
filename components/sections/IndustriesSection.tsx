'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TiltedCard } from '@/components/motion/TiltedCard';
import { BlurText } from '@/components/motion/BlurText';

const INDUSTRIES = [
  {
    num: '01',
    name: 'Real Estate',
    tag: 'Primary focus',
    desc: 'Developers, brokers, and property brands ready to stop looking like every other listing on the page.',
    link: '/real-estate',
    isPrimary: true,
  },
  {
    num: '02',
    name: 'D2C & Retail',
    desc: 'Product companies crossing from founder-led to brand-led — before paid spend stops working.',
    isPrimary: false,
  },
  {
    num: '03',
    name: 'Services',
    desc: 'Studios, clinics, firms that sell outcomes, not hours — and need the positioning to prove it.',
    isPrimary: false,
  },
  {
    num: '04',
    name: 'Founders',
    desc: 'Builders who need sharper thinking before the next deck, hire, or launch.',
    isPrimary: false,
  },
];

export function IndustriesSection() {
  return (
    <section className="section" id="industries">
      <div className="container">
        {/* Section Head */}
        <motion.div
          className="section__head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label">Who we serve · 04</span>
          <h2 className="section__title">
            <BlurText text="Built for brands that have" delay={0.05} /> <em>outgrown</em>
            <br />
            <BlurText text="their first identity." delay={0.15} />
          </h2>
        </motion.div>

        {/* Industries 4-Card Bento */}
        <div className="industries">
          {INDUSTRIES.map((ind, index) => (
            <motion.div
              key={ind.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ display: 'flex' }}
            >
              <TiltedCard
                maxTilt={6}
                className={`industry ${ind.isPrimary ? 'industry--primary' : ''}`}
              >
                <div className="industry__top">
                  <span className="industry__num">{ind.num}</span>
                  {ind.tag && <span className="industry__tag">{ind.tag}</span>}
                </div>
                <div className="industry__name">{ind.name}</div>
                <div className="industry__desc">
                  {ind.desc}
                  {ind.link && (
                    <>
                      {' '}
                      <a
                        href={ind.link}
                        style={{
                          color: 'var(--blue-text, #2D5BE3)',
                          textDecoration: 'underline',
                          textUnderlineOffset: '3px',
                          fontWeight: 500,
                        }}
                      >
                        See how →
                      </a>
                    </>
                  )}
                </div>
              </TiltedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
