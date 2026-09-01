import React from 'react';
import { RESTAURANT_DATA, formatCurrency } from '../data/restaurantData';

export default function Menu({ onDishHover, onDishLeave }) {
  return (
    <section className="menu-section" id="menu" onMouseLeave={onDishLeave}>
      <div className="menu-header">
        <div>
          <span className="section-label"><span className="accent-line"></span>CURATED TASTINGS</span>
          <h2 className="editorial-heading-large">THE CURRENT MENU</h2>
        </div>
        <p className="menu-subtitle">Hover dish to reveal harvest preview</p>
      </div>

      <div className="menu-list-container">
        {RESTAURANT_DATA.menuData.map(dish => (
          <div
            key={dish.id}
            className="menu-item-row"
            data-dish-img={dish.image}
            data-cursor="DISH"
            data-category={dish.category}
            onMouseEnter={() => onDishHover(dish.image)}
            onMouseLeave={onDishLeave}
          >
            <span className="menu-number">{dish.number}</span>
            <div className="menu-dish-info">
              <h3>{dish.title}</h3>
              <p>{dish.description}</p>
            </div>
            <span className="menu-price">{formatCurrency(dish.price)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
