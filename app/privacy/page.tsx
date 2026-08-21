import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — Taksh Atelier & Commercial Brand Strategy',
  description: 'Our uncompromising commitment to confidentiality, founder privacy, proprietary commercial IP, and data stewardship under international standards.',
  keywords: [
    'Taksh privacy policy',
    'brand consultancy confidentiality',
    'founder IP protection',
    'data privacy India DPDP Act',
    'enterprise brand security',
  ],
  alternates: {
    canonical: 'https://taksh.in/privacy',
  },
  openGraph: {
    title: 'Privacy Policy — Taksh Atelier',
    description: 'Our uncompromising commitment to confidentiality, founder privacy, proprietary commercial IP, and data stewardship.',
    url: 'https://taksh.in/privacy',
    siteName: 'Taksh',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy — Taksh Atelier',
    description: 'Our uncompromising commitment to confidentiality, founder privacy, proprietary commercial IP, and data stewardship.',
  },
};

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy — Taksh Atelier',
  url: 'https://taksh.in/privacy',
  description: 'Privacy Policy and data stewardship standards for Taksh Studio.',
  publisher: {
    '@type': 'Organization',
    name: 'Taksh Studio',
    url: 'https://taksh.in',
    logo: 'https://taksh.in/logo-symbol.png',
  },
  datePublished: '2026-01-01',
  dateModified: '2026-08-20',
};

const SECTIONS = [
  { id: 'doctrine', title: '01. Privacy & Confidentiality Doctrine' },
  { id: 'collection', title: '02. Information We Collect' },
  { id: 'commercial-use', title: '03. How We Utilize Project Intelligence' },
  { id: 'nda-ip', title: '04. Strict Non-Disclosure & Founder IP' },
  { id: 'storage-security', title: '05. Data Infrastructure & Security' },
  { id: 'third-parties', title: '06. Zero Third-Party Monetization' },
  { id: 'rights', title: '07. Founder & Client Legal Rights' },
  { id: 'contact', title: '08. Legal Inquiries & Governance' },
];

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <main className="legal-page">
        {/* Navigation Bar */}
        <header className="legal-nav">
          <div className="container legal-nav__inner">
            <Link href="/" className="legal-nav__back magnetic">
              <span className="arrow">←</span> Return to Studio
            </Link>
            <Link href="/" className="legal-nav__logo" aria-label="Taksh Studio">
              <span className="legal-nav__logo-text">TΛKSH</span>
            </Link>
            <div className="legal-nav__badge">
              <span>DOC REF · PRIVACY-2026</span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="legal-hero">
          <div className="container">
            <div className="legal-hero__meta">
              <span className="label label--paper">Governance · Legal Doctrine</span>
              <span className="legal-hero__date">EFFECTIVE: AUGUST 2026 · VERSION 2.4</span>
            </div>
            <h1 className="legal-hero__title">
              Privacy, Confidentiality &amp;
              <br />
              <em>Data Stewardship.</em>
            </h1>
            <p className="legal-hero__lead">
              We operate with the confidentiality of an elite strategic counsel. We do not sell data, track founders with invasive scripts, or compromise client intelligence under any commercial circumstance.
            </p>
          </div>
        </section>

        {/* Document Grid */}
        <section className="legal-content-section">
          <div className="container legal-grid">
            {/* Sticky Table of Contents */}
            <aside className="legal-sidebar">
              <div className="legal-toc">
                <span className="legal-toc__heading">Table of Contents</span>
                <nav className="legal-toc__nav">
                  {SECTIONS.map((sec) => (
                    <a key={sec.id} href={`#${sec.id}`} className="legal-toc__link">
                      {sec.title}
                    </a>
                  ))}
                </nav>
                <div className="legal-toc__card">
                  <span className="legal-toc__card-label">Direct Legal Contact</span>
                  <p className="legal-toc__card-text">
                    For custom mutual NDAs or compliance inquiries:
                  </p>
                  <a href="mailto:legal@taksh.in" className="legal-toc__card-email">
                    legal@taksh.in →
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Article Body */}
            <article className="legal-article">
              {/* Section 01 */}
              <section id="doctrine" className="legal-block">
                <span className="legal-block__num">01</span>
                <h2 className="legal-block__title">Privacy &amp; Confidentiality Doctrine</h2>
                <p>
                  Taksh (&ldquo;Taksh Studio&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) provides commercial positioning, brand architecture, and go-to-market systems for high-growth enterprises and category leaders. Because our work touches core commercial strategy, unannounced capital rounds, unpublished IP, and strategic roadmaps, confidentiality is not a policy add-on — it is our baseline operational architecture.
                </p>
                <p>
                  This Privacy Policy delineates our uncompromising protocol regarding the collection, handling, storage, and protection of information provided via our digital touchpoints and during client engagements.
                </p>
              </section>

              {/* Section 02 */}
              <section id="collection" className="legal-block">
                <span className="legal-block__num">02</span>
                <h2 className="legal-block__title">Information We Collect</h2>
                <p>We restrict data collection exclusively to what is strictly necessary to evaluate, scope, and execute strategic client engagements:</p>
                <ul className="legal-list">
                  <li>
                    <strong>Founder &amp; Executive Contact Data:</strong> Name, work email address, company name, phone number, and LinkedIn/professional coordinates submitted via project enquiry forms.
                  </li>
                  <li>
                    <strong>Commercial &amp; Project Diagnostics:</strong> Product stage, target market segment, revenue metrics, brand challenges, and timeline expectations voluntarily submitted during onboarding audits.
                  </li>
                  <li>
                    <strong>Technical &amp; Telemetry Data:</strong> Aggregated, privacy-preserving performance telemetry (e.g. browser type, timezone, operating system, and anonymized referral path) required for site performance and anti-abuse verification. We do not employ third-party tracking pixels or behavioral broker networks.
                  </li>
                </ul>
              </section>

              {/* Section 03 */}
              <section id="commercial-use" className="legal-block">
                <span className="legal-block__num">03</span>
                <h2 className="legal-block__title">How We Utilize Project Intelligence</h2>
                <p>All information provided is deployed solely for legitimate commercial purposes directly related to your engagement:</p>
                <ul className="legal-list">
                  <li>Evaluating project fit and formulating 28-day sprint proposals.</li>
                  <li>Conducting category competitive teardowns and positioning diagnostics.</li>
                  <li>Drafting production design assets, brand identity guidelines, and GTM war chests.</li>
                  <li>Transmitting milestone updates, sprint deliverables, and tax-compliant invoicing.</li>
                </ul>
                <p>
                  We never feed client strategy, unreleased trademarks, or proprietary copy into public machine-learning corpora or multi-tenant training models.
                </p>
              </section>

              {/* Section 04 */}
              <section id="nda-ip" className="legal-block">
                <span className="legal-block__num">04</span>
                <h2 className="legal-block__title">Strict Non-Disclosure &amp; Founder IP</h2>
                <p>
                  We execute bilateral Non-Disclosure Agreements (NDAs) prior to reviewing confidential pitch decks, cap tables, or proprietary product documentation.
                </p>
                <p>
                  All intellectual property, positioning frameworks, trademarks, vector assets, and design systems generated during an engagement transfer <strong>100% to the client upon full payment of invoice milestones</strong>. Taksh retains zero claim over your brand assets.
                </p>
              </section>

              {/* Section 05 */}
              <section id="storage-security" className="legal-block">
                <span className="legal-block__num">05</span>
                <h2 className="legal-block__title">Data Infrastructure &amp; Security</h2>
                <p>
                  Our internal repositories and digital workspaces utilize enterprise-grade encryption (AES-256 at rest, TLS 1.3 in transit), strict role-based access control (RBAC), and hardware-backed two-factor authentication.
                </p>
                <p>
                  Access to confidential client repositories is restricted strictly to senior operators actively assigned to your sprint cohort. No external subcontractors or unauthorized third parties are ever granted access.
                </p>
              </section>

              {/* Section 06 */}
              <section id="third-parties" className="legal-block">
                <span className="legal-block__num">06</span>
                <h2 className="legal-block__title">Zero Third-Party Monetization</h2>
                <p>
                  We have never sold, rented, leased, or monetized client data or user contact lists to third-party data brokers, advertising exchanges, or external vendors. We never will.
                </p>
                <p>
                  Trusted infrastructure providers (e.g., Vercel for hosting, Google Workspace for encrypted communications, and Stripe for financial settlement) process data under strict confidentiality and security compliance agreements.
                </p>
              </section>

              {/* Section 07 */}
              <section id="rights" className="legal-block">
                <span className="legal-block__num">07</span>
                <h2 className="legal-block__title">Founder &amp; Client Legal Rights</h2>
                <p>Under the Digital Personal Data Protection (DPDP) Act 2023, GDPR, and California Consumer Privacy Act (CCPA) standards, you retain comprehensive rights to:</p>
                <ul className="legal-list">
                  <li><strong>Access &amp; Audit:</strong> Request an exhaustive summary of all personal data and project telemetry retained in our records.</li>
                  <li><strong>Rectification:</strong> Correct or update any executive contact information or corporate records.</li>
                  <li><strong>Erasure / Right to be Forgotten:</strong> Request permanent purging of non-financial diagnostic records following sprint completion.</li>
                  <li><strong>Data Portability:</strong> Obtain all final Figma archives, vectors, and strategy monographs in open, production formats.</li>
                </ul>
              </section>

              {/* Section 08 */}
              <section id="contact" className="legal-block">
                <span className="legal-block__num">08</span>
                <h2 className="legal-block__title">Legal Inquiries &amp; Governance</h2>
                <p>
                  For inquiries regarding this policy, custom mutual NDA execution, or data privacy requests, contact our legal counsel directly:
                </p>
                <div className="legal-contact-box">
                  <div>
                    <span className="legal-contact-box__role">Office of Legal Counsel</span>
                    <strong className="legal-contact-box__name">Taksh Studio Legal Operations</strong>
                    <span className="legal-contact-box__location">Bengaluru, India · Global Remote Engagements</span>
                  </div>
                  <a href="mailto:legal@taksh.in" className="btn btn--blue magnetic">
                    legal@taksh.in <span className="arrow">→</span>
                  </a>
                </div>
              </section>
            </article>
          </div>
        </section>

        {/* Studio Footer */}
        <footer className="legal-footer">
          <div className="container legal-footer__inner">
            <span>© 2026 Taksh Studio. All Rights Reserved.</span>
            <div className="legal-footer__links">
              <Link href="/terms">Terms of Engagement</Link>
              <Link href="/privacy" className="is-active">Privacy Policy</Link>
              <Link href="/real-estate">Real Estate</Link>
              <Link href="/#contact">Start a Project</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
