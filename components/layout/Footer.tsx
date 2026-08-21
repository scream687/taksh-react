'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export function Footer() {
  const [timeString, setTimeString] = useState<string>('—');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        };
        setTimeString(now.toLocaleTimeString('en-GB', options) + ' IST');
      } catch {
        setTimeString('14:00:00 IST');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer" id="footer" style={{ background: '#000000', color: '#FFFFFF', paddingTop: '60px', paddingBottom: '40px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="container">
        <div className="footer__huge">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
            <div className="footer__info" style={{ display: 'flex', alignItems: 'center', gap: '16px', fontFamily: 'var(--font-mono, monospace)', fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)' }}>
              <span>India</span>
              <span className="clock" id="clock-foot" style={{ color: '#FFFFFF', fontWeight: 500 }}>
                {timeString}
              </span>
            </div>
            <a
              href="#nav"
              className="footer__back-top magnetic"
              aria-label="Back to top"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                textDecoration: 'none',
                fontSize: '18px',
                transition: 'all 0.2s',
              }}
            >
              ↑
            </a>
          </div>

          {/* Monumental Taksh Wordmark */}
          <div className="footer__logo-wrap" style={{ textAlign: 'center', margin: '40px 0' }}>
            <p
              style={{
                fontSize: 'clamp(80px, 18vw, 320px)',
                lineHeight: 0.8,
                letterSpacing: '-0.05em',
                margin: 0,
                color: '#FFFFFF',
                fontWeight: 700,
                userSelect: 'none',
              }}
            >
              TΛKSH
            </p>
          </div>

          {/* Bottom Bar */}
          <div
            className="footer__bottom-bar"
            style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              paddingTop: '28px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.55)',
            }}
          >
            <span>© 2026 Taksh Studio. All Rights Reserved.</span>
            <span>Strategy &amp; brand positioning for growth-stage businesses.</span>
            <span style={{ display: 'inline-flex', gap: '20px' }}>
              <Link
                className="magnetic"
                href="/terms"
                style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '4px' }}
              >
                Terms
              </Link>
              <Link
                className="magnetic"
                href="/privacy"
                style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '4px' }}
              >
                Privacy
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
