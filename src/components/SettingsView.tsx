import React, { useState } from 'react';
import { 
  Settings, 
  Bell, 
  Activity, 
  ShieldCheck, 
  User, 
  Database, 
  Save, 
  RotateCcw, 
  Check, 
  AlertCircle, 
  Smartphone, 
  Lock, 
  FileCode2,
  HeartPulse,
  Video,
  KeyRound,
  Download,
  CheckCircle2,
  RefreshCw,
  Clock,
  Sparkles,
  PhoneCall,
  Sliders,
  Shield,
  FileCheck,
  Building,
  Watch
} from 'lucide-react';
import { TelecareSettings } from '../types';
import { defaultSettings } from '../data/mockData';

interface SettingsViewProps {
  onBackToReports: () => void;
}

export function SettingsView({ onBackToReports }: SettingsViewProps) {
  const [settings, setSettings] = useState<TelecareSettings>(defaultSettings);
  const [activeTab, setActiveTab] = useState<'telemetry' | 'alerts' | 'ehr' | 'video' | 'security' | 'profile'>('telemetry');
  const [isSaved, setIsSaved] = useState(false);
  const [saveToast, setSaveToast] = useState(false);
  const [testingConnection, setTestingConnection] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'success' | 'failed'>('idle');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setSaveToast(true);
    setTimeout(() => {
      setSaveToast(false);
      setIsSaved(false);
    }, 2500);
  };

  const handleReset = () => {
    setSettings(defaultSettings);
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2000);
  };

  const handleTestFhirConnection = () => {
    setTestingConnection(true);
    setConnectionStatus('idle');
    setTimeout(() => {
      setTestingConnection(false);
      setConnectionStatus('success');
      setTimeout(() => setConnectionStatus('idle'), 4000);
    }, 1200);
  };

  const handleDownloadAuditLog = () => {
    const logData = `HIPAA ENCRYPTION AUDIT LOG - TELECARE HEALTH
Timestamp: ${new Date().toISOString()}
Facility: ${settings.clinicName}
Clinician: ${settings.doctorName} (${settings.npiNumber})
Encryption: ${settings.encryptionStandard}
Status: 100% Compliant with HIPAA Security Rule 45 CFR Part 160/164
Audit Hash: SHA256:7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069`;
    
    const blob = new Blob([logData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `HIPAA_Audit_Trail_${Date.now()}.log`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-5 animate-in fade-in pb-16 max-w-5xl mx-auto">
      {/* Toast Notification */}
      {saveToast && (
        <div className="fixed bottom-6 right-6 bg-gray-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 z-50 animate-in fade-in slide-in-from-bottom-5 border border-gray-800">
          <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs shrink-0">
            <Check className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold text-white">Settings Successfully Saved</p>
            <p className="text-[11px] text-gray-300">All telemetry parameters, alerts, and EHR keys are synced.</p>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-gray-200/60">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-xs shrink-0">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-gray-900">Portal & Clinical Settings</h2>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                HIPAA Certified
              </span>
            </div>
            <p className="text-xs text-gray-400">Manage remote telemetry thresholds, biometric escalation rules, EHR interoperability, and clinician profile</p>
          </div>
        </div>
        <button
          onClick={onBackToReports}
          className="px-4 py-2 bg-white border border-gray-200 text-xs font-semibold text-gray-700 rounded-xl hover:bg-gray-50 transition-colors shadow-2xs cursor-pointer self-start sm:self-auto"
        >
          Back to Reports
        </button>
      </div>

      {/* Settings Navigation Tabs */}
      <div className="flex items-center gap-1.5 border-b border-gray-200/80 overflow-x-auto pb-1 text-xs">
        <button
          type="button"
          onClick={() => setActiveTab('telemetry')}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl font-bold transition-all whitespace-nowrap cursor-pointer ${
            activeTab === 'telemetry'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
          }`}
        >
          <Activity className="w-4 h-4" />
          <span>Telemetry & Vitals</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('alerts')}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl font-bold transition-all whitespace-nowrap cursor-pointer ${
            activeTab === 'alerts'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
          }`}
        >
          <Bell className="w-4 h-4" />
          <span>Alerts & Escalation</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('ehr')}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl font-bold transition-all whitespace-nowrap cursor-pointer ${
            activeTab === 'ehr'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
          }`}
        >
          <Database className="w-4 h-4" />
          <span>EHR & Wearables</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('video')}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl font-bold transition-all whitespace-nowrap cursor-pointer ${
            activeTab === 'video'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
          }`}
        >
          <Video className="w-4 h-4" />
          <span>Telehealth Video</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('security')}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl font-bold transition-all whitespace-nowrap cursor-pointer ${
            activeTab === 'security'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>HIPAA & Security</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('profile')}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl font-bold transition-all whitespace-nowrap cursor-pointer ${
            activeTab === 'profile'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
          }`}
        >
          <User className="w-4 h-4" />
          <span>Clinician & Licensing</span>
        </button>
      </div>

      {/* Settings Form Body */}
      <form onSubmit={handleSave} className="space-y-5">
        {/* TAB 1: TELEMETRY & VITALS THRESHOLDS */}
        {activeTab === 'telemetry' && (
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-6">
            <div>
              <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <HeartPulse className="w-4 h-4 text-red-500" />
                Biometric Critical Escalation Thresholds
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Define physiological boundary alarms that automatically trigger dashboard escalation tags and on-call notifications.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Systolic Limit */}
              <div className="p-4 bg-gray-50/80 rounded-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-gray-700">Systolic BP Upper Alarm</label>
                  <span className="text-xs font-extrabold text-red-600 bg-red-50 px-2 py-0.5 rounded-md">
                    {settings.systolicLimit} mmHg
                  </span>
                </div>
                <input
                  type="range"
                  min="120"
                  max="180"
                  step="5"
                  value={settings.systolicLimit}
                  onChange={(e) => setSettings({ ...settings, systolicLimit: Number(e.target.value) })}
                  className="w-full accent-blue-600 cursor-pointer"
                />
                <p className="text-[10px] text-gray-400 mt-1.5">Triggers Stage 2 hypertension alert.</p>
              </div>

              {/* Diastolic Limit */}
              <div className="p-4 bg-gray-50/80 rounded-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-gray-700">Diastolic BP Upper Alarm</label>
                  <span className="text-xs font-extrabold text-red-600 bg-red-50 px-2 py-0.5 rounded-md">
                    {settings.diastolicLimit} mmHg
                  </span>
                </div>
                <input
                  type="range"
                  min="70"
                  max="120"
                  step="2"
                  value={settings.diastolicLimit}
                  onChange={(e) => setSettings({ ...settings, diastolicLimit: Number(e.target.value) })}
                  className="w-full accent-blue-600 cursor-pointer"
                />
                <p className="text-[10px] text-gray-400 mt-1.5">Target outpatient threshold &le; 80 mmHg.</p>
              </div>

              {/* SpO2 Minimum Limit */}
              <div className="p-4 bg-gray-50/80 rounded-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-gray-700">Minimum Oxygen SpO2</label>
                  <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                    {settings.spo2MinLimit}%
                  </span>
                </div>
                <input
                  type="range"
                  min="85"
                  max="98"
                  step="1"
                  value={settings.spo2MinLimit}
                  onChange={(e) => setSettings({ ...settings, spo2MinLimit: Number(e.target.value) })}
                  className="w-full accent-blue-600 cursor-pointer"
                />
                <p className="text-[10px] text-gray-400 mt-1.5">Hypoxia alarm dispatched if SpO2 dips below limit.</p>
              </div>

              {/* Heart Rate Minimum (Bradycardia) */}
              <div className="p-4 bg-gray-50/80 rounded-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-gray-700">Bradycardia HR Floor</label>
                  <span className="text-xs font-extrabold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                    {settings.heartRateMin} bpm
                  </span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="65"
                  step="1"
                  value={settings.heartRateMin}
                  onChange={(e) => setSettings({ ...settings, heartRateMin: Number(e.target.value) })}
                  className="w-full accent-blue-600 cursor-pointer"
                />
                <p className="text-[10px] text-gray-400 mt-1.5">Alerts when resting HR drops below safety floor.</p>
              </div>

              {/* Heart Rate Maximum (Tachycardia) */}
              <div className="p-4 bg-gray-50/80 rounded-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-gray-700">Tachycardia HR Ceiling</label>
                  <span className="text-xs font-extrabold text-red-600 bg-red-50 px-2 py-0.5 rounded-md">
                    {settings.heartRateMax} bpm
                  </span>
                </div>
                <input
                  type="range"
                  min="90"
                  max="160"
                  step="5"
                  value={settings.heartRateMax}
                  onChange={(e) => setSettings({ ...settings, heartRateMax: Number(e.target.value) })}
                  className="w-full accent-blue-600 cursor-pointer"
                />
                <p className="text-[10px] text-gray-400 mt-1.5">Triggers arrhythmia strip capture on ECG.</p>
              </div>

              {/* Blood Glucose Max Limit */}
              <div className="p-4 bg-gray-50/80 rounded-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-gray-700">Hyperglycemia Alarm</label>
                  <span className="text-xs font-extrabold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                    {settings.glucoseHighLimit} mg/dL
                  </span>
                </div>
                <input
                  type="range"
                  min="140"
                  max="280"
                  step="10"
                  value={settings.glucoseHighLimit}
                  onChange={(e) => setSettings({ ...settings, glucoseHighLimit: Number(e.target.value) })}
                  className="w-full accent-blue-600 cursor-pointer"
                />
                <p className="text-[10px] text-gray-400 mt-1.5">Continuous CGM sync alert for glycemic spikes.</p>
              </div>
            </div>

            {/* Polling & Sensitivity Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <label className="text-xs font-bold text-gray-800 block mb-1">Telemetry Ingestion Polling Frequency</label>
                <p className="text-[11px] text-gray-400 mb-2.5">Interval between cloud synchronizations with patient devices</p>
                <select
                  value={settings.pollingFrequency}
                  onChange={(e) => setSettings({ ...settings, pollingFrequency: e.target.value as any })}
                  className="w-full text-xs p-2.5 bg-white rounded-xl border border-gray-200 focus:outline-hidden focus:border-blue-500 font-semibold"
                >
                  <option value="5s">Real-time Continuous (5 seconds)</option>
                  <option value="15m">Standard Clinical (Every 15 minutes)</option>
                  <option value="30m">Conservative (Every 30 minutes)</option>
                  <option value="1h">Hourly Batch (Every 1 hour)</option>
                </select>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <label className="text-xs font-bold text-gray-800 block mb-1">Fall Detection & Motion Sensor Sensitivity</label>
                <p className="text-[11px] text-gray-400 mb-2.5">Accelerometer threshold on wearable bands for trauma alerts</p>
                <select
                  value={settings.fallDetectionSensitivity}
                  onChange={(e) => setSettings({ ...settings, fallDetectionSensitivity: e.target.value as any })}
                  className="w-full text-xs p-2.5 bg-white rounded-xl border border-gray-200 focus:outline-hidden focus:border-blue-500 font-semibold"
                >
                  <option value="high">High Sensitivity (Immediate Dispatch)</option>
                  <option value="medium">Medium Sensitivity (Verified 2-axis)</option>
                  <option value="low">Low Sensitivity (High impact only)</option>
                </select>
              </div>
            </div>

            {/* Continuous Sync Toggle */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-gray-900">Continuous Automated Background Telemetry</h4>
                <p className="text-[11px] text-gray-400">Keep real-time WebSocket listening socket open for critical telemetry</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.autoSyncTelemetry}
                  onChange={(e) => setSettings({ ...settings, autoSyncTelemetry: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
              </label>
            </div>
          </div>
        )}

        {/* TAB 2: ALERTS & ESCALATION MATRIX */}
        {activeTab === 'alerts' && (
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-5">
            <div>
              <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <Bell className="w-4 h-4 text-blue-600" />
                Multi-Channel Escalation Matrix & Routing
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">Control how critical alarms are routed to nurses, physicians, and on-call providers.</p>
            </div>

            <div className="space-y-3.5 divide-y divide-gray-100">
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">SMS Critical Emergency Alerts</h4>
                    <p className="text-[11px] text-gray-400">Send instant SMS text when resting BP, HR, or SpO2 exceeds limits</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={settings.smsCriticalAlerts}
                  onChange={(e) => setSettings({ ...settings, smsCriticalAlerts: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between pt-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Clinician Mobile Push Notifications</h4>
                    <p className="text-[11px] text-gray-400">Real-time mobile badge dispatches for non-critical triage items</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={settings.pushNotifications}
                  onChange={(e) => setSettings({ ...settings, pushNotifications: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between pt-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">IVR Automated Voice Emergency Callout</h4>
                    <p className="text-[11px] text-gray-400">Automated phone call with voice confirmation for unacknowledged Level 3 alarms</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={settings.ivrEmergencyCalls}
                  onChange={(e) => setSettings({ ...settings, ivrEmergencyCalls: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between pt-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Patient Smart Prescription Reminders</h4>
                    <p className="text-[11px] text-gray-400">Send automated patient push notifications for morning and evening medication times</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={settings.patientMedicationReminders}
                  onChange={(e) => setSettings({ ...settings, patientMedicationReminders: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded cursor-pointer"
                />
              </div>
            </div>

            {/* On-Call Quiet Hours Sub-Card */}
            <div className="p-4 bg-gray-50/80 rounded-2xl border border-gray-100 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Quiet Hours & On-Call Automatic Reroute</h4>
                  <p className="text-[11px] text-gray-400">Automatically redirect night telemetry alarms to designated on-call cardiologist</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.onCallAutoReroute}
                  onChange={(e) => setSettings({ ...settings, onCallAutoReroute: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div>
                  <label className="text-[11px] font-bold text-gray-700 block mb-1">Quiet Hours Start</label>
                  <input
                    type="time"
                    value={settings.quietHoursStart}
                    onChange={(e) => setSettings({ ...settings, quietHoursStart: e.target.value })}
                    className="w-full text-xs p-2 bg-white rounded-xl border border-gray-200"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-gray-700 block mb-1">Quiet Hours End</label>
                  <input
                    type="time"
                    value={settings.quietHoursEnd}
                    onChange={(e) => setSettings({ ...settings, quietHoursEnd: e.target.value })}
                    className="w-full text-xs p-2 bg-white rounded-xl border border-gray-200"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-gray-700 block mb-1">On-Call Provider Reroute</label>
                  <input
                    type="text"
                    value={settings.onCallDoctor}
                    onChange={(e) => setSettings({ ...settings, onCallDoctor: e.target.value })}
                    className="w-full text-xs p-2 bg-white rounded-xl border border-gray-200 truncate"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: EHR & WEARABLES INTEGRATIONS */}
        {activeTab === 'ehr' && (
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-5">
            <div>
              <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <Database className="w-4 h-4 text-indigo-600" />
                Hospital EHR Bridges & Biometric Wearables Sync
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">Integrate HL7 FHIR electronic health record servers and direct patient sensor devices.</p>
            </div>

            {/* Wearable Sensors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-xs">
                    <HeartPulse className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Apple HealthKit</h4>
                    <p className="text-[10px] text-gray-400">ECG, HR & Steps</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={settings.appleHealthKitSync}
                  onChange={(e) => setSettings({ ...settings, appleHealthKitSync: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded cursor-pointer"
                />
              </div>

              <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Dexcom G7 CGM</h4>
                    <p className="text-[10px] text-gray-400">Glucose 24/7</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={settings.dexcomCgmSync}
                  onChange={(e) => setSettings({ ...settings, dexcomCgmSync: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded cursor-pointer"
                />
              </div>

              <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                    <Watch className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">OMRON BP Cuff</h4>
                    <p className="text-[10px] text-gray-400">Bluetooth Sync</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={settings.omronBpSync}
                  onChange={(e) => setSettings({ ...settings, omronBpSync: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded cursor-pointer"
                />
              </div>
            </div>

            {/* FHIR EHR Configuration Box */}
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-extrabold text-xs">
                    FHIR
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">HL7 FHIR R4 & Epic MyChart Gateway</h4>
                    <p className="text-[11px] text-gray-400">Live endpoint for bi-directional patient encounter sync</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={settings.epicFhirSync}
                    onChange={(e) => setSettings({ ...settings, epicFhirSync: e.target.checked })}
                    className="w-4 h-4 text-blue-600 rounded cursor-pointer"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="text-[11px] font-bold text-gray-700 block mb-1">FHIR Base URL</label>
                  <input
                    type="text"
                    value={settings.fhirEndpointUrl}
                    onChange={(e) => setSettings({ ...settings, fhirEndpointUrl: e.target.value })}
                    className="w-full text-xs p-2.5 bg-white rounded-xl border border-gray-200 focus:outline-hidden font-mono text-gray-800"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-gray-700 block mb-1">Authorization API Token</label>
                  <input
                    type="password"
                    value={settings.fhirApiKey}
                    onChange={(e) => setSettings({ ...settings, fhirApiKey: e.target.value })}
                    className="w-full text-xs p-2.5 bg-white rounded-xl border border-gray-200 focus:outline-hidden font-mono text-gray-800"
                  />
                </div>
              </div>

              {/* Test Connection Button */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-200/60">
                <div className="flex items-center gap-2">
                  {connectionStatus === 'success' && (
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Connected (HTTP 200 OK - Latency 38ms)</span>
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleTestFhirConnection}
                  disabled={testingConnection}
                  className="px-3.5 py-1.5 bg-white hover:bg-gray-100 border border-gray-200 rounded-xl text-xs font-bold text-gray-700 flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${testingConnection ? 'animate-spin text-blue-600' : 'text-gray-500'}`} />
                  <span>{testingConnection ? 'Pinging Endpoint...' : 'Test FHIR Connection'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: TELEHEALTH VIDEO CALL SETTINGS */}
        {activeTab === 'video' && (
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-5">
            <div>
              <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <Video className="w-4 h-4 text-blue-600" />
                Encrypted WebRTC Video Consultation Suite
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">Configure HD video resolution, AI SOAP medical transcription, and patient waiting room preferences.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <label className="text-xs font-bold text-gray-800 block mb-1">Default Stream Resolution</label>
                <p className="text-[11px] text-gray-400 mb-2">Select optimal video fidelity based on clinic network bandwidth</p>
                <select
                  value={settings.videoQuality}
                  onChange={(e) => setSettings({ ...settings, videoQuality: e.target.value as any })}
                  className="w-full text-xs p-2.5 bg-white rounded-xl border border-gray-200 font-semibold"
                >
                  <option value="1080p">Ultra HD 1080p (60 fps, High Clarity)</option>
                  <option value="720p">Standard HD 720p (30 fps, Recommended)</option>
                  <option value="adaptive">Dynamic Adaptive Bandwidth Mode</option>
                </select>
              </div>

              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <h4 className="text-xs font-bold text-gray-900">AI Real-time SOAP Transcription</h4>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-1">Automatically draft Subjective, Objective, Assessment, and Plan notes from audio</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.aiSoapTranscription}
                  onChange={(e) => setSettings({ ...settings, aiSoapTranscription: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded cursor-pointer"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-800 block mb-1">Custom Virtual Waiting Room Greeting</label>
              <textarea
                rows={2}
                value={settings.waitingRoomGreeting}
                onChange={(e) => setSettings({ ...settings, waitingRoomGreeting: e.target.value })}
                className="w-full text-xs p-3 rounded-2xl border border-gray-200 focus:outline-hidden focus:border-blue-500 text-gray-700"
              />
            </div>
          </div>
        )}

        {/* TAB 5: HIPAA SECURITY & COMPLIANCE */}
        {activeTab === 'security' && (
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-5">
            <div>
              <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                HIPAA Security, Access Control & Encryption
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">Strict regulatory compliance, cryptographic audit trails, and automatic lockout policies.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-gray-900">2-Factor Authentication (2FA)</h4>
                  <p className="text-[11px] text-gray-400">Enforce biometric passkey or TOTP authenticator for staff</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.twoFactorAuth}
                  onChange={(e) => setSettings({ ...settings, twoFactorAuth: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded cursor-pointer"
                />
              </div>

              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <label className="text-xs font-bold text-gray-800 block mb-1">Inactivity Screen Auto-Lock</label>
                <select
                  value={settings.sessionTimeoutMinutes}
                  onChange={(e) => setSettings({ ...settings, sessionTimeoutMinutes: Number(e.target.value) })}
                  className="w-full text-xs p-2 bg-white rounded-xl border border-gray-200 font-semibold"
                >
                  <option value={5}>5 Minutes of Inactivity</option>
                  <option value={15}>15 Minutes (HIPAA Standard)</option>
                  <option value={30}>30 Minutes</option>
                </select>
              </div>
            </div>

            {/* Audit Trail & Compliance Verification */}
            <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-emerald-900">Continuous Cryptographic Audit Trail</h4>
                  <p className="text-[11px] text-emerald-700">Encrypted with {settings.encryptionStandard}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleDownloadAuditLog}
                className="px-3.5 py-2 bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-2xs transition-colors cursor-pointer self-start sm:self-auto"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Audit Log</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 6: CLINICIAN PROFILE & CREDENTIALS */}
        {activeTab === 'profile' && (
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
            <div>
              <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <User className="w-4 h-4 text-emerald-600" />
                Clinician Information & State Medical Licenses
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">Manage your clinical provider details displayed on telemetry prescriptions and reports.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Doctor Full Name</label>
                <input
                  type="text"
                  value={settings.doctorName}
                  onChange={(e) => setSettings({ ...settings, doctorName: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Clinical Email</label>
                <input
                  type="email"
                  value={settings.doctorEmail}
                  onChange={(e) => setSettings({ ...settings, doctorEmail: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Clinical Role & Specialty</label>
                <input
                  type="text"
                  value={settings.doctorTitle}
                  onChange={(e) => setSettings({ ...settings, doctorTitle: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Direct Clinical Phone</label>
                <input
                  type="text"
                  value={settings.doctorPhone}
                  onChange={(e) => setSettings({ ...settings, doctorPhone: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">National Provider Identifier (NPI)</label>
                <input
                  type="text"
                  value={settings.npiNumber}
                  onChange={(e) => setSettings({ ...settings, npiNumber: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">DEA Registration Number</label>
                <input
                  type="text"
                  value={settings.deaNumber}
                  onChange={(e) => setSettings({ ...settings, deaNumber: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-hidden"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-gray-700 block mb-1">Facility Name & Practice Address</label>
                <input
                  type="text"
                  value={settings.clinicAddress}
                  onChange={(e) => setSettings({ ...settings, clinicAddress: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-hidden"
                />
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-200/60">
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-100 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Defaults</span>
          </button>

          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-md flex items-center gap-2 transition-all cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>Save All Changes</span>
          </button>
        </div>
      </form>
    </div>
  );
}
