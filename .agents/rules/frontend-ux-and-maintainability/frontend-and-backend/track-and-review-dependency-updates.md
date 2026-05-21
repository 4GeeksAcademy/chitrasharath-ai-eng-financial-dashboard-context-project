---
title: Track And Review Dependency Updates
description: Dependency updates should be regularly reviewed for security and compatibility impact.
scope: project
globs:
  - backend/requirements.txt
  - frontend/package.json
  - frontend/package-lock.json
alwaysApply: true
content: |
  Record and review dependency changes with risk notes, test validation, and rollback clarity for major or security-sensitive upgrades.

examples:
  autofix:
    - Document all dependency updates in a changelog or equivalent file, including version changes and risk notes.
    - Validate and test all major or security-sensitive upgrades before merging.
  bad: |
    # Upgrading dependencies without review or documentation
    $ pip install --upgrade fastapi
    $ npm update
  good: |
    # Documenting and validating dependency updates
    # CHANGELOG.md
    - Upgraded fastapi from 0.95.0 to 0.110.0 (see release notes)
    - Upgraded react from 18.0.0 to 18.2.0 (tested all major flows)
---
