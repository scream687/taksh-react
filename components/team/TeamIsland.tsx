'use client';

import { useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import TeamSection from './TeamSection';

function subscribe(callback: () => void) {
  window.addEventListener('DOMContentLoaded', callback);
  return () => window.removeEventListener('DOMContentLoaded', callback);
}

function getSnapshot(): HTMLElement | null {
  return typeof document !== 'undefined' ? document.getElementById('team-mount') : null;
}

function getServerSnapshot(): null {
  return null;
}

export default function TeamIsland() {
  const mountNode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!mountNode) {
    return null;
  }

  return createPortal(<TeamSection />, mountNode);
}
