import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

/** Route transition shell: soft rise-in on enter, curtain wipe on exit.
 *  The <main> landmark owns focus for screen-reader route announcements. */
export function Page({
  children,
  curtain = false,
}: {
  children: ReactNode;
  curtain?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <>
      {curtain && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[70] origin-bottom bg-lavsoft"
          initial={false}
          exit={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
        />
      )}
      <motion.main
        id="main"
        tabIndex={-1}
        className="flex flex-1 flex-col outline-none focus-visible:outline-none"
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.main>
    </>
  );
}
