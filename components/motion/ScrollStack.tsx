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
  rotation: number;
  blurAmount: number;
  progress: MotionValue<number>;
  children: React.ReactNode;
}

const PinnedCard: React.FC<PinnedCardProps> = ({
  index,
  total,
  rotation,
  blurAmount,
  progress,
  children,
}) => {
  const isFirst = index === 0;

  // Staggered pacing for 4 cards across the scroll track:
  // Card 0: 0.0 -> 0.22
  // Card 1: enters 0.20 -> 0.46, lands at y = 24px
  // Card 2: enters 0.46 -> 0.72, lands at y = 48px
  // Card 3: enters 0.72 -> 0.96, lands at y = 72px
  const enterStart = isFirst ? 0 : 0.20 + (index - 1) * 0.26;
  const enterEnd = isFirst ? 0 : 0.20 + index * 0.26;

  const finalY = index * 24;
  const y = useTransform(
    progress,
    [0, enterStart, enterEnd, 1],
    isFirst ? [0, 0, 0, 0] : [600, 600, finalY, finalY]
  );

  const opacity = useTransform(
    progress,
    [0, enterStart, enterStart + 0.04, 1],
    isFirst ? [1, 1, 1, 1] : [0, 0, 1, 1]
  );

  const scaleEnd = 0.92 + index * 0.02;
  const scale = useTransform(
    progress,
    [enterEnd, 0.96],
    [1, index === total - 1 ? 1 : scaleEnd]
  );

  const blurVal = useTransform(
    progress,
    [enterEnd, 0.96],
    [0, index === total - 1 ? 0 : blurAmount]
  );
  const filter = useTransform(blurVal, (v) => (v > 0.2 ? `blur(${v.toFixed(1)}px)` : 'none'));

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
        opacity,
        filter,
        rotate: `${rotation}deg`,
        transformOrigin: 'top center',
        willChange: 'transform, opacity, filter',
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
  itemScale?: number;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
}

export const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemScale = 0.02,
  baseScale = 0.92,
  rotationAmount = 0.6,
  blurAmount = 1.5,
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
        height: `${total * 80}vh`,
      }}
    >
      {/* Pinned Stage that stays locked in viewport while user scrolls the track */}
      <div
        className="scroll-stack-stage"
        style={{
          position: 'sticky',
          top: 'clamp(90px, 12vh, 120px)',
          width: '100%',
          minHeight: '440px',
          perspective: '1200px',
        }}
      >
        {cards.map((child, index) => {
          const rotSign = index % 2 === 0 ? -1 : 1;
          const rotation = rotationAmount ? rotSign * rotationAmount * (1 + index * 0.2) : 0;
          return (
            <PinnedCard
              key={index}
              index={index}
              total={total}
              rotation={rotation}
              blurAmount={blurAmount}
              progress={scrollYProgress}
            >
              {child}
            </PinnedCard>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollStack;
