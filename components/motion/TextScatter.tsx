'use client';

import React, { useState, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
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
}

export function TextScatter({
  text,
  children,
  as: Component = 'span',
  className = '',
  velocity = 18,
  rotation = 10,
  scale = 1.06,
  returnAfter = 400,
}: TextScatterProps) {
  const isMotionAllowed = useMotionAllowed();
  const [isScattered, setIsScattered] = useState(false);
  const scatterTimerRef = useRef<NodeJS.Timeout | null>(null);

  const rawText = useMemo(() => {
    if (typeof text === 'string') return text;
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

  const words = rawText.trim().split(/\s+/);

  return (
    <Component
      className={`scatter-wrap ${className}`}
      onMouseEnter={triggerScatter}
      style={{
        display: 'inline-flex',
        flexWrap: 'wrap',
        alignItems: 'baseline',
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      {words.map((word, wordIdx) => (
        <span
          key={wordIdx}
          className="scatter-word"
          style={{
            display: 'inline-flex',
            whiteSpace: 'nowrap',
            marginRight: wordIdx < words.length - 1 ? '0.28em' : undefined,
          }}
        >
          {word.split('').map((char, charIdx) => {
            const globalIdx = wordIdx * 8 + charIdx;
            const angle = ((globalIdx * 137.5) % 360) * (Math.PI / 180);
            const distance = ((globalIdx % 4) + 1) * (velocity / 3);
            const xOffset = Math.cos(angle) * distance;
            const yOffset = Math.sin(angle) * distance;
            const rot = (globalIdx % 2 === 0 ? 1 : -1) * (rotation * (0.5 + ((globalIdx * 5) % 8) / 8));

            return (
              <motion.span
                key={charIdx}
                className="scatter-char"
                style={{ display: 'inline-block' }}
                initial={false}
                animate={
                  isScattered
                    ? {
                        x: xOffset,
                        y: yOffset,
                        rotate: rot,
                        scale,
                        opacity: 0.95,
                        transition: {
                          type: 'spring',
                          stiffness: 380,
                          damping: 15,
                        },
                      }
                    : {
                        x: 0,
                        y: 0,
                        rotate: 0,
                        scale: 1,
                        opacity: 1,
                        transition: {
                          type: 'spring',
                          stiffness: 260,
                          damping: 22,
                        },
                      }
                }
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </Component>
  );
}
