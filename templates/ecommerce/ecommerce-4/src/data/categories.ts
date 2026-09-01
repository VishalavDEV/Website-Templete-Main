import { Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    slug: 'electronics',
    tagline: 'TECH THAT MOVES WITH YOU.',
    iconName: 'Cpu',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    subcategories: [
      { id: 'smartphones', name: 'Smartphones' },
      { id: 'laptops', name: 'Laptops' },
      { id: 'audio', name: 'Headphones & Earbuds' },
      { id: 'gaming', name: 'Gaming Consoles & Gear' },
      { id: 'wearables', name: 'Smartwatches & Fitness' },
      { id: 'cameras', name: 'Cameras & Lenses' },
      { id: 'televisions', name: 'TV & Home Display' }
    ],
    featuredSubcategory: 'smartphones',
    showcaseHeading: 'SMARTER EVERYDAY',
    showcaseCta: 'SHOP TECH →'
  },
  {
    id: 'fashion',
    name: 'Fashion',
    slug: 'fashion',
    tagline: 'FIND YOUR EVERYDAY.',
    iconName: 'Shirt',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    subcategories: [
      { id: 'women', name: 'Women’s Apparel' },
      { id: 'men', name: 'Men’s Apparel' },
      { id: 'shoes', name: 'Footwear & Sneakers' },
      { id: 'bags', name: 'Bags & Backpacks' },
      { id: 'watches', name: 'Luxury Watches' },
      { id: 'accessories', name: 'Eyewear & Accessories' }
    ],
    featuredSubcategory: 'shoes',
    showcaseHeading: 'YOUR EVERYDAY EDIT',
    showcaseCta: 'SHOP STYLE →'
  },
  {
    id: 'home',
    name: 'Home & Living',
    slug: 'home',
    tagline: 'MAKE SPACE BETTER.',
    iconName: 'Home',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    subcategories: [
      { id: 'furniture', name: 'Modern Furniture' },
      { id: 'decor', name: 'Home Decor & Vases' },
      { id: 'kitchen', name: 'Kitchen & Diningware' },
      { id: 'lighting', name: 'Designer Lighting' },
      { id: 'appliances', name: 'Smart Home Appliances' }
    ],
    featuredSubcategory: 'furniture',
    showcaseHeading: 'LIVE BETTER',
    showcaseCta: 'SHOP HOME →'
  },
  {
    id: 'beauty',
    name: 'Beauty',
    slug: 'beauty',
    tagline: 'YOUR DAILY RITUAL.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    subcategories: [
      { id: 'skincare', name: 'Skincare Serums & Creams' },
      { id: 'makeup', name: 'Cosmetics & Makeup' },
      { id: 'haircare', name: 'Haircare & Styling' },
      { id: 'fragrance', name: 'Artisanal Fragrance' }
    ],
    featuredSubcategory: 'skincare',
    showcaseHeading: 'YOUR DAILY RITUAL',
    showcaseCta: 'SHOP BEAUTY →'
  },
  {
    id: 'grocery',
    name: 'Grocery',
    slug: 'grocery',
    tagline: 'FRESH ORGANIC & PANTRY.',
    iconName: 'ShoppingBag',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    subcategories: [
      { id: 'fresh-food', name: 'Fresh Fruits & Greens' },
      { id: 'beverages', name: 'Artisanal Tea & Coffee' },
      { id: 'snacks', name: 'Gourmet Snacks & Nuts' },
      { id: 'staples', name: 'Organic Grains & Staples' }
    ],
    featuredSubcategory: 'fresh-food'
  },
  {
    id: 'sports',
    name: 'Sports & Fitness',
    slug: 'sports',
    tagline: 'MOVE YOUR WAY.',
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    subcategories: [
      { id: 'gym', name: 'Gym & Weight Training' },
      { id: 'running', name: 'Running & Marathon Gear' },
      { id: 'yoga', name: 'Yoga Mats & Accessories' },
      { id: 'outdoor-sports', name: 'Outdoor & Cycling' }
    ],
    featuredSubcategory: 'gym',
    showcaseHeading: 'MOVE MORE',
    showcaseCta: 'SHOP SPORTS →'
  },
  {
    id: 'kids',
    name: 'Toys & Kids',
    slug: 'kids',
    tagline: 'CREATIVE PLAY & CARE.',
    iconName: 'Gamepad2',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80',
    subcategories: [
      { id: 'building-toys', name: 'STEM Building Sets' },
      { id: 'board-games', name: 'Family Board Games' },
      { id: 'baby-care', name: 'Infant Wellness' }
    ],
    featuredSubcategory: 'building-toys'
  },
  {
    id: 'travel',
    name: 'Travel & Outdoor',
    slug: 'travel',
    tagline: 'DURABLE LUGGAGE & GEAR.',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80',
    subcategories: [
      { id: 'luggage', name: 'Hard Shell Suitcases' },
      { id: 'travel-backpacks', name: 'Carry-On Backpacks' },
      { id: 'travel-acc', name: 'Packing Organizers' }
    ],
    featuredSubcategory: 'luggage'
  },
  {
    id: 'automotive',
    name: 'Automotive',
    slug: 'automotive',
    tagline: 'VEHICLE ACCESSORIES & TECH.',
    iconName: 'Car',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    subcategories: [
      { id: 'car-acc', name: 'Car Accessories' },
      { id: 'auto-electronics', name: 'Dash Cams & Chargers' }
    ],
    featuredSubcategory: 'car-acc'
  },
  {
    id: 'books',
    name: 'Books & Office',
    slug: 'books',
    tagline: 'BOOKS & OFFICE SUPPLIES.',
    iconName: 'BookOpen',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
    subcategories: [
      { id: 'fiction-nonfiction', name: 'Bestselling Books' },
      { id: 'stationery', name: 'Leather Journals & Pens' }
    ],
    featuredSubcategory: 'stationery'
  },
  {
    id: 'pets',
    name: 'Pet Care',
    slug: 'pets',
    tagline: 'PET CARE & NOURISHMENT.',
    iconName: 'Heart',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
    subcategories: [
      { id: 'dog-care', name: 'Dog Nutrition & Toys' },
      { id: 'cat-care', name: 'Cat Essentials' }
    ],
    featuredSubcategory: 'dog-care'
  }
];
