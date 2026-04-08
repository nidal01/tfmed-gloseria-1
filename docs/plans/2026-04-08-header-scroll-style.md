# Header Scroll Style Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make the header transparent at the very top with white nav text, and switch to a white header with the default nav colors after the user scrolls down.

**Architecture:** Add a small scroll state in `Navbar` that toggles a modifier class on the `<header>`. Use CSS modifier classes in `src/styles/landing.css` to control background/border/shadow and nav link colors for the “at top” vs “scrolled” modes.

**Tech Stack:** React, TypeScript, plain CSS (`src/styles/landing.css`)

---

### Task 1: Add scroll state + modifier class

**Files:**
- Modify: `/Users/yigitdogan/Documents/projeler/gloseria/src/components/Navbar.tsx`

**Step 1: Write the change (no tests in repo)**
- Add `useEffect` + `useState` to compute `isAtTop` (e.g. `window.scrollY <= 8`).
- Apply `className="site-header site-header--top"` when at top, otherwise `site-header site-header--scrolled`.
- Add cleanup for the scroll listener.

**Step 2: Manual verification**
- Run dev server and scroll page: header class should flip once you scroll down, and return when you scroll back to top.

### Task 2: Add CSS for the two header modes

**Files:**
- Modify: `/Users/yigitdogan/Documents/projeler/gloseria/src/styles/landing.css`

**Step 1: Implement CSS**
- For `.site-header--top`: set `background: transparent; border-bottom: 0; box-shadow: none;`
- Set `.site-header--top .nav-link` color to `#fff`.
- Keep hover states usable in top mode (e.g. slightly translucent hover background and white text).
- Ensure `.site-header--scrolled` keeps the current default (`background: #fff;` and existing colors).

**Step 2: Build verification**
- Run `pnpm build` and ensure it succeeds.

