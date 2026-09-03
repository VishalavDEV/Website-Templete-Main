import React, { useState } from 'react';
import {
  Heart,
  Dumbbell,
  Utensils,
  Moon,
  Sparkles,
  Trophy,
  BarChart2,
  Users,
  BookOpen,
  Settings,
  CheckCircle2,
  TrendingUp,
  Award,
  Play,
  Share2,
} from 'lucide-react';

interface SubViewProps {
  onBackToHome: () => void;
}

export const WellnessView: React.FC<SubViewProps> = ({ onBackToHome }) => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-[#111827]">Wellness & Bio-Readiness</h2>
        <p className="text-sm text-gray-500">Holistic overview of recovery, heart rate variability, and vitality.</p>
      </div>
      <button
        onClick={onBackToHome}
        className="text-xs font-semibold px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700"
      >
        ← Back to Dashboard
      </button>
    </div>

    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white p-5 rounded-2xl border border-[#EAEFE9] shadow-xs">
        <div className="text-xs text-gray-500 font-semibold mb-1">Resting Heart Rate</div>
        <div className="text-3xl font-extrabold text-[#111827]">58 <span className="text-sm text-gray-400 font-normal">bpm</span></div>
        <div className="text-xs text-[#10B981] font-semibold mt-2">↓ 3 bpm lower than 30-day average</div>
      </div>
      <div className="bg-white p-5 rounded-2xl border border-[#EAEFE9] shadow-xs">
        <div className="text-xs text-gray-500 font-semibold mb-1">Heart Rate Variability (HRV)</div>
        <div className="text-3xl font-extrabold text-[#111827]">74 <span className="text-sm text-gray-400 font-normal">ms</span></div>
        <div className="text-xs text-[#10B981] font-semibold mt-2">Optimal parasympathetic recovery</div>
      </div>
      <div className="bg-white p-5 rounded-2xl border border-[#EAEFE9] shadow-xs">
        <div className="text-xs text-gray-500 font-semibold mb-1">Recovery Score</div>
        <div className="text-3xl font-extrabold text-[#10B981]">89%</div>
        <div className="text-xs text-gray-600 font-medium mt-2">Body primed for high performance</div>
      </div>
    </div>
  </div>
);

export const FitnessView: React.FC<SubViewProps> = ({ onBackToHome }) => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-[#111827]">Fitness & Movement</h2>
        <p className="text-sm text-gray-500">Track cardio output, strength progression, and training load.</p>
      </div>
      <button
        onClick={onBackToHome}
        className="text-xs font-semibold px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700"
      >
        ← Back to Dashboard
      </button>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white p-5 rounded-2xl border border-[#EAEFE9] shadow-xs">
        <h3 className="text-sm font-bold text-gray-900 mb-3">This Week's Training Sessions</h3>
        <div className="space-y-3 text-xs">
          <div className="flex justify-between items-center p-2.5 bg-gray-50 rounded-xl">
            <div>
              <div className="font-bold text-gray-800">Morning Stretch & Mobility</div>
              <div className="text-gray-500">Today • 10 min • 45 kcal</div>
            </div>
            <span className="text-[#10B981] font-bold">Completed</span>
          </div>
          <div className="flex justify-between items-center p-2.5 bg-gray-50 rounded-xl">
            <div>
              <div className="font-bold text-gray-800">Cardio Outdoor Walk</div>
              <div className="text-gray-500">Today 12:30 PM • 20 min • 110 kcal</div>
            </div>
            <span className="text-gray-500">Scheduled</span>
          </div>
          <div className="flex justify-between items-center p-2.5 bg-gray-50 rounded-xl">
            <div>
              <div className="font-bold text-gray-800">Strength Training</div>
              <div className="text-gray-500">Today 6:00 PM • 30 min • 210 kcal</div>
            </div>
            <span className="text-gray-500">Scheduled</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-5 rounded-2xl border border-[#EAEFE9] shadow-xs">
        <h3 className="text-sm font-bold text-gray-900 mb-3">Weekly Cardio Zone Distribution</h3>
        <div className="space-y-3 text-xs">
          <div>
            <div className="flex justify-between mb-1">
              <span className="font-medium text-gray-600">Zone 2 (Aerobic Base)</span>
              <span className="font-bold text-gray-800">115 / 150 min</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#10B981] rounded-full" style={{ width: '76%' }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="font-medium text-gray-600">Zone 4/5 (High Intensity)</span>
              <span className="font-bold text-gray-800">22 / 30 min</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#F97316] rounded-full" style={{ width: '73%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const NutritionView: React.FC<SubViewProps> = ({ onBackToHome }) => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-[#111827]">Nutrition & Fuel</h2>
        <p className="text-sm text-gray-500">Macronutrient balance, micronutrients, and hydration.</p>
      </div>
      <button
        onClick={onBackToHome}
        className="text-xs font-semibold px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700"
      >
        ← Back to Dashboard
      </button>
    </div>

    <div className="grid grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-2xl border border-[#EAEFE9] text-center">
        <div className="text-xs text-gray-500 font-semibold mb-1">Calories Consumed</div>
        <div className="text-2xl font-bold text-gray-900">1,650 <span className="text-xs text-gray-400">/ 2,100</span></div>
      </div>
      <div className="bg-white p-4 rounded-2xl border border-[#EAEFE9] text-center">
        <div className="text-xs text-gray-500 font-semibold mb-1">Protein</div>
        <div className="text-2xl font-bold text-[#10B981]">118g <span className="text-xs text-gray-400">/ 140g</span></div>
      </div>
      <div className="bg-white p-4 rounded-2xl border border-[#EAEFE9] text-center">
        <div className="text-xs text-gray-500 font-semibold mb-1">Carbohydrates</div>
        <div className="text-2xl font-bold text-[#F59E0B]">164g <span className="text-xs text-gray-400">/ 220g</span></div>
      </div>
      <div className="bg-white p-4 rounded-2xl border border-[#EAEFE9] text-center">
        <div className="text-xs text-gray-500 font-semibold mb-1">Fats</div>
        <div className="text-2xl font-bold text-[#0EA5E9]">48g <span className="text-xs text-gray-400">/ 65g</span></div>
      </div>
    </div>
  </div>
);

export const SleepView: React.FC<SubViewProps> = ({ onBackToHome }) => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-[#111827]">Sleep & Circadian Rhythm</h2>
        <p className="text-sm text-gray-500">Sleep stages, sleep debt analysis, and bedtime hygiene.</p>
      </div>
      <button
        onClick={onBackToHome}
        className="text-xs font-semibold px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700"
      >
        ← Back to Dashboard
      </button>
    </div>

    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white p-5 rounded-2xl border border-[#EAEFE9]">
        <div className="text-xs text-gray-500 font-semibold mb-1">Total Sleep Duration</div>
        <div className="text-2xl font-bold text-gray-900">7h 30m</div>
        <div className="text-xs text-purple-600 font-semibold mt-1">Bedtime: 11:15 PM • Woke: 6:45 AM</div>
      </div>
      <div className="bg-white p-5 rounded-2xl border border-[#EAEFE9]">
        <div className="text-xs text-gray-500 font-semibold mb-1">Deep Sleep (Physical Restoration)</div>
        <div className="text-2xl font-bold text-gray-900">1h 45m (23%)</div>
        <div className="text-xs text-[#10B981] font-semibold mt-1">Optimal recovery threshold achieved</div>
      </div>
      <div className="bg-white p-5 rounded-2xl border border-[#EAEFE9]">
        <div className="text-xs text-gray-500 font-semibold mb-1">REM Sleep (Cognitive Restoration)</div>
        <div className="text-2xl font-bold text-gray-900">1h 55m (25%)</div>
        <div className="text-xs text-[#10B981] font-semibold mt-1">Above target baseline</div>
      </div>
    </div>
  </div>
);

export const MindfulnessView: React.FC<SubViewProps> = ({ onBackToHome }) => {
  const [breathingPhase, setBreathingPhase] = useState<'Inhale' | 'Hold' | 'Exhale'>('Inhale');
  const [isBreathingActive, setIsBreathingActive] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#111827]">Mindfulness & Mental Recovery</h2>
          <p className="text-sm text-gray-500">Box breathing, meditation, and nervous system regulation.</p>
        </div>
        <button
          onClick={onBackToHome}
          className="text-xs font-semibold px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700"
        >
          ← Back to Dashboard
        </button>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-[#EAEFE9] text-center max-w-md mx-auto shadow-xs">
        <h3 className="text-lg font-bold text-gray-900 mb-1">4-4-4 Box Breathing</h3>
        <p className="text-xs text-gray-500 mb-6">Lower heart rate and reduce sympathetic stress.</p>

        <div className="w-36 h-36 rounded-full bg-[#EBF7EE] mx-auto flex items-center justify-center border-4 border-[#10B981] mb-6">
          <span className="text-lg font-extrabold text-[#10B981]">
            {isBreathingActive ? breathingPhase : 'Ready'}
          </span>
        </div>

        <button
          onClick={() => setIsBreathingActive(!isBreathingActive)}
          className="px-6 py-2.5 bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold rounded-xl shadow-xs"
        >
          {isBreathingActive ? 'Stop Exercise' : 'Start 2-Minute Breathing'}
        </button>
      </div>
    </div>
  );
};

export const ChallengesView: React.FC<SubViewProps> = ({ onBackToHome }) => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-[#111827]">Wellness Challenges</h2>
        <p className="text-sm text-gray-500">Join community wellness challenges and build durable habits.</p>
      </div>
      <button
        onClick={onBackToHome}
        className="text-xs font-semibold px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700"
      >
        ← Back to Dashboard
      </button>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white p-5 rounded-2xl border border-[#EAEFE9]">
        <div className="flex justify-between items-start mb-3">
          <div>
            <span className="text-[10px] font-bold uppercase text-[#10B981] bg-[#EBF7EE] px-2 py-0.5 rounded-full">
              In Progress
            </span>
            <h3 className="text-base font-bold text-gray-900 mt-1">21-Day Healthy Habits</h3>
          </div>
          <span className="text-sm font-bold text-[#10B981]">Day 7 of 21</span>
        </div>
        <p className="text-xs text-gray-600 mb-3">1,240 participants • 33% Completed</p>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-[#10B981]" style={{ width: '33%' }} />
        </div>
      </div>

      <div className="bg-white p-5 rounded-2xl border border-[#EAEFE9]">
        <div className="flex justify-between items-start mb-3">
          <div>
            <span className="text-[10px] font-bold uppercase text-[#F97316] bg-[#FFF7ED] px-2 py-0.5 rounded-full">
              Upcoming
            </span>
            <h3 className="text-base font-bold text-gray-900 mt-1">100k Steps in 10 Days</h3>
          </div>
          <span className="text-sm font-semibold text-gray-400">Starts June 1</span>
        </div>
        <p className="text-xs text-gray-600 mb-3">890 participants enrolled</p>
        <button className="text-xs font-bold text-[#10B981] hover:underline">
          Join Challenge →
        </button>
      </div>
    </div>
  </div>
);

export const InsightsView: React.FC<SubViewProps> = ({ onBackToHome }) => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-[#111827]">Longevity & Health Insights</h2>
        <p className="text-sm text-gray-500">Correlations and pattern detection based on your personal metrics.</p>
      </div>
      <button
        onClick={onBackToHome}
        className="text-xs font-semibold px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700"
      >
        ← Back to Dashboard
      </button>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white p-5 rounded-2xl border border-[#EAEFE9]">
        <h3 className="text-sm font-bold text-gray-900 mb-2">Sleep vs Mood Correlation</h3>
        <p className="text-xs text-gray-600 leading-relaxed">
          On days you slept &gt;7.5 hours, your self-reported mood was 'Great' 92% of the time, with 28% higher step volume.
        </p>
      </div>
      <div className="bg-white p-5 rounded-2xl border border-[#EAEFE9]">
        <h3 className="text-sm font-bold text-gray-900 mb-2">Peak Activity Window</h3>
        <p className="text-xs text-gray-600 leading-relaxed">
          Your cardiovascular power and step cadence naturally peak between 6:00 PM and 8:00 PM.
        </p>
      </div>
    </div>
  </div>
);

export const CommunityView: React.FC<SubViewProps> = ({ onBackToHome }) => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-[#111827]">Community & Social Feed</h2>
        <p className="text-sm text-gray-500">Cheer friends and compare milestones on the weekly leaderboard.</p>
      </div>
      <button
        onClick={onBackToHome}
        className="text-xs font-semibold px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700"
      >
        ← Back to Dashboard
      </button>
    </div>

    <div className="bg-white p-5 rounded-2xl border border-[#EAEFE9] shadow-xs">
      <h3 className="text-sm font-bold text-gray-900 mb-4">Friends Weekly Leaderboard</h3>
      <div className="space-y-3 text-xs">
        {[
          { rank: 1, name: 'Maya Lin', points: '94 pts', streak: '21d 🔥' },
          { rank: 2, name: 'Alex Carter (You)', points: '82 pts', streak: '14d 🔥' },
          { rank: 3, name: 'Daniel Kim', points: '80 pts', streak: '9d 🔥' },
          { rank: 4, name: 'Sarah Jenkins', points: '76 pts', streak: '5d 🔥' },
        ].map((friend) => (
          <div
            key={friend.rank}
            className={`flex items-center justify-between p-3 rounded-xl ${
              friend.rank === 2 ? 'bg-[#EBF7EE] font-bold text-[#111827]' : 'bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="w-5 text-center text-gray-500 font-bold">{friend.rank}</span>
              <span>{friend.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-500">{friend.streak}</span>
              <span className="text-[#10B981] font-bold">{friend.points}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const ResourcesView: React.FC<SubViewProps> = ({ onBackToHome }) => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-[#111827]">Wellness Library & Science</h2>
        <p className="text-sm text-gray-500">Peer-reviewed guides on sleep architecture, nutrition protocols, and longevity.</p>
      </div>
      <button
        onClick={onBackToHome}
        className="text-xs font-semibold px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700"
      >
        ← Back to Dashboard
      </button>
    </div>

    <div className="grid grid-cols-3 gap-4">
      {[
        { title: 'The Science of Circadian Sleep', author: 'Dr. Matthew Walker', readTime: '5 min read' },
        { title: 'Zone 2 Cardio Protocols', author: 'Dr. Peter Attia', readTime: '7 min read' },
        { title: 'Optimal Daily Hydration & Electrolytes', author: 'Dr. Andrew Huberman', readTime: '4 min read' },
      ].map((res, i) => (
        <div key={i} className="bg-white p-5 rounded-2xl border border-[#EAEFE9] shadow-xs">
          <div className="text-[11px] font-semibold text-[#10B981] mb-1">{res.readTime}</div>
          <h4 className="text-sm font-bold text-gray-900 mb-1">{res.title}</h4>
          <p className="text-xs text-gray-500">{res.author}</p>
        </div>
      ))}
    </div>
  </div>
);

export const SettingsView: React.FC<SubViewProps> = ({ onBackToHome }) => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-[#111827]">Settings & Preferences</h2>
        <p className="text-sm text-gray-500">Manage connected devices, notifications, and telemetry.</p>
      </div>
      <button
        onClick={onBackToHome}
        className="text-xs font-semibold px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700"
      >
        ← Back to Dashboard
      </button>
    </div>

    <div className="bg-white p-6 rounded-2xl border border-[#EAEFE9] space-y-4 text-xs max-w-xl">
      <div className="flex items-center justify-between py-2 border-b border-gray-100">
        <div>
          <div className="font-bold text-gray-800">Apple Health / Google Fit Sync</div>
          <div className="text-gray-500">Automatically sync steps, workouts, and sleep metrics</div>
        </div>
        <input type="checkbox" defaultChecked className="accent-[#10B981] w-4 h-4 cursor-pointer" />
      </div>
      <div className="flex items-center justify-between py-2 border-b border-gray-100">
        <div>
          <div className="font-bold text-gray-800">Daily Reminder Push Notifications</div>
          <div className="text-gray-500">Receive schedule nudges for workouts and water logging</div>
        </div>
        <input type="checkbox" defaultChecked className="accent-[#10B981] w-4 h-4 cursor-pointer" />
      </div>
      <div className="flex items-center justify-between py-2">
        <div>
          <div className="font-bold text-gray-800">Unit System</div>
          <div className="text-gray-500">Metric (km, L, kg) vs Imperial (miles, fl oz, lbs)</div>
        </div>
        <select className="border border-gray-200 rounded-lg px-2 py-1 bg-white font-medium">
          <option>Metric (L, km)</option>
          <option>Imperial (fl oz, mi)</option>
        </select>
      </div>
    </div>
  </div>
);
