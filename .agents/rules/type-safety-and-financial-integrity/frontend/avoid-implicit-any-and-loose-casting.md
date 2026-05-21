---
title: Avoid Implicit Any And Loose Casting
description: Prevent unsafe typing shortcuts that hide runtime risks.
scope: project
globs:
  - frontend/src/**/*.ts
  - frontend/src/**/*.tsx
alwaysApply: false
content: |
  Do not use implicit any or broad casts that bypass type checks.
  Narrow unknown data using guards and validated mappers.

examples:
  autofix:
    - Add explicit types to all function parameters and variables; avoid implicit any.
    - Replace broad or unsafe casts (as any) with type guards or validated mappers to narrow unknown data safely.
  bad: |
    // Implicit any and loose casting
    function handleData(data) {
      const user = data as any;
      return user.name;
    }
  good: |
    // Explicit typing and type guard
    type User = { name: string };

    function isUser(obj: unknown): obj is User {
      return typeof obj === 'object' && obj !== null && 'name' in obj;
    }

    function handleData(data: unknown) {
      if (isUser(data)) {
        return data.name;
      }
      throw new Error('Invalid user data');
    }
---
