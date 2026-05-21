---
title: Containerized Dev Environment Standard
description: Maintain a reliable containerized development workflow.
scope: project
globs:
  - docker-compose.yml
  - frontend/Dockerfile
  - backend/Dockerfile
alwaysApply: true
content: |
  Keep local setup reproducible through containers and ensure docs and compose definitions remain aligned with active services.

examples:
  autofix:
    - Add or update Dockerfiles and docker-compose.yml to ensure all services can be run in containers.
    - Update documentation (e.g., README) to instruct developers to use containerized workflows for setup and development.
  bad: |
    # Manual setup instructions in README, no Docker support
    $ pip install -r requirements.txt
    $ npm install
    $ python app/main.py
    $ npm run dev
  good: |
    # Docker Compose for unified dev environment
    $ docker compose up --build
---
