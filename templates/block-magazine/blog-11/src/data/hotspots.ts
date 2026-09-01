import { SensorHotspot } from '../types';

export const FARM_HOTSPOTS: SensorHotspot[] = [
  {
    id: 'hs-soil',
    name: 'SOIL MATRIX ARRAY',
    category: 'SOIL',
    x: 28,
    y: 72,
    shortDesc: 'Deep subterranean volumetric moisture & nitrate sensor cluster.',
    telemetry: {
      status: 'OPTIMAL',
      metricName: 'Moisture Volatility Index',
      value: '42.8% VWC',
      trend: '+2.4% (Optimal Field Capacity)',
      insight: 'Soil microbial activity elevated. Nitrogen uptake balanced across 30cm depth horizon.'
    }
  },
  {
    id: 'hs-water',
    name: 'CLOSED-LOOP DRIP NODE',
    category: 'WATER',
    x: 48,
    y: 58,
    shortDesc: 'Acoustic stem transducer and micro-fluidic irrigation valve.',
    telemetry: {
      status: 'OPTIMAL',
      metricName: 'Xylem Flow Velocity',
      value: '4.2 cm/hr',
      trend: 'No cavitation detected',
      insight: 'Drip emitters pulsating at 12ml/min micro-bursts to eliminate evapotranspiration waste.'
    }
  },
  {
    id: 'hs-crop',
    name: 'CANOPY HYPERSPECTRAL EYE',
    category: 'CROP',
    x: 62,
    y: 42,
    shortDesc: 'Multispectral NDVI leaf camera scanning chlorophyll fluorescence.',
    telemetry: {
      status: 'OPTIMAL',
      metricName: 'Chlorophyll Density (NDVI)',
      value: '0.86 NDVI',
      trend: '+0.04 vs 7-day avg',
      insight: 'Leaf surface free of fungal spore colonization. Photosynthetic efficiency operating at peak.'
    }
  },
  {
    id: 'hs-weather',
    name: 'MICRO-CLIMATE WEATHER POD',
    category: 'WEATHER',
    x: 82,
    y: 26,
    shortDesc: 'Ultra-local barometric, wind vector, and solar radiation radar station.',
    telemetry: {
      status: 'WARNING',
      metricName: 'Incoming Wind Vector',
      value: '18 km/h NW',
      trend: 'Barometric drop expected in 3h',
      insight: 'Precipitation probability 78% at 17:30. Automated drip irrigation paused accordingly.'
    }
  },
  {
    id: 'hs-yield',
    name: 'PREDICTIVE HARVEST INDEX',
    category: 'YIELD',
    x: 18,
    y: 35,
    shortDesc: 'AI yield engine projecting harvest tonnage and grain weight.',
    telemetry: {
      status: 'OPTIMAL',
      metricName: 'Target Yield Forecast',
      value: '14.2 Tons/Ha',
      trend: '+18% above regional baseline',
      insight: 'Expected maturity date: Sept 12. Automated harvest combine pre-booked and scheduled.'
    }
  }
];
