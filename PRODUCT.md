# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: growth-stage founders — real-estate developers and property brands first, D2C/retail product companies and services firms second. They have customers, revenue, and a working product, but the brand is the bottleneck: positioning is unclear, messaging is inconsistent, and paid spend is wasted without a strategy foundation.

## Product Purpose

Taksh is a strategy & marketing studio for growth-stage businesses. The site exists to get qualified founders to start a project — via email or the waitlist flow — by demonstrating senior-led strategic thinking, not production volume. Success is a prospect reaching out about positioning/identity or a go-to-market engagement.

## Positioning

A founder-led studio that sells the thinking, not the production: four-week positioning + identity sprints, fixed scope and price, and direct collaboration with the partners — no account layers, no junior handoffs. Real estate is the declared primary focus.

## Operating Context

- Landing page and separate Real Estate vertical page (taksh.in/real-estate), both single-file static-style pages rendered as HTML strings inside Next.js App Router.
- Six service lines: Brand Strategy, Go-to-Market, Content, Consultancy, Performance, Positioning.
- Engagement models: 4-week positioning + identity sprint, 3-month full GTM, ongoing retainer. Fixed price, published timeline.
- Waitlist/drawer capture form plus direct email contact (hello@taksh.in).
- Local time, studio status pulse ("Booking Q3 · 2026"), and live clock in hero/footer.

## Capabilities and Constraints

- Next.js 16 (App Router), React 19, framer-motion, GSAP, Tailwind 4.
- Dark-void (#0D0D0D) + paper (#F5F5F3) + blue (#2D5BE3) palette; Inter + Instrument Serif; light/dark theme toggle.
- Team section is a client-rendered React island (`TeamIsland`) mounted into `#team-mount`.
- Real Estate is the named primary industry and has its own page.

## Brand Commitments

- Studio name: Taksh (wordmark TΛKSH), tagline "Strategy & marketing for growth-stage businesses."
- Voice: direct, sharp, minimal, confident — "we don't hide behind jargon."
- Real team: Rishabh Sharma (founder), Yogita Fulara, Tanmay Pania, Ritika Fulara. Treat names as factual.
- Studio is live with clients; do not present it as pre-revenue or aspirational.
- Contact email hello@taksh.in; based in Vrindavan, Uttar Pradesh, India.

## Evidence on Hand

- Real site copy across services, process, manifesto, industries, FAQ, contact (in `app/page.tsx` and `app/real-estate/page.tsx`).
- Real team names and quotes in `components/team/TeamSection.tsx`.
- Logo assets and generated image assets in `public/`.
- No public case studies, testimonials, or client logos on the site; do not fabricate them.

## Product Principles

- Sell the thinking first: positioning and narrative precede production; the strategy is the deliverable that holds everything else together.
- Founder-led and senior-led throughout: the person who pitches is the person who does the work.
- Fixed, honest scope: fixed price, fixed timeline, published before sign-off.
- Direct and jargon-free: the brand voice is sharp and minimal, never fluffy or aggressive.
- Real estate is the wedge: primary focus and proof vertical, with other industries expanding from it.

## Accessibility & Inclusion

- English-language site; standard accessibility expectations (semantic HTML, keyboard-usable controls, contrast for text). No product-specific standard was established beyond baseline web expectations.