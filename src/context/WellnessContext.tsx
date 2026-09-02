import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  DailyHabit,
  DailyMetrics,
  NavTab,
  WorkoutItem,
  RecipeItem,
  ChallengeItem,
  ReflectionEntry,
  LifestyleInsight,
  NearbyLocation,
  AchievementBadge,
  MoodType,
} from '../types/wellness';
import {
  INITIAL_METRICS,
  INITIAL_HABITS,
  INITIAL_WORKOUTS,
  INITIAL_RECIPES,
  INITIAL_CHALLENGES,
  INITIAL_INSIGHTS,
  INITIAL_NEARBY_LOCATIONS,
  INITIAL_ACHIEVEMENTS,
  INITIAL_REFLECTIONS,
} from '../data/initialData';

interface WellnessContextType {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  metrics: DailyMetrics;
  habits: DailyHabit[];
  workouts: WorkoutItem[];
  recipes: RecipeItem[];
  challenges: ChallengeItem[];
  reflections: ReflectionEntry[];
  insights: LifestyleInsight[];
  nearbyLocations: NearbyLocation[];
  achievements: AchievementBadge[];
  userName: string;
  setUserName: (name: string) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  
  // Quick modals
  isLogActivityOpen: boolean;
  setIsLogActivityOpen: (open: boolean) => void;
  isBreathingModalOpen: boolean;
  setIsBreathingModalOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (open: boolean) => void;
  activeWorkoutModal: WorkoutItem | null;
  setActiveWorkoutModal: (item: WorkoutItem | null) => void;
  selectedRecipe: RecipeItem | null;
  setSelectedRecipe: (item: RecipeItem | null) => void;

  // Actions
  addWater: (liters: number) => void;
  addSteps: (count: number) => void;
  logExercise: (minutes: number, title?: string) => void;
  setMood: (mood: MoodType, note?: string) => void;
  updateSleep: (hours: number, quality: number) => void;
  toggleHabit: (id: string) => void;
  addHabit: (habit: { title: string; category: DailyHabit['category']; targetDescription: string }) => void;
  deleteHabit: (id: string) => void;
  toggleWorkoutCompleted: (id: string) => void;
  toggleRecipeLogged: (id: string) => void;
  toggleJoinChallenge: (id: string) => void;
  toggleChallengeTask: (challengeId: string, day: number) => void;
  addReflection: (prompt: string, content: string, mood: MoodType) => void;
  toggleSaveLocation: (id: string) => void;
  resetAllToDefault: () => void;
}

const WellnessContext = createContext<WellnessContextType | undefined>(undefined);

export const WellnessProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [userName, setUserName] = useState<string>('Alex');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Modals
  const [isLogActivityOpen, setIsLogActivityOpen] = useState(false);
  const [isBreathingModalOpen, setIsBreathingModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [activeWorkoutModal, setActiveWorkoutModal] = useState<WorkoutItem | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeItem | null>(null);

  // Persistent States
  const [metrics, setMetrics] = useState<DailyMetrics>(() => {
    const saved = localStorage.getItem('vitalia_metrics');
    return saved ? JSON.parse(saved) : INITIAL_METRICS;
  });

  const [habits, setHabits] = useState<DailyHabit[]>(() => {
    const saved = localStorage.getItem('vitalia_habits');
    return saved ? JSON.parse(saved) : INITIAL_HABITS;
  });

  const [workouts, setWorkouts] = useState<WorkoutItem[]>(() => {
    const saved = localStorage.getItem('vitalia_workouts');
    return saved ? JSON.parse(saved) : INITIAL_WORKOUTS;
  });

  const [recipes, setRecipes] = useState<RecipeItem[]>(() => {
    const saved = localStorage.getItem('vitalia_recipes');
    return saved ? JSON.parse(saved) : INITIAL_RECIPES;
  });

  const [challenges, setChallenges] = useState<ChallengeItem[]>(() => {
    const saved = localStorage.getItem('vitalia_challenges');
    return saved ? JSON.parse(saved) : INITIAL_CHALLENGES;
  });

  const [reflections, setReflections] = useState<ReflectionEntry[]>(() => {
    const saved = localStorage.getItem('vitalia_reflections');
    return saved ? JSON.parse(saved) : INITIAL_REFLECTIONS;
  });

  const [nearbyLocations, setNearbyLocations] = useState<NearbyLocation[]>(() => {
    const saved = localStorage.getItem('vitalia_nearby');
    return saved ? JSON.parse(saved) : INITIAL_NEARBY_LOCATIONS;
  });

  const [achievements, setAchievements] = useState<AchievementBadge[]>(() => {
    const saved = localStorage.getItem('vitalia_achievements');
    return saved ? JSON.parse(saved) : INITIAL_ACHIEVEMENTS;
  });

  const [insights] = useState<LifestyleInsight[]>(INITIAL_INSIGHTS);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('vitalia_metrics', JSON.stringify(metrics));
  }, [metrics]);

  useEffect(() => {
    localStorage.setItem('vitalia_habits', JSON.stringify(habits));
  }, [habits]);

  useEffect(() => {
    localStorage.setItem('vitalia_workouts', JSON.stringify(workouts));
  }, [workouts]);

  useEffect(() => {
    localStorage.setItem('vitalia_recipes', JSON.stringify(recipes));
  }, [recipes]);

  useEffect(() => {
    localStorage.setItem('vitalia_challenges', JSON.stringify(challenges));
  }, [challenges]);

  useEffect(() => {
    localStorage.setItem('vitalia_reflections', JSON.stringify(reflections));
  }, [reflections]);

  useEffect(() => {
    localStorage.setItem('vitalia_nearby', JSON.stringify(nearbyLocations));
  }, [nearbyLocations]);

  useEffect(() => {
    localStorage.setItem('vitalia_achievements', JSON.stringify(achievements));
  }, [achievements]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3200);
  };

  const fireConfetti = () => {
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#10B981', '#0EA5E9', '#F59E0B', '#6366F1'],
      });
    } catch {
      // ignore in headless
    }
  };

  const calculateWellnessScore = (m: DailyMetrics, h: DailyHabit[]): number => {
    const stepRatio = Math.min(1, m.steps / m.stepsGoal);
    const waterRatio = Math.min(1, m.waterLiters / m.waterGoalLiters);
    const sleepRatio = Math.min(1, m.sleepHours / m.sleepGoalHours);
    const exRatio = Math.min(1, m.exerciseMinutes / m.exerciseGoalMinutes);
    const habitCompletedCount = h.filter((item) => item.completed).length;
    const habitRatio = h.length > 0 ? habitCompletedCount / h.length : 1;

    const weighted =
      stepRatio * 25 +
      waterRatio * 20 +
      sleepRatio * 25 +
      exRatio * 15 +
      habitRatio * 15;

    return Math.min(99, Math.round(weighted));
  };

  const addWater = (liters: number) => {
    setMetrics((prev) => {
      const newWater = Math.round((prev.waterLiters + liters) * 10) / 10;
      const updated = { ...prev, waterLiters: newWater };
      updated.wellnessScore = calculateWellnessScore(updated, habits);
      return updated;
    });

    // Check if hydration habit completed
    if (metrics.waterLiters + liters >= metrics.waterGoalLiters) {
      setHabits((prev) =>
        prev.map((h) => (h.category === 'hydration' ? { ...h, completed: true } : h))
      );
      fireConfetti();
    }

    showToast(`+${liters >= 1 ? `${liters}L` : `${Math.round(liters * 1000)}ml`} water recorded! Stay hydrated.`);
  };

  const addSteps = (count: number) => {
    setMetrics((prev) => {
      const newSteps = prev.steps + count;
      const updated = { ...prev, steps: newSteps };
      updated.wellnessScore = calculateWellnessScore(updated, habits);
      return updated;
    });

    if (metrics.steps + count >= metrics.stepsGoal) {
      fireConfetti();
      showToast('Daily step goal attained! Fantastic endurance.');
    } else {
      showToast(`+${count.toLocaleString()} steps logged!`);
    }
  };

  const logExercise = (minutes: number, title?: string) => {
    setMetrics((prev) => {
      const newEx = prev.exerciseMinutes + minutes;
      const updated = { ...prev, exerciseMinutes: newEx };
      updated.wellnessScore = calculateWellnessScore(updated, habits);
      return updated;
    });

    fireConfetti();
    showToast(title ? `Completed ${title} (+${minutes}m)!` : `+${minutes} min exercise logged!`);
  };

  const setMood = (mood: MoodType, note?: string) => {
    setMetrics((prev) => ({
      ...prev,
      currentMood: mood,
      moodNote: note ?? prev.moodNote,
    }));
    showToast(`Mood check-in recorded: ${mood.toUpperCase()}`);
  };

  const updateSleep = (hours: number, quality: number) => {
    setMetrics((prev) => {
      const updated = { ...prev, sleepHours: hours, sleepQuality: quality };
      updated.wellnessScore = calculateWellnessScore(updated, habits);
      return updated;
    });
    showToast(`Sleep logged: ${hours} hours (${quality}% recovery)`);
  };

  const toggleHabit = (id: string) => {
    let nowDone = false;
    let habitName = '';

    setHabits((prev) =>
      prev.map((h) => {
        if (h.id === id) {
          nowDone = !h.completed;
          habitName = h.title;
          return {
            ...h,
            completed: nowDone,
            streak: nowDone ? h.streak + 1 : Math.max(0, h.streak - 1),
          };
        }
        return h;
      })
    );

    if (nowDone) {
      fireConfetti();
      showToast(`Streak continued! "${habitName}" checked.`);
    }

    setMetrics((prev) => {
      const updatedHabits = habits.map((h) =>
        h.id === id ? { ...h, completed: !h.completed } : h
      );
      return {
        ...prev,
        wellnessScore: calculateWellnessScore(prev, updatedHabits),
      };
    });
  };

  const addHabit = ({
    title,
    category,
    targetDescription,
  }: {
    title: string;
    category: DailyHabit['category'];
    targetDescription: string;
  }) => {
    const newHabit: DailyHabit = {
      id: `habit-${Date.now()}`,
      title,
      category,
      streak: 1,
      completed: false,
      targetDescription,
      iconName: 'Sparkles',
    };
    setHabits((prev) => [newHabit, ...prev]);
    showToast(`New habit "${title}" initialized!`);
  };

  const deleteHabit = (id: string) => {
    setHabits((prev) => prev.filter((h) => h.id !== id));
    showToast('Habit removed.');
  };

  const toggleWorkoutCompleted = (id: string) => {
    setWorkouts((prev) =>
      prev.map((w) => {
        if (w.id === id) {
          const isDone = !w.completedToday;
          if (isDone) {
            logExercise(w.durationMinutes, w.title);
          }
          return { ...w, completedToday: isDone };
        }
        return w;
      })
    );
  };

  const toggleRecipeLogged = (id: string) => {
    setRecipes((prev) =>
      prev.map((r) => {
        if (r.id === id) {
          const isDone = !r.loggedToday;
          if (isDone) {
            fireConfetti();
            showToast(`Logged "${r.title}" to today’s nutrition!`);
          }
          return { ...r, loggedToday: isDone };
        }
        return r;
      })
    );
  };

  const toggleJoinChallenge = (id: string) => {
    setChallenges((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          const joinedNow = !c.joined;
          showToast(joinedNow ? `Joined ${c.title}!` : `Left ${c.title}`);
          if (joinedNow) fireConfetti();
          return {
            ...c,
            joined: joinedNow,
            participantsCount: joinedNow ? c.participantsCount + 1 : c.participantsCount - 1,
          };
        }
        return c;
      })
    );
  };

  const toggleChallengeTask = (challengeId: string, day: number) => {
    setChallenges((prev) =>
      prev.map((c) => {
        if (c.id === challengeId) {
          const updatedTasks = c.dailyTasks.map((t) =>
            t.day === day ? { ...t, completed: !t.completed } : t
          );
          return { ...c, dailyTasks: updatedTasks };
        }
        return c;
      })
    );
    fireConfetti();
    showToast(`Challenge Day ${day} task updated!`);
  };

  const addReflection = (prompt: string, content: string, mood: MoodType) => {
    const entry: ReflectionEntry = {
      id: `ref-${Date.now()}`,
      date: 'Just now',
      prompt,
      content,
      mood,
    };
    setReflections((prev) => [entry, ...prev]);
    fireConfetti();
    showToast('Reflection saved to mental wellness journal!');
  };

  const toggleSaveLocation = (id: string) => {
    setNearbyLocations((prev) =>
      prev.map((loc) => {
        if (loc.id === id) {
          const saved = !loc.isSaved;
          showToast(saved ? `Saved ${loc.name} to favorites` : `Removed ${loc.name}`);
          return { ...loc, isSaved: saved };
        }
        return loc;
      })
    );
  };

  const resetAllToDefault = () => {
    setMetrics(INITIAL_METRICS);
    setHabits(INITIAL_HABITS);
    setWorkouts(INITIAL_WORKOUTS);
    setRecipes(INITIAL_RECIPES);
    setChallenges(INITIAL_CHALLENGES);
    setReflections(INITIAL_REFLECTIONS);
    setNearbyLocations(INITIAL_NEARBY_LOCATIONS);
    setAchievements(INITIAL_ACHIEVEMENTS);
    localStorage.clear();
    setActiveTab('home');
    showToast('Reset data to default demonstration state.');
  };

  return (
    <WellnessContext.Provider
      value={{
        activeTab,
        setActiveTab,
        metrics,
        habits,
        workouts,
        recipes,
        challenges,
        reflections,
        insights,
        nearbyLocations,
        achievements,
        userName,
        setUserName,
        toastMessage,
        showToast,
        isLogActivityOpen,
        setIsLogActivityOpen,
        isBreathingModalOpen,
        setIsBreathingModalOpen,
        isSearchOpen,
        setIsSearchOpen,
        isLoginModalOpen,
        setIsLoginModalOpen,
        activeWorkoutModal,
        setActiveWorkoutModal,
        selectedRecipe,
        setSelectedRecipe,
        addWater,
        addSteps,
        logExercise,
        setMood,
        updateSleep,
        toggleHabit,
        addHabit,
        deleteHabit,
        toggleWorkoutCompleted,
        toggleRecipeLogged,
        toggleJoinChallenge,
        toggleChallengeTask,
        addReflection,
        toggleSaveLocation,
        resetAllToDefault,
      }}
    >
      {children}
    </WellnessContext.Provider>
  );
};

export const useWellness = () => {
  const context = useContext(WellnessContext);
  if (!context) {
    throw new Error('useWellness must be used within a WellnessProvider');
  }
  return context;
};
