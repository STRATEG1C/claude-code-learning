# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with HMR at http://localhost:5173
npm run build     # Type-check (tsc -b) then build for production
npm run lint      # Run ESLint
npm run preview   # Preview the production build locally
```

There are no tests configured in this project.

## Stack

- **React 19** + **TypeScript 5.9** + **Vite 8** + **React Router 7**
- ESLint 9 flat config with `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
- Plain CSS with custom properties for theming (no Tailwind, no CSS-in-JS)

## Architecture

Feature-Sliced Design (FSD). Entry: `index.html` → `src/main.tsx` → `src/app/App.tsx`.

### Layer order (each layer may only import from layers below it)

```
app → pages → widgets → features → entities → shared
```

### Key locations

- `src/app/` — providers (Theme, Auth), router, global CSS (`styles/global.css`, `styles/variables.css`)
- `src/pages/` — LoginPage, CompetitionPage, GroupPage, PlayoffPage
- `src/widgets/` — Header, GroupStandings, PlayoffBracket
- `src/features/` — `auth/` (LoginForm, AuthContext), `theme/` (ThemeSwitcher, ThemeContext), `apply-team/` (ApplyForm)
- `src/entities/` — `group/` (types + mockData), `match/` (types + mockData), `team/` (types)
- `src/shared/` — `ui/` (Button, Input, Modal, Badge), `lib/hooks/` (useAuth, useTheme), `config/routes.ts`

### Theming

`ThemeContext` in `src/features/theme/model/themeContext.tsx` manages dark/light mode. It sets `data-theme` on `<html>` and persists to localStorage (`fc-theme`). CSS variables are defined in `variables.css` with a `[data-theme='light']` override block.

### Auth

Mock only — `admin`/`admin` credentials hardcoded in `AuthContext`. Protected routes redirect to `/login` when unauthenticated.

### Mock data

All data is static mock data in entity model files. No backend or API calls.

### Page layout pattern

Pages use a two-div pattern to avoid padding conflicts with `.container`:
```tsx
<div className="page__content">   {/* owns vertical padding */}
  <div className="container">     {/* owns horizontal padding + max-width */}
    ...
  </div>
</div>
```

### Rules

- When adding a new page, always add a `<NavLink>` for it in `src/widgets/header/ui/Header.tsx`.
- Form state uses a single state object for all fields and a matching errors object (one key per field).
- Use `React.SyntheticEvent<HTMLFormElement>` for form submit handlers (not `React.FormEvent` — deprecated).
- Always use multi-line curly brace blocks for control flow — body on its own line, never inline: `if (x) { \n  y; \n }`.
- Inside any `{}` block, separate each statement/block with an empty line, except the last one before the closing brace.
