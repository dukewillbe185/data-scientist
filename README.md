# Data Scientist Plugin

## Overview
Digital profile for a data scientist with 5 captured skills. Strongest signals: Feature Importance Validation, Bias Risk Decomposition, Objective Metric Alignment, Data Provenance Auditing. Coverage: 5 covered and 1 partial dimensions. Coverage is broad enough to move to blueprinting.

## Install
`/plugin install data-scientist@claude-plugin-directory`

## Capabilities
- Captured expert methodology

## Manual Boundaries
- Human review required for any model decision affecting user safety or financial outcomes.
- Final approval needed for production deployment of new models.
- Manual verification of data lineage and provenance before ingestion.
- Human oversight required for handling edge cases and model drift detection.

## Disclaimers
- Ensure all PII and sensitive data are anonymized before processing.
- Validate model outputs for bias and accuracy before deployment.
- Maintain audit logs for all data access and model training runs.
- Verify third-party library licenses before integration.

## Human Review
- A human reviewer must approve final recommendations, external commitments, or irreversible actions.
- The generated plugin should draft work and surface risk, not silently replace the expert.

## Environment Setup
- DB_HOST: Configuration value required for db host.
- DB_PORT: Configuration value required for db port.
- DB_NAME: Configuration value required for db name.
- DB_USER: Configuration value required for db user.
- DB_PASSWORD: Configuration value required for db password.
- MODEL_REGISTRY_URL: Configuration value required for model registry url.
