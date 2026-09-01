const API_BASE_URL = 'http://localhost:8080/api';

export const fetchStats = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/stats`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.warn('API fetchStats fallback used:', error.message);
    // Graceful fallback matching ExquDrive reference
    return {
      vehiclePremium: 200,
      vehiclePremiumSuffix: "+",
      happyClients: 4000,
      happyClientsSuffix: "+",
      awardsWon: 87,
      awardsWonSuffix: "",
      globalOffices: 30,
      globalOfficesSuffix: "+"
    };
  }
};

export const fetchVehicles = async (category = '') => {
  try {
    const url = category && category !== 'All' 
      ? `${API_BASE_URL}/vehicles?category=${encodeURIComponent(category)}`
      : `${API_BASE_URL}/vehicles`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.warn('API fetchVehicles fallback used:', error.message);
    return [
      {
        id: 'bmw-m2-cs',
        name: 'BMW M2 CS Shadowline',
        category: 'Track Coupe',
        tagline: 'Pure mechanical dominance & laser-sharp agility.',
        horsepower: 453,
        acceleration: 3.9,
        topSpeed: 177,
        dailyRate: 480,
        imageUrl: '/images/hero_car.jpg',
        transmission: '8-Speed M Steptronic',
        seats: 4,
        featured: true
      },
      {
        id: 'porsche-911-gt3rs',
        name: 'Porsche 911 GT3 RS',
        category: 'Supercar',
        tagline: 'Atmospheric motorsport adrenaline engineered for the open road.',
        horsepower: 518,
        acceleration: 3.0,
        topSpeed: 184,
        dailyRate: 850,
        imageUrl: '/images/fleet_porsche.jpg',
        transmission: '7-Speed PDK',
        seats: 2,
        featured: true
      },
      {
        id: 'rolls-royce-ghost',
        name: 'Rolls-Royce Ghost Black Badge',
        category: 'Ultra Luxury',
        tagline: 'Unrivaled sanctuary, whispering twin-turbo V12 grandeur.',
        horsepower: 591,
        acceleration: 4.2,
        topSpeed: 155,
        dailyRate: 1450,
        imageUrl: '/images/fleet_rolls_royce.jpg',
        transmission: '8-Speed Satellite Auto',
        seats: 5,
        featured: true
      },
      {
        id: 'range-rover-sv',
        name: 'Range Rover SV Autobiography',
        category: 'Prestige SUV',
        tagline: 'Sublime grand touring capability across any terrain in peak comfort.',
        horsepower: 606,
        acceleration: 4.3,
        topSpeed: 162,
        dailyRate: 650,
        imageUrl: '/images/pinnacle_mountain.jpg',
        transmission: '8-Speed Automatic AWD',
        seats: 5,
        featured: false
      }
    ];
  }
};
