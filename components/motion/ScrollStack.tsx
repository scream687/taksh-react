'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

export interface ScrollStackCardProps {
  index: number;
  total: number;
  rotation?: number;
  children: React.ReactNode;
  scrollYProgress: MotionValue<number>;
  topOffset?: number;
}

export function ScrollStackCard({
  index,
  total,
  rotation = 0,
  children,
  scrollYProgress,
  topOffset = 110,
}: ScrollStackCardProps) {
  // Target scroll range for this specific card
  const step = 1 / total;
  const start = index * step;
  const end = (index + 1) * step;

  // Scale down earlier cards as later cards stack on top
  const scale = useTransform(
    scrollYProgress,
    [start, end, 1],
    [1, 1 - (total - index - 1) * 0.035, 1 - (total - index - 1) * 0.035]
  );

  // Slight brightness dimming as cards get covered
  const brightness = useTransform(
    scrollYProgress,
    [start, end, 1],
    [1, index === total - 1 ? 1 : 0.88, index === total - 1 ? 1 : 0.88]
  );

  // Subtle Y translation offset to create tactile stacking layers
  const translateY = useTransform(
    scrollYProgress,
    [0, start, end],
    [0, 0, (index - (total - 1)) * 4]
  );

  return (
    <div
      style={{
        position: 'sticky',
        top: `${topOffset + index * 18}px`,
        width: '100%',
        marginBottom: index === total - 1 ? 0 : '80px',
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          scale,
          filter: useTransform(brightness, (b) => `brightness(${b})`),
          translateY,
          rotate: `${rotation}deg`,
          transformOrigin: 'top center',
          transition: 'box-shadow 0.3s ease',
        }}
        className="scroll-stack__card-shell"
      >
        {children}
      </motion.div>
    </div>
  );
}

export interface ScrollStackProps {
  children: React.ReactNode[];
  rotations?: number[];
  className?: string;
  topOffset?: number;
}

export function ScrollStack({
  children,
  rotations = [-1.5, 1.8, -1.2, 1.5],
  className = '',
  topOffset = 100,
}: ScrollStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const total = React.Children.count(children);

  return (
    <div
      ref={containerRef}
      className={`scroll-stack__container ${className}`}
      style={{
        position: 'relative',
        paddingBottom: '60px',
      }}
    >
      {React.Children.map(children, (child, index) => {
        const rot = rotations[index % rotations.length] || 0;
        return (
          <ScrollStackCard
            key={index}
            index={index}
            total={total}
            rotation={rot}
            scrollYProgress={scrollYProgress}
            topOffset={topOffset}
          >
            {child}
          </ScrollStackCard>
        );
      })}
    </div>
  );
}

export default ScrollStack;
