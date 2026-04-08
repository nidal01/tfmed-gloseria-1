# Mobile Hamburger Menu (Drawer) — Design

Date: 2026-04-08

## Goal

Add a mobile hamburger menu to the existing header. Below `768px`, the desktop nav is hidden; the hamburger should open a right-side drawer that contains the same navigation items and the same product groups + featured image as the desktop mega menu.

## Chosen pattern

Right-side **drawer** with a dimmed, blurred **overlay** behind it.

## Placement

- Mobile header right side: **Language switcher** + **Hamburger** button.
- Desktop remains unchanged: center nav stays visible; mega menu continues on hover/focus.

## Drawer contents

- Primary nav items in the same order as `navRoutes`:
  - `#home`
  - `/kurumsal` (for “corporate”)
  - `#products` (as a drawer accordion section)
  - `#representatives`
  - `#contact`
- “Products” section in drawer:
  - Accordion that expands/collapses.
  - Expanded state lists product groups from i18n `megaMenu.columns` (titles + links).
  - Includes a featured card at the bottom using:
    - image: `megaMenuFeaturedImage` (`/mega-menu-featured.png`)
    - label: `megaMenu.featured.label`
    - href: `megaMenu.featured.href`

## Interactions

- Open drawer via hamburger.
- Close drawer via:
  - overlay click
  - close button
  - `Esc`
  - clicking any navigation link
- When open:
  - lock body scroll
  - keep focus within the drawer (basic focus management: move focus into drawer on open; return focus to hamburger on close)

## Accessibility

- Hamburger uses `aria-expanded` and `aria-controls`.
- Drawer uses `role="dialog"` + `aria-modal="true"` and an accessible label.
- Product accordion uses `aria-expanded` and `aria-controls`.

## Visual language

- Matches existing warm palette (`--primary-beige`, `--warm-brown`, `--nav-hover-bg`).
- Subtle shadows, soft borders, and gentle motion consistent with the current language switcher and mega menu.

