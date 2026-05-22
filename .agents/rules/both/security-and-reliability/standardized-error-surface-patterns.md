---
title: Standardized Error Surface Patterns
description: Errors should follow consistent shapes and handling patterns across app layers.
scope: project
globs:
  - backend/app/**/*.py
  - frontend/src/**/*.ts
  - frontend/src/**/*.tsx
alwaysApply: true
content: |
  Normalize error envelopes and handling conventions so logs, tests, and user experiences remain predictable.

examples:
  autofix:
    - Refactor all error responses to use a consistent, standardized envelope (e.g., {"error": {"code": ..., "message": ...}}) across all layers.
    - Update error handling logic to normalize error shapes and ensure predictable structure for logs, tests, and user-facing messages.
  bad: |
    # Inconsistent error shape
    return {"error": "Something failed"}
    # elsewhere
    return {"message": "Oops!"}
  good: |
    # Standardized error envelope
    return {
      "error": {
        "code": "FETCH_FAILED",
        "message": "Unable to fetch data."
      }
    }
---