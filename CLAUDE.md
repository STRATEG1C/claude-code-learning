# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Type-check (tsc -b) then production build
npm run lint      # Run ESLint on all files
npm run preview   # Preview production build locally
```

There are no tests configured in this project.

## Architecture

This project uses **Feature-Sliced Design (FSD)** — a strict layered architecture where upper layers can import from lower layers but not vice versa:

```
app → pages → widgets → features → entities → shared
```

**Layer responsibilities:**

- `src/app/` — Root providers (`ThemeProvider`, `AuthProvider`), router, and global styles/CSS variables
- `src/pages/` — One component per route; assembles widgets
- `src/widgets/` — Large standalone UI sections (e.g. `Header`, `GroupStandings`, `PlayoffBracket`)
- `src/features/` — Stateful behaviors: `auth/` (context + login form), `theme/` (context + switcher)
- `src/entities/` — Domain types and mock data: `match/`, `group/`, `team/`
- `src/shared/` — Primitives reusable anywhere: `ui/` components, `config/routes.ts`, `lib/hooks/`

## Routing

Route constants live in `src/shared/config/routes.ts`. The router is in `src/app/router/AppRouter.tsx` and uses a `ProtectedRoute` wrapper that redirects unauthenticated users to `/login`.

**Whenever a new page is added under `src/pages/`, also add a `<NavLink>` for it in `src/widgets/header/ui/Header.tsx`.**

## Styling

Global CSS custom properties (design tokens) are defined in `src/app/styles/variables.css`. The dark theme is the default; light theme overrides use `[data-theme='light']` on `document.documentElement`. Theme preference is persisted to `localStorage` under the key `fc-theme`.

Each component has a co-located `.css` file.

## Documentation

When implementing features that use a library or framework, use Context7 MCP to fetch current documentation before writing code:

1. Call `resolve-library-id` with the library name and the task
2. Call `query-docs` with the resolved library ID and the specific question

## Code Style

Always write control flow blocks with curly braces and the body on a new line:

```ts
// correct
if (condition) {
  statement;
}

// wrong
if (condition) statement;
```

Separate each statement or block inside `{}` with a blank line (except before the closing brace):

```ts
const fn = () => {
  const x = 1;

  if (condition) {
    doSomething();
  }

  doSomethingElse();
};
```

## Review the Work

- **Invoke the ui-ui-reviewer subagent** to review your work and implement suggestions where needed
- Iterate on the review process when needed
