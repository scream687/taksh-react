'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export interface DecryptedTextProps {
  text: string;
  speed?: number;
  className?: string;
  characters?: string;
}

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

export function DecryptedText({
  text,
  speed = 40,
  className = '',
  characters = CHARACTERS,
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-20px' });
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(() =>
        text
          .split('')
          .map((char, index) => {
            if (char === ' ' || index < iteration / 2) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      if (iteration >= text.length * 2) {
        clearInterval(interval);
        setDisplayText(text);
      }
      iteration += 1;
    }, speed);

    return () => clearInterval(interval);
  }, [isInView, text, speed, characters]);

  return (
    <span ref={containerRef} className={className}>
      {displayText}
    </span>
  );
}
