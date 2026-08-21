'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FluidAccordion, AccordionItemData } from '@/components/motion/FluidAccordion';
import { BlurText } from '@/components/motion/BlurText';

const FAQ_ITEMS: AccordionItemData[] = [
  {
    id: 'faq-1',
    num: '01',
    question: 'How is Taksh different from a typical agency?',
    answer:
      'Most agencies sell production. We sell the thinking that decides what to produce. Every engagement starts with the sentence that holds your brand together — then the work follows. We are small by design, founder-led, and the same person who pitched you will be in your Slack on day 30.',
  },
  {
    id: 'faq-2',
    num: '02',
    question: 'What size of business do you work with?',
    answer:
      'Growth-stage. That means past zero-to-one — you have customers, revenue, and a thing that works — but the brand is the bottleneck. Real-estate developers, D2C brands, services firms, and founders prepping to raise are typical fits.',
  },
  {
    id: 'faq-3',
    num: '03',
    question: 'What does an engagement look like?',
    answer:
      'Four weeks for a positioning + identity sprint. Three months for a full GTM. Or an ongoing retainer if you need a strategy partner on the inside. We send a fixed scope, fixed price, and a published timeline before you sign anything.',
  },
  {
    id: 'faq-4',
    num: '04',
    question: 'Do you do design and execution, or just strategy?',
    answer:
      'Both. Strategy without execution is a PDF. We ship the identity, the site, the first campaign — whatever proves the thinking. You are not handed a deck and a goodbye.',
  },
  {
    id: 'faq-5',
    num: '05',
    question: 'What does it cost?',
    answer:
      'Sprints start at ₹3.5L. Retainers start at ₹1.5L/month. Performance work is scoped to budget. We publish a number with the proposal — no "let\'s get on a call to discuss pricing" theatre.',
  },
  {
    id: 'faq-6',
    num: '06',
    question: 'How do we start?',
    answer:
      'Fill the form below or email Rishabh directly. We reply within 48 hours with either a 30-min intro call or a polite "not the right fit." Both are wins.',
  },
];

export function FAQSection() {
  return (
    <section
      className="section"
      id="faq"
      style={{
        background: 'var(--white, #FFFFFF)',
        borderTop: '1px solid var(--border, rgba(0,0,0,0.08))',
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
          <span className="label">Questions · 06</span>
          <h2 className="section__title">
            <BlurText text="Things people ask" delay={0.05} />
            <br />
            <em>before</em> <BlurText text="they ask." delay={0.15} />
          </h2>
        </motion.div>

        {/* Fluid Animated Accordion */}
        <FluidAccordion items={FAQ_ITEMS} />
      </div>
    </section>
  );
}

export default FAQSection;
