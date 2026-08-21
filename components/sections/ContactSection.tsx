'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MagnetButton } from '@/components/motion/MagnetButton';
import { BlurText } from '@/components/motion/BlurText';

export function ContactSection() {
  return (
    <section className="contact-cta" id="contact">
      <div className="container">
        <span className="label label--paper">Let&apos;s talk · 07</span>
        <h2 className="contact-cta__title">
          <BlurText text="Let's talk about" delay={0.05} />
          <br />
          <BlurText text="your" delay={0.15} /> <em className="contact-cta__accent">brand.</em>
        </h2>

        <motion.div
          className="contact-cta__row"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="contact-cta__details">
            <div>
              <div className="label label--paper" style={{ marginBottom: '8px' }}>
                Email
              </div>
              <a
                href="mailto:hello@taksh.in"
                style={{ color: 'var(--on-dark, #FFFFFF)', fontSize: '18px', fontWeight: 500 }}
              >
                hello@taksh.in
              </a>
            </div>

            <div>
              <div className="label label--paper" style={{ marginBottom: '8px' }}>
                Web
              </div>
              <a
                href="https://taksh.in"
                style={{ color: 'var(--on-dark, #FFFFFF)', fontSize: '18px', fontWeight: 500 }}
              >
                taksh.in
              </a>
            </div>
          </div>

          <MagnetButton strength={12}>
            <a className="contact-cta__btn" href="mailto:hello@taksh.in">
              Start a project <span style={{ fontSize: '20px' }}>→</span>
            </a>
          </MagnetButton>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
