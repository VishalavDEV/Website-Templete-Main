import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, ArrowLeft, Send } from 'lucide-react';
import { AuthService } from '../../services/apiServices';
import { useToast } from '../../components/common/Toast';

const ForgotPasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      showToast('Please enter your email address.', 'warning');
      return;
    }

    setLoading(true);
    try {
      await AuthService.forgotPassword(email);
      showToast('Password reset link sent successfully!', 'success');
      setSent(true);
    } catch (err: any) {
      const errMsg = err.response?.data?.message || 'Failed to send reset link.';
      showToast(errMsg, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg-light flex flex-col justify-center py-12 sm:px-6 lg:px-8 animate-fade-in">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">Reset password</h2>
        <p className="mt-2 text-sm text-slate-500 font-medium">
          We will send you instructions to reset your password
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 border border-slate-100 rounded-3xl shadow-xl sm:px-10">
          {!sent ? (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <div className="mt-1.5 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Mail className="h-4.5 w-4.5 text-slate-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@dashboard.com"
                    className="block w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all bg-slate-50/50"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center items-center gap-2 py-2.5 px-4 border border-transparent rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 disabled:opacity-50 transition-all shadow-md shadow-indigo-100 hover:shadow-indigo-200 active:scale-[0.98] cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  {loading ? 'Sending link...' : 'Send reset link'}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="mb-4 text-sm text-slate-600 leading-relaxed">
                An email has been sent to <span className="font-bold text-slate-800">{email}</span>. Click the link inside the email to finalize password resetting.
              </div>
              <button
                onClick={() => navigate('/reset-password', { state: { email } })}
                className="mt-2 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                Go to Reset Password screen (Simulation)
              </button>
            </div>
          )}

          <div className="mt-6 pt-5 border-t border-slate-100">
            <Link
              to="/login"
              className="flex items-center justify-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
