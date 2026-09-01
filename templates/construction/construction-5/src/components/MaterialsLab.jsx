import React, { useEffect, useState } from 'react';

export default function MaterialsLab() {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/materials')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch materials');
        return res.json();
      })
      .then((data) => {
        setMaterials(data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn('Backend API connection warning, using fallback materials data:', err);
        setMaterials([
          {
            id: 'mat-01',
            code: 'MAT-01',
            name: 'Siberian Larch & Yakisugi',
            detail: 'Shou Sugi Ban Japanese charred wood providing impervious natural resistance to moisture, insects, and UV degradation.',
            rating: '50-YR WARRANTY',
            swatchType: 'swatch-wood',
            metaInfo: 'Thermal: 0.13 W/mK • Class A Fire'
          },
          {
            id: 'mat-02',
            code: 'MAT-02',
            name: 'Low-Iron Solar Acoustic Glass',
            detail: 'Triple-pane laminated structural glazing offering 92% optical clarity and 45dB acoustic isolation against extreme alpine climates.',
            rating: '0.18 U-VALUE',
            swatchType: 'swatch-glass',
            metaInfo: 'Sound: 45 dB • 99% UV Block'
          },
          {
            id: 'mat-03',
            code: 'MAT-03',
            name: 'Honed Swiss Basalt & Granite',
            detail: 'Volcanic quarry stone diamond-cut into seamless indoor-outdoor floor slabs with concealed floor heating conduits.',
            rating: 'ZERO POROSITY',
            swatchType: 'swatch-stone',
            metaInfo: 'Hardness: 7 Mohs • Zero Sealant'
          },
          {
            id: 'mat-04',
            code: 'MAT-04',
            name: 'Black Quartz Reflection Pool',
            detail: 'Submerged crystalline dark quartz with micro-slit perimeter overflow, silent circulation pumps, and LED light ribbons.',
            rating: 'MIRROR OPTICS',
            swatchType: 'swatch-water',
            metaInfo: 'Flow: Silent 30dB • Heated Geothermal'
          }
        ]);
        setLoading(false);
      });
  }, []);

  return (
    <section className="materials-section bg-matte-black" id="materials">
      <div className="container">
        <div className="section-header-editorial">
          <div className="header-left">
            <span className="mini-tag">SPECIMEN LAB // CRAFTSMANSHIP</span>
            <h2 className="editorial-title">Tactile Materials & Engineering</h2>
          </div>
          <div className="header-right">
            <span className="editorial-sub-text">
              Uncompromising structural elements selected for timeless architectural resilience.
            </span>
          </div>
        </div>

        <div className="specimen-grid-4">
          {materials.map((mat) => (
            <div key={mat.id || mat.code} className="specimen-card">
              <div className="specimen-top">
                <span className="spec-code">{mat.code}</span>
                <span className="spec-rating">{mat.rating}</span>
              </div>
              <div className={`specimen-swatch-box ${mat.swatchType}`}>
                <div className="swatch-glimmer"></div>
              </div>
              <h4 className="specimen-name">{mat.name}</h4>
              <p className="specimen-detail">{mat.detail}</p>
              <div className="specimen-meta-row">
                <span>{mat.metaInfo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
