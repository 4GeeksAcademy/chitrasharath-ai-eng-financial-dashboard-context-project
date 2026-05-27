# Component Breakdown

This document defines component-level responsibilities for the three new frontend features.

## Feature 1: Dashboard Date Range Filters

### Goal
Add start-date and end-date inputs at the top of the home dashboard. Dashboard data respects the selected date range. If one or both dates are missing, include all data.

### Proposed Components
- `DashboardDateFilterBar`
  - Renders `start_date` and `end_date` inputs.
  - Validates local date format before applying filters.
  - Exposes apply/reset actions and current selection state.
- `DashboardAvailableRangeBadge`
  - Shows dataset availability window from facets (`min_date` to `max_date`).
  - Appears next to the date filters.
- `DashboardDataController`
  - Owns date filter state and request orchestration.
  - Applies all-data fallback when one or both dates are missing.
  - Triggers data refresh for KPI cards and charts.

### Data Flow
- Read facets using `GET /api/metrics/facets` to render available range labels.
- Read metrics data using `GET /api/metrics` with date params when both dates are present.
- Skip date params when one or both dates are missing.

### UI States
- Loading: show skeleton placeholders for KPI/cards/charts.
- Empty: show standard dashboard empty state when data response has no rows.
- Error: show inline error banner in dashboard body.

## Feature 2: Spending Spike Alerts Table

### Goal
Render a table below the dashboard highlighting periods with unexpected spending spikes.

### Required Columns
- Period
- Recorded outcome
- Rolling average of 3 previous periods
- Percentage increase

### Proposed Components
- `AlertsControlBar`
  - Renders threshold ratio input.
  - Displays currently active threshold.
- `SpendingSpikeTable`
  - Renders tabular alert rows with the four required columns.
  - Handles sorting by period descending by default.
- `SpendingSpikeTableEmptyState`
  - Renders empty message when:
    - no rows are returned, or
    - no dates or exactly one date is provided.
- `AlertsDataController`
  - Builds `AlertsParams`.
  - Calls alerts endpoint when request is valid.
  - Enforces empty behavior for incomplete date input.

### Data Flow
- Call `GET /api/metrics/alerts` with threshold and optional filters.
- Use decimal threshold ratio (example: `0.4` for 40%).

### UI States
- Loading: table skeleton rows.
- Empty: "No spike periods to display for the selected filters."
- Error: inline table-level error panel with retry action.

## Feature 3: B2B vs B2C Revenue Comparison Page

### Goal
Create a dedicated comparison page with:
- two side-by-side top-income category tables (B2B and B2C), and
- one chart below comparing total income across the two business lines.

### Proposed Components
- `RevenueComparisonPage`
  - Page-level composition and layout.
  - Hosts filter controls and all comparison sections.
- `ComparisonDateFilterBar`
  - Shared date range inputs for both business lines.
  - Broadcasts range updates to both data requests.
- `TopIncomeCategoriesPanel`
  - Receives `business_type` (`B2B` or `B2C`).
  - Renders top 5 income categories table.
  - Columns: category, total income, % of panel total.
- `BusinessLineIncomeComparisonChart`
  - Renders visual comparison of total B2B income vs total B2C income.
  - Computes totals from each panel response payload.
- `ComparisonDataController`
  - Executes two API calls in parallel:
    - `/api/metrics/categories/top?operation_type=income&limit=5&business_type=B2B`
    - `/api/metrics/categories/top?operation_type=income&limit=5&business_type=B2C`
  - Uses facets response to validate available categories/date bounds.

### Data Flow
- Use `GET /api/metrics/facets` for dataset context and available category set.
- Use two filtered `GET /api/metrics/categories/top` calls, one per business type.
- Apply selected date range to both calls when both dates are present.

### UI States
- Loading: both panels and chart show coordinated loading placeholders.
- Empty: per-panel empty rows plus chart empty card when one or both responses are empty.
- Error: partial failure support (one panel may fail while the other remains visible).

## Shared Reuse Guidance
- Reuse existing card and skeleton primitives from dashboard UI layer.
- Keep business logic in controller/services and keep presentational components stateless.
- Keep formatting centralized via shared currency/percentage helpers.
