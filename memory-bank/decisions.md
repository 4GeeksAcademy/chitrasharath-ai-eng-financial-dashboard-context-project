# Decisions

## D-001: Full-Stack Split (React Frontend + FastAPI Backend)
- Status: Accepted
- Decision: Use React + TypeScript (Vite) for UI and FastAPI for the API layer.
- Rationale: Provides clear frontend/backend separation, strong developer ergonomics, and fast iteration in an educational full-stack setting.
- Consequences: Clean ownership boundaries and easier independent evolution of UI and API.

## D-002: Container-First Local Development
- Status: Accepted
- Decision: Run frontend and backend via Docker Compose.
- Rationale: Improves onboarding consistency and environment parity across contributors.
- Consequences: Slightly heavier local runtime but lower setup variability.

## D-003: Deterministic Mock Data Generation
- Status: Accepted (Current Baseline)
- Decision: Generate financial movement data in backend with fixed seed (`seed=42`).
- Rationale: Enables reproducible UI behavior and deterministic tests without requiring an external database.
- Consequences: Stable development/testing flow; realism limits compared with production-grade data variability.
- See Also: Current implementation status in `current-status.md` under "Implemented Features."

## D-004: Utility-First Frontend Financial Calculations
- Status: Accepted
- Decision: Keep KPI and chart aggregation logic in pure utility functions, separate from React components.
- Rationale: Improves testability, readability, and component simplicity.
- Consequences: Easier unit testing and safer refactoring of business logic.

## D-005: Strong Domain Typing for Financial Entities
- Status: Accepted
- Decision: Maintain explicit operation/category/business-type domain types and interfaces.
- Rationale: Reduces contract drift and prevents many runtime class-of-data errors.
- Consequences: Better compile-time safety; requires discipline when extending domain options.

## D-006: OpenAPI as Canonical API Contract
- Status: Accepted
- Decision: Use FastAPI OpenAPI output (`/openapi.json`) and docs (`/docs`) as canonical API references.
- Rationale: Supports contract visibility and enables future schema-driven validation or client generation.
- Consequences: Contract changes become visible and reviewable, but require careful versioning discipline.

## D-007: Money Precision Migration Needed
- Status: Pending / Transitional
- Decision: Project rules require precision-safe money handling; implementation still uses float/number.
- Rationale: Financial integrity standards call for deterministic precision and controlled rounding semantics.
- Consequences: Current implementation is acceptable for scaffold/demo use, but migration is needed before higher-stakes usage.
- See Also: Migration priority in `current-status.md` under "Next Priorities (P0)."

## D-008: Standardized Error Envelope Not Fully Enforced Yet
- Status: Pending / Transitional
- Decision: Adopt consistent error envelope patterns across backend and frontend.
- Rationale: Predictable error shapes simplify UI behavior, logs, and tests.
- Consequences: Until implemented, error handling remains partially inconsistent and more brittle at integration points.
- See Also: Standardization priority in `current-status.md` under "Next Priorities (P0)."
