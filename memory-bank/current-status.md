# Current Status

## Implemented Features
- The following agent skills are available and in use across the project:
	- accessibility-compliance: WCAG 2.2, ARIA, and inclusive design patterns for accessible UIs.
	- python-code-style: Python code style, linting, formatting, naming conventions, and documentation standards.
	- typescript-charts-style: Unified chart style for TypeScript/React charts (currency/percent formatting, legend, min/max, alignment, etc.).
	- typescript-expert: Advanced TypeScript and JavaScript expertise, type-level programming, performance, and monorepo management.
	- vercel-react-best-practices: React and Next.js performance optimization guidelines from Vercel Engineering.
- Dashboard charts now follow a unified TypeScript chart style skill:
	- Consistent currency and percentage formatting on y-axis and tooltips.
	- Conditional x-axis label rotation and margin for long labels.
	- Right-side vertical legend for all charts.
	- Min/max value summary blocks above each chart, right-aligned, with series color coding.
	- Top alignment of chart plotting areas across cards for visual consistency.
	- Skill is documented in `.agents/skills/typescript-charts-style/SKILL.md` and enforced in both profit-percent and income-outcome charts.
- Dashboard UI renders KPI cards for income, outcome, profit, and profit percent.
- Dashboard UI renders monthly income/outcome and profit-percent chart views.
- Backend exposes core metrics endpoint with filter support for date, category, and operation type.
- Backend exposes facets, summary, top categories, comparison, and alerts analytics endpoints.
- Backend exposes segmented B2B and B2C metric endpoints.
- Deterministic mock movement generation supports reproducible runs.
- Frontend utility functions for KPI and monthly aggregation are covered by unit tests.
- Backend API behavior and filtering contracts are covered by integration tests.

## Known Gaps
- Financial amounts still use float/number instead of precision-safe money representations. See Decision D-007 in `decisions.md` for rationale and consequences.
- Standardized error envelope conventions are not consistently enforced end-to-end. See Decision D-008 in `decisions.md` for rationale and consequences.

## Next Priorities
### P0
- Implement precision-safe money model migration across backend and frontend financial calculations. See Decision D-007 in `decisions.md` for rationale and consequences.
- Standardize backend error envelopes and align frontend parsing/handling. See Decision D-008 in `decisions.md` for rationale and consequences.

### P1
- Integrate frontend with summary, top categories, comparison, alerts, and facets endpoints.
- Add API contract checks against `/openapi.json` for integration confidence.

### P2
- Add observability and usage instrumentation to support success metrics tracking.
- Refactor backend route logic into clearer modules (schemas, services, route handlers).

## Delivery Posture
- Overall status: Functional MVP with stable local development workflow and reliable deterministic tests.
- Readiness summary: Good for iteration and learning; requires precision and reliability hardening before production-sensitive use.
