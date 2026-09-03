import { LifestyleInputs } from '../types';

export interface RiskAnalysis {
  overallScore: number; // 0 (worst) to 100 (optimal resilience)
  riskTier: 'Optimal' | 'Low Risk' | 'Moderate Risk' | 'Elevated Risk';
  riskColor: string;
  cardioScore: number;
  metabolicScore: number;
  vitalityScore: number;
  sleepQualityScore: number;
  stressResistanceScore: number;
  biologicalAgeDelta: number; // e.g. -3.2 years or +2.5 years
  primaryDeltas: {
    category: string;
    impact: string;
    action: string;
  }[];
  potentialGain: {
    scoreImprovement: number;
    description: string;
    potentialRiskTier: string;
  };
}

export function calculateHealthRisk(inputs: LifestyleInputs): RiskAnalysis {
  // Activity score (1-5 -> 20-100)
  const activityScore = inputs.physicalActivity * 20;

  // Sleep score (4-10 hrs, optimal 7.5-8.5 hrs)
  let sleepScore = 50;
  if (inputs.sleepHours >= 7 && inputs.sleepHours <= 8.5) {
    sleepScore = 95;
  } else if (inputs.sleepHours >= 6 && inputs.sleepHours < 7) {
    sleepScore = 75;
  } else if (inputs.sleepHours > 8.5 && inputs.sleepHours <= 9.5) {
    sleepScore = 80;
  } else if (inputs.sleepHours >= 5 && inputs.sleepHours < 6) {
    sleepScore = 55;
  } else {
    sleepScore = 35;
  }

  // Nutrition (1-5 -> 20-100)
  const nutritionScore = inputs.nutritionQuality * 20;

  // Smoking penalty (0 = 100, 1 = 65, 2 = 35, 3 = 10)
  const smokingScores = [100, 65, 35, 10];
  const smokingScore = smokingScores[Math.min(inputs.smoking, 3)];

  // Alcohol penalty (0 = 100, 1 = 90, 2 = 60, 3 = 30)
  const alcoholScores = [100, 90, 60, 30];
  const alcoholScore = alcoholScores[Math.min(inputs.alcohol, 3)];

  // Stress resilience (1 = 95, 2 = 80, 3 = 60, 4 = 40, 5 = 20)
  const stressScores = [100, 95, 80, 60, 40, 20];
  const stressResistanceScore = stressScores[Math.min(inputs.stressLevel, 5)];

  // Family history modifier (0 = 95, 1 = 80, 2 = 65, 3 = 50)
  const familyScores = [95, 80, 65, 50];
  const familyScore = familyScores[Math.min(inputs.familyHistoryRisk, 3)];

  // Weighted Cardio Score
  const cardioScore = Math.round(
    activityScore * 0.35 +
    nutritionScore * 0.25 +
    smokingScore * 0.25 +
    sleepScore * 0.15
  );

  // Weighted Metabolic Score
  const metabolicScore = Math.round(
    nutritionScore * 0.35 +
    activityScore * 0.30 +
    sleepScore * 0.20 +
    alcoholScore * 0.15
  );

  // Vitality & Cognitive Score
  const vitalityScore = Math.round(
    sleepScore * 0.40 +
    stressResistanceScore * 0.35 +
    activityScore * 0.25
  );

  // Overall Composite Score (0 - 100)
  const overallScore = Math.round(
    cardioScore * 0.30 +
    metabolicScore * 0.30 +
    vitalityScore * 0.25 +
    familyScore * 0.15
  );

  // Risk Tier Determination
  let riskTier: RiskAnalysis['riskTier'] = 'Moderate Risk';
  let riskColor = '#C89B3C'; // Gold/Amber for moderate
  if (overallScore >= 82) {
    riskTier = 'Optimal';
    riskColor = '#2D5A3F'; // Deep Forest green
  } else if (overallScore >= 68) {
    riskTier = 'Low Risk';
    riskColor = '#4B7354'; // Sage green
  } else if (overallScore >= 50) {
    riskTier = 'Moderate Risk';
    riskColor = '#C89B3C'; // Amber
  } else {
    riskTier = 'Elevated Risk';
    riskColor = '#A34836'; // Muted terracotta
  }

  // Biological Age Delta Estimation
  // 80 is baseline 0. Above 80 reduces bio age by up to 5 yrs; below increases by up to 6 yrs.
  const bioAgeDelta = Number(((80 - overallScore) * 0.18).toFixed(1));

  // Targeted lifestyle recommendations based on lowest sub-scores
  const primaryDeltas: RiskAnalysis['primaryDeltas'] = [];
  if (sleepScore < 70) {
    primaryDeltas.push({
      category: 'Sleep Optimization',
      impact: '+12% Vitality Index',
      action: 'Target 7.5 to 8.5 hours with consistent wind-down cadence to lower systemic inflammation.',
    });
  }
  if (activityScore < 65) {
    primaryDeltas.push({
      category: 'Cardiorespiratory Endurance',
      impact: '+18% Cardio Resilience',
      action: 'Incorporate 150 minutes of moderate zone-2 aerobic movement weekly.',
    });
  }
  if (stressResistanceScore < 60) {
    primaryDeltas.push({
      category: 'Parasympathetic Reset',
      impact: '+14% Nervous System Balance',
      action: 'Daily 10-minute diaphragmatic breathwork or restorative nature walk.',
    });
  }
  if (nutritionScore < 70) {
    primaryDeltas.push({
      category: 'Polyphenol & Fiber Density',
      impact: '+15% Metabolic Stability',
      action: 'Emphasize 30+ diverse plant varieties weekly with lean omega-3 rich proteins.',
    });
  }
  if (inputs.smoking > 0) {
    primaryDeltas.push({
      category: 'Vascular Longevity',
      impact: '+25% Lung & Endothelial Health',
      action: 'Smoking cessation yields noticeable cardiovascular recovery within 30 days.',
    });
  }

  // If already doing well
  if (primaryDeltas.length === 0) {
    primaryDeltas.push({
      category: 'Sustained Preventive Maintenance',
      impact: 'Peak Cellular Health',
      action: 'Your proactive lifestyle demonstrates strong resilience. Keep routine annual checkups.',
    });
  }

  // Calculate Potential Gain (if user optimizes sleep to 8h, activity to level 4+, nutrition to 4+, stress to 2)
  const potentialInputs: LifestyleInputs = {
    physicalActivity: Math.max(inputs.physicalActivity, 4),
    sleepHours: 8,
    nutritionQuality: Math.max(inputs.nutritionQuality, 4),
    smoking: 0,
    alcohol: Math.min(inputs.alcohol, 1),
    stressLevel: Math.min(inputs.stressLevel, 2),
    familyHistoryRisk: inputs.familyHistoryRisk,
  };
  const potentialAnalysis = calculateScoreOnly(potentialInputs);
  const scoreDiff = Math.max(0, potentialAnalysis - overallScore);

  let potentialRiskTier = 'Optimal';
  if (potentialAnalysis >= 82) potentialRiskTier = 'Optimal (Resilient)';
  else if (potentialAnalysis >= 68) potentialRiskTier = 'Low Risk';

  return {
    overallScore,
    riskTier,
    riskColor,
    cardioScore,
    metabolicScore,
    vitalityScore,
    sleepQualityScore: sleepScore,
    stressResistanceScore,
    biologicalAgeDelta: bioAgeDelta,
    primaryDeltas,
    potentialGain: {
      scoreImprovement: scoreDiff,
      description: `Optimizing sleep and zone-2 activity could boost your resilience score by +${scoreDiff} points.`,
      potentialRiskTier,
    },
  };
}

function calculateScoreOnly(inputs: LifestyleInputs): number {
  const activityScore = inputs.physicalActivity * 20;
  let sleepScore = 50;
  if (inputs.sleepHours >= 7 && inputs.sleepHours <= 8.5) sleepScore = 95;
  else if (inputs.sleepHours >= 6 && inputs.sleepHours < 7) sleepScore = 75;
  else sleepScore = 55;

  const nutritionScore = inputs.nutritionQuality * 20;
  const smokingScores = [100, 65, 35, 10];
  const smokingScore = smokingScores[Math.min(inputs.smoking, 3)];
  const alcoholScores = [100, 90, 60, 30];
  const alcoholScore = alcoholScores[Math.min(inputs.alcohol, 3)];
  const stressScores = [100, 95, 80, 60, 40, 20];
  const stressResistanceScore = stressScores[Math.min(inputs.stressLevel, 5)];
  const familyScores = [95, 80, 65, 50];
  const familyScore = familyScores[Math.min(inputs.familyHistoryRisk, 3)];

  const cardio = activityScore * 0.35 + nutritionScore * 0.25 + smokingScore * 0.25 + sleepScore * 0.15;
  const metabolic = nutritionScore * 0.35 + activityScore * 0.30 + sleepScore * 0.20 + alcoholScore * 0.15;
  const vitality = sleepScore * 0.40 + stressResistanceScore * 0.35 + activityScore * 0.25;

  return Math.round(cardio * 0.30 + metabolic * 0.30 + vitality * 0.25 + familyScore * 0.15);
}
