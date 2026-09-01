import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, Home, Compass, FileText, Check, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { ROOMS } from '../data/rooms';
import { EXPERIENCES } from '../data/experiences';

const STEPS = [
  { icon: Calendar, label: 'Dates' },
  { icon: Users, label: 'Guests' },
  { icon: Home, label: 'Room' },
  { icon: Compass, label: 'Experiences' },
  { icon: FileText, label: 'Review' },
  { icon: ShieldCheck, label: 'Confirm' }
];

export default function Booking() {
  const routerLocation = useLocation();
  const [step, setStep] = useState(0);

  // Form State
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [rooms, setRooms] = useState('1');
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [selectedExperiences, setSelectedExperiences] = useState([]);
  const [guestDetails, setGuestDetails] = useState({ firstName: '', lastName: '', email: '', phone: '', requests: '' });

  // Sync state if coming from BookingWidget or Room Card
  useEffect(() => {
    if (routerLocation.state) {
      if (routerLocation.state.checkIn) setCheckIn(routerLocation.state.checkIn);
      if (routerLocation.state.checkOut) setCheckOut(routerLocation.state.checkOut);
      if (routerLocation.state.guests) setGuests(routerLocation.state.guests);
      if (routerLocation.state.rooms) setRooms(routerLocation.state.rooms);
      if (routerLocation.state.selectedRoomId) {
        setSelectedRoomId(Number(routerLocation.state.selectedRoomId));
        setStep(2); // Jump straight to Room Step if room pre-selected
      }
    }
  }, [routerLocation.state]);

  // Calculations
  const selectedRoom = ROOMS.find(r => r.id === selectedRoomId);
  const getNights = () => {
    if (!checkIn || !checkOut) return 1;
    const diff = new Date(checkOut) - new Date(checkIn);
    const days = diff / (1000 * 60 * 60 * 24);
    return days > 0 ? days : 1;
  };
  const nights = getNights();
  
  const getRoomCost = () => {
    if (!selectedRoom) return 0;
    return selectedRoom.price * nights;
  };
  const roomCost = getRoomCost();

  const getExperienceCost = () => {
    return selectedExperiences.reduce((sum, expId) => {
      const exp = EXPERIENCES.find(e => e.id === expId);
      if (!exp || exp.price === 'Included') return sum;
      const val = parseInt(exp.price.replace(/[^0-9]/g, ''), 10);
      return sum + (isNaN(val) ? 0 : val);
    }, 0);
  };
  const experienceCost = getExperienceCost();
  const totalCost = roomCost + experienceCost;

  // Toggle experiences selection
  const handleToggleExperience = (expId) => {
    if (selectedExperiences.includes(expId)) {
      setSelectedExperiences(selectedExperiences.filter(id => id !== expId));
    } else {
      setSelectedExperiences([...selectedExperiences, expId]);
    }
  };

  // Steps controller validation
  const handleNext = () => {
    if (step === 0 && !checkIn) {
      alert('Please select a valid Check-In Date');
      return;
    }
    if (step === 0 && !checkOut) {
      alert('Please select a valid Check-Out Date');
      return;
    }
    if (step === 2 && !selectedRoomId) {
      alert('Please select a suite/resort habitat to proceed');
      return;
    }
    if (step === 4 && (!guestDetails.firstName || !guestDetails.lastName || !guestDetails.email)) {
      alert('Please enter your full name and email to proceed');
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div style={{ padding: '140px 40px 100px', maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box', fontFamily: 'var(--font-sans)' }}>
      {/* 1. Progress Step Tracker bar */}
      {step < 5 && (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '800px',
          margin: '0 auto 60px',
          position: 'relative',
          padding: '0 10px'
        }}>
          {/* Connector Line */}
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '30px',
            right: '30px',
            height: '2px',
            backgroundColor: '#e2e8f0',
            zIndex: 1
          }} />

          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            const isCompleted = step > idx;
            const isActive = step === idx;

            return (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', position: 'relative', zIndex: 2 }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: isActive ? '#c5a880' : isCompleted ? '#111111' : '#ffffff',
                  border: isActive ? '2px solid #c5a880' : '2px solid #e2e8f0',
                  color: isActive || isCompleted ? '#ffffff' : '#777777',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}>
                  {isCompleted ? <Check size={16} /> : <Icon size={16} />}
                </div>
                <span style={{ fontSize: '0.68rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', color: isActive ? '#c5a880' : '#777777' }}>
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {/* Main Reservation Flow container */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: step < 5 ? 'repeat(auto-fit, minmax(320px, 1.2fr) minmax(280px, 0.8fr))' : '1fr',
        gap: '50px',
        alignItems: 'start'
      }}>
        {/* Left Side: Active Flow Form Step */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid rgba(197, 168, 128, 0.15)', padding: '40px', boxSizing: 'border-box' }}>
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                key="step0"
                style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
              >
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: '400', margin: 0 }}>Select Dates</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#777777' }}>Check-In Date</label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setCheckIn(e.target.value)}
                    style={{ padding: '14px', border: '1px solid #e2e8f0', fontSize: '0.85rem', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#777777' }}>Check-Out Date</label>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    min={checkIn || new Date().toISOString().split('T')[0]}
                    onChange={(e) => setCheckOut(e.target.value)}
                    style={{ padding: '14px', border: '1px solid #e2e8f0', fontSize: '0.85rem', outline: 'none' }}
                  />
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                key="step1"
                style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
              >
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: '400', margin: 0 }}>Guests & Capacity</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#777777' }}>Number of Guests</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    style={{ padding: '14px', border: '1px solid #e2e8f0', fontSize: '0.85rem', outline: 'none', cursor: 'pointer' }}
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="6">6 Guests</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#777777' }}>Number of Rooms</label>
                  <select
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    style={{ padding: '14px', border: '1px solid #e2e8f0', fontSize: '0.85rem', outline: 'none', cursor: 'pointer' }}
                  >
                    <option value="1">1 Room</option>
                    <option value="2">2 Rooms</option>
                    <option value="3">3 Rooms</option>
                  </select>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                key="step2"
                style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
              >
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: '400', margin: 0 }}>Select Habitat</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {ROOMS.map(room => (
                    <div
                      key={room.id}
                      onClick={() => setSelectedRoomId(room.id)}
                      style={{
                        display: 'flex',
                        gap: '15px',
                        border: selectedRoomId === room.id ? '2px solid #c5a880' : '1px solid #e2e8f0',
                        padding: '15px',
                        cursor: 'pointer',
                        transition: 'border-color 0.3s'
                      }}
                    >
                      <img src={room.image} alt={room.name} style={{ width: '80px', height: '60px', objectFit: 'cover' }} />
                      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                          <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>{room.name}</span>
                          <span style={{ fontSize: '0.85rem', color: '#c5a880', fontWeight: '700' }}>${room.price}/Night</span>
                        </div>
                        <span style={{ fontSize: '0.72rem', color: '#777777' }}>Area: {room.size} • Bed: {room.bed}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                key="step3"
                style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
              >
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: '400', margin: 0 }}>Curated Add-on Experiences</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {EXPERIENCES.map(exp => (
                    <div
                      key={exp.id}
                      onClick={() => handleToggleExperience(exp.id)}
                      style={{
                        display: 'flex',
                        gap: '15px',
                        border: selectedExperiences.includes(exp.id) ? '2px solid #c5a880' : '1px solid #e2e8f0',
                        padding: '15px',
                        cursor: 'pointer',
                        transition: 'border-color 0.3s'
                      }}
                    >
                      <img src={exp.image} alt={exp.title} style={{ width: '80px', height: '60px', objectFit: 'cover' }} />
                      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                          <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>{exp.title}</span>
                          <span style={{ fontSize: '0.85rem', color: '#c5a880', fontWeight: '700' }}>{exp.price}</span>
                        </div>
                        <span style={{ fontSize: '0.72rem', color: '#777777' }}>Duration: {exp.duration} • Category: {exp.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                key="step4"
                style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
              >
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: '400', margin: 0 }}>Guest Information</h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#777777' }}>First Name</label>
                    <input
                      type="text"
                      required
                      value={guestDetails.firstName}
                      onChange={(e) => setGuestDetails({ ...guestDetails, firstName: e.target.value })}
                      style={{ padding: '12px', border: '1px solid #e2e8f0', fontSize: '0.85rem', outline: 'none' }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#777777' }}>Last Name</label>
                    <input
                      type="text"
                      required
                      value={guestDetails.lastName}
                      onChange={(e) => setGuestDetails({ ...guestDetails, lastName: e.target.value })}
                      style={{ padding: '12px', border: '1px solid #e2e8f0', fontSize: '0.85rem', outline: 'none' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#777777' }}>Email Address</label>
                  <input
                    type="email"
                    required
                    value={guestDetails.email}
                    onChange={(e) => setGuestDetails({ ...guestDetails, email: e.target.value })}
                    style={{ padding: '12px', border: '1px solid #e2e8f0', fontSize: '0.85rem', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#777777' }}>Phone Number</label>
                  <input
                    type="tel"
                    value={guestDetails.phone}
                    onChange={(e) => setGuestDetails({ ...guestDetails, phone: e.target.value })}
                    style={{ padding: '12px', border: '1px solid #e2e8f0', fontSize: '0.85rem', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#777777' }}>Special Requests</label>
                  <textarea
                    rows={4}
                    value={guestDetails.requests}
                    onChange={(e) => setGuestDetails({ ...guestDetails, requests: e.target.value })}
                    placeholder="E.g. room location, dietary, pillow configurations..."
                    style={{ padding: '12px', border: '1px solid #e2e8f0', fontSize: '0.85rem', outline: 'none', resize: 'vertical' }}
                  />
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                key="step5"
                style={{ textAlign: 'center', padding: '40px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}
              >
                {/* Success Animated Circle Check */}
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(197, 168, 128, 0.1)',
                  border: '2px solid #c5a880',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#c5a880',
                  marginBottom: '10px'
                }}>
                  <Check size={36} />
                </div>
                
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', fontWeight: '400', margin: 0 }}>Stay Confirmed</h2>
                <span style={{ fontSize: '0.88rem', color: '#777777', textTransform: 'uppercase', letterSpacing: '1px' }}>Booking Number: AH-{Math.floor(100000 + Math.random() * 900000)}</span>
                
                <p style={{
                  fontSize: '0.92rem',
                  lineHeight: '1.7',
                  color: '#555555',
                  maxWidth: '500px',
                  margin: '0 auto'
                }}>
                  Thank you, {guestDetails.firstName}. Your reservation details at Aurelia Haven have been logged. A detailed welcome packet, itinerary confirmation, and Highway 1 travel routes have been sent to <strong>{guestDetails.email}</strong>.
                </p>

                <div style={{ marginTop: '20px' }}>
                  <Link
                    to="/"
                    style={{
                      backgroundColor: '#111111',
                      color: '#ffffff',
                      textDecoration: 'none',
                      padding: '14px 28px',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    Return Home <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stepper buttons (Next / Prev) */}
          {step < 5 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', borderTop: '1px solid #f1f5f9', paddingTop: '25px' }}>
              <button
                onClick={handlePrev}
                disabled={step === 0}
                style={{
                  background: 'none',
                  border: 'none',
                  color: step === 0 ? '#cccccc' : '#111111',
                  cursor: step === 0 ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                <ArrowLeft size={16} /> Back
              </button>

              <button
                onClick={handleNext}
                style={{
                  backgroundColor: '#c5a880',
                  color: '#ffffff',
                  border: '1px solid #c5a880',
                  padding: '12px 28px',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
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
                {step === 4 ? 'Confirm Reservation' : 'Continue'} <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>

        {/* Right Side: Stay Summary Panel (Price calculation) */}
        {step < 5 && (
          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid rgba(197, 168, 128, 0.25)',
            padding: '30px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            position: 'sticky',
            top: '120px'
          }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: '400', margin: 0, color: '#1e1e1e' }}>
              Stay Summary
            </h3>
            
            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: 0 }} />

            {/* Inclusions summary */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem', color: '#555555' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Check-In</span>
                <span style={{ fontWeight: '600', color: '#1e1e1e' }}>{checkIn || 'Not Selected'}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Check-Out</span>
                <span style={{ fontWeight: '600', color: '#1e1e1e' }}>{checkOut || 'Not Selected'}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Duration</span>
                <span style={{ fontWeight: '600', color: '#1e1e1e' }}>{nights} Night{nights > 1 ? 's' : ''}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Capacity</span>
                <span style={{ fontWeight: '600', color: '#1e1e1e' }}>{guests} Guests / {rooms} Room{Number(rooms) > 1 ? 's' : ''}</span>
              </div>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: 0 }} />

            {/* Room selection summary */}
            {selectedRoom && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
                <span style={{ fontWeight: '700', color: '#1e1e1e' }}>{selectedRoom.name}</span>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#555555' }}>
                  <span>Base Rate: ${selectedRoom.price} x {nights} Night{nights > 1 ? 's' : ''}</span>
                  <span style={{ fontWeight: '600', color: '#1e1e1e' }}>${roomCost}</span>
                </div>
              </div>
            )}

            {/* Addons selected summary */}
            {selectedExperiences.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', borderTop: '1px solid #f1f5f9', paddingTop: '15px' }}>
                <span style={{ fontWeight: '700', color: '#1e1e1e' }}>Experiences</span>
                {selectedExperiences.map(expId => {
                  const exp = EXPERIENCES.find(e => e.id === expId);
                  return (
                    <div key={expId} style={{ display: 'flex', justifyContent: 'space-between', color: '#555555' }}>
                      <span>{exp.title}</span>
                      <span style={{ fontWeight: '600', color: '#1e1e1e' }}>{exp.price}</span>
                    </div>
                  );
                })}
              </div>
            )}

            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: 0 }} />

            {/* Final Cost */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontWeight: '700', color: '#1e1e1e', fontSize: '0.9rem' }}>Estimated Total</span>
              <span style={{ fontSize: '1.6rem', fontFamily: 'var(--font-serif)', color: '#c5a880', fontWeight: '600' }}>
                ${totalCost}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
