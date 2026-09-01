import { Suspense, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { webglSupported } from "@/lib/webgl";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export type SceneKind = "hero" | "float" | "process" | "cta";

/** Designed static stand-in shown while loading, out of view,
 *  without WebGL, or under reduced motion. */
function StaticPanel({ kind }: { kind: SceneKind }) {
  const art: Record<SceneKind, string> = {
    hero: "radial-gradient(60% 55% at 68% 30%, rgba(232,111,81,.85), transparent 70%), radial-gradient(45% 50% at 25% 75%, rgba(200,182,255,.8), transparent 72%), radial-gradient(70% 70% at 80% 80%, rgba(241,216,207,.9), transparent 75%)",
    float:
      "radial-gradient(35% 40% at 30% 30%, rgba(232,111,81,.6), transparent 70%), radial-gradient(45% 45% at 78% 65%, rgba(200,182,255,.65), transparent 72%), radial-gradient(50% 50% at 55% 20%, rgba(241,216,207,.7), transparent 75%)",
    process:
      "radial-gradient(30% 45% at 22% 55%, rgba(232,111,81,.55), transparent 70%), radial-gradient(34% 48% at 52% 40%, rgba(200,182,255,.6), transparent 72%), radial-gradient(38% 52% at 82% 62%, rgba(241,216,207,.7), transparent 75%)",
    cta: "radial-gradient(55% 60% at 50% 45%, rgba(232,111,81,.75), rgba(241,216,207,.5) 55%, transparent 78%)",
  };
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: art[kind] }}
      />
      <div className="absolute inset-0 rounded-[inherit] border border-line/70" />
    </div>
  );
}

interface ThreeStageProps {
  kind: SceneKind;
  children: ReactNode;
  className?: string;
}

/** Mounts a lazy WebGL scene only when it is near the viewport, the device
 *  supports WebGL and motion is allowed. Everything else gets the designed
 *  static panel — the page never shows a blank hole. */
export function ThreeStage({ kind, children, className = "" }: ThreeStageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  const reduce = usePrefersReducedMotion();
  const ok = webglSupported() && !reduce;

  useEffect(() => {
    if (!ok || !ref.current) return;
    const io = new IntersectionObserver(
      ([entry]) => setNear(entry.isIntersecting),
      { rootMargin: "260px 0px" },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [ok]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <StaticPanel kind={kind} />
      {ok && near && (
        <Suspense fallback={null}>
          {children}
        </Suspense>
      )}
    </div>
  );
}
