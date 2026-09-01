import { TechnologyCardData } from '../types';

export const TECHNOLOGY_CARDS: TechnologyCardData[] = [
  {
    id: 'tech-iot',
    title: 'Internet of Soil (IoS)',
    badge: 'SENSORS',
    iconName: 'Cpu',
    shortDesc: 'Subterranean wireless sensor networks measuring soil moisture, pH, and nitrogen in real-time.',
    fullDetail: 'Self-powered kinetic soil nodes transmit micro-telemetry using LoRaWAN mesh protocols up to 15 kilometers with 10-year battery life.',
    image: '/images/pexels-cottonbro-4921204.jpg',
    stats: '10,000 Nodes / Sq Mile'
  },
  {
    id: 'tech-robotics',
    title: 'Agricultural Swarm Robotics',
    badge: 'AUTOMATION',
    iconName: 'Bot',
    shortDesc: 'Lightweight solar electric robots working in cooperative swarms to aerate, weed, and prune crops.',
    fullDetail: 'By replacing single heavy diesel harvesters with 20 coordinated electric bots, soil compaction drops to zero while operational uptime reaches 99.4%.',
    image: '/images/pexels-chetanvlad-2600219.jpg',
    stats: '24/7 Continuous Operation'
  },
  {
    id: 'tech-vision',
    title: 'Hyperspectral Computer Vision',
    badge: 'AI EYE',
    iconName: 'Eye',
    shortDesc: 'Short-wave infrared spectral cameras detecting leaf disease, stress, and pest incursions before visible.',
    fullDetail: 'Optical sensors capturing 240 distinct light wavelengths reveal cellular water stress and chlorophyll breakdown weeks before human eyes notice.',
    image: '/images/pexels-marstion-3495966-10875411.jpg',
    stats: '99.2% Pathology Accuracy'
  },
  {
    id: 'tech-drones',
    title: 'Autonomous Drone Hives',
    badge: 'AERIAL',
    iconName: 'Zap',
    shortDesc: 'Fully automated drone nesting stations conducting high-speed aerial thermal and NDVI surveys.',
    fullDetail: 'Weatherproof launch docks recharge drone batteries automatically in 8 minutes while uploading gigabytes of 3D point-cloud canopy models.',
    image: '/images/pexels-vr33s-16999857.jpg',
    stats: '800 Acres Covered / Hr'
  },
  {
    id: 'tech-edge',
    title: 'Field Edge AI Compute',
    badge: 'HARDWARE',
    iconName: 'HardDrive',
    shortDesc: 'Tractor-mounted Neural Processing Units (NPUs) delivering 5ms offline vision inference.',
    fullDetail: 'High-density embedded chips analyze high-frame-rate video feeds directly on machinery chassis without requiring cloud connectivity or internet.',
    image: '/images/pexels-markusspiske-12081657.jpg',
    stats: '5ms Inference Latency'
  },
  {
    id: 'tech-satellites',
    title: 'Synthetic Aperture Radar (SAR)',
    badge: 'ORBITAL',
    iconName: 'Globe',
    shortDesc: 'Cloud-penetrating radar satellite constellations monitoring moisture and biomass through storm systems.',
    fullDetail: 'Unlike optical satellites blinded by clouds, microwave radar bounces off crop canopies continuously day or night through heavy monsoon cloud cover.',
    image: '/images/pexels-george-thomas-2159810613-36308968.jpg',
    stats: 'Global Daily Orbit Revisit'
  },
  {
    id: 'tech-automation',
    title: 'Micro-Fluidic Precision Drip',
    badge: 'IRRIGATION',
    iconName: 'Droplets',
    shortDesc: 'Closed-loop irrigation tubes adjusting water droplet emission down to individual plant roots.',
    fullDetail: 'Acoustic stem sensors trigger micro-valves to release exact milliliters of nutrient solution, reducing water consumption by 52%.',
    image: '/images/pexels-brett-sayles-5087172.jpg',
    stats: '52% Water Waste Reduction'
  }
];
