import React from 'react';
import { Link } from 'react-router-dom';

export const Events: React.FC = () => {
  return (
    <>
      {/* Banner */}
      <section className="py-5 bg-primary-dark text-center" style={{ paddingTop: '8rem' }}>
        <div className="container py-5">
          <span className="eyebrow eyebrow-light">EXPERIENCES & PRIVATE DINING</span>
          <h1 className="display-3 font-heading text-cream mb-3">Celebrations Around the Hearth</h1>
          <p className="section-subtitle text-muted-light mx-auto" style={{ maxWidth: '650px' }}>
            Tailored culinary gatherings, intimate Chef’s table reservations, and exclusive mezzanine buyouts.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="section-py bg-cream-light">
        <div className="container">
          <div className="row g-5 align-items-center mb-5">
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=900&auto=format&fit=crop"
                alt="Chef Table"
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
            <div className="col-lg-6">
              <span className="eyebrow">EXCLUSIVE SEATING</span>
              <h2 className="section-heading mb-3">Chef’s Live Hearth Table</h2>
              <p className="text-muted-custom fs-5 mb-3">Every Friday Evening &bull; 8 Guests Maximum</p>
              <p className="text-muted-custom mb-4">
                Sit directly before our live fire kitchen and enjoy an 8-course omakase-style hearth menu personally crafted and introduced by Chef Arjun Rao and our head sommelier.
              </p>
              <Link to="/contact#reservation" className="btn-ember-primary">Request Chef’s Table</Link>
            </div>
          </div>

          <hr className="border-secondary opacity-25 my-5" />

          <div className="row g-5 align-items-center mb-5 flex-lg-row-reverse">
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=900&auto=format&fit=crop"
                alt="Private Mezzanine Dining"
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
            <div className="col-lg-6">
              <span className="eyebrow">PRIVATE BUYOUTS</span>
              <h2 className="section-heading mb-3">The Mezzanine Private Room</h2>
              <p className="text-muted-custom fs-5 mb-3">Up to 24 Guests Seated &bull; Dedicated Service</p>
              <p className="text-muted-custom mb-4">
                An atmospheric private salon overlooking the main dining room with its own bespoke hearth bar, dedicated sommelier, and custom printed four-course menus.
              </p>
              <Link to="/contact" className="btn-ember-outline">Inquire for Private Buyout</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
