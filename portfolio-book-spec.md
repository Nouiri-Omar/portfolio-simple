# Portfolio-as-a-Book — Build Spec

## 1. Core Concept

The entire website **is** a book. There is no traditional navbar, no separate "pages" in the routing sense (or at most a single route) — the user experience is literally opening, reading, and turning the pages of a physical book rendered in the browser.

- No dashboard, no grid of project cards, no scrolling landing page in the conventional sense.
- One continuous "reading" experience from **cover → project spreads → back cover / contact page**.
- Scrolling (or swiping/dragging) turns the page, mimicking a real page-turn, not a simple scroll-fade.

---

## 2. Visual Language

### 2.1 Material / Texture
- The book should feel like **leather-bound**: dark, textured cover material (subtle bump-mapped leather texture — can be a high-res tileable leather texture image used as a `background-image` with `background-blend-mode`, or a CSS/SVG noise + normal-map faux-3D effect).
- Pages themselves should look like **aged/cream paper** (off-white, subtle paper grain texture, soft drop shadow at the spine/gutter for depth).
- Add a **spine** in the center with subtle shadow gradients so it reads as a bound book, not two flat divs side by side.
- Consider a soft **vignette + ambient shadow** under/around the whole book to make it feel like an object sitting on a surface, not a flat UI element.

### 2.2 Typography
- Serif font for body text (something like *Cormorant, Playfair Display, Lora, or EB Garamond*) to reinforce the "book" feeling.
- A more editorial/display serif or hand-set-looking font for the title/name on the cover.
- Sans-serif reserved only for UI micro-elements (tags, buttons) if needed for contrast.

### 2.3 Color Palette
- Cover: deep leather tones (oxblood, espresso brown, forest green, or navy — pick one signature color).
- Pages: warm ivory/cream, ink-black or dark-sepia text.
- Accent color for tags/links pulled from the cover color for consistency.

---

## 3. Structure of the Book

### 3.1 Cover Page (Page 0)
- Profile picture (circular or framed like an embossed portrait).
- Full name (large, centered or aligned like a book title).
- A short subtitle/role (e.g. "Full-Stack Developer" — like a book's subtitle).
- Small embossed/foil-effect icons or a minimal line listing professional profiles: **Email, LinkedIn, GitHub** (icons only or icon + handle), styled like a “printed on the cover” imprint, not like typical navbar icons.
- Optional: a subtle "tap/scroll to open" hint (e.g. a small animated arrow or "Open the book ↓").

### 3.2 Inside Cover / Title Page (optional, Page 1)
- Could act as a short intro/bio — "In this book you'll find..." — a short personal statement, like a preface.

### 3.3 Project Spreads (Pages 2...N)
Each project occupies a **two-page spread** (left page + right page open together), matching a real open book:

**Left Page**
- Project title
- Description of what was built / problem solved / your role — written like a short story/case-study excerpt.
- Tech stack shown as **tags/chips** (styled like little wax-seal stamps or bookmark tabs rather than generic pill badges — stay in theme).

**Right Page**
- A **screenshot/image** of the project (framed like an inset illustration/plate in a book — maybe with a thin border or "photo corner" styling).
- A **video banner** (a clickable banner/thumbnail with a play icon that opens the demo video — modal, or embedded player that appears as if a "folded insert" in the book).
- Optional: a small "View live / View code" link styled like a footnote or bookmark ribbon.

> If a project needs more room, it can span its own full spread (2 pages) as described above. Keep every project consistently structured (title/desc/tags on the left, image/video on the right) so the reading rhythm stays predictable.

### 3.4 Back Cover / Final Page — Contact
- This is the **last page** of the book, styled like the back cover/colophon.
- Contact info: email (mailto link), LinkedIn, GitHub, maybe a downloadable resume/CV link.
- Could reuse the leather cover material to visually "close the loop" with the front cover.

---

## 4. Interaction & Animation

### 4.1 Page Turn on Scroll
- Scrolling (mouse wheel / trackpad / touch swipe) should **trigger a page-turn animation**, not a normal vertical scroll.
- Recommended approach:
  - Use **scroll-jacking**: intercept wheel/touch events, translate scroll delta into a "turn progress" (0→1), and only advance to the next page once a threshold is crossed (like Apple product pages, but with a literal page-curl instead of parallax).
  - Libraries to evaluate:
    - [`react-pageflip`](https://www.npmjs.com/package/react-pageflip) – ready-made book/page-flip component, good starting point.
    - **Framer Motion** + custom 3D CSS transforms (`transform-style: preserve-3d`, `rotateY`) for a hand-rolled page-turn if more control over the "leather" feel is needed.
    - **GSAP + ScrollTrigger** for scroll-driven page-turn timelines if finer scrubbing control is needed.
  - The page should visually **curl/rotate around the spine** (transform-origin at the book's center), with a subtle shadow sweeping across the page as it turns, and a slight "paper flex" easing (not linear — ease-in-out with a little overshoot/settle).
- Keyboard (←/→) and click-on-page-corner should also be supported as accessible alternatives to scroll.
- Debounce/throttle scroll input so a single scroll gesture doesn't skip multiple pages by accident.

### 4.2 Mobile
- On mobile, swipe left/right (or up/down) should perform the same page-turn.
- Consider stacking left/right pages vertically on very small screens (project spread becomes "page A then page B" in sequence) while keeping the same book aesthetic.

### 4.3 Micro-interactions
- Hover on tag chips: subtle lift/shadow ("embossed press" feel).
- Video banner hover: slight zoom + play icon pulse.
- Page corner hover (near edges): small curl hint to indicate it's turnable, like real book UI affordances (see react-pageflip demos).

---

## 5. Technical Notes for the Next.js Implementation

- Likely a **single route** (`/`) as a client component (`"use client"`), since this is a highly interactive, stateful, animation-driven experience — SSR value here is mostly just the initial cover paint.
- Model the book's content as structured **data**, not hardcoded JSX, so pages are easy to add/edit:

```ts
// content/book.ts
export const book = {
  cover: {
    name: "Your Name",
    role: "Full-Stack Developer",
    photo: "/images/pfp.jpg",
    email: "you@example.com",
    linkedin: "https://linkedin.com/in/you",
    github: "https://github.com/you",
  },
  projects: [
    {
      title: "Project Name",
      description: "What it does, your role, the outcome...",
      tags: ["Next.js", "TypeScript", "Postgres"],
      image: "/images/projects/project1.png",
      video: "/videos/project1-demo.mp4", // or a YouTube/Vimeo URL
      liveUrl: "https://...",
      codeUrl: "https://github.com/...",
    },
    // ...more projects
  ],
};
```

- Each project → one `<Spread>` component rendering `<LeftPage>` + `<RightPage>` from that data object, so styling stays consistent and adding a project is just adding a data entry.
- Keep page-turn state (current page index, turn progress) in a small state manager (Zustand or React context) so keyboard/scroll/swipe/click controls all update the same source of truth.
- Preload the next page's image/video poster to avoid pop-in during the turn animation.
- Respect `prefers-reduced-motion`: fall back to a simple fade/slide instead of the full 3D page-turn for users who request reduced motion.
- Lazy-load videos (don't autoplay heavy video elements until the page is actually the active/visible one).

---

## 6. Content Checklist Per Project
Make sure every project spread includes:
- [ ] Title
- [ ] Short description (2–4 sentences, story-like tone)
- [ ] Tech stack tags
- [ ] Project image/screenshot
- [ ] Video banner (with working link/embed)
- [ ] (Optional) live link / code link

## 7. Overall Checklist
- [ ] Leather-textured cover with pfp, name, role, email/LinkedIn/GitHub
- [ ] Optional preface/intro page
- [ ] N project spreads, each up to 2 pages (left = text/tags, right = media)
- [ ] Back cover page with contact info as the final page
- [ ] Scroll/swipe/keyboard-driven realistic page-turn animation
- [ ] Mobile-adapted layout
- [ ] Reduced-motion fallback
- [ ] Content sourced from a single structured data file for easy edits
