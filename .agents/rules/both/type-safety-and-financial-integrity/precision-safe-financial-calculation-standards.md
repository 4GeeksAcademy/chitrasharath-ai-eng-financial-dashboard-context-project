---
title: Precision Safe Financial Calculation Standards
description: Financial calculations must preserve precision and consistent rounding across layers.
scope: project
globs:
  - frontend/src/lib/**/*.ts
  - backend/app/**/*.py
alwaysApply: true
content: |
  Use deterministic precision rules, avoid repeated conversion chains, and validate edge cases such as zero, negatives, and large magnitudes.

  This rule is broader than "Avoid Money As Float":
  - "Avoid Money As Float" is about never using float/number types to represent money values—always use Decimal or integer minor units.
  - "Precision Safe Financial Calculation Standards" covers all calculation practices: always use precision-safe methods and libraries for every financial operation, not just storage.

examples:
  autofix:
    - For Python: Replace all float-based money calculations with Decimal, e.g., `sum(prices)` → `sum(Decimal(p) for p in prices)`.
    - For JavaScript/TypeScript: Use a precision library (like decimal.js) for all money calculations, e.g., `a + b` → `a.plus(b)` and initialize with `new Decimal(0)`.
  bad: |
    # Using float for financial calculation (Python)
    def calculate_total(prices):
        return sum(prices)

    // Using JavaScript number for money
    function calculateTotal(prices) {
      return prices.reduce((a, b) => a + b, 0);
    }
  good: |
    # Using Decimal for precision (Python)
    from decimal import Decimal
    def calculate_total(prices):
        return sum(Decimal(p) for p in prices)

    // Using a library for precision (JavaScript)
    import Decimal from 'decimal.js';
    function calculateTotal(prices) {
      return prices.reduce((a, b) => a.plus(b), new Decimal(0));
    }
---