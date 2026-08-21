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
          {/* Backdrop Overlay with Gaussian Blur */}
          <motion.div
            className="drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.72)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              zIndex: 99990,
            }}
          />

          {/* Luxury Atelier Drawer Modal */}
          <motion.aside
            className="drawer-luxury"
            role="dialog"
            aria-modal="true"
            aria-label="Join the waitlist"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 320 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: '520px',
              background: '#0D0D0D',
              borderLeft: '1px solid rgba(255, 255, 255, 0.09)',
              color: '#F5F5F3',
              zIndex: 99999,
              display: 'flex',
              flexDirection: 'column',
              padding: 'clamp(36px, 5vw, 56px) clamp(28px, 4vw, 48px)',
              boxShadow: '-20px 0 60px rgba(0, 0, 0, 0.6)',
              overflowY: 'auto',
            }}
          >
            {/* Top Close Button */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#2D5BE3',
                    boxShadow: '0 0 10px #2D5BE3',
                    display: 'inline-block',
                  }}
                />
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#93C5FD',
                  }}
                >
                  Early Access · Q3 2026
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close drawer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#FFFFFF',
                  fontSize: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  padding: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                ×
              </button>
            </div>

            {/* Headline & Editorial Copy */}
            <h2
              style={{
                fontSize: 'clamp(32px, 4.5vw, 46px)',
                fontWeight: 600,
                letterSpacing: '-0.035em',
                lineHeight: 1.08,
                color: '#FFFFFF',
                margin: '0 0 16px 0',
              }}
            >
              Join the<br />
              <span style={{ fontStyle: 'italic', fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400 }}>
                waitlist.
              </span>
            </h2>

            <p
              style={{
                fontSize: '15px',
                color: 'rgba(245, 245, 243, 0.72)',
                lineHeight: '1.6',
                margin: '0 0 36px 0',
              }}
            >
              We take on a maximum of two growth-stage engagements per sprint. Drop your details below and our partners will review your fit within 48 hours.
            </p>

            {/* Waitlist Form */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label
                    htmlFor="waitlist-name"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '10.5px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'rgba(255, 255, 255, 0.45)',
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    id="waitlist-name"
                    type="text"
                    placeholder="Rishabh Sharma"
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '8px',
                      padding: '16px 18px',
                      fontSize: '15px',
                      color: '#FFFFFF',
                      outline: 'none',
                      transition: 'border-color 0.2s, background 0.2s, box-shadow 0.2s',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#2D5BE3';
                      e.currentTarget.style.background = 'rgba(45, 91, 227, 0.05)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(45, 91, 227, 0.25)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label
                    htmlFor="waitlist-email"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '10.5px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'rgba(255, 255, 255, 0.45)',
                    }}
                  >
                    Work Email *
                  </label>
                  <input
                    id="waitlist-email"
                    type="email"
                    placeholder="name@company.com"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '8px',
                      padding: '16px 18px',
                      fontSize: '15px',
                      color: '#FFFFFF',
                      outline: 'none',
                      transition: 'border-color 0.2s, background 0.2s, box-shadow 0.2s',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#2D5BE3';
                      e.currentTarget.style.background = 'rgba(45, 91, 227, 0.05)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(45, 91, 227, 0.25)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label
                    htmlFor="waitlist-company"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '10.5px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'rgba(255, 255, 255, 0.45)',
                    }}
                  >
                    Company &amp; Stage (Optional)
                  </label>
                  <input
                    id="waitlist-company"
                    type="text"
                    placeholder="Acme · Series A / Bootstrapped"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '8px',
                      padding: '16px 18px',
                      fontSize: '15px',
                      color: '#FFFFFF',
                      outline: 'none',
                      transition: 'border-color 0.2s, background 0.2s, box-shadow 0.2s',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#2D5BE3';
                      e.currentTarget.style.background = 'rgba(45, 91, 227, 0.05)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(45, 91, 227, 0.25)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    marginTop: '12px',
                    width: '100%',
                    padding: '18px 24px',
                    background: '#2D5BE3',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#1E47C2';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(45, 91, 227, 0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#2D5BE3';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span>Request Priority Access</span>
                  <span style={{ fontSize: '16px' }}>→</span>
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: '32px 24px',
                  background: 'rgba(45, 91, 227, 0.12)',
                  border: '1px solid rgba(45, 91, 227, 0.35)',
                  borderRadius: '12px',
                  color: '#FFFFFF',
                  marginTop: '12px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: '#2D5BE3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    fontSize: '20px',
                  }}
                >
                  ✓
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, margin: '0 0 8px 0' }}>You&apos;re on the priority list</h3>
                <p style={{ fontSize: '14px', color: 'rgba(245, 245, 243, 0.75)', lineHeight: 1.55, margin: 0 }}>
                  We review incoming founder applications every Tuesday and Friday. We&apos;ll be in touch with private sprint availability.
                </p>
              </motion.div>
            )}

            {/* Studio Trust & Confidentiality Footprint */}
            <div
              style={{
                marginTop: 'auto',
                paddingTop: '32px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255, 255, 255, 0.5)', fontSize: '12.5px' }}>
                <span style={{ color: '#2D5BE3' }}>🔒</span>
                <span>Strict Confidentiality · NDA on Request</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.4)' }}>
                <span>Direct Studio Line:</span>
                <a
                  href="mailto:hello@taksh.in"
                  style={{ color: '#93C5FD', textDecoration: 'none', fontWeight: 500 }}
                  onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                >
                  hello@taksh.in ↗
                </a>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default WaitlistDrawer;
