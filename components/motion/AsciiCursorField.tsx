'use client';

import React, { useEffect, useRef } from 'react';
import { useMotionAllowed } from './useMotionAllowed';

export interface AsciiCursorFieldProps {
  className?: string;
  charSet?: string;
  cellSize?: number;
  decaySpeed?: number;
  trailRadius?: number;
  color?: string; // Brand blue #2D5BE3
}

interface CellState {
  charIndex: number;
  intensity: number; // 0 to 1
  targetIntensity: number;
}

export function AsciiCursorField({
  className = '',
  charSet = '·+×/\\_~*01TAKSH□◇',
  cellSize = 24,
  decaySpeed = 0.04,
  trailRadius = 90,
  color = '#2D5BE3',
}: AsciiCursorFieldProps) {
  const isMotionAllowed = useMotionAllowed();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isMotionAllowed) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = false;
    let grid: CellState[][] = [];
    let cols = 0;
    let rows = 0;
    const mouse = { x: -9999, y: -9999 };

    const parentSection = container.closest('section') || container;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const resizeGrid = () => {
      const width = container.clientWidth || 300;
      const height = container.clientHeight || 300;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      cols = Math.ceil(width / cellSize);
      rows = Math.ceil(height / cellSize);

      grid = [];
      for (let r = 0; r < rows; r++) {
        const row: CellState[] = [];
        for (let c = 0; c < cols; c++) {
          row.push({
            charIndex: (r * 7 + c * 13) % charSet.length,
            intensity: 0,
            targetIntensity: 0,
          });
        }
        grid.push(row);
      }
    };

    resizeGrid();

    const render = () => {
      if (!isVisible) return;

      const width = container.clientWidth;
      const height = container.clientHeight;

      ctx.clearRect(0, 0, width, height);
      ctx.font = `600 ${Math.floor(cellSize * 0.58)}px 'Inter', monospace, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cell = grid[r]?.[c];
          if (!cell) continue;

          const cx = c * cellSize + cellSize / 2;
          const cy = r * cellSize + cellSize / 2;

          // Check proximity to mouse
          const dx = cx - mouse.x;
          const dy = cy - mouse.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < trailRadius * trailRadius) {
            const dist = Math.sqrt(distSq);
            const proximity = 1 - dist / trailRadius;
            cell.targetIntensity = Math.max(cell.targetIntensity, proximity);
            // Cycle character on direct hover
            if (proximity > 0.6) {
              cell.charIndex = (cell.charIndex + 1) % charSet.length;
            }
          }

          // Smooth intensity approach & decay
          if (cell.targetIntensity > cell.intensity) {
            cell.intensity += (cell.targetIntensity - cell.intensity) * 0.35;
          } else {
            cell.intensity = Math.max(0, cell.intensity - decaySpeed);
          }
          cell.targetIntensity = Math.max(0, cell.targetIntensity - decaySpeed * 0.8);

          if (cell.intensity > 0.01) {
            const char = charSet[cell.charIndex % charSet.length];
            const alpha = Math.min(cell.intensity * 0.75, 0.75);

            ctx.fillStyle = color === '#2D5BE3'
              ? `rgba(45, 91, 227, ${alpha})`
              : color;
            ctx.fillText(char, cx, cy);
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(render);
          } else {
            isVisible = false;
            cancelAnimationFrame(animationFrameId);
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(container);
    parentSection.addEventListener('mousemove', handleMouseMove as EventListener);
    parentSection.addEventListener('mouseleave', handleMouseLeave as EventListener);
    window.addEventListener('resize', resizeGrid);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      parentSection.removeEventListener('mousemove', handleMouseMove as EventListener);
      parentSection.removeEventListener('mouseleave', handleMouseLeave as EventListener);
      window.removeEventListener('resize', resizeGrid);
    };
  }, [isMotionAllowed, charSet, cellSize, decaySpeed, trailRadius, color]);

  if (!isMotionAllowed) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none z-[1] overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
