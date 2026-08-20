'use client';

import React from 'react';
import './team.css';
import { TextScatter } from '@/components/motion/TextScatter';
import { ParticleImage } from '@/components/motion/ParticleImage';
import { AsciiCursorField } from '@/components/motion/AsciiCursorField';
import { ParallaxPills, PillItem } from '@/components/motion/ParallaxPills';

// Stated assumption: Only Rishabh's role is confirmed (Founder).
// The other three disciplines are placeholders drawn from the service lines — a four-line edit. Marked TODO.
export const TEAM = [
  {
    id: 'rishabh',
    name: 'Rishabh Sharma',
    role: 'Founder',
    discipline: 'Brand Strategy & Creative Direction',
    tag: 'Founder',
    initials: 'RS',
    x: 10,
    y: 18,
    depth: 1.15,
    rotate: -1.5,
  },
  {
    id: 'yogita',
    name: 'Yogita Fulara',
    role: 'Lead Design', // TODO: Update role if needed
    discipline: 'Identity Systems & Visual Design',
    tag: 'Design',
    initials: 'YF',
    x: 52,
    y: 20,
    depth: 0.95,
    rotate: 2,
  },
  {
    id: 'tanmay',
    name: 'Tanmay Pania',
    role: 'Full-Stack Engineer', // TODO: Update role if needed
    discipline: 'Creative Engineering & Systems',
    tag: 'Engineering',
    initials: 'TP',
    x: 16,
    y: 60,
    depth: 1.2,
    rotate: 1.5,
  },
  {
    id: 'ritika',
    name: 'Ritika Fulara',
    role: 'Brand Strategist', // TODO: Update role if needed
    discipline: 'GTM Planning & Content Architecture',
    tag: 'Strategy',
    initials: 'RF',
    x: 56,
    y: 64,
    depth: 0.85,
    rotate: -2,
  },
];

const BACKGROUND_PILLS: PillItem[] = [
  { id: 'bg-1', label: 'Vrindavan · India', x: 2, y: 44, depth: 0.35, rotate: -4 },
  { id: 'bg-2', label: 'Fixed Scope · 4 Wk', x: 78, y: 12, depth: 0.4, rotate: 3 },
  { id: 'bg-3', label: 'Point of View', x: 40, y: 46, depth: 0.25, rotate: 0 },
  { id: 'bg-4', label: 'Studio 2026', x: 76, y: 78, depth: 0.45, rotate: -2 },
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
      <div className="team-section__head reveal">
        <span className="label label--paper">The studio · 05</span>
        <h2 className="team-section__title reveal kinetic-text">
          <TextScatter text="The people behind the " />
          <em>
            <TextScatter text="point of view." />
          </em>
        </h2>
      </div>

      {/* Desktop interactive stage */}
      <div className="team-section__interactive-area reveal">
        {/* Backdrop Particle Visual (dissolves & reassembles) */}
        <div className="team-section__backdrop">
          <div className="w-[340px] h-[340px] max-w-full">
            <ParticleImage
              src="/logo-symbol.png"
              alt="Taksh Symbol"
              maxParticles={16000}
              particleSize={1.8}
            />
          </div>
        </div>

        {/* ASCII Cursor Field overlay */}
        <AsciiCursorField color="#2D5BE3" cellSize={26} />

        {/* Parallax Pills foreground */}
        <ParallaxPills pills={pills} backgroundPills={BACKGROUND_PILLS} />
      </div>

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
