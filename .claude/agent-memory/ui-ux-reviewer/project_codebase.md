---
name: Project codebase conventions
description: Key design tokens, breakpoints, auth flow, and component patterns discovered while reviewing this project
type: project
---

Auth state is purely in-memory React context (no localStorage/session). Navigating away via `page.goto()` drops auth state — must use client-side link clicks after logging in. Credentials: admin / admin.

Theme is toggled by setting `data-theme="light"` on `document.documentElement` and storing `fc-theme` in localStorage. Can be set directly via JS for review purposes.

Design tokens live in `src/app/styles/variables.css`. Key tokens:
- `--color-primary`: cyan (#00e5ff dark, #1565c0 light)
- `--color-surface-elevated`: slightly raised surface
- `--color-text-secondary`: muted labels
- `--color-border`: border lines
- `--border-radius-sm`: 6px

**Why:** Needed every review session to navigate correctly and set theme state.
**How to apply:** After login, always use nav link clicks (not page.goto) to navigate. Use JS to set data-theme attribute directly for theme switching.
