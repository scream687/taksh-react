'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Dismiss after short initial brand pulse
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--paper, #F5F5F3)',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '28px',
            pointerEvents: isVisible ? 'auto' : 'none',
          }}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/logo-symbol.png"
              alt="Taksh"
              width={40}
              height={75}
              style={{ width: '40px', height: 'auto', display: 'block' }}
              priority
              suppressHydrationWarning
            />
          </motion.div>

          {/* Progress Indicator Bar */}
          <div
            style={{
              width: '100px',
              height: '2px',
              background: 'rgba(0, 0, 0, 0.08)',
              borderRadius: '9999px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute',
                inset: 0,
                background: 'var(--blue, #2D5BE3)',
                borderRadius: '9999px',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;
