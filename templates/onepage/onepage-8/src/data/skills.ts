import { SkillNode } from '../types';

export const SKILLS_DATA: SkillNode[] = [
  {
    id: 'python',
    name: 'Python',
    category: 'Core AI/ML',
    level: 98,
    connections: ['ml', 'dl', 'pytorch', 'fastapi', 'numpy'],
    description: 'Primary computational language for scientific computing, neural architectures, asynchronous microservices, and mathematical modeling.',
    color: '#38bdf8',
    position: [-2.2, 1.2, 0.4]
  },
  {
    id: 'ml',
    name: 'Machine Learning',
    category: 'Core AI/ML',
    level: 95,
    connections: ['python', 'scikit', 'pandas', 'numpy', 'deeplearning'],
    description: 'Supervised, unsupervised, ensemble methods (XGBoost, LightGBM), statistical inference, cross-validation & hyperparameter optimization.',
    color: '#06b6d4',
    position: [-1.4, 2.1, -0.6]
  },
  {
    id: 'deeplearning',
    name: 'Deep Learning',
    category: 'Deep Learning',
    level: 94,
    connections: ['pytorch', 'tensorflow', 'computervision', 'transformers'],
    description: 'Transformers, Convolutions, Diffusion models, Recurrent networks, Attention mechanisms, and latent space representations.',
    color: '#818cf8',
    position: [0.2, 2.5, 0.8]
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    category: 'Deep Learning',
    level: 96,
    connections: ['python', 'deeplearning', 'computervision', 'transformers'],
    description: 'Custom autograd layers, distributed training (DDP), TorchScript, TorchVision, and production quantization pipelines.',
    color: '#f97316',
    position: [1.8, 1.6, -0.4]
  },
  {
    id: 'computervision',
    name: 'Computer Vision',
    category: 'Vision & Data',
    level: 92,
    connections: ['deeplearning', 'pytorch', 'opencv', 'threejs'],
    description: 'Object detection (YOLOv8), semantic segmentation (U-Net), 3D pose estimation, optical flow, and feature descriptors.',
    color: '#22c55e',
    position: [2.4, 0.2, 0.7]
  },
  {
    id: 'transformers',
    name: 'LLMs & NLP',
    category: 'Deep Learning',
    level: 91,
    connections: ['deeplearning', 'pytorch', 'python', 'fastapi'],
    description: 'BERT/RoBERTa architectures, vector embeddings, RAG pipelines, prompt engineering, and fine-tuning with LoRA/QLoRA.',
    color: '#c084fc',
    position: [1.9, -1.5, -0.5]
  },
  {
    id: 'scikit',
    name: 'Scikit-learn',
    category: 'Core AI/ML',
    level: 95,
    connections: ['ml', 'numpy', 'pandas', 'python'],
    description: 'Dimensionality reduction (PCA, t-SNE, UMAP), clustering (HDBSCAN), classification metrics, and custom pipeline transformers.',
    color: '#fbbf24',
    position: [-2.0, -1.4, 0.5]
  },
  {
    id: 'pandas',
    name: 'Pandas',
    category: 'Vision & Data',
    level: 96,
    connections: ['scikit', 'numpy', 'python', 'sql'],
    description: 'High-speed tabular vectorization, multi-index aggregation, temporal data manipulation, and geospatial data processing.',
    color: '#34d399',
    position: [-1.2, -2.3, -0.6]
  },
  {
    id: 'numpy',
    name: 'NumPy',
    category: 'Core AI/ML',
    level: 97,
    connections: ['python', 'ml', 'pandas', 'scikit'],
    description: 'N-dimensional matrix operations, broadcasting, linear algebra decompositions, and vectorized algorithm acceleration.',
    color: '#60a5fa',
    position: [-0.2, -2.6, 0.4]
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'Engineering',
    level: 93,
    connections: ['python', 'react', 'docker', 'sql'],
    description: 'High-performance asynchronous REST & WebSocket inference endpoints with Pydantic validation and OpenAPI generation.',
    color: '#14b8a6',
    position: [1.1, -2.3, 0.6]
  },
  {
    id: 'react',
    name: 'React & TS',
    category: 'Engineering',
    level: 94,
    connections: ['threejs', 'fastapi', 'nodejs', 'git'],
    description: 'Interactive dashboard state architectures, custom hooks, performant render cycles, and TypeScript strict type safety.',
    color: '#67e8f9',
    position: [2.5, -0.9, -0.7]
  },
  {
    id: 'threejs',
    name: 'Three.js / WebGL',
    category: 'Engineering',
    level: 90,
    connections: ['react', 'computervision'],
    description: 'Custom GLSL shaders, procedural mesh generation, 3D math & linear algebra transformations, and GPU particle physics.',
    color: '#ec4899',
    position: [2.2, 1.8, 0.8]
  },
  {
    id: 'sql',
    name: 'SQL & Vector DBs',
    category: 'Vision & Data',
    level: 89,
    connections: ['pandas', 'fastapi', 'python'],
    description: 'PostgreSQL, pgvector, Pinecone, complex relational joins, indexing strategies, and vector similarity indexing.',
    color: '#a3e635',
    position: [-2.6, 0.1, -0.8]
  },
  {
    id: 'git',
    name: 'Git & MLOps',
    category: 'Engineering',
    level: 93,
    connections: ['react', 'fastapi', 'python', 'docker'],
    description: 'CI/CD automated testing, DVC data versioning, MLflow experiment tracking, Docker containerization, and Git workflows.',
    color: '#f43f5e',
    position: [0.0, 0.0, -1.8]
  }
];
