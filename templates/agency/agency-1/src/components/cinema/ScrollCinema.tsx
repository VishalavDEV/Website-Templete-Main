import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { artDataUri } from "@/lib/images";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const REEL_SRC = "/media/reel.mp4";

type Mode = "checking" | "video" | "fallback";

/** Cover-fit blit of the current video frame onto the canvas. */
function drawCover(
  ctx: CanvasRenderingContext2D,
  media: HTMLVideoElement,
  vw: number,
  vh: number,
) {
  const cw = ctx.canvas.width;
  const ch = ctx.canvas.height;
  const scale = Math.max(cw / vw, ch / vh);
  const dw = vw * scale;
  const dh = vh * scale;
  ctx.drawImage(media, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
}

interface ScrollCinemaProps {
  /** Height class of the stage, e.g. "h-[100svh]". */
  className?: string;
  seed?: string;
}

/**
 * Cinematic scroll-driven visual.
 *
 * Video present (`public/media/reel.mp4`):
 *   poster -> preload -> seek-throttled frame cache -> canvas render ->
 *   timeline scrubbed by scroll progress.
 *
 * No video (ships by default):
 *   composed palette artwork with slow drift + scroll parallax.
 *   Drop in reel.mp4 and the upgrade is automatic.
 */
export function ScrollCinema({
  className = "",
  seed = "foldline-hero-reel",
}: ScrollCinemaProps) {
  const [mode, setMode] = useState<Mode>("checking");
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();

  /* Detect whether a real reel exists. */
  useEffect(() => {
    let cancelled = false;
    const timeout = window.setTimeout(() => {
      if (!cancelled) setMode((m) => (m === "checking" ? "fallback" : m));
    }, 2500);
    fetch(REEL_SRC, { method: "HEAD" })
      .then((res) => {
        if (cancelled) return;
        const type = res.headers.get("content-type") ?? "";
        setMode(res.ok && type.startsWith("video") ? "video" : "fallback");
      })
      .catch(() => {
        if (!cancelled) setMode("fallback");
      })
      .finally(() => window.clearTimeout(timeout));
    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
    };
  }, []);

  /* Video mode: scroll-progress -> currentTime, frames drawn to canvas. */
  useEffect(() => {
    if (mode !== "video" || !rootRef.current) return;
    const root = rootRef.current;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let duration = 0;
    let seeking = false;
    let rafId = 0;
    let lastDrawnTime = -1;
    let disposed = false;

    const resize = () => {
      const rect = root.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(root);

    const paint = () => {
      if (!video.videoWidth || Math.abs(video.currentTime - lastDrawnTime) < 0.001)
        return;
      lastDrawnTime = video.currentTime;
      drawCover(ctx, video, video.videoWidth, video.videoHeight);
    };

    const pump = () => {
      if (disposed) return;
      paint();
      rafId = requestAnimationFrame(pump);
    };
    rafId = requestAnimationFrame(pump);

    const onMeta = () => {
      duration = video.duration || 0;
      video.currentTime = 0.001;
    };
    video.addEventListener("loadedmetadata", onMeta);

    const st = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: "top top",
        end: "+=160%",
        scrub: reduce ? true : 0.6,
        pin: false,
        onUpdate: (self) => {
          if (progressLineRef.current) {
            progressLineRef.current.style.transform = `scaleX(${self.progress})`;
          }
          if (duration > 0 && !seeking) {
            const target = Math.min(self.progress * duration, duration - 0.05);
            if (Math.abs(video.currentTime - target) > 0.033) {
              seeking = true;
              video.currentTime = target;
              const clear = () => {
                seeking = false;
                video.removeEventListener("seeked", clear);
              };
              video.addEventListener("seeked", clear);
            }
          }
        },
      },
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      ro.disconnect();
      video.removeEventListener("loadedmetadata", onMeta);
      st.scrollTrigger?.kill();
      st.kill();
    };
  }, [mode, reduce]);

  /* Fallback mode: composed art with gentle parallax + progress line. */
  useEffect(() => {
    if (mode !== "fallback" || !rootRef.current) return;
    const root = rootRef.current;
    const ctx = gsap.context(() => {
      if (!reduce) {
        gsap.to(".cinema-blob-a", {
          yPercent: -14,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "+=120%",
            scrub: 0.5,
          },
        });
        gsap.to(".cinema-blob-b", {
          yPercent: 12,
          rotate: 8,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "+=120%",
            scrub: 0.5,
          },
        });
        gsap.to(".cinema-poster", {
          yPercent: 10,
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "+=140%",
            scrub: true,
          },
        });
      }
      ScrollTrigger.create({
        trigger: root,
        start: "top top",
        end: "+=160%",
        onUpdate: (self) => {
          if (progressLineRef.current) {
            progressLineRef.current.style.transform = `scaleX(${self.progress})`;
          }
        },
      });
    }, root);
    return () => ctx.revert();
  }, [mode, reduce]);

  return (
    <div ref={rootRef} className={`relative overflow-hidden ${className}`}>
      {/* ---------- shared progress hairline ---------- */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-20 h-[3px] bg-ink/10"
      >
        <div
          ref={progressLineRef}
          className="h-full w-full origin-left scale-x-0 bg-coral"
        />
      </div>

      {/* ---------- video path ---------- */}
      {mode === "video" && (
        <>
          <canvas
            ref={canvasRef}
            className="absolute inset-0 z-10 h-full w-full"
            aria-hidden="true"
          />
          <video
            ref={videoRef}
            src={REEL_SRC}
            muted
            playsInline
            preload="auto"
            className="pointer-events-none absolute -z-0 opacity-0"
            aria-hidden="true"
            tabIndex={-1}
          />
        </>
      )}

      {/* ---------- fallback path (default experience) ---------- */}
      {(mode === "fallback" || mode === "checking") && (
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src={artDataUri(seed, "peach")}
            alt=""
            className="cinema-poster absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="cinema-blob-a absolute -right-[15%] top-[8%] size-[46vw] rounded-full opacity-80 blur-[2px]"
            style={{
              background:
                "radial-gradient(circle at 35% 35%, #E86F51 0%, rgba(232,111,81,0) 68%)",
            }}
          />
          <div
            className="cinema-blob-b absolute -left-[18%] bottom-[4%] size-[52vw] rounded-full opacity-70 blur-[2px]"
            style={{
              background:
                "radial-gradient(circle at 60% 45%, #C8B6FF 0%, rgba(200,182,255,0) 70%)",
            }}
          />
          {/* warm veil keeps overlaid headline legible */}
          <div className="absolute inset-0 bg-gradient-to-b from-cream/55 via-transparent to-cream/70" />
        </div>
      )}
    </div>
  );
}
