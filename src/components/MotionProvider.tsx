"use client";

import type { ReactNode } from "react";
import { LazyMotion, MotionConfig } from "framer-motion";

/** One deferred chunk for the whole animation engine; it loads after hydration. */
const loadFeatures = () => import("./motionFeatures").then((r) => r.default);

/** Honors the OS-level "reduce motion" setting for every framer-motion
 *  animation in the tree (transform/layout animations are skipped).
 *  LazyMotion + domAnimation keeps the animation engine to the DOM subset
 *  (components use the `m` factory, not `motion`). */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
