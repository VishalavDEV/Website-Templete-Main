import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import FAQItem from '../components/FAQItem';
import { faqs } from '../data/faqs';
import { Link } from 'react-router-dom';

export default function FAQ() {
  return (
    <main>
      <header className="page-header">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="section-badge"><HelpCircle size={12} /> FAQ</span>
            <h1>Frequently Asked <span className="text-gradient">Questions</span></h1>
            <p>Find answers to common questions about our courses, learning process, and platform.</p>
          </motion.div>
        </div>
      </header>

      <section className="section">
        <div className="container" style={{ maxWidth: 780 }}>
          <AnimatedSection style={{ marginBottom: 'var(--space-2xl)' }}>
            <h2 className="heading-2" style={{ marginBottom: 'var(--space-xl)' }}>General Questions</h2>
          </AnimatedSection>
          {faqs.map((faq, i) => (
            <FAQItem key={faq.id} faq={faq} index={i} />
          ))}

          {/* Still have questions */}
          <AnimatedSection style={{ marginTop: 'var(--space-3xl)', textAlign: 'center', background: 'var(--primary-pale)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-3xl)' }}>
            <HelpCircle size={40} color="var(--primary)" style={{ margin: '0 auto var(--space-md)' }} aria-hidden="true" />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, marginBottom: 'var(--space-sm)' }}>
              Still have questions?
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-xl)' }}>
              Can't find what you're looking for? Reach out to our support team and we'll be happy to help.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
