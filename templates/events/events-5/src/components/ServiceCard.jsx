import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Droplet, ShieldCheck, Layers, Car, Wrench } from 'lucide-react';

const iconMap = {
  'FOAM WASH': Droplet,
  'PREMIUM DETAILING': Sparkles,
  'CERAMIC COATING': ShieldCheck,
  'PAINT CORRECTION': Layers,
  'INTERIOR DEEP CLEAN': Car,
  'FULL BODY POLISH': Wrench,
  'ENGINE BAY DETAILING': Wrench,
  'HEADLIGHT RESTORATION': Sparkles,
  'TYRE & WHEEL CARE': Car
};

export const ServiceCard = ({ service }) => {
  const IconComponent = iconMap[service.name] || Sparkles;

  return (
    <div className="service-card" style={{
      background: 'linear-gradient(180deg, #111417 0%, #0d1013 100%)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '16px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
    }}>
      {/* Top Image Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '210px',
        overflow: 'hidden'
      }}>
        <img
          src={service.image}
          alt={service.name}
          className="service-img"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, transparent 40%, #111417 100%)'
        }} />

        {/* Badge Pill */}
        {service.badge && (
          <div className="badge-pill badge-green" style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
          }}>
            {service.badge}
          </div>
        )}

        {/* Service Category */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: '#7cff4f',
          fontSize: '0.78rem',
          fontWeight: '800',
          letterSpacing: '0.15em',
          textTransform: 'uppercase'
        }}>
          <IconComponent size={16} />
          <span>{service.category}</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div style={{
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'space-between'
      }}>
        <div>
          <h3 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1.4rem',
            color: '#f5f7f8',
            marginBottom: '10px',
            fontWeight: '800'
          }}>
            {service.name}
          </h3>
          <p style={{
            color: '#b9c0c5',
            fontSize: '0.92rem',
            lineHeight: 1.5,
            marginBottom: '20px',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {service.description}
          </p>
        </div>

        {/* Price & View Button */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '16px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Starting From</span>
            <div style={{
              fontSize: '1.4rem',
              fontWeight: '900',
              color: '#7cff4f',
              fontFamily: "'Space Grotesk', sans-serif"
            }}>
              {service.startingPrice}
            </div>
          </div>

          <Link 
            to="/services" 
            className="btn-outline-green" 
            style={{ 
              padding: '8px 16px', 
              fontSize: '0.82rem', 
              borderRadius: '8px' 
            }}
          >
            View Details <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <style>{`
        .service-card:hover {
          transform: translateY(-8px);
          border-color: #7cff4f;
          box-shadow: 0 15px 35px rgba(124, 255, 79, 0.18);
        }
        .service-card:hover .service-img {
          transform: scale(1.08);
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;
