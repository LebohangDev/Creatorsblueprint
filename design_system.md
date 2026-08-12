# CreatorsBlueprint Design System & Rebrand Guidelines

This document outlines the core design system tokens, typography rules, component patterns, and RTL guidelines established for the CreatorsBlueprint landing page rebrand and for aligning the SaaS application.

---

## 🎨 1. Color Palette Tokens

```css
:root {
  /* Canvas & Base Surfaces */
  --bg-page:           #FAF8F5;   /* Warm cream primary canvas */
  --bg-surface:        #FFFFFF;   /* Pure white cards */
  --bg-surface-subtle: #F3EFEA;   /* Soft warm cream surface */
  --bg-dark-section:   #0F1B3D;   /* Deep Navy (No pure black #000000 or #0A0F1D) */

  /* Typography */
  --text-primary:        #101828;  /* Primary dark text */
  --text-secondary:      #475569;  /* Slate body text */
  --text-muted:          #64748B;  /* Muted captions */
  --text-on-dark:        #FFFFFF;  /* White on dark surfaces */

  /* Brand Accents */
  --accent-orange:        #FF4D00; /* Vibrant Electric Orange (Primary CTA) */
  --accent-orange-hover:  #E04400;
  --accent-blue:          #1D4ED8; /* Electric Royal Blue */
  --accent-lime:          #D4FF00; /* Acid Lime */
  --accent-purple:        #8B5CF6; /* Royal Purple */

  /* Borders & Shadows */
  --border-light:         #E2DCD5; /* Warm subtle border */
  --border-strong:        #CBD5E1;
  --shadow-sm:            0 2px 8px rgba(15, 27, 61, 0.04);
  --shadow-md:            0 10px 30px rgba(15, 27, 61, 0.08);
  --shadow-lg:            0 20px 40px rgba(15, 27, 61, 0.12);
  --shadow-orange-glow:   0 12px 32px rgba(255, 77, 0, 0.25);
  --shadow-lime-glow:     0 12px 32px rgba(212, 255, 0, 0.35);
}
```

---

## ✒️ 2. Typography Hierarchy

- **Display Headlines & Section Titles**: `Plus Jakarta Sans`, Weights 700 & 800, `-1px` letter-spacing.
- **Body & UI Controls**: `Inter`, Weights 400, 500, 600, 700.
- **Arabic Typography**: `Readex Pro`, Weights 400, 500, 600, 700, 800.

```css
body {
  background-color: var(--bg-page);
  color: var(--text-primary);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
}

html[dir="rtl"] {
  font-family: 'Readex Pro', 'Plus Jakarta Sans', sans-serif;
}
```

---

## 🧱 3. Component Specs

### Primary CTA Button
- **Background**: `#FF4D00` (Electric Orange)
- **Text Color**: `#FFFFFF` (Pure White)
- **Border Radius**: `14px` – `16px`
- **Shadow**: `0 12px 32px rgba(255, 77, 0, 0.25)`

### Cards & Container Surfaces
- **Background**: `#FFFFFF` (Pure White)
- **Border**: `1px solid #E2DCD5` (Warm Cream Border)
- **Border Radius**: `24px` – `28px`
- **Shadow**: `0 10px 30px rgba(15, 27, 61, 0.08)`

---

## 🌍 4. GCC Language & RTL Parity Rules

- Language toggle pill: `[ EN | العربية ]` in header + persistent `[ EN | AR ]` on mobile.
- When toggling to Arabic (`ar`), set `dir="rtl"` on `<html>`.
- Grid/flex direction, text alignment, and directional icons mirror automatically.
- Numbers, currencies (`AED`, `$`), `@handles`, and brand names remain un-reversed.
