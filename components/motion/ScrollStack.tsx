'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import './ScrollStack.css';

export interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = '',
}) => (
  <div className={`scroll-stack-card-inner ${itemClassName}`.trim()}>{children}</div>
);

interface PinnedCardProps {
  index: number;
  total: number;
  progress: MotionValue<number>;
  children: React.ReactNode;
}

const PinnedCard: React.FC<PinnedCardProps> = ({
  index,
  total,
  progress,
  children,
}) => {
  const isFirst = index === 0;

  // Stagger intervals for 4 cards across scroll track:
  // Card 0: initially in place at y=0, scale=1
  // Card 1: enters 0.12 -> 0.36
  // Card 2: enters 0.36 -> 0.60
  // Card 3: enters 0.60 -> 0.84
  const enterStart = isFirst ? 0 : 0.12 + (index - 1) * 0.24;
  const enterEnd = isFirst ? 0 : 0.12 + index * 0.24;

  const subsequentCards = total - index - 1;
  const targetY = -(subsequentCards * 16);
  const targetScale = Math.max(0.88, 1 - subsequentCards * 0.04);

  const y = useTransform(
    progress,
    isFirst
      ? [0, 0.12, 0.84, 1]
      : [0, enterStart, enterEnd, 0.84, 1],
    isFirst
      ? [0, 0, targetY, targetY]
      : [700, 700, 0, targetY, targetY]
  );

  const scale = useTransform(
    progress,
    isFirst
      ? [0, 0.12, 0.84, 1]
      : [0, enterStart, enterEnd, 0.84, 1],
    isFirst
      ? [1, 1, targetScale, targetScale]
      : [1, 1, 1, targetScale, targetScale]
  );

  return (
    <motion.div
      className="scroll-stack-stage-card"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: index + 1,
        y,
        scale,
        transformOrigin: 'top center',
        willChange: 'transform',
      }}
    >
      <div className="scroll-stack-card">
        {children}
      </div>
    </motion.div>
  );
};

export interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const cards = React.Children.toArray(children);
  const total = cards.length;

  return (
    <div
      ref={containerRef}
      className={`scroll-stack-track ${className}`.trim()}
      style={{
        position: 'relative',
        width: '100%',
        height: `${total * 70}vh`,
      }}
    >
      {/* Pinned Stage that locks below header at top: 105px and stacks cards */}
      <div
        className="scroll-stack-stage"
        style={{
          position: 'sticky',
          top: 'clamp(95px, 12vh, 115px)',
          width: '100%',
          maxWidth: '1080px',
          margin: '0 auto',
          minHeight: '440px',
        }}
      >
        {cards.map((child, index) => (
          <PinnedCard
            key={index}
            index={index}
            total={total}
            progress={scrollYProgress}
          >
            {child}
          </PinnedCard>
        ))}
      </div>
    </div>
  );
};

export default ScrollStack;
