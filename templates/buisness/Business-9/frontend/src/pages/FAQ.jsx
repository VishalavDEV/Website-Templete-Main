import { useState, useEffect } from 'react';
import { fetchFaqs } from '../services/api';
import FAQAccordion from '../components/FAQAccordion';
import PageTransition from '../animations/PageTransition';
import { HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [faqsList, setFaqsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFaqs = async () => {
      try {
        const data = await fetchFaqs();
        setFaqsList(data);
      } catch (err) {
        console.error("Failed to load FAQs data", err);
      } finally {
        setLoading(false);
      }
    };
    loadFaqs();
  }, []);

  return (
    <PageTransition>
      <div style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
        <div className="container">
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge"><HelpCircle size={14} /> Questions</span>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, fontFamily: 'var(--font-title)', marginBottom: '1rem' }}>
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', maxDWidth: '600px', margin: '0 auto', fontSize: '1.05rem' }}>
              Find quick answers detailing our project onboarding timeline, customized service plans, and legacy transition options.
            </p>
          </div>

          {/* Loading Indicator */}
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem 0' }}>
              <div className="spinner" style={{
                width: '40px',
                height: '40px',
                border: '4px solid var(--secondary)',
                borderTopColor: 'var(--primary)',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
            </div>
          ) : (
            <FAQAccordion faqs={faqsList} />
          )}

        </div>
      </div>
      
      <style>{`
        .spinner {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </PageTransition>
  );
}
