'use client';

import React, { useState, useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMotionAllowed } from './useMotionAllowed';

export interface TextScatterProps {
  text?: string;
  children?: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  velocity?: number;
  rotation?: number;
  scale?: number;
  returnAfter?: number;
  duration?: number;
  stagger?: number;
}

export function TextScatter({
  text,
  children,
  as: Component = 'span',
  className = '',
  velocity = 28,
  rotation = 18,
  scale = 1.15,
  returnAfter = 500,
  duration = 0.5,
  stagger = 0.02,
}: TextScatterProps) {
  const isMotionAllowed = useMotionAllowed();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [isScattered, setIsScattered] = useState(false);
  const scatterTimerRef = useRef<NodeJS.Timeout | null>(null);

  const rawText = useMemo(() => {
    if (text) return text;
    if (typeof children === 'string') return children;
    return '';
  }, [text, children]);

  if (!isMotionAllowed || !rawText) {
    return <Component className={className}>{children || text}</Component>;
  }

  const triggerScatter = () => {
    setIsScattered(true);
    if (scatterTimerRef.current) clearTimeout(scatterTimerRef.current);
    if (returnAfter > 0) {
      scatterTimerRef.current = setTimeout(() => {
        setIsScattered(false);
      }, returnAfter);
    }
  };

  const characters = rawText.split('');

  return (
    <Component
      ref={ref}
      className={`inline-block cursor-default select-none ${className}`}
      onMouseEnter={triggerScatter}
    >
      {characters.map((char, index) => {
        if (char === ' ') {
          return <span key={index}>&nbsp;</span>;
        }

        // Deterministic angle & distance offsets per character
        const angle = ((index * 137.5) % 360) * (Math.PI / 180);
        const distance = ((index % 5) + 1) * (velocity / 3.5);
        const xOffset = Math.cos(angle) * distance;
        const yOffset = Math.sin(angle) * distance;
        const rot = (index % 2 === 0 ? 1 : -1) * (rotation * (0.4 + ((index * 7) % 10) / 10));
        const scl = 1 + (((index * 3) % 5) / 10) * (scale - 1);

        return (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ opacity: 0, y: 14 }}
            animate={
              isScattered
                ? {
                    x: xOffset,
                    y: yOffset,
                    rotate: rot,
                    scale: scl,
                    opacity: 0.9,
                    transition: {
                      type: 'spring',
                      stiffness: 340,
                      damping: 14,
                      duration,
                    },
                  }
                : inView
                ? {
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                    opacity: 1,
                    transition: {
                      type: 'spring',
                      stiffness: 220,
                      damping: 22,
                      delay: index * stagger,
                      duration,
                    },
                  }
                : { opacity: 0, y: 14 }
            }
          >
            {char}
          </motion.span>
        );
      })}
    </Component>
  );
}
