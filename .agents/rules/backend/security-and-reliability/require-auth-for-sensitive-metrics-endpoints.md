---
title: Require Auth For Sensitive Metrics Endpoints
description: Sensitive financial metrics endpoints require authentication and authorization.
scope: project
globs:
  - backend/app/routes.py
  - backend/app/**/*.py
alwaysApply: true
content: |
  Protect financial and operational data APIs with authn and authz checks and avoid exposing internal metrics publicly.

examples:
  autofix:
    - Add authentication and authorization checks (e.g., Depends(require_admin)) to all sensitive financial and metrics endpoints.
    - Ensure no sensitive data APIs are accessible without proper authn/authz.
  bad: |
    # No authentication on sensitive endpoint
    @router.get("/metrics")
    def metrics():
        return get_sensitive_metrics()
  good: |
    # Auth required for sensitive endpoint
    @router.get("/metrics")
    def metrics(user: User = Depends(require_admin)):
        return get_sensitive_metrics()
---