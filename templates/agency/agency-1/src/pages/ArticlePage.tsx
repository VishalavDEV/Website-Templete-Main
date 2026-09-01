import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";
import { Page } from "@/components/layout/Page";
import { SplitHeading } from "@/components/ui/SplitWords";
import { Reveal } from "@/components/ui/Reveal";
import { TintedImage } from "@/components/ui/TintedImage";
import { getArticle } from "@/data/journal";
import { photo } from "@/lib/images";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { NotFoundPage } from "./NotFoundPage";

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticle(slug) : undefined;
  useDocumentTitle(article ? article.title : "Journal");

  if (!article) return <NotFoundPage />;

  const related = getArticle(
    article.slug === "quiet-power-of-editorial-grids"
      ? "motion-is-a-brand-asset"
      : "quiet-power-of-editorial-grids",
  )!;

  return (
    <Page curtain>
      <article>
        <header className="container-x pb-10 pt-32 sm:pt-40">
          <Reveal>
            <Link
              to="/journal"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink2 transition-colors hover:text-ink"
            >
              <ArrowLeft size={13} weight="bold" aria-hidden="true" />
              Journal
            </Link>
          </Reveal>

          <SplitHeading
            as="h1"
            mode="mount"
            text={article.title}
            className="display-lg mt-8 max-w-[20ch]"
          />
          <p className="body-lede mt-5 max-w-[56ch]">{article.dek}</p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink2">
              {new Date(article.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span aria-hidden="true" className="size-1.5 rounded-full bg-coral" />
            <span className="text-sm text-ink2">{article.author}</span>
            <span aria-hidden="true" className="size-1.5 rounded-full bg-coral" />
            <span className="text-sm text-ink2">{article.readingTime} read</span>
          </div>
        </header>

        <Reveal className="container-x">
          <TintedImage
            src={photo(`${article.seed}-banner`, 1800, 800)}
            fallbackSeed={article.seed}
            tint={article.tint}
            alt=""
            colorOnHover={false}
            className="aspect-[21/9]"
          />
        </Reveal>

        <div className="container-x flex justify-center py-16 sm:py-24">
          <div className="prose-foldline">
            {article.body.map((block, i) => {
              switch (block.type) {
                case "h2":
                  return <h2 key={i}>{block.text}</h2>;
                case "quote":
                  return (
                    <blockquote key={i}>
                      <p>“{block.text}”</p>
                    </blockquote>
                  );
                case "li":
                  return (
                    <ul key={i}>
                      <li>{block.text}</li>
                    </ul>
                  );
                default:
                  return (
                    <p key={i} className={block.lede ? "lede" : undefined}>
                      {block.text}
                    </p>
                  );
              }
            })}
          </div>
        </div>

        <aside className="bg-paper">
          <div className="container-x py-14 sm:py-16">
            <p className="meta-label">Keep reading</p>
            <Link
              to={`/journal/${related.slug}`}
              data-cursor="view"
              data-cursor-label="Read"
              className="group mt-3 inline-block"
            >
              <span className="display-md block max-w-[22ch] transition-colors duration-300 group-hover:text-coral">
                {related.title}
              </span>
            </Link>
          </div>
        </aside>
      </article>
    </Page>
  );
}
