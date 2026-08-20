'use client';

import React, { useRef, useCallback } from 'react';
import './team.css';
import { motion } from 'framer-motion';

export const TEAM_MEMBERS = [
  {
    id: 'rishabh',
    num: '01',
    name: 'Rishabh Sharma',
    role: 'Founder & Creative Director',
    discipline: 'Brand Architecture · Strategic Direction',
    tag: 'Founder',
    initials: 'RS',
    quote: 'Strategy without intent is just noise. We build sharp points of view that endure in the market.',
    skills: ['Brand Architecture', 'Creative Direction', 'Positioning', 'GTM Strategy'],
  },
  {
    id: 'yogita',
    name: 'Yogita Fulara',
    num: '02',
    role: 'Lead Designer',
    discipline: 'Identity Systems · Visual Architecture',
    tag: 'Design',
    initials: 'YF',
    quote: 'Identity is an operating system. Every typeface, grid, and token must communicate with purpose.',
    skills: ['Identity Systems', 'Art Direction', 'Typography', 'Design Tokens'],
  },
  {
    id: 'tanmay',
    name: 'Tanmay Pania',
    num: '03',
    role: 'Full-Stack Engineer',
    discipline: 'Creative Engineering · Systems Architecture',
    tag: 'Engineering',
    initials: 'TP',
    quote: 'Modern interfaces should feel tactile, weightless, and engineered with mathematical precision.',
    skills: ['Next.js / React', 'Creative Dev', 'Motion Physics', 'Performance'],
  },
  {
    id: 'ritika',
    name: 'Ritika Fulara',
    num: '04',
    role: 'Brand Strategist',
    discipline: 'GTM Planning · Narrative Architecture',
    tag: 'Strategy',
    initials: 'RF',
    quote: 'Clear messaging cuts through any crowded market. We align brand narrative directly with growth.',
    skills: ['Messaging Strategy', 'GTM Roadmaps', 'Copy Direction', 'Market Research'],
  },
];

const STUDIO_STANDARDS = [
  { label: 'Studio Model', value: 'Senior Lead Practitioners Only' },
  { label: 'Sprint Cadence', value: '4-Week Fixed-Scope Delivery' },
  { label: 'Studio Base', value: 'Vrindavan · Indian Roots' },
  { label: 'Client Reach', value: 'Global Growth-Stage Brands' },
];

function TeamCardItem({ member, index }: { member: typeof TEAM_MEMBERS[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = `${e.clientX - rect.left}px`;
    const y = `${e.clientY - rect.top}px`;
    cardRef.current.style.setProperty('--mouse-x', x);
    cardRef.current.style.setProperty('--mouse-y', y);
  }, []);

  return (
    <motion.article
      className="team-card-shell"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseMove={handleMouseMove}
    >
      <div ref={cardRef} className="team-card-core">
        <div>
          {/* Top Meta */}
          <div className="team-card__meta">
            <span className="team-card__num">{member.num} / 04</span>
            <span className="team-card__tag">{member.tag}</span>
          </div>

          {/* Profile Row */}
          <div className="team-card__profile">
            <div className="team-card__avatar">{member.initials}</div>
            <div className="team-card__details">
              <h3 className="team-card__name">{member.name}</h3>
              <div className="team-card__role">{member.role}</div>
              <div className="team-card__discipline">{member.discipline}</div>
            </div>
          </div>

          {/* Statement Quote */}
          <blockquote className="team-card__quote">
            &ldquo;{member.quote}&rdquo;
          </blockquote>
        </div>

        {/* Practice Pillar Skills */}
        <div className="team-card__skills">
          {member.skills.map((skill) => (
            <span key={skill} className="team-card__skill">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function TeamSection() {
  return (
    <div className="team-section__inner container">
      {/* Section Head */}
      <motion.div
        className="team-section__head"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="label label--paper">The studio · 05</span>
        <h2 className="team-section__title">
          The people behind the <em>point of view.</em>
        </h2>
        <p className="team-section__sub">
          A lean, senior-led multidisciplinary practice. No account layers, no junior handoffs — direct collaboration with the partners shaping your category position.
        </p>
      </motion.div>

      {/* 2x2 Bento Team Grid */}
      <div className="team-grid">
        {TEAM_MEMBERS.map((member, index) => (
          <TeamCardItem key={member.id} member={member} index={index} />
        ))}
      </div>

      {/* Studio Standards Strip */}
      <motion.div
        className="team-footprint"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {STUDIO_STANDARDS.map((standard) => (
          <div key={standard.label} className="team-footprint__item">
            <span className="team-footprint__label">{standard.label}</span>
            <span className="team-footprint__value">{standard.value}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default TeamSection;
