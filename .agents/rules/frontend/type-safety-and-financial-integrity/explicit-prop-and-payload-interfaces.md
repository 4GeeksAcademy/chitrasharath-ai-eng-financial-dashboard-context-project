---
title: Explicit Prop And Payload Interfaces
description: Component props and structured payloads must use explicit interfaces or types.
scope: project
globs:
  - frontend/src/**/*.tsx
alwaysApply: false
content: |
  Avoid loosely typed props.
  Name and export types when reused and keep external contract fields explicit and intentional.

examples:
  autofix:
    - Add explicit interfaces or types for all component props and structured payloads.
    - Name and export types when reused, and ensure all external contract fields are explicit and intentional.
  bad: |
    // Loosely typed props
    function UserCard(props) {
      return <div>{props.name}</div>;
    }
  good: |
    // Explicitly typed props interface
    interface UserCardProps {
      name: string;
    }

    function UserCard(props: UserCardProps) {
      return <div>{props.name}</div>;
    }
---