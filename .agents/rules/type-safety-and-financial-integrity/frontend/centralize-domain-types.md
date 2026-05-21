---
title: Centralize Domain Types
description: Define shared frontend domain interfaces in central type modules.
scope: project
globs:
  - frontend/src/lib/**/*types*.ts
  - frontend/src/**/*.ts
  - frontend/src/**/*.tsx
alwaysApply: false
content: |
  Reuse canonical domain types across charts, cards, and utilities to avoid drift and duplicate interface definitions.

examples:
  autofix:
    - Move all domain type/interface definitions to a central types module (e.g., types.ts) in the frontend/lib directory.
    - Refactor all usages to import types from this central location, removing duplicate or scattered definitions.
  bad: |
    // Duplicate type definitions in different files
    // chart.ts
    type Transaction = { id: string; amount: number };

    // card.ts
    type Transaction = { id: string; amount: number };
  good: |
    // Centralized domain type in types.ts
    // types.ts
    export type Transaction = { id: string; amount: number };

    // chart.ts
    import { Transaction } from './types';

    // card.ts
    import { Transaction } from './types';
---
