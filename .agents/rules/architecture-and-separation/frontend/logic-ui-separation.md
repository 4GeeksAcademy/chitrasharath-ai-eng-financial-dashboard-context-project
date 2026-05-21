---
title: Logic UI Separation
description: Keep calculation and transformation logic outside rendering layers.
scope: project
globs:
  - frontend/src/**/*.tsx
  - frontend/src/lib/**/*.ts
alwaysApply: false
content: |
  Put business logic into pure utility or domain modules and keep components focused on rendering and interaction orchestration.

examples:
  autofix:
    - Move business logic, calculations, and data transformations out of React components and into separate utility or domain modules.
    - Refactor components to import and use these utilities, keeping components focused on rendering and interaction.
  bad: |
    // Example of mixing logic and UI in a React component
    function TotalIncome({ transactions }) {
      // Business logic inside the component
      const total = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
      return <div>Total Income: {total}</div>;
    }

  good: |
    // Logic extracted to a utility function
    // utils/finance.ts
    export function calculateTotalIncome(transactions) {
      return transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
    }

    // Component only handles rendering
    // components/TotalIncome.tsx
    import { calculateTotalIncome } from '../utils/finance';
    function TotalIncome({ transactions }) {
      const total = calculateTotalIncome(transactions);
      return <div>Total Income: {total}</div>;
    }
---
