---
title: Avoid Money As Float
description: Financial amounts should avoid binary floating point representation.
scope: project
globs:
  - backend/app/**/*.py
  - backend/tests/**/*.py
alwaysApply: false
content: |
  Use Decimal or integer minor units for money values.
  Enforce precision-safe calculations and explicit rounding strategies.

examples:
  autofix:
    - Refactor all money values and calculations to use Decimal or integer minor units instead of float.
    - Update function signatures, calculations, and storage to enforce precision-safe types for financial amounts.
  bad: |
    # Using float for money
    def add_prices(a: float, b: float) -> float:
        return a + b
  good: |
    # Using Decimal for money
    from decimal import Decimal
    def add_prices(a: Decimal, b: Decimal) -> Decimal:
        return a + b
---