import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useReducedMotion } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { Magnetic } from "@/components/ui/Magnetic";
import { btnPrimary } from "@/components/ui/Buttons";
import { lockScroll } from "@/lib/scroll";

const LINKS = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/studio", label: "Studio" },
  { to: "/journal", label: "Journal" },
];

function Wordmark({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="text-[1.35rem] font-bold tracking-[-0.03em] text-ink"
      aria-label="Foldline — home"
    >
      foldline<span aria-hidden="true" className="text-coral">.</span>
    </Link>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const reduce = useReducedMotion();
  const burgerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const { scrollY } = useScroll();

  useEffect(
    () => scrollY.on("change", (v) => setScrolled(v > 12)),
    [scrollY],
  );

  // Close the menu whenever the route changes.
  useEffect(() => setOpen(false), [location.pathname]);

  // Scroll lock + Esc + simple focus trap while open; restore focus on close.
  useEffect(() => {
    if (!open) return;
    lockScroll(true);
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      lockScroll(false);
      window.removeEventListener("keydown", onKey);
      burgerRef.current?.focus();
    };
  }, [open]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative pb-0.5 text-[0.95rem] font-medium transition-colors duration-200 link-underline ${
      isActive ? "text-coral" : "text-ink hover:text-ink"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-300 ${
        scrolled ? "bg-cream/85 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-x flex h-[68px] items-center justify-between"
      >
        <Wordmark />

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={navLinkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Magnetic strength={0.25}>
            <Link to="/contact" className={`${btnPrimary} !px-5 !py-2.5`}>
              Start a project
            </Link>
          </Magnetic>
        </div>

        <button
          ref={burgerRef}
          type="button"
          className="flex size-11 items-center justify-center rounded-full text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} weight="bold" /> : <List size={26} weight="bold" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: "-4%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: "-4%" }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-[68px] z-50 flex flex-col bg-paper lg:hidden"
          >
            <ul className="flex flex-1 flex-col justify-center gap-2 px-6">
              {[...LINKS, { to: "/contact", label: "Contact" }].map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={reduce ? false : { opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <NavLink
                    to={link.to}
                    ref={i === 0 ? firstLinkRef : undefined}
                    className={({ isActive }) =>
                      `display-md block py-2 ${isActive ? "text-coral" : "text-ink"}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            <div className="px-6 pb-10">
              <a href="mailto:hello@foldline.studio" className="meta-label">
                hello@foldline.studio
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export { Wordmark };
