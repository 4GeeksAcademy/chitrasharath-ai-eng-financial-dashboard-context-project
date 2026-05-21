---
title: Backend Route Integration Tests
description: API routes require integration-level tests for request to response behavior.
scope: project
globs:
  - backend/app/**/*.py
  - backend/tests/**/*.py
alwaysApply: false
content: |
  Verify endpoint contract shape, filters, and key branch outcomes using FastAPI test client or equivalent integration test harness.

examples:
  autofix:
    - Add integration tests for all API routes using FastAPI test client or equivalent, verifying request/response behavior and key outcomes.
    - Ensure tests cover endpoint contract shape, filters, and important branches, not just internal logic.
  bad: |
    # No integration test for API route
    # Only unit tests for internal functions
    def test_sum():
        assert sum([1, 2, 3]) == 6
  good: |
    # Integration test using FastAPI test client
    from fastapi.testclient import TestClient
    from app.main import app

    client = TestClient(app)

    def test_get_items():
        response = client.get("/items")
        assert response.status_code == 200
        assert "items" in response.json()
---
