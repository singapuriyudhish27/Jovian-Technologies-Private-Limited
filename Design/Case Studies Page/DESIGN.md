---
name: Jovian Precision
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#424656'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#727687'
  outline-variant: '#c2c6d8'
  surface-tint: '#0054d6'
  primary: '#0050cb'
  on-primary: '#ffffff'
  primary-container: '#0066ff'
  on-primary-container: '#f8f7ff'
  inverse-primary: '#b3c5ff'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#51596f'
  on-tertiary: '#ffffff'
  tertiary-container: '#697188'
  on-tertiary-container: '#f7f7ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#001849'
  on-primary-fixed-variant: '#003fa4'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  section-padding-desktop: 120px
  section-padding-mobile: 64px
---

## Brand & Style

The design system is engineered for a high-end AI automation consultancy that balances corporate stability with the cutting-edge capabilities of machine learning. The aesthetic is "Celestial Corporate"—a fusion of high-utility SaaS patterns and subtle astronomical motifs.

The brand personality is authoritative yet visionary. It avoids the cluttered "hacker" tropes of typical tech agencies in favor of a pristine, gallery-like environment. The UI should feel like a high-end physical workspace: airy, organized, and quietly powerful. 

**Design Style: Modern Corporate / Minimalist**
- **Whitespace:** Extreme margins and generous padding to signal premium positioning.
- **Visual Narrative:** Subtle use of orbital paths (thin, 0.5pt strokes) and circular clipping masks to reference Jupiter without becoming a space-themed novelty.
- **Execution:** High-fidelity precision, utilizing thin borders, monochromatic depth, and singular focal points of color.

## Colors

The palette is anchored in a high-contrast white environment, using depth and saturation to guide user attention.

- **Foundations:** The background is primarily `#FFFFFF`. Use `#F8FAFC` for secondary containers and `#F1F5F9` for subtle section breaks.
- **Typography:** Headings use `#0F172A` (Ink) to provide a heavy, grounded weight. Body text uses `#334155` (Slate) to ensure long-form readability without the harshness of pure black.
- **Accents:** 
    - **Electric Blue (#0066FF):** Used for primary actions, progress indicators, and interactive links. It represents technology and logic.
    - **Jupiter Gold (#D4AF37):** Reserved for "Premium" indicators, high-value highlights, and subtle decorative orbital lines. It represents the "Jovian" heritage and exclusivity.

## Typography

The typographic hierarchy uses a "Dual-Sans" approach to distinguish between brand voice and functional utility.

- **Headlines:** Plus Jakarta Sans provides a friendly yet professional geometric structure. Tracking should be tightened for larger displays to create a sophisticated, "locked-in" look.
- **Body:** Inter is used for its exceptional legibility and neutral character, allowing complex technical explanations to feel approachable.
- **Labels & Data:** Geist (Monospace-influenced) is used for technical labels, small captions, and "Orbital" metadata to lean into the engineering/AI nature of the business.

## Layout & Spacing

This design system utilizes a **Fixed Grid** philosophy for its primary content containers to maintain a high-end editorial feel.

- **Grid:** 12-column system with a 1280px max-width. Gutters are kept wide (32px) to prevent visual crowding.
- **Rhythm:** An 8px base unit drives all spacing. Component padding should favor vertical breathing room (e.g., 16px horizontal / 24px vertical for cards).
- **Adaptive Strategy:** 
    - **Desktop:** Massive top/bottom padding (120px+) for sections to create a "gallery" effect.
    - **Tablet:** Reduce section padding to 80px; 8-column grid.
    - **Mobile:** 4-column grid with 20px side margins; font sizes for displays scale down aggressively.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Micro-Shadows** rather than heavy gradients.

- **Surface Tiers:**
    - **Tier 1 (Base):** `#FFFFFF` - The main canvas.
    - **Tier 2 (Inset):** `#F8FAFC` - Used for form fields and background cards.
    - **Tier 3 (Floating):** `#FFFFFF` with a "Soft Celestial" shadow (0px 10px 30px rgba(15, 23, 42, 0.04)).
- **Glassmorphism:** Use sparingly for navigation bars and dropdowns. A 20px backdrop blur with a 40% white tint and a 0.5px white border creates a "Frosted Lens" effect.
- **Interactions:** Hovering over cards should trigger a subtle upward shift (-4px) and an increase in shadow spread, never a color change to the background.

## Shapes

The shape language is "Soft Professional." We avoid the "bubbly" look of consumer apps by using conservative corner radii.

- **Standard Elements:** Buttons and input fields use a 0.25rem (4px) radius for a sharp, architectural feel.
- **Containers:** Large cards and feature blocks use a 0.75rem (12px) radius.
- **The Orbital Motif:** Perfect circles are used exclusively for avatars, icon backgrounds, and decorative floating elements. These provide a visual counter-point to the otherwise rectangular grid.

## Components

- **Primary Buttons:** Solid `#0066FF` with white text. No gradients. Hover state is a slight darken or a gold shadow glow.
- **Secondary Buttons:** Transparent background with a `#CBD5E1` border. On hover, the border becomes `#0066FF`.
- **Input Fields:** Soft grey backgrounds (`#F1F5F9`) with no initial border. On focus, a 1px `#0066FF` border appears with a soft blue outer glow.
- **Modern Cards:** White background, 1px `#E2E8F0` border, and the "Soft Celestial" shadow. A small "Gold Dot" or 2px gold top-border can be used to denote "Premium" features.
- **Chips:** Small, pill-shaped tags with `#F1F5F9` backgrounds and `#475569` text. Used for categorizing AI services.
- **Progress Indicators:** Use "Circular Orbit" loaders—two concentric circles rotating at different speeds to reinforce the Jovian theme.
- **Lists:** Clean lines with `#F1F5F9` dividers. Use Geist for bullet-point numbers to give a technical, precise appearance.