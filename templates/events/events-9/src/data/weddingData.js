// AVELUNE VOWS - Central Data & Configuration File
// All couple information, dates, venue, events, menu, FAQs, and imagery can be customized here.

export const weddingData = {
  brand: {
    name: "AVELUNE VOWS",
    tagline: "Where Two Stories Become One.",
    shortName: "AVELUNE"
  },
  couple: {
    bride: "OLIVIA",
    brideFull: "Olivia Rose Vance",
    groom: "ALEXANDER",
    groomFull: "Alexander James Sterling",
    namesCombined: "OLIVIA & ALEXANDER",
    initials: "O & A"
  },
  details: {
    date: "18 DECEMBER 2026",
    dateISO: "2026-12-18T18:30:00",
    year: "2026",
    city: "CHENNAI",
    country: "INDIA",
    locationFull: "CHENNAI, INDIA",
    time: "6:30 PM ONWARDS",
    style: "Modern Luxury Wedding + Elegant Indian Celebration"
  },
  welcomeMessage: {
    heading: "TOGETHER WITH OUR FAMILIES",
    body: "We invite you to celebrate the beginning of our forever. Join us for a beautiful gathering filled with love, laughter, traditions and unforgettable memories."
  },
  heroImages: {
    // Curated high fashion luxury wedding editorial photography & user cathedral background
    centerCouple: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85",
    leftBouquet: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=85",
    rightBride: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85",
    videoPoster: "/images/wedding-bg.png",
    cathedralBg: "/images/wedding-bg.png"
  },
  ourStory: {
    subtitle: "Every forever begins somewhere.",
    howWeMet: {
      title: "HOW WE MET",
      text: "It was an autumn evening in Paris during an architectural exhibit. Olivia was studying classical stone arches while Alexander was sketching contemporary glass structures. A shared conversation about heritage design turned into a coffee that lasted until sunset.",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=85"
    },
    firstDate: {
      title: "OUR FIRST DATE",
      date: "14 NOVEMBER 2019",
      location: "Le Marais Cafe, Paris",
      memory: "Three hours of quiet laughter, jazz playing in the background, and discovering we both had a passion for old poetry and seaside sunsets.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=85"
    },
    timeline: [
      { year: "2019", title: "First Meeting", desc: "A chance encounter at the Paris Design Biennial." },
      { year: "2020", title: "First Date", desc: "A cozy evening in Le Marais that started a lifelong journey." },
      { year: "2021", title: "First Adventure", desc: "Backpacking through the serene backwaters and hills of South India." },
      { year: "2023", title: "Families Met", desc: "A warm celebration uniting both families in Chennai." },
      { year: "2025", title: "The Proposal", desc: "A private candlelit sunset proposal on the cliffside of Santorini." },
      { year: "2026", title: "Our Wedding", desc: "Tying the knot in Chennai surrounded by loved ones." }
    ],
    proposal: {
      title: "THE PROPOSAL STORY",
      where: "Santorini, Greece",
      when: "18 JUNE 2025",
      how: "As the sun dipped behind the caldera, Alexander surprised Olivia with a handcrafted leather album containing photographs from every month they spent together. On the final page was a single sentence: 'Will you build forever with me?'",
      reaction: "Overwhelmed with tears of happiness, Olivia said YES before Alexander could finish opening the ring box.",
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=85"
    },
    engagement: {
      title: "ENGAGEMENT CELEBRATION",
      details: "An intimate ring exchange surrounded by close family and friends under a canopy of white garden roses in Chennai.",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=85"
    }
  },
  events: [
    {
      id: "engagement",
      name: "ENGAGEMENT",
      tagline: "The Formal Promise",
      date: "16 DECEMBER 2026",
      time: "5:00 PM ONWARDS",
      venue: "Grand Ballroom, Taj Connemara",
      address: "Binny Road, Triplicane, Chennai",
      dressCode: "Formal Western / Elegant Evening Wear",
      description: "An elegant prelude to our wedding week featuring an intimate ring exchange ceremony, champagne toast, and family blessing.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=85"
    },
    {
      id: "haldi",
      name: "HALDI CEREMONY",
      tagline: "Sunlight, Marigolds & Blessings",
      date: "17 DECEMBER 2026",
      time: "10:00 AM ONWARDS",
      venue: "Royal Courtyard Pavilion",
      address: "Chennai Grand Heritage, ECR, Chennai",
      dressCode: "Bright Festive Yellow / Ochre / Warm Ochre",
      description: "A joyful traditional morning ritual of applying turmeric paste onto the bride and groom for auspicious blessings and glowing laughter.",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=85"
    },
    {
      id: "mehendi",
      name: "MEHENDI NIGHT",
      tagline: "Intricate Henna & Floral Music",
      date: "17 DECEMBER 2026",
      time: "4:00 PM ONWARDS",
      venue: "Heritage Terrace Gardens",
      address: "Chennai Grand Heritage, ECR, Chennai",
      dressCode: "Festive Ethnic / Emerald & Mint Green",
      description: "An afternoon filled with fragrant henna artists, live folk acoustic melodies, artisanal tea lounges, and vibrant photo moments.",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=85"
    },
    {
      id: "sangeet",
      name: "SANGEET NIGHT",
      tagline: "Music, Dance & Celebration",
      date: "17 DECEMBER 2026",
      time: "7:30 PM ONWARDS",
      venue: "The Imperial Crystal Hall",
      address: "Chennai Grand Heritage, ECR, Chennai",
      dressCode: "Glamorous Indo-Western / Royal Blue & Gold",
      description: "A sensational evening of choreograph dance performances by family and friends, live music band, and a celebratory feast.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=85"
    },
    {
      id: "wedding",
      name: "WEDDING CEREMONY",
      tagline: "The Sacred Vows",
      date: "18 DECEMBER 2026",
      time: "6:30 PM ONWARDS",
      venue: "Heritage Mandapam & Lawns",
      address: "Chennai Grand Heritage Palace, ECR, Chennai",
      dressCode: "Traditional Luxury Indian / Classic Formal",
      description: "The core holy ritual where Olivia and Alexander take their wedding vows around the sacred fire under a canopy of jasmine and lotus flowers.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85"
    },
    {
      id: "reception",
      name: "GRAND RECEPTION",
      tagline: "Gala Dinner & Toast",
      date: "18 DECEMBER 2026",
      time: "8:30 PM ONWARDS",
      venue: "Palace Oceanfront Lawn",
      address: "Chennai Grand Heritage, ECR, Chennai",
      dressCode: "Black Tie / Formal Evening Gown & Tuxedo",
      description: "An unforgettable evening featuring champagne toasts, multi-course dining, orchestral quartet, cake cutting, and fireworks under the stars.",
      image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=85"
    }
  ],
  schedule: [
    { time: "08:00 AM", title: "Bridal & Groom Preparations", category: "FAMILY", desc: "Styling, bridal portraits, and suite family moments." },
    { time: "10:00 AM", title: "Family Breakfast & Haldi Preparation", category: "FOOD", desc: "Fresh organic breakfast lounge in the garden courtyard." },
    { time: "01:00 PM", title: "Guest Arrival & Welcome Drinks", category: "FOOD", desc: "Arrival of guests with traditional nadaswaram music and floral garlands." },
    { time: "04:00 PM", title: "Pre-Wedding Photo Session", category: "PHOTOGRAPHY", desc: "Sunset portraits with bride, groom, and family on the lawn." },
    { time: "06:30 PM", title: "Wedding Vows & Ritual Ceremony", category: "CEREMONY", desc: "Sacred phere ceremony, garland exchange, and main wedding vows." },
    { time: "08:00 PM", title: "Royal Gala Dinner Lounge", category: "FOOD", desc: "Multi-cuisine banquet dinner with live acoustic string quartet." },
    { time: "09:00 PM", title: "Special Musical Performances", category: "MUSIC", desc: "Family dances, couple solo dance, and live fusion band." },
    { time: "10:30 PM", title: "Reception Celebration & Cake Cutting", category: "CEREMONY", desc: "Toast to the newlyweds, 5-tier cake cutting, and fireworks." },
    { time: "11:30 PM", title: "Farewell Vows & Send-Off", category: "FAMILY", desc: "Warm family farewell and sparkler exit for the couple." }
  ],
  venue: {
    name: "Chennai Grand Heritage Palace",
    subheading: "An elegant coastal sanctuary where heritage stone architecture meets modern luxury.",
    address: "Plot 42, East Coast Road (ECR), Injambakkam, Chennai, Tamil Nadu - 600115",
    city: "Chennai, India",
    phone: "+91 44 2811 9000",
    email: "events@chennaigrandheritage.com",
    mapEmbedUrl: "https://maps.google.com/maps?q=Chennai%20Grand%20Heritage&t=&z=13&ie=UTF8&iwloc=&output=embed",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
    parking: {
      valet: "Complimentary Valet Parking available at the Main Palace Gates.",
      guest: "Covered guest parking lot with 300+ reserved vehicle slots.",
      accessible: "Wheelchair accessible ramps and dedicated priority drop-off zone."
    },
    transportation: {
      airport: "Chennai International Airport (MAA) — 22 km (approx 45 mins drive).",
      railway: "Chennai Central Railway Station (MAS) — 19 km.",
      shuttle: "Luxury hotel shuttle buses operate hourly from partner hotels.",
      cabs: "Uber, Ola, and private luxury chauffeurs easily available at venue concierge."
    }
  },
  hotels: [
    {
      id: 1,
      name: "Taj Connemara Chennai",
      distance: "25 min from venue",
      stars: "5 Star Luxury",
      description: "Art deco heritage luxury hotel offering exclusive wedding guest rates.",
      facilities: ["Free Wi-Fi", "Swimming Pool", "Spa & Wellness", "Airport Transfer"],
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=85",
      bookingCode: "AVELUNE2026"
    },
    {
      id: 2,
      name: "The Leela Palace Chennai",
      distance: "15 min from venue",
      stars: "5 Star Sea-facing Palace",
      description: "Opulent seafront palace overlooking the Bay of Bengal with sea-view suites.",
      facilities: ["Sea View Suites", "Infinity Pool", "Fine Dining", "24/7 Butler"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=85",
      bookingCode: "AVELUNELEELA"
    },
    {
      id: 3,
      name: "Radisson Blu Resort Temple Bay",
      distance: "10 min from venue",
      stars: "4.5 Star Beach Resort",
      description: "Lush tropical resort along East Coast Road, ideal for families and relaxation.",
      facilities: ["Private Beach Access", "Lawn Bar", "Breakfast Included"],
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=85",
      bookingCode: "AVELUNERADISSON"
    }
  ],
  gallery: [
    { id: 1, category: "COUPLE", title: "Sunset Vows", image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=85" },
    { id: 2, category: "PRE-WEDDING", title: "Parisian Memories", image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=85" },
    { id: 3, category: "ENGAGEMENT", title: "Ring Exchange", image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=85" },
    { id: 4, category: "HALDI", title: "Golden Turmeric Ritual", image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=85" },
    { id: 5, category: "MEHENDI", title: "Henna Artistry", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85" },
    { id: 6, category: "SANGEET", title: "Night of Music", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=85" },
    { id: 7, category: "WEDDING", title: "Sacred Mandapam", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=85" },
    { id: 8, category: "RECEPTION", title: "Gala Lights", image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=85" },
    { id: 9, category: "FAMILY", title: "Blissful Generations", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85" },
    { id: 10, category: "COUPLE", title: "Whispering Promises", image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1000&q=85" },
    { id: 11, category: "PRE-WEDDING", title: "Coastal Breeze", image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=85" },
    { id: 12, category: "RECEPTION", title: "Champagne Toast", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=85" }
  ],
  videoGallery: [
    { id: "v1", title: "OUR LOVE STORY", duration: "03:45", thumbnail: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=85" },
    { id: "v2", title: "ENGAGEMENT FILM", duration: "04:12", thumbnail: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=85" },
    { id: "v3", title: "PRE-WEDDING FILM", duration: "02:50", thumbnail: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=85" },
    { id: "v4", title: "HALDI HIGHLIGHTS", duration: "03:15", thumbnail: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=85" },
    { id: "v5", title: "SANGEET HIGHLIGHTS", duration: "05:30", thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=85" },
    { id: "v6", title: "WEDDING CEREMONY TEASER", duration: "06:10", thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85" }
  ],
  family: {
    bride: {
      sideName: "BRIDE'S FAMILY",
      members: [
        { name: "Victor Vance", relation: "Father of the Bride", message: "Holding Olivia's hand through life has been my proudest privilege.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=85" },
        { name: "Eleanor Vance", relation: "Mother of the Bride", message: "Watching Olivia step into this new chapter fills our heart with boundless joy.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=85" },
        { name: "Sophia Vance", relation: "Sister of the Bride", message: "My soul sister and forever confidante. Alexander is the luckiest man alive!", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=85" },
        { name: "Arthur & Rose Vance", relation: "Grandparents", message: "May your love remain steadfast like ancient oak trees in spring.", image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=500&q=85" }
      ]
    },
    groom: {
      sideName: "GROOM'S FAMILY",
      members: [
        { name: "Marcus Sterling", relation: "Father of the Groom", message: "Alexander has grown into a man of honor. Olivia completes our family perfectly.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=85" },
        { name: "Diana Sterling", relation: "Mother of the Groom", message: "Two radiant souls choosing each other every single day. Congratulations, my children!", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=85" },
        { name: "Ethan Sterling", relation: "Brother of the Groom", message: "From childhood mischief to standing beside him on his wedding day.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=85" },
        { name: "Harrison & Clara Sterling", relation: "Grandparents", message: "Wishing you a lifetime of warmth, wisdom, and laughter together.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=85" }
      ]
    }
  },
  weddingParty: [
    { role: "MAID OF HONOR", name: "Charlotte Brooks", relationship: "Childhood Best Friend", message: "Standing by Olivia since 3rd grade. I couldn't be happier for this dream union!", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=85" },
    { role: "BEST MAN", name: "Liam Vance", relationship: "Groom's Close Friend & Cousin", message: "Brother in every sense. Here's to a lifetime of adventures for Alex and Olivia!", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=85" },
    { role: "BRIDESMAID", name: "Chloe Bennett", relationship: "College Roommate", message: "Sending all my love to the most gorgeous bride in the world!", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=85" },
    { role: "GROOMSMEN", name: "Noah Miller", relationship: "University Teammate", message: "Honored to celebrate Alex & Olivia in Chennai. Cheers!", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=500&q=85" },
    { role: "FLOWER GIRL", name: "Lily Vance", relationship: "Niece", message: "Excited to scatter white petals for Auntie Olivia!", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500&q=85" },
    { role: "RING BEARER", name: "Leo Sterling", relationship: "Nephew", message: "Guarding the wedding rings with extra care!", image: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=500&q=85" }
  ],
  menu: {
    categories: [
      {
        name: "WELCOME DRINKS",
        items: [
          { name: "Rose Lemonade Royale", desc: "Organic Damask rose extract infused with sparkling Meyer lemon and mint." },
          { name: "Alphonso Mango Cooler", desc: "Pureed Ratnagiri mangoes blended with cardamom and chilled coconut nectar." },
          { name: "Spiced Tender Coconut Water", desc: "Fresh tender coconut infused with lime leaves and ginger hint." }
        ]
      },
      {
        name: "STARTERS",
        items: [
          { name: "Paneer Tikka Royale", desc: "Artisanal cottage cheese marinated in saffron, yellow chili, and baked in clay oven." },
          { name: "Tandoori Mushroom Truffle", desc: "Portobello mushrooms stuffed with spiced hung curd and black truffle drizzle." },
          { name: "Chicken Tikka Angara", desc: "Smoked free-range chicken marinated in Kashmiri red chili and royal cumin." },
          { name: "Lamb Galouti Kebab", desc: "Melt-in-mouth spiced lamb patties served on mini saffron sheermal." }
        ]
      },
      {
        name: "MAIN COURSE",
        items: [
          { name: "Chef's Special Dum Biryani", desc: "Long-grain Basmati rice slow-cooked with aromatic spices, saffron, and fresh herbs." },
          { name: "Dal Makhani Velvet", desc: "Black lentils simmered overnight for 24 hours with churned butter and cream." },
          { name: "Paneer Butter Masala", desc: "Cottage cheese cubes in rich tomato gravy with dried fenugreek leaves." },
          { name: "Malabar Fish Curry", desc: "Fresh sea bass poached in roasted coconut milk and raw mango gravy." }
        ]
      },
      {
        name: "BREADS & RICE",
        items: [
          { name: "Garlic Butter Naan & Laccha Paratha", desc: "Freshly baked clay oven flatbreads topped with organic butter and herbs." },
          { name: "Nizam Saffron Steamed Basmati", desc: "Fragrant aged Basmati rice tempered with whole cloves and star anise." }
        ]
      },
      {
        name: "DESSERTS",
        items: [
          { name: "Gulab Jamun with Saffron Rabri", desc: "Warm golden milk dumplings served over chilled thickened pistachio milk." },
          { name: "Rasmalai Saffron Infusion", desc: "Soft chenna discs soaked in cardamom almond milk." },
          { name: "Traditional South Indian Elaneer Payasam", desc: "Creamy tender coconut and cardamom pudding served in clay cups." }
        ]
      },
      {
        name: "WEDDING CAKE & SPECIAL DISHES",
        items: [
          { name: "5-Tier Vanilla Bean & Champagne Almond Cake", desc: "Handcrafted tier cake layered with wild raspberry compote and edible gold leaf." },
          { name: "Grandmother Vance's Heritage Coconut Halwa", desc: "Traditional heirloom recipe made with roasted coconut, ghee, and cashews." }
        ]
      }
    ]
  },
  dressCode: {
    events: [
      {
        eventName: "WEDDING CEREMONY",
        style: "Traditional Luxury Indian / Classic Formal",
        description: "Elegant silk sarees, sherwanis, bandhgalas, or classic black-tie suits.",
        swatches: [
          { name: "Ivory", hex: "#f5f2ed" },
          { name: "Gold", hex: "#d4af37" },
          { name: "Champagne", hex: "#e6c8a2" },
          { name: "Sage", hex: "#a3b18a" }
        ]
      },
      {
        eventName: "HALDI CEREMONY",
        style: "Bright Festive Colors",
        description: "Comfortable cotton kurtas, lightweight dresses, and cheerful sunshine tones.",
        swatches: [
          { name: "Mustard", hex: "#e9c46a" },
          { name: "Warm Ochre", hex: "#f4a261" },
          { name: "Sunshine", hex: "#e76f51" }
        ]
      },
      {
        eventName: "MEHENDI NIGHT",
        style: "Elegant Ethnic Wear",
        description: "Vibrant lehengas, kurti sets, and breezy linen shirts in shades of green.",
        swatches: [
          { name: "Emerald Green", hex: "#2a9d8f" },
          { name: "Deep Teal", hex: "#264653" },
          { name: "Mint", hex: "#b7e4c7" }
        ]
      },
      {
        eventName: "SANGEET NIGHT",
        style: "Festive & Glamorous",
        description: "Sequin lehengas, tailored Indo-Western tuxedos, and shimmering evening wear.",
        swatches: [
          { name: "Royal Blue", hex: "#1d3557" },
          { name: "Deep Violet", hex: "#4a4e69" },
          { name: "Rose Gold", hex: "#b76e79" }
        ]
      },
      {
        eventName: "RECEPTION GALA",
        style: "Formal / Evening Tuxedos & Gowns",
        description: "Floor-length gowns, classic tuxedos, or regal velvet bandhgalas.",
        swatches: [
          { name: "Midnight Charcoal", hex: "#252321" },
          { name: "Deep Wine", hex: "#6b2d5c" },
          { name: "Pearl Gray", hex: "#e8e6e2" }
        ]
      }
    ]
  },
  registry: {
    message: "YOUR PRESENCE IS OUR GREATEST GIFT.",
    subtext: "We are blessed to have you in our lives. Should you wish to honor us with a gift, a contribution towards our dream honeymoon fund or home build would be cherished.",
    bankDetails: {
      accountName: "Olivia & Alexander Wedding Trust",
      bankName: "Imperial Heritage Bank - Chennai Main",
      accountNumber: "9876-5432-1098-7654",
      ifscCode: "HIBN0001812",
      upiId: "olivia.alexander@upi"
    }
  },
  faqs: [
    {
      q: "What should I wear to each event?",
      a: "Please refer to our dedicated Dress Code page for detailed guidance and color palette suggestions for each ceremony."
    },
    {
      q: "Where is the main wedding venue located?",
      a: "The main wedding ceremony and reception take place at Chennai Grand Heritage Palace located on East Coast Road (ECR), Injambakkam, Chennai."
    },
    {
      q: "What time should guests arrive?",
      a: "We recommend arriving 30 minutes before the scheduled time of each ceremony to enjoy welcome drinks and settle in comfortably."
    },
    {
      q: "Is parking available at the venue?",
      a: "Yes, complimentary valet parking is available for all guests at the main gates of Chennai Grand Heritage Palace."
    },
    {
      q: "Can I bring a plus one or additional guests?",
      a: "Please check your official invitation card for total guest numbers. When filling out the RSVP form, specify your guest headcount."
    },
    {
      q: "Are children welcome at the wedding events?",
      a: "Children are warmly welcome to all events! We will have dedicated kids play corners and child-friendly meal options."
    },
    {
      q: "Is accommodation provided for out-of-town guests?",
      a: "We have reserved room blocks at Taj Connemara and The Leela Palace Chennai. Please visit our Travel & Stay page to book with our exclusive code."
    },
    {
      q: "What meal options are available?",
      a: "We cater lavish Vegetarian, Non-Vegetarian, Vegan, and Jain meal preferences across all buffets."
    },
    {
      q: "How do I confirm my RSVP?",
      a: "Please submit your response using our online RSVP page before 1st November 2026."
    },
    {
      q: "Where can I view the full schedule?",
      a: "Click on the 'Schedule' tab in the navigation menu to view the complete step-by-step timeline of all events."
    },
    {
      q: "Can I send a wedding gift online?",
      a: "Yes, bank transfer and UPI details are available on our Gift Registry page."
    },
    {
      q: "Who should I contact if I need assistance in Chennai?",
      a: "You can contact our wedding coordinator Elena Rostova at +91 98765 43210 or email concierge@avelunevows.com."
    }
  ],
  wishes: [
    { id: 1, name: "Aunt Sarah & Uncle James", text: "Wishing you both a lifetime filled with unconditional love, laughter, and endless coffee dates!", date: "Yesterday" },
    { id: 2, name: "Marcus & Priya", text: "So thrilled to celebrate your special day in Chennai! You two are pure magic together.", date: "2 days ago" },
    { id: 3, name: "Dev & Ananya", text: "May your new journey together be as radiant as your smiles. Can't wait for Sangeet night!", date: "3 days ago" }
  ],
  contact: {
    coordinator: "Elena Rostova (Lead Wedding Planner)",
    phone: "+91 98765 43210",
    email: "concierge@avelunevows.com",
    brideFamilyContact: "+91 98111 22233",
    groomFamilyContact: "+91 98222 33344",
    social: {
      instagram: "https://instagram.com/avelunevows",
      facebook: "https://facebook.com/avelunevows",
      whatsapp: "https://wa.me/919876543210",
      email: "mailto:concierge@avelunevows.com"
    }
  }
};
