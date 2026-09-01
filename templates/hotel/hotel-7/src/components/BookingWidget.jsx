import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, Home, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BookingWidget() {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [rooms, setRooms] = useState('1');

  const handleSearch = (e) => {
    e.preventDefault();
    // Redirect to booking page with state
    navigate('/booking', {
      state: {
        checkIn,
        checkOut,
        guests,
        rooms
      }
    });
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
      style={{
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        backgroundColor: '#1e1e1e',
        border: '1px solid rgba(197, 168, 128, 0.3)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
        padding: '24px 32px',
        boxSizing: 'border-box',
        color: '#ffffff',
        position: 'relative',
        zIndex: 10
      }}
    >
      <form
        onSubmit={handleSearch}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr)) 160px',
          gap: '20px',
          alignItems: 'end'
        }}
      >
        {/* Check-In */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{
            fontSize: '0.72rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: '#c5a880',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Calendar size={12} /> Check-In
          </label>
          <input
            type="date"
            required
            value={checkIn}
            min={new Date().toISOString().split('T')[0]}
            onChange={(e) => setCheckIn(e.target.value)}
            style={{
              width: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '12px 14px',
              color: '#ffffff',
              fontSize: '0.85rem',
              outline: 'none',
              boxSizing: 'border-box',
              transition: 'border-color 0.3s'
            }}
            onFocus={(e) => e.target.style.borderColor = '#c5a880'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
          />
        </div>

        {/* Check-Out */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{
            fontSize: '0.72rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: '#c5a880',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Calendar size={12} /> Check-Out
          </label>
          <input
            type="date"
            required
            value={checkOut}
            min={checkIn || new Date().toISOString().split('T')[0]}
            onChange={(e) => setCheckOut(e.target.value)}
            style={{
              width: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '12px 14px',
              color: '#ffffff',
              fontSize: '0.85rem',
              outline: 'none',
              boxSizing: 'border-box',
              transition: 'border-color 0.3s'
            }}
            onFocus={(e) => e.target.style.borderColor = '#c5a880'}
            onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
          />
        </div>

        {/* Guests */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{
            fontSize: '0.72rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: '#c5a880',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Users size={12} /> Guests
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            style={{
              width: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '12px 14px',
              color: '#ffffff',
              fontSize: '0.85rem',
              outline: 'none',
              boxSizing: 'border-box',
              cursor: 'pointer'
            }}
          >
            <option value="1" style={{ backgroundColor: '#1e1e1e' }}>1 Guest</option>
            <option value="2" style={{ backgroundColor: '#1e1e1e' }}>2 Guests</option>
            <option value="3" style={{ backgroundColor: '#1e1e1e' }}>3 Guests</option>
            <option value="4" style={{ backgroundColor: '#1e1e1e' }}>4 Guests</option>
            <option value="6" style={{ backgroundColor: '#1e1e1e' }}>6 Guests</option>
          </select>
        </div>

        {/* Rooms */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{
            fontSize: '0.72rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: '#c5a880',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Home size={12} /> Rooms
          </label>
          <select
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            style={{
              width: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '12px 14px',
              color: '#ffffff',
              fontSize: '0.85rem',
              outline: 'none',
              boxSizing: 'border-box',
              cursor: 'pointer'
            }}
          >
            <option value="1" style={{ backgroundColor: '#1e1e1e' }}>1 Room</option>
            <option value="2" style={{ backgroundColor: '#1e1e1e' }}>2 Rooms</option>
            <option value="3" style={{ backgroundColor: '#1e1e1e' }}>3 Rooms</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          style={{
            height: '46px',
            backgroundColor: '#c5a880',
            color: '#ffffff',
            fontWeight: '700',
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            border: '1px solid #c5a880',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            width: '100%'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#c5a880';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#c5a880';
            e.currentTarget.style.color = '#ffffff';
          }}
        >
          Check Rates <Search size={14} />
        </button>
      </form>
    </motion.div>
  );
}
