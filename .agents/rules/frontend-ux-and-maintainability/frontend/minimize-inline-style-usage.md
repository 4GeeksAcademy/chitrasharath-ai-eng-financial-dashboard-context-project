---
title: Minimize Inline Style Usage
description: Prefer class-driven styling and design tokens over inline style objects.
scope: project
globs:
  - frontend/src/**/*.tsx
alwaysApply: false
content: |
  Keep styles centralized and theme-aware.
  Use inline styles only when dynamic values cannot be expressed through established style systems.

examples:
  autofix:
    - Replace inline style objects in JSX with className attributes using design tokens or utility classes (e.g., Tailwind CSS).
    - Only use inline styles for dynamic values that cannot be represented with existing class systems.
  bad: |
    <div style={{ color: 'red', fontWeight: 'bold' }}>Alert</div>
  good: |
    <div className="text-error font-bold">Alert</div>
---
