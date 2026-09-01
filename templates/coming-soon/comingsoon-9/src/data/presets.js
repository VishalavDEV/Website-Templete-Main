import heroTechAi from '../assets/images/hero_tech_ai.jpg';
import heroSaasPlatform from '../assets/images/hero_saas_platform.jpg';
import heroEcomLuxury from '../assets/images/hero_ecom_luxury.jpg';
import heroCreativeAgency from '../assets/images/hero_creative_agency.jpg';
import heroMobileApp from '../assets/images/hero_mobile_app.jpg';
import heroPhysicalHardware from '../assets/images/hero_physical_hardware.jpg';

export const PRODUCT_CATEGORIES = {
  tech_ai: {
    id: 'tech_ai',
    name: 'Apex Neural',
    badge: '⚡ Next-Gen Autonomous AI Engine',
    categoryLabel: 'Tech / AI Startup',
    headline: 'The First Autonomous Neuromorphic Intelligence Engine',
    tagline: 'Orchestrating multi-modal neural weights at sub-millisecond latency. Built for next-generation frontier intelligence.',
    image: heroTechAi,
    initialWaitlistCount: 14820,
    vipSpotsRemaining: 48,
    activeVisitors: 182,
    readinessPercent: 82,
    accentGlow: 'rgba(56, 189, 248, 0.4)',
    stats: [
      { label: 'Compute Efficiency', value: '42x Faster' },
      { label: 'Inference Latency', value: '<1.2ms' },
      { label: 'Parameters Supported', value: '1.4 Trillion' }
    ],
    segmentationOptions: [
      '⚡ Developer API & SDK',
      '💼 Enterprise Private Cloud',
      '🧪 Frontier Research Access',
      '🚀 Launch Notification'
    ],
    hotspots: [
      { id: 1, x: 50, y: 48, title: 'Neuromorphic Core Matrix', desc: 'Direct silicon synaptic interconnect delivering 400 TFLOPS per watt.' },
      { id: 2, x: 28, y: 35, title: 'Quantum Entropy Harvester', desc: 'Non-deterministic seed engine ensuring unbreakable zero-knowledge weight training.' },
      { id: 3, x: 74, y: 62, title: 'Holographic Bus', desc: 'Optical 100Gbps inter-cluster data mesh with real-time gradient replication.' }
    ],
    features: [
      { icon: 'Cpu', title: 'Sub-Millisecond Inference', desc: 'Engineered from bare metal for zero-overhead tensor computations across heterogeneous clusters.' },
      { icon: 'ShieldCheck', title: 'Verifiable Zero-Knowledge', desc: 'Cryptographically proven neural outputs without exposing underlying client datasets.' },
      { icon: 'Zap', title: 'Adaptive Weight Pruning', desc: 'Dynamic runtime compression that reduces memory footprint by 65% with zero accuracy drift.' },
      { icon: 'Terminal', title: 'Native Python & Rust SDKs', desc: 'Drop-in integration with PyTorch, JAX, and custom CUDA pipelines with single-line imports.' }
    ],
    milestones: [
      { phase: 'Phase 01', title: 'Kernel Architecture & Compiler', status: 'completed', date: 'Q1 2026' },
      { phase: 'Phase 02', title: 'Closed Alpha Cluster Benchmark', status: 'completed', date: 'Q2 2026' },
      { phase: 'Phase 03', title: 'Private Enterprise Waitlist Rollout', status: 'current', date: 'Q3 2026' },
      { phase: 'Phase 04', title: 'Global Public Mainnet & API Launch', status: 'upcoming', date: 'Q4 2026' }
    ],
    faqs: [
      { q: 'How does Apex Neural compare to standard transformer clusters?', a: 'Apex combines neuromorphic hardware acceleration with adaptive dynamic sparsity, achieving 42x higher energy efficiency.' },
      { q: 'When will private beta keys be distributed?', a: 'Private API access keys will be released in rolling cohorts starting with the top 500 waitlist positions next month.' },
      { q: 'Are on-premise air-gapped deployments supported?', a: 'Yes, enterprise licenses include custom bare-metal Kubernetes deployment manifests and dedicated security audits.' }
    ]
  },

  saas: {
    id: 'saas',
    name: 'CloudScale OS',
    badge: '☁️ Unified Telemetry & Observability',
    categoryLabel: 'SaaS Platform',
    headline: 'Unified Telemetry & Autonomous Infrastructure Control',
    tagline: 'One single pane of glass for 100M+ real-time microservice events, distributed traces, and AI-driven root-cause remediation.',
    image: heroSaasPlatform,
    initialWaitlistCount: 8940,
    vipSpotsRemaining: 32,
    activeVisitors: 124,
    readinessPercent: 78,
    accentGlow: 'rgba(99, 102, 241, 0.4)',
    stats: [
      { label: 'Event Ingestion', value: '50M+ /sec' },
      { label: 'Mean Time to Detect', value: '1.4s' },
      { label: 'Cost Reduction', value: '58% Avg' }
    ],
    segmentationOptions: [
      '🚀 Devops / SRE Team',
      '💼 Enterprise Architecture',
      '📊 FinOps Cost Optimization',
      '🔔 General Beta Updates'
    ],
    hotspots: [
      { id: 1, x: 49, y: 38, title: 'Mesh Topology Graph', desc: 'Real-time 3D topology mapper visualizing latency hot-spots and service dependency cascades.' },
      { id: 2, x: 22, y: 28, title: 'Predictive Anomaly HUD', desc: 'Machine-learning engine flagging memory degradation 4 hours before threshold breach.' },
      { id: 3, x: 78, y: 34, title: 'Cost Velocity Meter', desc: 'Instant granular breakdown of AWS/GCP cloud egress down to specific API endpoints.' }
    ],
    features: [
      { icon: 'Activity', title: 'Autonomous Remediation', desc: 'Self-healing playbooks trigger automated rollback or pod scaling before user experience degrades.' },
      { icon: 'Layers', title: 'Zero-Instrumentation Agent', desc: 'Kernel-level eBPF probes gather metrics and traces automatically without modifying application code.' },
      { icon: 'Search', title: 'Natural Language Querying', desc: 'Ask questions in plain English: "Why did checkout latency spike in EU-West at 2:14 PM?"' },
      { icon: 'Lock', title: 'SOC2 & HIPAA Compliant', desc: 'End-to-end data tokenization with configurable local data residency rules.' }
    ],
    milestones: [
      { phase: 'Phase 01', title: 'eBPF Kernel Collector Engine', status: 'completed', date: 'Q1 2026' },
      { phase: 'Phase 02', title: 'Multi-Cloud Gateway Integration', status: 'completed', date: 'Q2 2026' },
      { phase: 'Phase 03', title: 'Enterprise Early Adopter Beta', status: 'current', date: 'Q3 2026' },
      { phase: 'Phase 04', title: 'General Availability Launch', status: 'upcoming', date: 'Q4 2026' }
    ],
    faqs: [
      { q: 'Does CloudScale OS require code changes or SDK additions?', a: 'No, our lightweight eBPF collector captures HTTP, gRPC, and SQL traces natively at the Linux kernel level.' },
      { q: 'How does the pricing scale for high volume ingest?', a: 'Pricing is strictly tier-capped by retained analytics rather than raw ingested telemetry, cutting observability bills in half.' }
    ]
  },

  ecommerce: {
    id: 'ecommerce',
    name: 'Aura Noir',
    badge: '✦ Limited Horology Collection 01',
    categoryLabel: 'Luxury E-Commerce',
    headline: 'Bespoke Horology & Architectural Obsidian Luxury',
    tagline: 'Hand-finished DLC titanium chronographs paired with certified Swiss tourbillon movements. Strictly limited to 500 numbered pieces worldwide.',
    image: heroEcomLuxury,
    initialWaitlistCount: 21350,
    vipSpotsRemaining: 18,
    activeVisitors: 295,
    readinessPercent: 91,
    accentGlow: 'rgba(212, 175, 55, 0.4)',
    stats: [
      { label: 'Production Run', value: '500 Units' },
      { label: 'Titanium Grade', value: 'Grade 5 DLC' },
      { label: 'Power Reserve', value: '72 Hours' }
    ],
    segmentationOptions: [
      '✦ Private Collector Allocation',
      '📦 Numbered Edition Reservation',
      '✨ Private Salon Exhibition',
      '🔔 Drop Notification'
    ],
    hotspots: [
      { id: 1, x: 48, y: 46, title: 'Obsidian Matte Dial', desc: 'Nanotube light-absorbing coating providing total reflection elimination and pure contrast.' },
      { id: 2, x: 58, y: 22, title: 'Gold Fluted Crown', desc: '18K micro-machined champagne gold tactile crown with double sapphire seal.' },
      { id: 3, x: 26, y: 48, title: 'Articulated DLC Bracelet', desc: 'Ergonomically contoured titanium links with micro-adjustable magnetic deployment clasp.' }
    ],
    features: [
      { icon: 'Watch', title: 'Swiss Tourbillon Calibre', desc: 'Regulated to ±1.5 seconds per day with Geneva Seal acoustic dampening suspension.' },
      { icon: 'Award', title: 'Digital Certificate of Authenticity', desc: 'NFC cryptographic microchip embedded inside sapphire caseback linking to decentralized registry.' },
      { icon: 'Sparkles', title: 'Hand-Polished Chamfers', desc: 'Over 80 hours of master artisan hand-anglage per case in our Geneva manufacture.' },
      { icon: 'Package', title: 'Monolithic Collector Case', desc: 'Machined from solid aircraft-grade anodized aluminum with integrated magnetic watch winder.' }
    ],
    milestones: [
      { phase: 'Phase 01', title: 'Calibre Prototype Calibration', status: 'completed', date: 'Q1 2026' },
      { phase: 'Phase 02', title: 'Case CNC Machining & DLC Testing', status: 'completed', date: 'Q2 2026' },
      { phase: 'Phase 03', title: 'Private VIP Allocation Window', status: 'current', date: 'Q3 2026' },
      { phase: 'Phase 04', title: 'Global Public Drop & Shipment', status: 'upcoming', date: 'Q4 2026' }
    ],
    faqs: [
      { q: 'Will additional units be manufactured after the 500 piece run?', a: 'No. The Edition 01 tooling and moulds will be retired permanently to guarantee absolute collector exclusivity.' },
      { q: 'How does the reservation allocation work?', a: 'Waitlist members receive priority reservation windows 48 hours ahead of the public announcement.' }
    ]
  },

  creative_agency: {
    id: 'creative_agency',
    name: 'Studio Nova',
    badge: '✧ Avant-Garde Spatial Design',
    categoryLabel: 'Creative Agency',
    headline: 'Defying Visual Conventions with Spatial Brand Systems',
    tagline: 'We synthesize generative 3D aesthetics, custom typographic kinetics, and interactive WebGL experiences for tomorrow’s cultural icons.',
    image: heroCreativeAgency,
    initialWaitlistCount: 6420,
    vipSpotsRemaining: 12,
    activeVisitors: 98,
    readinessPercent: 88,
    accentGlow: 'rgba(236, 72, 153, 0.4)',
    stats: [
      { label: 'Awwwards Won', value: '38 Global' },
      { label: 'Client Brand Value', value: '$4.8B+' },
      { label: 'Quarterly Cohorts', value: '4 Clients' }
    ],
    segmentationOptions: [
      '🎨 Brand Re-design Inquiry',
      '🌐 Interactive WebGL Experience',
      '📽️ 3D Motion & Spatial Assets',
      '💌 Creative Quarterly Journal'
    ],
    hotspots: [
      { id: 1, x: 52, y: 44, title: 'Generative Liquid Chrome', desc: 'Real-time fluid simulation reacting dynamically to client brand acoustics and rhythm.' },
      { id: 2, x: 32, y: 32, title: 'Kinetic Variable Typography', desc: 'Custom typeface family with multi-axis responsive weight and optical distortion.' },
      { id: 3, x: 72, y: 55, title: 'Spatial Lighting Rig', desc: 'Virtual raytraced studio environment creating unforgettable interactive product storytelling.' }
    ],
    features: [
      { icon: 'Palette', title: 'Custom Generative Systems', desc: 'We build proprietary interactive design tools for your internal marketing teams.' },
      { icon: 'Compass', title: 'Immersive Spatial 3D', desc: 'WebGL, WebGPU, and Three.js environments tailored for 60fps mobile and desktop performance.' },
      { icon: 'Flame', title: 'Bold Cultural Positioning', desc: 'Uncompromising design language that commands industry attention and viral press.' },
      { icon: 'Share2', title: 'End-to-End Campaign Rollout', desc: 'From initial design sprints to global billboard 3D anamorphic takeovers and launch keynotes.' }
    ],
    milestones: [
      { phase: 'Phase 01', title: 'Curated Retrospective Archive', status: 'completed', date: 'Q1 2026' },
      { phase: 'Phase 02', title: 'Studio Showcase 3.0 Engine', status: 'completed', date: 'Q2 2026' },
      { phase: 'Phase 03', title: 'Early Commission Booking Window', status: 'current', date: 'Q3 2026' },
      { phase: 'Phase 04', title: 'Global Public Showcase Reveal', status: 'upcoming', date: 'Q4 2026' }
    ],
    faqs: [
      { q: 'How many client commissions does Studio Nova accept?', a: 'To maintain extreme craft quality, we partner with only 4 visionary brands per quarter.' },
      { q: 'What is the typical turnaround time for a full rebrand?', a: 'Our flagship 12-week design sprint includes brand identity, custom typography, 3D assets, and interactive web deployment.' }
    ]
  },

  mobile_app: {
    id: 'mobile_app',
    name: 'Pulse Orbit',
    badge: '📱 Spatial Circadian Intelligence',
    categoryLabel: 'Mobile App',
    headline: 'Sync Your Biology with Circadian Spatial Intelligence',
    tagline: 'Continuous heart-rate variability, neural sleep stages, and metabolic energy forecasting wrapped in an otherworldly spatial interface.',
    image: heroMobileApp,
    initialWaitlistCount: 38400,
    vipSpotsRemaining: 75,
    activeVisitors: 410,
    readinessPercent: 86,
    accentGlow: 'rgba(168, 85, 247, 0.4)',
    stats: [
      { label: 'Prediction Accuracy', value: '99.4%' },
      { label: 'Battery Overhead', value: '<1.8% /day' },
      { label: 'Pre-Registrations', value: '38K+' }
    ],
    segmentationOptions: [
      '📲 iOS TestFlight Early Beta',
      '🤖 Android Early Access',
      '⌚ Apple Watch / Oura Sync',
      '🚀 Launch Day Push'
    ],
    hotspots: [
      { id: 1, x: 54, y: 38, title: 'Bio-Rhythm Orbit Core', desc: 'Real-time triple ring visualizer tracking Circadian Energy, Focus Capacity, and Nervous System Recovery.' },
      { id: 2, x: 44, y: 64, title: 'Predictive Energy Curve', desc: 'Hourly energy forecasts forecasting cognitive peak performance windows.' },
      { id: 3, x: 62, y: 18, title: 'Cellular Neural Sync', desc: 'Sub-second background synchronization with Apple HealthKit, Ultra-wideband, and continuous CGMs.' }
    ],
    features: [
      { icon: 'Smartphone', title: 'Zero Friction Micro-Widgets', desc: 'Glanceable live activities on your lockscreen with predictive sleep countdowns and focus alerts.' },
      { icon: 'Heart', title: 'Autonomous Nervous System AI', desc: 'Micro-vibration haptic breathing guidance triggers instant parasympathetic recovery.' },
      { icon: 'Sun', title: 'Solar Geometry Alignment', desc: 'Calculates optimal daylight exposure and caffeine cutoff times based on your exact GPS coordinates.' },
      { icon: 'Lock', title: 'On-Device Secure Enclave', desc: 'All biometric health metrics are encrypted and analyzed exclusively on your local device.' }
    ],
    milestones: [
      { phase: 'Phase 01', title: 'HealthKit Biomarker Engine', status: 'completed', date: 'Q1 2026' },
      { phase: 'Phase 02', title: 'Circadian Predictive Algorithm', status: 'completed', date: 'Q2 2026' },
      { phase: 'Phase 03', title: 'Closed TestFlight Beta Wave 1', status: 'current', date: 'Q3 2026' },
      { phase: 'Phase 04', title: 'App Store & Google Play Launch', status: 'upcoming', date: 'Q4 2026' }
    ],
    faqs: [
      { q: 'Which wearables are supported at launch?', a: 'Apple Watch Series 6+, Oura Ring Gen 3+, Whoop 4.0, and Garmin connect devices.' },
      { q: 'Will Pulse Orbit offer a lifetime founder membership?', a: 'Yes, the first 1,000 waitlist signups who share with 3 friends unlock a free Lifetime Founder status.' }
    ]
  },

  hardware: {
    id: 'hardware',
    name: 'OmniSphere XR',
    badge: '🛸 Acoustic Levitation Speaker',
    categoryLabel: 'Physical Product Launch',
    headline: 'Magnetic Levitation Meets 360° Lossless Spatial Acoustics',
    tagline: 'Machined titanium housing floating in zero-friction electromagnetic suspension. Delivering room-filling 192kHz/24-bit holographic sound.',
    image: heroPhysicalHardware,
    initialWaitlistCount: 16750,
    vipSpotsRemaining: 24,
    activeVisitors: 215,
    readinessPercent: 74,
    accentGlow: 'rgba(245, 158, 11, 0.4)',
    stats: [
      { label: 'Frequency Range', value: '18Hz - 42kHz' },
      { label: 'Output Power', value: '380W RMS' },
      { label: 'Magnetic Suspension', value: '100% Zero-Touch' }
    ],
    segmentationOptions: [
      '🎁 Super Early Bird 40% Off',
      '🎧 Audiophile Collector Batch',
      '📦 Global Kickstarter Launch',
      '🔔 Backer Update Newsletter'
    ],
    hotspots: [
      { id: 1, x: 50, y: 44, title: 'Beryllium Acoustic Driver', desc: 'Ultra-rigid beryllium dome diaphragm capable of zero distortion across entire harmonic spectrum.' },
      { id: 2, x: 50, y: 78, title: 'MagLev Charging Dock', desc: 'Inductive wireless power transfer with continuous 360-degree silent electromagnetic levitation.' },
      { id: 3, x: 50, y: 22, title: 'Micro-Perforated Shell', desc: 'Precision CNC-drilled acoustic matrix optimized via finite element fluid analysis.' }
    ],
    features: [
      { icon: 'Volume2', title: 'Room-Adaptive Beamforming', desc: '16 integrated MEMS microphones scan your room geometry every 60 seconds to calibrate acoustic reflections.' },
      { icon: 'Radio', title: 'Lossless Wi-Fi 7 & Bluetooth 5.4', desc: 'High-res audio streaming with Apple AirPlay 2, Spotify Connect, Roon Ready, and TIDAL Max.' },
      { icon: 'BatteryCharging', title: '24-Hour Battery or Constant Dock', desc: 'Take the sphere off the levitation dock and carry audiophile-grade sound anywhere in your home.' },
      { icon: 'Sliders', title: 'Haptic Rotary Touch Controls', desc: 'Smooth brass capacitive ring allows intuitive gesture-based volume sweeps and source switching.' }
    ],
    milestones: [
      { phase: 'Phase 01', title: 'Acoustic Chamber & Driver Tuning', status: 'completed', date: 'Q1 2026' },
      { phase: 'Phase 02', title: 'Electromagnetic Base Certification', status: 'completed', date: 'Q2 2026' },
      { phase: 'Phase 03', title: 'Tooling & DVT Production Batch', status: 'current', date: 'Q3 2026' },
      { phase: 'Phase 04', title: 'Global Crowdfunding & Delivery', status: 'upcoming', date: 'Q4 2026' }
    ],
    faqs: [
      { q: 'What happens if there is a sudden power outage while levitating?', a: 'Our fail-safe electromagnet slowly and softly lowers the sphere onto a padded silicone landing ring.' },
      { q: 'Can two OmniSphere units be paired for stereo?', a: 'Yes! Instant stereo pairing creates an expansive 3D acoustic soundstage with lossless sync.' }
    ]
  }
};

export const STYLE_DIRECTIONS = [
  { id: 'immersive', label: 'Immersive 3D Canvas', desc: 'WebGL matrix, interactive velocity particles, sci-fi cyber glows' },
  { id: 'minimalist', label: 'Minimalist Editorial', desc: 'Typography-driven, architectural grids, subtle monochrome precision' },
  { id: 'gradient', label: 'Bold Neo-Cyber Glass', desc: 'Vibrant chromatic auroras, flowing glass cards, dynamic light bursts' }
];

export const TRANSLATIONS = {
  en: {
    notifyMe: 'Notify Me at Launch',
    joiningWaitlist: 'Securing Your Priority Spot...',
    joinedSuccess: 'You Are on the Priority Waitlist!',
    queueRank: 'Your Global Rank',
    peopleBehind: 'people registered behind you',
    shareToMoveUp: 'Move up the waitlist! Share your unique referral link to unlock instant beta perks:',
    copyLink: 'Copy Link',
    copied: 'Copied!',
    spamProtection: 'Anti-Spam Verified',
    instantAccess: 'Unlock Priority Wave 1 Access',
    enterEmail: 'Enter your work or personal email...',
    targetLaunch: 'Official Global Launch In',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    timezoneAuto: 'Timezone Auto-Detected',
    readinessStatus: 'Launch Readiness',
    interactivePreview: 'Interactive Feature Hotspots',
    clickHotspots: 'Click glowing pins on the product visual below to explore architectural breakthroughs:',
    pressTitle: 'Backed and Featured by Industry Leaders',
    vipSpotsLeft: 'VIP Founder Slots Remaining',
    liveViewers: 'people currently viewing this page',
    selectInterests: 'Personalize Your Early Access Experience:',
    rewardTier1: '1 Share: +50 Spots Bump',
    rewardTier2: '3 Shares: Instant Beta Key',
    rewardTier3: '5 Shares: Lifetime VIP Founder Pass'
  },
  ar: {
    notifyMe: 'أشعرني عند الإطلاق الرسمي',
    joiningWaitlist: 'جاري تأمين مقعدك المميز...',
    joinedSuccess: 'تم تسجيلك بنجاح في قائمة الانتظار ذات الأولوية!',
    queueRank: 'ترتيبك العالمي في القائمة',
    peopleBehind: 'شخص مسجل بعدك حالياً',
    shareToMoveUp: 'تقدم في الترتيب! شارك رابط الإحالة الخاص بك للحصول على وصول مبكر فوري:',
    copyLink: 'نسخ الرابط',
    copied: 'تم النسخ!',
    spamProtection: 'حماية موثوقة ضد البريد العشوائي',
    instantAccess: 'فتح الوصول المبكر للمرحلة الأولى',
    enterEmail: 'أدخل بريدك الإلكتروني هنا...',
    targetLaunch: 'موعد الإطلاق العالمي الرسمي خلال',
    days: 'أيام',
    hours: 'ساعات',
    minutes: 'دقائق',
    seconds: 'ثوانٍ',
    timezoneAuto: 'تم تحديد المنطقة الزمنية تلقائياً',
    readinessStatus: 'نسبة الجاهزية للإطلاق',
    interactivePreview: 'النقاط التفاعلية وميزات المنتج',
    clickHotspots: 'انقر على النقاط المضيئة لاستكشاف المزايا والابتكارات الهندسية:',
    pressTitle: 'موثوق ومدعوم من كبرى المنصات العالمية',
    vipSpotsLeft: 'مقاعد المؤسسين المتبقية',
    liveViewers: 'شخص يشاهدون هذه الصفحة الآن',
    selectInterests: 'خصص تجربتك للحصول على إشعارات مخصصة:',
    rewardTier1: 'مشاركة واحدة: تقدم 50 مركزاً',
    rewardTier2: '3 مشاركات: مفتاح بيتا فوري',
    rewardTier3: '5 مشاركات: عضوية مؤسس مدى الحياة'
  },
  ja: {
    notifyMe: 'ローンチ通知を受け取る',
    joiningWaitlist: '優先枠を確保しています...',
    joinedSuccess: '優先ウェイトリストへの登録が完了しました！',
    queueRank: 'あなたのウェイティング順位',
    peopleBehind: '人があなたの後ろに登録しています',
    shareToMoveUp: '紹介リンクをシェアして順位を上げ、限定ベータアクセスを獲得：',
    copyLink: 'リンクをコピー',
    copied: 'コピー完了！',
    spamProtection: 'スパム対策認証済み',
    instantAccess: '第1弾先行アクセス権を獲得',
    enterEmail: 'メールアドレスを入力...',
    targetLaunch: 'グローバルローンチまで残り',
    days: '日',
    hours: '時間',
    minutes: '分',
    seconds: '秒',
    timezoneAuto: 'タイムゾーン自動検出',
    readinessStatus: 'ローンチ準備度',
    interactivePreview: 'インタラクティブ製品プレビュー',
    clickHotspots: '画像上の光るピンをクリックして詳細機能を確認：',
    pressTitle: '世界有数のメディアと投資家からの推薦',
    vipSpotsLeft: '限定創業者枠の残り',
    liveViewers: '人が現在このページを閲覧中',
    selectInterests: '関心のあるタグを選択してパーソナライズ：',
    rewardTier1: '1人招待: 50人分ランクアップ',
    rewardTier2: '3人招待: 即時ベータキー付与',
    rewardTier3: '5人招待: 永久VIPファウンダー資格'
  }
};
