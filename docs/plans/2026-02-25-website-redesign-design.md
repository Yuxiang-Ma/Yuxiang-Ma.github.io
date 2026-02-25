# Website Redesign Design — 2026-02-25

## Overview

Full redesign of Yuxiang Ma's personal academic website (yuxiang-ma.github.io).
- Tech stack: Pure HTML/CSS/JS, single `index.html`, deployed on GitHub Pages
- Style: Clean academic (A + B hybrid) — Jon Barron-style structure with two-column hero

## Architecture

Single `index.html` + `style.css` (new, replaces w3.css dependency) + inline vanilla JS.
Remove dependency on `w3.css` and `font-awesome.min.css`. Keep `jquery` optional (not needed).

## Sections

### 1. Sticky Top Nav
- Fixed bar at top, white background, bottom border `1px solid #eee`
- Links: About · Research · Projects · Resume
- Smooth-scroll to `#about`, `#research`, `#projects`; Resume opens PDF
- On mobile: same bar, links stay visible (short enough)

### 2. Hero / About
- Two-column: photo left (160px rounded), bio right
- Name `<h1>`, title line "PhD Student, MIT MechE"
- 2–3 bio paragraphs (existing content, lightly edited)
- Social links row: Email · Google Scholar · LinkedIn · GitHub
- Mobile: single column, photo centered

### 3. Research
- Section header "Research"
- Toggle bar: `[ Selected | By Date ]` — active tab gets bold + `#1772d0` underline; default = Selected
- Each paper entry: table-row layout
  - Left: 160×120px thumbnail
  - Right: bold title, authors (Yuxiang bolded), venue + year italic, links `[web][arxiv][code][video]`, 1–2 sentence description
- "Selected" = T3, GelLink, Scalable Fin Ray (3 highlighted papers marked with `data-selected="true"`)
- "By Date" = all papers newest-first
- Toggle via JS: show/hide rows by `data-selected` attribute

### 4. Projects
- Section header "Projects"
- Toggle bar: `[ Class Projects | Hobby Projects ]` — same toggle style
- Responsive card grid: 3 cols desktop, 2 tablet, 1 mobile
- Each card: image/placeholder, title, 2–3 sentence description, optional links
- Default: show Class Projects
- Initial placeholder cards (to be filled in by user later)

### 5. Footer
- "Updated Feb 2026" + template credit

## Visual Style

| Element | Value |
|---|---|
| Background | `#ffffff` |
| Max content width | `850px`, centered |
| Nav height | `50px` |
| Section bg alternation | white / `#f9f9f9` |
| Primary color | `#1772d0` |
| Hover color | `#f09228` |
| Body font | Lato (keep existing) |
| Section headers | `#333`, 22px, bold |
| Toggle active | bold, `2px solid #1772d0` underline |
| Card border | `1px solid #e8e8e8`, box-shadow `0 1px 4px rgba(0,0,0,0.06)` |

## Implementation Tasks (linked)

- Task #6: Build HTML skeleton (nav, sections, footer)
- Task #7: Write style.css
- Task #8: Populate Research section with existing papers
- Task #9: Add JS for Research + Projects toggles
- Task #10: Add Projects section with placeholder cards
- Task #11: Verify mobile responsiveness and cleanup
