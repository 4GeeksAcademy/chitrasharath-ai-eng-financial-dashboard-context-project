---
title: Responsive Data Visualization
description: Charts and dashboard visuals must adapt cleanly across viewport sizes.
scope: project
globs:
  - frontend/src/components/dashboard/**/*.tsx
alwaysApply: false
content: |
  Use responsive containers, readable tick behavior, and mobile-safe spacing so chart usability remains stable on small screens.

examples:
  autofix:
    - Refactor chart and visualization containers to use responsive utility classes (e.g., Tailwind CSS breakpoints) instead of fixed widths or inline styles.
    - Ensure all visualizations adapt to different viewport sizes using class-driven styling.
  bad: |
    // Fixed-width chart, not responsive, uses inline styles
    <div style={{ width: 800, height: 400 }}>
      <Chart data={data} />
    </div>
  good: |
    // Responsive chart container using Tailwind CSS breakpoints
    <div className="w-full h-60 sm:h-80 md:h-96 lg:h-[32rem] max-w-full md:max-w-3xl">
      <Chart data={data} />
    </div>
---