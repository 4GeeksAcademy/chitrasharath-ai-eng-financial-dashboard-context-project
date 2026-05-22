---
title: Reusable UI Primitives First
description: Prefer extending shared UI primitives before creating one-off patterns.
scope: project
globs:
  - frontend/src/components/**/*.tsx
alwaysApply: false
content: |
  Build features on top of reusable card, layout, and skeleton primitives to preserve consistency and reduce duplicated styles.

  This rule is different from "Component-Based Architecture":
  - Component-Based Architecture is about breaking the UI into small, focused, composable components (structure and separation of concerns).
  - Reusable UI Primitives First is about building new features by composing existing shared primitives (like Card, Button, Skeleton), not by creating custom, one-off UI patterns (consistency and reuse of foundational building blocks).

examples:
  autofix:
    - Refactor custom or one-off UI patterns to use shared UI primitives (e.g., Card, Button, Skeleton) where possible.
    - Extend or compose existing primitives before creating new component patterns.
  bad: |
    // Custom one-off card markup
    <div className="custom-card">Content</div>
  good: |
    // Use shared Card primitive
    <Card>Content</Card>
---