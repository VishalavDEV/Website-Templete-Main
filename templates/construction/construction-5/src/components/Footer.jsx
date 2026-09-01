import React from 'react';

export default function Footer() {
  return (
    <footer className="newhouse-footer">
      <div className="container footer-flex">
        <div className="f-brand">
          <strong>New House</strong>
          <span>строительство элитных домов • React & Spring Boot Edition • Est. 2018</span>
        </div>
        <div className="f-links">
          <a href="#about">Philosophy</a>
          <a href="#portfolio">Villas</a>
          <a href="#materials">Materials Lab</a>
          <a href="#configurator">BIM Configurator</a>
          <a href="#hero">Back to Top ↑</a>
        </div>
      </div>
    </footer>
  );
}
