import React, { useState } from 'react';
import { useEditorial } from '../services/editorialStore';
import { Settings, ShieldCheck, Sun, Globe, Mail, Save, Loader2, Database } from 'lucide-react';

export const SettingsView: React.FC = () => {
  const { addToast } = useEditorial();

  const [pubName, setPubName] = useState('Elemental: Science & Archival Magazine');
  const [issn, setIssn] = useState('ISSN 2994-8120');
  const [editorialEmail, setEditorialEmail] = useState('desk@elemental-science.org');
  const [timezone, setTimezone] = useState('UTC-5 (Eastern Time)');
  const [peerReviewReq, setPeerReviewReq] = useState(true);
  const [autoSyndicate, setAutoSyndicate] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      addToast('success', 'Settings Saved', 'Masthead and editorial configuration updated successfully.');
    }, 600);
  };

  return (
    <div id="settings-view" className="space-y-6 max-w-4xl">
      
      {/* Header */}
      <div className="p-6 rounded-2xl bg-white border border-sky-50 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-slate-900">
                Masthead &amp; Editorial Standards
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Global publication parameters, peer-review standards, and system configuration.
              </p>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        
        {/* Masthead Identity Card */}
        <div className="p-6 rounded-2xl bg-white border border-sky-50 shadow-sm space-y-4">
          <h3 className="font-serif text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
            Publication Identity
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Publication Name
              </label>
              <input
                type="text"
                value={pubName}
                onChange={(e) => setPubName(e.target.value)}
                className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50 text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                International Standard Serial Number (ISSN)
              </label>
              <input
                type="text"
                value={issn}
                onChange={(e) => setIssn(e.target.value)}
                className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50 font-mono text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Editorial Inquiries Email
              </label>
              <input
                type="email"
                value={editorialEmail}
                onChange={(e) => setEditorialEmail(e.target.value)}
                className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50 text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Desk Operational Timezone
              </label>
              <select
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none bg-slate-50 text-slate-900 cursor-pointer"
              >
                <option value="UTC-5 (Eastern Time)">UTC-5 (Eastern Time)</option>
                <option value="UTC+0 (Greenwich / London)">UTC+0 (Greenwich / London)</option>
                <option value="UTC+1 (Central European / Geneva CERN)">UTC+1 (Geneva CERN)</option>
                <option value="UTC-8 (Pacific / California)">UTC-8 (Pacific / California)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Visual Theme Specification Card */}
        <div className="p-6 rounded-2xl bg-white border border-sky-50 shadow-sm space-y-3">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
            <Sun className="w-4 h-4 text-sky-600" />
            <h3 className="font-serif text-base font-bold text-slate-900">
              Visual Design Architecture: Artistic Flair Light Theme
            </h3>
          </div>

          <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 text-xs text-slate-700 space-y-2">
            <div className="font-bold text-sky-950">
              LIGHT-THEME ONLY POLICY ENFORCED
            </div>
            <p className="leading-relaxed text-slate-600">
              Elemental operates exclusively on the <strong>Artistic Flair Light Palette</strong> (Canvas <code className="bg-white px-1.5 py-0.5 rounded border border-sky-100 font-mono text-sky-900">#faf8f2</code>, warm and bright surfaces, soft sky blue accents). All dark mode overrides and theme toggles are disabled to preserve longform typographic legibility.
            </p>
          </div>
        </div>

        {/* Review & Integrity Policies */}
        <div className="p-6 rounded-2xl bg-white border border-sky-50 shadow-sm space-y-3">
          <h3 className="font-serif text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
            Editorial Rigour Policies
          </h3>

          <div className="space-y-2 text-xs">
            <label className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
              <input
                type="checkbox"
                checked={peerReviewReq}
                onChange={(e) => setPeerReviewReq(e.target.checked)}
                className="rounded text-sky-600 focus:ring-sky-400"
              />
              <span className="font-medium text-slate-800">
                Require secondary fact-checker signoff before publishing draft stories to public edition
              </span>
            </label>

            <label className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
              <input
                type="checkbox"
                checked={autoSyndicate}
                onChange={(e) => setAutoSyndicate(e.target.checked)}
                className="rounded text-sky-600 focus:ring-sky-400"
              />
              <span className="font-medium text-slate-800">
                Auto-generate citation DOI anchors and syndicate to ESO / Harvard archive feeds
              </span>
            </label>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            id="save-settings-submit-btn"
            type="submit"
            disabled={isSaving}
            className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white text-xs font-semibold shadow-sm transition-all disabled:opacity-50 cursor-pointer"
          >
            {isSaving ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Saving Settings...</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Configuration</span>
              </>
            )}
          </button>
        </div>

      </form>
    </div>
  );
};
