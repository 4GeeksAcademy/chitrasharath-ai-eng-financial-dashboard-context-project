/**
 * API date string in ISO calendar format.
 *
 * Format: `YYYY-MM-DD`.
 * Example: `2026-05-26`.
 */
export type ISODateString = string;

/**
 * Supported operation kinds for financial movements and aggregates.
 */
export type OperationType = "income" | "outcome";

/**
 * Supported business lines.
 */
export type BusinessType = "B2B" | "B2C";

/**
 * Supported financial categories.
 */
export type Category =
  | "suppliers"
  | "sales"
  | "operational"
  | "administrative"
  | "others";

/**
 * Aggregation period labels used by alerts summaries.
 *
 * Valid patterns depend on `group_by` in the request:
 * - day: `YYYY-MM-DD`
 * - week: `YYYY-Www` (ISO week)
 * - month: `YYYY-MM`
 */
export type AlertPeriodLabel = string;

/**
 * Response from `GET /api/metrics/facets`.
 */
export interface FacetsResponse {
  /**
   * Distinct operation types available in the dataset.
   *
   * Valid values: `income`, `outcome`.
   */
  operation_types: OperationType[];

  /**
   * Distinct business lines available in the dataset.
   *
   * Valid values: `B2B`, `B2C`.
   */
  business_types: BusinessType[];

  /**
   * Distinct movement categories available in the dataset.
   *
   * Valid values: `suppliers`, `sales`, `operational`, `administrative`, `others`.
   */
  categories: Category[];

  /**
   * Earliest date present in the dataset.
   *
   * Format: `YYYY-MM-DD`.
   */
  min_date: ISODateString;

  /**
   * Latest date present in the dataset.
   *
   * Format: `YYYY-MM-DD`.
   */
  max_date: ISODateString;
}

/**
 * One anomaly row from `GET /api/metrics/alerts`.
 */
export interface AlertEntry {
  /**
   * Period key where the alert was detected.
   *
   * Formats:
   * - day: `YYYY-MM-DD`
   * - week: `YYYY-Www`
   * - month: `YYYY-MM`
   */
  period: AlertPeriodLabel;

  /**
   * Total outcome amount recorded for the alert period.
   *
   * Unit: currency amount as a decimal number.
   * Range: non-negative.
   */
  outcome_total: number;

  /**
   * Rolling baseline average used to evaluate the spike.
   *
   * Unit: currency amount as a decimal number.
   * Range: non-negative.
   */
  baseline_average: number;

  /**
   * Relative increase compared with baseline.
   *
   * Value semantics: decimal ratio.
   * Example: `0.25` means +25%.
   * Range: greater than `threshold` used in request.
   */
  increase_ratio: number;
}

/**
 * Response from `GET /api/metrics/alerts`.
 *
 * Each item represents one detected spending spike period.
 */
export type AlertsResponse = AlertEntry[];

/**
 * One ranked category row from `GET /api/metrics/categories/top`.
 */
export interface CategoryEntry {
  /**
   * Category identifier.
   *
   * Valid values: `suppliers`, `sales`, `operational`, `administrative`, `others`.
   */
  category: Category;

  /**
   * Operation type used to compute the ranking.
   *
   * For Feature 3, expected request value is `income`.
   */
  operation_type: OperationType;

  /**
   * Total amount aggregated for this category under the applied filters.
   *
   * Unit: currency amount as a decimal number.
   * Range: non-negative.
   */
  total_amount: number;
}

/**
 * Response from `GET /api/metrics/categories/top`.
 *
 * Ordered from highest total to lowest total.
 */
export type TopCategoriesResponse = CategoryEntry[];
