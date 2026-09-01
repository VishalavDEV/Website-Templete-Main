import React from 'react';

export default function ReservationModal({ isOpen, onClose, resDetails }) {
  if (!isOpen) return null;

  const { guests, formattedDate, time } = resDetails || {};

  return (
    <div
      className={`reservation-modal ${isOpen ? 'is-active' : ''}`}
      id="res-modal"
      onClick={(e) => {
        if (e.target.id === 'res-modal') onClose();
      }}
    >
      <div className="modal-content">
        <h3>TABLE CONFIRMED</h3>
        <p id="res-details-summary">
          {resDetails ? (
            <>
              Table reserved for <strong>{guests} {guests === '1' ? 'guest' : 'guests'}</strong> on <strong>{formattedDate}</strong> at <strong>{time}</strong>. We look forward to welcoming you to Lumière.
            </>
          ) : (
            'Your table reservation request has been received. We look forward to hosting you at Lumière.'
          )}
        </p>
        <button className="modal-close-btn" data-cursor="CLOSE" onClick={onClose}>
          RETURN TO WEBSITE
        </button>
      </div>
    </div>
  );
}
