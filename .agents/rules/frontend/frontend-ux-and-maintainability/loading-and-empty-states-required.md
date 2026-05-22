---
title: Loading And Empty States Required
description: Data-driven UI components must define loading and empty states.
scope: project
globs:
  - frontend/src/components/**/*.tsx
  - frontend/src/App.tsx
alwaysApply: false
content: |
  Every async or data-dependent view should provide explicit loading, empty, and failed-state behavior.

examples:
  autofix:
    - Add explicit loading, empty, and error state handling to all data-driven or async UI components.
    - Ensure components display appropriate feedback (e.g., spinners, empty messages) instead of rendering nothing or failing silently.
  bad: |
    // No loading or empty state
    export function UserList({ users }) {
      return (
        <ul>
          {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
      );
    }
  good: |
    // Handles loading and empty states
    export function UserList({ users, loading }) {
      if (loading) return <div>Loading...</div>;
      if (!users.length) return <div>No users found.</div>;
      return (
        <ul>
          {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
      );
    }
---