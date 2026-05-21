---
title: No Opaque Catch Blocks
description: Frontend error handling must preserve diagnostics and user-safe messaging.
scope: project
globs:
  - frontend/src/**/*.ts
  - frontend/src/**/*.tsx
alwaysApply: false
content: |
  Do not swallow errors silently.
  Capture actionable context for debugging and expose a safe, consistent user-facing error state.

examples:
  autofix:
    - Refactor catch blocks to log errors and provide user-facing error messages or states.
    - Avoid empty or silent catch blocks; always capture actionable context for debugging.
  bad: |
    // Opaque catch block, error is swallowed
    try {
      await fetchData();
    } catch (e) {
      // nothing happens
    }
  good: |
    // Error is logged and user is notified safely
    try {
      await fetchData();
    } catch (e) {
      console.error('Failed to fetch data', e);
      setError('Something went wrong. Please try again.');
    }
---
