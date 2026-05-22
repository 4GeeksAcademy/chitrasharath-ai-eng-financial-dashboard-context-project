---
title: Avoid Stateful Randomized API Responses
description: API behavior must be deterministic for the same inputs in normal runtime.
scope: project
globs:
  - backend/app/**/*.py
alwaysApply: false
content: |
  Do not generate random production responses for core endpoints.
  Randomization is only acceptable in explicit mock or test-only paths.

examples:
  autofix:
    - Replace any use of random or non-deterministic values in production endpoints with deterministic, data-driven logic (e.g., fetch from database or config).
    - Restrict randomization to explicit mock or test-only paths.
  bad: |
    @router.get("/metrics")
    def metrics():
        import random
        return {"value": random.randint(1, 100)}
  good: |
    @router.get("/metrics")
    def metrics():
        value = calculate_metric_from_db()
        return {"value": value}
---