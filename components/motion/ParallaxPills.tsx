'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { useMotionAllowed } from './useMotionAllowed';

export interface PillItem {
  id: string | number;
  label: string;
  sublabel?: string;
  tag?: string;
  initials?: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  depth?: number; // 0.2 to 1.5
  rotate?: number;
  background?: string;
  color?: string;
  borderColor?: string;
  isMain?: boolean;
}

export interface ParallaxPillsProps {
  pills: PillItem[];
  backgroundPills?: PillItem[];
  className?: string;
  onPillClick?: (pill: PillItem) => void;
}

export function ParallaxPills({
  pills,
  backgroundPills = [],
  className = '',
  onPillClick,
}: ParallaxPillsProps) {
  const isMotionAllowed = useMotionAllowed();
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Mouse position normalized (-1 to 1)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid pointer parallax
  const springConfig = { damping: 24, stiffness: 180, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !isMotionAllowed) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(nx * 2);
    mouseY.set(ny * 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  if (!isMotionAllowed) {
    return (
      <div className={`parallax-pills-static ${className}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pills.map((pill) => (
            <div
              key={pill.id}
              className="p-5 rounded-lg border border-[#2A2A2A] bg-[#121212] text-[#F5F5F3]"
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="font-semibold text-lg">{pill.label}</span>
                {pill.tag && (
                  <span className="text-[11px] uppercase tracking-wider text-[#2D5BE3] border border-[#2D5BE3]/30 px-2 py-0.5 rounded-full">
                    {pill.tag}
                  </span>
                )}
              </div>
              {pill.sublabel && (
                <p className="text-sm text-[#888888] m-0">{pill.sublabel}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[480px] md:h-[540px] select-none overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Decorative background depth pills */}
      {backgroundPills.map((bp) => {
        const depth = bp.depth || 0.4;
        return (
          <ParallaxPillItem
            key={bp.id}
            item={bp}
            smoothX={smoothX}
            smoothY={smoothY}
            depth={depth}
            isBackground={true}
          />
        );
      })}

      {/* Main Team Interactive Pills */}
      {pills.map((pill) => {
        const depth = pill.depth || 1;
        return (
          <ParallaxPillItem
            key={pill.id}
            item={pill}
            smoothX={smoothX}
            smoothY={smoothY}
            depth={depth}
            isBackground={false}
            onClick={() => onPillClick?.(pill)}
          />
        );
      })}
    </div>
  );
}

function ParallaxPillItem({
  item,
  smoothX,
  smoothY,
  depth,
  isBackground = false,
  onClick,
}: {
  item: PillItem;
  smoothX: MotionValue<number>;
  smoothY: MotionValue<number>;
  depth: number;
  isBackground?: boolean;
  onClick?: () => void;
}) {
  const xOffset = useTransform(smoothX, (val: number) => val * 28 * depth);
  const yOffset = useTransform(smoothY, (val: number) => val * 24 * depth);

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        left: `${item.x}%`,
        top: `${item.y}%`,
        x: xOffset,
        y: yOffset,
        zIndex: isBackground ? 2 : 10,
      }}
      initial={{ opacity: 0, scale: 0.88, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        !isBackground
          ? {
              scale: 1.05,
              zIndex: 30,
              transition: { duration: 0.25 },
            }
          : undefined
      }
      onClick={onClick}
    >
      {isBackground ? (
        <div
          className="px-4 py-2 rounded-full border border-[#2A2A2A]/60 bg-[#141414]/50 backdrop-blur-sm text-[#888888]/60 text-xs font-mono tracking-wider uppercase pointer-events-none"
          style={{
            transform: `rotate(${item.rotate || 0}deg)`,
          }}
        >
          {item.label}
        </div>
      ) : (
        <div
          className="group relative flex items-center gap-3.5 px-5 py-3.5 rounded-full border transition-all duration-300 backdrop-blur-md shadow-2xl"
          style={{
            background: item.background || 'rgba(18, 18, 18, 0.88)',
            borderColor: item.borderColor || 'rgba(255, 255, 255, 0.12)',
            color: item.color || '#F5F5F3',
            transform: `rotate(${item.rotate || 0}deg)`,
            boxShadow: '0 12px 32px -4px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* Avatar / Initials dot */}
          <div className="w-8 h-8 rounded-full bg-[#2D5BE3]/20 border border-[#2D5BE3]/60 flex items-center justify-center text-[12px] font-semibold text-[#F5F5F3] shrink-0 group-hover:bg-[#2D5BE3] group-hover:text-white transition-colors duration-300">
            {item.initials || item.label.slice(0, 2).toUpperCase()}
          </div>

          <div className="flex flex-col pr-1">
            <div className="flex items-center gap-2">
              <span className="font-medium text-[15px] tracking-tight leading-tight group-hover:text-white">
                {item.label}
              </span>
              {item.tag && (
                <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#2D5BE3]/15 text-[#2D5BE3] border border-[#2D5BE3]/30">
                  {item.tag}
                </span>
              )}
            </div>
            {item.sublabel && (
              <span className="text-[12px] text-[#888888] leading-tight mt-0.5 group-hover:text-[#AAAAAA] transition-colors">
                {item.sublabel}
              </span>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}
