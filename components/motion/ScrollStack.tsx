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

  // Segment thresholds for 4 cards:
  // Card 0: initially visible (0.0), scales down starting at 0.20
  // Card 1: enters 0.20 -> 0.45, lands at y = 24px
  // Card 2: enters 0.45 -> 0.70, lands at y = 48px
  // Card 3: enters 0.70 -> 0.95, lands at y = 72px
  const enterStart = isFirst ? 0 : 0.2 + (index - 1) * 0.25;
  const enterEnd = isFirst ? 0 : 0.2 + index * 0.25;

  const finalY = index * 24;
  const y = useTransform(
    progress,
    [0, enterStart, enterEnd, 1],
    isFirst ? [0, 0, 0, 0] : [650, 650, finalY, finalY]
  );

  const opacity = useTransform(
    progress,
    [0, enterStart, enterStart + 0.06, 1],
    isFirst ? [1, 1, 1, 1] : [0, 0, 1, 1]
  );

  const scaleEnd = 0.88 + index * 0.03;
  const scale = useTransform(
    progress,
    [enterEnd, 0.95],
    [1, index === total - 1 ? 1 : scaleEnd]
  );

  const blurVal = useTransform(
    progress,
    [enterEnd, 0.95],
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
  itemScale = 0.03,
  baseScale = 0.88,
  rotationAmount = 0.8,
  blurAmount = 2.0,
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
        height: `${Math.max(260, total * 75)}vh`,
      }}
    >
      {/* Pinned Stage that stays locked in viewport while user scrolls the track */}
      <div
        className="scroll-stack-stage"
        style={{
          position: 'sticky',
          top: '110px',
          width: '100%',
          minHeight: '480px',
          perspective: '1200px',
        }}
      >
        {cards.map((child, index) => {
          const rotSign = index % 2 === 0 ? -1 : 1;
          const rotation = rotationAmount ? rotSign * rotationAmount * (1 + index * 0.25) : 0;
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
