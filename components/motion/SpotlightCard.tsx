'use client';

import React, { useRef, useCallback } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface SpotlightCardProps extends HTMLMotionProps<'article'> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightRadius?: number;
}

export function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(45, 91, 227, 0.15)',
  spotlightRadius = 300,
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cardRef.current.style.setProperty('--mouse-x', `${x}px`);
      cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    },
    []
  );

  return (
    <motion.article
      {...props}
      className={`team-card-shell ${className}`}
      onMouseMove={handleMouseMove}
    >
      <div
        ref={cardRef}
        className="team-card-core"
        style={
          {
            '--spotlight-color': spotlightColor,
            '--spotlight-radius': `${spotlightRadius}px`,
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </motion.article>
  );
}
