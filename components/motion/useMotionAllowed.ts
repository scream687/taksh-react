'use client';

import { useState, useEffect } from 'react';

/**
 * Single mobile / a11y switch.
 * Returns false on prefers-reduced-motion: reduce,
 * on (pointer: coarse), or below 768px viewport width.
 */
export function useMotionAllowed(): boolean {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const checkAllowed = () => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isCoarse = window.matchMedia('(pointer: coarse)').matches;
      const isSmallScreen = window.innerWidth < 768;
      setAllowed(!prefersReduced && !isCoarse && !isSmallScreen);
    };

    checkAllowed();

    const mediaReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mediaPointer = window.matchMedia('(pointer: coarse)');

    const handleChange = () => checkAllowed();

    if (mediaReduced.addEventListener) {
      mediaReduced.addEventListener('change', handleChange);
      mediaPointer.addEventListener('change', handleChange);
    } else {
      mediaReduced.addListener(handleChange);
      mediaPointer.addListener(handleChange);
    }

    window.addEventListener('resize', handleChange);

    return () => {
      if (mediaReduced.removeEventListener) {
        mediaReduced.removeEventListener('change', handleChange);
        mediaPointer.removeEventListener('change', handleChange);
      } else {
        mediaReduced.removeListener(handleChange);
        mediaPointer.removeListener(handleChange);
      }
      window.removeEventListener('resize', handleChange);
    };
  }, []);

  return allowed;
}
