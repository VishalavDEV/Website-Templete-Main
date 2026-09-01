const API_BASE = 'http://localhost:8080/api/v1';

// Fallback Mock Data in case backend is offline
const MOCK_DESTINATIONS = [
  {
    id: "goa", name: "Goa", country: "India", tagline: "Land of Sun, Sand & Sea",
    description: "Famed for its pristine white beaches, Arabian Sea views, Portuguese architecture, active nightlife, and beach shacks.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    bestTime: "November – February",
    attractions: ["Calangute Beach", "Dudhsagar Falls", "Basilica of Bom Jesus", "Anjuna Flea Market"],
    travelType: "Flight / Train", duration: "5 Days", rating: 4.7, price: 600.0,
    category: ["beach", "culture", "luxury"], temperature: "28°C",
    experienceTags: ["Beaches", "Parties", "Shacks"], difficulty: "Easy",
    gallery: [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "bali", name: "Bali", country: "Indonesia", tagline: "Island of Gods",
    description: "A tropical escape famed for its tiered rice terraces, Uluwatu sea temples, tropical sunset views, and Ubud sacred forests.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    bestTime: "April – October",
    attractions: ["Ubud Sacred Monkey Forest", "Uluwatu Temple", "Tanah Lot Sea Temple", "Seminyak Beach"],
    travelType: "Flight", duration: "6 Days", rating: 4.8, price: 900.0,
    category: ["beach", "adventure", "nature", "hidden gems"], temperature: "26°C",
    experienceTags: ["Temples", "Beaches", "Surf"], difficulty: "Easy",
    gallery: [
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1552608494-18ba4c799675?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1477587458883-471a5ed08bc4?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "maldives", name: "Maldives", country: "Maldives", tagline: "Blue Lagoon Paradise",
    description: "A pure luxury paradise of overwater villas, private blue lagoons, active coral reefs, and tropical beach sunset views.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    bestTime: "December – April",
    attractions: ["Male Atoll Spa", "Maafushi Coral Reef", "Private Yacht Excursion", "Underwater Dining"],
    travelType: "Flight", duration: "5 Days", rating: 4.9, price: 3200.0,
    category: ["beach", "luxury"], temperature: "29°C",
    experienceTags: ["Lagoons", "Villas", "Snorkeling"], difficulty: "Easy",
    gallery: [
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "phuket", name: "Phuket", country: "Thailand", tagline: "Andaman Pearl Coast",
    description: "Thailand's largest island, boasting golden sand beaches, lively night markets, and secret tropical inlets.",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
    bestTime: "November – April",
    attractions: ["Patong Beach Nightlife", "Phi Phi Islands Tour", "Big Buddha Shrine", "Old Phuket Town"],
    travelType: "Flight", duration: "6 Days", rating: 4.6, price: 800.0,
    category: ["beach", "hidden gems"], temperature: "31°C",
    experienceTags: ["Islands", "Beaches", "Markets"], difficulty: "Easy",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "andaman", name: "Andaman", country: "India", tagline: "Pristine Marine Escapes",
    description: "Pristine isolated Indian archipelago in the Bay of Bengal, famous for Radhanagar beach sunset and coral reef snorkeling.",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80",
    bestTime: "October – May",
    attractions: ["Radhanagar Beach Walk", "Havelock Scuba diving", "Cellular Jail Museum", "Barren Island Volcano"],
    travelType: "Flight", duration: "6 Days", rating: 4.8, price: 1100.0,
    category: ["beach", "hidden gems"], temperature: "27°C",
    experienceTags: ["Reefs", "Islands", "Diving"], difficulty: "Medium",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "ladakh", name: "Ladakh", country: "India", tagline: "The Land of High Passes",
    description: "Conquer high-altitude mountains, explore century-old cliff monasteries, and gaze at Pangong Lake's crystal blue waters.",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
    bestTime: "June – September",
    attractions: ["Pangong Lake Camp", "Khardung La Pass Ride", "Thiksey Monastery Tour", "Nubra Valley Safari"],
    travelType: "Flight / Bike", duration: "7 Days", rating: 4.9, price: 750.0,
    category: ["mountains", "adventure"], temperature: "10°C",
    experienceTags: ["High Passes", "Lakes", "Monasteries"], difficulty: "Hard",
    gallery: [
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "switzerland", name: "Switzerland", country: "Switzerland", tagline: "Peaks of the Swiss Alps",
    description: "Crystalline alpine lakes, scenic train routes through high snow gorges, and cozy chalet mountain villages.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    bestTime: "June – September",
    attractions: ["Matterhorn Mountain", "Jungfraujoch Pass", "Lake Geneva Cruise", "Lucerne Old Town"],
    travelType: "Train", duration: "8 Days", rating: 4.9, price: 2200.0,
    category: ["mountains", "nature", "luxury"], temperature: "12°C",
    experienceTags: ["Peaks", "Lakes", "Skiing"], difficulty: "Hard",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504893524553-ac55fce69cbf?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "nepal", name: "Nepal", country: "Nepal", tagline: "Himalayan Ridge Hikes",
    description: "Home to Mount Everest. Explore massive snowy peaks, scenic climbing trails, and ancient Buddhist forest shrines.",
    image: "https://images.unsplash.com/photo-1486916856992-e4db22c8df33?auto=format&fit=crop&w=800&q=80",
    bestTime: "October – November",
    attractions: ["Everest Base Camp Trek", "Kathmandu Durbar Square", "Annapurna Circuit Route", "Pokhara Lake Boating"],
    travelType: "Flight / Trek", duration: "9 Days", rating: 4.8, price: 1200.0,
    category: ["mountains", "hidden gems"], temperature: "8°C",
    experienceTags: ["Everest", "Hikes", "Temples"], difficulty: "Hard",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "himachal", name: "Himachal Pradesh", country: "India", tagline: "Forests & Valleys",
    description: "Beautiful high pine forests, snow-clad slopes, deep gorges, and swift river valleys in northern India.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    bestTime: "October – June",
    attractions: ["Manali Solang Valley", "Dharamshala Trekking", "Shimla Ridge Walking", "Spiti Valley Roads"],
    travelType: "Train / Bus", duration: "6 Days", rating: 4.7, price: 500.0,
    category: ["mountains", "hidden gems"], temperature: "14°C",
    experienceTags: ["Valleys", "Pine Woods", "Snow"], difficulty: "Medium",
    gallery: [
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "newzealand", name: "New Zealand", country: "New Zealand", tagline: "Alpine Fiords & Ridges",
    description: "Breathtaking glacial valleys, high gorges, Milford Sound fiord cruises, alpine trekking, and extreme bungee jumping.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    bestTime: "December – February",
    attractions: ["Milford Sound Cruise", "Queenstown Bungee Jump", "Rotorua Geothermal Valley", "Hobbiton Movie Set"],
    travelType: "Flight", duration: "8 Days", rating: 4.8, price: 2800.0,
    category: ["mountains", "adventure"], temperature: "16°C",
    experienceTags: ["Glaciers", "Fiords", "Adventure"], difficulty: "Medium",
    gallery: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504893524553-ac55fce69cbf?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "tokyo", name: "Tokyo", country: "Japan", tagline: "Shibuya Neon Crossroads",
    description: "A hyper-modern metropolis mixing futuristic neon-lit skyscrapers with ancient shinto shrines and quiet cherry blossom gardens.",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
    bestTime: "March – May",
    attractions: ["Senso-ji Temple", "Shibuya Crossing", "Meiji Forest Shrine", "Tokyo Skytree"],
    travelType: "Flight", duration: "7 Days", rating: 4.9, price: 1800.0,
    category: ["cities"], temperature: "15°C",
    experienceTags: ["Temples", "Food", "Anime"], difficulty: "Easy",
    gallery: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "paris", name: "Paris", country: "France", tagline: "City of Romance & Light",
    description: "A global center for art, fashion, gastronomy, and romance. Famous for its cafe culture and architectural sights.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    bestTime: "April – October",
    attractions: ["Eiffel Tower", "Louvre Art Museum", "Seine River Cruise", "Notre-Dame Cathedral"],
    travelType: "Flight", duration: "5 Days", rating: 4.8, price: 1500.0,
    category: ["cities", "luxury"], temperature: "20°C",
    experienceTags: ["Eiffel", "Cafes", "Museums"], difficulty: "Easy",
    gallery: [
      "https://images.unsplash.com/photo-1499856871958-5b9647a64bc8?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "dubai", name: "Dubai", country: "UAE", tagline: "Futuristic Desert Oasis",
    description: "Dubai is known for luxury shopping, ultra-modern skyscrapers, luxury yacht marinas, and a lively night scene.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    bestTime: "November – March",
    attractions: ["Burj Khalifa Observatory", "Dubai Mall Aquarium", "Palm Jumeirah", "Desert Dune Basher"],
    travelType: "Flight", duration: "5 Days", rating: 4.7, price: 1600.0,
    category: ["cities", "luxury"], temperature: "35°C",
    experienceTags: ["Skyscrapers", "Desert", "Luxury"], difficulty: "Easy",
    gallery: [
      "https://images.unsplash.com/photo-1526495124232-a04e1849168a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "newyork", name: "New York", country: "USA", tagline: "The Capital of the World",
    description: "A fast-paced global hub of art, theatre, shopping, and skyscrapers, famous for its Central Park and Broadway skyline.",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80",
    bestTime: "September – November",
    attractions: ["Statue of Liberty", "Central Park Walk", "Broadway Theatre", "Empire State Observatory"],
    travelType: "Flight", duration: "5 Days", rating: 4.8, price: 1900.0,
    category: ["cities"], temperature: "22°C",
    experienceTags: ["Central Park", "Broadway", "Skyline"], difficulty: "Easy",
    gallery: [
      "https://images.unsplash.com/photo-1522083165195-3427ec02927a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513829096990-4b22db53429b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "singapore", name: "Singapore", country: "Singapore", tagline: "The Lions Garden City",
    description: "Clean garden metropolis featuring Marina Bay Sands skyline, massive green domes, and lively food markets.",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
    bestTime: "December – June",
    attractions: ["Gardens by the Bay", "Sentosa Beach Resort", "Chinatown Markets Walk", "Universal Studios"],
    travelType: "Flight", duration: "5 Days", rating: 4.7, price: 1700.0,
    category: ["cities", "hidden gems"], temperature: "29°C",
    experienceTags: ["Gardens", "Clean", "Food Markets"], difficulty: "Easy",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "iceland", name: "Iceland", country: "Iceland", tagline: "Land of Fire & Ice",
    description: "A dramatic island nation characterized by active volcanoes, massive glaciers, boiling hot geysers, and black sand beaches.",
    image: "https://images.unsplash.com/photo-1504893524553-ac55fce69cbf?auto=format&fit=crop&w=800&q=80",
    bestTime: "June – August",
    attractions: ["Blue Lagoon Spa", "Gullfoss Waterfall", "Geysir Hot Springs", "Northern Lights Tour"],
    travelType: "Flight", duration: "6 Days", rating: 4.9, price: 2400.0,
    category: ["adventure", "nature"], temperature: "4°C",
    experienceTags: ["Glaciers", "Volcanoes", "Aurora"], difficulty: "Hard",
    gallery: [
      "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1504893524553-ac55fce69cbf?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "rishikesh", name: "Rishikesh", country: "India", tagline: "Himalayan Foothills Escape",
    description: "Adventure capital of India. River rafting on the Ganges, suspension bridges, and yoga ashrams.",
    image: "https://images.unsplash.com/photo-1598977123418-45f04b6167c3?auto=format&fit=crop&w=800&q=80",
    bestTime: "September – April",
    attractions: ["Ganges River Rafting", "Lakshman Jhula Bridge", "Beatles Ashram Walk", "Neer Garh Waterfall"],
    travelType: "Train / Bus", duration: "4 Days", rating: 4.6, price: 400.0,
    category: ["adventure", "hidden gems"], temperature: "22°C",
    experienceTags: ["Rafting", "Yoga", "Ghats"], difficulty: "Medium",
    gallery: [
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598977123418-45f04b6167c3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "kerala", name: "Kerala", country: "India", tagline: "God's Own Country",
    description: "A serene tropical paradise known for its palm-lined backwaters, network of canals, spice plantations, and the Western Ghats.",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    bestTime: "October – March",
    attractions: ["Alleppey Houseboat", "Munnar Tea Gardens", "Wayanad Forests", "Kochi Fort"],
    travelType: "Flight / Train", duration: "7 Days", rating: 4.9, price: 800.0,
    category: ["nature"], temperature: "24°C",
    experienceTags: ["Backwaters", "Beaches", "Nature"], difficulty: "Easy",
    gallery: [
      "https://images.unsplash.com/photo-1552608494-18ba4c799675?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "costarica", name: "Costa Rica", country: "Costa Rica", tagline: "Pura Vida Rainforests",
    description: "Lush tropical rainforests, active volcano hiking, hanging jungle bridges, and exotic wildlife watching.",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
    bestTime: "December – April",
    attractions: ["Arenal Volcano Hike", "Monteverde Cloud Forest", "Manuel Antonio Beach", "Jungle Ziplining"],
    travelType: "Flight", duration: "6 Days", rating: 4.7, price: 1600.0,
    category: ["nature", "hidden gems"], temperature: "25°C",
    experienceTags: ["Jungle", "Volcanoes", "Sloths"], difficulty: "Medium",
    gallery: [
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "rajasthan", name: "Rajasthan", country: "India", tagline: "Land of Kings & Forts",
    description: "A majestic state filled with magnificent royal palaces, historic sandstone forts, golden desert sand dunes, and rich heritage walks.",
    image: "https://images.unsplash.com/photo-1477587458883-471a5ed08bc4?auto=format&fit=crop&w=800&q=80",
    bestTime: "October – March",
    attractions: ["Jaipur City Palace", "Udaipur Lake Palace", "Jaisalmer Sand Dunes", "Mehrangarh Fort"],
    travelType: "Train", duration: "8 Days", rating: 4.8, price: 700.0,
    category: ["culture"], temperature: "32°C",
    experienceTags: ["Palaces", "Forts", "Desert"], difficulty: "Medium",
    gallery: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1477587458883-471a5ed08bc4?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "kyoto", name: "Kyoto", country: "Japan", tagline: "Ancient Shinto Temples",
    description: "Kyoto, the heart of traditional Japan. Famed for thousand orange torii gates, Arashiyama bamboo forests, and gold temples.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    bestTime: "October – November",
    attractions: ["Fushimi Inari Gates", "Kinkaku-ji Pavilion", "Arashiyama Bamboo Grove", "Gion Geisha District"],
    travelType: "Flight / Train", duration: "6 Days", rating: 4.8, price: 1400.0,
    category: ["culture", "hidden gems"], temperature: "16°C",
    experienceTags: ["Torii Gates", "Bamboo", "Temples"], difficulty: "Easy",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "rome", name: "Rome", country: "Italy", tagline: "The Roman Empire Relics",
    description: "Rome features iconic UNESCO ruins, the Colosseum, Vatican museums, and traditional pizza and pasta avenues.",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
    bestTime: "September – November",
    attractions: ["Colosseum Arena", "Trevi Fountain Coin", "Vatican St. Peter Basilica", "Roman Forum Walk"],
    travelType: "Flight", duration: "5 Days", rating: 4.8, price: 1800.0,
    category: ["culture", "hidden gems"], temperature: "21°C",
    experienceTags: ["Colosseum", "Fountains", "Pasta"], difficulty: "Easy",
    gallery: [
      "https://images.unsplash.com/photo-1529260830199-4455b90279c0fa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1529260830199-4455b90279c0fa?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "istanbul", name: "Istanbul", country: "Turkey", tagline: "Crossroad of Asia & Europe",
    description: "A historic bridge between Europe and Asia. Features Hagia Sophia, Grand Bazaar market, and Bosphorus cruises.",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80",
    bestTime: "September – November",
    attractions: ["Hagia Sophia Mosque", "Topkapi Palace Tour", "Grand Bazaar Shopping", "Bosphorus Ferry Ride"],
    travelType: "Flight", duration: "5 Days", rating: 4.7, price: 1100.0,
    category: ["culture", "hidden gems"], temperature: "18°C",
    experienceTags: ["Mosques", "Bazaars", "Spices"], difficulty: "Easy",
    gallery: [
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=crop&w=600&q=80"
    ]
  },
  {
    id: "varanasi", name: "Varanasi", country: "India", tagline: "The Eternal Holy Ghats",
    description: "One of the oldest continually inhabited cities. Holy Ganges river banks and evening Aarti light ceremonies.",
    image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=800&q=80",
    bestTime: "October – March",
    attractions: ["Ganga Evening Aarti", "Sarnath Buddha Temple", "Sunrise Ghat Boat Ride", "Kashi Vishwanath Temple"],
    travelType: "Train / Bus", duration: "4 Days", rating: 4.8, price: 350.0,
    category: ["culture", "hidden gems"], temperature: "20°C",
    experienceTags: ["Ghats", "Aarti", "Ganges"], difficulty: "Medium",
    gallery: [
      "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598977123418-45f04b6167c3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "santorini", name: "Santorini", country: "Greece", tagline: "Volcanic Domes & Sunsets",
    description: "Iconic blue-domed white houses perched on volcanic cliffs overlooking the Aegean Sea, with premium luxury villas.",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    bestTime: "May – October",
    attractions: ["Oia Sunset Stroll", "Fira Cliff Walk", "Red Sand Beach Lounge", "Volcanic Caldera Cruise"],
    travelType: "Flight / Ferry", duration: "5 Days", rating: 4.9, price: 2900.0,
    category: ["luxury", "hidden gems"], temperature: "24°C",
    experienceTags: ["Blue Domes", "Aegean", "Caldera"], difficulty: "Easy",
    gallery: [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80"
    ]
  }
];

const MOCK_EXPERIENCES = [
  {
    id: "exp-himalayas", name: "Sunrise in the Himalayas",
    description: "Conquer steep rocky routes and witness a golden sunrise reflecting off the snowy peaks of the mighty Himalayas.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    category: "Adventure", duration: "3 Days", location: "Ladakh, India", rating: 4.9, priceIndicator: "$$$", icon: "Mountain"
  },
  {
    id: "exp-backwater", name: "Backwater Escape in Kerala",
    description: "Sail a luxury wooden houseboat through serene canals, watching local rural life drift past tea and banana tree groves.",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    category: "Nature", duration: "2 Days", location: "Alleppey, India", rating: 4.8, priceIndicator: "$$", icon: "Sunset"
  },
  {
    id: "exp-desert", name: "Desert Night in Rajasthan",
    description: "Ride camels across the golden desert dunes and camp under a canopy of stars with traditional Rajasthani dances.",
    image: "https://images.unsplash.com/photo-1477587458883-471a5ed08bc4?auto=format&fit=crop&w=800&q=80",
    category: "Culture", duration: "1 Day", location: "Jaisalmer, India", rating: 4.7, priceIndicator: "$$", icon: "Tent"
  },
  {
    id: "exp-scuba", name: "Scuba Diving in Andaman",
    description: "Dive deep into warm turquoise waters to explore coral reefs and swim alongside sea turtles.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    category: "Adventure", duration: "4 Hours", location: "Havelock Island, India", rating: 4.9, priceIndicator: "$$$", icon: "Compass"
  },

  {
    id: "exp-cherry", name: "Cherry Blossom Walk in Tokyo",
    description: "Wander underneath standard cherry blossom canopies reflecting over historical palace canals.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    category: "Nature", duration: "6 Hours", location: "Tokyo, Japan", rating: 4.8, priceIndicator: "$$", icon: "Flower"
  }
];

const MOCK_STORIES = [
  {
    id: "story-kerala", title: "7 Days Through Kerala",
    excerpt: "An editorial review of a slow backwater house-boat cruise and green tea hill climbing journeys in southern India.",
    content: "Sailing on a traditional Kettuvallam through the silent, green palm-fringed lagoons of Alleppey is an unforgettable meditation. We walked through organic spice farms in Munnar, smelling cardamoms, and stayed in local home-stays where delicious traditional seafood was served on fresh banana leaves.",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    author: "Elena Rostova", readTime: "7 mins read", location: "Kerala", category: "Nature"
  },
  {
    id: "story-tokyo", title: "Lost In The Streets Of Tokyo",
    excerpt: "Exploring the massive contrast between Tokyo's modern shibuya neon screens and quiet forest temples.",
    content: "Standing in the middle of Shibuya Crossing, you feel the pulse of modern technology. Yet, just minutes away, walking through the high cedar woods surrounding the Meiji Shrine, the noise completely vanishes. We ate sushi at local corner shops, shopped in electric Akihabara, and watched the sunrise from Tokyo Skytree.",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
    author: "Aiko Tanaka", readTime: "5 mins read", location: "Tokyo", category: "Culture"
  },
  {
    id: "story-alps", title: "A Weekend In The Swiss Alps",
    excerpt: "Conquering glacial ski slopes and drinking warm hot chocolate in cozy snow cabins in Zermatt.",
    content: "Waking up to the giant triangular peak of the Matterhorn casting shadows over our snow cabin was beautiful. We skied down slopes in Zermatt, took the high scenic bullet train across deep valleys, and stopped at old cheese villages for traditional fondue dinners.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    author: "Marcus Aurelius", readTime: "6 mins read", location: "Switzerland", category: "Mountains"
  },
  {
    id: "story-rajasthan", title: "The Colors Of Rajasthan",
    excerpt: "Photographic journal of sandstone castles, pink street markets, and desert camps.",
    content: "Rajasthan is a explosion of pigments. The pink walls of Jaipur, the blue alleys of Jodhpur, and the golden sand dunes of Jaisalmer are gorgeous. We spent nights sleeping in desert tents, watching local musicians perform by open fire-pits, and explored palaces filled with stained-glass designs.",
    image: "https://images.unsplash.com/photo-1477587458883-471a5ed08bc4?auto=format&fit=crop&w=800&q=80",
    author: "Rajesh Kumar", readTime: "8 mins read", location: "Rajasthan", category: "Culture"
  },
  {
    id: "story-bali", title: "Chasing Sunsets In Bali",
    excerpt: "Finding isolated surf beaches and ancient sea temples in Ubud and Uluwatu.",
    content: "Bali has a magical aura. We climbed the volcanic trails of Mount Batur in the dark to catch the sunrise, explored old temples carved inside jungles in Ubud, and watched traditional dances on beach cliffs during sunset in Uluwatu. A tropical dream.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    author: "Chloe Dupoint", readTime: "5 mins read", location: "Bali", category: "Beach"
  }
];

const MOCK_CATEGORIES = [
  { name: "Beach", description: "Sun, warm sands, and crystal sea waves.", icon: "Waves" },
  { name: "Mountains", description: "Towering snow peaks and alpine hiking treks.", icon: "Mountain" },
  { name: "Cities", description: "Historic architecture and bustling street life.", icon: "Building" },
  { name: "Adventure", description: "Thrilling dunes, glaciers, and extreme sports.", icon: "Compass" },
  { name: "Nature", description: "Exploring green forests, tea valleys, and backwaters.", icon: "Trees" },
  { name: "Culture", description: "Discovering palaces, temples, and ancient history.", icon: "Library" },
  { name: "Luxury", description: "Ultra high-end stays, yachts, and skyline resorts.", icon: "Crown" },
  { name: "Hidden Gems", description: "Secret getaways and pristine isolated villages.", icon: "Sparkles" }
];

export async function fetchDestinations() {
  try {
    const res = await fetch(`${API_BASE}/destinations`);
    if (!res.ok) throw new Error();
    return await res.json();
  } catch (err) {
    console.warn("Backend offline, serving fallback destinations.");
    return MOCK_DESTINATIONS;
  }
}

export async function fetchDestinationById(id) {
  try {
    const res = await fetch(`${API_BASE}/destinations/${id}`);
    if (!res.ok) throw new Error();
    return await res.json();
  } catch (err) {
    console.warn(`Backend offline, serving fallback destination for id: ${id}`);
    return MOCK_DESTINATIONS.find(d => d.id === id) || MOCK_DESTINATIONS[0];
  }
}

export async function fetchExperiences() {
  try {
    const res = await fetch(`${API_BASE}/experiences`);
    if (!res.ok) throw new Error();
    return await res.json();
  } catch (err) {
    console.warn("Backend offline, serving fallback experiences.");
    return MOCK_EXPERIENCES;
  }
}

export async function fetchStories() {
  try {
    const res = await fetch(`${API_BASE}/stories`);
    if (!res.ok) throw new Error();
    return await res.json();
  } catch (err) {
    console.warn("Backend offline, serving fallback stories.");
    return MOCK_STORIES;
  }
}

export async function fetchCategories() {
  try {
    const res = await fetch(`${API_BASE}/categories`);
    if (!res.ok) throw new Error();
    return await res.json();
  } catch (err) {
    console.warn("Backend offline, serving fallback categories.");
    return MOCK_CATEGORIES;
  }
}

export async function fetchRecommendations(mood) {
  try {
    const res = await fetch(`${API_BASE}/recommendations/${mood}`);
    if (!res.ok) throw new Error();
    return await res.json();
  } catch (err) {
    console.warn(`Backend offline, serving fallback recommendations for mood: ${mood}`);
    const key = mood.toLowerCase().trim();
    let matches;
    if (key === "escape") matches = ["kerala", "bali", "iceland"];
    else if (key === "adventure") matches = ["iceland", "switzerland", "newyork"];
    else if (key === "relax") matches = ["bali", "goa", "kerala"];
    else if (key === "explore") matches = ["tokyo", "paris", "rajasthan"];
    else if (key === "romance") matches = ["paris", "switzerland", "kerala"];
    else if (key === "food") matches = ["tokyo", "paris", "goa"];
    else if (key === "photography") matches = ["iceland", "tokyo", "switzerland", "kerala"];
    else if (key === "backpack") matches = ["goa", "rajasthan", "bali"];
    else matches = ["kerala", "bali", "tokyo"];
    
    return MOCK_DESTINATIONS.filter(d => matches.includes(d.id));
  }
}

export async function submitContact(message) {
  try {
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message)
    });
    if (!res.ok) throw new Error();
    return await res.json();
  } catch (err) {
    console.warn("Backend offline, simulating contact postcard submission locally.");
    return {
      success: true,
      message: "Postcard sent successfully! packing our bags soon. (Offline Fallback Mode)"
    };
  }
}

export async function submitPlannerRequest(request) {
  try {
    const res = await fetch(`${API_BASE}/travel-planner`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request)
    });
    if (!res.ok) throw new Error();
    return await res.json();
  } catch (err) {
    console.warn("Backend offline, compiling planner itinerary locally.");
    
    const daysCount = Math.max(request.days || 1, 1);
    const schedules = [];
    const style = (request.style || "adventure").toLowerCase();
    
    for (let i = 1; i <= daysCount; i++) {
      let title;
      let description;
      let activities;
      let meals = "Breakfast included";

      if (i === 1) {
        title = "Arrival & Welcome Exploration";
        description = `Arrive at your premium resort in ${request.destination}. Relax and unpack your bags before a private welcome evening briefing.`;
        activities = ["Airport check-in & Transfer", "Hotel welcome briefing", "Sunset terrace cocktail reception"];
      } else if (i === daysCount) {
        title = "Departure & Souvenir Packing";
        description = "Enjoy a slow morning walk, grab your local souvenirs, and check out before your expedited limousine transfer back to the terminal.";
        activities = ["Local market shopping", "Expedited check-out", "Private airport limousine transfer"];
        meals = "Breakfast & Lunch";
      } else {
        if (style.includes("adventure")) {
          title = `Day ${i}: Outdoor Thrills & Nature Trekking`;
          description = "Gear up for a fast-paced day climbing rocky routes, trekking volcanic ridges, or visiting local canyons.";
          activities = ["Scenic trek or canyon walkthrough", "Local guide wilderness navigation", "Riverside picnic lunch"];
          meals = "Breakfast & Lunch packed";
        } else if (style.includes("luxury")) {
          title = `Day ${i}: Private Yacht Charter & Fine Dining`;
          description = "Experience ultra-luxury travel. Relax on private sunset cruises and enjoy reservation-only multi-course culinary tasting menus.";
          activities = ["Private yacht sailing", "Spa body therapy", "Vip culinary tasting session"];
          meals = "Breakfast, Lunch & Dinner";
        } else if (style.includes("relaxation") || style.includes("backpack")) {
          title = `Day ${i}: Island Hopping & Sunset Beach Lounge`;
          description = "Enjoy a slow-paced day. Swim in shallow lagoons, sleep on beach hammock swings, and drink tropical beverages.";
          activities = ["Beach snorkeling excursion", "Local marketplace walking", "Sunset beach bonfire"];
          meals = "Breakfast & Dinner";
        } else if (style.includes("romantic")) {
          title = `Day ${i}: Scenic Carriage Rides & Stargazing Picnic`;
          description = "Spend romantic hours exploring beautiful gardens, enjoying private carriage rides, and stargazing from local lookouts.";
          activities = ["Scenic botanical garden walk", "Double carriage tour", "Private candle-lit dinner session"];
          meals = "Breakfast & Candlelight Dinner";
        } else {
          title = `Day ${i}: Cultural Heritage & Food Walk`;
          description = "Immerse in local folklore. Visit UNESCO castles, explore ancient shrines, and eat local street foods.";
          activities = ["UNESCO castle walking tour", "Handicraft workshop visit", "Local street food tasting walk"];
          meals = "Breakfast & Lunch";
        }
      }
      schedules.push({ day: i, title, description, activities, meals });
    }
    
    let baseCostPerDay = 150.0;
    if (style.includes("luxury")) baseCostPerDay = 450.0;
    else if (style.includes("backpack")) baseCostPerDay = 65.0;
    
    const estimatedCost = baseCostPerDay * daysCount * (request.travelers || 1);
    
    return {
      destination: request.destination,
      style: request.style,
      totalDays: daysCount,
      estimatedCost,
      schedule: schedules
    };
  }
}

export async function fetchPackages() {
  return [
    {
      id: "pkg-tropical", title: "Tropical Escape",
      description: "Immerse yourself in pure white sands and crystal clear waters with our signature Maldives escape package.",
      destinations: ["Maldives"], duration: "5 Days / 4 Nights", type: "Beach Resort",
      inclusions: ["Luxury Beach Resort", "Island Tour", "Water Sports Voucher", "Daily Gourmet Breakfast & Dinner", "Speedboat Transfers"],
      price: 2200.0, image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=80"
    }
  ];
}
