import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all');

  const menuItems = [
    {
      id: 1,
      category: 'starters',
      dietary: 'vegetarian gluten-free',
      title: 'Ember Smoked Beets',
      price: '₹420',
      desc: 'Salt-baked golden and red beets, whipped goat curd, candied walnuts, aged sherry vinaigrette.',
      tags: ['Vegetarian', 'Gluten-Free'],
      badge: 'Starter',
      ingredients: 'Organic heirloom beets, Chevre goat cheese, California walnuts, wild microgreens.',
      img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      category: 'starters',
      dietary: 'vegetarian signature',
      title: 'Charred Burrata',
      price: '₹480',
      desc: 'Heritage heirloom tomatoes, balsamic pearls, cold-pressed olive drizzle, sourdough crisp.',
      tags: ['Vegetarian', 'Signature'],
      badge: 'Chef Favorite',
      badgeClass: 'badge-signature',
      ingredients: 'Artisan artisanal burrata, heirloom tomatoes, aged balsamic 12-yr, fresh basil.',
      img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      category: 'starters',
      dietary: 'seafood gluten-free',
      title: 'Charred Octopus',
      price: '₹540',
      desc: 'Slow-tenderized dayboat octopus, smoked paprika emulsion, confit baby potatoes, herb salad.',
      tags: ['Wild Catch', 'Gluten-Free'],
      badge: 'Starter',
      ingredients: 'Dayboat octopus, Spanish pimenton, fingerling potatoes, Meyer lemon oil.',
      img: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      category: 'seafood',
      dietary: 'signature gluten-free',
      title: 'Wood-Fired Prawns',
      price: '₹620',
      desc: 'Jumbo ocean tiger prawns, garlic butter, charred Meyer lemon, fresh oregano blossoms.',
      tags: ['Signature', 'Gluten-Free'],
      badge: 'Chef Signature',
      badgeClass: 'badge-signature',
      ingredients: 'Wild ocean prawns, garlic butter, oregano blossoms, cold-pressed olive oil.',
      img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      category: 'seafood',
      dietary: 'gluten-free signature',
      title: 'Wood-Roasted Sea Bass',
      price: '₹850',
      desc: 'Line-caught sea bass roasted on cedar planks over glowing coals, finished with saffron cream and fennel.',
      tags: ['Line-Caught', 'Gluten-Free'],
      badge: 'Seafood',
      ingredients: 'Fresh sea bass, saffron threads, baby fennel bulb, fingerling potatoes, chive oil.',
      img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      category: 'seafood',
      dietary: 'gluten-free',
      title: 'Crispy Atlantic Salmon',
      price: '₹760',
      desc: 'Crispy skin salmon filet, charred broccolini, dill hollandaise, caper berry confit.',
      tags: ['Gluten-Free'],
      badge: 'Seafood',
      ingredients: 'Atlantic salmon, organic broccolini, fresh dill, brown butter hollandaise.',
      img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 7,
      category: 'mains',
      dietary: 'signature',
      title: 'Oak-Smoked Duck',
      price: '₹790',
      desc: 'Parsnip silk puree, spiced sour cherry reduction, roasted shallots, crispy thyme.',
      tags: ['Smoked Meat', 'Signature'],
      badge: 'Chef Signature',
      badgeClass: 'badge-signature',
      ingredients: 'Aged organic duck, sweet parsnips, tart Morello cherries, port wine reduction.',
      img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 8,
      category: 'mains',
      dietary: 'farm-sourced',
      title: 'Braised Lamb Shank',
      price: '₹890',
      desc: '12-hour simmered in red wine bone reduction, creamy polenta, gremolata, glazed baby carrots.',
      tags: ['12-Hr Braised'],
      badge: 'Main',
      ingredients: 'Free-range pasture lamb, Chianti wine reduction, stoneground yellow polenta.',
      img: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 9,
      category: 'vegetarian',
      dietary: 'vegetarian',
      title: 'Truffled Agnolotti',
      price: '₹580',
      desc: 'Hand-folded pasta filled with house buffalo ricotta, black winter truffle butter, toasted hazelnuts.',
      tags: ['Vegetarian'],
      badge: 'Artisan Pasta',
      ingredients: 'Organic semolina pasta, buffalo ricotta, black truffle paste, sage brown butter.',
      img: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 10,
      category: 'desserts',
      dietary: 'vegetarian signature',
      title: 'Smoked Olive Oil Torte',
      price: '₹390',
      desc: '70% Valrhona dark chocolate cake, single-estate olive oil ganache, sea salt flakes, espresso gelato.',
      tags: ['Vegetarian'],
      badge: 'Signature Sweet',
      badgeClass: 'badge-signature',
      ingredients: 'Valrhona dark chocolate, cold-pressed Tuscan olive oil, Maldon sea salt, Madagascar vanilla.',
      img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 11,
      category: 'drinks',
      dietary: 'beverage',
      title: 'Ember Old Fashioned',
      price: '₹450',
      desc: 'Small-batch bourbon, flamed rosemary sprig, spiced orange bitters, charred cherry syrup.',
      tags: ['Handcrafted'],
      badge: 'Cocktail',
      ingredients: 'Bourbon whiskey, Angostura bitters, flamed rosemary, brandied cherry, clear block ice.',
      img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery = !query || item.title.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query) || item.ingredients.toLowerCase().includes(query);
    const matchesDietary = dietaryFilter === 'all' || item.dietary.includes(dietaryFilter);
    return matchesCategory && matchesQuery && matchesDietary;
  });

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="container-xl page-hero-content">
          <div className="eyebrow text-accent">THE ARTISAN REPERTOIRE</div>
          <h1 className="page-hero-title">Autumn & Winter Dining Menu</h1>
          <p className="page-hero-subtitle">
            Ingredients harvested at their seasonal peak, shaped with fire, smoke, and Mediterranean restraint.
          </p>
        </div>
      </section>

      {/* Menu Search & Filter Controls */}
      <section className="section-spacing bg-surface">
        <div className="container-xl">
          
          {/* Interactive Filter Bar with Live Search */}
          <div className="p-4 bg-surface-subtle rounded border border-dark-subtle mb-5 shadow-sm">
            <div className="row g-3 align-items-center">
              
              <div className="col-lg-5">
                <div className="input-group">
                  <span className="input-group-text bg-dark-surface border-end-0"><i className="bi bi-search text-accent"></i></span>
                  <input 
                    type="text" 
                    className="form-control form-control-custom border-start-0" 
                    id="menuSearchInput" 
                    placeholder="Search dishes (e.g. prawns, lamb, burrata, truffle)..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex align-items-center gap-2">
                  <label htmlFor="dietaryFilterSelect" className="small text-muted-custom text-nowrap fw-semibold">Dietary:</label>
                  <select 
                    className="form-select form-select-custom" 
                    id="dietaryFilterSelect"
                    value={dietaryFilter}
                    onChange={(e) => setDietaryFilter(e.target.value)}
                  >
                    <option value="all">All Dietary Preferences</option>
                    <option value="vegetarian">Vegetarian Only</option>
                    <option value="gluten-free">Gluten-Free Only</option>
                    <option value="signature">Chef Signatures Only</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-3 text-lg-end">
                <button type="button" className="btn-custom btn-outline-dark-custom w-100 w-lg-auto" onClick={() => window.print()}>
                  <i className="bi bi-printer me-1"></i> Print / PDF Menu
                </button>
              </div>

            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="menu-filter-nav">
            <button type="button" className={`menu-filter-btn ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => setActiveCategory('all')}>All Items</button>
            <button type="button" className={`menu-filter-btn ${activeCategory === 'starters' ? 'active' : ''}`} onClick={() => setActiveCategory('starters')}>Starters & Small Plates</button>
            <button type="button" className={`menu-filter-btn ${activeCategory === 'mains' ? 'active' : ''}`} onClick={() => setActiveCategory('mains')}>Wood-Fired Mains</button>
            <button type="button" className={`menu-filter-btn ${activeCategory === 'seafood' ? 'active' : ''}`} onClick={() => setActiveCategory('seafood')}>Coastal Seafood</button>
            <button type="button" className={`menu-filter-btn ${activeCategory === 'vegetarian' ? 'active' : ''}`} onClick={() => setActiveCategory('vegetarian')}>Vegetarian & Pasta</button>
            <button type="button" className={`menu-filter-btn ${activeCategory === 'desserts' ? 'active' : ''}`} onClick={() => setActiveCategory('desserts')}>Artisan Desserts</button>
            <button type="button" className={`menu-filter-btn ${activeCategory === 'drinks' ? 'active' : ''}`} onClick={() => setActiveCategory('drinks')}>Cellar Wines & Cocktails</button>
          </div>

          {/* Menu Items Container */}
          <div className="row g-4" id="menuGrid">
            {filteredItems.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-4 menu-item-wrapper" data-category={item.category} data-dietary={item.dietary}>
                <div className="menu-item-card">
                  <div className="menu-item-image-wrap">
                    <img src={item.img} alt={item.title} className="menu-item-img" />
                    <span className={`menu-item-badge ${item.badgeClass || ''}`}>{item.badge}</span>
                  </div>
                  <div className="menu-item-header">
                    <h3 className="menu-item-title">{item.title}</h3>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                  <p className="menu-item-desc">{item.desc}</p>
                  <div className="dietary-tags">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="diet-tag">
                        {tag.includes('Vegetarian') && <i className="bi bi-flower1 me-1"></i>}
                        {tag.includes('Signature') && <i className="bi bi-award me-1"></i>}
                        {tag.includes('Handcrafted') && <i className="bi bi-cup-straw me-1"></i>}
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="menu-item-ingredients">{item.ingredients}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State for Search Filter */}
          {filteredItems.length === 0 && (
            <div id="menuEmptyState" className="text-center py-5">
              <i className="bi bi-search fs-1 text-muted-custom mb-3 d-block"></i>
              <h4 className="font-heading">No matching dishes found</h4>
              <p className="text-muted-custom">Try searching for different keywords or clear your dietary filters.</p>
            </div>
          )}

          {/* Chef's 7-Course Tasting Menu Callout */}
          <div className="mt-5 pt-5 border-top border-bone">
            <div className="p-4 p-lg-5 bg-primary-dark text-white rounded-4 border border-dark-subtle">
              <div className="row align-items-center g-4">
                <div className="col-lg-8">
                  <div className="eyebrow text-accent">THE ULTIMATE TASTING</div>
                  <h3 className="font-heading text-white fs-2 mb-2">Chef's Hearth Tasting Menu</h3>
                  <p className="text-bone opacity-85 mb-0">
                    A blind 7-course progression curated daily by Chef Arjun Mehta showcasing that morning's coastal catch, wild foraged mushrooms, and reserve dry-aged cuts.
                  </p>
                </div>
                <div className="col-lg-4 text-lg-end">
                  <div className="fs-3 font-heading text-accent fw-bold mb-2">₹3,800 <span className="fs-6 fw-normal text-bone opacity-75">/ Guest</span></div>
                  <Link to="/#reservation" className="btn-custom btn-primary-accent w-100 w-lg-auto">Reserve Tasting Experience</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
