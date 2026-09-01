import React, { useState } from 'react';
import { Ruler, Sparkles, X, Check, ArrowRight } from 'lucide-react';

export const SizeGuideModal = ({ isOpen, onClose, sizes, onSelectSizeFromGuide }) => {
  const [footLengthCm, setFootLengthCm] = useState('');
  const [calcResult, setCalcResult] = useState(null);

  if (!isOpen) return null;

  const handleCalculate = (e) => {
    e.preventDefault();
    const val = parseFloat(footLengthCm);
    if (!val || val < 20 || val > 35) return;

    // Find closest size in centimeters
    const match = sizes.reduce((prev, curr) => {
      return Math.abs(parseFloat(curr.cm) - val) < Math.abs(parseFloat(prev.cm) - val) ? curr : prev;
    }, sizes[0]);

    setCalcResult(match);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="size-guide-modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-title-row">
            <Ruler size={20} className="modal-icon" />
            <h3 className="modal-title">AEROSTRIDE X-PRO PRECISION SIZE GUIDE</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Interactive Foot Measurement Calculator */}
        <div className="size-calc-card glass-card">
          <div className="size-calc-header">
            <span className="badge-tag">
              <Sparkles size={12} /> SMART FIT ESTIMATOR
            </span>
            <span className="calc-note">Measure heel to longest toe against a flat wall</span>
          </div>

          <form onSubmit={handleCalculate} className="calc-form-row">
            <div className="calc-input-wrap">
              <input
                type="number"
                step="0.1"
                placeholder="Enter Foot Length (e.g. 27.5)"
                value={footLengthCm}
                onChange={(e) => setFootLengthCm(e.target.value)}
                className="form-input"
              />
              <span className="input-suffix font-mono">CM</span>
            </div>

            <button type="submit" className="btn-primary calc-submit-btn">
              <span>Calculate Size</span>
            </button>
          </form>

          {calcResult && (
            <div className="calc-result-badge">
              <span className="result-label">Recommended Race Fit:</span>
              <strong className="result-val font-mono">
                US {calcResult.us} / UK {calcResult.uk} / EU {calcResult.eu} ({calcResult.cm}cm)
              </strong>
              <button 
                className="apply-calc-size-btn"
                onClick={() => {
                  onSelectSizeFromGuide(calcResult);
                  onClose();
                }}
              >
                Apply This Size <ArrowRight size={14} />
              </button>
            </div>
          )}
        </div>

        {/* Comprehensive Sizing Conversion Table */}
        <div className="size-table-container">
          <table className="size-table">
            <thead>
              <tr>
                <th>US (MENS)</th>
                <th>UK</th>
                <th>EU</th>
                <th>HEEL-TO-TOE (CM)</th>
                <th>INCHES</th>
                <th>STOCK STATUS</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((s, idx) => {
                const isSelected = calcResult?.us === s.us;
                return (
                  <tr key={idx} className={isSelected ? 'highlight-row' : ''}>
                    <td className="font-mono font-bold">US {s.us}</td>
                    <td className="font-mono">UK {s.uk}</td>
                    <td className="font-mono">EU {s.eu}</td>
                    <td className="font-mono">{s.cm} cm</td>
                    <td className="font-mono">{(parseFloat(s.cm) / 2.54).toFixed(1)}"</td>
                    <td>
                      {s.inStock ? (
                        <span className="stock-in font-mono">● In Stock</span>
                      ) : (
                        <span className="stock-out font-mono">○ Sold Out</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Fit Pro Tips */}
        <div className="fit-pro-tips">
          <div className="tip-box">
            <strong>Race Fit vs Training:</strong> The monofilament upper provides an anatomical lockdown. We recommend true-to-size for 5k–21k racing.
          </div>
          <div className="tip-box">
            <strong>Sock Thickness:</strong> Tested with 1.5mm technical nano-grip running socks.
          </div>
        </div>

      </div>
    </div>
  );
};
