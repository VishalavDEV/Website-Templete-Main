import { Link } from "react-router-dom";
import { Page } from "@/components/layout/Page";
import { SplitHeading } from "@/components/ui/SplitWords";
import { Magnetic } from "@/components/ui/Magnetic";
import { btnPrimary } from "@/components/ui/Buttons";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export function NotFoundPage() {
  useDocumentTitle("404");

  return (
    <Page curtain>
      <section className="container-x flex min-h-[80svh] flex-col items-center justify-center text-center py-20">
        <SplitHeading
          as="h1"
          mode="mount"
          text="404"
          className="display-xl font-[800] text-coral mb-4"
        />
        <SplitHeading
          as="h2"
          mode="mount"
          delay={0.1}
          text="Nothing to see here."
          className="display-lg max-w-[18ch] text-balance"
        />
        <p className="body-lede mt-6 max-w-[46ch]">
          The page you're looking for doesn't exist or has moved.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Magnetic strength={0.25}>
            <Link to="/" className={btnPrimary}>
              Back to home
            </Link>
          </Magnetic>
          <Link to="/work" className="rounded-full border border-ink/20 px-6 py-3 text-[0.95rem] font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream">
            Explore work
          </Link>
        </div>
      </section>
    </Page>
  );
}