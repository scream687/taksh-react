import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ThemeToggle } from '@/components/layout/ThemeToggle';

export const metadata: Metadata = {
  title: 'Terms of Engagement & Commercial Doctrine — Taksh Atelier',
  description: 'Commercial terms, 28-day sprint scope, milestone payment architecture, intellectual property transfer, and service level standards for Taksh client engagements.',
  keywords: [
    'Taksh terms of service',
    'brand sprint contract terms',
    'intellectual property assignment',
    'fixed scope positioning sprint',
    'design atelier commercial terms',
  ],
  alternates: {
    canonical: 'https://taksh.in/terms',
  },
  openGraph: {
    title: 'Terms of Engagement — Taksh Atelier',
    description: 'Commercial terms, 28-day sprint scope, milestone payment architecture, intellectual property transfer, and service level standards.',
    url: 'https://taksh.in/terms',
    siteName: 'Taksh',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Engagement — Taksh Atelier',
    description: 'Commercial terms, 28-day sprint scope, milestone payment architecture, intellectual property transfer, and service level standards.',
  },
};

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Terms of Engagement — Taksh Atelier',
  url: 'https://taksh.in/terms',
  description: 'Commercial terms of engagement and service standards for Taksh Studio.',
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
  { id: 'engagement', title: '01. Commercial Engagement Framework' },
  { id: 'sprint-scope', title: '02. 28-Day Sprint Scope & Cadence' },
  { id: 'ip-transfer', title: '03. Intellectual Property Assignment' },
  { id: 'payments', title: '04. Milestones, Invoicing & Settlement' },
  { id: 'turnaround', title: '05. Client Responsibilities & Feedback' },
  { id: 'confidentiality', title: '06. Mutual Confidentiality (NDA)' },
  { id: 'liability', title: '07. Warranties & Limitation of Liability' },
  { id: 'governing-law', title: '08. Governing Law & Dispute Resolution' },
];

export default function TermsPage() {
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div className="legal-nav__badge">
                <span>DOC REF · TERMS-2026</span>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="legal-hero">
          <div className="container">
            <div className="legal-hero__meta">
              <span className="label label--paper">Contractual Doctrine · Client Master Agreement</span>
              <span className="legal-hero__date">EFFECTIVE: AUGUST 2026 · VERSION 2.4</span>
            </div>
            <h1 className="legal-hero__title">
              Terms of Engagement &amp;
              <br />
              <em>Commercial Doctrine.</em>
            </h1>
            <p className="legal-hero__lead">
              Clear deliverables, fixed 28-day sprint scopes, 100% intellectual property transfer, and zero junior staffing layers. Here is how we contract with high-growth founders.
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
                  <span className="legal-toc__card-label">Contract Operations</span>
                  <p className="legal-toc__card-text">
                    Questions regarding Statements of Work or master service terms:
                  </p>
                  <a href="mailto:contracts@taksh.in" className="legal-toc__card-email">
                    contracts@taksh.in →
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Article Body */}
            <article className="legal-article">
              {/* Section 01 */}
              <section id="engagement" className="legal-block">
                <span className="legal-block__num">01</span>
                <h2 className="legal-block__title">Commercial Engagement Framework</h2>
                <p>
                  These Terms of Engagement (&ldquo;Terms&rdquo;) govern all strategic, brand positioning, identity architecture, and go-to-market services provided by Taksh (&ldquo;Taksh Studio&rdquo;) to the entity or individual identified in an executed Statement of Work (&ldquo;Client&rdquo;).
                </p>
                <p>
                  By executing a Statement of Work (SOW), issuing a purchase order, or remitting milestone deposits, the Client affirms agreement to these Terms. Any deviating conditions proposed by the Client are null and void unless explicitly accepted in a formal bilateral addendum signed by an authorized partner of Taksh.
                </p>
              </section>

              {/* Section 02 */}
              <section id="sprint-scope" className="legal-block">
                <span className="legal-block__num">02</span>
                <h2 className="legal-block__title">28-Day Sprint Scope &amp; Cadence</h2>
                <p>
                  Taksh engagements operate on a rigorous, fixed-timeline sprint model spanning exactly four calendar weeks (28 consecutive days from Sprint Kickoff):
                </p>
                <ul className="legal-list">
                  <li><strong>Week 01 · Diagnostics &amp; Positioning Teardown:</strong> Deep stakeholder interrogation, competitive category mapping, and the core Positioning Thesis.</li>
                  <li><strong>Week 02 · Brand Architecture &amp; Verbal Identity:</strong> Naming architectures, narrative messaging hierarchy, tagline systems, and commercial copy doctrine.</li>
                  <li><strong>Week 03 · Visual Identity &amp; Living Design System:</strong> Tokenized vector logos, typography pairings, color systems, and tokenized Figma libraries.</li>
                  <li><strong>Week 04 · GTM War Chest &amp; Production Handover:</strong> High-conversion landing page layouts, investor pitch decks, launch campaigns, and source files.</li>
                </ul>
                <p>
                  Sprint scope is fixed upon SOW execution. Out-of-scope requests or major conceptual pivots introduced after Week 02 sign-off will be scheduled as an additional sprint cadence at our prevailing sprint rates.
                </p>
              </section>

              {/* Section 03 */}
              <section id="ip-transfer" className="legal-block">
                <span className="legal-block__num">03</span>
                <h2 className="legal-block__title">Intellectual Property Assignment</h2>
                <p>
                  We believe in total commercial ownership. Upon <strong>full and final settlement of all milestone invoices</strong>:
                </p>
                <ul className="legal-list">
                  <li>
                    Taksh assigns, transfers, and conveys to the Client <strong>100% of all worldwide right, title, and interest</strong> in and to all custom deliverables (including trademarks, logotypes, wordmarks, color palettes, copywriting, and bespoke vector art).
                  </li>
                  <li>
                    The Client receives complete, un-watermarked Figma source files, production vector packages (SVG, EPS, PDF), and typographic token definitions.
                  </li>
                  <li>
                    Third-party commercial font licenses, stock photography, or licensed software remain subject to their respective vendor licenses and must be procured directly by the Client.
                  </li>
                  <li>
                    Taksh retains the limited, non-exclusive right to display the completed work in our digital studio portfolio, case studies, and industry awards following public client launch.
                  </li>
                </ul>
              </section>

              {/* Section 04 */}
              <section id="payments" className="legal-block">
                <span className="legal-block__num">04</span>
                <h2 className="legal-block__title">Milestones, Invoicing &amp; Settlement</h2>
                <p>To ensure uncompromising focus, we limit active sprint slots to exactly two clients per cohort:</p>
                <ul className="legal-list">
                  <li><strong>50% Sprint Reservation Deposit:</strong> Due upon SOW signing to lock your sprint calendar window and allocate dedicated senior leadership. Non-refundable once research begins.</li>
                  <li><strong>50% Final Handover Milestone:</strong> Due at the conclusion of Week 04 prior to final release of unlocked production Figma libraries and vector master archives.</li>
                </ul>
                <p>
                  Invoices are payable within 7 calendar days of issuance via wire transfer (NEFT/RTGS/IMPS), international SWIFT wire, or corporate card via Stripe. Overdue balances accrue interest at 1.5% per month.
                </p>
              </section>

              {/* Section 05 */}
              <section id="turnaround" className="legal-block">
                <span className="legal-block__num">05</span>
                <h2 className="legal-block__title">Client Responsibilities &amp; Feedback</h2>
                <p>
                  Our 28-day velocity requires active founder-level partnership. The Client agrees to:
                </p>
                <ul className="legal-list">
                  <li>Designate a singular Primary Decision Maker (CEO, Founder, or CMO) with full signing authority.</li>
                  <li>Participate in the scheduled Weekly Alignment Reviews (maximum 45 minutes).</li>
                  <li>Consolidate and deliver structured written feedback within <strong>48 hours</strong> of each milestone review to maintain sprint velocity.</li>
                </ul>
              </section>

              {/* Section 06 */}
              <section id="confidentiality" className="legal-block">
                <span className="legal-block__num">06</span>
                <h2 className="legal-block__title">Mutual Confidentiality (NDA)</h2>
                <p>
                  Both parties agree to hold all non-public commercial, technical, and strategic information in strict confidence for a period of no less than three (3) years from disclosure date.
                </p>
                <p>
                  Neither party shall disclose confidential project intelligence, financial figures, or unreleased product roadmaps to any third party without prior written consent.
                </p>
              </section>

              {/* Section 07 */}
              <section id="liability" className="legal-block">
                <span className="legal-block__num">07</span>
                <h2 className="legal-block__title">Warranties &amp; Limitation of Liability</h2>
                <p>
                  Taksh warrants that all delivered custom assets are original creations and do not knowingly infringe upon any third-party intellectual property or copyright.
                </p>
                <p>
                  Except for willful misconduct or breach of confidentiality, Taksh&apos;s aggregate liability arising out of or related to any engagement shall not exceed the total fees actually paid by the Client under the applicable SOW in the three (3) months preceding the claim.
                </p>
              </section>

              {/* Section 08 */}
              <section id="governing-law" className="legal-block">
                <span className="legal-block__num">08</span>
                <h2 className="legal-block__title">Governing Law &amp; Dispute Resolution</h2>
                <p>
                  These Terms and all related SOWs shall be governed by and construed in accordance with the substantive laws of India.
                </p>
                <p>
                  Any dispute arising out of or in connection with these Terms shall first be submitted to good-faith executive mediation. If unresolved within 30 days, the dispute shall be submitted to the exclusive jurisdiction of the competent courts in Bengaluru, Karnataka, India.
                </p>
              </section>
            </article>
          </div>
        </section>

        {/* Studio Footer */}
        <footer className="legal-footer">
          <div className="container legal-footer__inner">
            <span>© 2026 Taksh Studio. All Rights Reserved.</span>
            <div className="legal-footer__links">
              <Link href="/terms" className="is-active">Terms of Engagement</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/real-estate">Real Estate</Link>
              <Link href="/#contact">Start a Project</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
