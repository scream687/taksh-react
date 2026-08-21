'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SERVICES = [
  {
    num: '01',
    name: 'Brand Strategy',
    desc: 'Positioning, narrative, and the architecture that makes every next decision easier.',
  },
  {
    num: '02',
    name: 'Go-to-Market',
    desc: 'Audience, channel, and launch plan — sequenced to actually ship, not just to look good in a deck.',
  },
  {
    num: '03',
    name: 'Content',
    desc: 'Words and assets with a point of view, produced on a rhythm that compounds.',
  },
  {
    num: '04',
    name: 'Consultancy',
    desc: "Founder-level thinking, on retainer, for teams that don't need a full agency.",
  },
  {
    num: '05',
    name: 'Performance',
    desc: 'Paid media and funnel work — judged on revenue, not impressions.',
  },
  {
    num: '06',
    name: 'Positioning',
    desc: "Who you're for, what you stand for, and why it's you — in one sentence you can defend.",
  },
];

export function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="container">
        {/* Section Head */}
        <motion.div
          className="section__head"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label">Services · 02</span>
          <h2 className="section__title">
            Six services.
            <br />
            <em>One</em> standard.
          </h2>
        </motion.div>

        {/* 6 Services Rows */}
        <div className="services">
          {SERVICES.map((service, index) => (
            <motion.a
              key={service.num}
              className="service"
              href="#contact"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="service__num">{service.num}</span>
              <span className="service__name">{service.name}</span>
              <span className="service__desc">{service.desc}</span>
              <span className="service__arrow">→</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
