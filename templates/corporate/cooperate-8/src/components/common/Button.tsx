import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Loader2 } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "lime" | "outline" | "ghost" | "dark";
export type ButtonSize = "sm" | "md" | "lg" | "xl";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  to?: string;
  href?: string;
  withArrow?: boolean;
  withDiagonalArrow?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  to,
  href,
  withArrow = false,
  withDiagonalArrow = false,
  isLoading = false,
  icon,
  children,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-mono-tech uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none group text-xs sm:text-xs";

  const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-3.5 py-1.5 gap-1.5 text-[11px] rounded-xs",
    md: "px-5 py-2.5 gap-2 text-xs rounded-xs",
    lg: "px-7 py-3.5 gap-2.5 text-xs sm:text-sm rounded-xs",
    xl: "px-9 py-4 gap-3 text-sm rounded-xs font-bold"
  };

  const variantStyles: Record<ButtonVariant, string> = {
    primary: "bg-[#0A2E23] text-white hover:bg-[#114535] active:bg-[#072119] border border-[#0A2E23] shadow-xs",
    lime: "bg-[#CCF34A] text-[#0A2E23] hover:bg-[#D6FA52] active:bg-[#B8E934] border border-[#B8E934] shadow-xs font-bold",
    secondary: "bg-[#F2EFE9] text-[#121316] hover:bg-[#E8E4DA] active:bg-[#DDD9CF] border border-[#E6E2D8]",
    outline: "bg-transparent text-[#121316] hover:bg-[#F2EFE9] active:bg-[#E8E4DA] border border-[#121316]/25 hover:border-[#121316]",
    ghost: "bg-transparent text-[#121316] hover:bg-[#121316]/5 border border-transparent",
    dark: "bg-[#181A1D] text-white hover:bg-[#24282F] active:bg-[#111315] border border-[#24282F]"
  };

  const arrowElement = withDiagonalArrow ? (
    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
  ) : withArrow ? (
    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
  ) : null;

  const content = (
    <>
      {isLoading ? <Loader2 className="w-4 h-4 animate-spin shrink-0" /> : icon}
      <span>{children}</span>
      {!isLoading && arrowElement}
    </>
  );

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled || isLoading} {...props}>
      {content}
    </button>
  );
};
