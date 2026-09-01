import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToyRenderer } from '../components/toys/ToyRenderer';
import { Compass, Sparkles } from 'lucide-react';
import './Categories.css';

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  animationType: string;
}

const BACKUP_CATEGORIES: Category[] = [
  { id: "cat1", name: "Cars & Vehicles", slug: "cars-vehicles", description: "Zooming sports cars, RC cruisers, and speed tracks.", animationType: "car" },
  { id: "cat2", name: "Building Toys", slug: "building-toys", description: "Creativity brick-by-brick with self-stacking blocks.", animationType: "lego" },
  { id: "cat3", name: "Dolls", slug: "dolls", description: "Magical ballerinas and princess dolls that wave and dance.", animationType: "doll" },
  { id: "cat4", name: "Robots & Action Figures", slug: "robots-action-figures", description: "Futuristic programmable mechanical robots.", animationType: "robot" },
  { id: "cat5", name: "Plush Toys", slug: "plush-toys", description: "Cuddly bear and unicorn buddies that wave and smile.", animationType: "teddy" },
  { id: "cat6", name: "Aircraft", slug: "aircraft", description: "Propeller aeroplanes and helicopters that perform stunts.", animationType: "airplane" },
  { id: "cat7", name: "Trains", slug: "trains", description: "Locomotives that emit steam puffs and run tracks.", animationType: "train" },
  { id: "cat8", name: "STEM Toys", slug: "stem-toys", description: "Heavy rumbles and vertical takeoff rockets.", animationType: "rocket" },
  { id: "cat9", name: "Outdoor Toys", slug: "outdoor-toys", description: "Bouncing and squishing neon balls.", animationType: "ball" },
  { id: "cat10", name: "Creative Toys", slug: "creative-toys", description: "Roaring dinosaurs and modeling crafts.", animationType: "dinosaur" }
];

export const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/categories');
        if (res.data && res.data.length > 0) {
          setCategories(res.data);
        } else {
          setCategories(BACKUP_CATEGORIES);
        }
      } catch (err) {
        console.warn('API error, using backup category list.', err);
        setCategories(BACKUP_CATEGORIES);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="categories-page app-container">
      <div className="stars-bg" />

      <div className="categories-header">
        <h1 className="categories-title">THE TOY UNIVERSE</h1>
        <p className="categories-subtitle">Hover over a galaxy card to see its native toys awaken!</p>
      </div>

      <div className="categories-grid">
        {categories.map(category => {
          const isCurrentHovered = hoveredCategory === category.id;
          return (
            <div 
              key={category.id} 
              className={`category-card glass-panel ${isCurrentHovered ? 'active-galaxy' : ''}`}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              data-cursor={category.animationType}
            >
              {/* Animated Category Portal */}
              <div className="category-portal">
                <div className="portal-ring" />
                <div className="portal-core">
                  <ToyRenderer 
                    type={category.animationType} 
                    state={isCurrentHovered ? 'click' : 'idle'} 
                  />
                </div>
              </div>

              {/* Category Info */}
              <div className="category-info">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                
                <Link 
                  to={`/shop?category=${category.slug}`} 
                  className="btn btn-outline category-link"
                  data-cursor="play"
                >
                  <Compass size={16} /> VISIT WORLD
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
