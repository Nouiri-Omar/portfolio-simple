# Portfolio-as-a-Book — Build Spec

> Reference build to fix/iterate on: https://portfolio-simple-ebon.vercel.app/
> See **Section 3 — Book Anatomy & Physics** below: it walks through exactly how a real closed/opening/open book behaves and pinpoints where the spine and flip direction go wrong.

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

## 3. Book Anatomy & Physics — Read This Before Writing Any Animation Code

This is the part the current build gets wrong (spine placement, flip direction). Get this mental model right first — it maps directly and literally to the CSS/3D setup, so getting the physics right *is* getting the code right.

### 3.0 Closed Book (initial state, before the user does anything)

- A closed book is **one rigid object**, not a left/right pair. There is **no spine down the middle** at this point — the spine (the bound edge) sits at the **far left edge** of the whole object, and the fore-edge (the open/fanning edge) is at the **far right edge**. Picture a book lying on a table, front cover facing up: binding on your left, page edges on your right.
- What the user sees at rest is effectively **just the front cover** — full width, one surface. This is your existing cover page (name, photo, socials), but it must occupy the *entire* book width, not a "left half," because nothing has been opened yet. If the cover currently renders as if it's the "right page" of an already-open book (spine visibly cutting through the middle), that's the bug — at rest, before the first interaction, there should be no center spine visible at all, only the closed cover.

### 3.1 The Opening Move (cover → first spread)

Opening the book is the *same mechanical action* as every later page turn, just applied to the cover:

- The front cover is hinged at its **left edge** (that edge *is* the spine, permanently — it never moves).
- On the first scroll/click, the cover rotates around that left edge, lifting up and sweeping over to reveal what's underneath, exactly like turning a page forward.
- Once the cover has rotated ~180° and settled, the result must be a **two-page spread**, centered, with the spine now sitting exactly in the **horizontal middle of the book container**:
  - **Left page** = the inside-front-cover / title-page (Section 3.2, e.g. a preface or "In this book you'll find...").
  - **Right page** = the first real content page (Page 1 of the first project, or a table-of-contents page if you want one).
- This is the moment the "spine in the middle" appears for the first time — it should **not** exist before this point, and it should be perfectly centered the instant the cover finishes opening, not off to one side.

### 3.2 Open Book (steady reading state)

- Once open, the book is always showing **one spread**: a left page and a right page, divided by a spine that sits at the exact horizontal center of the book container, top to bottom.
- The spine is a **fixed visual/structural element** — a shadowed gutter/crease down the center — it does not move, resize, or shift sides as pages turn. Only the *page content* on either side of it changes.
- Bookbinding terms worth using literally in code/comments so this stays unambiguous for whoever builds it:
  - **Recto** = a right-hand page (would be an odd page number in a printed book).
  - **Verso** = a left-hand page (even page number).
  - Each physical "leaf" (one turnable sheet) has a recto face and a verso face printed on its two sides — front and back of the same sheet.

### 3.3 Turning Forward (next page — scroll down / → )

1. The current **right page (recto)** is what turns. It lifts off the right side and rotates **around the spine**, sweeping *toward the left* and settling on top of the left stack.
2. Its rotation origin is its **own left edge** — which is the spine. It is not the center of the page, and not the outer/right edge. Getting this origin wrong is exactly what makes a flip look like it's hinging "in the wrong spot."
3. As it crosses 90° (edge-on to the viewer), the front face (what was showing) disappears and the **back face of that same leaf** becomes visible — this is the verso content that was printed on the reverse of that sheet.
4. It finishes lying flat on the left, now displaying that verso content as the **new left page**.
5. Underneath, a **new recto page** (the next leaf's front face) was already sitting in place and is now revealed as the **new right page**.
6. End state: a new spread is showing (new left + new right), spine still dead-center, and the just-turned leaf now sits on the "already read" stack to the left.

### 3.4 Turning Backward (previous page — scroll up / ← )

Exact mirror of 3.3: the current **left page (verso)** lifts off the left side, rotation origin at its **own right edge** (the spine), and rotates *rightward* back over to the right side, revealing its recto face again, while the previous leaf's verso is revealed underneath as the new left page.

### 3.5 The One Rule That Fixes Both Bugs

> **The spine is a fixed line at the exact horizontal center of the open-book container. Every rotation, for every page in either direction, pivots on that exact center line — never on a page's own center, never on the book's outer edges.** Before opening, that center line doesn't visually exist yet (Section 3.0); the moment the cover finishes its opening flip, that center line is where the spine appears, and it never drifts from there again.

If you build the transform-origin as *"the edge of the container"* or *"50% of the individual page div"* instead of *"the true center of the whole open book, referenced identically by both the left and right page elements,"* you'll reproduce the current bug. Both pages' rotation math must reference the **same absolute coordinate**.

---

## 4. Structure of the Book

### 4.1 Cover Page (Page 0)
- Profile picture (circular or framed like an embossed portrait).
- Full name (large, centered or aligned like a book title).
- A short subtitle/role (e.g. "Full-Stack Developer" — like a book's subtitle).
- Small embossed/foil-effect icons for professional profiles, styled like a "printed on the cover" imprint (foil-stamped look), not like typical navbar icons. Required links, each with its **actual logo icon** (not just text):
  - **Email** (mailto icon)
  - **LinkedIn** — icon links to `https://www.linkedin.com/in/omar-nouiri/`
  - **GitHub** — icon links to `https://github.com/Nouiri-Omar`
  - Use recognizable brand marks (e.g. from `react-icons` — `FaLinkedin`, `FaGithub`, `FaEnvelope` — or simple-icons SVGs) rather than generic placeholder glyphs, but recolor them to match the foil/embossed cover treatment (e.g. a single accent tone, subtle inner shadow) so they don't look like a stock icon row dropped onto leather.
- Repeat the same LinkedIn/GitHub icon row on the **back cover / contact page** (Section 4.4) — the last page of the book should let a reader leave straight from the ending, without having to scroll all the way back to the cover.
- Optional: a subtle "tap/scroll to open" hint (e.g. a small animated arrow or "Open the book ↓").

### 4.2 Inside Cover / Title Page (optional, Page 1)
- Could act as a short intro/bio — "In this book you'll find..." — a short personal statement, like a preface.

### 4.3 Project Spreads (Pages 2...N)
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

### 4.4 Back Cover / Final Page — Contact
- This is the **last page** of the book, styled like the back cover/colophon.
- Contact info: email (mailto link), **LinkedIn logo → `https://www.linkedin.com/in/omar-nouiri/`**, **GitHub logo → `https://github.com/Nouiri-Omar`**, maybe a downloadable resume/CV link.
- Could reuse the leather cover material to visually "close the loop" with the front cover.

---

## 5. Interaction & Animation

### 5.1 Page Turn on Scroll (implements the physics from Section 3)
- Scrolling (mouse wheel / trackpad / touch swipe) should **trigger a page-turn animation**, not a normal vertical scroll.
- The turn itself must follow the rules in **Section 3** exactly — spine-centered rotation origin shared by both pages, correct direction per Section 3.3/3.4, correct front/back face swap. This section is only about *triggering* and *pacing* the animation; Section 3 is the source of truth for *how the flip itself moves*.
- Recommended approach:
  - Use **scroll-jacking**: intercept wheel/touch events, translate scroll delta into a "turn progress" (0→1), and only advance to the next page once a threshold is crossed (like Apple product pages, but with a literal page-curl instead of parallax).
  - Libraries to evaluate:
    - [`react-pageflip`](https://www.npmjs.com/package/react-pageflip) – ready-made book/page-flip component that already implements the correct spine-hinge model from Section 3; good starting point instead of hand-rolling the 3D transform math.
    - **Framer Motion** + custom 3D CSS transforms (`transform-style: preserve-3d`, `rotateY`) for a hand-rolled page-turn if more control over the "leather" feel is needed — just make sure `transform-origin` is wired to the shared spine coordinate described in Section 3.5, not to each page's own box.
    - **GSAP + ScrollTrigger** for scroll-driven page-turn timelines if finer scrubbing control is needed.
  - Add a subtle shadow sweep and a slight "paper flex" easing (not linear — ease-in-out with a little overshoot/settle) on top of the correct rotation, per Section 3.3.
- Keyboard (←/→) and click-on-page-corner should also be supported as accessible alternatives to scroll.
- Debounce/throttle scroll input so a single scroll gesture doesn't skip multiple pages by accident.

### 5.2 Mobile
- On mobile, swipe left/right (or up/down) should perform the same page-turn.
- Consider stacking left/right pages vertically on very small screens (project spread becomes "page A then page B" in sequence) while keeping the same book aesthetic.

### 5.3 Micro-interactions
- Hover on tag chips: subtle lift/shadow ("embossed press" feel).
- Video banner hover: slight zoom + play icon pulse.
- Page corner hover (near edges): small curl hint to indicate it's turnable, like real book UI affordances (see react-pageflip demos).

---

## 6. Technical Notes for the Next.js Implementation

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

## 7. Content Checklist Per Project
Make sure every project spread includes:
- [ ] Title
- [ ] Short description (2–4 sentences, story-like tone)
- [ ] Tech stack tags
- [ ] Project image/screenshot
- [ ] Video banner (with working link/embed)
- [ ] (Optional) live link / code link

## 8. Overall Checklist
- [ ] Closed book at rest shows only the full-width cover, no visible spine (Section 3.0)
- [ ] Opening animation hinges at the book's left edge and results in a centered spine (Section 3.1)
- [ ] Leather-textured cover with pfp, name, role, email/LinkedIn/GitHub logos
- [ ] Optional preface/intro page
- [ ] N project spreads, each up to 2 pages (left = text/tags, right = media)
- [ ] Back cover page with contact info + LinkedIn/GitHub logos as the final page
- [ ] Page-turn rotation origin is the shared spine coordinate for every page, both directions (Section 3.5)
- [ ] Scroll/swipe/keyboard-driven realistic page-turn animation
- [ ] Mobile-adapted layout
- [ ] Reduced-motion fallback
- [ ] Content sourced from a single structured data file for easy edits