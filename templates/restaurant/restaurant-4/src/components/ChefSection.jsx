import React from 'react';

export default function ChefSection() {
  return (
    <section id="chef" className="chef-section-bright" style={{ padding: 'var(--section-gap) var(--site-padding)' }}>
      <div className="container">
        <div className="chef-grid-fullheight">
          <div className="chef-portrait-bright-frame" data-cursor="VIEW">
            <img src="assets/images/chef.jpg" alt="Executive Chef Maya Fernandes" className="chef-portrait-img-bright" />
            <div className="chef-vertical-name">MAYA FERNANDES</div>
          </div>
          <div className="chef-right-story">
            <span className="chef-role-tag">EXECUTIVE CHEF &amp; CULINARY DIRECTOR</span>
            <h2 className="font-display" style={{ fontSize: 'clamp(3rem, 5.5vw, 5rem)', lineHeight: 0.92 }}>
              CRAFTING WITH NATURE.
            </h2>
            <div className="chef-quote-handwritten">
              &ldquo;Cooking is the art of translating nature’s quietest whispers into memories around a shared table.&rdquo;
            </div>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
              With over fifteen years of culinary exploration across coastal India and Mediterranean gardens, Chef Maya Fernandes leads CHENNAI with a commitment to zero-waste, hyper-seasonal cooking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
