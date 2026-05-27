# TypeScript Charts Style Skill

## Supported Chart Types
- Line charts
- Bar charts
- Histograms
- Scatter plots

## Line Chart Styling Skills

1. **Currency Value Formatting**
   - For currency charts (for example, income/outcome), format y-axis and tooltip values with a currency prefix (generally `$`) using a shared formatter.
   - Do not format x-axis month/category labels as currency unless the x-axis itself represents currency values.
   - Example: `$1,000` instead of `1000`.

2. **Percentage Value Formatting**
   - For percentage charts (for example, profit percent), format y-axis and tooltip values with a `%` suffix.
   - Do not format x-axis month/category labels as percentages unless the x-axis itself represents percentage values.
   - Example: `25%` instead of `25`.

3. **X-Axis Label Rotation and Chart Size**
   - If any x-axis label value is longer than 4 characters, rotate all x-axis labels by 45 degrees for improved readability.
   - Adjust chart spacing (especially bottom margin) and tick font size so rotated labels are fully visible and not cropped.
   - Prefer conditional rotation where possible; for dense monthly labels, a fixed 45-degree rotation is acceptable.

4. **Legend Positioning**
   - Move the legend to the right side of the chart, displayed vertically.

5. **Highlight Extremes**
   - Clearly label the lowest and highest values in the line chart.
   - Place extreme-value labels in a dedicated summary block above the chart, right-aligned, to avoid overlap with lines and legend.
   - For multi-series charts, show min/max per series in matching series colors.

6. **Top Alignment Across Charts**
   - When multiple chart cards are displayed in the same row, align the top of the actual chart plotting area across cards.
   - Keep pre-chart summary areas (such as min/max blocks) at a consistent height using fixed or minimum height values.
   - Use consistent spacing above each chart container so chart canvases start at the same vertical position.

---

> This skill provides style and formatting guidance for TypeScript/React-based chart visualizations. Expand with additional chart-type-specific skills as needed.
