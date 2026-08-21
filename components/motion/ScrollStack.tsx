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

interface InternalCardWrapperProps {
  index: number;
  total: number;
  rotation: number;
  blurAmount: number;
  itemScale: number;
  baseScale: number;
  topOffset: number;
  containerProgress: MotionValue<number>;
  children: React.ReactNode;
}

const InternalCardWrapper: React.FC<InternalCardWrapperProps> = ({
  index,
  total,
  rotation,
  blurAmount,
  itemScale,
  baseScale,
  topOffset,
  containerProgress,
  children,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Calculate the active scroll range for this card in the stack
  const step = 1 / total;
  const start = index * step;
  const end = Math.min(1, (index + 1) * step);

  // Progressive scale down as newer cards stack on top
  const targetScale = baseScale + index * itemScale;
  const scale = useTransform(
    containerProgress,
    [start, end, 1],
    [1, targetScale, targetScale]
  );

  // Progressive depth blur when covered
  const blurValue = useTransform(
    containerProgress,
    [start, end, 1],
    [0, index === total - 1 ? 0 : blurAmount, index === total - 1 ? 0 : blurAmount]
  );
  const filter = useTransform(blurValue, (v) => (v > 0.1 ? `blur(${v.toFixed(1)}px)` : 'none'));

  // Gentle brightness falloff for authentic depth
  const brightness = useTransform(
    containerProgress,
    [start, end, 1],
    [1, index === total - 1 ? 1 : 0.92, index === total - 1 ? 1 : 0.92]
  );

  return (
    <div
      ref={cardRef}
      className="scroll-stack-sticky-pin"
      style={{
        position: 'sticky',
        top: `calc(${topOffset}px + ${index * 24}px)`,
        zIndex: index + 1,
        marginBottom: index === total - 1 ? '40px' : '45vh',
        width: '100%',
      }}
    >
      <motion.div
        className="scroll-stack-card"
        style={{
          scale,
          filter,
          opacity: brightness,
          rotate: `${rotation}deg`,
          transformOrigin: 'top center',
          willChange: 'transform, filter',
        }}
      >
        {children}
      </motion.div>
    </div>
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
  blurAmount = 2.5,
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
      className={`scroll-stack-scroller ${className}`.trim()}
      style={{
        position: 'relative',
        width: '100%',
        paddingBottom: '60px',
      }}
    >
      <div className="scroll-stack-inner" style={{ position: 'relative', width: '100%' }}>
        {cards.map((child, index) => {
          const rotSign = index % 2 === 0 ? -1 : 1;
          const rotation = rotationAmount ? rotSign * rotationAmount * (1 + index * 0.25) : 0;
          return (
            <InternalCardWrapper
              key={index}
              index={index}
              total={total}
              rotation={rotation}
              blurAmount={blurAmount}
              itemScale={itemScale}
              baseScale={baseScale}
              topOffset={110}
              containerProgress={scrollYProgress}
            >
              {child}
            </InternalCardWrapper>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollStack;
