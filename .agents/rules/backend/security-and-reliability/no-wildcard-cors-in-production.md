---
title: No Wildcard CORS In Production
description: Restrict CORS origins in production deployments.
scope: project
globs:
  - backend/app/main.py
  - backend/app/**/*.py
alwaysApply: true
content: |
  Never use unrestricted wildcard origins in production.
  Configure explicit allowlists per environment.

examples:
  autofix:
    - Replace any use of allow_origins=["*"] in CORS middleware with an explicit list of allowed origins for production environments.
    - Ensure CORS configuration is environment-aware and restricts origins in production.
  bad: |
    # main.py
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],  # Wildcard in production
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
  good: |
    # main.py
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["https://myapp.com", "https://admin.myapp.com"],  # Explicit origins
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
---