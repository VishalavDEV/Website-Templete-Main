import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Products from './components/Products';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { getSlides, getFeatures, getProducts, getPricing, getFaqs } from './services/api';

export default function App() {
  const [slides, setSlides] = useState([]);
  const [features, setFeatures] = useState([]);
  const [products, setProducts] = useState([]);
  const [pricing, setPricing] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAllContent() {
      try {
        const [slidesData, featData, prodData, priceData, faqData] = await Promise.all([
          getSlides(),
          getFeatures(),
          getProducts(),
          getPricing(),
          getFaqs()
        ]);
        setSlides(slidesData);
        setFeatures(featData);
        setProducts(prodData);
        setPricing(priceData);
        setFaqs(faqData);
      } catch (e) {
        console.error('Error fetching data:', e);
      } finally {
        setLoading(false);
      }
    }

    loadAllContent();
  }, []);

  return (
    <div className="asentus-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero slides={slides} />
        <Features features={features} />
        <About />
        <Products products={products} />
        <Pricing pricing={pricing} onSelectPlan={(plan) => setSelectedPlan(plan)} />
        <Faq faqs={faqs} />
        <Contact selectedPlan={selectedPlan} onClearPlan={() => setSelectedPlan(null)} />
      </main>
      <Footer />
    </div>
  );
}