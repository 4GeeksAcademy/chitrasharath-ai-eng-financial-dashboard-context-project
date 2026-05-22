---
title: Keep Domain Constants Out Of Route Handlers
description: Place domain constants in shared domain or config modules, not inline in handlers.
scope: project
globs:
  - backend/app/**/*.py
  - frontend/src/**/*.ts
alwaysApply: false
content: |
  Centralize category lists, thresholds, and static business values in dedicated modules to improve reuse, testing, and future data-source migration.

examples:
  autofix:
    - Move domain constants (e.g., category lists, thresholds) out of route handlers and into shared domain or config modules.
    - Import and use these constants in handlers, avoiding inline definitions.
  bad: |
    @app.get("/category")
    def category():
        OUTCOME_CATEGORIES = ["food", "rent", "utilities"]
        # ...use OUTCOME_CATEGORIES...
  good: |
    from .constants import OUTCOME_CATEGORIES
    @app.get("/category")
    def category():
        # ...use OUTCOME_CATEGORIES...
---