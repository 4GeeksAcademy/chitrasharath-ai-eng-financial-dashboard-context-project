# Frontend Feature Specifications

This document defines endpoint usage, type usage, parameter constraints, and edge-case behavior for three new features.

## Feature 1: Dashboard Date Range Filtering

### Endpoints Consumed
- `GET /api/metrics/facets`
  - Used to render available dataset date range (`min_date`, `max_date`) beside filters.

### TypeScript Types Used
- From `api-types.ts`
  - `FacetsResponse`
  - `ISODateString`
- From `param-types.ts`
  - `DateRangeFilter`

### Parameters, Valid Values, and Constraints
- `start_date`
  - Type: `ISODateString`
  - Format: `YYYY-MM-DD`
  - Constraint: optional.
- `end_date`
  - Type: `ISODateString`
  - Format: `YYYY-MM-DD`
  - Constraint: optional.
- Feature rule for incomplete input
  - If one or both dates are missing, include all data (no date restriction).

### Edge Cases and Required UI Behavior
1. Both dates missing.
   - UI must show all dashboard data and available range badge from facets.
2. Only `start_date` entered.
   - UI must show all dashboard data and display a hint that full-range fallback is active.
3. Only `end_date` entered.
   - UI must show all dashboard data and display a hint that full-range fallback is active.
4. `start_date` later than `end_date`.
   - UI must show validation message and prevent filtered request until corrected.
5. Selected range returns no rows.
   - UI must show explicit empty-state card for KPI/charts and keep filters visible.

## Feature 2: Spending Spike Alerts Table

### Endpoints Consumed
- `GET /api/metrics/alerts`
  - Used to retrieve spike periods by threshold and optional date/business filters.

### TypeScript Types Used
- From `api-types.ts`
  - `AlertEntry`
  - `AlertResponse`
- From `param-types.ts`
  - `AlertsParams`
  - `DateRangeFilter`
  - `GroupBy`

### Parameters, Valid Values, and Constraints
- `threshold`
  - Type: `number`
  - Semantics: decimal ratio.
  - Example: `0.3` means 30% increase.
  - Constraint: greater than or equal to `0`.
  - Backend default: `0.3`.
- `group_by`
  - Type: `GroupBy`
  - Valid values: `day`, `week`, `month`.
  - Backend default: `month`.
- `start_date`
  - Type: `ISODateString`
  - Format: `YYYY-MM-DD`
  - Constraint: optional.
- `end_date`
  - Type: `ISODateString`
  - Format: `YYYY-MM-DD`
  - Constraint: optional.
- `business_type`
  - Type: `BusinessType`
  - Valid values: `B2B`, `B2C`.
  - Constraint: optional.
- Feature rule for incomplete input
  - If exactly one date is entered, do not fetch alerts and show empty message.

### Edge Cases and Required UI Behavior
1. Exactly one date provided.
   - UI must not issue alerts request and must render empty-state message.
2. Threshold less than `0`.
   - UI must block submission and show validation error near threshold input.
3. API returns empty list.
   - UI must show "No spike periods found" state in table area.
4. API returns periods in mixed formats due to `group_by` changes.
   - UI must render period labels exactly as returned without data loss.
5. Alerts request fails (network or 5xx).
   - UI must show inline error panel and provide retry action.

## Feature 3: B2B vs B2C Revenue Comparison Page

### Endpoints Consumed
- `GET /api/metrics/categories/top`
  - Called twice, once per business line:
    - `operation_type=income&limit=5&business_type=B2B`
    - `operation_type=income&limit=5&business_type=B2C`
- `GET /api/metrics/facets`
  - Used for available categories/date-range context.

### TypeScript Types Used
- From `api-types.ts`
  - `CategoryEntry`
  - `TopCategoriesResponse`
  - `FacetsResponse`
- From `param-types.ts`
  - `TopCategoriesParams`
  - `DateRangeFilter`

### Parameters, Valid Values, and Constraints
- `operation_type`
  - Type: `OperationType`
  - Feature constraint: must be `income`.
  - API valid values: `income`, `outcome`.
- `limit`
  - Type: `number`
  - Feature constraint: set to `5`.
  - API constraint: integer from `1` to `20`.
- `business_type`
  - Type: `BusinessType`
  - Valid values: `B2B`, `B2C`.
  - Feature constraint: required and executed once per value.
- `start_date`
  - Type: `ISODateString`
  - Format: `YYYY-MM-DD`
  - Constraint: optional.
- `end_date`
  - Type: `ISODateString`
  - Format: `YYYY-MM-DD`
  - Constraint: optional.

### Edge Cases and Required UI Behavior
1. One business-line request succeeds and the other fails.
   - UI must show successful panel, failed panel error state, and disable comparison chart.
2. One side returns fewer than 5 categories.
   - UI must render returned rows only and preserve column structure.
3. Both sides return empty lists.
   - UI must show empty tables and chart-level empty message.
4. Selected date range outside dataset bounds.
   - UI must show no-data state with visible facets range guidance.
5. Category values differ between B2B and B2C responses.
   - UI must compute each panel percentage by its own panel total and chart from panel totals.

## Cross-Feature Rules
- All request dates use `YYYY-MM-DD` format.
- No `any` or `object` is allowed in specification type files.
- Every property in `api-types.ts` and `param-types.ts` must include JSDoc.
