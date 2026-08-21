'use client';

import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

export interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glareColor?: string;
}

export function TiltedCard({
  children,
  className = '',
  maxTilt = 8,
  glareColor = 'rgba(45, 91, 227, 0.15)',
}: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rX = ((y - centerY) / centerY) * -maxTilt;
      const rY = ((x - centerX) / centerX) * maxTilt;

      setRotateX(rX);
      setRotateY(rY);
      setGlarePos({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 1,
      });
    },
    [maxTilt]
  );

  const handleMouseLeave = useCallback(() => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <div style={{ perspective: '1000px' }} className={className}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
        }}
        style={{
          transformStyle: 'preserve-3d',
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        {children}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            borderRadius: 'inherit',
            background: `radial-gradient(circle 300px at ${glarePos.x}% ${glarePos.y}%, ${glareColor}, transparent 80%)`,
            opacity: glarePos.opacity,
            transition: 'opacity 0.3s ease',
            zIndex: 10,
          }}
        />
      </motion.div>
    </div>
  );
}
