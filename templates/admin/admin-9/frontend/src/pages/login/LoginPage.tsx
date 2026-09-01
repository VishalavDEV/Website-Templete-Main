import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, AlertCircle, RefreshCw } from 'lucide-react';
import { AuthService } from '../../services/apiServices';
import { useToast } from '../../components/common/Toast';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [status, setStatus] = useState<'initializing' | 'authenticating' | 'failed'>('initializing');
  const [errorMessage, setErrorMessage] = useState('');

  const performAutoLogin = async () => {
    setStatus('authenticating');
    try {
      // Use seeded super admin credentials to auto login
      const data = await AuthService.login({ username: 'admin', password: 'admin' });
      
      // Save details to localStorage
      localStorage.setItem('token', data.accessToken);
      localStorage.setItem('user', JSON.stringify({
        username: data.username,
        email: data.email,
        role: data.role,
        status: data.status,
        profileImage: data.profileImage,
      }));

      showToast('Successfully authenticated as Administrator.', 'success');
      
      // Small artificial delay to let the animation feel smooth
      setTimeout(() => {
        navigate('/');
      }, 800);
    } catch (err: any) {
      console.error(err);
      const errMsg = err.response?.data?.message || 'Cannot establish connection to backend dashboard services.';
      setErrorMessage(errMsg);
      setStatus('failed');
      showToast('Authentication failed. Please check backend server.', 'error');
    }
  };

  useEffect(() => {
    // Start login automatically on mount
    performAutoLogin();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 flex flex-col justify-center items-center px-4 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="max-w-md w-full text-center z-10">
        {status !== 'failed' ? (
          <div className="flex flex-col items-center">
            {/* Glowing Logo */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-indigo-500 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
              <div className="relative flex items-center justify-center h-16 w-16 bg-gradient-to-tr from-indigo-500 to-violet-600 text-white rounded-2xl shadow-2xl animate-bounce">
                <Sparkles className="h-8 w-8" />
              </div>
            </div>

            {/* Loading text with step indications */}
            <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
              ApexAdmin Dashboard
            </h2>
            
            <div className="flex items-center gap-2.5 text-indigo-300 font-medium text-sm mt-4 bg-indigo-950/40 px-4 py-2 rounded-full border border-indigo-500/20 backdrop-blur-md">
              <RefreshCw className="h-4 w-4 animate-spin text-indigo-400" />
              <span>
                {status === 'initializing' ? 'Connecting to database...' : 'Authenticating administrator session...'}
              </span>
            </div>

            {/* Sleek Progress Indicator */}
            <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden mt-8 border border-slate-700/50">
              <div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full animate-infinite-loading"></div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl shadow-2xl max-w-sm mx-auto animate-scale-in">
            <div className="mx-auto flex items-center justify-center h-14 w-14 bg-rose-500/10 text-rose-500 rounded-2xl mb-6 border border-rose-500/20">
              <AlertCircle className="h-7 w-7" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">Connection Failed</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {errorMessage}
            </p>

            <button
              onClick={performAutoLogin}
              className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 active:scale-[0.98] transition-all shadow-lg shadow-indigo-500/20 cursor-pointer"
            >
              <RefreshCw className="h-4 w-4" />
              Retry Connection
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
