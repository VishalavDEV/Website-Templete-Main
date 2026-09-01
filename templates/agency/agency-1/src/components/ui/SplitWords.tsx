import { motion, useReducedMotion } from "motion/react";

type Mode = "mount" | "inview";

interface SplitWordsProps {
  text: string;
  mode?: Mode;
  className?: string;
  delay?: number;
}

/** Word-by-word masked headline reveal. The parent supplies semantics
 *  (real text is read from the heading itself); this renders the visual,
 *  aria-hidden copy. Descender-safe masks prevent g/j/p/q/y clipping. */
export function SplitWords({
  text,
  mode = "inview",
  className,
  delay = 0,
}: SplitWordsProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.055, delayChildren: delay } },
  };
  const child = {
    hidden: { y: "115%" },
    show: {
      y: "0%",
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  if (reduce) {
    return (
      <span aria-hidden="true" className={className}>
        {text}
      </span>
    );
  }

  return (
    <motion.span
      aria-hidden="true"
      className={className}
      style={{ display: "inline-block" }}
      variants={container}
      initial="hidden"
      {...(mode === "inview"
        ? { whileInView: "show", viewport: { once: true, amount: 0.6 } }
        : { animate: "show" })}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em]"
        >
          <motion.span
            className="inline-block will-change-transform"
            variants={child}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/** Accessible masked headline: real text for AT + animated visual copy. */
export function SplitHeading({
  text,
  as: Tag = "h2",
  mode = "inview",
  className,
  delay = 0,
}: {
  text: string;
  as?: "h1" | "h2" | "h3";
  mode?: Mode;
  className?: string;
  delay?: number;
}) {
  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <SplitWords text={text} mode={mode} delay={delay} />
    </Tag>
  );
}
