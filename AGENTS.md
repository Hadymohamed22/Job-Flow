# Project Instructions

## Overview

### Project Name : JobFlow

### Description :

- it's an application users can use it to add , save and manage his applications easily
- it provide a dashboard provides a set of statistics on the user's most recent submissions
- it provide a page for table of applications order by status ( Interviewing - Considering - Applied - Rejected ) and new application page to add a new application
- it provide a kanban page to make transition between application status is very easy

---

## Stack :

- React v19 / Next.js v16 (App Router)
- TypeScript
- NextAuth for authentication
- shadcn/ui components, Tailwind CSS, lucide-react for icons
- React Hook Form for collecting form data, Zod for validation
- next-intl for translations
- TanStack Query for server-state (queries/mutations)

---

## Folder Structure

```
src/
  app/
    <route>/
      page.tsx
      layout.tsx
      loading.tsx        # route-level loading UI
      error.tsx           # route-level error boundary
      _components/        # components scoped to this route only
      _types/              # types scoped to this route only
      _schema/             # zod schemas scoped to this route only
      _skeletons/           # loading skeletons scoped to this route only
      _utils/                # utils scoped to this route only
      _constants/              # constants scoped to this route only

shared/
  components/    # components reused across 2+ routes
  lib/
    utils/         # cross-route utility functions
    types/          # cross-route shared types
    constants/       # cross-route shared constants
  providers/        # app-wide context providers (theme, auth, query client, etc.)
```

**Import alias:** use `@/shared/...` and `@/app/...` — never relative paths that climb more than one level (`../../..`).

**Rule of thumb:** if a component, type, or schema is used by more than one route, it belongs in `shared/`, not in a route's `_components`/`_types`/etc.

---

## Naming Conventions

| Item               | Convention                                                         | Example                |
| ------------------ | ------------------------------------------------------------------ | ---------------------- |
| Component file     | kebab-case                                                         | `application-card.tsx` |
| Component name     | PascalCase                                                         | `ApplicationCard`      |
| Hook file/name     | camelCase, `use` prefix                                            | `useRegister.ts`       |
| Server action file | camelCase, `Action` suffix                                         | `registerAction.ts`    |
| Zod schema file    | camelCase, `Schema` suffix                                         | `registerSchema.ts`    |
| Constants file     | camelCase                                                          | `statusOptions.ts`     |
| Props type         | name it `Props` for all components, declared outside the component | `type Props = {...}`   |

---

## Component Conventions

- `export default` goes on the same line as the component declaration:

```tsx
  export default function ComponentName() { ... }
```

- Props type is named `Props` (or `<ComponentName>Props` if disambiguation is needed) and declared **outside** the component body.
- Prefer Server Components by default. Only add `"use client"` when the component needs hooks, event handlers, or browser-only APIs.
- Add explanatory comments in large/complex components to mark logical sections — don't comment obvious code.
- Add JSDoc only for complex utils or complex components (skip it for simple, self-explanatory code).

### Standard section order inside a component

When a component needs more than one of the following, organize it in this order with a short comment header for each section present:

1. Translation
2. Navigation (`useRouter`, `usePathname`, `useSearchParams`, etc.)
3. State
4. Ref
5. Context
6. Query
7. Mutation
8. Hooks (custom hooks)
9. Form & Validation
10. Variables
11. Functions
12. Effects
    Only include the sections a component actually uses — don't add empty placeholder comments.

---

## Architecture Pattern: Action → View → Hook

We separate logic into three file types per feature (not classic MVC — read the roles carefully):

- **Action** (`registerAction.ts`) — server-side logic: server actions, mutations, data writes. No JSX, no client state.
- **View** (`register-form.tsx`) — presentational component: renders UI, receives data/handlers via props or the hook below.
- **Hook** (`useRegister.ts`) — client-side glue: wires up form state, calls the Action, manages local/query state, exposes what the View needs.
  Rule: Views should stay presentational. Business logic and data fetching belong in the Hook or Action, not inline in the View.

---

## Rules

- Never introduce a new state management library without asking first.
- Prefer Server Components; only add `"use client"` when necessary (hooks, events, browser APIs).
- All data fetching/mutations go through the Action + Hook pattern above — no ad-hoc `fetch` calls inside Views.
- Use route-level `loading.tsx`/`error.tsx` for route-wide states; use `_skeletons`
- use shadcn Skeleton components when you create any skeleton
