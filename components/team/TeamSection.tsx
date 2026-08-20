'use client';

import React from 'react';
import './team.css';
import { motion } from 'framer-motion';

export const TEAM_MEMBERS = [
  {
    id: 'rishabh',
    num: '01',
    name: 'Rishabh Sharma',
    role: 'Founder & Creative Director',
    discipline: 'Brand Strategy · Creative Direction',
    tag: 'Founder',
    initials: 'RS',
    bio: 'Directing brand narrative, positioning, and creative vision from first principles to high-velocity market execution.',
    skills: ['Brand Architecture', 'Creative Direction', 'Positioning', 'GTM Strategy'],
  },
  {
    id: 'yogita',
    name: 'Yogita Fulara',
    num: '02',
    role: 'Lead Designer',
    discipline: 'Identity Systems · Visual Design',
    tag: 'Design',
    initials: 'YF',
    bio: 'Crafting bespoke visual identities, typography hierarchies, and cohesive design systems for ambitious companies.',
    skills: ['Identity Systems', 'Art Direction', 'Typography', 'Design Tokens'],
  },
  {
    id: 'tanmay',
    name: 'Tanmay Pania',
    num: '03',
    role: 'Full-Stack Engineer',
    discipline: 'Creative Engineering · Systems',
    tag: 'Engineering',
    initials: 'TP',
    bio: 'Architecting high-performance web applications, motion engines, and production-grade frontend experiences.',
    skills: ['Next.js / React', 'Creative Dev', 'Motion Physics', 'Performance'],
  },
  {
    id: 'ritika',
    name: 'Ritika Fulara',
    num: '04',
    role: 'Brand Strategist',
    discipline: 'GTM Planning · Content Architecture',
    tag: 'Strategy',
    initials: 'RF',
    bio: 'Structuring comprehensive launch frameworks, narrative messaging, and growth-stage brand communications.',
    skills: ['Messaging Strategy', 'GTM Roadmaps', 'Copy Direction', 'Market Research'],
  },
];

const STUDIO_METRICS = [
  { label: 'Studio Composition', value: '4 Senior Specialists' },
  { label: 'Delivery Model', value: '4-Week Fixed Sprints' },
  { label: 'Primary Base', value: 'Vrindavan · India' },
  { label: 'Client Reach', value: 'Global Engagements' },
];

export function TeamSection() {
  return (
    <div className="team-section__inner container">
      {/* Section Head */}
      <motion.div
        className="team-section__head"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="label label--paper">The studio · 05</span>
        <h2 className="team-section__title">
          The people behind the <em>point of view.</em>
        </h2>
        <p className="team-section__sub">
          A lean, multidisciplinary core. No account managers, no layers of junior staff — direct partnership with the practitioners shaping your brand.
        </p>
      </motion.div>

      {/* 2x2 Bento Team Grid */}
      <div className="team-grid">
        {TEAM_MEMBERS.map((member, index) => (
          <motion.article
            key={member.id}
            className="team-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Top Meta */}
            <div className="team-card__meta">
              <span className="team-card__num">{member.num}</span>
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

            {/* Bio */}
            <p className="team-card__bio">{member.bio}</p>

            {/* Skills */}
            <div className="team-card__skills">
              {member.skills.map((skill) => (
                <span key={skill} className="team-card__skill">
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      {/* Footprint Strip */}
      <motion.div
        className="team-footprint"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {STUDIO_METRICS.map((metric) => (
          <div key={metric.label} className="team-footprint__item">
            <span className="team-footprint__label">{metric.label}</span>
            <span className="team-footprint__value">{metric.value}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default TeamSection;
