import { TimelineStep } from '../types';

export const FARM_TIMELINE: TimelineStep[] = [
  {
    time: '06:00',
    title: 'AI Weather & Soil Diagnostics Briefing',
    stage: 'DAWN SYNCHRONIZATION',
    image: '/images/pexels-bulat843-1243575272-35072831.jpg',
    description: 'Before dawn breaks, satellite orbital data feeds directly into the farm hub, evaluating nocturnal dew point accumulation, soil moisture levels, and localized wind trends.',
    metrics: [
      { label: 'SOIL TEMP', value: '18.4 °C' },
      { label: 'NOCTURNAL DEW', value: '1.2 mm' },
      { label: 'BATTERY CHARGE', value: '100% Solar' }
    ]
  },
  {
    time: '08:00',
    title: 'Autonomous Equipment Field Deployment',
    stage: 'FIELD DISPATCH',
    image: '/images/pexels-kindelmedia-8566538.jpg',
    description: 'Electric autonomous tractors emerge from solar docks. Operating along centimeter-accurate RTK GPS tracks, they begin targeted field aeration without soil compaction.',
    metrics: [
      { label: 'GPS ACCURACY', value: '< 1.5 cm' },
      { label: 'FLEET UNITS', value: '6 Tractors' },
      { label: 'CO2 EMISSIONS', value: '0.00 kg' }
    ]
  },
  {
    time: '11:00',
    title: 'Drone Swarm Canopy & Biomass Scanning',
    stage: 'MID-DAY OVERFLIGHT',
    image: '/images/pexels-vr33s-16999857.jpg',
    description: 'A hive of 12 multispectral drones launches to survey 800 acres in 40 minutes, analyzing crop nitrogen levels and flagging individual weeds for laser treatment.',
    metrics: [
      { label: 'AREA SCANNED', value: '800 Acres' },
      { label: 'RESOLUTION', value: '0.5 cm/px' },
      { label: 'FLIGHT TIME', value: '38 mins' }
    ]
  },
  {
    time: '14:00',
    title: 'AI Micro-Pathogen & Disease Detection',
    stage: 'INFERENCE ENGINE',
    image: '/images/pexels-marstion-3495966-10875411.jpg',
    description: 'Deep neural networks analyze drone footage, spotting early fungal spore stress in Row 42. Targeted micro-dosing sprayers are dispatched automatically.',
    metrics: [
      { label: 'INFERENCE SPEED', value: '14 ms/frame' },
      { label: 'FALSE POSITIVE', value: '< 0.01%' },
      { label: 'SPRAY RADIUS', value: '0.4 m' }
    ]
  },
  {
    time: '17:00',
    title: 'Dynamic Yield & Harvest Prediction',
    stage: 'ANALYTICS & YIELD',
    image: '/images/pexels-quang-nguyen-vinh-222549-2158048.jpg',
    description: 'Combining optical biomass thickness with grain pod counts, the neural predictor updates harvest yield estimations and sends dispatch requests to regional processing centers.',
    metrics: [
      { label: 'PROJECTED YIELD', value: '14.2 T/Ha' },
      { label: 'HARVEST DATE', value: 'SEPT 12' },
      { label: 'MARKET VALUE', value: '+14% Premium' }
    ]
  },
  {
    time: '20:00',
    title: 'Farm Intelligence Report & Ledger Sync',
    stage: 'NIGHT LOGISTICS',
    image: '/images/pexels-cookiecutter-17489150.jpg',
    description: 'Robotic machinery returns to solar docking bays for automated diagnostics. Daily resource logs, carbon sequestration data, and soil metrics sync to the decentralized ledger.',
    metrics: [
      { label: 'DAILY DATA', value: '142 GB' },
      { label: 'ENERGY GENERATED', value: '420 kWh' },
      { label: 'SYSTEM HEALTH', value: '99.98%' }
    ]
  }
];
