---
title: Require Test Coverage For New Business Logic
description: New business logic changes must include matching test coverage.
scope: project
globs:
  - frontend/src/**/*
  - backend/app/**/*
alwaysApply: true
content: |
  Any new rule-driven behavior, aggregation logic, or filtering logic must ship with tests that prove correctness and guard against regressions.

examples:
  autofix:
    - Add or update tests to cover all new business logic, including rule-driven behavior, aggregation, and filtering.
    - Ensure tests prove correctness and guard against regressions for every new logic change.
  bad: |
    # New business logic added, but no test
    def calculate_discount(amount):
        if amount > 100:
            return amount * 0.9
        return amount
  good: |
    # New business logic with matching test
    def calculate_discount(amount):
        if amount > 100:
            return amount * 0.9
        return amount

    def test_calculate_discount():
        assert calculate_discount(150) == 135
        assert calculate_discount(50) == 50
---