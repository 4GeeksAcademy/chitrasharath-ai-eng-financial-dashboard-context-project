---
title: No Hardcoded Locale Or Currency Assumptions
description: Locale and currency should be configurable and not hardwired in formatting logic.
scope: project
globs:
  - frontend/src/lib/**/*.ts
  - frontend/src/**/*.tsx
alwaysApply: false
content: |
  Use shared formatting utilities with configurable locale and currency inputs to support internationalization and tenant-specific settings.

examples:
  autofix:
    - Refactor formatting logic to accept locale and currency as parameters or use shared configuration.
    - Remove hardcoded currency symbols or locale strings from formatting functions.
  bad: |
    // Hardcoded currency and locale
    function formatPrice(amount: number) {
      return '$' + amount.toFixed(2);
    }
  good: |
    // Configurable currency and locale
    function formatPrice(amount: number, locale: string, currency: string) {
      return amount.toLocaleString(locale, { style: 'currency', currency });
    }
---
