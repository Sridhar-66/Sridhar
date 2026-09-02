# Design Guidelines — Sridhar's Site

A reference for keeping every new page/section consistent with the site's visual identity. Read this before adding anything new.

## Design Identity

**Vibe:** Bold, punchy, D2C-marketing-page energy (think Zepto/Blinkit brand pages) — confident color blocking, thick outlines, sticker-like elements. Playful but disciplined, not chaotic.

**One rule above all:** spend boldness in *one* place per section. If a section has a loud color block, keep its neighbors calmer. Never let two loud elements compete on screen at once.

---

## Color

| Token | Hex | Use for |
|---|---|---|
| `--cream` | `#FFFCF5` | Base background, light surfaces |
| `--ink` | `#14121F` | Text, outlines, dark surfaces |
| `--pink` | `#FF4D8D` | Primary accent — CTAs, highlight blocks |
| `--yellow` | `#FFD93D` | Secondary accent — badges, highlights |
| `--violet` | `#6C3CE9` | Tertiary — section backgrounds, links |
| `--mint` | `#3DDC97` | Quaternary pop — small accents, decoration |

**Rules:**
- Every colored block/card gets a `border-4 border-[#14121F]` outline. This is the signature device — never drop it, never change the width.
- Don't use more than 2–3 accent colors in one viewport at a time.
- Ink (`#14121F`) is the only "black" — never use pure `#000`.
- Cream (`#FFFCF5`) is the only "white" — never use pure `#FFF`.

---

## Typography

- **Display font:** Space Grotesk (`font-display` class) — bold, geometric. Use for all headlines, big numbers, nav, buttons.
- **Body font:** Inter (default) — use for paragraph copy, descriptions.
- Two fonts only. Never introduce a third.
- Headlines: `font-bold`, tight tracking, large sizes (don't be shy — the hero name is `text-[15vw]` on mobile).
- No all-caps labels except inside the marquee ticker (that's the one place it's earned, because it mimics ticker-tape/signage).
- Never bold or color just one word in a headline for "emphasis" — style the whole line intentionally instead.

---

## Layout & Structure

- **Sections are separated by `border-b-4 border-[#14121F]`** — hard edges, not soft shadows or spacing gaps. Keep this consistent site-wide.
- **Cards/blocks:** `rounded-3xl` + `border-4 border-[#14121F]`. Don't mix border-radius values within a grid — pick one per section.
- **Bento grids:** vary column-span per card based on content weight (a big idea gets more space), never make every card identical size. Boring identical-card grids are the thing we're avoiding.
- **Numbering (01, 02, 03):** only for genuinely sequential content (the journey timeline). Never add numbers to non-sequential lists just for visual rhythm.
- Alignment: left-aligned text blocks throughout (matches the confident, editorial feel). Avoid centering large text blocks.

---

## Motion

- **One deliberate entrance per page/section** — currently the hero badge's `wiggle-in`. Don't add scroll-triggered fade-ins to every section; that's the generic AI-page tell.
- **The marquee** is the one continuous ambient motion allowed on the page. Don't add a second one elsewhere.
- **Hover states** on buttons/links: small lift (`-translate-y-1`) + hard offset shadow in an accent color (`shadow-[4px_4px_0_0_#COLOR]`). This is the interactive-motion signature — reuse it on all future buttons.
- Always wrap custom animations in `@media (prefers-reduced-motion: reduce)` to disable them (see `globals.css`).

---

## Copy / Voice

- Written in first person, plain and direct — like you're actually saying it, not selling it.
- No corporate/startup-speak ("leveraging synergies," "passionate about"). Say what a thing actually is.
- Section headers are short and human ("About my life," "The journey so far") — not generic labels ("Our Mission," "Overview").
- CTAs say exactly what happens ("See what I'm about," "Say hi") — not vague verbs ("Learn more," "Submit").

---

## JSX / Code Gotchas (learned the hard way)

- **Apostrophes in text content:** always write `&apos;` instead of a raw `'` inside JSX text (e.g. `I&apos;m`, `Let&apos;s`). Avoids smart-quote corruption from copy/paste and IDE autocorrect.
- **Copy-pasting into the IDE:** paste into a plain text editor first if your IDE has smart-quotes/autocorrect on, then copy from there into the code file. Curly quotes (`'` `"`) break JSX string literals.
- Double-check every `<a>` tag has its tag name intact after pasting — paste operations have silently dropped the `<a` before now.

---

## When Adding a New Section

Checklist before shipping it:
1. Does it use only colors from the token table above?
2. Does every card/block have the `border-4 border-[#14121F]` outline?
3. Is there only one "loud" moment in this section, with everything else quiet around it?
4. Is any motion either the one-time entrance pattern or a hover response — not a new scroll-triggered effect?
5. Does the copy sound like you talking, not a template?
6. Have you swapped all raw `'` in JSX text for `&apos;`?