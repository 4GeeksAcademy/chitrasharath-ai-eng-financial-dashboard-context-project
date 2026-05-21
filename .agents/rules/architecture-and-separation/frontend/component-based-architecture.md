---
title: Component-Based Architecture
description: Build UI as small composable components with clear responsibilities and reusable boundaries.
scope: project
globs:
  - frontend/src/components/**/*.tsx
  - frontend/src/App.tsx
alwaysApply: false
content: |
  Prefer composing feature screens from reusable primitives and focused feature components.
  Avoid monolithic components that mix layout, data shaping, and interaction logic.

examples:
  autofix:
    - Refactor large, monolithic components into smaller, focused, and reusable components.
    - Move distinct logic, layout, and UI responsibilities into separate components and compose them together.
  bad: |
    // One giant component with all logic and markup
    export function Dashboard() {
      // ...lots of state, logic, and markup...
      return <div>...</div>
    }
  good: |
    // Small, focused components
    export function Dashboard() {
      return (
        <div>
          <DashboardHeader />
          <KpiRow />
          <IncomeOutcomeChart />
        </div>
      )
    }
---
