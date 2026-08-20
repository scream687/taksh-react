'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import TeamSection from './TeamSection';

export default function TeamIsland() {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Schedule state update after mount to safely get portal container
    const id = requestAnimationFrame(() => {
      const el = document.getElementById('team-mount');
      if (el) {
        setMountNode(el);
      }
    });
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mountNode) {
    return null;
  }

  return createPortal(<TeamSection />, mountNode);
}
