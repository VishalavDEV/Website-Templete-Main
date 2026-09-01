/**
 * Pages — Generic sub-page template for About, FAQ, etc.
 */
import { useState } from 'react';
import { aboutBlocks, faqItems } from '../../data/content';
import { ChevronDown } from 'lucide-react';
import styles from './Pages.module.css';

const Accordion = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={[styles.faqItem, open ? styles.faqOpen : ''].join(' ')}>
      <button
        className={styles.faqQ}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        id={`faq-btn-${item.id}`}
        aria-controls={`faq-ans-${item.id}`}
      >
        {item.question}
        <ChevronDown size={18} className={styles.chevron} aria-hidden="true" />
      </button>
      <div
        id={`faq-ans-${item.id}`}
        role="region"
        aria-labelledby={`faq-btn-${item.id}`}
        className={styles.faqA}
        hidden={!open}
      >
        <p>{item.answer}</p>
      </div>
    </div>
  );
};

const Pages = () => (
  <main id="main-content" className={styles.page}>
    {/* Hero banner */}
    <div className={styles.banner}>
      <div className="container">
        <h1 className={styles.bannerTitle}>About Westridge University</h1>
        <p className={styles.bannerSub}>A legacy of academic excellence and innovation since 1892.</p>
      </div>
    </div>

    <div className="container">
      {/* About blocks */}
      <section className={styles.aboutSection} aria-label="About">
        <ul className={styles.aboutGrid}>
          {aboutBlocks.map(block => (
            <li key={block.id} className={styles.aboutCard}>
              <h2 className={styles.aboutHeading}>{block.heading}</h2>
              <p className={styles.aboutBody}>{block.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Divider */}
      <hr className={styles.divider} />

      {/* FAQ */}
      <section className={styles.faqSection} aria-label="Frequently asked questions">
        <div className={styles.faqHeader}>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Everything you need to know about joining Westridge University.</p>
        </div>
        <div className={styles.faqList}>
          {faqItems.map(item => <Accordion key={item.id} item={item} />)}
        </div>
      </section>
    </div>
  </main>
);

export default Pages;
