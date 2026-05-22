---
title: Avoid Hardcoded User Facing Strings
description: User-facing copy should be centralized for consistency and localization readiness.
scope: project
globs:
  - frontend/src/**/*.tsx
  - frontend/src/**/*.ts
alwaysApply: false
content: |
  Move repeated UI copy to constants or localization layers and keep wording changes decoupled from component logic.

examples:
  autofix:
    - Move all user-facing strings out of components and into shared constants or localization files.
    - Replace hardcoded strings in components with imports from these centralized sources.
  bad: |
    // Hardcoded user-facing string in component
    export function SubmitButton() {
      return <button>Submit Order</button>;
    }
  good: |
    // Centralized user-facing string in constants/localization
    // strings.ts
    export const SUBMIT_ORDER_LABEL = 'Submit Order';

    // SubmitButton.tsx
    import { SUBMIT_ORDER_LABEL } from './strings';
    export function SubmitButton() {
      return <button>{SUBMIT_ORDER_LABEL}</button>;
    }
---