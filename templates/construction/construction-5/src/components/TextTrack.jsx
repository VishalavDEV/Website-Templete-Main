import React from 'react';

export default function TextTrack() {
  return (
    <div className="architectural-texttrack-wrapper">
      {/* Stream 1: Large Bold Headline (Moving Left) */}
      <div className="texttrack-stream stream-left">
        <div className="texttrack-content">
          <span className="tt-solid">NEW HOUSE</span>
          <span className="tt-separator">—</span>
          <span className="tt-outline">СТРОИТЕЛЬСТВО ЭЛИТНЫХ ДОМОВ</span>
          <span className="tt-separator">—</span>
          <span className="tt-solid">MODERN LUXURY VILLAS</span>
          <span className="tt-separator">—</span>
          <span className="tt-outline">CANTILEVERED PAVILIONS</span>
          <span className="tt-separator">—</span>
          <span className="tt-copper">EST. 2018</span>
          <span className="tt-separator">—</span>
        </div>
        <div className="texttrack-content" aria-hidden="true">
          <span className="tt-solid">NEW HOUSE</span>
          <span className="tt-separator">—</span>
          <span className="tt-outline">СТРОИТЕЛЬСТВО ЭЛИТНЫХ ДОМОВ</span>
          <span className="tt-separator">—</span>
          <span className="tt-solid">MODERN LUXURY VILLAS</span>
          <span className="tt-separator">—</span>
          <span className="tt-outline">CANTILEVERED PAVILIONS</span>
          <span className="tt-separator">—</span>
          <span className="tt-copper">EST. 2018</span>
          <span className="tt-separator">—</span>
        </div>
      </div>

      {/* Stream 2: Refined Copper Micro-Stream (Moving Right) */}
      <div className="texttrack-stream stream-right">
        <div className="texttrack-content">
          <span className="tt-micro">SWISS ARCHITECTURAL MASTERY</span>
          <span className="tt-dot">•</span>
          <span className="tt-micro">BESPOKE PRIVATE ESTATES</span>
          <span className="tt-dot">•</span>
          <span className="tt-micro">SEISMIC TIMBER JOINERY</span>
          <span className="tt-dot">•</span>
          <span className="tt-micro">LAKEFRONT REFLECTION POOLS</span>
          <span className="tt-dot">•</span>
          <span className="tt-micro">100% TURNKEY ENGINEERING</span>
          <span className="tt-dot">•</span>
        </div>
        <div className="texttrack-content" aria-hidden="true">
          <span className="tt-micro">SWISS ARCHITECTURAL MASTERY</span>
          <span className="tt-dot">•</span>
          <span className="tt-micro">BESPOKE PRIVATE ESTATES</span>
          <span className="tt-dot">•</span>
          <span className="tt-micro">SEISMIC TIMBER JOINERY</span>
          <span className="tt-dot">•</span>
          <span className="tt-micro">LAKEFRONT REFLECTION POOLS</span>
          <span className="tt-dot">•</span>
          <span className="tt-micro">100% TURNKEY ENGINEERING</span>
          <span className="tt-dot">•</span>
        </div>
      </div>
    </div>
  );
}
