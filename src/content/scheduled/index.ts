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

// Batch 1 (written 19 Nov 2026 from docs/keywords-2026-11-19.json): Tuesdays and Fridays, 24 Nov to 18 Dec 2026.
import { meta as androidMeta, Body as AndroidBody } from "./android-project-ideas-for-students";
import { meta as pythonMeta, Body as PythonBody } from "./python-project-ideas-with-source-code";
import { meta as javaMeta, Body as JavaBody } from "./java-projects-with-source-code";
import { meta as iotMeta, Body as IotBody } from "./iot-project-ideas-for-final-year";
import { meta as phpMeta, Body as PhpBody } from "./php-projects-with-source-code";
import { meta as cMeta, Body as CBody } from "./c-programming-mini-project-ideas";
import { meta as cyberMeta, Body as CyberBody } from "./cyber-security-project-ideas-for-students";
import { meta as dataMeta, Body as DataBody } from "./data-science-project-ideas-for-final-year";

export const SCHEDULED: Guide[] = [
  { meta: androidMeta, Body: AndroidBody },
  { meta: pythonMeta, Body: PythonBody },
  { meta: javaMeta, Body: JavaBody },
  { meta: iotMeta, Body: IotBody },
  { meta: phpMeta, Body: PhpBody },
  { meta: cMeta, Body: CBody },
  { meta: cyberMeta, Body: CyberBody },
  { meta: dataMeta, Body: DataBody },
];
