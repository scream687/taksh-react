'use client';

import React, { useRef, useState, useCallback, useMemo } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { useMotionAllowed } from './useMotionAllowed';

export interface PillItem {
  id: string;
  label: string;
  sublabel?: string;
  tag?: string;
  initials?: string;
  x: number; // percentage (0-100)
  y: number; // percentage (0-100)
  depth?: number; // 0.2 (slow/deep) to 1.5 (fast/foreground)
  rotate?: number;
  isMain?: boolean;
}

export interface ParallaxPillsProps {
  pills: PillItem[];
  backgroundPills?: PillItem[];
  className?: string;
}

export function ParallaxPills({
  pills,
  backgroundPills = [],
  className = '',
}: ParallaxPillsProps) {
  const isMotionAllowed = useMotionAllowed();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const mouseX = useSpring(0, { stiffness: 120, damping: 20, mass: 0.7 });
  const mouseY = useSpring(0, { stiffness: 120, damping: 20, mass: 0.7 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x * 65);
      mouseY.set(y * 50);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredId(null);
  }, [mouseX, mouseY]);

  const allItems = useMemo(
    () => [
      ...backgroundPills.map((p) => ({ ...p, isMain: false })),
      ...pills.map((p) => ({ ...p, isMain: true })),
    ],
    [pills, backgroundPills]
  );

  if (!isMotionAllowed) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-full ${className}`}
      style={{ position: 'absolute', inset: 0 }}
    >
      {allItems.map((item) => (
        <ParallaxPillItem
          key={item.id}
          item={item}
          mouseX={mouseX}
          mouseY={mouseY}
          isHovered={hoveredId === item.id}
          onHover={() => setHoveredId(item.id)}
          onLeave={() => setHoveredId(null)}
        />
      ))}
    </div>
  );
}

function ParallaxPillItem({
  item,
  mouseX,
  mouseY,
  isHovered,
  onHover,
  onLeave,
}: {
  item: PillItem;
  mouseX: ReturnType<typeof useSpring>;
  mouseY: ReturnType<typeof useSpring>;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const depth = item.depth || 1;
  const xTransform = useTransform(mouseX, (v) => v * depth);
  const yTransform = useTransform(mouseY, (v) => v * depth);

  if (!item.isMain) {
    return (
      <motion.div
        style={{
          left: `${item.x}%`,
          top: `${item.y}%`,
          x: xTransform,
          y: yTransform,
          rotate: item.rotate || 0,
        }}
        className="team-pill--bg"
      >
        <div className="team-pill__chip">{item.label}</div>
      </motion.div>
    );
  }

  return (
    <motion.div
      style={{
        left: `${item.x}%`,
        top: `${item.y}%`,
        x: xTransform,
        y: yTransform,
        rotate: item.rotate || 0,
      }}
      initial={{ opacity: 0, scale: 0.92, y: 16 }}
      animate={{ opacity: 1, scale: isHovered ? 1.04 : 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 24,
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`team-pill ${isHovered ? 'is-hovered' : ''}`}
    >
      <div className="team-pill__card">
        {item.initials && <div className="team-pill__avatar">{item.initials}</div>}
        <div className="team-pill__info">
          <div className="team-pill__row">
            <span className="team-pill__name">{item.label}</span>
            {item.tag && <span className="team-pill__tag">{item.tag}</span>}
          </div>
          {item.sublabel && <span className="team-pill__sub">{item.sublabel}</span>}
        </div>
      </div>
    </motion.div>
  );
}
