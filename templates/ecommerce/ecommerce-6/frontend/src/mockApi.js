// AURA mock api client-side interceptor
// Intercepts fetch calls to http://localhost:5000/api and returns locally simulated data.

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Aura One Headphones",
    description: "Matte black aluminum frame, active hybrid noise-cancelling, and memory foam lambskin leather ear cups. High-fidelity audio with customizable acoustic profiles.",
    price: 29999.00,
    imageUrl: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=600&auto=format&fit=crop",
    category: "Acoustics",
    stock: 15,
    rating: 4.8,
    featured: true
  },
  {
    id: 2,
    name: "Linear Chronograph",
    description: "Sandblasted grade-5 titanium case, scratch-resistant sapphire crystal glass, Swiss quartz chronograph movement, and full-grain Italian leather strap.",
    price: 64999.00,
    imageUrl: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=600&auto=format&fit=crop",
    category: "Timepieces",
    stock: 8,
    rating: 4.9,
    featured: true
  },
  {
    id: 3,
    name: "Silt Bouclé Blazer",
    description: "Structured double-breasted unisex blazer. Crafted in northern Italy from premium virgin bouclé wool with detailed satin lining and custom horn buttons.",
    price: 24999.00,
    imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop",
    category: "Apparel",
    stock: 12,
    rating: 4.5,
    featured: true
  },
  {
    id: 4,
    name: "Holo Ambient Lamp",
    description: "A sculptural light source featuring a hand-finished dichroic glass prism that refracts light into beautiful spectrums. Controls ambient room lighting dynamics.",
    price: 14999.00,
    imageUrl: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?q=80&w=600&auto=format&fit=crop",
    category: "Living",
    stock: 20,
    rating: 4.7,
    featured: false
  },
  {
    id: 5,
    name: "Acoustic Sphere",
    description: "Monolithic concrete casing speaker featuring custom high-fidelity 360-degree omnidirectional audio drivers. Fits seamlessly as an art piece or speaker.",
    price: 45999.00,
    imageUrl: "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=600&auto=format&fit=crop",
    category: "Acoustics",
    stock: 6,
    rating: 4.9,
    featured: true
  },
  {
    id: 6,
    name: "Ascent Leather Backpack",
    description: "Minimalist, water-resistant full-grain calfskin backpack. Designed with clean geometric lines, a padded laptop compartment, and concealed magnetic locks.",
    price: 18999.00,
    imageUrl: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=600&auto=format&fit=crop",
    category: "Apparel",
    stock: 18,
    rating: 4.6,
    featured: false
  },
  {
    id: 7,
    name: "Monolith Desk Organiser",
    description: "Precision-milled from a single piece of dark Italian Nero Marquina marble. Features recessed channels for pens, phone, and card storage with brushed brass accents.",
    price: 9999.00,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
    category: "Living",
    stock: 25,
    rating: 4.4,
    featured: false
  },
  {
    id: 8,
    name: "Eclipse Pocket Watch",
    description: "A modern reimagining of the classic pocket watch. Matte black casing with digital-analogue interface overlays and woven steel lanyard.",
    price: 19999.00,
    imageUrl: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=600&auto=format&fit=crop",
    category: "Timepieces",
    stock: 10,
    rating: 4.3,
    featured: false
  }
];

if (!localStorage.getItem('aura_products')) {
  localStorage.setItem('aura_products', JSON.stringify(MOCK_PRODUCTS));
}
if (!localStorage.getItem('aura_reviews')) {
  const initialReviews = {
    1: [
      { id: 'r1', username: 'Sarah', rating: 5, comment: 'Remarkable build quality. The lambskin leather feels premium, and active noise canceling is incredibly clean.' },
      { id: 'r2', username: 'James', rating: 4, comment: 'Acoustics are deep and detailed. Fits slightly tight on the ears initially, but loosens up after a week.' },
      { id: 'r3', username: 'user', rating: 5, comment: 'Absolutely beautiful deign face. Extremely sleek black.' }
    ],
    2: [
      { id: 'r4', username: 'Sarah', rating: 5, comment: 'Sandblasted titanium is extremely light. Extremely clean design face and smooth movement.' },
      { id: 'r5', username: 'James', rating: 5, comment: 'Matches editorial designs perfectly. Absolute work of art for minimalist watch enthusiasts.' }
    ]
  };
  localStorage.setItem('aura_reviews', JSON.stringify(initialReviews));
}
if (!localStorage.getItem('aura_profile')) {
  localStorage.setItem('aura_profile', JSON.stringify({
    name: 'AURA Customer',
    email: 'user@aura.design',
    username: 'user',
    phone: '+91 99999 88888'
  }));
}
if (!localStorage.getItem('aura_addresses')) {
  localStorage.setItem('aura_addresses', JSON.stringify([
    { id: 1, name: 'Home Address', street: '12 Luxury Drive', city: 'Mumbai', state: 'Maharashtra', zipCode: '400001', country: 'India' }
  ]));
}
if (!localStorage.getItem('aura_orders')) {
  localStorage.setItem('aura_orders', JSON.stringify([]));
}
if (!localStorage.getItem('aura_wishlist')) {
  localStorage.setItem('aura_wishlist', JSON.stringify([]));
}

const originalFetch = window.fetch;
window.fetch = async function(url, options) {
  const urlStr = typeof url === 'string' ? url : url.url || '';
  
  if (urlStr.startsWith('http://localhost:5000/api')) {
    const relativePath = urlStr.replace('http://localhost:5000/api', '');
    const method = (options && options.method) || 'GET';
    
    let body = null;
    if (options && options.body) {
      try {
        body = JSON.parse(options.body);
      } catch (e) {}
    }
    
    // helper to wrap response
    const jsonResponse = (data, status = 200) => {
      return new Response(JSON.stringify(data), {
        status,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    };
    
    // 1. GET /products
    if (relativePath === '/products' && method === 'GET') {
      const prods = JSON.parse(localStorage.getItem('aura_products'));
      return jsonResponse(prods);
    }
    
    // 2. GET /products/:id
    const prodMatch = relativePath.match(/^\/products\/(\d+)$/);
    if (prodMatch && method === 'GET') {
      const pid = parseInt(prodMatch[1], 10);
      const prods = JSON.parse(localStorage.getItem('aura_products'));
      const p = prods.find(item => item.id === pid);
      if (p) return jsonResponse(p);
      return jsonResponse({ message: 'Product not found' }, 404);
    }
    
    // 3. GET /products/:id/reviews
    const reviewMatch = relativePath.match(/^\/products\/(\d+)\/reviews$/);
    if (reviewMatch && method === 'GET') {
      const pid = parseInt(reviewMatch[1], 10);
      const reviews = JSON.parse(localStorage.getItem('aura_reviews')) || {};
      const r = reviews[pid] || [];
      return jsonResponse(r);
    }
    
    // 4. POST /products/:id/reviews
    if (reviewMatch && method === 'POST') {
      const pid = parseInt(reviewMatch[1], 10);
      const reviews = JSON.parse(localStorage.getItem('aura_reviews')) || {};
      const r = reviews[pid] || [];
      const newReview = {
        id: 'r' + Date.now(),
        username: body.username || 'user',
        rating: body.rating || 5,
        comment: body.comment || ''
      };
      r.push(newReview);
      reviews[pid] = r;
      localStorage.setItem('aura_reviews', JSON.stringify(reviews));
      return jsonResponse(newReview, 201);
    }
    
    // 5. GET /coupons/validate?code=CODE
    if (relativePath.startsWith('/coupons/validate') && method === 'GET') {
      const codeParam = relativePath.split('code=')[1];
      const code = decodeURIComponent(codeParam || '').toUpperCase();
      if (code === 'WELCOME10') {
        return jsonResponse({ code: 'WELCOME10', discount: 0.10 });
      } else if (code === 'AURA20') {
        return jsonResponse({ code: 'AURA20', discount: 0.20 });
      } else if (code === 'FLASH50') {
        return jsonResponse({ code: 'FLASH50', discount: 0.50 });
      } else {
        return jsonResponse({ message: 'Invalid or expired coupon code.' }, 400);
      }
    }
    
    // 6. GET /wishlist
    if (relativePath === '/wishlist' && method === 'GET') {
      const wishlist = JSON.parse(localStorage.getItem('aura_wishlist')) || [];
      return jsonResponse(wishlist);
    }
    
    // 7. POST /wishlist/toggle/:id
    const wishlistToggleMatch = relativePath.match(/^\/wishlist\/toggle\/(\d+)$/);
    if (wishlistToggleMatch && method === 'POST') {
      const pid = parseInt(wishlistToggleMatch[1], 10);
      let wishlist = JSON.parse(localStorage.getItem('aura_wishlist')) || [];
      const prods = JSON.parse(localStorage.getItem('aura_products'));
      const p = prods.find(item => item.id === pid);
      if (p) {
        const index = wishlist.findIndex(item => item.id === pid);
        if (index > -1) {
          wishlist.splice(index, 1);
        } else {
          wishlist.push(p);
        }
        localStorage.setItem('aura_wishlist', JSON.stringify(wishlist));
        return jsonResponse(wishlist);
      }
      return jsonResponse({ message: 'Product not found' }, 404);
    }
    
    // 8. POST /auth/login
    if (relativePath === '/auth/login' && method === 'POST') {
      const token = 'mock-jwt-token-for-aura';
      const user = {
        username: body.username || 'user',
        email: (body.username || 'user') + '@aura.design',
        role: 'ROLE_USER'
      };
      return jsonResponse({ token, ...user });
    }
    
    // 9. POST /auth/register
    if (relativePath === '/auth/register' && method === 'POST') {
      return jsonResponse({ message: 'User registered successfully!' });
    }
    
    // 10. GET /orders
    if (relativePath === '/orders' && method === 'GET') {
      const orders = JSON.parse(localStorage.getItem('aura_orders')) || [];
      return jsonResponse(orders);
    }
    
    // 11. POST /orders
    if (relativePath === '/orders' && method === 'POST') {
      const orders = JSON.parse(localStorage.getItem('aura_orders')) || [];
      const newOrder = {
        id: Math.floor(Math.random() * 100000),
        items: body.items || [],
        totalPrice: body.totalPrice || 0,
        address: body.address || {},
        couponCode: body.couponCode || null,
        orderDate: new Date().toLocaleDateString(),
        status: 'PAID'
      };
      orders.push(newOrder);
      localStorage.setItem('aura_orders', JSON.stringify(orders));
      return jsonResponse(newOrder, 201);
    }
    
    // 12. GET /profile
    if (relativePath === '/profile' && method === 'GET') {
      const prof = JSON.parse(localStorage.getItem('aura_profile'));
      return jsonResponse(prof);
    }
    
    // 13. POST /profile (updated)
    if (relativePath === '/profile' && method === 'POST') {
      const prof = JSON.parse(localStorage.getItem('aura_profile'));
      const updated = { ...prof, ...body };
      localStorage.setItem('aura_profile', JSON.stringify(updated));
      return jsonResponse(updated);
    }
    
    // 14. GET /profile/addresses
    if (relativePath === '/profile/addresses' && method === 'GET') {
      const addresses = JSON.parse(localStorage.getItem('aura_addresses')) || [];
      return jsonResponse(addresses);
    }
    
    // 15. POST /profile/addresses
    if (relativePath === '/profile/addresses' && method === 'POST') {
      const addresses = JSON.parse(localStorage.getItem('aura_addresses')) || [];
      const newAddress = {
        id: Date.now(),
        ...body
      };
      addresses.push(newAddress);
      localStorage.setItem('aura_addresses', JSON.stringify(addresses));
      return jsonResponse(newAddress, 201);
    }
    
    // 16. DELETE /profile/addresses/:id
    const addressDelMatch = relativePath.match(/^\/profile\/addresses\/(\d+)$/);
    if (addressDelMatch && method === 'DELETE') {
      const aid = parseInt(addressDelMatch[1], 10);
      let addresses = JSON.parse(localStorage.getItem('aura_addresses')) || [];
      addresses = addresses.filter(item => item.id !== aid);
      localStorage.setItem('aura_addresses', JSON.stringify(addresses));
      return jsonResponse({ message: 'Address deleted successfully' });
    }
  }
  
  return originalFetch(url, options);
};
