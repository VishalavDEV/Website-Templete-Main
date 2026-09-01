import React, { useState } from 'react';
import { SettingsData } from '../types';
import { Settings, Save, Check } from 'lucide-react';

interface SettingsViewProps {
  settings: SettingsData;
  onSaveSettings: (settings: SettingsData) => Promise<void>;
}

export const SettingsView: React.FC<SettingsViewProps> = ({ settings, onSaveSettings }) => {
  const [formData, setFormData] = useState<SettingsData>(settings);
  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await onSaveSettings(formData);
    setSaving(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="bg-white border border-[#DCE7EC] rounded-2xl p-6 shadow-2xs space-y-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between border-b border-[#DCE7EC] pb-4">
        <div className="flex items-center gap-2">
          <Settings size={20} className="text-[#183B56]" />
          <div>
            <span className="text-[10px] font-mono font-bold text-[#718096] uppercase tracking-wider">System Control</span>
            <h3 className="font-serif font-bold text-[#183B56] text-xl">Command Settings</h3>
          </div>
        </div>
        {savedSuccess && (
          <span className="flex items-center gap-1 text-xs font-mono font-semibold text-[#5FAF8A] bg-[#5FAF8A]/10 px-3 py-1 rounded-xl border border-[#5FAF8A]/30">
            <Check size={14} /> Saved Successfully
          </span>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 text-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="font-mono font-bold text-[#718096] uppercase">Publication Name</label>
            <input
              type="text"
              value={formData.publicationName}
              onChange={(e) => setFormData({ ...formData, publicationName: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#F5F9FB] border border-[#DCE7EC] rounded-xl text-xs text-[#203040]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-mono font-bold text-[#718096] uppercase">Editorial Lead</label>
            <input
              type="text"
              value={formData.editorialLead}
              onChange={(e) => setFormData({ ...formData, editorialLead: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#F5F9FB] border border-[#DCE7EC] rounded-xl text-xs text-[#203040]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="font-mono font-bold text-[#718096] uppercase">Slack Webhook URL</label>
            <input
              type="text"
              value={formData.slackWebhook}
              onChange={(e) => setFormData({ ...formData, slackWebhook: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-[#F5F9FB] border border-[#DCE7EC] rounded-xl text-xs text-[#203040]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-mono font-bold text-[#718096] uppercase">Retention Period (Days)</label>
            <input
              type="number"
              value={formData.retentionDays}
              onChange={(e) => setFormData({ ...formData, retentionDays: Number(e.target.value) })}
              className="w-full px-3.5 py-2.5 bg-[#F5F9FB] border border-[#DCE7EC] rounded-xl text-xs text-[#203040]"
            />
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t border-[#DCE7EC]">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.autoReviewAssignment}
              onChange={(e) => setFormData({ ...formData, autoReviewAssignment: e.target.checked })}
              className="w-4 h-4 rounded border-[#DCE7EC] text-[#183B56]"
            />
            <span className="font-semibold text-[#203040]">Enable automated peer review routing on submission</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.strictPeerReview}
              onChange={(e) => setFormData({ ...formData, strictPeerReview: e.target.checked })}
              className="w-4 h-4 rounded border-[#DCE7EC] text-[#183B56]"
            />
            <span className="font-semibold text-[#203040]">Require dual-editor signoff for front page features</span>
          </label>
        </div>

        <div className="pt-4 border-t border-[#DCE7EC] flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#183B56] hover:bg-[#203040] text-white rounded-xl text-xs font-semibold transition-all shadow-sm disabled:opacity-50"
          >
            <Save size={15} />
            <span>{saving ? 'Saving...' : 'Save Settings'}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
