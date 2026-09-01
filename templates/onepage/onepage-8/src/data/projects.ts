import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'fake-news-detection',
    number: '01',
    title: 'TruthMatrix NLP',
    tagline: 'Transformer-Driven Multi-Modal Misinformation & Fake News Detector',
    description: 'High-throughput real-time misinformation classification engine leveraging RoBERTa fine-tuning, stylistic linguistic embeddings, and stance verification pipelines with dynamic credibility scoring.',
    technologies: ['PyTorch', 'RoBERTa', 'Hugging Face', 'FastAPI', 'spaCy', 'Docker'],
    metrics: [
      { label: 'F1 Score', value: '96.4%' },
      { label: 'Inference Latency', value: '18ms' },
      { label: 'Verified Sources', value: '1.2M+' }
    ],
    category: 'NLP & LLM',
    githubUrl: 'https://github.com/developer/truth-matrix-nlp',
    demoUrl: '#demo-fake-news',
    architectureDetails: {
      modelType: 'Fine-tuned RoBERTa-Large + BiLSTM Attention Head',
      dataset: 'LIAR Benchmark + MultiFC + Custom Curated 2024 Crawl',
      accuracy: '96.4% on out-of-domain validation sets',
      latency: '18ms on TensorRT quantized endpoint',
      pipeline: [
        'Raw text ingestion & stylistic tokenization',
        'Entity extraction & factual stance alignment',
        'Cross-attention contextual veracity score',
        'Linguistic hallucination probability index'
      ]
    },
    visualTheme: 'news',
    status: 'PRODUCTION'
  },
  {
    id: 'medassist-ai',
    number: '02',
    title: 'MedAssist AI Diagnostic',
    tagline: 'Multi-Modal Clinical Diagnostic Assistant & Chest X-Ray Radiologist',
    description: 'Explainable AI diagnostic platform combining DenseNet-121 visual feature maps with Grad-CAM saliency overlays for rapid thoracic pathology triage and automated EHR summarization.',
    technologies: ['TensorFlow', 'DenseNet-121', 'Grad-CAM', 'DICOM', 'OpenCV', 'React'],
    metrics: [
      { label: 'AUC-ROC', value: '0.972' },
      { label: 'Pathology Classes', value: '14 Types' },
      { label: 'Triage Speedup', value: '4.8x' }
    ],
    category: 'Healthcare AI',
    githubUrl: 'https://github.com/developer/medassist-ai-diagnostics',
    demoUrl: '#demo-medassist',
    architectureDetails: {
      modelType: 'DenseNet-121 with Multi-label Sigmoid Focal Loss',
      dataset: 'NIH ChestX-ray14 + CheXpert (224,000+ DICOM images)',
      accuracy: '0.972 Mean AUC across 14 thoracic disease indicators',
      latency: '42ms per high-resolution radiograph inference',
      pipeline: [
        'DICOM histogram normalization & lung field segmentation',
        'Feature extraction via DenseNet convolutional blocks',
        'Grad-CAM heatmap back-propagation for clinician validation',
        'Structured clinical finding report generation'
      ]
    },
    visualTheme: 'medical',
    status: 'RESEARCH'
  },
  {
    id: 'urban-heat-hotspots',
    number: '03',
    title: 'GeoThermal Satellite AI',
    tagline: 'Deep Learning Sentinel-2 Thermal Micro-Hotspot & Climate Predictor',
    description: 'High-resolution Land Surface Temperature (LST) forecasting neural network processing multi-spectral Sentinel-2 and Landsat-8 imagery to detect urban heat islands and quantify canopy mitigation.',
    technologies: ['PyTorch Geo', 'U-Net ResNet50', 'Rasterio', 'GDAL', 'GeoPandas', 'Mapbox GL'],
    metrics: [
      { label: 'Spatial Resolution', value: '10m / px' },
      { label: 'RMSE Error', value: '±0.68°C' },
      { label: 'Coverage Area', value: '50,000 km²' }
    ],
    category: 'Geospatial AI',
    githubUrl: 'https://github.com/developer/geothermal-satellite-ai',
    demoUrl: '#demo-satellite',
    architectureDetails: {
      modelType: 'Attention U-Net with ResNet50 Backbone & Spatio-Temporal Convolutions',
      dataset: 'Copernicus Sentinel-2 Top-Of-Atmosphere + Landsat-8 Thermal TIRS',
      accuracy: '0.92 IoU on extreme thermal hotspot spatial boundary delineation',
      latency: '1.2s per 100km² satellite grid tile',
      pipeline: [
        'Multi-band spectral calibration (NDVI, NDBI, Albedo)',
        'Cloud shadow mask filtering & thermal band interpolation',
        'Attention U-Net spatial feature decoding',
        'Micro-climate mitigation vector synthesis'
      ]
    },
    visualTheme: 'satellite',
    status: 'DEPLOYED'
  },
  {
    id: 'hand-gesture-recognition',
    number: '04',
    title: 'KineticSpatial 3D',
    tagline: 'Sub-Millisecond 21-Joint 3D Hand Skeleton & Spatial Gesture Interface',
    description: 'Edge-optimized real-time 3D hand pose estimation and continuous gesture state-machine for touchless spatial computing, robotics manipulation, and sign-language synthesis.',
    technologies: ['MediaPipe', 'ONNX Runtime', 'WebAssembly', 'Three.js', 'WebWorker', 'TypeScript'],
    metrics: [
      { label: 'Frame Rate', value: '120 FPS' },
      { label: 'Joint Accuracy', value: '99.1%' },
      { label: 'Edge Footprint', value: '2.4 MB' }
    ],
    category: 'Computer Vision',
    githubUrl: 'https://github.com/developer/kinetic-spatial-3d',
    demoUrl: '#demo-hand-gesture',
    architectureDetails: {
      modelType: 'BlazeHand Palm Detector + 3D Landmark Regression Network',
      dataset: 'Rendered Synthetic Hand Mesh + FreiHAND Real Dataset',
      accuracy: '2.8mm mean per-joint 3D Euclidean error',
      latency: '6ms per frame on client-side WebAssembly thread',
      pipeline: [
        'Live optical video feed pre-processing',
        'Single-shot palm detection & bounding anchor normalization',
        '21 3D joint landmark coordinate regression (X, Y, Z)',
        'Temporal Kalman filter gesture velocity classification'
      ]
    },
    visualTheme: 'skeleton',
    status: 'OPEN_SOURCE'
  }
];
