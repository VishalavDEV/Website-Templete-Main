import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Doctor } from '../types';
import doctorsData from '../data/doctors.json';
import {
  HeartPulse,
  Brain,
  Sparkles,
  Activity,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Calendar,
  ShieldCheck,
  Zap,
  Smile,
  Moon,
  Flame,
} from 'lucide-react';

export const HealthCheckTool: React.FC<{ isFullPage?: boolean }> = ({ isFullPage = false }) => {
  const { openBooking, openDoctorProfile } = useApp();

  const [step, setStep] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('cardiovascular');
  const [duration, setDuration] = useState<string>('few-days');
  const [severity, setSeverity] = useState<string>('mild');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [sleepHours, setSleepHours] = useState<number>(7);
  const [stressLevel, setStressLevel] = useState<number>(4);
  const [activityDays, setActivityDays] = useState<number>(3);

  const categories = [
    {
      id: 'cardiovascular',
      title: 'Cardiovascular & Energy',
      desc: 'Heart palpitations, fatigue, stamina changes, blood pressure',
      icon: HeartPulse,
      specId: 'cardiology',
    },
    {
      id: 'neurological',
      title: 'Neurological & Focus',
      desc: 'Headaches, brain fog, sleep disturbance, cognitive clarity',
      icon: Brain,
      specId: 'neurology',
    },
    {
      id: 'dermatology',
      title: 'Dermatology & Skin',
      desc: 'Rashes, lesion check, allergic reactions, acne',
      icon: Sparkles,
      specId: 'dermatology',
    },
    {
      id: 'musculoskeletal',
      title: 'Joints & Musculoskeletal',
      desc: 'Back stiffness, joint pain, posture, mobility limits',
      icon: Activity,
      specId: 'orthopedics',
    },
    {
      id: 'metabolism',
      title: 'Preventive & Longevity',
      desc: 'Annual health check, metabolic screening, biomarker optimization',
      icon: Zap,
      specId: 'general-medicine',
    },
  ];

  const symptomOptions: Record<string, string[]> = {
    cardiovascular: [
      'Elevated resting pulse',
      'Mild shortness of breath on exertion',
      'Post-lunch fatigue',
      'Leg or ankle swelling',
      'Irregular rhythm awareness',
    ],
    neurological: [
      'Afternoon tension headaches',
      'Difficulty maintaining deep focus',
      'Interrupted nighttime sleep',
      'Sensory light sensitivity',
      'Neck tension stiffness',
    ],
    dermatology: [
      'Unusual pigment or mole change',
      'Persistent dry flaky patches',
      'Sudden localized flare-up',
      'Seasonal skin barrier irritation',
      'Sun exposure monitoring',
    ],
    musculoskeletal: [
      'Lower back stiffness in morning',
      'Knee soreness during stairs',
      'Shoulder rotator cuff tightness',
      'General joint crepitus',
      'Desk posture strain',
    ],
    metabolism: [
      'Fluctuating daily energy',
      'Desire for comprehensive blood panel',
      'Insulin or glucose curiosity',
      'Optimizing sleep architecture',
      'Biological longevity check',
    ],
  };

  const toggleSymptom = (sym: string) => {
    if (selectedSymptoms.includes(sym)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== sym));
    } else {
      setSelectedSymptoms([...selectedSymptoms, sym]);
    }
  };

  const currentCategoryObj = categories.find((c) => c.id === selectedCategory) || categories[0];
  const matchedDoctors = (doctorsData as Doctor[]).filter(
    (d) => d.specialtyId === currentCategoryObj.specId
  );

  const handleRestart = () => {
    setStep(1);
    setSelectedSymptoms([]);
    setSeverity('mild');
  };

  return (
    <section
      id="health-check-section"
      className={`py-16 md:py-24 ${isFullPage ? 'pt-32' : 'bg-[#FFFDFC]'}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8DDF2] text-[#665080] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Health Check</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3E3445] tracking-tight">
            Personalized Wellness & Symptom Triage
          </h2>
          <p className="text-xs sm:text-sm text-[#756B7C] mt-2">
            A calm 2-minute assessment to identify symptom patterns, lifestyle variables, and
            recommended specialist departments.
          </p>
        </div>

        {/* Assessment Wizard Card */}
        <div className="lilac-card rounded-3xl bg-white/95 border border-[#8B6FAE]/20 shadow-[0_15px_45px_rgba(90,70,110,0.08)] overflow-hidden">
          {/* Progress Header */}
          <div className="p-6 bg-[#F9F7FB] border-b border-[#3E3445]/8 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#8B6FAE]">
              <span>Assessment Step {step} of 5</span>
            </div>
            <div className="text-xs text-[#756B7C]">Non-Emergency Assessment</div>
          </div>

          <div className="w-full bg-[#E8DDF2]/40 h-1.5 flex">
            {[1, 2, 3, 4, 5].map((s) => (
              <div
                key={s}
                className={`h-full flex-1 transition-all duration-300 ${
                  s <= step ? 'bg-[#8B6FAE]' : 'bg-transparent'
                }`}
              />
            ))}
          </div>

          {/* Step Content */}
          <div className="p-6 sm:p-8">
            {/* STEP 1: Focus Area */}
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#3E3445]">
                  What area of your health would you like to evaluate today?
                </h3>
                <p className="text-xs text-[#756B7C]">
                  Select the primary focus for your consultation guidance:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    const isSelected = selectedCategory === cat.id;
                    return (
                      <div
                        key={cat.id}
                        id={`health-cat-${cat.id}`}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                          isSelected
                            ? 'bg-[#E8DDF2]/60 border-[#8B6FAE] shadow-xs ring-1 ring-[#8B6FAE]'
                            : 'bg-white hover:bg-[#F9F7FB] border-[#3E3445]/10'
                        }`}
                      >
                        <div
                          className={`p-2.5 rounded-xl ${
                            isSelected
                              ? 'bg-[#8B6FAE] text-white'
                              : 'bg-[#F9F7FB] text-[#665080]'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#3E3445]">{cat.title}</h4>
                          <p className="text-xs text-[#756B7C] mt-0.5">{cat.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: Duration & Severity */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#3E3445] mb-2">
                    How long have you noticed these sensations?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'few-days', label: 'Past 1–3 Days', sub: 'Recent onset' },
                      { id: 'weeks', label: '1–4 Weeks', sub: 'Subacute progression' },
                      { id: 'months', label: '1+ Months', sub: 'Chronic / ongoing baseline' },
                    ].map((dur) => (
                      <button
                        key={dur.id}
                        id={`duration-opt-${dur.id}`}
                        onClick={() => setDuration(dur.id)}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          duration === dur.id
                            ? 'bg-[#E8DDF2]/60 border-[#8B6FAE] shadow-xs'
                            : 'bg-white hover:bg-[#F9F7FB] border-[#3E3445]/10'
                        }`}
                      >
                        <div className="text-sm font-bold text-[#3E3445]">{dur.label}</div>
                        <div className="text-xs text-[#756B7C]">{dur.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#3E3445] mb-3">
                    Impact on Daily Activities
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'mild', label: 'Mild', desc: 'Noticeable but does not restrict routine' },
                      { id: 'moderate', label: 'Moderate', desc: 'Occasionally interrupts work or sleep' },
                      { id: 'pronounced', label: 'Pronounced', desc: 'Significantly impairs energy & tasks' },
                    ].map((sev) => (
                      <button
                        key={sev.id}
                        id={`severity-opt-${sev.id}`}
                        onClick={() => setSeverity(sev.id)}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          severity === sev.id
                            ? 'bg-[#E8DDF2]/60 border-[#8B6FAE] shadow-xs'
                            : 'bg-white hover:bg-[#F9F7FB] border-[#3E3445]/10'
                        }`}
                      >
                        <div className="text-sm font-bold text-[#3E3445]">{sev.label}</div>
                        <div className="text-[11px] text-[#756B7C] mt-1">{sev.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Specific Symptom Checkboxes */}
            {step === 3 && (
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#3E3445]">
                  Select any specific observations ({currentCategoryObj.title}):
                </h3>
                <p className="text-xs text-[#756B7C]">Check all that apply:</p>

                <div className="space-y-2.5 pt-2">
                  {(symptomOptions[selectedCategory] || []).map((sym) => {
                    const isChecked = selectedSymptoms.includes(sym);
                    return (
                      <div
                        key={sym}
                        id={`symptom-check-${sym.replace(/\s+/g, '-').toLowerCase()}`}
                        onClick={() => toggleSymptom(sym)}
                        className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                          isChecked
                            ? 'bg-[#E8DDF2]/50 border-[#8B6FAE]'
                            : 'bg-white hover:bg-[#F9F7FB] border-[#3E3445]/10'
                        }`}
                      >
                        <span className="text-xs font-semibold text-[#3E3445]">{sym}</span>
                        <div
                          className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-colors ${
                            isChecked
                              ? 'bg-[#8B6FAE] border-[#8B6FAE] text-white'
                              : 'border-[#3E3445]/20 bg-white'
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 4: Lifestyle Context */}
            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#3E3445] mb-2">
                    Lifestyle and Recovery Factors
                  </h3>
                  <p className="text-xs text-[#756B7C] mb-6">
                    Biomarkers and symptoms are heavily influenced by recovery architecture:
                  </p>
                </div>

                <div className="space-y-5">
                  {/* Sleep Slider */}
                  <div>
                    <div className="flex justify-between text-xs font-bold text-[#3E3445] mb-2">
                      <span className="flex items-center gap-1.5">
                        <Moon className="w-3.5 h-3.5 text-[#8B6FAE]" /> Average Nightly Sleep
                      </span>
                      <span className="text-[#8B6FAE]">{sleepHours} Hours / Night</span>
                    </div>
                    <input
                      id="health-sleep-range"
                      type="range"
                      min={4}
                      max={10}
                      step={0.5}
                      value={sleepHours}
                      onChange={(e) => setSleepHours(Number(e.target.value))}
                      className="w-full accent-[#8B6FAE] cursor-pointer"
                    />
                  </div>

                  {/* Stress Slider */}
                  <div>
                    <div className="flex justify-between text-xs font-bold text-[#3E3445] mb-2">
                      <span className="flex items-center gap-1.5">
                        <Flame className="w-3.5 h-3.5 text-[#D98B9C]" /> Stress & Cognitive Load
                      </span>
                      <span className="text-[#665080]">{stressLevel} / 10</span>
                    </div>
                    <input
                      id="health-stress-range"
                      type="range"
                      min={1}
                      max={10}
                      value={stressLevel}
                      onChange={(e) => setStressLevel(Number(e.target.value))}
                      className="w-full accent-[#8B6FAE] cursor-pointer"
                    />
                  </div>

                  {/* Activity Days Slider */}
                  <div>
                    <div className="flex justify-between text-xs font-bold text-[#3E3445] mb-2">
                      <span className="flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-[#739B82]" /> Aerobic / Strength Days
                      </span>
                      <span className="text-[#739B82]">{activityDays} Days / Week</span>
                    </div>
                    <input
                      id="health-activity-range"
                      type="range"
                      min={0}
                      max={7}
                      value={activityDays}
                      onChange={(e) => setActivityDays(Number(e.target.value))}
                      className="w-full accent-[#8B6FAE] cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5: Final Evaluation & Specialist Recommendations */}
            {step === 5 && (
              <div className="space-y-6">
                <div className="p-6 rounded-3xl bg-gradient-to-r from-[#E8DDF2]/60 via-[#FFFDFC] to-[#F2D9DF]/40 border border-[#8B6FAE]/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#665080]">
                      Triage Summary
                    </span>
                    <span className="px-3 py-1 bg-[#739B82]/20 text-[#739B82] text-xs font-bold rounded-full">
                      Low-To-Moderate Urgency
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#3E3445] mb-1">
                    Recommended Care: {currentCategoryObj.title}
                  </h3>
                  <p className="text-xs text-[#756B7C] leading-relaxed">
                    Based on your selected symptoms ({selectedSymptoms.length || 1} logged) and {duration} duration, an in-depth baseline evaluation with a specialist is suggested.
                  </p>
                </div>

                {/* Matched Specialist Recommendations */}
                <div>
                  <h4 className="font-serif text-base font-bold text-[#3E3445] mb-3">
                    Recommended Aura Physicians for this Profile:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {matchedDoctors.slice(0, 2).map((doc) => (
                      <div
                        key={doc.id}
                        className="p-4 rounded-2xl bg-[#F9F7FB] border border-[#3E3445]/8 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={doc.image}
                            alt={doc.name}
                            className="w-12 h-12 rounded-xl object-cover"
                          />
                          <div>
                            <div className="text-xs font-bold text-[#3E3445]">{doc.name}</div>
                            <div className="text-[11px] text-[#8B6FAE]">{doc.title}</div>
                            <div className="text-[10px] text-[#756B7C]">★ {doc.rating} • {doc.availability}</div>
                          </div>
                        </div>

                        <button
                          id={`triage-book-doc-${doc.id}`}
                          onClick={() => openBooking(doc)}
                          className="px-3 py-1.5 text-xs font-semibold bg-[#8B6FAE] hover:bg-[#665080] text-white rounded-xl shadow-xs transition-colors shrink-0"
                        >
                          Book Visit
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clinical Disclaimer */}
                <div className="p-4 rounded-2xl bg-[#F9F7FB] border border-[#3E3445]/8 text-xs text-[#756B7C] flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#739B82] mt-0.5 shrink-0" />
                  <span>
                    <strong>Medical Disclaimer:</strong> This interactive tool is for informational triage guidance and does not replace emergency clinical evaluation. If you experience severe chest pain, sudden numbness, or shortness of breath, please call 911 or visit our Emergency Pavilion immediately.
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Action Controls */}
          <div className="p-5 border-t border-[#3E3445]/8 bg-[#F9F7FB] flex items-center justify-between">
            {step > 1 && step < 5 ? (
              <button
                id="health-prev-btn"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 text-xs font-semibold text-[#756B7C] hover:text-[#3E3445] rounded-xl hover:bg-white transition-colors flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : step === 5 ? (
              <button
                id="health-restart-btn"
                onClick={handleRestart}
                className="px-4 py-2 text-xs font-semibold text-[#665080] hover:text-[#3E3445] rounded-xl hover:bg-white transition-colors flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Start Over</span>
              </button>
            ) : (
              <div />
            )}

            {step < 5 ? (
              <button
                id="health-next-btn"
                onClick={() => setStep(step + 1)}
                className="px-6 py-2.5 bg-[#8B6FAE] hover:bg-[#665080] text-white text-xs font-semibold rounded-full shadow-xs transition-colors flex items-center gap-1.5"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                id="health-book-specialist-btn"
                onClick={() => openBooking(matchedDoctors[0] || null)}
                className="px-6 py-2.5 bg-[#8B6FAE] hover:bg-[#665080] text-white text-xs font-semibold rounded-full shadow-xs transition-colors flex items-center gap-1.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Recommended Specialist</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
