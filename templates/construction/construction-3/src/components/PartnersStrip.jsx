import React, { useState } from 'react';

export default function PartnersStrip() {
  const allBrands = ['▲ AUTODESK', 'PROCORE', '⬡ LUMION', 'Q PLANGRID', 'ORACLE', 'BUILDZOOM', 'TRIMBLE', 'BENTLEY'];
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex(prev => (prev + 1) % (allBrands.length - 4));
  };

  const handlePrev = () => {
    setStartIndex(prev => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <section className="futurix-partners-strip">
      <div className="container">
        <div className="partners-inner">
          {allBrands.slice(startIndex, startIndex + 6).map((brand, idx) => (
            <div className="brand-item" key={idx}>{brand}</div>
          ))}

          <div className="brand-carousel-controls">
            <button className="arrow-btn" onClick={handlePrev} title="Previous Partners">‹</button>
            <button className="arrow-btn" onClick={handleNext} title="Next Partners">›</button>
          </div>
        </div>
      </div>
    </section>
  );
}
