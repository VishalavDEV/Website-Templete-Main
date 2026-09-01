import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useMagazine } from '../../context/MagazineContext';

export function ContactForm() {
  const { showToast } = useMagazine();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'letters',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('default'); // 'default' | 'error' | 'disabled' | 'success'
  const [focusedField, setFocusedField] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (val) => {
    return String(val)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please provide your full name.');
      return;
    }

    if (!formData.email.trim() || !validateEmail(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    if (!formData.subject.trim()) {
      setStatus('error');
      setErrorMessage('Please specify the subject of your dispatch.');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus('error');
      setErrorMessage('Message must contain at least 10 characters.');
      return;
    }

    // Set disabled state
    setStatus('disabled');

    setTimeout(() => {
      setStatus('success');
      showToast('Your transmission has been delivered to the editorial bureau.');
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          department: 'letters',
          subject: '',
          message: '',
        });
        setStatus('default');
      }, 5000);
    }, 900);
  };

  return (
    <div className="bg-white p-6 sm:p-10 border border-[#E8E5DC] shadow-xs">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E8E5DC]">
        <h3 className="font-serif-headline text-2xl font-bold text-[#141413]">
          Send a Transmission
        </h3>
        <span className="text-xs font-mono text-[#73736C]">Response wire: 48h</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#141413] mb-1">
              Full Name *
            </label>
            <input
              type="text"
              disabled={status === 'disabled' || status === 'success'}
              value={formData.name}
              onFocus={() => {
                setFocusedField('name');
                if (status === 'error') setStatus('default');
              }}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Elena Rostova"
              className={`w-full px-3.5 py-2.5 bg-[#FAF9F5] text-xs text-[#141413] focus:outline-none transition-all ${
                focusedField === 'name' ? 'border-2 border-[#141413] bg-white' : 'border border-[#D1CDC4]'
              }`}
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#141413] mb-1">
              Email Address *
            </label>
            <input
              type="email"
              disabled={status === 'disabled' || status === 'success'}
              value={formData.email}
              onFocus={() => {
                setFocusedField('email');
                if (status === 'error') setStatus('default');
              }}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. elena@institution.org"
              className={`w-full px-3.5 py-2.5 bg-[#FAF9F5] text-xs text-[#141413] focus:outline-none transition-all ${
                focusedField === 'email' ? 'border-2 border-[#141413] bg-white' : 'border border-[#D1CDC4]'
              }`}
            />
          </div>
        </div>

        {/* Department & Subject */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#141413] mb-1">
              Department Desk *
            </label>
            <select
              disabled={status === 'disabled' || status === 'success'}
              value={formData.department}
              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#FAF9F5] border border-[#D1CDC4] text-xs text-[#141413] focus:outline-none focus:border-[#141413]"
            >
              <option value="letters">Letters to the Editor</option>
              <option value="pitches">Monograph & Essay Pitches</option>
              <option value="subscriptions">Print Edition Subscriptions</option>
              <option value="press">Press & Syndication Rights</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#141413] mb-1">
              Subject *
            </label>
            <input
              type="text"
              disabled={status === 'disabled' || status === 'success'}
              value={formData.subject}
              onFocus={() => {
                setFocusedField('subject');
                if (status === 'error') setStatus('default');
              }}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="e.g. Monograph Critique on Vol. 48"
              className={`w-full px-3.5 py-2.5 bg-[#FAF9F5] text-xs text-[#141413] focus:outline-none transition-all ${
                focusedField === 'subject' ? 'border-2 border-[#141413] bg-white' : 'border border-[#D1CDC4]'
              }`}
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#141413]">
              Message / Transmission *
            </label>
            <span className="text-[0.6875rem] font-mono text-[#73736C]">
              {formData.message.length} characters
            </span>
          </div>
          <textarea
            rows={5}
            disabled={status === 'disabled' || status === 'success'}
            value={formData.message}
            onFocus={() => {
              setFocusedField('message');
              if (status === 'error') setStatus('default');
            }}
            onBlur={() => setFocusedField(null)}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Compose your correspondence or query here..."
            className={`w-full px-3.5 py-2.5 bg-[#FAF9F5] text-xs text-[#141413] focus:outline-none transition-all ${
              focusedField === 'message' ? 'border-2 border-[#141413] bg-white' : 'border border-[#D1CDC4]'
            }`}
          />
        </div>

        {/* Error State Banner */}
        {status === 'error' && (
          <div className="p-3 bg-[#FDF2F0] border-l-4 border-[#D43825] flex items-center gap-2 text-xs text-[#D43825]">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Success State Banner */}
        {status === 'success' && (
          <div className="p-3 bg-[#F0FDF4] border-l-4 border-green-600 flex items-center gap-2 text-xs text-green-700">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-green-600" />
            <span>Your dispatch has been successfully recorded in the editorial transmission log.</span>
          </div>
        )}

        {/* Submit CTA */}
        <button
          type="submit"
          disabled={status === 'disabled' || status === 'success'}
          className={`w-full py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer ${
            status === 'success'
              ? 'bg-green-700 text-white cursor-default'
              : status === 'disabled'
              ? 'bg-[#444] text-[#AAA] cursor-not-allowed'
              : 'bg-[#141413] hover:bg-[#D43825] text-[#FAF9F5]'
          }`}
        >
          {status === 'disabled' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting Dispatch</span>
            </>
          ) : status === 'success' ? (
            <>
              <CheckCircle2 className="w-4 h-4" />
              <span>Dispatch Delivered</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Transmission</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
