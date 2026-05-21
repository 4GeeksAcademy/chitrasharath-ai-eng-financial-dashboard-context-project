# Conventions

## Separation of Concerns
- Keep domain logic, transport logic, and presentation logic in separate units.
- Keep React components focused on rendering and orchestration; move calculations into utility/domain modules.
- Avoid placing domain constants and complex business rules directly inside route handlers when scaling features.

## Type Safety and Domain Modeling
- Centralize domain types and interfaces in shared frontend domain modules.
- Use explicit interfaces and avoid implicit `any` and loose casting.
- Keep API request/response contracts explicit with Pydantic on backend routes.

## Financial Data Integrity
- Follow precision-safe financial calculation standards across frontend and backend.
- Rule target: avoid float/number for money and migrate toward `Decimal` or integer minor units with deterministic rounding rules.
- Validate edge cases for zero, negative, and large values in financial computations.

## API and Error Handling
- Treat `/openapi.json` as the source of truth for API contracts.
- Maintain consistent error surface patterns so frontend handling stays predictable.
- Keep filtering and aggregation behavior deterministic and test-backed.

## Testing and Quality Gates
- Any new business logic must include matching automated tests.
- Prefer deterministic test data for reliable assertions.
- Keep lint and test scripts runnable and part of normal pre-merge checks.

## Frontend UX and Maintainability
- Implement explicit loading, empty, and error states for data-driven views.
- Prefer reusable UI primitives over one-off component patterns.
- Keep charts responsive and legible across viewport sizes.

## Environment and Tooling
- Use containerized development for local parity.
- Keep runtime/dependency versions pinned to reduce drift.
- Use documented scripts for development, build, lint, and tests.

## Current Rule-to-Code Gaps
- Money precision rules are stricter than current float/number implementation.
- Standardized error envelope conventions are not yet uniformly enforced.
