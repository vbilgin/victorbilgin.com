# Domain Docs

This repo uses a single-context layout: `CONTEXT.md` at the repo root and ADRs under `docs/adr/`.

## Before exploring

Read root `CONTEXT.md` and any ADRs under `docs/adr/` relevant to the area you are about to work in.

If these files do not exist, proceed silently. Domain modeling creates them lazily when terms or decisions get resolved.

## Use the glossary's vocabulary

When naming domain concepts in issues, proposals, hypotheses, or tests, use the terms defined in `CONTEXT.md`. If a needed concept is missing, reconsider whether the project uses it or note the gap for domain modeling.

## Flag ADR conflicts

If a proposal contradicts an existing ADR, identify the ADR and explain why the decision should be reconsidered rather than silently overriding it.
