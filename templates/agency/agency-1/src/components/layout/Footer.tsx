import { Link } from "react-router-dom";
import { ArrowUp } from "@phosphor-icons/react";
import { scrollToTop } from "@/lib/scroll";

const explore = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/studio", label: "Studio" },
  { to: "/journal", label: "Journal" },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line bg-paper">
      <div className="container-x pt-16 pb-8 sm:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          <div>
            <p className="display-md max-w-[16ch]">
              Have something worth making?
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center rounded-full bg-ink px-7 py-3.5 font-medium text-cream transition-colors duration-300 hover:bg-coral hover:text-ink"
            >
              Start a project
            </Link>
          </div>

          <nav aria-label="Footer">
            <h2 className="meta-label">Explore</h2>
            <ul className="mt-4 space-y-2.5">
              {explore.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-[0.95rem] text-ink link-underline pb-0.5"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="meta-label">Studio</h2>
            <address className="mt-4 space-y-2.5 not-italic text-[0.95rem] text-ink2">
              <p>
                <a href="mailto:hello@foldline.studio" className="text-ink link-underline pb-0.5">
                  hello@foldline.studio
                </a>
              </p>
              <p>
                <a href="tel:+14155550134" className="text-ink link-underline pb-0.5">
                  +1 (415) 555-0134
                </a>
              </p>
              <p>
                Pier 9, Studio 214
                <br />
                San Francisco, CA 94111
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="font-mono text-xs tracking-wide text-ink2">
            © {year} Foldline Studio. Case studies are illustrative work.
          </p>
          <button
            type="button"
            onClick={() => scrollToTop(false)}
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-4 py-2 text-sm text-ink transition-colors hover:border-ink"
          >
            Back to top
            <ArrowUp size={14} weight="bold" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
