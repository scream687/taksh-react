'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface WaitlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistDrawer({ isOpen, onClose }: WaitlistDrawerProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', focus: 'Brand Positioning & GTM' });

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
            aria-label="Schedule a strategy call"
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
                  Direct Partner Booking · Q3 2026
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
              Schedule a<br />
              <span style={{ fontStyle: 'italic', fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400 }}>
                strategy call.
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
              Direct 30-minute diagnostic session with Taksh partners. We&apos;ll audit your current positioning, identify market bottlenecks, and map your 28-day sprint roadmap.
            </p>

            {/* Booking Form */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label
                    htmlFor="booking-name"
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
                    id="booking-name"
                    type="text"
                    placeholder="Rishabh Sharma"
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    style={{
                      padding: '14px 18px',
                      background: '#141414',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '4px',
                      color: '#FFFFFF',
                      fontSize: '15px',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#2D5BE3')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label
                    htmlFor="booking-email"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '10.5px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'rgba(255, 255, 255, 0.45)',
                    }}
                  >
                    Executive Work Email *
                  </label>
                  <input
                    id="booking-email"
                    type="email"
                    placeholder="founder@company.com"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    style={{
                      padding: '14px 18px',
                      background: '#141414',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '4px',
                      color: '#FFFFFF',
                      fontSize: '15px',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#2D5BE3')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label
                    htmlFor="booking-company"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '10.5px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'rgba(255, 255, 255, 0.45)',
                    }}
                  >
                    Company / Venture *
                  </label>
                  <input
                    id="booking-company"
                    type="text"
                    placeholder="e.g. Vanguard Living / Series A D2C"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{
                      padding: '14px 18px',
                      background: '#141414',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '4px',
                      color: '#FFFFFF',
                      fontSize: '15px',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#2D5BE3')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label
                    htmlFor="booking-focus"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '10.5px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'rgba(255, 255, 255, 0.45)',
                    }}
                  >
                    Primary Focus Area
                  </label>
                  <select
                    id="booking-focus"
                    value={formData.focus}
                    onChange={(e) => setFormData({ ...formData, focus: e.target.value })}
                    style={{
                      padding: '14px 18px',
                      background: '#141414',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '4px',
                      color: '#FFFFFF',
                      fontSize: '15px',
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="Brand Positioning & GTM">Brand Positioning &amp; GTM</option>
                    <option value="Real Estate Architecture Sprint">Real Estate Architecture Sprint</option>
                    <option value="28-Day Identity & Digital System">28-Day Identity &amp; Digital System</option>
                    <option value="Executive Strategy Retainer">Executive Strategy Retainer</option>
                  </select>
                </div>

                <button
                  type="submit"
                  style={{
                    marginTop: '12px',
                    padding: '16px 28px',
                    background: '#2D5BE3',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '15px',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#406EF5';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#2D5BE3';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Confirm Appointment Request <span>→</span>
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: '32px 24px',
                  background: 'rgba(45, 91, 227, 0.12)',
                  border: '1px solid #2D5BE3',
                  borderRadius: '6px',
                  textAlign: 'center',
                  marginTop: '20px',
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>✓</div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#FFFFFF', margin: '0 0 8px 0' }}>
                  Appointment Requested
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(245, 245, 243, 0.8)', lineHeight: 1.5, margin: '0 0 20px 0' }}>
                  Thank you, {formData.name}. Our partners will review your requirements and send a calendar invitation to {formData.email} within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  style={{
                    padding: '10px 24px',
                    background: '#FFFFFF',
                    color: '#0D0D0D',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Close Window
                </button>
              </motion.div>
            )}

            {/* Bottom Security / Direct SLA Badge */}
            <div
              style={{
                marginTop: 'auto',
                paddingTop: '32px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <span style={{ fontSize: '12px', fontFamily: "'JetBrains Mono', monospace", color: 'rgba(255, 255, 255, 0.45)' }}>
                CONFIDENTIAL · 24-HR SLA · STRICT BILATERAL NDA
              </span>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default WaitlistDrawer;
