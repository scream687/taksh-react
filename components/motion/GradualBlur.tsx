'use client';

import React from 'react';

export interface GradualBlurProps {
  position?: 'top' | 'bottom' | 'both';
  height?: string;
  strength?: number;
  className?: string;
}

export function GradualBlur({
  position = 'top',
  height = '80px',
  strength = 12,
  className = '',
}: GradualBlurProps) {
  return (
    <>
      {(position === 'top' || position === 'both') && (
        <div
          aria-hidden="true"
          className={`gradual-blur gradual-blur--top ${className}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height,
            pointerEvents: 'none',
            zIndex: 20,
            backdropFilter: `blur(${strength}px)`,
            WebkitBackdropFilter: `blur(${strength}px)`,
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          }}
        />
      )}

      {(position === 'bottom' || position === 'both') && (
        <div
          aria-hidden="true"
          className={`gradual-blur gradual-blur--bottom ${className}`}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height,
            pointerEvents: 'none',
            zIndex: 20,
            backdropFilter: `blur(${strength}px)`,
            WebkitBackdropFilter: `blur(${strength}px)`,
            maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
          }}
        />
      )}
    </>
  );
}

export default GradualBlur;
