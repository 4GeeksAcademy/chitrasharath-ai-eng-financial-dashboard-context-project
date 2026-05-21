---
title: Require Structured Logging
description: Backend services should emit structured logs for diagnostics and observability.
scope: project
globs:
  - backend/app/**/*.py
alwaysApply: false
content: |
  Log meaningful events with structured fields such as endpoint, correlation id, and outcome status.
  Avoid noisy or sensitive payload logging.

examples:
  autofix:
    - Replace unstructured print or log statements with structured logging calls that include fields like endpoint, correlation id, and status.
    - Avoid logging sensitive payloads and ensure logs are meaningful for diagnostics.
  bad: |
    # Unstructured log message
    print(f"User {user_id} did something: {data}")
  good: |
    # Structured logging with fields
    logger.info(
        "user_action",
        extra={
            "user_id": user_id,
            "endpoint": "/api/action",
            "status": "success",
            "correlation_id": correlation_id,
        }
    )
---
