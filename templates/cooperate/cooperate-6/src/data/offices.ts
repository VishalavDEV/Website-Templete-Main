import { OfficeHub, TravelAlertItem } from '../types';

export const officeHubs: OfficeHub[] = [
  {
    city: 'London',
    country: 'United Kingdom',
    region: 'Europe (Global Headquarters)',
    address: '32 Berkeley Square, Mayfair, London W1J 5AW',
    phone: '+44 20 7946 0912',
    email: 'london@aureliajourneys.com',
    timezoneOffset: 1, // BST
    coordinates: { x: 48, y: 32 },
    isPrimary: true
  },
  {
    city: 'New York',
    country: 'United States',
    region: 'North America Headquarters',
    address: 'One Vanderbilt Avenue, 42nd Floor, New York, NY 10017',
    phone: '+1 212 555 0198',
    email: 'newyork@aureliajourneys.com',
    timezoneOffset: -4, // EDT
    coordinates: { x: 28, y: 37 },
    isPrimary: true
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    region: 'Asia-Pacific Headquarters',
    address: 'Marina Bay Financial Centre, Tower 2, Level 38, Singapore 018983',
    phone: '+65 6789 0123',
    email: 'singapore@aureliajourneys.com',
    timezoneOffset: 8,
    coordinates: { x: 78, y: 58 },
    isPrimary: true
  },
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    region: 'Middle East & Africa Operations',
    address: 'Gate Precinct 4, Level 6, DIFC, Dubai, UAE',
    phone: '+971 4 312 8800',
    email: 'dubai@aureliajourneys.com',
    timezoneOffset: 4,
    coordinates: { x: 62, y: 44 },
    isPrimary: true
  },
  {
    city: 'Tokyo',
    country: 'Japan',
    region: 'East Asia Operations',
    address: 'Marunouchi Park Building, 18F, Chiyoda-ku, Tokyo 100-8088',
    phone: '+81 3 5555 4321',
    email: 'tokyo@aureliajourneys.com',
    timezoneOffset: 9,
    coordinates: { x: 86, y: 38 },
    isPrimary: false
  },
  {
    city: 'Zurich',
    country: 'Switzerland',
    region: 'Central Europe & Alpine Desk',
    address: 'Paradeplatz 8, 8001 Zürich, Switzerland',
    phone: '+41 44 212 3456',
    email: 'zurich@aureliajourneys.com',
    timezoneOffset: 2,
    coordinates: { x: 50, y: 35 },
    isPrimary: false
  },
  {
    city: 'Sydney',
    country: 'Australia',
    region: 'Australasia Hub',
    address: 'International Towers 3, Barangaroo, Sydney NSW 2000',
    phone: '+61 2 9876 5432',
    email: 'sydney@aureliajourneys.com',
    timezoneOffset: 10,
    coordinates: { x: 88, y: 78 },
    isPrimary: false
  },
  {
    city: 'Paris',
    country: 'France',
    region: 'Western Europe Desk',
    address: '15 Place Vendôme, 75001 Paris, France',
    phone: '+33 1 42 68 55 00',
    email: 'paris@aureliajourneys.com',
    timezoneOffset: 2,
    coordinates: { x: 49, y: 34 },
    isPrimary: false
  }
];

export const mockTravelAlerts: TravelAlertItem[] = [
  {
    id: 'alt-1',
    city: 'London',
    country: 'UK',
    level: 'Low',
    title: 'Heathrow (LHR) Baggage System Upgrade',
    impact: 'Terminal 5 domestic flights experience minor 10-15m gate delays. Executive fast-track unaffected.',
    timeAgo: '18 mins ago',
    actionTaken: 'All VIP transfers allocated 15-minute buffer on arrival.'
  },
  {
    id: 'alt-2',
    city: 'Tokyo',
    country: 'Japan',
    level: 'Low',
    title: 'High-Speed Shinkansen Track Maintenance',
    impact: 'Tokaido line operating at standard 99.8% on-time performance with evening speed restrictions.',
    timeAgo: '42 mins ago',
    actionTaken: 'Alternative express routes pre-reserved for 24 travelers.'
  },
  {
    id: 'alt-3',
    city: 'Frankfurt',
    country: 'Germany',
    level: 'Moderate',
    title: 'Airspace Weather Rerouting (Upper Rhine Valley)',
    impact: 'Inbound long-haul European arrivals delayed 20–30 mins due to summer convective storm systems.',
    timeAgo: '1 hr ago',
    actionTaken: 'Connecting itineraries proactively shifted to Lufthansa VIP lounge priority lists.'
  },
  {
    id: 'alt-4',
    city: 'New York',
    country: 'USA',
    level: 'Low',
    title: 'JFK Expressway Terminal Construction',
    impact: 'Ground transit access to Terminal 4 congested during evening rush hours.',
    timeAgo: '2 hrs ago',
    actionTaken: 'All C-suite transfers automatically routed via private Blade helicopter links.'
  }
];
