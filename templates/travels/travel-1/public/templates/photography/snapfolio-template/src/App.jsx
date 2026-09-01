import React, { useState, useEffect } from 'react';
import './index.css';

export default function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeSection, setActiveSection] = useState('home');
  const [typewriterText, setTypewriterText] = useState('');
  
  // Lightbox State
  const [lightboxActive, setLightboxActive] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'general',
    message: ''
  });

  // Toast State
  const [toastShow, setToastShow] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastError, setToastError] = useState(false);



  // Typewriter effect
  useEffect(() => {
    const words = ["Landscape Specialist", "Editorial Visionary", "Visual Storyteller"];
    let wordIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timeoutId;

    const type = () => {
      const currentWord = words[wordIdx];
      let delay = 120;

      if (isDeleting) {
        charIdx--;
        delay = 60;
      } else {
        charIdx++;
        delay = 120;
      }

      setTypewriterText(currentWord.substring(0, charIdx));

      if (!isDeleting && charIdx === currentWord.length) {
        isDeleting = true;
        delay = 2000;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        delay = 500;
      }

      timeoutId = setTimeout(type, delay);
    };

    type();
    return () => clearTimeout(timeoutId);
  }, []);

  // Active Link on Scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'home';
      sections.forEach(section => {
        const top = section.offsetTop;
        if (window.scrollY >= (top - 200)) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gallery Data
  const galleryItems = [
    {
      id: 0,
      category: 'portrait',
      title: 'Ethereal Studio Capture',
      imgSrc: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      alt: 'Ethereal Portraiture'
    },
    {
      id: 1,
      category: 'landscape',
      title: 'Mist on Alpine Waters',
      imgSrc: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
      alt: 'Misty Mountains'
    },
    {
      id: 2,
      category: 'street',
      title: 'Tokyo Night Shallows',
      imgSrc: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=800&q=80',
      alt: 'Neon Alleyways'
    },
    {
      id: 3,
      category: 'editorial',
      title: 'Chic Monocromatic Focus',
      imgSrc: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
      alt: 'Chic Geometry'
    },
    {
      id: 4,
      category: 'portrait',
      title: 'Warm Light Silhouette',
      imgSrc: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
      alt: 'Natural Tone Portrait'
    },
    {
      id: 5,
      category: 'landscape',
      title: 'Golden Hour Foothills',
      imgSrc: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
      alt: 'Valley Glow'
    },
    {
      id: 6,
      category: 'street',
      title: 'Urban Monolith Reflect',
      imgSrc: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80',
      alt: 'Rainy Crossroad'
    },
    {
      id: 7,
      category: 'editorial',
      title: 'Clean Studio Minimalist',
      imgSrc: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
      alt: 'Minimalist Fashion'
    }
  ];

  const filteredItems = galleryItems.filter(item => 
    activeFilter === 'all' || item.category === activeFilter
  );

  // Lightbox handlers
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxActive(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxActive(false);
    document.body.style.overflow = '';
  };

  const navigateLightbox = (direction) => {
    let nextIndex = lightboxIndex + direction;
    if (nextIndex < 0) nextIndex = filteredItems.length - 1;
    if (nextIndex >= filteredItems.length) nextIndex = 0;
    setLightboxIndex(nextIndex);
  };

  // Keyboard binds for Lightbox
  useEffect(() => {
    if (!lightboxActive) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') navigateLightbox(-1);
      else if (e.key === 'ArrowRight') navigateLightbox(1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxActive, lightboxIndex, filteredItems]);

  // Form & Toast handlers
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      triggerToast('Please fill out all required fields.', true);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      triggerToast('Please enter a valid email address.', true);
      return;
    }

    triggerToast(`Thank you, ${name}! Your booking inquiry has been sent.`, false);
    setFormData({ name: '', email: '', service: 'general', message: '' });
  };

  const triggerToast = (message, isError) => {
    setToastMessage(message);
    setToastError(isError);
    setToastShow(true);
    setTimeout(() => {
      setToastShow(false);
    }, 4000);
  };

  return (
    <div className="snap-body select-none">
      
      {/* 1. Floating Sidebar Navigation (Desktop) */}
      <aside className="hidden lg:flex flex-col justify-between fixed left-6 top-6 bottom-6 w-72 rounded-3xl snap-glass-nav p-8 z-40">
        <div className="space-y-12">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black text-xl tracking-wider">SF</div>
            <div>
              <h2 className="font-extrabold text-lg tracking-tight text-white">SnapFolio</h2>
              <p className="text-xs text-indigo-400 font-medium">Creative Photography</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2">
            {[
              { id: 'home', icon: 'fa-house', label: 'Home' },
              { id: 'about', icon: 'fa-user', label: 'About Me' },
              { id: 'gallery', icon: 'fa-images', label: 'Gallery' },
              { id: 'services', icon: 'fa-briefcase', label: 'Services' },
              { id: 'contact', icon: 'fa-paper-plane', label: 'Contact' }
            ].map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`snap-nav-link-item flex items-center gap-4 px-4 py-3 rounded-xl border text-sm font-medium ${
                  activeSection === link.id ? 'active' : ''
                }`}
              >
                <i className={`fa-solid ${link.icon} text-lg`}></i> {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 justify-center">
            {['instagram', 'behance', 'unsplash', 'linkedin-in'].map(social => (
              <a key={social} href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
                <i className={`fa-brands fa-${social} text-lg`}></i>
              </a>
            ))}
          </div>
          <p className="text-center text-xs text-zinc-600 font-medium">&copy; 2026 SnapFolio. All rights reserved.</p>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-4 left-4 right-4 h-16 rounded-2xl snap-glass-nav flex items-center justify-around px-4 z-40 shadow-2xl">
        {[
          { id: 'home', icon: 'fa-house' },
          { id: 'about', icon: 'fa-user' },
          { id: 'gallery', icon: 'fa-images' },
          { id: 'services', icon: 'fa-briefcase' },
          { id: 'contact', icon: 'fa-paper-plane' }
        ].map(link => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`p-3 rounded-xl transition-all ${
              activeSection === link.id ? 'text-indigo-500' : 'text-zinc-400 hover:text-white'
            }`}
          >
            <i className={`fa-solid ${link.icon} text-xl`}></i>
          </a>
        ))}
      </nav>

      {/* Main Content */}
      <main className="lg:pl-[340px] px-6 md:px-12 py-10 max-w-7xl mx-auto space-y-32">
        
        {/* 2. Hero Section */}
        <section id="home" className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-12 pt-10">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></span> Available for Bookings
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
                Hello, I'm <span className="text-indigo-500">Alex Rivers</span>
              </h1>
              <h3 className="text-2xl md:text-3xl font-semibold text-zinc-400 min-h-[40px]">
                A <span className="text-indigo-400">{typewriterText}</span><span className="snap-typewriter-cursor">|</span>
              </h3>
            </div>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Capturing stories from around the globe through natural light, clean framing, and a minimalist editorial aesthetic. Dedicated to finding extraordinary moments in daily scenes.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a href="#gallery" className="px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/35 hover:-translate-y-0.5">
                View Gallery
              </a>
              <a href="#contact" className="px-8 py-4 rounded-2xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-300 font-semibold transition-all hover:-translate-y-0.5">
                Book a Session
              </a>
            </div>
          </div>
          <div className="flex-1 max-w-md w-full">
            <div className="snap-hero-glow rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 aspect-[4/5]">
              <img src="https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=800&q=80" alt="Alex Rivers Portrait" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </div>
        </section>

        {/* 3. About Section */}
        <section id="about" className="scroll-mt-24 space-y-12">
          <div className="border-l-4 border-indigo-600 pl-4">
            <h2 className="text-4xl font-extrabold text-white">About My Craft</h2>
            <p class="text-zinc-500 text-sm mt-1 uppercase tracking-wider font-semibold">Behind the lens and vision</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-zinc-300 text-lg leading-relaxed">
                I’m Alex, an independent photographer focusing on portraiture, editorial landscapes, and street photography. Over the past 5 years, I've worked with global travel agencies, fashion brands, and local creative collectives to build distinct visual stories.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                My philosophy centers on simplicity. I strive to eliminate visual clutter, letting the core subject, emotional depth, and raw texture of the environment build the frame. I prefer ambient lighting and subtle adjustments that keep snapshots organic.
              </p>
              <div className="space-y-4 pt-4">
                <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">My Gear Bag</h4>
                <div className="flex flex-wrap gap-2">
                  {['Sony A7R V', '24-70mm f/2.8 GM II', '85mm f/1.4 GM', 'DJI Mavic 3 Pro', 'Profoto B10X HDR'].map(gear => (
                    <span key={gear} className="px-4 py-2 rounded-full bg-zinc-800/80 text-zinc-300 text-xs font-semibold border border-zinc-700/50">{gear}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {[
                { val: '5+', desc: 'Years Experience' },
                { val: '120+', desc: 'Shoots Completed' },
                { val: '15+', desc: 'Global Awards' },
                { val: '40+', desc: 'Happy Clients' }
              ].map((stat, i) => (
                <div key={i} className="snap-glass-card rounded-2xl p-6 text-center flex flex-col justify-center">
                  <span className="text-4xl md:text-5xl font-black text-indigo-500 mb-2">{stat.val}</span>
                  <span className="text-zinc-400 font-medium text-sm">{stat.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Gallery Section */}
        <section id="gallery" className="scroll-mt-24 space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-l-4 border-indigo-600 pl-4">
            <div>
              <h2 className="text-4xl font-extrabold text-white">Visual Archives</h2>
              <p class="text-zinc-500 text-sm mt-1 uppercase tracking-wider font-semibold">Curated Photographic Prints</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Work' },
                { id: 'portrait', label: 'Portrait' },
                { id: 'landscape', label: 'Landscape' },
                { id: 'street', label: 'Street' },
                { id: 'editorial', label: 'Editorial' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                    activeFilter === tab.id 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="snap-gallery-item block"
                onClick={() => openLightbox(index)}
              >
                <div className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900 cursor-pointer shadow-lg">
                  <img src={item.imgSrc} alt={item.alt} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">{item.category}</span>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Services & Pricing Section */}
        <section id="services" className="scroll-mt-24 space-y-12">
          <div className="border-l-4 border-indigo-600 pl-4">
            <h2 className="text-4xl font-extrabold text-white">Creative Services</h2>
            <p class="text-zinc-500 text-sm mt-1 uppercase tracking-wider font-semibold">Pricing Tiers & Commissions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="snap-glass-card rounded-3xl p-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-white">Portrait Session</h3>
                    <p className="text-zinc-500 text-sm mt-1">Individual / Corporate</p>
                  </div>
                  <span className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400"><i className="fa-solid fa-camera-retro text-xl"></i></span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">$250</span>
                  <span className="text-zinc-500 text-sm">/ session</span>
                </div>
                <ul className="space-y-3 pt-4 border-t border-zinc-800 text-sm text-zinc-300">
                  <li className="flex items-center gap-3"><i className="fa-solid fa-check text-indigo-400"></i> 2 Hours Studio/Location shoot</li>
                  <li className="flex items-center gap-3"><i className="fa-solid fa-check text-indigo-400"></i> 2 Outfit changes</li>
                  <li className="flex items-center gap-3"><i className="fa-solid fa-check text-indigo-400"></i> 15 High-res edited shots</li>
                  <li className="flex items-center gap-3"><i className="fa-solid fa-check text-indigo-400"></i> Private review folder link</li>
                </ul>
              </div>
              <a href="#contact" className="mt-8 w-full py-4 text-center rounded-xl bg-zinc-800 text-zinc-300 font-semibold hover:bg-zinc-700 hover:text-white transition-all inline-block">Book Package</a>
            </div>

            <div className="snap-glass-card rounded-3xl p-8 flex flex-col justify-between border-indigo-500/40 shadow-xl shadow-indigo-600/5 relative">
              <span className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-indigo-600 text-white text-xs font-bold tracking-widest uppercase">Popular Option</span>
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-white">Event Coverage</h3>
                    <p className="text-zinc-500 text-sm mt-1">Launch / Intimate Parties</p>
                  </div>
                  <span className="p-3 rounded-2xl bg-indigo-600 text-white"><i className="fa-solid fa-wand-magic-sparkles text-xl"></i></span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">$650</span>
                  <span className="text-zinc-500 text-sm">/ event</span>
                </div>
                <ul className="space-y-3 pt-4 border-t border-zinc-800 text-sm text-zinc-300">
                  <li className="flex items-center gap-3"><i className="fa-solid fa-check text-indigo-400"></i> Up to 5 Hours continuous</li>
                  <li className="flex items-center gap-3"><i className="fa-solid fa-check text-indigo-400"></i> Multiple camera setup</li>
                  <li className="flex items-center gap-3"><i className="fa-solid fa-check text-indigo-400"></i> 60+ High-res digital captures</li>
                  <li className="flex items-center gap-3"><i className="fa-solid fa-check text-indigo-400"></i> Next-day social highlights delivery</li>
                </ul>
              </div>
              <a href="#contact" className="mt-8 w-full py-4 text-center rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-all inline-block">Book Package</a>
            </div>

            <div className="snap-glass-card rounded-3xl p-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-white">Commercial</h3>
                    <p className="text-zinc-500 text-sm mt-1">Lookbooks / Brand Campaigns</p>
                  </div>
                  <span className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400"><i className="fa-solid fa-gem text-xl"></i></span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">$1,200</span>
                  <span className="text-zinc-500 text-sm">/ project</span>
                </div>
                <ul className="space-y-3 pt-4 border-t border-zinc-800 text-sm text-zinc-300">
                  <li className="flex items-center gap-3"><i className="fa-solid fa-check text-indigo-400"></i> Full-day shoot (8 Hours)</li>
                  <li className="flex items-center gap-3"><i className="fa-solid fa-check text-indigo-400"></i> Studio & Location dynamic mapping</li>
                  <li className="flex items-center gap-3"><i className="fa-solid fa-check text-indigo-400"></i> All RAW negatives + 30 master edits</li>
                  <li className="flex items-center gap-3"><i className="fa-solid fa-check text-indigo-400"></i> Full commercial license usage rights</li>
                </ul>
              </div>
              <a href="#contact" className="mt-8 w-full py-4 text-center rounded-xl bg-zinc-800 text-zinc-300 font-semibold hover:bg-zinc-700 hover:text-white transition-all inline-block">Book Package</a>
            </div>
          </div>
        </section>

        {/* 6. Contact Section */}
        <section id="contact" className="scroll-mt-24 space-y-12 pb-16">
          <div className="border-l-4 border-indigo-600 pl-4">
            <h2 className="text-4xl font-extrabold text-white">Contact & Bookings</h2>
            <p class="text-zinc-500 text-sm mt-1 uppercase tracking-wider font-semibold">Start your custom visual story</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-8">
              <p className="text-zinc-400 leading-relaxed text-lg">
                Have an upcoming campaign or want to arrange a personal portrait session? Drop a query with your preferred service timeline.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-xl bg-zinc-800/80 flex items-center justify-center text-indigo-400 border border-zinc-700/50"><i className="fa-solid fa-envelope text-lg"></i></span>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Email Direct</h4>
                    <p className="text-zinc-200 font-semibold">hello@alexrivers.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-xl bg-zinc-800/80 flex items-center justify-center text-indigo-400 border border-zinc-700/50"><i class="fa-solid fa-phone text-lg"></i></span>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Phone Direct</h4>
                    <p className="text-zinc-200 font-semibold">+1 (555) 902-1845</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-xl bg-zinc-800/80 flex items-center justify-center text-indigo-400 border border-zinc-700/50"><i class="fa-solid fa-location-dot text-lg"></i></span>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Studio Headquarters</h4>
                    <p className="text-zinc-200 font-semibold">SoHo, Manhattan, NY</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="lg:col-span-7 bg-[#1e1e1e] border border-zinc-800 p-8 rounded-3xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Your Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe" 
                    className="w-full bg-[#121212] border border-zinc-800 focus:border-indigo-500/60 rounded-xl px-4 py-3 text-sm text-zinc-200 outline-none transition-colors" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Email Address <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com" 
                    className="w-full bg-[#121212] border border-zinc-800 focus:border-indigo-500/60 rounded-xl px-4 py-3 text-sm text-zinc-200 outline-none transition-colors" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Select Package</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#121212] border border-zinc-800 focus:border-indigo-500/60 rounded-xl px-4 py-3 text-sm text-zinc-400 outline-none transition-colors"
                >
                  <option value="general">General Collaboration / Print Inquiry</option>
                  <option value="portrait">Portrait Shoot Session ($250)</option>
                  <option value="event">Event Coverage Bundle ($650)</option>
                  <option value="commercial">Commercial Project ($1,200)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Project Scope / Details <span className="text-red-500">*</span></label>
                <textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="5" 
                  placeholder="Share your visual theme, timing, details..." 
                  className="w-full bg-[#121212] border border-zinc-800 focus:border-indigo-500/60 rounded-xl px-4 py-3 text-sm text-zinc-200 outline-none transition-colors resize-none" 
                  required 
                />
              </div>

              <button type="submit" className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/25">
                Submit Booking Request
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* 7. Lightbox Fullscreen Modal */}
      {lightboxActive && filteredItems[lightboxIndex] && (
        <div className="snap-lightbox active fixed inset-0 bg-black/95 flex flex-col justify-between items-center py-6 px-4 z-50">
          {/* Top Bar */}
          <div className="w-full max-w-6xl flex justify-between items-center">
            <div className="text-sm font-medium">
              <span className="text-indigo-400 font-semibold uppercase text-xs">{filteredItems[lightboxIndex].category}</span> — <span className="text-zinc-200">{filteredItems[lightboxIndex].title}</span>
            </div>
            <button onClick={closeLightbox} className="text-zinc-400 hover:text-white p-2 text-2xl transition-colors"><i className="fa-solid fa-xmark"></i></button>
          </div>

          {/* Image Display */}
          <div className="relative w-full max-w-4xl flex items-center justify-between flex-1 py-4">
            <button onClick={() => navigateLightbox(-1)} className="absolute left-0 bg-zinc-900/40 hover:bg-zinc-800 text-white w-12 h-12 rounded-full border border-zinc-850/50 flex items-center justify-center transition-colors z-10"><i className="fa-solid fa-chevron-left"></i></button>
            
            <div className="w-full h-full flex items-center justify-center">
              <img src={filteredItems[lightboxIndex].imgSrc} alt={filteredItems[lightboxIndex].alt} className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-zinc-900" />
            </div>

            <button onClick={() => navigateLightbox(1)} className="absolute right-0 bg-zinc-900/40 hover:bg-zinc-800 text-white w-12 h-12 rounded-full border border-zinc-850/50 flex items-center justify-center transition-colors z-10"><i className="fa-solid fa-chevron-right"></i></button>
          </div>

          {/* Key Hints */}
          <div className="text-xs text-zinc-500 select-none">
            Use Left & Right Arrows on keyboard to browse pictures. Click Esc to close.
          </div>
        </div>
      )}

      {/* 8. Interactive Toast Alert Notification */}
      <div className={`snap-toast fixed bottom-6 right-6 max-w-sm w-full bg-zinc-900 border p-4 rounded-2xl shadow-2xl flex items-center z-50 ${
        toastShow ? 'show' : ''
      } ${
        toastError ? 'border-red-500/30 bg-red-500/10' : 'border-green-500/30 bg-green-500/10'
      }`}>
        {toastError ? (
          <svg className="w-5 h-5 text-red-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
          </svg>
        ) : (
          <svg className="w-5 h-5 text-green-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        )}
        <div className="text-sm font-semibold text-zinc-100 flex-1 pr-2">{toastMessage}</div>
      </div>

    </div>
  );
}
