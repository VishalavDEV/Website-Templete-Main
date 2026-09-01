import React from 'react';
import { Dish } from '../types';

interface SignatureDishModalProps {
  dish?: Dish | null;
}

export const SignatureDishModal: React.FC<SignatureDishModalProps> = ({ dish }) => {
  return (
    <div className="modal fade" id="signatureDishModal" tabIndex={-1} aria-labelledby="signatureDishModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content modal-content-custom">
          <div className="modal-header border-bottom border-dark-subtle p-4">
            <h5 className="modal-title font-heading text-white modal-dish-title" id="signatureDishModalLabel">
              {dish?.title || 'Signature Dish'}
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body p-4">
            <div className="row g-4 align-items-center">
              <div className="col-md-6">
                <img 
                  src={dish?.img || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"} 
                  alt={dish?.title || "Dish Detail"} 
                  className="img-fluid rounded modal-dish-img" 
                  style={{ aspectRatio: '4/3', objectFit: 'cover', width: '100%' }} 
                />
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-between align-items-baseline mb-2">
                  <span className="badge bg-accent text-white px-2 py-1 small">Chef's Creation</span>
                  <span className="modal-dish-price fs-4 font-heading text-accent fw-bold">{dish?.price || '₹0'}</span>
                </div>
                <p className="modal-dish-desc text-bone opacity-85 mb-3">{dish?.desc}</p>
                <div className="p-3 bg-dark-surface rounded border border-dark-subtle mb-3">
                  <small className="text-accent text-uppercase letter-spacing-1 d-block mb-1">Key Ingredients:</small>
                  <p className="modal-dish-ingredients small text-bone opacity-75 mb-0">{dish?.ingredients}</p>
                </div>
                <div>
                  <small className="text-accent text-uppercase letter-spacing-1 d-block mb-1">
                    <i className="bi bi-cup me-1"></i> Sommelier Wine Pairing:
                  </small>
                  <p className="modal-dish-pairing small text-bone opacity-90 mb-0 font-italic">{dish?.pairing || 'Sommelier Selection Red'}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer border-top border-dark-subtle p-3">
            <a href="#reservation" className="btn-custom btn-primary-accent" data-bs-dismiss="modal">Reserve Table for this Dish</a>
          </div>
        </div>
      </div>
    </div>
  );
};
