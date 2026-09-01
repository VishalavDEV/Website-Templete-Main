import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  AnimatePresence,
} from "motion/react";
import { useFinePointer } from "@/hooks/useFinePointer";

type CursorMode = "default" | "hover" | "view" | "drag";

interface CursorState {
  mode: CursorMode;
  label: string | null;
}

const SIZES: Record<CursorMode, number> = {
  default: 10,
  hover: 42,
  view: 86,
  drag: 86,
};

/** Desktop-only custom cursor. Delegates state from data-cursor /
 *  data-cursor-label attributes anywhere in the tree. Never intercepts
 *  clicks (pointer-events: none). Fully disabled on touch + reduced motion. */
export function CustomCursor() {
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const active = fine && !reduce;

  const [state, setState] = useState<CursorState>({ mode: "default", label: null });
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 550, damping: 45, mass: 0.55 });
  const sy = useSpring(y, { stiffness: 550, damping: 45, mass: 0.55 });

  useEffect(() => {
    document.documentElement.classList.toggle("has-custom-cursor", active);
    return () => document.documentElement.classList.remove("has-custom-cursor");
  }, [active]);

  useEffect(() => {
    if (!active) return;

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const over = (e: PointerEvent) => {
      const target = e.target as Element | null;
      if (!target || typeof target.closest !== "function") return;
      const tagged = target.closest("[data-cursor]");
      if (tagged) {
        setState({
          mode: (tagged.getAttribute("data-cursor") as CursorMode) ?? "hover",
          label: tagged.getAttribute("data-cursor-label"),
        });
        return;
      }
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, summary, label',
      );
      setState({ mode: interactive ? "hover" : "default", label: null });
    };
    const out = () => setVisible(false);
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over, true);
    document.documentElement.addEventListener("pointerleave", out);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over, true);
      document.documentElement.removeEventListener("pointerleave", out);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, [active, x, y]);

  if (!active) return null;

  const size = SIZES[state.mode];
  const filled = state.mode === "view" || state.mode === "drag";

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[80]"
      style={{ x: sx, y: sy }}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={state.mode}
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: 1, opacity: visible ? 1 : 0 }}
          exit={{ scale: 0.4, opacity: 0 }}
          transition={{ type: "spring", stiffness: 420, damping: 28 }}
          style={{
            width: size,
            height: size,
            x: "-50%",
            y: "-50%",
            scale: pressed ? 0.86 : 1,
          }}
          className={`flex items-center justify-center rounded-full ${
            filled
              ? "bg-coral"
              : state.mode === "hover"
                ? "border-[1.5px] border-coral bg-transparent"
                : "bg-ink"
          }`}
        >
          {filled && state.label && (
            <span className="select-none font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink">
              {state.label}
            </span>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
