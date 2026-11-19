// Scheduled guides: written ahead, reviewed by a person, then committed with a
// future `publishedAt` (UTC day). lib/guides.ts hides each one until that day,
// and the daily deploy (00:17 UTC, .github/workflows/deploy.yml) releases it
// without a commit. scripts/check-schedule.mjs fails the build if more than two
// fall in one ISO week (a flood of new pages cost a sibling site its index in
// July 2026).
//
// To add a batch: put each guide in this folder as <slug>.tsx (same shape as
// src/content/guides/*.tsx, importing the GuideMeta TYPE only), import it here
// and add it to SCHEDULED. Rules for what goes in a guide are in
// docs/campus-post-plan-2026-11-19.md.
import type { Guide } from "@/lib/guides";

export const SCHEDULED: Guide[] = [];
