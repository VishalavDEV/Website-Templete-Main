import { useState } from "react";
import { artDataUri } from "@/lib/images";

type TintName = "peach" | "lavender" | "lavsoft";

const TINT_CLASS: Record<TintName, string> = {
  peach: "from-peach/90 via-peach/70 to-coral/40",
  lavender: "from-lavsoft/90 via-lavender/60 to-lavender/40",
  lavsoft: "from-lavsoft/80 via-peach/50 to-lavender/50",
};

interface TintedImageProps {
  src: string;
  /** Deterministic seed for the local art fallback. */
  fallbackSeed: string;
  tint: TintName;
  alt: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
  /** Reveal the true photo on hover (default true). */
  colorOnHover?: boolean;
}

/** Palette-treated photography: grayscale base + tint duotone overlay.
 *  Falls back to locally generated palette art if the network image fails,
 *  so the page never shows a broken image. */
export function TintedImage({
  src,
  fallbackSeed,
  tint,
  alt,
  className = "",
  imgClassName = "",
  eager = false,
  colorOnHover = true,
}: TintedImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  return (
    <figure
      className={`group relative overflow-hidden rounded-[18px] bg-line/60 ${className}`}
    >
      <img
        src={currentSrc}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        onError={() => {
          if (!failed) {
            setFailed(true);
            setCurrentSrc(artDataUri(fallbackSeed, tint));
          }
        }}
        className={`h-full w-full object-cover ${
          failed ? "" : "grayscale contrast-[1.04] brightness-[1.02]"
        } transition-[filter] duration-700 ease-out ${
          !failed && colorOnHover ? "group-hover:grayscale-0" : ""
        } ${imgClassName}`}
      />
      {!failed && (
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${TINT_CLASS[tint]} mix-blend-multiply opacity-55 transition-opacity duration-700 ease-out ${
            colorOnHover ? "group-hover:opacity-0" : ""
          }`}
        />
      )}
    </figure>
  );
}
