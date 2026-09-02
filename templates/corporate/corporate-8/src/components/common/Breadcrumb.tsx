import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  dark?: boolean;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, dark = false }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className={`flex flex-wrap items-center gap-2 font-mono-tech text-[11px] uppercase tracking-wider ${
        dark ? "text-[#A1A7B4]" : "text-[#7C828D]"
      }`}>
        <li className="flex items-center gap-1.5">
          <Link to="/" className={`hover:text-[#0A2E23] transition-colors ${dark ? "hover:text-[#CCF34A]" : ""}`}>
            HOME
          </Link>
          <ChevronRight className="w-3 h-3 opacity-50" />
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.to && !isLast ? (
                <Link to={item.to} className={`hover:text-[#0A2E23] transition-colors ${dark ? "hover:text-[#CCF34A]" : ""}`}>
                  {item.label}
                </Link>
              ) : (
                <span className={dark ? "text-[#CCF34A] font-bold" : "text-[#121316] font-bold"}>
                  {item.label}
                </span>
              )}
              {!isLast && <ChevronRight className="w-3 h-3 opacity-50" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
