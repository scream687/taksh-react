---
name: Taksh — Editorial Atelier
description: Positioning and strategy studio for growth-stage founders. Editorial, confident, sharp-edged, with a blue signal on warm paper.
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
    faint-mute: "#888888"
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
    fontWeight: 400
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
  card-lg: "24px"
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
  card:
    backgroundColor: "{colors.neutral.warm-paper}"
    rounded: "{rounded.card-lg}"
    padding: "44px 40px"
---

# Design System: Taksh — Editorial Atelier

## Overview

**Creative North Star: "The Editorial Atelier"**

Taksh is a positioning and strategy studio for growth-stage founders. Its visual system reads like a discipline, not a decoration: a warm paper canvas ruled by hairline divisions, oversized Inter headlines that make a single statement, and the occasional Instrument Serif italic — the hand-scrawled margin note that breaks the clean grid on purpose. The Signal Blue is used like an editorial decision: rare, precise, and always pointing at the point.

The system is deliberately **slightly subversive**. Formal grammar — uppercase micro-labels, hairline rules, a strict 1480px column — is the frame. What breaks it: the serif italic interrupt inside a sans headline, a blue triangle interrupting a marquee, a row that shifts 8px on hover. Restraint is the baseline; the transgression is the attention device.

Depth is conveyed by contrast and rule, not shadow. Warm Paper surfaces sit against Void Ink blocks; 1px hairlines mark boundaries; only the floating theme toggle and hover-lifted cards cast real shadow. This is a flat system that never feels flat, because the tonal blocks and hairlines do the work.

**Key Characteristics:**
- Editorial micro-labels: 11px, 0.2em tracking, uppercase, everywhere.
- Sharp-edged buttons; soft (24px) cards; hairline rules throughout.
- One signal color used ≤10% of any screen — its rarity is the point.
- Oversized, tight-tracked Inter headlines; Instrument Serif italic as the accent voice.
- Tonal layering (paper/void) + hairlines instead of shadow to show depth.

## Colors

The palette is warm-paper neutral + one cold signal accent. Contrast between Warm Paper and Void Ink carries the hierarchy; Signal Blue marks the decision.

### Primary
- **Signal Blue** (#2D5BE3): The only accent. Used on selection, focus rings, active process nodes, hover fills of primary buttons, blue-tri marquee separators, and the drawer eyebrow. Never more than ~10% of a screen.

### Secondary
- **Process Violet** (#7C3AED): Reserved strictly for the process-timeline rail and its glow orb, and the liquid-bg blob layer. It never touches CTA or editorial surfaces — progress belongs to violet, decision belongs to blue.

### Neutral
- **Warm Paper** (#F5F5F3): Default surface. Site background, section backgrounds, primary-button hover targets, preloader field.
- **Void Ink** (#0D0D0D): The dark surface. Pain section, process section, team roster, drawer, footer, dark-mode paper. Where statements get loud.
- **Deep Ink** (#1A1A1A): Primary text on light; primary-button fill at rest.
- **Pure White** (#FFFFFF): On blue buttons; nav-brand and title color on void.
- **Faint Mute** (#888888): Secondary text, labels, placeholders. Decorative info stays quiet.
- **Hairline** (#E0DDD6): 1px borders on light (marquee rules, ghost buttons, cards).
- **Hairline Dark** (#2A2A2A): 1px borders on void (drawer, footer, dark-mode borders).
- **Blue Wash** (#EEF2FD): Ambient-mesh gradient tone and light interaction wash; near-blue tint on paper.

### Named Rules
**The Signal Rule.** Signal Blue appears on ≤10% of any given screen. Its rarity is the point — when blue shows up, it means "act here" (button fill on hover, focus ring, active process node). When too much turns blue, the signal dies.
**The Rule of Rules.** Lines define structure, not boxes. A 1px hairline is a shared edge between adjacent things — it never becomes a heavy border around one thing. No border-radius creep into the editorial frame: buttons stay sharp; only content containers (cards, inputs) earn a radius.

## Typography

**Display Font:** Instrument Serif (with Georgia, serif fallback)
**Body Font:** Inter (with sans-serif fallback)
**Label Font:** Inter (distinct treatment, not a separate family)
**Operational Font:** JetBrains Mono (with monospace fallback) — section-scoped micro-meta: index numerals, tags, skill chips. The roster's `01 / 04` counts and code-like skill labels read as telemetry against the editorial Inter/Serif voices; used only where operational data meets the grid.

**Character:** A quiet sans and a loud serif. Inter sets the tone — confident, neutral, technical. Instrument Serif italic is the interruption: one word per headline, in the margin-note voice, doing the emotional lifting. The pairing is why the system feels editorial and slightly subversive at once.

### Hierarchy
- **Display** (400 italic, `clamp(60px,10.5vw,220px)`, lh 0.95): Instrument Serif italic for the hero's emphasized word and marquee-proportioned moments only. Hero TΛKSH itself renders as oversized Inter at `clamp(80px,18vw,320px)`, -0.05em tracking.
- **Headline** (700, `clamp(36px,5.4vw,84px)`, lh 1.12, -0.03em): Section titles. The most common loud voice.
- **Title** (700, `clamp(24px,2.4vw,36px)`, lh 1.1, -0.02em): Card and pain-point titles, process names.
- **Body** (400, `clamp(16px,1.18vw,19px)`, lh 1.55): Paragraph copy. Readable width around 65–75ch.
- **Large** (400, `clamp(20px,1.6vw,26px)`, lh 1.45): Hero statements and lead paragraphs.
- **Label** (500, 11px, 0.2em, uppercase): Micro-copy — section eyebrows, stat labels, drawer eyebrows, pain numerals. The editorial constant.
- **Micro-meta** (JetBrains Mono, 10–13.5px, 0.02–0.12em): small operational details below the label step — row indices (12px/0.08em), role (13.5px), discipline (12.5px), tags (10px/0.12em uppercase), skill chips (11.5px). Tightened sizes are deliberate; they live at the edge of the grid as data, not prose.

### Named Rules
**The One-Italic Rule.** Instrument Serif italic is applied to at most one emphasized word per headline (`<em>` inside a headline). Two italics in one title breaks the margin-note effect.
**The Rule-of-Rules Typographic Corollary.** Headlines use negative tracking (‑0.02em to ‑0.045em); body and buttons use positive or neutral tracking (0 to +0.02em). Tight is loud, loose is readable.

## Layout

The system is a single wide column on a 1480px container with `clamp(20px, 4vw, 56px)` gutters. Sections stack vertically with 120px padding. The nav is a fixed 76px bar with frosted-glass blur (12px, 180% saturate) that intensifies to 16px/190% on scroll, ruled by a 1px bottom hairline.

The marquee is a ruled band: 1px hairline top and bottom, a 40s linear loop, blue-tri separators, and soft edge fade via mask-image. Cards arrange in 2-col grids (pain grid) or rows (stats strip) divided by hairlines, collapsing to single column at ≤720px. Heavy ambient effects (mesh, orbs, streaks, marquee, preloader) are killed outright at ≤768px for performance.

**Breakpoints:** 1480px (container), 960px (team rows), 880px (process rail → 2-col), 768px (effects off), 720px (stats/pain → 1-col), 560px (process → 1-col).

## Elevation & Depth

Depth is **tonal layering + hairline rules**, not shadow. Surfaces separate by contrast (Warm Paper vs Void Ink) and 1px hairlines; there is no ambient shadow vocabulary on content. The only real shadows belong to floating chrome and hover state.

### Shadow Vocabulary
- **Floating control** (`0 4px 20px rgba(0,0,0,0.08)`): The theme toggle — the one always-floating element, and the one that gets to look lifted.
- **Hover lift** (`0 30px 60px rgba(0,0,0,0.06)`): Industry cards on hover, paired with `translateY(-8px)`. Generous, diffuse, soft — the exception that proves the flat rule.

### Named Rules
**The Glass-Chrome-Only Rule.** Backdrop blur appears on exactly one surface: the fixed nav. Nothing else in the system is glass. When a surface needs separation from what's behind it, the system uses a hairline, not blur.
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows exist only as a response to state (hover lift) or as chrome (floating toggle). No resting card ever carries a shadow.

## Shapes

Sharp is the default; radius is earned. Buttons, the nav, marquee bands, section blocks: 0 radius, square and ruled. Content containers — cards (24px), inputs (6px), pain icons (8px) — carry soft radius. Circular forms are reserved for status: dots, process nodes, toggles, orbs, and the logo preloader.

The blue triangle (`border-left/right 18px transparent, border-bottom 26px`) is the system's signature interrupt — a recurring geometric mark used in the marquee and page accents. Process progress is expressed as a horizontal rail with a 3px line, a violet fill, and a glowing orb at its leading edge.

## Components

### Buttons
- **Shape:** Sharp — 0 radius. Ruled, editorial, not pill.
- **Primary:** Deep Ink fill, Warm Paper text, 18px 28px padding. On hover, the fill flips to Signal Blue — the ink→blue flip is the button's entire story.
- **Hover / Focus:** `transition: background .2s, color .2s, transform .2s`; arrow nudges `translateX(4px)` on hover; focus follows the Signal selection rule.
- **Ghost:** Transparent, 1px Hairline border, Deep Ink text. Hover inverts to Deep Ink fill / Warm Paper text.
- **Blue:** Signal Blue fill, Pure White text — used where the CTA is the decision. Hover sinks to Deep Ink.

### Cards / Containers
- **Corner Style:** 24px (pain cards, industry cards, process nodes sit on rails).
- **Background:** Warm Paper at rest; Pure White on hover.
- **Shadow Strategy:** Flat at rest; hover lift `0 30px 60px rgba(0,0,0,0.06)` + `translateY(-8px)`.
- **Border:** Hairline dividers; grids separated by `1px` gaps on a Hairline background.
- **Internal Padding:** 44px 40px (desktop), 36px 28px (mobile).

### Inputs / Fields
- **Style:** `rgba(255,255,255,0.05)` fill, 1px `rgba(255,255,255,0.1)` stroke, 6px radius, 14px 18px padding, 15px Inter.
- **Focus:** Stroke turns Signal Blue, background washes `rgba(45,91,227,0.05)`.
- **Disabled:** 0.5 opacity, `not-allowed` cursor.

### Navigation
- Fixed 76px bar; frosted glass (12px blur, 180% saturate, `rgba(245,245,243,0.4)` backing; scroll state 16px/190%, 0.7 backing). 1px bottom hairline. Brand left; links center/right; CTA right. At ≤768px links collapse to a drawer (right, 500px max, Void Ink, hairline-left).

### Team Roster (signature)
A ruled editorial list on Void Ink: rows separated by 1px `rgba(255,255,255,0.08)` hairlines, a Signal Blue rule scaling in from the left on hover (`scaleX(0→1)`), row nudging `translateX(8px)`. Names in 600 Inter (`clamp(28px,3.5vw,44px)`, -0.03em); quotes in Instrument Serif italic, 17px, `rgba(245,245,243,0.85)`. One person, one line, one italic remark.

### Process Timeline (signature)
Horizontal 3px rail between steps; fill is a Signal Blue → Process Violet gradient with a glowing violet orb at the leading edge; active node is a Signal Blue dot with a pulsing halo ring. Progress is violet; the active moment is blue.

## Do's and Don'ts

### Do:
- **Do** reserve Instrument Serif italic for a single emphasized word per headline.
- **Do** keep buttons sharp-cornered; only content containers earn a radius.
- **Do** use Signal Blue at ≤10% of any screen — it marks decisions.
- **Do** separate surfaces with 1px hairlines and tonal contrast before reaching for shadow.
- **Do** keep micro-labels 11px, 0.2em tracking, uppercase.
- **Do** use Process Violet only in the process/progress layer.

### Don't:
- **Don't** add ambient shadows to resting content; the system is flat by default.
- **Don't** put violet on CTA or editorial surfaces — violet is process, blue is decision.
- **Don't** introduce a second italic voice or italicize whole sentences.
- **Don't** round nav or buttons, and don't convert hairline rules into heavy borders.
- **Don't** drop the ambient layer on desktop — the mesh, orbs, and noise are part of the texture; kill them only at ≤768px.