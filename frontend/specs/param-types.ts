import type { BusinessType, ISODateString, OperationType } from "./api-types";

/**
 * Aggregation granularity accepted by alerts endpoint.
 */
export type GroupBy = "day" | "week" | "month";

/**
 * Date range filter shared by dashboard-level feature requests.
 */
export interface DateRangeFilter {
  /**
   * Inclusive lower bound of the selected range.
   *
   * Format: `YYYY-MM-DD`.
   * Behavior: when omitted in Feature 1, all data must be included.
   */
  start_date?: ISODateString;

  /**
   * Inclusive upper bound of the selected range.
   *
   * Format: `YYYY-MM-DD`.
   * Behavior: when omitted in Feature 1, all data must be included.
   */
  end_date?: ISODateString;
}

/**
 * Query parameters for `GET /api/metrics/alerts`.
 */
export interface AlertsParams extends DateRangeFilter {
  /**
   * Minimum relative increase required to emit an alert.
   *
   * Value semantics: decimal ratio.
   * Example: `0.3` means +30%.
   * Constraint: greater than or equal to `0`.
   * Backend default: `0.3`.
   */
  threshold?: number;

  /**
   * Time granularity for period grouping.
   *
   * Valid values: `day`, `week`, `month`.
   * Backend default: `month`.
   */
  group_by?: GroupBy;

  /**
   * Optional business-line filter.
   *
   * Valid values: `B2B`, `B2C`.
   */
  business_type?: BusinessType;
}

/**
 * Query parameters for `GET /api/metrics/categories/top`.
 */
export interface TopCategoriesParams extends DateRangeFilter {
  /**
   * Operation type used for ranking.
   *
   * Feature 3 constraint: must be `income`.
   * API valid values: `income`, `outcome`.
   */
  operation_type: OperationType;

  /**
   * Maximum number of categories to return.
   *
   * Feature 3 default: `5`.
   * API constraints: integer from `1` to `20`.
   */
  limit?: number;

  /**
   * Business line to compare.
   *
   * Feature 3 requires two separate calls:
   * - one with `B2B`
   * - one with `B2C`
   */
  business_type: BusinessType;
}
