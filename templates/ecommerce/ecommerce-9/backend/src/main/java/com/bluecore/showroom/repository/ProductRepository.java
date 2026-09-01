package com.bluecore.showroom.repository;

import com.bluecore.showroom.model.Product;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class ProductRepository {
    private final List<Product> products = new ArrayList<>();

    public ProductRepository() {
        initProducts();
    }

    private void initProducts() {
        // --- 1. SMART TVS (tv) ---
        Map<String, String> tv1Specs = new LinkedHashMap<>();
        tv1Specs.put("Display", "65-inch 4K OLED");
        tv1Specs.put("Refresh Rate", "120Hz");
        tv1Specs.put("Processor", "BLUECORE AI Gen 4");
        tv1Specs.put("Connectivity", "Wi-Fi 6, Bluetooth 5.2, HDMI 2.1");
        tv1Specs.put("Audio", "Dolby Atmos 60W 4.2ch");
        products.add(new Product("tv-oled-x", "BLUECORE OLED-X 65\" Cinematic Smart TV", "BLUECORE", "tv", 
            159999.00, 189999.00, 15, 4.9, 142, "tv-oled-x", 
            "Experience cinema-grade performance with BLUECORE's signature OLED panel powered by artificial intelligence.", 
            tv1Specs, 15, true, "Premium Flagship"));

        Map<String, String> tv2Specs = new LinkedHashMap<>();
        tv2Specs.put("Display", "65-inch QD-OLED");
        tv2Specs.put("Processor", "Cognitive Processor XR");
        tv2Specs.put("Audio", "Acoustic Surface Audio+ 50W");
        tv2Specs.put("Gaming Features", "VRR, ALLM, 4K/120fps");
        products.add(new Product("tv-sony-a95l", "Sony BRAVIA XR A95L QD-OLED", "Sony", "tv", 
            249999.00, 269999.00, 7, 4.8, 85, "tv-sony-a95l", 
            "Sony QD-OLED delivers the widest color spectrum and ultimate brightness levels under cognitive intelligence.", 
            tv2Specs, 8, false, "Best Colors"));

        Map<String, String> tv3Specs = new LinkedHashMap<>();
        tv3Specs.put("Display", "75-inch 8K Neo QLED");
        tv3Specs.put("Refresh Rate", "144Hz");
        tv3Specs.put("Processor", "NQ8 AI Gen3");
        tv3Specs.put("Backlight", "Quantum Mini LED");
        products.add(new Product("tv-samsung-qn900d", "Samsung Neo QLED 8K QN900D", "Samsung", "tv", 
            349999.00, 389999.00, 10, 4.7, 62, "tv-samsung-qn900d", 
            "Immerse yourself in spectacular 8K resolution powered by Neo Quantum Matrix Technology.", 
            tv3Specs, 5, true, "8K Ultra"));

        Map<String, String> tv4Specs = new LinkedHashMap<>();
        tv4Specs.put("Display", "65-inch OLED evo");
        tv4Specs.put("Refresh Rate", "144Hz");
        tv4Specs.put("Processor", "a11 AI Processor");
        tv4Specs.put("Brightness", "Brightness Booster Max");
        products.add(new Product("tv-lg-g4", "LG OLED evo G4 Series", "LG", "tv", 
            199999.00, 219999.00, 9, 4.8, 98, "tv-lg-g4", 
            "LG G4 with Brightness Booster Max provides an exceptionally bright OLED image suitable for bright rooms.", 
            tv4Specs, 12, false, "Gamer Choice"));

        Map<String, String> tv5Specs = new LinkedHashMap<>();
        tv5Specs.put("Display", "55-inch OLED");
        tv5Specs.put("Lighting", "3-sided Next-Gen Ambilight");
        tv5Specs.put("Processor", "P5 AI Perfect Picture Engine");
        products.add(new Product("tv-philips-808", "Philips Ambilight OLED 808", "Philips", "tv", 
            129999.00, 149999.00, 13, 4.6, 45, "tv-philips-808", 
            "Surround your senses with next-generation Ambilight halo projection technology synced to the screen action.", 
            tv5Specs, 10, false, "Ambilight"));


        // --- 2. SMARTPHONES (mobiles) ---
        Map<String, String> phone1Specs = new LinkedHashMap<>();
        phone1Specs.put("Display", "7.8-inch Foldable OLED");
        phone1Specs.put("Processor", "Snapdragon 8 Gen 3 Core");
        phone1Specs.put("Battery", "5500mAh 120W Charging");
        phone1Specs.put("Camera", "50MP Triple Laser Lens");
        products.add(new Product("phone-cyber-fold", "BLUECORE CyberPhone Fold", "BLUECORE", "mobiles", 
            129999.00, 149999.00, 13, 4.9, 204, "phone-cyber-fold", 
            "The ultimate dual-screen holographic folding smartphone with a liquid crystal hinge mechanism.", 
            phone1Specs, 20, true, "Futuristic"));

        Map<String, String> phone2Specs = new LinkedHashMap<>();
        phone2Specs.put("Display", "6.7-inch Super Retina XDR");
        phone2Specs.put("Processor", "A17 Pro Titanium Architecture");
        phone2Specs.put("Camera", "48MP Main with 5x Telephoto");
        phone2Specs.put("Interface", "USB-C 3.0, Action Button");
        products.add(new Product("phone-iphone-15", "Apple iPhone 15 Pro Max", "Apple", "mobiles", 
            139900.00, 149900.00, 6, 4.8, 310, "phone-iphone-15", 
            "Forged in titanium, featuring the groundbreaking A17 Pro chip and customizable Action button.", 
            phone2Specs, 25, true, "Hot Seller"));

        Map<String, String> phone3Specs = new LinkedHashMap<>();
        phone3Specs.put("Display", "6.8-inch Dynamic AMOLED 2X");
        phone3Specs.put("Processor", "Snapdragon 8 Gen 3 for Galaxy");
        phone3Specs.put("Camera", "200MP + 50MP + 12MP + 10MP");
        phone3Specs.put("Stylus", "S Pen Included");
        products.add(new Product("phone-s24-ultra", "Samsung Galaxy S24 Ultra", "Samsung", "mobiles", 
            144900.00, 154900.00, 6, 4.7, 245, "phone-s24-ultra", 
            "Welcome to the era of mobile AI. Capture stunning night details and translate on the go.", 
            phone3Specs, 18, false, "AI Phone"));

        Map<String, String> phone4Specs = new LinkedHashMap<>();
        phone4Specs.put("Display", "6.82-inch 2K 120Hz ProXDR");
        phone4Specs.put("Processor", "Snapdragon 8 Gen 3");
        phone4Specs.put("Charging", "100W SUPERVOOC Cable / 50W AIRVOOC");
        phone4Specs.put("Camera", "50MP Sony LYT-808 Main");
        products.add(new Product("phone-oneplus-12", "OnePlus 12 Flagship", "OnePlus", "mobiles", 
            64999.00, 69999.00, 7, 4.6, 180, "phone-oneplus-12", 
            "Smooth Beyond Belief. Powered by Snapdragon 8 Gen 3 and Trinity Engine cooling optimization.", 
            phone4Specs, 15, false, "Value Flagship"));

        Map<String, String> phone5Specs = new LinkedHashMap<>();
        phone5Specs.put("Display", "6.7-inch Super Actua Display");
        phone5Specs.put("Processor", "Google Tensor G3");
        phone5Specs.put("Camera", "50MP Triple Camera System");
        phone5Specs.put("AI Tools", "Magic Editor, Best Take");
        products.add(new Product("phone-pixel-8", "Google Pixel 8 Pro", "Google", "mobiles", 
            99999.00, 109999.00, 9, 4.7, 135, "phone-pixel-8", 
            "The all-pro phone engineered by Google. Best-in-class computational photography and live AI translator.", 
            phone5Specs, 14, false, "Pure Android"));

        Map<String, String> phone6Specs = new LinkedHashMap<>();
        phone6Specs.put("Display", "6.78-inch AMOLED 165Hz");
        phone6Specs.put("Processor", "Snapdragon 8 Gen 3");
        phone6Specs.put("Cooling", "GameCool 8 System");
        phone6Specs.put("Visuals", "AniMe Vision mini-LED Backplate");
        products.add(new Product("phone-rog-8", "ASUS ROG Phone 8 Pro", "ASUS", "mobiles", 
            119999.00, 129999.00, 7, 4.8, 92, "phone-rog-8", 
            "Redesigned gaming powerhouse with AniMe Vision customizable display and IP68 waterproof rating.", 
            phone6Specs, 8, false, "Extreme Gaming"));


        // --- 3. LAPTOPS (laptops) ---
        Map<String, String> lap1Specs = new LinkedHashMap<>();
        lap1Specs.put("Display", "16-inch Quantum Nebula Mini-LED");
        lap1Specs.put("Processor", "BLUECORE Neural Core 9");
        lap1Specs.put("Graphics", "NVIDIA RTX 4090 Mobile");
        lap1Specs.put("RAM / Storage", "64GB DDR5 / 2TB NVMe SSD");
        products.add(new Product("lap-corebook-pro", "BLUECORE CoreBook Pro 16", "BLUECORE", "laptops", 
            219999.00, 249999.00, 12, 4.9, 115, "lap-corebook-pro", 
            "Designed for AI model training and absolute creative compute workloads with holographic liquid cooling.", 
            lap1Specs, 10, true, "AI Dev Station"));

        Map<String, String> lap2Specs = new LinkedHashMap<>();
        lap2Specs.put("Display", "16.2-inch Liquid Retina XDR");
        lap2Specs.put("Processor", "Apple M3 Max (16-core CPU)");
        lap2Specs.put("RAM / Storage", "48GB Unified Memory / 1TB SSD");
        lap2Specs.put("Battery Life", "Up to 22 Hours");
        products.add(new Product("lap-macbook-m3", "Apple MacBook Pro 16\" M3 Max", "Apple", "laptops", 
            329900.00, 349900.00, 5, 4.8, 150, "lap-macbook-m3", 
            "Mind-blowing speed for developers, creative professionals, and video rendering projects.", 
            lap2Specs, 12, true, "Industry Standard"));

        Map<String, String> lap3Specs = new LinkedHashMap<>();
        lap3Specs.put("Display", "15.6-inch OLED InfinityEdge Touch");
        lap3Specs.put("Processor", "Intel Core i9-14900H");
        lap3Specs.put("Graphics", "NVIDIA RTX 4070 8GB");
        lap3Specs.put("RAM", "32GB DDR5");
        products.add(new Product("lap-dell-xps", "Dell XPS 15 9530 Touch", "Dell", "laptops", 
            169999.00, 189999.00, 10, 4.5, 88, "lap-dell-xps", 
            "Elegant aluminum chassis enclosing raw power. Ideal balance of performance and aesthetics.", 
            lap3Specs, 15, false, "Best Windows Laptop"));

        Map<String, String> lap4Specs = new LinkedHashMap<>();
        lap4Specs.put("Display", "14-inch ROG Nebula HDR 120Hz");
        lap4Specs.put("Processor", "AMD Ryzen 9 8945HS");
        lap4Specs.put("Graphics", "NVIDIA RTX 4070 8GB");
        products.add(new Product("lap-rog-zephyrus", "ASUS ROG Zephyrus G14", "ASUS", "laptops", 
            149999.00, 169999.00, 11, 4.7, 102, "lap-rog-zephyrus", 
            "Lightweight, compact gaming laptop featuring high-fidelity screen and metal chassis.", 
            lap4Specs, 7, false, "Ultraportable Gaming"));

        Map<String, String> lap5Specs = new LinkedHashMap<>();
        lap5Specs.put("Display", "14-inch OLED 2.8K Touch");
        lap5Specs.put("Processor", "Intel Core Ultra 7 155H");
        lap5Specs.put("Design", "360-degree flip hinge convertible");
        products.add(new Product("lap-hp-spectre", "HP Spectre x360 2-in-1", "HP", "laptops", 
            119999.00, 139999.00, 14, 4.6, 75, "lap-hp-spectre", 
            "Transform the way you create. Features a gorgeous OLED touch screen and stylus pen support.", 
            lap5Specs, 9, false, "2-in-1 Premium"));


        // --- 4. HEADPHONES & SPEAKERS (audio) ---
        Map<String, String> audio1Specs = new LinkedHashMap<>();
        audio1Specs.put("Acoustic Engine", "BLUECORE NeuroSound");
        audio1Specs.put("ANC Depth", "Active Smart ANC 48dB");
        audio1Specs.put("Battery Life", "60 Hours with Quick Charge");
        products.add(new Product("audio-corephone", "BLUECORE SoundSphere ANC", "BLUECORE", "audio", 
            24999.00, 28999.00, 13, 4.9, 189, "audio-corephone", 
            "Immersive spatial audio headset utilizing neuro-feedback to optimize real-time EQ filters.", 
            audio1Specs, 40, true, "AI Audio"));

        Map<String, String> audio2Specs = new LinkedHashMap<>();
        audio2Specs.put("ANC", "Industry-leading HD Noise Cancelling");
        audio2Specs.put("Battery Life", "30 Hours");
        audio2Specs.put("Weight", "250g");
        products.add(new Product("audio-sony-xm5", "Sony WH-1000XM5 Headphones", "Sony", "audio", 
            29999.00, 34999.00, 14, 4.8, 510, "audio-sony-xm5", 
            "Redefines distraction-free listening with dual processors controlling eight microphones.", 
            audio2Specs, 50, true, "Noise Cancel King"));

        Map<String, String> audio3Specs = new LinkedHashMap<>();
        audio3Specs.put("Acoustics", "Custom Apple Dynamic Driver");
        audio3Specs.put("ANC", "Active Noise Cancellation + Transparency");
        audio3Specs.put("Colors", "Space Gray, Silver, Sky Blue");
        products.add(new Product("audio-airpods-max", "Apple AirPods Max", "Apple", "audio", 
            59900.00, 64900.00, 7, 4.6, 320, "audio-airpods-max", 
            "A perfect harmony of exhilarating high-fidelity audio and effortless AirPods magic.", 
            audio3Specs, 30, false, "Luxury Sound"));

        Map<String, String> audio4Specs = new LinkedHashMap<>();
        audio4Specs.put("Drivers", "42mm Dynamic Transducer");
        audio4Specs.put("Battery Life", "60 Hours Class-Leading");
        products.add(new Product("audio-senn-m4", "Sennheiser Momentum 4 Wireless", "Sennheiser", "audio", 
            24999.00, 29999.00, 16, 4.7, 145, "audio-senn-m4", 
            "Signature Sennheiser sound with customizable sound modes and adaptive noise canceling.", 
            audio4Specs, 22, false, "Audiophile Choice"));

        Map<String, String> audio5Specs = new LinkedHashMap<>();
        audio5Specs.put("Drivers", "6 Drivers (Dolby Atmos Spatial)");
        audio5Specs.put("Connectivity", "Wi-Fi, Bluetooth, Line-In");
        audio5Specs.put("Tuning", "Trueplay Auto Calibration");
        products.add(new Product("audio-sonos-era", "Sonos Era 300 Smart Speaker", "Sonos", "audio", 
            39999.00, 44999.00, 11, 4.7, 95, "audio-sonos-era", 
            "With next-level spatial audio, Sonos Era 300 wraps you in sound from all directions.", 
            audio5Specs, 15, false, "Spatial Smart Speaker"));

        Map<String, String> audio6Specs = new LinkedHashMap<>();
        audio6Specs.put("Output Power", "180W RMS (Battery mode)");
        audio6Specs.put("Waterproof", "IP67 Dust & Water Proof");
        audio6Specs.put("Playtime", "Up to 24 Hours");
        products.add(new Product("audio-jbl-boombox", "JBL Boombox 3 Portable Speaker", "JBL", "audio", 
            32999.00, 36999.00, 10, 4.8, 120, "audio-jbl-boombox", 
            "Massive sound, epic bass. Take the club with you with durable metal side handles and IP67 shield.", 
            audio6Specs, 18, false, "Outdoor Beast"));

        Map<String, String> audio7Specs = new LinkedHashMap<>();
        audio7Specs.put("Output", "150W Tri-Amplified");
        audio7Specs.put("Connectivity", "HDMI ARC, RCA, Bluetooth 5.2");
        audio7Specs.put("Controls", "Analog Bass/Treble Knobs");
        products.add(new Product("audio-marshall-woburn", "Marshall Woburn III Home Speaker", "Marshall", "audio", 
            49999.00, 54999.00, 9, 4.8, 64, "audio-marshall-woburn", 
            "Re-engineered vintage-inspired soundstage that will shake any living room with crystal clear highs.", 
            audio7Specs, 8, false, "Retro Powerhouse"));

        Map<String, String> audio8Specs = new LinkedHashMap<>();
        audio8Specs.put("Speaker Design", "High-excursion woofer");
        audio8Specs.put("Smart Assistant", "Siri Built-in");
        products.add(new Product("audio-homepod", "Apple HomePod (2nd Gen)", "Apple", "audio", 
            26900.00, 28900.00, 6, 4.5, 110, "audio-homepod", 
            "A powerful smart speaker with advanced room sensing technology and deep Apple Ecosystem sync.", 
            audio8Specs, 25, false, "Smart Audio"));


        // --- 5. CAMERAS (cameras) ---
        Map<String, String> cam1Specs = new LinkedHashMap<>();
        cam1Specs.put("Sensor", "33MP Full-Frame Exmor R CMOS");
        cam1Specs.put("Video", "4K 60p 10-bit 4:2:2");
        cam1Specs.put("Stabilization", "5-axis In-body Image Stabilization");
        cam1Specs.put("Autofocus", "759-point Real-time Tracking AF");
        products.add(new Product("cam-sony-a7iv", "Sony Alpha 7 IV Mirrorless", "Sony", "cameras", 
            189999.00, 209999.00, 9, 4.9, 155, "cam-sony-a7iv", 
            "The ground-breaking hybrid camera. Delivers exceptional 33MP still images and cinema-grade movie clips.", 
            cam1Specs, 10, true, "Pro Hybrid"));

        Map<String, String> cam2Specs = new LinkedHashMap<>();
        cam2Specs.put("Sensor", "45MP Full-Frame CMOS");
        cam2Specs.put("Video", "8K 30p RAW / 4K 120p");
        cam2Specs.put("Burst Rate", "Up to 20 fps silent");
        products.add(new Product("cam-canon-r5", "Canon EOS R5 Mirrorless Body", "Canon", "cameras", 
            269999.00, 289999.00, 6, 4.8, 88, "cam-canon-r5", 
            "For professional photographers and videographers demanding supreme resolution and speed.", 
            cam2Specs, 6, true, "8K Cinema"));

        Map<String, String> cam3Specs = new LinkedHashMap<>();
        cam3Specs.put("Sensor", "40.2MP APS-C X-Trans HR");
        cam3Specs.put("Video", "6.2K 30p");
        cam3Specs.put("Design", "Classic Retro dials and body");
        products.add(new Product("cam-fuji-xt5", "Fujifilm X-T5 Mirrorless Body", "Fujifilm", "cameras", 
            149999.00, 159999.00, 6, 4.7, 72, "cam-fuji-xt5", 
            "A photography-first mirrorless camera combining classic vintage design with modern autofocus algorithms.", 
            cam3Specs, 11, false, "Retro Stills"));

        Map<String, String> cam4Specs = new LinkedHashMap<>();
        cam4Specs.put("Sensor", "1-inch CMOS Gimbal Camera");
        cam4Specs.put("Video", "4K 120p");
        cam4Specs.put("Screen", "2-inch Rotatable Touchscreen");
        products.add(new Product("cam-dji-pocket3", "DJI Osmo Pocket 3 Creator Combo", "DJI", "cameras", 
            59999.00, 62999.00, 4, 4.9, 140, "cam-dji-pocket3", 
            "Pocket-sized stabilization tool. Features rotatable touch screen for rapid portrait/landscape switching.", 
            cam4Specs, 15, false, "Vlogger Choice"));

        Map<String, String> cam5Specs = new LinkedHashMap<>();
        cam5Specs.put("Resolution", "27MP Photo / 5.3K 60fps Video");
        cam5Specs.put("Stabilization", "HyperSmooth 6.0 AutoBoost");
        cam5Specs.put("Durability", "Waterproof down to 33ft (10m)");
        products.add(new Product("cam-gopro-12", "GoPro HERO 12 Black", "GoPro", "cameras", 
            37999.00, 42999.00, 11, 4.6, 210, "cam-gopro-12", 
            "The ultimate action camera with improved power efficiency and unmatched image stabilization.", 
            cam5Specs, 25, false, "Action Shield"));


        // --- 6. SMART WATCHES (smart-watches) ---
        Map<String, String> watch1Specs = new LinkedHashMap<>();
        watch1Specs.put("Bezel Beams", "BLUECORE holographic projector");
        watch1Specs.put("Sensors", "ECG, SPO2, Stress, Deep EEG tracker");
        watch1Specs.put("Material", "Liquid Titanium Alloy");
        products.add(new Product("watch-coresync", "BLUECORE CoreSync Chrono", "BLUECORE", "smart-watches", 
            32999.00, 36999.00, 10, 4.9, 96, "watch-coresync", 
            "A futuristic timepiece generating holographic biometric displays over a liquid titanium bezel.", 
            watch1Specs, 35, true, "Holo Wearable"));

        Map<String, String> watch2Specs = new LinkedHashMap<>();
        watch2Specs.put("Case Size", "49mm Aerospace Titanium");
        watch2Specs.put("Battery Life", "Up to 36 Hours / 72 Hours low-power");
        watch2Specs.put("GPS", "Precision Dual-frequency GPS");
        products.add(new Product("watch-apple-ultra", "Apple Watch Ultra 2", "Apple", "smart-watches", 
            89900.00, 94900.00, 5, 4.8, 185, "watch-apple-ultra", 
            "The most rugged and capable Apple Watch ever. Crafted from 95% recycled titanium.", 
            watch2Specs, 20, true, "Rugged Pro"));

        Map<String, String> watch3Specs = new LinkedHashMap<>();
        watch3Specs.put("Bezel", "Rotating Physical Dial bezel");
        watch3Specs.put("OS", "Wear OS Powered by Samsung");
        watch3Specs.put("BioSensor", "Body Composition, Skeletal Muscle Analysis");
        products.add(new Product("watch-galaxy-6", "Samsung Galaxy Watch 6 Classic", "Samsung", "smart-watches", 
            39999.00, 44999.00, 11, 4.6, 142, "watch-galaxy-6", 
            "Brings back the legendary physical rotating bezel. Elevate your everyday health metrics.", 
            watch3Specs, 22, false, "Classic Smart"));

        Map<String, String> watch4Specs = new LinkedHashMap<>();
        watch4Specs.put("Battery Life", "Up to 16 Days");
        watch4Specs.put("Screen", "AMOLED display with Sapphire Lens");
        watch4Specs.put("Maps", "Multicontinent TopoActive offline mapping");
        products.add(new Product("watch-garmin-fenix", "Garmin Fenix 7 Pro Sapphire Solar", "Garmin", "smart-watches", 
            74999.00, 84999.00, 11, 4.8, 80, "watch-garmin-fenix", 
            "Solar charging multisport watch designed to conquer high-altitude and backcountry environments.", 
            watch4Specs, 12, false, "Adventure Master"));


        // --- 7. GAMING (gaming) ---
        Map<String, String> game1Specs = new LinkedHashMap<>();
        game1Specs.put("Holographics", "Quantum Core Render");
        game1Specs.put("Inputs", "Neural-link controllers");
        game1Specs.put("Drive", "2TB Solid-state Tachyon Drive");
        products.add(new Product("game-corestation", "BLUECORE CoreStation Genesis", "BLUECORE", "gaming", 
            49999.00, 57999.00, 13, 4.9, 178, "game-corestation", 
            "An immersive home console incorporating low-latency neural tracking and holographic particle accelerators.", 
            game1Specs, 20, true, "Next-Gen Console"));

        Map<String, String> game2Specs = new LinkedHashMap<>();
        game2Specs.put("Processor", "Custom AMD Zen 2 CPU / RDNA 2 GPU");
        game2Specs.put("Storage", "825GB Custom SSD");
        game2Specs.put("Features", "DualSense Haptics, Ray Tracing, 120Hz");
        products.add(new Product("game-ps5", "PlayStation 5 Slim Console", "Sony", "gaming", 
            44990.00, 49990.00, 10, 4.8, 540, "game-ps5", 
            "Experience lightning-fast loading times, immersive haptic feedback, and breathtaking 3D audio.", 
            game2Specs, 40, true, "Gamer Essential"));

        Map<String, String> game3Specs = new LinkedHashMap<>();
        game3Specs.put("Performance", "12 Teraflops Compute Power");
        game3Specs.put("Storage", "1TB SSD");
        game3Specs.put("Resolution", "True 4K Gaming / 8K HDR");
        products.add(new Product("game-xbox", "Xbox Series X Console", "Microsoft", "gaming", 
            49990.00, 54990.00, 9, 4.7, 390, "game-xbox", 
            "The fastest, most powerful Xbox ever. Play thousands of titles across four generations of consoles.", 
            game3Specs, 25, false, "Raw Power"));

        Map<String, String> game4Specs = new LinkedHashMap<>();
        game4Specs.put("Display", "7-inch OLED Touchscreen");
        game4Specs.put("Modes", "Handheld, Tabletop, TV dock mode");
        products.add(new Product("game-switch", "Nintendo Switch OLED Model", "Nintendo", "gaming", 
            32990.00, 34990.00, 5, 4.7, 420, "game-switch", 
            "Features a vibrant 7-inch OLED screen, a wide adjustable stand, and a wired LAN port dock.", 
            game4Specs, 30, false, "Handheld Fun"));

        Map<String, String> game5Specs = new LinkedHashMap<>();
        game5Specs.put("Display", "7.4-inch 90Hz OLED Display");
        birdSpecs(game5Specs);
        products.add(new Product("game-steamdeck", "Steam Deck OLED 1TB", "Valve", "gaming", 
            59990.00, 64990.00, 7, 4.8, 195, "game-steamdeck", 
            "The definitive portable PC gaming platform. Features improved battery, OLED screen and large trackpads.", 
            game5Specs, 15, false, "Portable PC"));


        // --- 8. HOME APPLIANCES (appliances) ---
        Map<String, String> app1Specs = new LinkedHashMap<>();
        app1Specs.put("Filtration", "Holographic HEPA filter");
        app1Specs.put("Clean Tech", "Dust-detecting laser scanner");
        app1Specs.put("Motor", "150,000 RPM Hypercore");
        products.add(new Product("app-coredust", "BLUECORE LaserVac Genesis", "BLUECORE", "appliances", 
            59999.00, 67999.00, 11, 4.9, 88, "app-coredust", 
            "Laser dust-tracking vacuum cleaner projecting virtual floor dirt grids for 100% dust extraction.", 
            app1Specs, 12, true, "Smart Clean"));

        Map<String, String> app2Specs = new LinkedHashMap<>();
        app2Specs.put("Capacity", "8.3 Liters XXL");
        app2Specs.put("Modes", "Air Fry, Roast, Dehydrate, Bake");
        app2Specs.put("Smart App", "Wi-Fi Connected Recipe Engine");
        products.add(new Product("app-philips-fryer", "Philips Airfryer Premium XXL", "Philips", "appliances", 
            19999.00, 23999.00, 16, 4.7, 140, "app-philips-fryer", 
            "Airfryer using rapid air circulation to cook meals with up to 90% less oil.", 
            app2Specs, 20, false, "Smart Kitchen"));

        Map<String, String> app3Specs = new LinkedHashMap<>();
        app3Specs.put("Suction", "6000Pa High-Power");
        app3Specs.put("Docking", "Empty, Wash, Refill Auto Dock");
        app3Specs.put("Navigation", "PreciSense LiDAR Maps");
        products.add(new Product("app-roborock", "Roborock S8 Pro Ultra Robot Vacuum", "Roborock", "appliances", 
            119999.00, 139999.00, 14, 4.8, 95, "app-roborock", 
            "Fully automated robot vacuum and mop that cleans, empties, washes itself, and refills its tank.", 
            app3Specs, 10, true, "Autonomous Clean"));
    }

    private void birdSpecs(Map<String, String> map) {
        map.put("Processor", "AMD Zen 2 APU");
        map.put("Storage", "1TB NVMe SSD");
        map.put("Controls", "Dual Trackpads, Gyro, Hall-Effect triggers");
    }

    public List<Product> getAllProducts() {
        return products;
    }

    public Optional<Product> getProductById(String id) {
        return products.stream().filter(p -> p.getId().equals(id)).findFirst();
    }

    public List<Product> getProductsByCategory(String category) {
        return products.stream().filter(p -> p.getCategory().equalsIgnoreCase(category)).toList();
    }

    public List<Product> getFeaturedProducts() {
        return products.stream().filter(Product::isFeatured).toList();
    }

    public List<Product> getOffers() {
        return products.stream().filter(p -> p.getDiscount() >= 12).toList();
    }

    public List<Product> searchProducts(String query) {
        if (query == null || query.isBlank()) {
            return products;
        }
        String q = query.toLowerCase().trim();
        return products.stream().filter(p -> 
            p.getName().toLowerCase().contains(q) || 
            p.getBrand().toLowerCase().contains(q) || 
            p.getCategory().toLowerCase().contains(q) ||
            p.getDescription().toLowerCase().contains(q)
        ).toList();
    }
}
