import { useRef } from "react";
import type { ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import { useFinePointer } from "@/hooks/useFinePointer";

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

/** Wraps an interactive element with a subtle magnetic pull toward the
 *  pointer. Desktop fine-pointer only; static under reduced motion.
 *  The child remains the real <a>/<button> so semantics stay intact. */
export function Magnetic({ children, strength = 0.32, className }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const enabled = fine && !reduce;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 170, damping: 15, mass: 0.45 });
  const sy = useSpring(y, { stiffness: 170, damping: 15, mass: 0.45 });

  function onMove(e: React.MouseEvent) {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: enabled ? sx : 0, y: enabled ? sy : 0 }}
      className={className ?? "inline-block"}
    >
      {children}
    </motion.div>
  );
}
