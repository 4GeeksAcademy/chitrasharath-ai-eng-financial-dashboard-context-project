---
title: Pin Runtime Dependency Versions
description: Runtime dependencies should be pinned or constrained to predictable versions.
scope: project
globs:
  - backend/requirements.txt
  - frontend/package.json
  - frontend/package-lock.json
alwaysApply: true
content: |
  Avoid broad unbounded dependency declarations for runtime packages.
  Use explicit versions or controlled ranges and review updates intentionally.

examples:
  autofix:
    - Update dependency declarations in requirements.txt, package.json, and package-lock.json to use explicit versions or controlled version ranges.
    - Avoid using unbounded, wildcard, or 'latest' version specifiers for runtime dependencies.
  bad: |
    # requirements.txt
    fastapi
    numpy
    # package.json
    "dependencies": {
      "react": "^18",
      "axios": "latest"
    }
  good: |
    # requirements.txt
    fastapi==0.110.0
    numpy>=1.26.0,<2.0.0
    # package.json
    "dependencies": {
      "react": "18.2.0",
      "axios": "1.6.7"
    }
---