# Architecture

## System Design Overview
FinancePulse Dashboard is a two-tier application:
- Frontend: React + TypeScript single-page app (Vite).
- Backend: FastAPI service exposing financial metrics endpoints.

The frontend requests data from backend APIs and computes presentation-ready KPI and chart datasets in a utility layer.

## Runtime Topology
- Local development runs with Docker Compose services: `frontend` and `backend`.
- Frontend serves on port 5173; backend serves on port 8000.
- Vite proxies `/api` to `http://backend:8000` in local containerized workflow.
- Optional `VITE_API_BASE_URL` override supports non-default backend origins.

## API Contract and Schema
- FastAPI provides interactive API docs at `/docs`.
- FastAPI publishes the machine-readable OpenAPI schema at `/openapi.json`.
- `/openapi.json` is the canonical integration contract for frontend/backend API shape verification and future client-generation workflows.

## Frontend Architecture
- Entry orchestration is in `frontend/src/App.tsx`.
- Dashboard UI is composed from focused feature components under `frontend/src/components/dashboard`.
- Reusable primitives (for example card and skeleton) live under `frontend/src/components/ui`.
- Domain types are centralized in `frontend/src/lib/financial-types.ts`.
- Financial transforms (`computeKPIs`, `computeMonthlyData`) are implemented as pure utilities in `frontend/src/lib/financial-utils.ts`.
- Styling uses Tailwind CSS v4 with tokenized CSS variables in `frontend/src/index.css`.

## Backend Architecture
- App bootstrapping and CORS middleware are configured in `backend/app/main.py`.
- API routes and most domain logic currently live in `backend/app/routes.py` via `APIRouter`.
- Pydantic models define response contracts for movements, facets, summaries, top categories, comparisons, and alerts.
- Mock financial movements are generated deterministically (`seed=42`) and then filtered/aggregated by helper functions.

## Testing Architecture
- Frontend business logic tests run with Vitest in `frontend/src/lib/financial-utils.test.ts`.
- Backend route behavior is validated with pytest + FastAPI TestClient in `backend/tests/test_routes.py`.
- Tests emphasize deterministic data, filtering correctness, and endpoint contract stability.

## Architectural Constraints and Risks
- Precision risk: money values are currently represented as float/number in backend/frontend logic.
- Error-contract inconsistency risk: rule set expects standardized error envelopes not yet fully codified across all paths.
- Backend modularity risk: route and business logic co-location in one file may reduce scalability as features grow.
