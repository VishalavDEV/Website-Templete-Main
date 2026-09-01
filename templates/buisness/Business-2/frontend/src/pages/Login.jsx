import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, AlertTriangle, Star } from 'lucide-react';
import { api } from '../utils/api';
import AnimatedPage from '../components/AnimatedPage';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError('Please fill in both fields');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await api.login(username, password);
      localStorage.setItem('token', response.token);
      localStorage.setItem('username', response.username);
      navigate('/admin');
      // Simple page reload to update navbar state
      window.location.reload();
    } catch (err) {
      setError(err.message || 'Invalid administrative credentials');
      setLoading(false);
    }
  };

  return (
    <AnimatedPage>
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-[-20%] left-[-20%] w-[50%] h-[50%] bg-indigo-100/30 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-sky-100/30 rounded-full blur-[100px] -z-10" />

        <div className="w-full max-w-md px-6">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-lg flex flex-col gap-6">
            <div className="text-center flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white font-bold text-lg shadow-md mb-2">
                A
              </div>
              <h1 className="text-2xl font-extrabold text-primaryText">Admin Entrance</h1>
              <p className="text-secondaryText text-xs leading-relaxed max-w-xs">
                Log in using your administrative credentials to update services, projects, or view visitor messages.
              </p>
            </div>

            {error && (
              <div className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 rounded-xl text-xs flex items-center gap-2.5">
                <AlertTriangle size={16} className="shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-primaryText uppercase tracking-wider">Username</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primaryAccent focus:bg-white transition-all"
                    placeholder="Enter admin username"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-primaryText uppercase tracking-wider">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primaryAccent focus:bg-white transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="gradient-bg text-white py-3.5 rounded-xl font-semibold text-sm hover:opacity-95 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
              >
                {loading ? 'Validating...' : 'Log In'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Login;
