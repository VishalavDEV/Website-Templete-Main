import { ExperienceItem } from '../types';

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-2026',
    year: '2026',
    period: 'PRESENT',
    role: 'Lead AI Systems Engineer & Researcher',
    organization: 'Autonomous Intelligence & Vision Labs',
    location: 'San Francisco / Remote',
    highlight: 'Architecting distributed neural inference engines & multi-modal spatial agents.',
    details: [
      'Engineered low-latency TensorRT model quantization pipelines reducing cloud inference overhead by 47%.',
      'Developed real-time multi-agent orchestrator integrating vision-language grounding with dynamic memory retrieval.',
      'Authored open-source benchmark suites for reproducible edge-device model profiling.'
    ],
    skills: ['PyTorch', 'TensorRT', 'Multi-Modal LLMs', 'Distributed Systems', 'CUDA'],
    metricBadge: '47% Latency Cut'
  },
  {
    id: 'exp-2025',
    year: '2025',
    period: '2024 — 2025',
    role: 'Machine Learning Engineer',
    organization: 'NeuralScale Technologies',
    location: 'Tech Hub',
    highlight: 'Productionized multi-spectral satellite vision models & biomedical telemetry analyzers.',
    details: [
      'Trained attention-augmented segmentation networks over 50,000+ km² of satellite imagery for thermal hotspot detection.',
      'Designed end-to-end continuous learning pipelines using MLflow, Docker, and Kubernetes clusters.',
      'Collaborated with healthcare clinicians to validate DenseNet-121 radiology triage models reaching 0.97 AUC.'
    ],
    skills: ['Computer Vision', 'FastAPI', 'MLOps', 'Docker', 'Kubernetes'],
    metricBadge: '0.972 AUC Score'
  },
  {
    id: 'exp-2024',
    year: '2024',
    period: '2023 — 2024',
    role: 'AI / Full Stack Developer',
    organization: 'Cognitive Web Innovations',
    location: 'Remote',
    highlight: 'Built interactive 3D WebGL data exploration tools & real-time NLP classification platforms.',
    details: [
      'Developed interactive Three.js neural topology visualizers for high-dimensional embedding inspection.',
      'Engineered FastAPI backends serving transformer sentiment and veracity analyzers at sub-20ms latencies.',
      'Created custom React and TypeScript components for experimental AI user interfaces.'
    ],
    skills: ['Three.js', 'WebGL', 'React', 'FastAPI', 'spaCy', 'TypeScript'],
    metricBadge: '18ms Inference'
  },
  {
    id: 'exp-2022',
    year: '2022',
    period: '2020 — 2024',
    role: 'B.S. in Computer Science (AI & ML Focus)',
    organization: 'University of Technology & Computing',
    location: 'Academic Campus',
    highlight: 'Graduated with Highest Distinction • Specialization in Deep Learning, Algorithms & Computer Vision.',
    details: [
      'Published undergraduate thesis on "Optimized Saliency Backpropagation in Dense Convolutional Networks".',
      'President of Artificial Intelligence & Competitive Coding Society; organized 10+ hackathons and workshops.',
      'Coursework: Advanced Linear Algebra, Probability & Stochastic Processes, Neural Networks, Operating Systems, Database Internals.'
    ],
    skills: ['Algorithms', 'Data Structures', 'Linear Algebra', 'Python', 'C++', 'Computer Architecture'],
    metricBadge: 'Summa Cum Laude'
  }
];
