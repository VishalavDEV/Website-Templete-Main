export interface EventItem {
  id: string;
  date: string;
  city: string;
  venue: string;
  time: string;
  status: 'AVAILABLE' | 'LIMITED' | 'SOLD OUT';
  price: string;
  capacity: number;
}

export const EVENTS: EventItem[] = [
  {
    id: 'chennai-0918',
    date: '09.18',
    city: 'CHENNAI',
    venue: 'THE FREQUENCY ROOM',
    time: '21:00 IST',
    status: 'AVAILABLE',
    price: '₹1,500',
    capacity: 350
  },
  {
    id: 'bangalore-1003',
    date: '10.03',
    city: 'BANGALORE',
    venue: 'NIGHT SIGNAL SPACE',
    time: '20:30 IST',
    status: 'LIMITED',
    price: '₹2,000',
    capacity: 400
  },
  {
    id: 'mumbai-1017',
    date: '10.17',
    city: 'MUMBAI',
    venue: 'AFTERIMAGE LIVE WAREHOUSE',
    time: '22:00 IST',
    status: 'AVAILABLE',
    price: '₹2,200',
    capacity: 600
  },
  {
    id: 'delhi-1106',
    date: '11.06',
    city: 'DELHI',
    venue: 'NOCTURNE SESSION HALL',
    time: '21:30 IST',
    status: 'SOLD OUT',
    price: '₹1,800',
    capacity: 500
  }
];
