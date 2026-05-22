---
title: Modular API Routing
description: Keep app bootstrapping separate from route handler implementations.
scope: project
globs:
  - backend/app/main.py
  - backend/app/routes.py
  - backend/app/**/*.py
alwaysApply: false
content: |
  Use routers and dedicated modules for endpoint logic.
  Keep entrypoint files focused on application setup and middleware wiring.

examples:
  autofix:
    - Move route handler implementations out of main application entrypoint files (e.g., main.py) into dedicated route modules.
    - Use FastAPI routers and include_router to organize endpoints by feature or domain.
  bad: |
    # All routes and app setup in one file
    app = FastAPI()
    @app.get("/data")
    def get_data(): ...
  good: |
    # main.py
    app = FastAPI()
    app.include_router(api_router)

    # routes.py
    @router.get("/data")
    def get_data(): ...
---