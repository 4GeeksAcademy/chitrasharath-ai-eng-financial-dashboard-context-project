---
title: Separation Of Concerns
description: Separate domain logic, transport concerns, presentation, and infrastructure concerns.
scope: project
globs:
  - frontend/src/**/*
  - backend/app/**/*
alwaysApply: true
content: |
  Keep layers independent and connected through explicit contracts.
  Avoid mixing data access, transformation, and presentation in a single unit.

examples:
  autofix:
    - Refactor code to separate domain logic, data access, transport, and presentation into distinct modules or layers.
    - Ensure each layer interacts only through explicit contracts and does not mix unrelated responsibilities.
  bad: |
    # Data access, transformation, and response all mixed
    @app.get("/summary")
    def summary():
        data = db.query(...)
        result = [x * 2 for x in data]
        return {"result": result}
  good: |
    def get_summary_data():
        data = db.query(...)
        return transform_summary(data)

    @app.get("/summary")
    def summary():
        return {"result": get_summary_data()}
---