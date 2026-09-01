import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Sparkles, BookOpen, Clock, Layers, HelpCircle, Users, Activity, Eye, ExternalLink } from 'lucide-react';
import { getArticles, getFeaturedStories, getCollection, getArchive, getQuestions } from '../services/mockApi';
import ArticleCard from '../components/common/ArticleCard';
import SectionHeader from '../components/common/SectionHeader';
import DomeGallery from '../components/gallery/DomeGallery';
import Lanyard from '../components/card/Lanyard';
import GridScan from '../components/lab/GridScan';
import NewsletterBox from '../components/common/NewsletterBox';
import categoriesData from '../data/categories.json';

export function HomePage() {
  const [articles, setArticles] = useState([]);
  const [featuredStories, setFeaturedStories] = useState([]);
  const [collectionItems, setCollectionItems] = useState([]);
  const [archiveItems, setArchiveItems] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [arts, feats, cols, archs, quests] = await Promise.all([
          getArticles(),
          getFeaturedStories(),
          getCollection(),
          getArchive(),
          getQuestions()
        ]);
        setArticles(arts);
        setFeaturedStories(feats);
        setCollectionItems(cols);
        setArchiveItems(archs);
        setQuestions(quests);
        if (quests.length > 0) setSelectedQuestion(quests[0]);
      } catch (err) {
        console.error('Error loading homepage data', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const leadStory = articles.find((a) => a.slug === 'the-accident-that-changed-the-cold') || articles[0];
  const secondaryStories = articles.filter((a) => a.id === 'art-2' || a.id === 'art-3');
  const smallerStories = articles.filter((a) => ['art-4', 'art-5', 'art-6', 'art-7'].includes(a.id));
  const peopleStories = articles.filter((a) => a.categorySlug === 'scientists-lives').slice(0, 3);
  const discoveryStories = articles.filter((a) => a.categorySlug === 'discoveries-inventions').slice(0, 3);
  const societyStories = articles.filter((a) => a.categorySlug === 'science-society' || a.categorySlug === 'science-politics').slice(0, 3);
  const forgottenStories = articles.filter((a) => a.categorySlug === 'forgotten-science' || a.categorySlug === 'early-science').slice(0, 3);
  const moreStories = articles.slice(8, 14);

  if (loading) {
    return (
      <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.4rem', color: 'var(--text-warm-brown)', fontStyle: 'italic' }}>
          Opening the archives of discovery...
        </p>
      </div>
    );
  }

  return (
    <div className="homepage-flow">
      {/* =========================================================================
          1. HERO OPENING
          ========================================================================= */}
      <section
        className="hero-section"
        style={{
          padding: '4.5rem 0 3.5rem',
          borderBottom: '1px solid var(--border-light)',
          position: 'relative'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>
              <span>A NARRATIVE SCIENCE-HISTORY PUBLICATION</span>
            </div>

            {/* Hero Title */}
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.6rem, 6vw, 4.4rem)',
                fontWeight: 800,
                color: 'var(--text-ink)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                margin: '0.85rem auto 1.5rem',
                maxWidth: '940px'
              }}
            >
              The Stories Behind the Discoveries.
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
                lineHeight: 1.55,
                color: 'var(--text-ink-secondary)',
                maxWidth: '780px',
                margin: '0 auto 2.5rem'
              }}
            >
              Science didn't happen in a vacuum. It happened through human obsession, accidental laboratory fires, bitter feuds, forgotten women, and the strange serendipity that reshaped our reality.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              <Link to="/stories" className="btn-editorial-primary">
                <span>Explore Stories</span>
                <ArrowRight size={15} />
              </Link>
              <Link to="/archive" className="btn-editorial-secondary">
                <Compass size={15} />
                <span>Browse The Archive</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. FEATURED LEAD STORY
          ========================================================================= */}
      <section style={{ padding: '4rem 0 2rem' }}>
        <div className="container">
          <div className="section-label">FEATURED INVESTIGATION</div>
          {leadStory && <ArticleCard article={leadStory} variant="lead" />}
        </div>
      </section>

      {/* =========================================================================
          3. LATEST STORIES DYNAMIC GRID (2 secondary + 4 compact)
          ========================================================================= */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <SectionHeader
            label="LATEST ISSUES"
            title="Recent Investigations"
            subtitle="Fresh long-form narratives unearthed from institutional vaults and forgotten correspondence."
            linkText="View All Stories"
            linkTo="/stories"
          />

          {/* 2 Secondary cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            {secondaryStories.map((art) => (
              <ArticleCard key={art.id} article={art} variant="secondary" />
            ))}
          </div>

          {/* 4 Smaller compact cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {smallerStories.map((art) => (
              <ArticleCard key={art.id} article={art} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. THE QUESTIONS THAT MADE SCIENCE (Signature Section)
          ========================================================================= */}
      <section style={{ padding: '4.5rem 0', backgroundColor: 'rgba(32, 28, 24, 0.02)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', margin: '2rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>SIGNATURE INQUIRIES</div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3.8vw, 2.6rem)',
                fontWeight: 700,
                color: 'var(--text-ink)',
                lineHeight: 1.2,
                letterSpacing: '-0.015em',
                margin: '0.4rem 0'
              }}
            >
              The Questions That Made Science
            </h2>
            <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.15rem', color: 'var(--text-ink-secondary)', marginTop: '0.5rem' }}>
              Major scientific revolutions often began not with an answer, but with a question that sounded absurd to everyone else.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'flex-start' }}>
            {/* Left list of Questions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {questions.map((q) => {
                const isCurrent = selectedQuestion?.id === q.id;
                return (
                  <div
                    key={q.id}
                    onClick={() => setSelectedQuestion(q)}
                    style={{
                      padding: '1.25rem 1.5rem',
                      backgroundColor: isCurrent ? 'var(--bg-surface)' : 'transparent',
                      border: isCurrent ? '1px solid var(--accent-terracotta)' : '1px solid var(--border-light)',
                      borderRadius: '3px',
                      cursor: 'pointer',
                      boxShadow: isCurrent ? 'var(--shadow-sm)' : 'none',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                      <span className="category-badge" style={{ fontSize: '0.65rem' }}>{q.tag}</span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-warm-brown)', fontStyle: 'italic' }}>{q.era}</span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: isCurrent ? 'var(--accent-terracotta)' : 'var(--text-ink)', lineHeight: 1.3 }}>
                      {q.question}
                    </h3>
                  </div>
                );
              })}
            </div>

            {/* Right Active Question Deep-Dive */}
            {selectedQuestion && (
              <div
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '4px',
                  padding: '2.5rem',
                  boxShadow: 'var(--shadow-md)',
                  position: 'sticky',
                  top: '100px'
                }}
              >
                <span className="category-badge" style={{ marginBottom: '0.75rem' }}>{selectedQuestion.category}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', lineHeight: 1.25, color: 'var(--text-ink)', marginBottom: '1rem' }}>
                  {selectedQuestion.question}
                </h3>
                <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--text-ink-secondary)', marginBottom: '1.75rem' }}>
                  {selectedQuestion.summary}
                </p>

                {selectedQuestion.relatedStory && (
                  <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
                    <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '0.5rem' }}>
                      Read the full inquiry:
                    </p>
                    <Link
                      to={`/story/${selectedQuestion.relatedStory.slug}`}
                      className="btn-editorial-accent"
                      style={{ width: '100%', fontSize: '0.8rem' }}
                    >
                      <span>{selectedQuestion.relatedStory.title}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. SCIENTISTS & LIVES
          ========================================================================= */}
      <section style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <SectionHeader
            label="HUMAN PORTRAITS"
            title="Scientists & Lives"
            subtitle="Obsession, rivalry, quiet rebellion, and the women and men whom orthodoxy tried to erase."
            linkText="All Biographical Stories"
            linkTo="/topic/scientists-lives"
            useParticleText={false}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {peopleStories.map((art) => (
              <ArticleCard key={art.id} article={art} variant="secondary" />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. DISCOVERIES & INVENTIONS — SIDEWAYS DISCOVERIES
          ========================================================================= */}
      <section style={{ padding: '3.5rem 0', backgroundColor: 'rgba(217, 108, 74, 0.03)' }}>
        <div className="container">
          <SectionHeader
            label="UNINTENDED BREAKTHROUGHS"
            title="Discoveries That Arrived Sideways"
            subtitle="Prototypes that failed their original purpose, strange chemical reactions that boiled over, and inventions no one wanted at first."
            linkText="Explore Inventions"
            linkTo="/topic/discoveries-inventions"
            useParticleText={false}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {discoveryStories.map((art) => (
              <ArticleCard key={art.id} article={art} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. SCIENCE & SOCIETY
          ========================================================================= */}
      <section style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <SectionHeader
            label="CULTURAL CURRENTS"
            title="When Science Enters Society"
            subtitle="Patent warfare, military secrecy, public superstition, and the courtroom battles over who owns truth."
            linkText="Explore Science & Society"
            linkTo="/topic/science-society"
            useParticleText={false}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {societyStories.map((art) => (
              <ArticleCard key={art.id} article={art} variant="secondary" />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. FORGOTTEN SCIENCE
          ========================================================================= */}
      <section style={{ padding: '3.5rem 0', backgroundColor: 'rgba(32, 28, 24, 0.02)' }}>
        <div className="container">
          <SectionHeader
            label="THE SHADOW ARCHIVE"
            title="The Things We Almost Forgot"
            subtitle="Discarded hypotheses, obsolete brass instruments, and brilliant thinkers sidelined by the mainstream historical record."
            linkText="Explore Forgotten Science"
            linkTo="/topic/forgotten-science"
            useParticleText={false}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {forgottenStories.map((art) => (
              <ArticleCard key={art.id} article={art} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. THE COLLECTION — DOME GALLERY (Signature 3D Sphere Experience)
          ========================================================================= */}
      <section style={{ padding: '5rem 0', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>VISUAL ARCHIVE</div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 700,
                color: 'var(--text-ink)',
                lineHeight: 1.2,
                letterSpacing: '-0.015em',
                margin: '0.4rem 0'
              }}
            >
              The Collection
            </h2>
            <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.15rem', color: 'var(--text-ink-secondary)', marginTop: '0.6rem' }}>
              An interactive 3D vault of historical scientific instruments, illuminated alchemy manuscripts, laboratory apparatus, and archival glass-plate negatives.
            </p>
          </div>

          <DomeGallery items={collectionItems} />
        </div>
      </section>

      {/* =========================================================================
          10. THE ARCHIVE LAB — GRIDSCAN (Workstation / Instrument Panel)
          ========================================================================= */}
      <section style={{ padding: '5rem 0', backgroundColor: '#181412', color: '#fffaf1' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center', color: 'var(--accent-amber)' }}>
              <span>RESEARCH WORKSTATION</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 700,
                color: '#fffaf1',
                lineHeight: 1.2,
                letterSpacing: '-0.015em',
                margin: '0.4rem 0'
              }}
            >
              The Archive Lab
            </h2>
            <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.15rem', color: '#d5c8be', marginTop: '0.6rem' }}>
              Traverse five hundred years of scientific revolutions across ten curated volumes and 800+ documented historical events.
            </p>
          </div>

          <GridScan archiveItems={archiveItems} />
        </div>
      </section>

      {/* =========================================================================
          11. FIELD / EDITORIAL CARD — LANYARD (3D Credential Easter Egg)
          ========================================================================= */}
      <section style={{ padding: '4.5rem 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div className="section-label">THE EDITORIAL DESK</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', lineHeight: 1.2, color: 'var(--text-ink)', marginBottom: '1.25rem' }}>
                Field Pass: Issue 01 (2026)
              </h2>
              <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.15rem', lineHeight: 1.6, color: 'var(--text-ink-secondary)', marginBottom: '1.5rem' }}>
                ELEMENTAL operates as an independent digital museum magazine. Our team of archival historians and investigative journalists reconstructs lost laboratories, deciphering marginalia from water-damaged notebooks and uncataloged museum deposits.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn-editorial-primary">
                  <span>Editorial Manifesto</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/authors" className="btn-editorial-secondary">
                  <span>Meet Our Historians</span>
                </Link>
              </div>
            </div>

            {/* 3D Physical Lanyard Hanging Card */}
            <div>
              <Lanyard
                position={[0, 0, 24]}
                gravity={[0, -40, 0]}
                lanyardWidth={1}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          12. MORE STORIES FROM THE ARCHIVE
          ========================================================================= */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <SectionHeader
            label="DEEPER VAULT"
            title="More From Elemental"
            subtitle="Continuing inquiries into the strange, overlooked, and revolutionary turns of science."
            linkText="Browse Directory"
            linkTo="/stories"
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {moreStories.map((art) => (
              <ArticleCard key={art.id} article={art} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          13. NEWSLETTER DISPATCH
          ========================================================================= */}
      <section style={{ padding: '2rem 0 4rem' }}>
        <div className="container">
          <NewsletterBox />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
