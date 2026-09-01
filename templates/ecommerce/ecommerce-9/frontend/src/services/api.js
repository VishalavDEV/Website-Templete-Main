const PRODUCTS = [
  // --- 1. SMART TVS (tv) ---
  {
    id: "tv-oled-x",
    name: "BLUECORE OLED-X 65\" Cinematic Smart TV",
    brand: "BLUECORE",
    category: "tv",
    price: 159999.00,
    oldPrice: 189999.00,
    discount: 15,
    rating: 4.9,
    reviews: 142,
    slug: "tv-oled-x",
    description: "Experience cinema-grade performance with BLUECORE's signature OLED panel powered by artificial intelligence.",
    specifications: {
      "Display": "65-inch 4K OLED",
      "Refresh Rate": "120Hz",
      "Processor": "BLUECORE AI Gen 4",
      "Connectivity": "Wi-Fi 6, Bluetooth 5.2, HDMI 2.1",
      "Audio": "Dolby Atmos 60W 4.2ch"
    },
    stock: 15,
    featured: true,
    badge: "Premium Flagship"
  },
  {
    id: "tv-sony-a95l",
    name: "Sony BRAVIA XR A95L QD-OLED",
    brand: "Sony",
    category: "tv",
    price: 249999.00,
    oldPrice: 269999.00,
    discount: 7,
    rating: 4.8,
    reviews: 85,
    slug: "tv-sony-a95l",
    description: "Sony QD-OLED delivers the widest color spectrum and ultimate brightness levels under cognitive intelligence.",
    specifications: {
      "Display": "65-inch QD-OLED",
      "Processor": "Cognitive Processor XR",
      "Audio": "Acoustic Surface Audio+ 50W",
      "Gaming Features": "VRR, ALLM, 4K/120fps"
    },
    stock: 8,
    featured: false,
    badge: "Best Colors"
  },
  {
    id: "tv-samsung-qn900d",
    name: "Samsung Neo QLED 8K QN900D",
    brand: "Samsung",
    category: "tv",
    price: 349999.00,
    oldPrice: 389999.00,
    discount: 10,
    rating: 4.7,
    reviews: 62,
    slug: "tv-samsung-qn900d",
    description: "Immerse yourself in spectacular 8K resolution powered by Neo Quantum Matrix Technology.",
    specifications: {
      "Display": "75-inch 8K Neo QLED",
      "Refresh Rate": "144Hz",
      "Processor": "NQ8 AI Gen3",
      "Backlight": "Quantum Mini LED"
    },
    stock: 5,
    featured: true,
    badge: "8K Ultra"
  },
  {
    id: "tv-lg-g4",
    name: "LG OLED evo G4 Series",
    brand: "LG",
    category: "tv",
    price: 199999.00,
    oldPrice: 219999.00,
    discount: 9,
    rating: 4.8,
    reviews: 98,
    slug: "tv-lg-g4",
    description: "LG G4 with Brightness Booster Max provides an exceptionally bright OLED image suitable for bright rooms.",
    specifications: {
      "Display": "65-inch OLED evo",
      "Refresh Rate": "144Hz",
      "Processor": "a11 AI Processor",
      "Brightness": "Brightness Booster Max"
    },
    stock: 12,
    featured: false,
    badge: "Gamer Choice"
  },
  {
    id: "tv-philips-808",
    name: "Philips Ambilight OLED 808",
    brand: "Philips",
    category: "tv",
    price: 129999.00,
    oldPrice: 149999.00,
    discount: 13,
    rating: 4.6,
    reviews: 45,
    slug: "tv-philips-808",
    description: "Surround your senses with next-generation Ambilight halo projection technology synced to the screen action.",
    specifications: {
      "Display": "55-inch OLED",
      "Lighting": "3-sided Next-Gen Ambilight",
      "Processor": "P5 AI Perfect Picture Engine"
    },
    stock: 10,
    featured: false,
    badge: "Ambilight"
  },
  // --- 2. SMARTPHONES (mobiles) ---
  {
    id: "phone-cyber-fold",
    name: "BLUECORE CyberPhone Fold",
    brand: "BLUECORE",
    category: "mobiles",
    price: 129999.00,
    oldPrice: 149999.00,
    discount: 13,
    rating: 4.9,
    reviews: 204,
    slug: "phone-cyber-fold",
    description: "The ultimate dual-screen holographic folding smartphone with a liquid crystal hinge mechanism.",
    specifications: {
      "Display": "7.8-inch Foldable OLED",
      "Processor": "Snapdragon 8 Gen 3 Core",
      "Battery": "5500mAh 120W Charging",
      "Camera": "50MP Triple Laser Lens"
    },
    stock: 20,
    featured: true,
    badge: "Futuristic"
  },
  {
    id: "phone-iphone-15",
    name: "Apple iPhone 15 Pro Max",
    brand: "Apple",
    category: "mobiles",
    price: 139900.00,
    oldPrice: 149900.00,
    discount: 6,
    rating: 4.8,
    reviews: 310,
    slug: "phone-iphone-15",
    description: "Forged in titanium, featuring the groundbreaking A17 Pro chip and customizable Action button.",
    specifications: {
      "Display": "6.7-inch Super Retina XDR",
      "Processor": "A17 Pro Titanium Architecture",
      "Camera": "48MP Main with 5x Telephoto",
      "Interface": "USB-C 3.0, Action Button"
    },
    stock: 25,
    featured: true,
    badge: "Hot Seller"
  },
  {
    id: "phone-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "mobiles",
    price: 144900.00,
    oldPrice: 154900.00,
    discount: 6,
    rating: 4.7,
    reviews: 245,
    slug: "phone-s24-ultra",
    description: "Welcome to the era of mobile AI. Capture stunning night details and translate on the go.",
    specifications: {
      "Display": "6.8-inch Dynamic AMOLED 2X",
      "Processor": "Snapdragon 8 Gen 3 for Galaxy",
      "Camera": "200MP + 50MP + 12MP + 10MP",
      "Stylus": "S Pen Included"
    },
    stock: 18,
    featured: false,
    badge: "AI Phone"
  },
  {
    id: "phone-oneplus-12",
    name: "OnePlus 12 Flagship",
    brand: "OnePlus",
    category: "mobiles",
    price: 64999.00,
    oldPrice: 69999.00,
    discount: 7,
    rating: 4.6,
    reviews: 180,
    slug: "phone-oneplus-12",
    description: "Smooth Beyond Belief. Powered by Snapdragon 8 Gen 3 and Trinity Engine cooling optimization.",
    specifications: {
      "Display": "6.82-inch 2K 120Hz ProXDR",
      "Processor": "Snapdragon 8 Gen 3",
      "Charging": "100W SUPERVOOC Cable / 50W AIRVOOC",
      "Camera": "50MP Sony LYT-808 Main"
    },
    stock: 15,
    featured: false,
    badge: "Value Flagship"
  },
  {
    id: "phone-pixel-8",
    name: "Google Pixel 8 Pro",
    brand: "Google",
    category: "mobiles",
    price: 99999.00,
    oldPrice: 109999.00,
    discount: 9,
    rating: 4.7,
    reviews: 135,
    slug: "phone-pixel-8",
    description: "The all-pro phone engineered by Google. Best-in-class computational photography and live AI translator.",
    specifications: {
      "Display": "6.7-inch Super Actua Display",
      "Processor": "Google Tensor G3",
      "Camera": "50MP Triple Camera System",
      "AI Tools": "Magic Editor, Best Take"
    },
    stock: 14,
    featured: false,
    badge: "Pure Android"
  },
  {
    id: "phone-rog-8",
    name: "ASUS ROG Phone 8 Pro",
    brand: "ASUS",
    category: "mobiles",
    price: 119999.00,
    oldPrice: 129999.00,
    discount: 7,
    rating: 4.8,
    reviews: 92,
    slug: "phone-rog-8",
    description: "Redesigned gaming powerhouse with AniMe Vision customizable display and IP68 waterproof rating.",
    specifications: {
      "Display": "6.78-inch AMOLED 165Hz",
      "Processor": "Snapdragon 8 Gen 3",
      "Cooling": "GameCool 8 System",
      "Visuals": "AniMe Vision mini-LED Backplate"
    },
    stock: 8,
    featured: false,
    badge: "Extreme Gaming"
  },
  // --- 3. LAPTOPS (laptops) ---
  {
    id: "lap-corebook-pro",
    name: "BLUECORE CoreBook Pro 16",
    brand: "BLUECORE",
    category: "laptops",
    price: 219999.00,
    oldPrice: 249999.00,
    discount: 12,
    rating: 4.9,
    reviews: 115,
    slug: "lap-corebook-pro",
    description: "Designed for AI model training and absolute creative compute workloads with holographic liquid cooling.",
    specifications: {
      "Display": "16-inch Quantum Nebula Mini-LED",
      "Processor": "BLUECORE Neural Core 9",
      "Graphics": "NVIDIA RTX 4090 Mobile",
      "RAM / Storage": "64GB DDR5 / 2TB NVMe SSD"
    },
    stock: 10,
    featured: true,
    badge: "AI Dev Station"
  },
  {
    id: "lap-macbook-m3",
    name: "Apple MacBook Pro 16\" M3 Max",
    brand: "Apple",
    category: "laptops",
    price: 329900.00,
    oldPrice: 349900.00,
    discount: 5,
    rating: 4.8,
    reviews: 150,
    slug: "lap-macbook-m3",
    description: "Mind-blowing speed for developers, creative professionals, and video rendering projects.",
    specifications: {
      "Display": "16.2-inch Liquid Retina XDR",
      "Processor": "Apple M3 Max (16-core CPU)",
      "RAM / Storage": "48GB Unified Memory / 1TB SSD",
      "Battery Life": "Up to 22 Hours"
    },
    stock: 12,
    featured: true,
    badge: "Industry Standard"
  },
  {
    id: "lap-dell-xps",
    name: "Dell XPS 15 9530 Touch",
    brand: "Dell",
    category: "laptops",
    price: 169999.00,
    oldPrice: 189999.00,
    discount: 10,
    rating: 4.5,
    reviews: 88,
    slug: "lap-dell-xps",
    description: "Elegant aluminum chassis enclosing raw power. Ideal balance of performance and aesthetics.",
    specifications: {
      "Display": "15.6-inch OLED InfinityEdge Touch",
      "Processor": "Intel Core i9-14900H",
      "Graphics": "NVIDIA RTX 4070 8GB",
      "RAM": "32GB DDR5"
    },
    stock: 15,
    featured: false,
    badge: "Best Windows Laptop"
  },
  {
    id: "lap-rog-zephyrus",
    name: "ASUS ROG Zephyrus G14",
    brand: "ASUS",
    category: "laptops",
    price: 149999.00,
    oldPrice: 169999.00,
    discount: 11,
    rating: 4.7,
    reviews: 102,
    slug: "lap-rog-zephyrus",
    description: "Lightweight, compact gaming laptop featuring high-fidelity screen and metal chassis.",
    specifications: {
      "Display": "14-inch ROG Nebula HDR 120Hz",
      "Processor": "AMD Ryzen 9 8945HS",
      "Graphics": "NVIDIA RTX 4070 8GB"
    },
    stock: 7,
    featured: false,
    badge: "Ultraportable Gaming"
  },
  {
    id: "lap-hp-spectre",
    name: "HP Spectre x360 2-in-1",
    brand: "HP",
    category: "laptops",
    price: 119999.00,
    oldPrice: 139999.00,
    discount: 14,
    rating: 4.6,
    reviews: 75,
    slug: "lap-hp-spectre",
    description: "Transform the way you create. Features a gorgeous OLED touch screen and stylus pen support.",
    specifications: {
      "Display": "14-inch OLED 2.8K Touch",
      "Processor": "Intel Core Ultra 7 155H",
      "Design": "360-degree flip hinge convertible"
    },
    stock: 9,
    featured: false,
    badge: "2-in-1 Premium"
  },
  // --- 4. HEADPHONES & SPEAKERS (audio) ---
  {
    id: "audio-corephone",
    name: "BLUECORE SoundSphere ANC",
    brand: "BLUECORE",
    category: "audio",
    price: 24999.00,
    oldPrice: 28999.00,
    discount: 13,
    rating: 4.9,
    reviews: 189,
    slug: "audio-corephone",
    description: "Immersive spatial audio headset utilizing neuro-feedback to optimize real-time EQ filters.",
    specifications: {
      "Acoustic Engine": "BLUECORE NeuroSound",
      "ANC Depth": "Active Smart ANC 48dB",
      "Battery Life": "60 Hours with Quick Charge"
    },
    stock: 40,
    featured: true,
    badge: "AI Audio"
  },
  {
    id: "audio-sony-xm5",
    name: "Sony WH-1000XM5 Headphones",
    brand: "Sony",
    category: "audio",
    price: 29999.00,
    oldPrice: 34999.00,
    discount: 14,
    rating: 4.8,
    reviews: 510,
    slug: "audio-sony-xm5",
    description: "Redefines distraction-free listening with dual processors controlling eight microphones.",
    specifications: {
      "ANC": "Industry-leading HD Noise Cancelling",
      "Battery Life": "30 Hours",
      "Weight": "250g"
    },
    stock: 50,
    featured: true,
    badge: "Noise Cancel King"
  },
  {
    id: "audio-airpods-max",
    name: "Apple AirPods Max",
    brand: "Apple",
    category: "audio",
    price: 59900.00,
    oldPrice: 64900.00,
    discount: 7,
    rating: 4.6,
    reviews: 320,
    slug: "audio-airpods-max",
    description: "A perfect harmony of exhilarating high-fidelity audio and effortless AirPods magic.",
    specifications: {
      "Acoustics": "Custom Apple Dynamic Driver",
      "ANC": "Active Noise Cancellation + Transparency",
      "Colors": "Space Gray, Silver, Sky Blue"
    },
    stock: 30,
    featured: false,
    badge: "Luxury Sound"
  },
  {
    id: "audio-senn-m4",
    name: "Sennheiser Momentum 4 Wireless",
    brand: "Sennheiser",
    category: "audio",
    price: 24999.00,
    oldPrice: 29999.00,
    discount: 16,
    rating: 4.7,
    reviews: 145,
    slug: "audio-senn-m4",
    description: "Audiophile-grade high-fidelity sound, active noise cancellation, and exceptional comfort.",
    specifications: {
      "Drivers": "42mm Dynamic Transducer",
      "Battery Life": "60 Hours Class-Leading"
    },
    stock: 22,
    featured: false,
    badge: "Audiophile Choice"
  },
  {
    id: "audio-sonos-era",
    name: "Sonos Era 300 Smart Speaker",
    brand: "Sonos",
    category: "audio",
    price: 39999.00,
    oldPrice: 44999.00,
    discount: 11,
    rating: 4.7,
    reviews: 95,
    slug: "audio-sonos-era",
    description: "With next-level spatial audio, Sonos Era 300 wraps you in sound from all directions.",
    specifications: {
      "Drivers": "6 Drivers (Dolby Atmos Spatial)",
      "Connectivity": "Wi-Fi, Bluetooth, Line-In",
      "Tuning": "Trueplay Auto Calibration"
    },
    stock: 15,
    featured: false,
    badge: "Spatial Smart Speaker"
  },
  {
    id: "audio-jbl-boombox",
    name: "JBL Boombox 3 Portable Speaker",
    brand: "JBL",
    category: "audio",
    price: 32999.00,
    oldPrice: 36999.00,
    discount: 10,
    rating: 4.8,
    reviews: 120,
    slug: "audio-jbl-boombox",
    description: "Massive sound, epic bass. Take the club with you with durable metal side handles and IP67 shield.",
    specifications: {
      "Output Power": "180W RMS (Battery mode)",
      "Waterproof": "IP67 Dust & Water Proof",
      "Playtime": "Up to 24 Hours"
    },
    stock: 18,
    featured: false,
    badge: "Outdoor Beast"
  },
  {
    id: "audio-marshall-woburn",
    name: "Marshall Woburn III Home Speaker",
    brand: "Marshall",
    category: "audio",
    price: 49999.00,
    oldPrice: 54999.00,
    discount: 9,
    rating: 4.8,
    reviews: 64,
    slug: "audio-marshall-woburn",
    description: "Re-engineered vintage-inspired soundstage that will shake any living room with crystal clear highs.",
    specifications: {
      "Output": "150W Tri-Amplified",
      "Connectivity": "HDMI ARC, RCA, Bluetooth 5.2",
      "Controls": "Analog Bass/Treble Knobs"
    },
    stock: 8,
    featured: false,
    badge: "Retro Powerhouse"
  },
  {
    id: "audio-homepod",
    name: "Apple HomePod (2nd Gen)",
    brand: "Apple",
    category: "audio",
    price: 26900.00,
    oldPrice: 28900.00,
    discount: 6,
    rating: 4.5,
    reviews: 110,
    slug: "audio-homepod",
    description: "A powerful smart speaker with advanced room sensing technology and deep Apple Ecosystem sync.",
    specifications: {
      "Speaker Design": "High-excursion woofer",
      "Smart Assistant": "Siri Built-in"
    },
    stock: 25,
    featured: false,
    badge: "Smart Audio"
  },
  // --- 5. CAMERAS (cameras) ---
  {
    id: "cam-sony-a7iv",
    name: "Sony Alpha 7 IV Mirrorless",
    brand: "Sony",
    category: "cameras",
    price: 189999.00,
    oldPrice: 209999.00,
    discount: 9,
    rating: 4.9,
    reviews: 155,
    slug: "cam-sony-a7iv",
    description: "The ground-breaking hybrid camera. Delivers exceptional 33MP still images and cinema-grade movie clips.",
    specifications: {
      "Sensor": "33MP Full-Frame Exmor R CMOS",
      "Video": "4K 60p 10-bit 4:2:2",
      "Stabilization": "5-axis In-body Image Stabilization",
      "Autofocus": "759-point Real-time Tracking AF"
    },
    stock: 10,
    featured: true,
    badge: "Pro Hybrid"
  },
  {
    id: "cam-canon-r5",
    name: "Canon EOS R5 Mirrorless Body",
    brand: "Canon",
    category: "cameras",
    price: 269999.00,
    oldPrice: 289999.00,
    discount: 6,
    rating: 4.8,
    reviews: 88,
    slug: "cam-canon-r5",
    description: "For professional photographers and videographers demanding supreme resolution and speed.",
    specifications: {
      "Sensor": "45MP Full-Frame CMOS",
      "Video": "8K 30p RAW / 4K 120p",
      "Burst Rate": "Up to 20 fps silent"
    },
    stock: 6,
    featured: true,
    badge: "8K Cinema"
  },
  {
    id: "cam-fuji-xt5",
    name: "Fujifilm X-T5 Mirrorless Body",
    brand: "Fujifilm",
    category: "cameras",
    price: 149999.00,
    oldPrice: 159999.00,
    discount: 6,
    rating: 4.7,
    reviews: 72,
    slug: "cam-fuji-xt5",
    description: "A photography-first mirrorless camera combining classic vintage design with modern autofocus algorithms.",
    specifications: {
      "Sensor": "40.2MP APS-C X-Trans HR",
      "Video": "6.2K 30p",
      "Design": "Classic Retro dials and body"
    },
    stock: 11,
    featured: false,
    badge: "Retro Stills"
  },
  {
    id: "cam-dji-pocket3",
    name: "DJI Osmo Pocket 3 Creator Combo",
    brand: "DJI",
    category: "cameras",
    price: 59999.00,
    oldPrice: 62999.00,
    discount: 4,
    rating: 4.9,
    reviews: 140,
    slug: "cam-dji-pocket3",
    description: "Pocket-sized stabilization tool. Features rotatable touch screen for rapid portrait/landscape switching.",
    specifications: {
      "Sensor": "1-inch CMOS Gimbal Camera",
      "Video": "4K 120p",
      "Screen": "2-inch Rotatable Touchscreen"
    },
    stock: 15,
    featured: false,
    badge: "Vlogger Choice"
  },
  {
    id: "cam-gopro-12",
    name: "GoPro HERO 12 Black",
    brand: "GoPro",
    category: "cameras",
    price: 37999.00,
    oldPrice: 42999.00,
    discount: 11,
    rating: 4.6,
    reviews: 210,
    slug: "cam-gopro-12",
    description: "The ultimate action camera with improved power efficiency and unmatched image stabilization.",
    specifications: {
      "Resolution": "27MP Photo / 5.3K 60fps Video",
      "Stabilization": "HyperSmooth 6.0 AutoBoost",
      "Durability": "Waterproof down to 33ft (10m)"
    },
    stock: 25,
    featured: false,
    badge: "Action Shield"
  },
  // --- 6. SMART WATCHES (smart-watches) ---
  {
    id: "watch-coresync",
    name: "BLUECORE CoreSync Chrono",
    brand: "BLUECORE",
    category: "smart-watches",
    price: 32999.00,
    oldPrice: 36999.00,
    discount: 10,
    rating: 4.9,
    reviews: 96,
    slug: "watch-coresync",
    description: "A futuristic timepiece generating holographic biometric displays over a liquid titanium bezel.",
    specifications: {
      "Bezel Beams": "BLUECORE holographic projector",
      "Sensors": "ECG, SPO2, Stress, Deep EEG tracker",
      "Material": "Liquid Titanium Alloy"
    },
    stock: 35,
    featured: true,
    badge: "Holo Wearable"
  },
  {
    id: "watch-apple-ultra",
    name: "Apple Watch Ultra 2",
    brand: "Apple",
    category: "smart-watches",
    price: 89900.00,
    oldPrice: 94900.00,
    discount: 5,
    rating: 4.8,
    reviews: 185,
    slug: "watch-apple-ultra",
    description: "The most rugged and capable Apple Watch ever. Crafted from 95% recycled titanium.",
    specifications: {
      "Case Size": "49mm Aerospace Titanium",
      "Battery Life": "Up to 36 Hours / 72 Hours low-power",
      "GPS": "Precision Dual-frequency GPS"
    },
    stock: 20,
    featured: true,
    badge: "Rugged Pro"
  },
  {
    id: "watch-galaxy-6",
    name: "Samsung Galaxy Watch 6 Classic",
    brand: "Samsung",
    category: "smart-watches",
    price: 39999.00,
    oldPrice: 44999.00,
    discount: 11,
    rating: 4.6,
    reviews: 142,
    slug: "watch-galaxy-6",
    description: "Brings back the legendary physical rotating bezel. Elevate your everyday health metrics.",
    specifications: {
      "Bezel": "Rotating Physical Dial bezel",
      "OS": "Wear OS Powered by Samsung",
      "BioSensor": "Body Composition, Skeletal Muscle Analysis"
    },
    stock: 22,
    featured: false,
    badge: "Classic Smart"
  },
  {
    id: "watch-garmin-fenix",
    name: "Garmin Fenix 7 Pro Sapphire Solar",
    brand: "Garmin",
    category: "smart-watches",
    price: 74999.00,
    oldPrice: 84999.00,
    discount: 11,
    rating: 4.8,
    reviews: 80,
    slug: "watch-garmin-fenix",
    description: "Solar charging multisport watch designed to conquer high-altitude and backcountry environments.",
    specifications: {
      "Battery Life": "Up to 16 Days",
      "Screen": "AMOLED display with Sapphire Lens",
      "Maps": "Multicontinent TopoActive offline mapping"
    },
    stock: 12,
    featured: false,
    badge: "Adventure Master"
  },
  // --- 7. GAMING (gaming) ---
  {
    id: "game-corestation",
    name: "BLUECORE CoreStation Genesis",
    brand: "BLUECORE",
    category: "gaming",
    price: 49999.00,
    oldPrice: 57999.00,
    discount: 13,
    rating: 4.9,
    reviews: 178,
    slug: "game-corestation",
    description: "An immersive home console incorporating low-latency neural tracking and holographic particle accelerators.",
    specifications: {
      "Holographics": "Quantum Core Render",
      "Inputs": "Neural-link controllers",
      "Drive": "2TB Solid-state Tachyon Drive"
    },
    stock: 20,
    featured: true,
    badge: "Next-Gen Console"
  },
  {
    id: "game-ps5",
    name: "PlayStation 5 Slim Console",
    brand: "Sony",
    category: "gaming",
    price: 44990.00,
    oldPrice: 49990.00,
    discount: 10,
    rating: 4.8,
    reviews: 540,
    slug: "game-ps5",
    description: "Experience lightning-fast loading times, immersive haptic feedback, and breathtaking 3D audio.",
    specifications: {
      "Processor": "Custom AMD Zen 2 CPU / RDNA 2 GPU",
      "Storage": "825GB Custom SSD",
      "Features": "DualSense Haptics, Ray Tracing, 120Hz"
    },
    stock: 40,
    featured: true,
    badge: "Gamer Essential"
  },
  {
    id: "game-xbox",
    name: "Xbox Series X Console",
    brand: "Microsoft",
    category: "gaming",
    price: 49990.00,
    oldPrice: 54990.00,
    discount: 9,
    rating: 4.7,
    reviews: 390,
    slug: "game-xbox",
    description: "The fastest, most powerful Xbox ever. Play thousands of titles across four generations of consoles.",
    specifications: {
      "Performance": "12 Teraflops Compute Power",
      "Storage": "1TB SSD",
      "Resolution": "True 4K Gaming / 8K HDR"
    },
    stock: 25,
    featured: false,
    badge: "Raw Power"
  },
  {
    id: "game-switch",
    name: "Nintendo Switch OLED Model",
    brand: "Nintendo",
    category: "gaming",
    price: 32990.00,
    oldPrice: 34990.00,
    discount: 5,
    rating: 4.7,
    reviews: 420,
    slug: "game-switch",
    description: "Features a vibrant 7-inch OLED screen, a wide adjustable stand, and a wired LAN port dock.",
    specifications: {
      "Display": "7-inch OLED Touchscreen",
      "Modes": "Handheld, Tabletop, TV dock mode"
    },
    stock: 30,
    featured: false,
    badge: "Handheld Fun"
  },
  {
    id: "game-steamdeck",
    name: "Steam Deck OLED 1TB",
    brand: "Valve",
    category: "gaming",
    price: 59990.00,
    oldPrice: 64990.00,
    discount: 7,
    rating: 4.8,
    reviews: 195,
    slug: "game-steamdeck",
    description: "The definitive portable PC gaming platform. Features improved battery, OLED screen and large trackpads.",
    specifications: {
      "Display": "7.4-inch 90Hz OLED Display",
      "Processor": "AMD Zen 2 APU",
      "Storage": "1TB NVMe SSD",
      "Controls": "Dual Trackpads, Gyro, Hall-Effect triggers"
    },
    stock: 15,
    featured: false,
    badge: "Portable PC"
  },
  // --- 8. HOME APPLIANCES (appliances) ---
  {
    id: "app-coredust",
    name: "BLUECORE LaserVac Genesis",
    brand: "BLUECORE",
    category: "appliances",
    price: 59999.00,
    oldPrice: 67999.00,
    discount: 11,
    rating: 4.9,
    reviews: 88,
    slug: "app-coredust",
    description: "Laser dust-tracking vacuum cleaner projecting virtual floor dirt grids for 100% dust extraction.",
    specifications: {
      "Filtration": "Holographic HEPA filter",
      "Clean Tech": "Dust-detecting laser scanner",
      "Motor": "150,000 RPM Hypercore"
    },
    stock: 12,
    featured: true,
    badge: "Smart Clean"
  },
  {
    id: "app-philips-fryer",
    name: "Philips Airfryer Premium XXL",
    brand: "Philips",
    category: "appliances",
    price: 19999.00,
    oldPrice: 23999.00,
    discount: 16,
    rating: 4.7,
    reviews: 140,
    slug: "app-philips-fryer",
    description: "Airfryer using rapid air circulation to cook meals with up to 90% less oil.",
    specifications: {
      "Capacity": "8.3 Liters XXL",
      "Modes": "Air Fry, Roast, Dehydrate, Bake",
      "Smart App": "Wi-Fi Connected Recipe Engine"
    },
    stock: 20,
    featured: false,
    badge: "Smart Kitchen"
  },
  {
    id: "app-roborock",
    name: "Roborock S8 Pro Ultra Robot Vacuum",
    brand: "Roborock",
    category: "appliances",
    price: 119999.00,
    oldPrice: 139999.00,
    discount: 14,
    rating: 4.8,
    reviews: 95,
    slug: "app-roborock",
    description: "Fully automated robot vacuum and mop that cleans, empties, washes itself, and refills its tank.",
    specifications: {
      "Suction": "6000Pa High-Power",
      "Docking": "Empty, Wash, Refill Auto Dock",
      "Navigation": "PreciSense LiDAR Maps"
    },
    stock: 10,
    featured: true,
    badge: "Autonomous Clean"
  }
];

export async function fetchProducts(featured = null) {
  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  if (featured !== null) {
    return PRODUCTS.filter((p) => p.featured === featured);
  }
  return PRODUCTS;
}

export async function fetchProduct(id) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) throw new Error('Product not found');
  return product;
}

export async function fetchProductsByCategory(category) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return PRODUCTS.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

export async function fetchCategories() {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const categories = [...new Set(PRODUCTS.map((p) => p.category))];
  return categories;
}

export async function fetchOffers() {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return PRODUCTS.filter((p) => p.discount >= 12);
}

export async function searchProducts(query) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  if (!query || !query.trim()) return PRODUCTS;
  const q = query.toLowerCase().trim();
  return PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
  );
}

export async function submitOrder(order) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
  const newOrder = {
    ...order,
    id: orderId,
    orderNo: orderId,
    trackingNo: 'TRK-' + Math.floor(10000000 + Math.random() * 90000000),
    status: 'PROCESSING',
    createdAt: new Date().toISOString()
  };
  // Save order to history
  const history = JSON.parse(localStorage.getItem('bluecore_orders') || '[]');
  history.push(newOrder);
  localStorage.setItem('bluecore_orders', JSON.stringify(history));
  return newOrder;
}

export async function fetchOrder(id) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const history = JSON.parse(localStorage.getItem('bluecore_orders') || '[]');
  const order = history.find((o) => o.id === id || o.orderNo === id);
  if (!order) throw new Error('Order not found');
  return order;
}

export async function fetchOrderByTracking(trackingNo) {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const history = JSON.parse(localStorage.getItem('bluecore_orders') || '[]');
  const order = history.find((o) => o.trackingNo === trackingNo);
  if (!order) throw new Error('Order not found');
  return order;
}

export async function submitContact(message) {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return { success: true, message: 'Message submitted successfully' };
}

export function formatINR(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}
