import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export interface SectionHeaderProps {
  number?: string;
  tag?: string;
  title: string | React.ReactNode;
  description?: string;
  actionText?: string;
  actionTo?: string;
  onActionClick?: () => void;
  dark?: boolean;
  align?: "left" | "center" | "split";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  tag,
  title,
  description,
  actionText,
  actionTo,
  onActionClick,
  dark = false,
  align = "split",
  className = ""
}) => {
  const isSplit = align === "split";
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center max-w-3xl mx-auto" : ""} ${className}`}>
      {/* Category & Section Number Bar */}
      {(number || tag) && (
        <div className={`flex items-center gap-3 font-mono-tech text-[11px] uppercase tracking-widest mb-4 ${
          isCenter ? "justify-center" : ""
        } ${dark ? "text-[#CCF34A]" : "text-[#0A2E23]"}`}>
          {number && (
            <span className="font-bold px-1.5 py-0.5 rounded-xs border border-current">
              {number}
            </span>
          )}
          {tag && <span>{tag}</span>}
          <div className="h-px bg-current opacity-20 flex-1 max-w-[60px]" />
        </div>
      )}

      {/* Main Title & Action Row */}
      <div className={`flex flex-col ${isSplit ? "lg:flex-row lg:items-end lg:justify-between gap-6" : "gap-4"}`}>
        <div className={isSplit ? "max-w-2xl" : ""}>
          <h2 className={`font-serif-editorial text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.12] ${
            dark ? "text-[#FAF8F5]" : "text-[#121316]"
          }`}>
            {title}
          </h2>

          {description && (
            <p className={`mt-4 text-sm sm:text-base leading-relaxed max-w-xl font-normal ${
              dark ? "text-[#A1A7B4]" : "text-[#5E636E]"
            }`}>
              {description}
            </p>
          )}
        </div>

        {actionText && (
          <div className="shrink-0 pt-2 lg:pt-0">
            {actionTo ? (
              <Link
                to={actionTo}
                className={`inline-flex items-center gap-1.5 font-mono-tech text-xs uppercase tracking-wider font-semibold group pb-1 border-b transition-colors ${
                  dark
                    ? "text-[#CCF34A] border-[#CCF34A]/40 hover:border-[#CCF34A]"
                    : "text-[#0A2E23] border-[#0A2E23]/40 hover:border-[#0A2E23]"
                }`}
              >
                <span>{actionText}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ) : (
              <button
                type="button"
                onClick={onActionClick}
                className={`inline-flex items-center gap-1.5 font-mono-tech text-xs uppercase tracking-wider font-semibold group pb-1 border-b transition-colors cursor-pointer ${
                  dark
                    ? "text-[#CCF34A] border-[#CCF34A]/40 hover:border-[#CCF34A]"
                    : "text-[#0A2E23] border-[#0A2E23]/40 hover:border-[#0A2E23]"
                }`}
              >
                <span>{actionText}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
