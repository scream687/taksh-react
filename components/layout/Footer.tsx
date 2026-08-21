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
    <>
      <footer className="footer" id="footer">
        <div className="container">
          <div className="footer__top">
            <div>
              <h2 className="footer__cta">
                Ready to make
                <br />
                your <em>move?</em>
              </h2>
              <a
                className="btn btn--blue magnetic"
                href="mailto:hello@taksh.in"
                style={{ marginTop: '40px', display: 'inline-flex' }}
              >
                Start a project <span className="arrow">→</span>
              </a>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
              <div className="footer__col">
                <h4>Navigation</h4>
                <ul>
                  <li>
                    <a className="magnetic" href="#services">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="magnetic" href="#process">
                      Process
                    </a>
                  </li>
                  <li>
                    <a className="magnetic" href="#industries">
                      Industries
                    </a>
                  </li>
                  <li>
                    <a className="magnetic" href="#team">
                      Team
                    </a>
                  </li>
                  <li>
                    <Link className="magnetic" href="/real-estate">
                      Real Estate
                    </Link>
                  </li>
                  <li>
                    <a className="magnetic" href="#manifesto">
                      Manifesto
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer__col">
                <h4>Socials</h4>
                <ul>
                  <li>
                    <a
                      className="magnetic"
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      className="magnetic"
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      className="magnetic"
                      href="https://read.cv"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read.cv
                    </a>
                  </li>
                  <li>
                    <a
                      className="magnetic"
                      href="https://x.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer__huge">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div className="footer__info">
                <span>India</span>
                <span className="clock" id="clock-foot">
                  {timeString}
                </span>
              </div>
              <a href="#nav" className="footer__back-top magnetic" aria-label="Back to top">
                ↑
              </a>
            </div>

            <div className="footer__logo-wrap">
              <p
                style={{
                  fontSize: 'clamp(80px, 18vw, 320px)',
                  lineHeight: 0.8,
                  letterSpacing: '-0.05em',
                  margin: 0,
                  color: 'var(--on-dark, #FFFFFF)',
                  fontWeight: 700,
                  userSelect: 'none',
                }}
              >
                TΛKSH
              </p>
            </div>

            <div className="footer__bottom-bar">
              <span>© 2026 Taksh Studio. All Rights Reserved.</span>
              <span>Strategy &amp; brand positioning for growth-stage businesses.</span>
              <span style={{ display: 'inline-flex', gap: '16px' }}>
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

      {/* Project Marquee */}
      <section className="project-marquee">
        <div className="project-marquee__track">
          <div className="project-marquee__item">
            Start a project <span className="arrow">→</span>
          </div>
          <div className="project-marquee__item">
            Start a project <span className="arrow">→</span>
          </div>
          <div className="project-marquee__item">
            Start a project <span className="arrow">→</span>
          </div>
          <div className="project-marquee__item">
            Start a project <span className="arrow">→</span>
          </div>
        </div>
        <a href="mailto:hello@taksh.in" className="project-marquee__overlay" aria-label="Start a project" />
      </section>
    </>
  );
}

export default Footer;
