# Memory Bank Documentation

The `memory-bank` folder contains key documentation files that provide a comprehensive overview of the project's vision, architecture, conventions, decisions, and current status. These files are designed to ensure clarity, alignment, and traceability throughout the development process.

## Files Overview

### 1. `product-context.md`
- **Purpose**: Documents the product vision, target users, business goals, key features, and success metrics.
- **Key Sections**:
  - Vision and Goals
  - Target Audience
  - Success Metrics

### 2. `architecture.md`
- **Purpose**: Details the system design, runtime topology, API contract, and architectural risks.
- **Key Sections**:
  - System Overview
  - API Contract (OpenAPI Schema)
  - Architectural Risks

### 3. `conventions.md`
- **Purpose**: Lists coding standards, rule-to-code gaps, and best practices.
- **Key Sections**:
  - Separation of Concerns
  - Type Safety
  - Testing Conventions

### 4. `decisions.md`
- **Purpose**: Records key architectural and feature decisions, including rationale and consequences.
- **Key Sections**:
  - Accepted Decisions
  - Transitional Decisions
  - Rationale and Consequences
- **Cross-References**: Links to `current-status.md` for implementation tracking.

### 5. `current-status.md`
- **Purpose**: Outlines implemented features, known gaps, and next priorities.
- **Key Sections**:
  - Implemented Features
  - Known Gaps
  - Next Priorities (P0, P1, P2)
- **Cross-References**: Links to `decisions.md` for rationale and context.

## Usage
- **Developers**: Use these files to understand the project's direction, technical decisions, and current progress.
- **Contributors**: Refer to the conventions and decisions to align with the project's standards.
- **Stakeholders**: Review the product context and current status to track progress and priorities.

## Maintenance
- Keep the documentation up-to-date as the project evolves.
- Ensure cross-references between files remain accurate and relevant.
- Regularly review the `current-status.md` file to reflect the latest implementation progress and priorities.