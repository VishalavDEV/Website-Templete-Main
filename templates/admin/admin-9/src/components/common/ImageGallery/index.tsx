import React from 'react';

export function ImageGallery() {
  const images = [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=150',
    'https://images.unsplash.com/photo-1500627869374-13cd993b1115?w=150',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=150'
  ];

  return (
    <div className="grid grid-cols-3 gap-2 max-w-sm select-none">
      {images.map((img, i) => (
        <div key={i} className="aspect-square rounded-xl overflow-hidden border border-border/80 relative group cursor-pointer hover:border-primary/50 transition-colors">
          <img src={img} alt="Catalog preview" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
        </div>
      ))}
    </div>
  );
}
