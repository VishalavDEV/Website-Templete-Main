import React from 'react';
import { MapPin, Mail, Phone, Clock, Globe } from 'lucide-react';

export function ContactInfo() {
  const bureaus = [
    {
      city: 'London Head Bureau',
      role: 'Main Newsroom & Archive',
      address: '42 Clerkenwell Close, London EC1R 0AT, United Kingdom',
      wire: '+44 (0) 20 7946 0912',
      email: 'london.desk@observer.press',
    },
    {
      city: 'New York Bureau',
      role: 'Americas Editorial Desk',
      address: '180 Varick Street, Suite 900, Soho, New York, NY 10014',
      wire: '+1 (212) 555-0198',
      email: 'ny.desk@observer.press',
    },
    {
      city: 'Tokyo Bureau',
      role: 'Asia-Pacific Editorial Desk',
      address: '5-7-2 Minami-Aoyama, Minato-ku, Tokyo 107-0062',
      wire: '+81 3 5555 0143',
      email: 'tokyo.desk@observer.press',
    },
  ];

  return (
    <div className="space-y-6">
      {bureaus.map((bureau, idx) => (
        <div
          key={idx}
          className={`p-6 border shadow-xs ${
            idx === 0 ? 'bg-[#FAF9F5] border-[#141413]' : 'bg-white border-[#E8E5DC]'
          }`}
        >
          <span className="text-[0.6875rem] font-mono font-bold uppercase tracking-wider text-[#D43825] block mb-1">
            {bureau.role}
          </span>
          <h4 className="font-serif-headline text-xl font-bold text-[#141413] mb-2">
            {bureau.city}
          </h4>
          <p className="text-xs text-[#52524E] leading-relaxed mb-3">
            {bureau.address}
          </p>
          <div className="text-xs font-mono text-[#73736C] space-y-1 pt-3 border-t border-[#E8E5DC]">
            <p>Direct Wire: {bureau.wire}</p>
            <p>Email: {bureau.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
