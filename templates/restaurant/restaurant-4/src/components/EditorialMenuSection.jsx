import React, { useState, useEffect, useRef } from 'react';

const CATEGORIES = [
  { id: 'all', label: 'ALL DISHES' },
  { id: 'starters', label: 'STARTERS' },
  { id: 'mains', label: 'MAINS' },
  { id: 'sea', label: 'FROM THE SEA' },
  { id: 'vegetables', label: 'VEGETABLES' },
  { id: 'dessert', label: 'DESSERT' }
];

const MENU_ITEMS = [
  // STARTERS
  { id: 1, category: 'starters', name: 'Charred Heirloom Tomato', ingredients: 'fresh burrata • garden basil • cold-pressed olive oil', price: '₹620', img: 'assets/images/dish_octopus.jpg' },
  { id: 2, category: 'starters', name: 'Smoked Beetroot Tartare', ingredients: 'goat cheese mousse • pickled mustard seed • rye crisp', price: '₹580', img: 'assets/images/kitchen.jpg' },
  { id: 3, category: 'starters', name: 'Crispy Zucchini Blossoms', ingredients: 'wild thyme ricotta • raw honey • lemon zest', price: '₹650', img: 'assets/images/signature.jpg' },
  
  // MAINS
  { id: 4, category: 'mains', name: 'Wood-Fired Aged Lamb', ingredients: 'charred onion puree • mint jus • roasted roots', price: '₹1,350', img: 'assets/images/dish_beef.jpg' },
  { id: 5, category: 'mains', name: 'Roasted Organic Duck Breast', ingredients: 'fig reduction • caramelized shallot • coriander broth', price: '₹1,480', img: 'assets/images/hero.jpg' },

  // FROM THE SEA
  { id: 6, category: 'sea', name: 'Roasted Sea Bass', ingredients: 'shaved fennel • citrus reduction • garden herbs', price: '₹1,150', img: 'assets/images/kitchen.jpg' },
  { id: 7, category: 'sea', name: 'Charred Bay Octopus', ingredients: 'smoked paprika oil • roasted fingerlings • caper berry', price: '₹1,280', img: 'assets/images/dish_octopus.jpg' },

  // VEGETABLES
  { id: 8, category: 'vegetables', name: 'Wild Mushroom Tagliatelle', ingredients: 'thyme embers • aged parmesan • brown butter', price: '₹780', img: 'assets/images/signature.jpg' },
  { id: 9, category: 'vegetables', name: 'Roasted Cauliflower Steak', ingredients: 'hazelnut pesto • pomegranate • charred herb salsa', price: '₹720', img: 'assets/images/hero.jpg' },

  // DESSERT
  { id: 10, category: 'dessert', name: 'Smoked Dark Chocolate Tart', ingredients: 'birch syrup gelato • caramelized nibs', price: '₹480', img: 'assets/images/dish_dessert.jpg' },
  { id: 11, category: 'dessert', name: 'Cardamom Panna Cotta', ingredients: 'poached winter pear • pistachio crumble • rose water', price: '₹450', img: 'assets/images/night.jpg' }
];

export default function EditorialMenuSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoverImgSrc, setHoverImgSrc] = useState('assets/images/dish_octopus.jpg');
  const [isHoverVisible, setIsHoverVisible] = useState(false);
  const hoverRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovering = false;
    let animId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateHoverPosition = () => {
      if (hoverRef.current) {
        currentX += (mouseX - currentX) * 0.15;
        currentY += (mouseY - currentY) * 0.15;
        hoverRef.current.style.left = `${currentX + 20}px`;
        hoverRef.current.style.top = `${currentY}px`;
      }
      animId = requestAnimationFrame(updateHoverPosition);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animId = requestAnimationFrame(updateHoverPosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  const handleItemMouseEnter = (e, img) => {
    setHoverImgSrc(img);
    setIsHoverVisible(true);
  };

  const handleItemMouseLeave = () => {
    setIsHoverVisible(false);
  };

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="menu-section-editorial" style={{ padding: 'var(--section-gap) var(--site-padding)' }}>
      <div className="container">
        <div className="menu-editorial-grid">
          <div className="menu-category-sidebar">
            <span className="menu-sidebar-title">SEASONAL OFFERINGS</span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`menu-cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                data-category={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setIsHoverVisible(false);
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="menu-items-list-container">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="menu-editorial-item"
                data-category={item.category}
                data-img={item.img}
                data-cursor="SELECT"
                onMouseEnter={(e) => handleItemMouseEnter(e, item.img)}
                onMouseLeave={handleItemMouseLeave}
              >
                <div className="menu-item-left">
                  <h3 className="menu-item-name">{item.name}</h3>
                  <div className="menu-item-ingredients">{item.ingredients}</div>
                </div>
                <div className="menu-item-price-tag">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Floating Dish Preview Photo */}
      <div
        className={`menu-hover-photo-container ${isHoverVisible ? 'visible' : ''}`}
        id="menu-hover-photo"
        ref={hoverRef}
      >
        <img src={hoverImgSrc} alt="Dish Preview" />
      </div>
    </section>
  );
}
