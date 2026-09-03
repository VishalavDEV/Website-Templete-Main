import React, { useState, useEffect } from 'react';
import {
  X,
  Plus,
  Trash2,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  Trophy,
  Flame,
  Droplets,
  Footprints,
  Moon,
  Clock,
  Check,
} from 'lucide-react';
import { DailyGoal, MetricData, PlanItem, RecommendedItem, UserProfile } from '../types';

/* -------------------------------------------------------------
 * 1. Metric Adjust / Quick Log Modal
 * ------------------------------------------------------------- */
interface MetricAdjustModalProps {
  metric: MetricData | null;
  onClose: () => void;
  onSave: (updated: MetricData) => void;
}

export const MetricAdjustModal: React.FC<MetricAdjustModalProps> = ({
  metric,
  onClose,
  onSave,
}) => {
  if (!metric) return null;

  const [currentVal, setCurrentVal] = useState<number>(metric.current);
  const [moodVal, setMoodVal] = useState<string>(metric.displayValue || 'Great');

  const handleQuickAdd = (amount: number) => {
    setCurrentVal((prev) => Math.max(0, Math.round((prev + amount) * 10) / 10));
  };

  const handleSave = () => {
    let newDisplay = `${currentVal}`;
    let newPercentage = (currentVal / metric.target) * 100;

    if (metric.id === 'water') {
      newDisplay = `${currentVal.toFixed(1)} L`;
    } else if (metric.id === 'sleep') {
      const hours = Math.floor(currentVal);
      const mins = Math.round((currentVal - hours) * 60);
      newDisplay = `${hours}h ${mins > 0 ? `${mins}m` : ''}`.trim();
    } else if (metric.id === 'steps' || metric.id === 'calories') {
      newDisplay = currentVal.toLocaleString();
    } else if (metric.id === 'mood') {
      newDisplay = moodVal;
      newPercentage = 85;
    }

    onSave({
      ...metric,
      current: currentVal,
      displayValue: newDisplay,
      percentage: newPercentage,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-xl border border-[#EAEFE9] animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[16px] font-bold text-[#111827]">
            Log {metric.name}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {metric.id === 'mood' ? (
          <div className="space-y-3 mb-6">
            <p className="text-xs text-gray-500">How are you feeling right now?</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Great', emoji: '😄', desc: 'Energized & positive' },
                { label: 'Good', emoji: '🙂', desc: 'Calm & content' },
                { label: 'Okay', emoji: '😐', desc: 'Neutral & steady' },
                { label: 'Tired', emoji: '😴', desc: 'Need recovery' },
              ].map((m) => (
                <button
                  key={m.label}
                  type="button"
                  onClick={() => setMoodVal(m.label)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    moodVal === m.label
                      ? 'border-[#10B981] bg-[#ECFDF5] text-[#111827]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-xl mb-1">{m.emoji}</div>
                  <div className="text-xs font-bold">{m.label}</div>
                  <div className="text-[10px] text-gray-500">{m.desc}</div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4 mb-6">
            <div>
              <label className="text-xs font-semibold text-gray-600 block mb-1">
                Current Value ({metric.unit || 'units'})
              </label>
              <input
                type="number"
                step={metric.id === 'water' || metric.id === 'sleep' ? '0.1' : '1'}
                value={currentVal}
                onChange={(e) => setCurrentVal(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-200 rounded-xl text-lg font-bold text-gray-800 focus:outline-none focus:border-[#10B981]"
              />
            </div>

            {/* Quick increment buttons */}
            <div>
              <div className="text-[11px] font-medium text-gray-500 mb-1.5">
                Quick Add:
              </div>
              <div className="flex gap-2">
                {metric.id === 'water' && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleQuickAdd(0.25)}
                      className="flex-1 py-1.5 bg-[#F0F9FF] text-[#0EA5E9] text-xs font-semibold rounded-lg hover:bg-blue-100"
                    >
                      +0.25 L (Glass)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQuickAdd(0.5)}
                      className="flex-1 py-1.5 bg-[#F0F9FF] text-[#0EA5E9] text-xs font-semibold rounded-lg hover:bg-blue-100"
                    >
                      +0.5 L (Bottle)
                    </button>
                  </>
                )}
                {metric.id === 'steps' && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleQuickAdd(500)}
                      className="flex-1 py-1.5 bg-[#ECFDF5] text-[#10B981] text-xs font-semibold rounded-lg hover:bg-emerald-100"
                    >
                      +500 steps
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQuickAdd(1000)}
                      className="flex-1 py-1.5 bg-[#ECFDF5] text-[#10B981] text-xs font-semibold rounded-lg hover:bg-emerald-100"
                    >
                      +1,000 steps
                    </button>
                  </>
                )}
                {metric.id === 'exercise' && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleQuickAdd(15)}
                      className="flex-1 py-1.5 bg-[#FFF7ED] text-[#F97316] text-xs font-semibold rounded-lg hover:bg-orange-100"
                    >
                      +15 min
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQuickAdd(30)}
                      className="flex-1 py-1.5 bg-[#FFF7ED] text-[#F97316] text-xs font-semibold rounded-lg hover:bg-orange-100"
                    >
                      +30 min
                    </button>
                  </>
                )}
                {metric.id === 'calories' && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleQuickAdd(200)}
                      className="flex-1 py-1.5 bg-[#FEF2F2] text-[#EF4444] text-xs font-semibold rounded-lg hover:bg-red-100"
                    >
                      +200 kcal
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQuickAdd(450)}
                      className="flex-1 py-1.5 bg-[#FEF2F2] text-[#EF4444] text-xs font-semibold rounded-lg hover:bg-red-100"
                    >
                      +450 kcal
                    </button>
                  </>
                )}
                {metric.id === 'sleep' && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleQuickAdd(0.5)}
                      className="flex-1 py-1.5 bg-[#F5F3FF] text-[#8B5CF6] text-xs font-semibold rounded-lg hover:bg-purple-100"
                    >
                      +30 min
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQuickAdd(1)}
                      className="flex-1 py-1.5 bg-[#F5F3FF] text-[#8B5CF6] text-xs font-semibold rounded-lg hover:bg-purple-100"
                    >
                      +1 hour
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2 text-xs font-semibold text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="flex-1 py-2 text-xs font-semibold text-white bg-[#10B981] rounded-xl hover:bg-[#059669]"
          >
            Save Record
          </button>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
 * 2. Goal Edit & Management Modal
 * ------------------------------------------------------------- */
interface GoalEditModalProps {
  goals: DailyGoal[];
  onClose: () => void;
  onUpdateGoals: (newGoals: DailyGoal[]) => void;
}

export const GoalEditModal: React.FC<GoalEditModalProps> = ({
  goals,
  onClose,
  onUpdateGoals,
}) => {
  const [list, setList] = useState<DailyGoal[]>(goals);
  const [newTitle, setNewTitle] = useState('');
  const [newEmoji, setNewEmoji] = useState('🎯');

  const handleToggle = (id: string) => {
    setList((prev) =>
      prev.map((g) => (g.id === id ? { ...g, completed: !g.completed } : g))
    );
  };

  const handleDelete = (id: string) => {
    setList((prev) => prev.filter((g) => g.id !== id));
  };

  const handleAdd = () => {
    if (!newTitle.trim()) return;
    const newGoal: DailyGoal = {
      id: `goal-${Date.now()}`,
      title: newTitle.trim(),
      icon: newEmoji,
      iconType: 'emoji',
      completed: false,
      category: 'custom',
    };
    setList([...list, newGoal]);
    setNewTitle('');
  };

  const handleSave = () => {
    onUpdateGoals(list);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-[#EAEFE9]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[16px] font-bold text-[#111827]">
            Customize Daily Goals
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Existing Goals List */}
        <div className="space-y-2 max-h-60 overflow-y-auto mb-4 pr-1">
          {list.map((goal) => (
            <div
              key={goal.id}
              className="flex items-center justify-between p-2.5 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <div
                className="flex items-center gap-3 cursor-pointer flex-1"
                onClick={() => handleToggle(goal.id)}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-white ${
                    goal.completed ? 'bg-[#10B981]' : 'border-2 border-gray-300'
                  }`}
                >
                  {goal.completed && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
                </div>
                <span className="text-sm font-medium text-gray-800">
                  {goal.icon} {goal.title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleDelete(goal.id)}
                className="text-gray-400 hover:text-red-500 p-1 transition-colors"
                title="Remove Goal"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Add new goal input */}
        <div className="p-3 bg-[#F8FAF8] rounded-xl border border-[#EAEFE9] mb-4">
          <div className="text-xs font-semibold text-gray-700 mb-2">Add New Goal</div>
          <div className="flex gap-2">
            <select
              value={newEmoji}
              onChange={(e) => setNewEmoji(e.target.value)}
              className="px-2 py-1.5 border border-gray-200 rounded-lg text-sm bg-white"
            >
              <option value="🎯">🎯</option>
              <option value="🧘">🧘</option>
              <option value="💧">💧</option>
              <option value="🚴">🚴</option>
              <option value="🥑">🥑</option>
              <option value="📖">📖</option>
              <option value="☀️">☀️</option>
            </select>
            <input
              type="text"
              placeholder="e.g. 15 Min Sun Exposure"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
              className="flex-1 px-3 py-1.5 border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-[#10B981]"
            />
            <button
              type="button"
              onClick={handleAdd}
              className="px-3 py-1.5 bg-[#10B981] text-white rounded-lg text-xs font-semibold hover:bg-[#059669]"
            >
              Add
            </button>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2 text-xs font-semibold text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="flex-1 py-2 text-xs font-semibold text-white bg-[#10B981] rounded-xl hover:bg-[#059669]"
          >
            Apply Changes
          </button>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
 * 3. Activity / Session Player Modal (with interactive countdown)
 * ------------------------------------------------------------- */
interface ActivityDetailModalProps {
  activity: PlanItem | RecommendedItem | null;
  onClose: () => void;
  onComplete: () => void;
}

export const ActivityDetailModal: React.FC<ActivityDetailModalProps> = ({
  activity,
  onClose,
  onComplete,
}) => {
  if (!activity) return null;

  const durationMinutes =
    'durationMin' in activity
      ? activity.durationMin
      : parseInt(activity.duration) || 15;

  const [secondsRemaining, setSecondsRemaining] = useState(durationMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining((prev) => prev - 1);
      }, 1000);
    } else if (secondsRemaining === 0 && isRunning) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, secondsRemaining]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleReset = () => {
    setIsRunning(false);
    setSecondsRemaining(durationMinutes * 60);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#EAEFE9] animate-in fade-in zoom-in-95">
        {/* Banner image */}
        <div className="relative h-48 w-full bg-gray-900">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-2.5 py-0.5 rounded-full bg-[#10B981] text-white text-[11px] font-bold uppercase tracking-wider mb-1.5 inline-block">
              {'category' in activity ? activity.category : 'Plan'}
            </span>
            <h3 className="text-xl font-bold text-white leading-tight">
              {activity.title}
            </h3>
          </div>
        </div>

        <div className="p-6 space-y-5">
          {/* Interactive Timer Widget */}
          <div className="bg-[#F8FAF8] rounded-2xl p-4 border border-[#E9EFE8] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EBF7EE] text-[#10B981] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-black text-gray-900 font-mono tracking-wider">
                  {formatTime(secondsRemaining)}
                </div>
                <div className="text-[11px] text-gray-500 font-medium">
                  {isRunning ? 'Session in progress...' : 'Ready to start'}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsRunning(!isRunning)}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 text-white transition-all shadow-xs ${
                  isRunning
                    ? 'bg-amber-500 hover:bg-amber-600'
                    : 'bg-[#10B981] hover:bg-[#059669]'
                }`}
              >
                {isRunning ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-current" /> Pause
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" /> Start
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-xl hover:bg-gray-100"
                title="Reset timer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Description & Guided Steps */}
          <div>
            <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
              Session Guidelines
            </h4>
            {'instructions' in activity && activity.instructions ? (
              <ul className="space-y-2 text-xs text-gray-600">
                {activity.instructions.map((step, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#EBF7EE] text-[#10B981] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-gray-600 leading-relaxed">
                {'description' in activity
                  ? activity.description
                  : 'Take this time to focus on your posture, breathing rhythm, and overall mental clarity.'}
              </p>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-700 hover:bg-gray-50"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onComplete();
                onClose();
              }}
              className="flex-1 py-2.5 rounded-xl bg-[#10B981] text-white text-xs font-bold hover:bg-[#059669] flex items-center justify-center gap-1.5 shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4" /> Mark as Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
 * 4. Challenge Detail Modal
 * ------------------------------------------------------------- */
interface ChallengeModalProps {
  onClose: () => void;
  onCompleteDay: () => void;
}

export const ChallengeModal: React.FC<ChallengeModalProps> = ({
  onClose,
  onCompleteDay,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-[#EAEFE9] animate-in fade-in zoom-in-95">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-[#F59E0B]" />
            <h3 className="text-lg font-bold text-[#111827]">
              21-Day Healthy Habits Challenge
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-gray-600 mb-4 leading-relaxed">
          Building atomic health habits takes consistent repetition. You are currently on{' '}
          <strong className="text-[#10B981]">Day 7 of 21</strong> (33% completed).
        </p>

        {/* Challenge Day Timeline */}
        <div className="grid grid-cols-7 gap-1.5 mb-5 text-center">
          {Array.from({ length: 21 }, (_, i) => {
            const dayNum = i + 1;
            const isDone = dayNum < 7;
            const isToday = dayNum === 7;
            return (
              <div
                key={dayNum}
                className={`py-2 px-1 rounded-lg text-xs font-bold transition-colors ${
                  isDone
                    ? 'bg-[#10B981] text-white'
                    : isToday
                    ? 'bg-[#111827] text-white ring-2 ring-[#10B981]'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                D{dayNum}
              </div>
            );
          })}
        </div>

        {/* Today's Mission */}
        <div className="bg-[#F8FAF8] rounded-2xl p-4 border border-[#E9EFE8] mb-5">
          <div className="text-[11px] font-bold text-[#10B981] uppercase tracking-wider mb-1">
            Day 7 Mission
          </div>
          <h4 className="text-sm font-bold text-gray-900 mb-1">
            Outdoor Hydrated Power Walk & Mindfulness
          </h4>
          <p className="text-xs text-gray-600">
            Complete at least 20 minutes of continuous brisk walking outside while holding a hydration bottle. Spend 2 minutes taking 10 deep belly breaths.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-700 hover:bg-gray-50"
          >
            Keep Exploring
          </button>
          <button
            type="button"
            onClick={() => {
              onCompleteDay();
              onClose();
            }}
            className="flex-1 py-2.5 rounded-xl bg-[#10B981] text-white text-xs font-bold hover:bg-[#059669] flex items-center justify-center gap-1.5"
          >
            <Check className="w-4 h-4" /> Check Off Day 7
          </button>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
 * 5. Notifications Panel
 * ------------------------------------------------------------- */
interface NotificationsPanelProps {
  onClose: () => void;
  onClearAll: () => void;
}

export const NotificationsPanel: React.FC<NotificationsPanelProps> = ({
  onClose,
  onClearAll,
}) => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Hydration Target',
      text: "You're just 700ml away from reaching your 2.5L water goal!",
      time: '12m ago',
      icon: Droplets,
      color: '#0EA5E9',
      bg: '#F0F9FF',
    },
    {
      id: 2,
      title: 'Streak Milestone 🔥',
      text: '14-Day Wellness Streak achieved. Keep the momentum alive!',
      time: '2h ago',
      icon: Flame,
      color: '#F97316',
      bg: '#FFF7ED',
    },
    {
      id: 3,
      title: 'Evening Workout Scheduled',
      text: 'Strength Training is planned for 6:00 PM today.',
      time: '4h ago',
      icon: Clock,
      color: '#8B5CF6',
      bg: '#F5F3FF',
    },
  ]);

  return (
    <div className="fixed top-16 right-8 z-50 w-84 bg-white rounded-2xl shadow-xl border border-[#EAEFE9] p-4 animate-in fade-in slide-in-from-top-2">
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-gray-900">Notifications</span>
          <span className="px-1.5 py-0.5 bg-[#EBF7EE] text-[#10B981] text-[10px] font-extrabold rounded-full">
            {notifications.length}
          </span>
        </div>
        <button
          type="button"
          onClick={() => {
            setNotifications([]);
            onClearAll();
          }}
          className="text-[11px] font-medium text-gray-400 hover:text-gray-600"
        >
          Clear all
        </button>
      </div>

      <div className="space-y-3 my-3">
        {notifications.length === 0 ? (
          <div className="py-6 text-center text-xs text-gray-400">
            No unread notifications
          </div>
        ) : (
          notifications.map((n) => {
            const Icon = n.icon;
            return (
              <div key={n.id} className="flex gap-3 p-2 rounded-xl hover:bg-gray-50">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: n.bg }}
                >
                  <Icon className="w-4 h-4" style={{ color: n.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-xs font-bold text-gray-800 truncate">
                      {n.title}
                    </span>
                    <span className="text-[10px] text-gray-400">{n.time}</span>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-snug">{n.text}</p>
                </div>
              </div>
            );
          })
        )}
      </div>

      <button
        type="button"
        onClick={onClose}
        className="w-full py-1.5 text-center text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-lg"
      >
        Close
      </button>
    </div>
  );
};

/* -------------------------------------------------------------
 * 6. Upgrade to Premium Modal
 * ------------------------------------------------------------- */
interface UpgradeModalProps {
  onClose: () => void;
  onUpgradeSuccess: () => void;
}

export const UpgradeModal: React.FC<UpgradeModalProps> = ({
  onClose,
  onUpgradeSuccess,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<'annual' | 'monthly'>('annual');

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[#EAEFE9] animate-in fade-in zoom-in-95">
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 rounded-2xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <h3 className="text-xl font-extrabold text-[#111827] mb-1">
          Wellify Pro & Longevity
        </h3>
        <p className="text-xs text-gray-600 mb-5 leading-relaxed">
          Upgrade to unlock continuous heart-rate biomarker analysis, sleep chronotype optimization, and tailored longevity routines.
        </p>

        {/* Plans */}
        <div className="space-y-2.5 mb-5">
          <div
            onClick={() => setSelectedPlan('annual')}
            className={`p-3.5 rounded-2xl border-2 cursor-pointer flex items-center justify-between transition-all ${
              selectedPlan === 'annual'
                ? 'border-[#10B981] bg-[#ECFDF5]'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-900">Annual Plan</span>
                <span className="px-2 py-0.5 bg-[#10B981] text-white text-[9px] font-extrabold rounded-full">
                  SAVE 40%
                </span>
              </div>
              <span className="text-[11px] text-gray-500">$5.99 / month billed annually ($71.88)</span>
            </div>
            <div className="text-base font-extrabold text-gray-900">$5.99/mo</div>
          </div>

          <div
            onClick={() => setSelectedPlan('monthly')}
            className={`p-3.5 rounded-2xl border-2 cursor-pointer flex items-center justify-between transition-all ${
              selectedPlan === 'monthly'
                ? 'border-[#10B981] bg-[#ECFDF5]'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div>
              <span className="text-xs font-bold text-gray-900 block">Monthly Plan</span>
              <span className="text-[11px] text-gray-500">Flexible month-to-month billing</span>
            </div>
            <div className="text-base font-extrabold text-gray-900">$9.99/mo</div>
          </div>
        </div>

        {/* Features bullet list */}
        <div className="space-y-2 mb-6 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-[#10B981]" />
            <span>AI Predictive Recovery & Sleep Guidance</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-[#10B981]" />
            <span>Sync Apple Watch, Whoop, Garmin, & Oura</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-[#10B981]" />
            <span>Unlimited access to 250+ guided workout videos</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            onUpgradeSuccess();
            onClose();
          }}
          className="w-full py-3 bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold rounded-xl transition-all shadow-md"
        >
          Start 14-Day Free Trial
        </button>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
 * 7. Profile Modal
 * ------------------------------------------------------------- */
interface ProfileModalProps {
  user: UserProfile;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ user, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-[#EAEFE9]">
        <div className="flex justify-end mb-1">
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center mb-6">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-20 h-20 rounded-full mx-auto object-cover ring-4 ring-[#E8F8EE] mb-3"
          />
          <h3 className="text-lg font-bold text-gray-900">{user.name}</h3>
          <p className="text-xs text-gray-500">Member since {user.memberSince}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-[#F8FAF8] p-3 rounded-xl border border-gray-100 text-center">
            <div className="text-xl font-bold text-[#10B981]">{user.wellnessScore}</div>
            <div className="text-[11px] text-gray-500 font-medium">Wellness Score</div>
          </div>
          <div className="bg-[#F8FAF8] p-3 rounded-xl border border-gray-100 text-center">
            <div className="text-xl font-bold text-[#F97316]">{user.streakDays} Days</div>
            <div className="text-[11px] text-gray-500 font-medium">Active Streak</div>
          </div>
        </div>

        <div className="space-y-2 text-xs text-gray-600 mb-5">
          <div className="flex justify-between py-1.5 border-b border-gray-100">
            <span>Primary Focus</span>
            <span className="font-semibold text-gray-800">Cardio & Mobility</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-gray-100">
            <span>Daily Step Goal</span>
            <span className="font-semibold text-gray-800">10,000 steps</span>
          </div>
          <div className="flex justify-between py-1.5 border-b border-gray-100">
            <span>Target Sleep</span>
            <span className="font-semibold text-gray-800">8.0 hours</span>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl"
        >
          Close Profile
        </button>
      </div>
    </div>
  );
};
