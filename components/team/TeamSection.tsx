'use client';

import React from 'react';
import './team.css';
import { motion } from 'framer-motion';
import { TextScatter } from '@/components/motion/TextScatter';
import { ParallaxPills, type PillItem } from '@/components/motion/ParallaxPills';
import { ParticleImage } from '@/components/motion/ParticleImage';
import { AsciiCursorField } from '@/components/motion/AsciiCursorField';

const BACKGROUND_PILLS: PillItem[] = [
  { id: 'bg-1', label: 'Vrindavan · India', x: 4, y: 6, depth: 0.5, rotate: -3 },
  { id: 'bg-2', label: 'Fixed Scope · 4 Wk', x: 88, y: 16, depth: 0.6, rotate: 2 },
  { id: 'bg-3', label: 'Point of View', x: 78, y: 38, depth: 0.4, rotate: -2 },
  { id: 'bg-4', label: 'Studio 2026', x: 6, y: 52, depth: 0.55, rotate: 3 },
  { id: 'bg-5', label: 'Brand Architecture', x: 90, y: 78, depth: 0.5, rotate: -2 },
];

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

function TeamRow({ member, index }: { member: typeof TEAM_MEMBERS[0]; index: number }) {
  return (
    <motion.article
      className="team-row"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="team-row__index">
        <span className="team-row__num">{member.num} / 04</span>
        <span className="team-row__tag">{member.tag}</span>
      </div>

      <div className="team-row__identity">
        <h3 className="team-row__name">{member.name}</h3>
        <div className="team-row__role">{member.role}</div>
        <div className="team-row__discipline">{member.discipline}</div>
      </div>

      <blockquote className="team-row__quote">
        &ldquo;{member.quote}&rdquo;
      </blockquote>

      <ul className="team-row__skills" aria-label={`${member.name} skills`}>
        {member.skills.map((skill) => (
          <li key={skill} className="team-row__skill">
            {skill}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export function TeamSection() {
  return (
    <div className="team-section__inner container">
      {/* Backdrop FX layer — ambience only, never blocks roster */}
      <div className="team-section__fx" aria-hidden="true">
        <AsciiCursorField color="#2D5BE3" cellSize={22} trailRadius={90} />
        <div className="team-section__fx-particle">
          <ParticleImage
            src="/logo-symbol.png"
            maxParticles={8000}
            particleSize={1.6}
            repelRadius={70}
          />
        </div>
        <ParallaxPills pills={[]} backgroundPills={BACKGROUND_PILLS} />
      </div>

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
          <TextScatter text="The people behind the point of " />
          <em>
            <TextScatter text="view." />
          </em>
        </h2>
        <p className="team-section__sub">
          A lean, senior-led multidisciplinary practice. No account layers, no junior handoffs — direct collaboration with the partners shaping your category position.
        </p>
      </motion.div>

      {/* Editorial Roster */}
      <div className="team-roster">
        {TEAM_MEMBERS.map((member, index) => (
          <TeamRow key={member.id} member={member} index={index} />
        ))}
      </div>
    </div>
  );
}

export default TeamSection;