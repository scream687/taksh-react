'use client';

import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export interface PreviewData {
  title: string;
  category: string;
  output: string;
}

export interface FlowingPreviewProps {
  activePreview: PreviewData | null;
}

export function FlowingPreview({ activePreview }: FlowingPreviewProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 22, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX + 24);
      mouseY.set(e.clientY - 40);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  if (!activePreview) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.2 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x: smoothX,
        y: smoothY,
        pointerEvents: 'none',
        zIndex: 9990,
      }}
      className="flowing-preview__capsule"
    >
      <div
        style={{
          background: 'rgba(13, 13, 13, 0.95)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '10px',
          padding: '16px 20px',
          color: '#FFFFFF',
          minWidth: '240px',
          maxWidth: '300px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.45)',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '9.5px',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#93C5FD',
            }}
          >
            {activePreview.category}
          </span>
          <span style={{ color: '#2D5BE3', fontSize: '11px' }}>● Live</span>
        </div>

        <h4
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '15px',
            fontWeight: 600,
            color: '#FFFFFF',
            margin: 0,
            letterSpacing: '-0.02em',
          }}
        >
          {activePreview.title}
        </h4>

        <div
          style={{
            paddingTop: '6px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            color: 'rgba(245, 245, 243, 0.7)',
          }}
        >
          Artifact: <span style={{ color: '#FFFFFF' }}>{activePreview.output}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default FlowingPreview;
