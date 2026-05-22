---
title: Use Deterministic Test Data
description: Tests should use stable, reproducible datasets.
scope: project
globs:
  - frontend/src/**/*.test.ts
  - backend/tests/**/*.py
alwaysApply: true
content: |
  Avoid randomness and time-dependent values unless explicitly controlled.
  Seed or freeze variable inputs for repeatable outcomes.

examples:
  autofix:
    - Replace random or time-dependent test data with fixed, seeded, or frozen values to ensure repeatable test outcomes.
    - Use explicit seeds for randomness or mock time where needed for deterministic results.
  bad: |
    # Test uses random data, not repeatable
    import random
    def test_random():
        value = random.randint(1, 100)
        assert value > 0
  good: |
    # Test uses fixed seed for repeatability
    import random
    def test_seeded():
        random.seed(42)
        value = random.randint(1, 100)
        assert value == 82
---