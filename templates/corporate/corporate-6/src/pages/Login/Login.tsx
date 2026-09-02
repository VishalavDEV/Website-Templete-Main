import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, Shield, Key, Building, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [ssoActive, setSsoActive] = useState(false);
  const [email, setEmail] = useState('executive@northstar-tech.com');
  const [accountId, setAccountId] = useState('AUR-9042-ENT');
  const [password, setPassword] = useState('••••••••••••');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#FBF9F5] flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo Card */}
        <div className="text-center mb-8 space-y-2">
          <Link to="/" className="inline-flex items-center gap-2 group">
            <span className="font-serif text-3xl font-bold tracking-tight text-[#0F382E]">
              AURELIA
            </span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C29B38] font-semibold">
              JOURNEYS
            </span>
          </Link>
          <div className="text-xs font-semibold uppercase tracking-widest text-[#62756D]">
            Enterprise Mobility Command Portal
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-[#D8C3A8]/80 shadow-xl space-y-6">
          {loggedIn ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#0F382E]/10 text-[#0F382E] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0E1412]">Session Authenticated</h3>
              <p className="text-xs text-[#62756D]">
                Welcome back, <strong className="text-[#0E1412]">Rachel Morgan</strong> (Northstar Technologies). Connecting to real-time travel ERP feeds...
              </p>
              <div className="pt-2">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0F382E] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#165042]"
                >
                  <span>Return to Home</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* SSO SAML Button */}
              <button
                type="button"
                onClick={() => setLoggedIn(true)}
                className="w-full py-3.5 px-4 rounded-xl border border-[#D8C3A8] bg-[#F8F5EE] hover:bg-[#EADBCA]/50 text-xs font-bold uppercase tracking-wider text-[#0E1412] flex items-center justify-center gap-3 transition-colors cursor-pointer"
              >
                <Lock className="w-4 h-4 text-[#0F382E]" />
                <span>Single Sign-On (Okta / Azure AD)</span>
              </button>

              <div className="flex items-center my-4">
                <div className="flex-1 border-t border-[#D8C3A8]/40" />
                <span className="px-3 text-[11px] uppercase tracking-wider text-[#8FA29A] font-semibold">
                  Or Corporate Account
                </span>
                <div className="flex-1 border-t border-[#D8C3A8]/40" />
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#25332E] mb-1.5">
                    Corporate Account ID
                  </label>
                  <input
                    type="text"
                    required
                    value={accountId}
                    onChange={(e) => setAccountId(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D8C3A8] bg-[#FBF9F5] text-xs text-[#0E1412] focus:outline-none focus:ring-2 focus:ring-[#0F382E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#25332E] mb-1.5">
                    Executive Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D8C3A8] bg-[#FBF9F5] text-xs text-[#0E1412] focus:outline-none focus:ring-2 focus:ring-[#0F382E]"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#25332E]">
                      Password
                    </label>
                    <a href="#reset" className="text-[11px] text-[#0F382E] hover:underline font-semibold">
                      Forgot Password?
                    </a>
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D8C3A8] bg-[#FBF9F5] text-xs text-[#0E1412] focus:outline-none focus:ring-2 focus:ring-[#0F382E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#0F382E] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#165042] active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <Key className="w-4 h-4" />
                  <span>Access Secure Workspace</span>
                </button>
              </form>
            </>
          )}

          <div className="pt-4 border-t border-[#D8C3A8]/40 text-center text-xs text-[#8FA29A] flex items-center justify-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#0F382E]" />
            <span>256-Bit Encrypted ISO 27001 Secure Gateway</span>
          </div>
        </div>
      </div>
    </div>
  );
}
