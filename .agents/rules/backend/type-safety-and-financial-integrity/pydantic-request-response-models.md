---
title: Pydantic Request Response Models
description: Use validated models for API input and output contracts.
scope: project
globs:
  - backend/app/**/*.py
alwaysApply: false
content: |
  Define request and response models for endpoint contracts and avoid returning unvalidated unstructured payloads from handlers.

examples:
  autofix:
    - Refactor API endpoints to use Pydantic models for both request and response payloads.
    - Avoid returning or accepting unvalidated, unstructured dicts; always define and use explicit models.
  bad: |
    # No Pydantic model, unstructured dict
    @app.post("/user")
    def create_user(request):
        data = request.json()
        return {"id": 1, "name": data["name"]}
  good: |
    # Using Pydantic models for request and response
    from pydantic import BaseModel
    class UserRequest(BaseModel):
        name: str

    class UserResponse(BaseModel):
        id: int
        name: str

    @app.post("/user", response_model=UserResponse)
    def create_user(user: UserRequest):
        return UserResponse(id=1, name=user.name)
---