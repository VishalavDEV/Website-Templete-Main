import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, ShoppingBag, Truck, Edit2, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  // Form edit states
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [street, setStreet] = useState(user?.address?.street || '');
  const [city, setCity] = useState(user?.address?.city || '');
  const [state, setState] = useState(user?.address?.state || '');
  const [zipCode, setZipCode] = useState(user?.address?.zipCode || '');
  const [country, setCountry] = useState(user?.address?.country || 'United States');

  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');

  const fetchOrders = async () => {
    try {
      const response = await api.get('/orders/user');
      setOrders(response.data);
    } catch (err) {
      console.error('Failed to load user orders', err);
    } finally {
      setLoadingOrders(false);
    }
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setStreet(user.address?.street || '');
      setCity(user.address?.city || '');
      setState(user.address?.state || '');
      setZipCode(user.address?.zipCode || '');
      setCountry(user.address?.country || 'United States');
      fetchOrders();
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback('');
    setError('');
    try {
      const address = { street, city, state, zipCode, country };
      await updateProfile(name, address);
      setFeedback('Profile updated successfully! 🌸');
      setIsEditing(false);
    } catch (err) {
      setError(err.message || 'Failed to update profile');
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <p className="text-gray-500 font-medium">Please login to view profile details</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto text-left">
      
      {/* Title Header */}
      <div className="mb-10">
        <span className="text-pink-500 font-display font-semibold text-xs tracking-widest uppercase bg-pink-100/50 px-4 py-2 rounded-full border border-pink-200/50">
          Account Space
        </span>
        <h1 className="text-3xl md:text-5xl font-display font-extrabold text-gray-800 mt-4">
          Hello, {user.name}
        </h1>
        <p className="text-gray-500 text-sm md:text-base mt-2">
          Manage your delivery coordinates and inspect past parcel journeys.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Side: Profile & Coordinates card */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="glass-card rounded-[32px] border border-pink-100 p-6 shadow-premium relative">
            
            <div className="flex justify-between items-center mb-6 border-b border-pink-50 pb-4">
              <h3 className="font-display font-bold text-gray-800 text-lg flex items-center gap-2">
                <User size={18} className="text-pink-500" /> Account Details
              </h3>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="p-2 bg-pink-50 text-pink-600 rounded-xl hover:bg-pink-100 transition-all"
                >
                  <Edit2 size={14} />
                </button>
              )}
            </div>

            {feedback && (
              <div className="bg-green-50 text-green-600 text-xs font-semibold p-3 rounded-xl border border-green-100 mb-4">
                {feedback}
              </div>
            )}

            {error && (
              <div className="bg-red-50 text-red-500 text-xs font-semibold p-3 rounded-xl border border-red-100 mb-4">
                {error}
              </div>
            )}

            {!isEditing ? (
              // View mode
              <div className="space-y-4 text-sm text-gray-600">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Email Address</p>
                  <p className="font-semibold text-gray-800 mt-0.5">{user.email}</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Default Coordinates</p>
                  {user.address?.street ? (
                    <div className="mt-1 flex items-start gap-1">
                      <MapPin size={14} className="text-pink-400 shrink-0 mt-0.5" />
                      <p className="font-semibold text-gray-800 leading-snug">
                        {user.address.street}, <br />
                        {user.address.city}, {user.address.state} {user.address.zipCode}, <br />
                        {user.address.country}
                      </p>
                    </div>
                  ) : (
                    <p className="text-xs text-gray-400 italic mt-1">No delivery coordinates saved yet.</p>
                  )}
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Joined Date</p>
                  <p className="font-semibold text-gray-800 mt-0.5">Aug 2026</p>
                </div>
              </div>
            ) : (
              // Edit mode form
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs">
                
                <div className="flex flex-col gap-1">
                  <label className="font-bold text-gray-500">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-pink-50/50 border border-pink-100 rounded-xl px-3 py-2 outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-bold text-gray-500">Street Address</label>
                  <input
                    type="text"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    className="bg-pink-50/50 border border-pink-100 rounded-xl px-3 py-2 outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-bold text-gray-500">City</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="bg-pink-50/50 border border-pink-100 rounded-xl px-3 py-2 outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-bold text-gray-500">State</label>
                    <input
                      type="text"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="bg-pink-50/50 border border-pink-100 rounded-xl px-3 py-2 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-bold text-gray-500">Zip Code</label>
                    <input
                      type="text"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="bg-pink-50/50 border border-pink-100 rounded-xl px-3 py-2 outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-bold text-gray-500">Country</label>
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="bg-pink-50/50 border border-pink-100 rounded-xl px-3 py-2.5 outline-none"
                    />
                  </div>
                </div>

                <div className="flex gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="flex-grow bg-white border border-pink-200 text-pink-600 py-2.5 rounded-xl font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-grow bg-pink-500 hover:bg-pink-600 text-white py-2.5 rounded-xl font-bold"
                  >
                    Save Changes
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>

        {/* Right Side: Order history list */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-pink-100 rounded-[32px] p-6 shadow-premium">
            
            <h3 className="font-display font-bold text-gray-800 text-lg mb-6 border-b border-pink-50 pb-4 flex items-center gap-2">
              <ShoppingBag size={18} className="text-pink-500" /> Order History
            </h3>

            {loadingOrders ? (
              <p className="text-xs text-gray-400 italic">Retrieving order lists...</p>
            ) : orders.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-400 text-xs">You haven't ordered any parcels yet.</p>
                <button 
                  onClick={() => navigate('/shop')} 
                  className="mt-4 bg-pink-100 text-pink-600 font-bold px-4 py-2 rounded-xl text-xs"
                >
                  Shop Now
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-6 max-h-[500px] overflow-y-auto pr-2">
                {orders.map((order) => (
                  <div key={order.id} className="border border-pink-50 hover:border-pink-100 rounded-2xl p-4 text-xs text-gray-600 transition-all">
                    
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-pink-50/50 pb-2 mb-3">
                      <div>
                        <span className="font-bold text-gray-800">Order ID: #{order.id}</span>
                        <span className="text-[10px] text-gray-400 ml-2">({order.createdAt ? order.createdAt.substring(0, 10) : '2026-08-22'})</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 sm:mt-0">
                        <span className="font-mono bg-pink-50 font-semibold px-2 py-0.5 rounded text-pink-600 uppercase">
                          {order.shipment?.trackingNumber}
                        </span>
                        <button
                          onClick={() => navigate(`/track?trackingNumber=${order.shipment?.trackingNumber}`)}
                          className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-2 py-0.5 rounded text-[10px]"
                        >
                          Track Status
                        </button>
                      </div>
                    </div>

                    {/* Items Grid list */}
                    <div className="flex flex-col gap-2 mb-3">
                      {order.items?.map((item) => (
                        <div key={item.id} className="flex justify-between items-center text-xs text-gray-600">
                          <span className="font-medium text-gray-800 max-w-[280px] truncate">{item.product?.name}</span>
                          <span>Qty: {item.quantity} x ₹{item.price.toFixed(2)}</span>
                        </div>
                      ))}
                    </div>

                    {/* Footer values */}
                    <div className="flex justify-between items-center border-t border-pink-50/50 pt-2 text-xs">
                      <div>
                        <span className="text-gray-400">Total Price: </span>
                        <span className="font-bold text-pink-600">₹{order.total.toFixed(2)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className={`w-2 h-2 rounded-full ${order.status === 'DELIVERED' ? 'bg-green-500' : 'bg-pink-500'}`} />
                        <span className="font-bold text-gray-700 uppercase tracking-wider">{order.status}</span>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};

export default Profile;
