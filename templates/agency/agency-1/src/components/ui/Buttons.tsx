import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "@phosphor-icons/react";

/** Consistent inline arrow link. Internal routes only; label is required
 *  so every instance has meaningful link text. */
export function ArrowLink({
  to,
  children,
  direction = "up-right",
  className = "",
}: {
  to: string;
  children: string;
  direction?: "up-right" | "right";
  className?: string;
}) {
  const Icon = direction === "up-right" ? ArrowUpRight : ArrowRight;
  return (
    <Link
      to={to}
      className={`group/link inline-flex items-center gap-2 text-[0.95rem] font-medium text-ink link-underline pb-0.5 ${className}`}
    >
      <span>{children}</span>
      <Icon
        size={15}
        weight="bold"
        aria-hidden="true"
        className="text-coral transition-transform duration-300 ease-out group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
      />
    </Link>
  );
}

export const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-[0.95rem] font-medium text-cream transition-colors duration-300 hover:bg-coral hover:text-ink active:scale-[0.98]";

export const btnAccent =
  "inline-flex items-center justify-center gap-2 rounded-full bg-coral px-6 py-3 text-[0.95rem] font-semibold text-ink transition-colors duration-300 hover:bg-ink hover:text-cream active:scale-[0.98]";

export const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-full border border-ink/25 px-6 py-3 text-[0.95rem] font-medium text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-cream active:scale-[0.98]";
