import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { ProductCard } from '../components/ProductCard';
import { ToyRenderer } from '../components/toys/ToyRenderer';
import { useToyCart, Product } from '../context/ToyCartContext';
import { SlidersHorizontal, X, ShoppingCart, Star, Sparkles } from 'lucide-react';
import './Shop.css';

// Local backup dataset if the backend is down
export const BACKUP_PRODUCTS: Product[] = [
  {
    id: "p1", name: "Hot Wheels Die-Cast Supercar", brand: "Hot Wheels", category: "cars-vehicles",
    price: 1499.00, discount: 10, rating: 4.8, description: "A premium die-cast racer featuring active wheel spin mechanics, customized neon spoiler, and racing chassis. Put it on the track and watch it drift!",
    image: "/hotwheels_car.jpg", animationType: "car", stock: 15, variants: ["Electric Blue", "Racer Red", "Volt Green"]
  },
  {
    id: "p2", name: "Mattel Remote Control Cruiser", brand: "Mattel", category: "cars-vehicles",
    price: 3499.00, discount: 15, rating: 4.5, description: "All-terrain high speed RC cruiser with rechargeable battery and heavy duty suspension. Interactive motor sound ready.",
    image: "/hotwheels_car.jpg", animationType: "car", stock: 8, variants: ["Carbon Black", "Neon Yellow"]
  },
  {
    id: "p15", name: "Funskool Friction Racer", brand: "Funskool", category: "cars-vehicles",
    price: 799.00, discount: 0, rating: 4.3, description: "A fast friction-powered drag racer that zips across rooms and tracks without batteries.",
    image: "/hotwheels_car.jpg", animationType: "car", stock: 18, variants: ["Racer Red", "Speed Yellow"]
  },
  {
    id: "p3", name: "LEGO Creator Spaceship Explorer", brand: "LEGO", category: "building-toys",
    price: 2999.00, discount: 0, rating: 4.9, description: "Assemble your own galactic cruiser. LEGO creator bricks lock together to form a highly detailed spacecraft with opening cargo bays.",
    image: "/lego_spaceship.jpg", animationType: "lego", stock: 20, variants: ["Original Space Kit"]
  },
  {
    id: "p4", name: "LEGO Architecture Skyline Set", brand: "LEGO", category: "building-toys",
    price: 4999.00, discount: 5, rating: 4.7, description: "Recreate the world's most spectacular cities brick by brick. Pieces click into place to build custom modern skyscrapers.",
    image: "/lego_spaceship.jpg", animationType: "lego", stock: 12, variants: ["Skyline Set"]
  },
  {
    id: "p16", name: "LEGO Creator Medieval Castle", brand: "LEGO", category: "building-toys",
    price: 3999.00, discount: 10, rating: 4.8, description: "Assemble a historic brick castle with working drawbridge, towers, and target banners.",
    image: "/lego_spaceship.jpg", animationType: "lego", stock: 10, variants: ["Castle Set"]
  },
  {
    id: "p5", name: "Barbie Ballerina Dreamer", brand: "Barbie", category: "dolls",
    price: 1999.00, discount: 20, rating: 4.6, description: "The magic ballerina doll. When activated, she performs high-speed pirouettes and waves her arms with magical sparkling highlights.",
    image: "/barbie_doll.jpg", animationType: "doll", stock: 25, variants: ["Pink Tutu", "Violet Tutu"]
  },
  {
    id: "p6", name: "Disney Princess Elsa Dance Edition", brand: "Disney", category: "dolls",
    price: 2499.00, discount: 0, rating: 4.7, description: "Singing and dancing Elsa doll. Breathes, waves, and does a winter snowflake dance on click.",
    image: "/barbie_doll.jpg", animationType: "doll", stock: 18, variants: ["Classic Sparkle Blue"]
  },
  {
    id: "p17", name: "Hasbro Baby Alive Doll", brand: "Hasbro", category: "dolls",
    price: 2499.00, discount: 15, rating: 4.4, description: "Interactive baby doll that eats, speaks, and responds to standard play tools.",
    image: "/barbie_doll.jpg", animationType: "doll", stock: 15, variants: ["Original Pink Edition"]
  },
  {
    id: "p7", name: "Transformers Optimus Prime", brand: "Transformers", category: "robots-action-figures",
    price: 3999.00, discount: 10, rating: 4.9, description: "The legendary Autobot commander. He blinks his LED eyes, turns his head, and transforms into a semi-truck with heavy metal gear sounds.",
    image: "robot_optimus.svg", animationType: "robot", stock: 10, variants: ["Standard Edition"]
  },
  {
    id: "p8", name: "Hasbro Mech-Warrior Cyber Bot", brand: "Hasbro", category: "robots-action-figures",
    price: 1899.00, discount: 0, rating: 4.3, description: "Interactive programmable mechanical buddy. Walks 2-3 steps, wiggles his lasers, and blinks in binary codes.",
    image: "robot_cyber.svg", animationType: "robot", stock: 30, variants: ["Matte Black", "Arctic White"]
  },
  {
    id: "p18", name: "Hasbro Spider-Man Titan Figure", brand: "Hasbro", category: "robots-action-figures",
    price: 1599.00, discount: 0, rating: 4.6, description: "Action figure of Spider-Man with swinging arm and blinking web-shooters.",
    image: "robot_optimus.svg", animationType: "robot", stock: 20, variants: ["Red-Blue Suit"]
  },
  {
    id: "p9", name: "Fisher-Price Waving Teddy Bear", brand: "Fisher-Price", category: "plush-toys",
    price: 999.00, discount: 0, rating: 4.8, description: "Ultra-soft snuggly plush bear that waves hello and wiggles his ears when you hover or tap. Perfect for bedtime hugs.",
    image: "teddy_bear.svg", animationType: "teddy", stock: 40, variants: ["Honey Brown", "Cream White"]
  },
  {
    id: "p19", name: "Disney Mickey Mouse Plush", brand: "Disney", category: "plush-toys",
    price: 1299.00, discount: 0, rating: 4.9, description: "Soft cuddly plush of Mickey Mouse that waves hello and wiggles his ears.",
    image: "teddy_bear.svg", animationType: "teddy", stock: 25, variants: ["Classic Red Shorts"]
  },
  {
    id: "p20", name: "Funskool Snuggly Bunny Plush", brand: "Funskool", category: "plush-toys",
    price: 699.00, discount: 10, rating: 4.5, description: "Soft pastel bunny plush companion with waving movements and custom sound hook.",
    image: "teddy_bear.svg", animationType: "teddy", stock: 15, variants: ["Lilac Purple", "Cream Pink"]
  },
  {
    id: "p10", name: "Spin Master Jet Stream Airplane", brand: "Spin Master", category: "aircraft",
    price: 1799.00, discount: 15, rating: 4.4, description: "Sleek jet plane with active propeller engines. Watch it hover, bob up and down, and do a complete loop-the-loop when clicked.",
    image: "airplane_jet.svg", animationType: "airplane", stock: 15, variants: ["Fire Red", "Stealth Grey"]
  },
  {
    id: "p21", name: "Hasbro Fly-Right Helicopter", brand: "Hasbro", category: "aircraft",
    price: 1499.00, discount: 0, rating: 4.3, description: "Helicopter toy with battery propeller blades. Bobs up and down and runs engine sound loops.",
    image: "airplane_jet.svg", animationType: "airplane", stock: 15, variants: ["Rescue Red", "Police Blue"]
  },
  {
    id: "p22", name: "Nerf Dart-Firing Drone", brand: "Nerf", category: "aircraft",
    price: 2999.00, discount: 10, rating: 4.7, description: "Interactive remote drone that hovers, floats, and performs target flips on click.",
    image: "airplane_jet.svg", animationType: "airplane", stock: 12, variants: ["Nerf Elite Blue"]
  },
  {
    id: "p11", name: "VTech Toot-Toot Steam Train", brand: "VTech", category: "trains",
    price: 2499.00, discount: 10, rating: 4.6, description: "Choo-choo! An interactive steam train that emits glowing smoke puffs, rings its bell, and chugs down the virtual track on hover.",
    image: "train_express.svg", animationType: "train", stock: 22, variants: ["Steam Locomotive Kit"]
  },
  {
    id: "p23", name: "LEGO City Cargo Train Set", brand: "LEGO", category: "trains",
    price: 5999.00, discount: 5, rating: 4.9, description: "Assemble a motorized cargo locomotive set with control track and cargo containers.",
    image: "/lego_spaceship.jpg", animationType: "train", stock: 10, variants: ["Cargo Set"]
  },
  {
    id: "p24", name: "Mattel Thomas & Friends Engine", brand: "Mattel", category: "trains",
    price: 1899.00, discount: 0, rating: 4.6, description: "Friction train engine that whistles, puffing steam and rolling wheels.",
    image: "train_express.svg", animationType: "train", stock: 18, variants: ["Thomas Blue"]
  },
  {
    id: "p12", name: "Nerf Galactic Launch Rocket", brand: "Nerf", category: "stem-toys",
    price: 1299.00, discount: 0, rating: 4.7, description: "Launches deep into the sky! Rumble-activated booster flames, massive smoke clouds, and a complete vertical takeoff animation sequence.",
    image: "rocket_nerf.svg", animationType: "rocket", stock: 35, variants: ["Classic Nerf Orange"]
  },
  {
    id: "p25", name: "VTech Science Experiment Kit", brand: "VTech", category: "stem-toys",
    price: 1999.00, discount: 0, rating: 4.6, description: "Interactive launcher base representing volcano rumbles and clean chemical takeoffs.",
    image: "rocket_nerf.svg", animationType: "rocket", stock: 25, variants: ["Junior Kit"]
  },
  {
    id: "p26", name: "Hasbro Solar System Planetarium", brand: "Hasbro", category: "stem-toys",
    price: 1599.00, discount: 10, rating: 4.8, description: "Glowing orbital space kit representing spinning spheres, planets, and launches.",
    image: "rocket_nerf.svg", animationType: "rocket", stock: 20, variants: ["Standard Edition"]
  },
  {
    id: "p13", name: "Funskool Bouncing Neon Ball", brand: "Funskool", category: "outdoor-toys",
    price: 499.00, discount: 0, rating: 4.2, description: "High-bounce neon sphere that squashes and stretches as it rebounds from the bottom of your screen.",
    image: "ball_neon.svg", animationType: "ball", stock: 50, variants: ["Neon Pink", "Volt Yellow", "Laser Purple"]
  },
  {
    id: "p27", name: "Nerf Super Soaker Water Gun", brand: "Nerf", category: "outdoor-toys",
    price: 1299.00, discount: 0, rating: 4.5, description: "High-capacity water blaster that rebounds on target.",
    image: "ball_neon.svg", animationType: "ball", stock: 30, variants: ["Soaker Blue"]
  },
  {
    id: "p28", name: "Funskool Bouncing Football", brand: "Funskool", category: "outdoor-toys",
    price: 599.00, discount: 10, rating: 4.4, description: "Air-filled standard football that squashes and bounces across the ground.",
    image: "ball_neon.svg", animationType: "ball", stock: 40, variants: ["Classic Hexagon"]
  },
  {
    id: "p14", name: "Crayola Clay Dinosaur Sculptor", brand: "Crayola", category: "creative-toys",
    price: 999.00, discount: 25, rating: 4.5, description: "Craft your own T-Rex with color clays. Hovering makes the dinosaur wag its tail, and clicking triggers a friendly creative roar!",
    image: "dino_crayola.svg", animationType: "dino", stock: 15, variants: ["Dino Clay Pack"]
  },
  {
    id: "p29", name: "Play-Doh Mega Creative Oven", brand: "Play-Doh", category: "creative-toys",
    price: 1499.00, discount: 0, rating: 4.7, description: "Toy oven that squashes play-doh colors to shape custom pizzas and cakes.",
    image: "dino_crayola.svg", animationType: "dino", stock: 20, variants: ["Mega Oven Set"]
  },
  {
    id: "p30", name: "Crayola Magic Light Paint Board", brand: "Crayola", category: "creative-toys",
    price: 1199.00, discount: 15, rating: 4.6, description: "Neon painting board that glows in the dark, responding to active stylus drawing.",
    image: "dino_crayola.svg", animationType: "dino", stock: 25, variants: ["Magic Board Set"]
  }
];

export const Shop: React.FC = () => {
  const { addToCart } = useToyCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Filters state
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [priceRange, setPriceRange] = useState(6000); // Max ₹6000
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const location = useLocation();

  // Sync category filter with URL query parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const catParam = params.get('category');
    if (catParam) {
      setSelectedCategory(catParam);
    } else {
      setSelectedCategory('all');
    }
  }, [location.search]);

  // Quick View state
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [modalToyState, setModalToyState] = useState<'idle' | 'hover' | 'click' | 'cart'>('idle');

  // Fetch Products on Mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get('http://localhost:8080/api/products');
        if (res.data && res.data.length > 0) {
          setProducts(res.data);
        } else {
          setProducts(BACKUP_PRODUCTS);
        }
        setError(false);
      } catch (err) {
        console.warn('API error, falling back to backup mock catalog.', err);
        setProducts(BACKUP_PRODUCTS);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleModalPlay = () => {
    if (modalToyState === 'cart') return;
    setModalToyState('click');
    setTimeout(() => {
      setModalToyState('idle');
    }, 1800);
  };

  const handleModalAddToCart = () => {
    if (!quickViewProduct) return;
    setModalToyState('cart');
    setTimeout(() => {
      addToCart(quickViewProduct, 1);
      setModalToyState('idle');
      setQuickViewProduct(null); // Close modal
    }, 1000);
  };

  // Get unique lists for filters
  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];
  const brands = ['all', ...Array.from(new Set(products.map(p => p.brand)))];

  // Filtering Logic
  const filteredProducts = products.filter(product => {
    const matchSearch = product.name.toLowerCase().includes(search.toLowerCase()) || 
                        product.brand.toLowerCase().includes(search.toLowerCase());
    const matchCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchBrand = selectedBrand === 'all' || product.brand === selectedBrand;
    const finalPrice = product.price * (1 - product.discount / 100);
    const matchPrice = finalPrice <= priceRange;

    return matchSearch && matchCategory && matchBrand && matchPrice;
  });

  return (
    <div className="shop-page app-container">
      <div className="stars-bg" />

      <div className="shop-header">
        <h1 className="shop-title">TOY DISCOVERY ZONE</h1>
        <p className="shop-subtitle">Tap toys to trigger their stunts. Hover to activate engines!</p>
      </div>

      <div className="shop-layout">
        {/* Sidebar Filters (Desktop) */}
        <aside className={`shop-sidebar glass-panel ${showMobileFilters ? 'mobile-visible' : ''}`}>
          <div className="sidebar-header">
            <h3>Filters</h3>
            <button className="close-filters-btn" onClick={() => setShowMobileFilters(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="filter-group">
            <label>Search Toys</label>
            <input 
              type="text" 
              placeholder="Search e.g. Hot Wheels..." 
              value={search} 
              onChange={(e) => setSearch(e.target.value)} 
              className="filter-input"
            />
          </div>

          <div className="filter-group">
            <label>Category</label>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat.replace('-', ' ')}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Brand</label>
            <select 
              value={selectedBrand} 
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="filter-select"
            >
              {brands.map(brand => (
                <option key={brand} value={brand}>
                  {brand === 'all' ? 'All Brands' : brand}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <div className="price-label-row">
              <label>Max Price</label>
              <span className="price-value">₹{priceRange}</span>
            </div>
            <input 
              type="range" 
              min="100" 
              max="6000" 
              value={priceRange} 
              onChange={(e) => setPriceRange(Number(e.target.value))} 
              className="filter-range"
            />
          </div>
        </aside>

        {/* Product Catalog Grid */}
        <main className="shop-main">
          {/* Mobile Filter toggle button */}
          <button className="mobile-filter-toggle btn btn-primary" onClick={() => setShowMobileFilters(true)}>
            <SlidersHorizontal size={18} /> FILTERS
          </button>

          {loading ? (
            <div className="shop-loading">
              <div className="loader-lego">🧱 Stackin' Bricks...</div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="shop-empty glass-panel">
              <span className="empty-icon">🔍</span>
              <h3>No toys found matching your filters!</h3>
              <p>Try searching another keyword or resetting the price bar.</p>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onQuickView={(p) => { setQuickViewProduct(p); setModalToyState('idle'); }} 
                />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Quick View Modal Overlay */}
      {quickViewProduct && (
        <div className="modal-overlay" onClick={() => setQuickViewProduct(null)}>
          <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setQuickViewProduct(null)}>
              <X size={24} />
            </button>

            <div className="modal-grid">
              {/* Left Side: Toy Stage */}
              <div className="modal-toy-stage">
                <div className="toy-stage-floor" />
                <div className="stage-toy-wrapper">
                  <ToyRenderer type={quickViewProduct.animationType} state={modalToyState} />
                </div>
                <button className="btn btn-outline stage-play-btn" onClick={handleModalPlay}>
                  <Sparkles size={16} /> PLAY TOY
                </button>
              </div>

              {/* Right Side: Product Details */}
              <div className="modal-info">
                <span className="modal-brand">{quickViewProduct.brand}</span>
                <h2 className="modal-title">{quickViewProduct.name}</h2>

                <div className="modal-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      fill={i < Math.floor(quickViewProduct.rating) ? 'var(--warning)' : 'none'} 
                      stroke={i < Math.floor(quickViewProduct.rating) ? 'var(--warning)' : 'var(--text-muted)'} 
                    />
                  ))}
                  <span>({quickViewProduct.rating})</span>
                </div>

                <p className="modal-desc">{quickViewProduct.description}</p>

                <div className="modal-pricing">
                  <span className="modal-price">
                    ₹{(quickViewProduct.price * (1 - quickViewProduct.discount / 100)).toFixed(2)}
                  </span>
                  {quickViewProduct.discount > 0 && (
                    <span className="modal-price-original">₹{quickViewProduct.price}</span>
                  )}
                </div>

                <button className="btn btn-primary modal-cart-btn" onClick={handleModalAddToCart}>
                  <ShoppingCart size={18} /> ADD TO TOY BOX
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
