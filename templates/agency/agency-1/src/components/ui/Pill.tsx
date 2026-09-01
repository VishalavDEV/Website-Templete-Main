import type { ReactNode } from "react";

export function Pill({
  children,
  active = false,
  onClick,
  ariaPressed,
}: {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
  ariaPressed?: boolean;
}) {
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-pressed={ariaPressed}
        className={`rounded-full border px-4 py-2 font-mono text-xs tracking-[0.08em] uppercase transition-colors duration-200 ${
          active
            ? "border-ink bg-ink text-cream"
            : "border-ink/20 bg-transparent text-ink2 hover:border-ink/50 hover:text-ink"
        }`}
      >
        {children}
      </button>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full border border-ink/20 px-3 py-1 font-mono text-[0.68rem] tracking-[0.1em] uppercase text-ink2">
      {children}
    </span>
  );
}
