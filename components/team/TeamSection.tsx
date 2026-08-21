'use client';

import React, { useState } from 'react';
import './team.css';
import { motion } from 'framer-motion';
import { BlurText } from '@/components/motion/BlurText';

export const TEAM_MEMBERS = [
  {
    id: 'rishabh',
    num: '01',
    name: 'Rishabh Sharma',
    initials: 'RS',
    quote: 'Strategy without intent is just noise. We build points of view that outlast market cycles.',
    social: 'https://linkedin.com',
  },
  {
    id: 'yogita',
    num: '02',
    name: 'Yogita Fulara',
    initials: 'YF',
    quote: 'Every typeface, grid, and token must communicate with deliberate aesthetic conviction.',
    social: 'https://linkedin.com',
  },
  {
    id: 'tanmay',
    num: '03',
    name: 'Tanmay Pania',
    initials: 'TP',
    quote: 'Digital spaces should feel tactile, weightless, and engineered with mathematical precision.',
    social: 'https://linkedin.com',
  },
  {
    id: 'ritika',
    num: '04',
    name: 'Ritika Fulara',
    initials: 'RF',
    quote: 'Clear messaging cuts through any crowded category. Narrative directly drives compounding growth.',
    social: 'https://linkedin.com',
  },
  {
    id: 'bhavit',
    num: '05',
    name: 'Bhavit Rao',
    initials: 'BR',
    role: 'Web Developer',
    quote: 'High-performance interactive web systems built to translate sharp positioning into flawless digital craft.',
    social: 'https://linkedin.com',
  },
];

export function TeamSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="section section--void team-roster-section" id="team">
      <div className="container">
        {/* Section Head */}
        <motion.div
          className="team-roster__head"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label label--paper">The studio · 05</span>
          <h2 className="team-roster__title">
            <BlurText text="The people behind the" delay={0.05} /> <em>point of view.</em>
          </h2>
        </motion.div>

        {/* Editorial Roster List */}
        <div className="team-roster__list">
          {TEAM_MEMBERS.map((member, index) => {
            const isHovered = hoveredId === member.id;
            return (
              <motion.article
                key={member.id}
                className={`team-roster__row ${isHovered ? 'is-hovered' : ''}`}
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Background Artistic Initials Watermark */}
                <span className="team-roster__watermark" aria-hidden="true">
                  {member.initials}
                </span>

                {/* Left Telemetry Number */}
                <div className="team-roster__index">
                  <span className="team-roster__num">{member.num}</span>
                  <span className="team-roster__total">/ 05</span>
                </div>

                {/* Main Content: Name, Role & Italic Conviction */}
                <div className="team-roster__main">
                  <div className="team-roster__name-wrap">
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                      <h3 className="team-roster__name">{member.name}</h3>
                      {'role' in member && (
                        <span style={{ fontSize: '13px', color: 'var(--blue, #2D5BE3)', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                          {member.role}
                        </span>
                      )}
                    </div>
                    <a
                      href={member.social}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-roster__link"
                      aria-label={`Connect with ${member.name}`}
                    >
                      <span className="team-roster__link-text">Connect</span>
                      <span className="team-roster__link-arrow">↗</span>
                    </a>
                  </div>

                  <blockquote className="team-roster__quote">
                    &ldquo;{member.quote}&rdquo;
                  </blockquote>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
