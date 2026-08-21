---
name: Taksh — Editorial Atelier
description: Positioning and strategy studio for growth-stage founders. Editorial, confident, sharp-edged, with a blue signal on warm paper and deep void surfaces.
colors:
  primary:
    signal-blue: "#2D5BE3"
  secondary:
    process-violet: "#7C3AED"
  neutral:
    warm-paper: "#F5F5F3"
    void-ink: "#0D0D0D"
    deep-ink: "#1A1A1A"
    pure-white: "#FFFFFF"
    faint-mute: "#6E6E6E"
    hairline: "#E0DDD6"
    hairline-dark: "#2A2A2A"
    blue-wash: "#EEF2FD"
typography:
  display:
    fontFamily: "'Instrument Serif', Georgia, serif"
    fontSize: "clamp(60px, 10.5vw, 220px)"
    fontWeight: 400
    fontStyle: italic
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Inter', sans-serif"
    fontSize: "clamp(36px, 5.4vw, 84px)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  title:
    fontFamily: "'Inter', sans-serif"
    fontSize: "clamp(24px, 2.4vw, 36px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Inter', sans-serif"
    fontSize: "clamp(16px, 1.18vw, 19px)"
    fontWeight: 400
    lineHeight: 1.55
  large:
    fontFamily: "'Inter', sans-serif"
    fontSize: "clamp(20px, 1.6vw, 26px)"
    fontWeight: 500
    lineHeight: 1.45
  label:
    fontFamily: "'Inter', sans-serif"
    fontSize: "11px"
    fontWeight: 500
    letterSpacing: "0.2em"
    textTransform: uppercase
  micro-meta:
    fontFamily: "'JetBrains Mono', monospace, sans-serif"
    fontSize: "clamp(10px, 0.85vw, 13.5px)"
    fontWeight: 500
    letterSpacing: "0.02em"
    textTransform: none
rounded:
  sharp: "0"
  soft-sm: "6px"
  soft-md: "8px"
  card-lg: "16px"
  full: "9999px"
spacing:
  container: "1480px"
  gutter: "clamp(20px, 4vw, 56px)"
  nav-height: "76px"
  section-vertical: "120px"
  row-vertical: "36px"
components:
  button-primary:
    backgroundColor: "{colors.neutral.deep-ink}"
    textColor: "{colors.neutral.warm-paper}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "18px 28px"
  button-primary-hover:
    backgroundColor: "{colors.primary.signal-blue}"
    textColor: "{colors.neutral.warm-paper}"
    rounded: "{rounded.sharp}"
    padding: "18px 28px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.neutral.deep-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "18px 28px"
    border: "1px solid {colors.neutral.hairline}"
  button-ghost-hover:
    backgroundColor: "{colors.neutral.deep-ink}"
    textColor: "{colors.neutral.warm-paper}"
    rounded: "{rounded.sharp}"
    padding: "18px 28px"
  button-blue:
    backgroundColor: "{colors.primary.signal-blue}"
    textColor: "{colors.neutral.pure-white}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "18px 28px"
  input:
    backgroundColor: "rgba(255,255,255,0.05)"
    textColor: "{colors.neutral.warm-paper}"
    rounded: "{rounded.soft-sm}"
    padding: "14px 18px"
    border: "1px solid rgba(255,255,255,0.1)"
  input-focus:
    border: "1px solid {colors.primary.signal-blue}"
    rounded: "{rounded.soft-sm}"
    padding: "14px 18px"
  card-bezel:
    outerShell: "rgba(255,255,255,0.08)"
    innerCore: "rgba(14,14,18,0.94)"
    rounded: "{rounded.card-lg}"
    padding: "36px 32px"
---

# Design System: Taksh — Editorial Atelier

## 1. Overview & Creative North Star

**Creative North Star: "The Editorial Atelier"**

Taksh is a positioning and brand strategy studio for growth-stage founders. Its design system balances structural discipline with moments of editorial expression:
- **Warm Paper Canvas (`#F5F5F3`)** ruled by hairline divisions and geometric contrast.
- **Deep Void Surfaces (`#0D0D0D`)** for high-conviction statements (Manifesto, Team, Contact).
- **Oversized Inter Headlines** paired with an **Instrument Serif Italic Accent** that functions like a handwritten margin note.
- **Signal Blue Accent (`#2D5BE3`)** deployed with strict restraint (≤10% of any screen) to mark decisions, active states, and focal actions.

---

## 2. Color System & Surface Roles

| Token | Hex Value | Role & Usage |
|---|---|---|
| `--paper` | `#F5F5F3` | Default light surface, site backdrop, primary button hover target. |
| `--void` | `#0D0D0D` | Deep dark surface for Manifesto, Team section, and Contact footer. |
| `--ink` | `#1A1A1A` | Primary typography on light surfaces; resting button background. |
| `--blue` | `#2D5BE3` | Primary action signal, selection highlight, focus rings, hover fills. |
| `--blue-on-dark` | `#60A5FA` / `#93C5FD` | High-contrast accessible tint for tags and badges on dark surfaces. |
| `--border` | `#E0DDD6` | 1px hairline dividers on light surfaces. |
| `--border-dark` | `#2A2A2A` / `rgba(255,255,255,0.08)` | 1px hairline dividers and card shells on void surfaces. |
| `--white` | `#FFFFFF` | Pure white typography on void surfaces and inside signal buttons. |
| `--muted` | `#6E6E6E` | Secondary body text, timestamps, and section indexes. |

### Color Rules
1. **The Signal Rule:** Signal Blue appears on ≤10% of any viewport. When blue appears, it signifies an active decision or milestone.
2. **Surface Integrity:** Dark surfaces (`--void`) remain dark regardless of light/dark toggle state to preserve theatrical contrast.

---

## 3. Typography & Hierarchy

### Font Families
- **Headline / Body:** `Inter` (sans-serif) — Clean, neutral, structural, authoritative.
- **Display / Italic Accent:** `Instrument Serif` (serif, italic) — Expressive accent voice applied to italicized keywords (`<em>`).
- **Operational / Telemetry:** `JetBrains Mono` (monospace) — Telemetry, section indexes (`01 / 04`), live clock, capability chips, and metadata tags.

### Type Scale & Rules
- **Hero Title (`.hero__title`):** `clamp(60px, 10.5vw, 220px)`, line-height `0.88`, letter-spacing `-0.045em`.
  - Emphasized word (`em`): `font-family: 'Instrument Serif', Georgia, serif; font-style: italic; font-weight: 400; letter-spacing: -0.015em; display: inline;`.
- **Section Title (`.section__title`):** `clamp(36px, 5.4vw, 84px)`, line-height `1.12`, letter-spacing `-0.03em`.
- **Card Title (`.team-card__name`, `.service__name`):** `clamp(22px, 2.4vw, 32px)`, line-height `1.1`, letter-spacing `-0.02em`.
- **Body (`p`, `.hero__statement`):** `clamp(16px, 1.18vw, 19px)`, line-height `1.55`.
- **Section Eyebrow (`.label`):** `11px`, letter-spacing `0.2em`, uppercase, `font-weight: 500`.
- **Telemetry (`.team-card__num`, `.clock`):** `JetBrains Mono`, `11–13.5px`, tabular figures.

---

## 4. Component Architecture

### A. Double-Bezel (Doppelrand) Hardware Cards
Used in the **Team Section** and **Pain Points**:
- **Outer Shell (`.team-card-shell`):** 1px perimeter border (`rgba(255,255,255,0.08)`), `16px` radius, hover gradient highlight.
- **Inner Core (`.team-card-core`):** Deep OLED surface (`rgba(14,14,18,0.94)`), `15px` concentric radius, machined inner highlight (`box-shadow: inset 0 1px 1px rgba(255,255,255,0.12)`).
- **Interactive Cursor Spotlight:** Real-time pointer tracking (`radial-gradient(circle 280px at var(--mouse-x) var(--mouse-y), rgba(45,91,227,0.15), transparent 75%)`).

### B. Team Section Architecture
- **2×2 Responsive Bento Grid** displaying the 4 core leads:
  1. **Rishabh Sharma** — Founder & Creative Director (`Brand Architecture · Strategic Direction`)
  2. **Yogita Fulara** — Lead Designer (`Identity Systems · Visual Architecture`)
  3. **Tanmay Pania** — Full-Stack Engineer (`Creative Engineering · Systems Architecture`)
  4. **Ritika Fulara** — Brand Strategist (`GTM Planning · Narrative Architecture`)
- Each card incorporates: Monogram avatar (`RS`, `YF`, `TP`, `RF`), role tag, conviction quotation, capability tags, and direct connect link (`↗`).
- **Studio Standards Footprint:** 4-column summary strip (`Senior Lead Practitioners Only`, `4-Week Fixed-Scope Delivery`, `Vrindavan Studio`, `Global Growth-Stage Brands`).

### C. Process Timeline
- Horizontal (desktop) & vertical (mobile) progress rail connecting 4 sequential sprint steps (`01 Listen`, `02 Carve`, `03 Shape`, `04 Ship`).
- Always visible step descriptions with active node halo illumination.

### D. Fluid FAQ Accordion
- Spring-physics animated height expansion using Framer Motion `AnimatePresence`.
- `+` to `×` icon rotation and active Signal Blue question highlight.

---

## 5. Motion, Performance & Accessibility

1. **Hardware-Accelerated Transforms:** Motion is strictly constrained to `transform` (`translateX`, `translateY`, `scale`, `rotate`) and `opacity`.
2. **Reduced Motion Gating:** Systems degrade gracefully to static layouts when `prefers-reduced-motion: reduce` is detected.
3. **Responsive Breakpoints:**
   - Desktop: `1480px` max-width container with `clamp(20px, 4vw, 56px)` gutters.
   - Tablet (`≤ 960px`): Team & Footprint grids collapse to 2-column or 1-column.
   - Mobile (`≤ 640px`): All grids collapse to single-column with zero horizontal overflow.