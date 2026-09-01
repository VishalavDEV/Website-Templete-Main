import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, User as UserIcon, ArrowRight, Heart, HeartCrack } from 'lucide-react';

const Auth = () => {
  const { login, register, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || '/';

  // Toggle state
  const [isLogin, setIsLogin] = useState(true);
  
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('CUSTOMER');

  // Feedback states
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  // Redirect if already logged in
  React.useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
        setSuccess('Logged in successfully! 💗');
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1000);
      } else {
        await register(name, email, password, role);
        setSuccess('Registration successful! Please login. 🌸');
        setIsLogin(true);
        setName('');
        setPassword('');
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-12 flex items-center justify-center px-4 relative">
      
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-pink-200/40 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-200/30 rounded-full blur-[100px] -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md glass-card rounded-[32px] border border-pink-100 shadow-premium overflow-hidden"
      >
        {/* Toggle Header Tabs */}
        <div className="flex border-b border-pink-100/50 bg-white/40">
          <button 
            onClick={() => { setIsLogin(true); setError(''); setSuccess(''); }}
            className={`flex-grow py-4 text-sm font-display font-bold relative transition-colors ${
              isLogin ? 'text-pink-600' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Sign In
            {isLogin && (
              <motion.div 
                layoutId="authTabIndicator" 
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-pink-500 rounded-full" 
              />
            )}
          </button>
          <button 
            onClick={() => { setIsLogin(false); setError(''); setSuccess(''); }}
            className={`flex-grow py-4 text-sm font-display font-bold relative transition-colors ${
              !isLogin ? 'text-pink-600' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Create Account
            {!isLogin && (
              <motion.div 
                layoutId="authTabIndicator" 
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-pink-500 rounded-full" 
              />
            )}
          </button>
        </div>

        <div className="p-8">
          
          <div className="text-center mb-8">
            <span className="text-3xl inline-block animate-float">
              {isLogin ? '🔑' : '✨'}
            </span>
            <h2 className="text-2xl font-display font-bold text-gray-800 mt-2">
              {isLogin ? 'Welcome Back!' : 'Join the Universe'}
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              {isLogin ? 'Login to continue your shopping journey' : 'Register and start sending parcels on journeys'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            {/* Feedback states */}
            {error && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-50 text-red-500 text-xs font-semibold p-3 rounded-xl border border-red-100 flex items-center gap-2"
              >
                <HeartCrack size={14} className="flex-shrink-0" />
                <span>{error}</span>
              </motion.div>
            )}

            {success && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 text-green-600 text-xs font-semibold p-3 rounded-xl border border-green-100 flex items-center gap-2"
              >
                <Heart size={14} className="flex-shrink-0 fill-green-600" />
                <span>{success}</span>
              </motion.div>
            )}

            {/* Name field (Register only) */}
            {!isLogin && (
              <div className="flex flex-col gap-1 text-left">
                <label className="text-xs font-semibold text-gray-500 ml-1">Full Name</label>
                <div className="flex items-center bg-pink-50/50 rounded-2xl border border-pink-100/80 px-4 py-3 gap-2 focus-within:border-pink-300 transition-colors">
                  <UserIcon size={16} className="text-gray-400" />
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Sarah Jenkins"
                    required
                    className="w-full bg-transparent outline-none text-sm text-gray-700"
                  />
                </div>
              </div>
            )}

            {/* Email field */}
            <div className="flex flex-col gap-1 text-left">
              <label className="text-xs font-semibold text-gray-500 ml-1">Email Address</label>
              <div className="flex items-center bg-pink-50/50 rounded-2xl border border-pink-100/80 px-4 py-3 gap-2 focus-within:border-pink-300 transition-colors">
                <Mail size={16} className="text-gray-400" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="yourname@gmail.com"
                  required
                  className="w-full bg-transparent outline-none text-sm text-gray-700"
                />
              </div>
            </div>

            {/* Password field */}
            <div className="flex flex-col gap-1 text-left">
              <label className="text-xs font-semibold text-gray-500 ml-1">Password</label>
              <div className="flex items-center bg-pink-50/50 rounded-2xl border border-pink-100/80 px-4 py-3 gap-2 focus-within:border-pink-300 transition-colors">
                <Lock size={16} className="text-gray-400" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-transparent outline-none text-sm text-gray-700"
                />
              </div>
            </div>



            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-4 rounded-2xl shadow-premium hover:opacity-95 hover:shadow-lg flex items-center justify-center gap-2 group transition-all"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>

          </form>

          {/* Quick instructions for testing */}
          <div className="mt-8 pt-6 border-t border-pink-100/50 text-left">
            <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Test Accounts:</h4>
            <div className="flex flex-col gap-1 text-[11px] text-gray-500 leading-tight">
              <p>👤 <span className="font-semibold">Customer</span>: user@pinkdelivery.com / user123</p>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
