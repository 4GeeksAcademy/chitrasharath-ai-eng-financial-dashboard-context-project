---
title: Lint And Quality Scripts Required
description: Projects must maintain runnable lint and quality scripts.
scope: project
globs:
  - frontend/package.json
  - backend/requirements.txt
  - README.md
alwaysApply: true
content: |
  Ensure lint and test commands are documented, executable, and expected in CI or local pre-merge checks.

examples:
  autofix:
    - Add or update lint and test scripts in package.json and requirements.txt to ensure they are runnable.
    - Document these scripts in the README and ensure they are included in CI or pre-merge checks.
  bad: |
    // No lint or test scripts in package.json
    {
      "name": "frontend",
      "scripts": {
        "start": "vite"
      }
    }
  good: |
    // Lint and test scripts present in package.json
    {
      "name": "frontend",
      "scripts": {
        "start": "vite",
        "lint": "eslint .",
        "test": "vitest run"
      }
    }
---
