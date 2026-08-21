'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface WaitlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistDrawer({ isOpen, onClose }: WaitlistDrawerProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsSubmitted(true);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ display: 'block' }}
          />

          <motion.aside
            className="drawer is-open"
            role="dialog"
            aria-modal="true"
            aria-label="Join the waitlist"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <button
              type="button"
              className="drawer__close"
              onClick={onClose}
              aria-label="Close"
            >
              ×
            </button>

            <span className="drawer__eyebrow">Early access</span>

            <p
              className="drawer__title"
              style={{
                fontSize: 'clamp(28px, 5vw, 42px)',
                fontWeight: 600,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                margin: '12px 0 16px',
                color: 'var(--on-dark, #FFFFFF)',
              }}
            >
              Join the
              <br />
              waitlist.
            </p>

            <p className="drawer__body">
              We&apos;re selective about who we take on. Drop your details and we&apos;ll reach out when the fit looks right.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  type="email"
                  placeholder="Work email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Company / project"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
                <button type="submit">Join the waitlist →</button>
              </form>
            ) : (
              <div
                style={{
                  padding: '24px',
                  background: 'rgba(45, 91, 227, 0.15)',
                  border: '1px solid rgba(45, 91, 227, 0.4)',
                  borderRadius: '8px',
                  color: '#93C5FD',
                  fontSize: '15px',
                  lineHeight: '1.5',
                  marginTop: '16px',
                }}
              >
                You&apos;re on the list. We&apos;ll be in touch within 48 hours.
              </div>
            )}

            <div
              style={{
                marginTop: 'auto',
                paddingTop: '32px',
                borderTop: '1px solid rgba(255, 255, 255, 0.07)',
              }}
            >
              <p
                style={{
                  fontSize: '13px',
                  color: 'rgba(245, 245, 243, 0.62)',
                  marginBottom: '12px',
                }}
              >
                Share with your network
              </p>
              <a
                href="https://taksh.in"
                className="fb-share-btn"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Share Taksh
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default WaitlistDrawer;
