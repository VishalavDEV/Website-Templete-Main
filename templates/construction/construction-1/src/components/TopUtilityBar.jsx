import React from 'react';

export default function TopUtilityBar({ darkMode, setDarkMode }) {
  return (
    <div className="top-utility-bar">
      <div className="container utility-flex">
        <div className="utility-left">
          <span className="util-item">📞 +(123) 1234-587-8901</span>
          <span className="util-divider">▪</span>
          <span className="util-item">epc@advanced-construction.com</span>
        </div>
        <div className="utility-right">
          <span className="util-license">CALIFORNIA CLASS A HEAVY CIVIL LICENSE #847291 - OSHA 100% ZERO INCIDENT</span>
        </div>
      </div>
    </div>
  );
}
