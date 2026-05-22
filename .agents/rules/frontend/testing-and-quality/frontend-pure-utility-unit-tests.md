---
title: Frontend Pure Utility Unit Tests
description: Critical frontend utility logic requires focused unit tests.
scope: project
globs:
  - frontend/src/lib/**/*.ts
  - frontend/src/lib/**/*.test.ts
alwaysApply: false
content: |
  Add deterministic tests for pure transformations and formatting behavior.
  Cover normal, edge, and error-relevant scenarios.

examples:
  autofix:
    - Add focused unit tests for all pure utility functions in frontend/lib, covering normal, edge, and error scenarios.
    - Ensure tests are deterministic and validate transformation/formatting logic.
  bad: |
    // No unit test for utility function
    export function add(a, b) {
      return a + b;
    }
  good: |
    // Unit test for utility function
    // add.ts
    export function add(a, b) {
      return a + b;
    }

    // add.test.ts
    import { add } from './add';
    test('adds numbers', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(-1, 1)).toBe(0);
    });
---