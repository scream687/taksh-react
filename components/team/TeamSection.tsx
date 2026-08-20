'use client';

import React from 'react';
import './team.css';
import { motion } from 'framer-motion';
import { TextScatter } from '@/components/motion/TextScatter';
import { ParticleImage } from '@/components/motion/ParticleImage';
import { AsciiCursorField } from '@/components/motion/AsciiCursorField';
import { ParallaxPills, PillItem } from '@/components/motion/ParallaxPills';

export const TEAM = [
  {
    id: 'rishabh',
    name: 'Rishabh Sharma',
    role: 'Founder',
    discipline: 'Brand Strategy & Creative Direction',
    tag: 'Founder',
    initials: 'RS',
    x: 24,
    y: 28,
    depth: 1.15,
    rotate: -1,
  },
  {
    id: 'yogita',
    name: 'Yogita Fulara',
    role: 'Lead Design', // TODO: Update role if needed
    discipline: 'Identity Systems & Visual Design',
    tag: 'Design',
    initials: 'YF',
    x: 68,
    y: 28,
    depth: 0.95,
    rotate: 1.5,
  },
  {
    id: 'tanmay',
    name: 'Tanmay Pania',
    role: 'Full-Stack Engineer', // TODO: Update role if needed
    discipline: 'Creative Engineering & Systems',
    tag: 'Engineering',
    initials: 'TP',
    x: 28,
    y: 72,
    depth: 1.2,
    rotate: 1,
  },
  {
    id: 'ritika',
    name: 'Ritika Fulara',
    role: 'Brand Strategist', // TODO: Update role if needed
    discipline: 'GTM Planning & Content Architecture',
    tag: 'Strategy',
    initials: 'RF',
    x: 70,
    y: 72,
    depth: 0.85,
    rotate: -1.5,
  },
];

const BACKGROUND_PILLS: PillItem[] = [
  { id: 'bg-1', label: 'Vrindavan · India', x: 8, y: 50, depth: 0.3, rotate: -3 },
  { id: 'bg-2', label: 'Fixed Scope · 4 Wk', x: 82, y: 16, depth: 0.4, rotate: 2 },
  { id: 'bg-3', label: 'Point of View', x: 50, y: 50, depth: 0.25, rotate: 0 },
  { id: 'bg-4', label: 'Studio 2026', x: 82, y: 84, depth: 0.35, rotate: -2 },
];

export function TeamSection() {
  const pills: PillItem[] = TEAM.map((member) => ({
    id: member.id,
    label: member.name,
    sublabel: `${member.role} — ${member.discipline}`,
    tag: member.tag,
    initials: member.initials,
    x: member.x,
    y: member.y,
    depth: member.depth,
    rotate: member.rotate,
    isMain: true,
  }));

  return (
    <div className="team-section__inner container">
      {/* Section Head */}
      <motion.div
        className="team-section__head"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="label label--paper">The studio · 05</span>
        <h2 className="team-section__title">
          <TextScatter text="The people behind the" />{' '}
          <em>
            <TextScatter text="point of view." />
          </em>
        </h2>
      </motion.div>

      {/* Desktop Interactive Stage */}
      <motion.div
        className="team-stage"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Backdrop Particle Visual */}
        <div className="team-stage__backdrop">
          <div className="team-stage__particle-box">
            <ParticleImage
              src="/logo-symbol.png"
              alt="Taksh Symbol"
              maxParticles={16000}
              particleSize={2.0}
              color="#2D5BE3"
            />
          </div>
        </div>

        {/* ASCII Cursor Field overlay */}
        <AsciiCursorField color="#2D5BE3" cellSize={26} />

        {/* Parallax Pills foreground */}
        <ParallaxPills pills={pills} backgroundPills={BACKGROUND_PILLS} />
      </motion.div>

      {/* Mobile & Semantic Accessible Under-layer */}
      <ul className="team-semantic-grid" aria-label="Taksh team members">
        {TEAM.map((member, index) => (
          <li key={member.id} className="team-semantic-card">
            <div className="team-semantic-card__top">
              <span className="team-semantic-card__num">0{index + 1}</span>
              <span className="team-semantic-card__tag">{member.tag}</span>
            </div>
            <div>
              <h3 className="team-semantic-card__name">{member.name}</h3>
              <div className="team-semantic-card__role">{member.role}</div>
            </div>
            <p className="team-semantic-card__discipline">{member.discipline}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamSection;
