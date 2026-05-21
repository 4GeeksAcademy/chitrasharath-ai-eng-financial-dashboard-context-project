---
title: Secure Default API Boundaries
description: Default system posture should minimize exposure and privilege.
scope: project
globs:
  - backend/app/**/*.py
  - frontend/src/**/*.ts
  - frontend/src/**/*.tsx
alwaysApply: true
content: |
  Favor deny-by-default configuration, explicit trust boundaries, and least privilege for external integrations and data access.

  This rule is broader than "Require Auth For Sensitive Metrics Endpoints":
  - "Require Auth..." is specific to sensitive metrics and financial endpoints, ensuring they require authentication and authorization.
  - "Secure Default API Boundaries" applies to all APIs and integrations, requiring a deny-by-default posture and explicit allowlists for any sensitive or risky operation, not just metrics.

examples:
  autofix:
    - Refactor APIs and integrations to use deny-by-default configuration and explicit allowlists for access.
    - Remove open or permissive access patterns and enforce least privilege for all endpoints and integrations.
  bad: |
    # API allows all traffic by default
    @app.get("/data")
    def get_data():
        return fetch_all_data()
  good: |
    # API restricts access by default, explicit allowlist
    @app.get("/data")
    @require_roles(["admin"])
    def get_data():
        return fetch_all_data()
---
