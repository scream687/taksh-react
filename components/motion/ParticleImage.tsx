'use client';

import React, { useEffect, useRef } from 'react';
import { useMotionAllowed } from './useMotionAllowed';

export interface ParticleImageProps {
  src: string;
  alt?: string;
  className?: string;
  maxParticles?: number;
  particleSize?: number;
  color?: string; // Optional override color (e.g. '#2D5BE3')
  repelRadius?: number;
}

interface Particle {
  originX: number;
  originY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  g: number;
  b: number;
  a: number;
  size: number;
}

export function ParticleImage({
  src,
  alt = 'Particle visual',
  className = '',
  maxParticles = 14000,
  particleSize = 1.8,
  color,
  repelRadius = 85,
}: ParticleImageProps) {
  const isMotionAllowed = useMotionAllowed();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isMotionAllowed) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = false;
    let particles: Particle[] = [];
    const mouse = { x: -9999, y: -9999, active: false };

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
      mouse.active = false;
    };

    const initParticles = () => {
      const width = container.clientWidth || 360;
      const height = container.clientHeight || 360;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      const offCanvas = document.createElement('canvas');
      const offCtx = offCanvas.getContext('2d');
      if (!offCtx) return;

      const imgAspect = (img.width || 1) / (img.height || 1);
      const drawSize = Math.min(width, height) * 0.76;
      let drawW = drawSize;
      let drawH = drawSize;
      if (imgAspect > 1) {
        drawH = drawSize / imgAspect;
      } else {
        drawW = drawSize * imgAspect;
      }

      offCanvas.width = width;
      offCanvas.height = height;

      const offsetX = (width - drawW) / 2;
      const offsetY = (height - drawH) / 2;

      offCtx.clearRect(0, 0, width, height);
      offCtx.drawImage(img, offsetX, offsetY, drawW, drawH);

      const imgData = offCtx.getImageData(0, 0, width, height);
      const data = imgData.data;

      particles = [];
      let step = 3;
      let count = 0;
      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (y * width + x) * 4;
          const alpha = data[index + 3];
          if (alpha > 30) count++;
        }
      }

      if (count > maxParticles) {
        step = Math.ceil(Math.sqrt((count / maxParticles) * (step * step)));
      }

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (y * width + x) * 4;
          let r = data[index];
          let g = data[index + 1];
          let b = data[index + 2];
          const alpha = data[index + 3];

          if (alpha > 30) {
            // For dark logos on dark backgrounds, make particles glowing signal blue / luminous white
            if (r < 60 && g < 60 && b < 60) {
              if (color) {
                // Parse hex or use blue
                r = 45; g = 91; b = 227;
              } else {
                r = 60; g = 110; b = 245; // Glowing brand blue
              }
            }

            const scatterRadius = Math.max(width, height) * 0.85;
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * scatterRadius + 40;

            particles.push({
              originX: x,
              originY: y,
              x: x + Math.cos(angle) * dist,
              y: y + Math.sin(angle) * dist,
              vx: (Math.random() - 0.5) * 2,
              vy: (Math.random() - 0.5) * 2,
              r,
              g,
              b,
              a: Math.max(0.65, alpha / 255),
              size: particleSize * (0.85 + Math.random() * 0.35),
            });
          }
        }
      }
    };

    img.onload = () => {
      initParticles();
      if (isVisible) renderLoop();
    };

    if (img.complete && img.naturalWidth > 0) {
      initParticles();
    }

    const renderLoop = () => {
      if (!isVisible) return;

      const width = container.clientWidth;
      const height = container.clientHeight;

      ctx.clearRect(0, 0, width, height);

      const friction = 0.88;
      const ease = 0.07;
      const mouseRepel = repelRadius;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const dx = p.originX - p.x;
        const dy = p.originY - p.y;
        p.vx += dx * ease;
        p.vy += dy * ease;

        if (mouse.active) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const distSq = mdx * mdx + mdy * mdy;
          if (distSq < mouseRepel * mouseRepel && distSq > 0.01) {
            const dist = Math.sqrt(distSq);
            const force = ((mouseRepel - dist) / mouseRepel) * 7;
            p.vx += (mdx / dist) * force;
            p.vy += (mdy / dist) * force;
          }
        }

        p.vx *= friction;
        p.vy *= friction;
        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${p.a * 0.95})`;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(renderLoop);
          } else {
            isVisible = false;
            cancelAnimationFrame(animationFrameId);
          }
        });
      },
      { threshold: 0.02 }
    );

    observer.observe(container);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (img.complete && img.naturalWidth !== 0) {
        initParticles();
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [src, isMotionAllowed, maxParticles, particleSize, repelRadius, color]);

  if (!isMotionAllowed) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain opacity-25 pointer-events-none filter invert"
        />
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block pointer-events-auto"
        style={{ touchAction: 'none' }}
        aria-hidden="true"
      />
    </div>
  );
}
