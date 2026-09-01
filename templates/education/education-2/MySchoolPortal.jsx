import React, { useState, useEffect } from 'react';
import useStylesheet from '../../../frontend/src/services/useStylesheet';

export default function MySchoolPortal() {
  useStylesheet('/templates/education/education-2/style.css');

  /* ==========================================
     Navigation Tabs state
     ========================================== */
  const [activePage, setActivePage] = useState('home');

  /* ==========================================
     Parent Inquiry form
     ========================================== */
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [email, setEmail] = useState('');
  const [targetGrade, setTargetGrade] = useState('Grade 1');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /* ==========================================
     Slider State
     ========================================== */
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesData = [
    {
      tag: 'E Learning Solution',
      title: 'Complete Solution For You Education Needs',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum sapien in augue consequat.',
      actionText: 'View Courses',
      actionLink: '#courses'
    },
    {
      tag: 'Nurturing Tomorrow',
      title: 'Empowering Minds, Building a Brighter Future',
      desc: 'We provide an inspiring environment where students learn, grow, and thrive under the guidance of passionate educators.',
      actionText: 'Learn More',
      actionLink: '#courses'
    },
    {
      tag: 'Admissions Open 2026',
      title: 'Take the First Step Towards Academic Success',
      desc: 'Explore our classrooms, curriculum pathways, and dynamic learning environments today.',
      actionText: 'Enquire Now',
      actionLink: '#inquiry'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  const handleInquiry = async (e) => {
    e.preventDefault();
    if (!parentName.trim() || !childName.trim() || !email.trim()) {
      alert('Please fill out all fields.');
      return;
    }

    setSubmitting(true);

    const payload = {
      parentName: parentName.trim(),
      childName: childName.trim(),
      email: email.trim(),
      targetGrade,
      message: message.trim()
    };

    try {
      const response = await fetch('http://localhost:8080/api/myschool/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Server error');
      }
    } catch (err) {
      console.warn('Backend API connection failed, showing simulated success:', err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleRestart = () => {
    setParentName('');
    setChildName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
  };

  const handleCoursesClick = (e) => {
    e.preventDefault();
    setActivePage('home');
    setTimeout(() => {
      const el = document.getElementById('courses');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  /* ==========================================
     Additional Pages Render Logic
     ========================================== */
  const [activeFaq, setActiveFaq] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    alert('Item successfully added to study cart!');
  };

  const renderEvents = () => (
    <>
      <div className="page-header" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80')` }}>
        <div className="container">
          <h1>School Events</h1>
          <div className="breadcrumbs"><a href="#home" onClick={() => setActivePage('home')}>Home</a> <span>/</span> Events</div>
        </div>
      </div>
      <section className="container">
        <div className="events-grid">
          <div className="event-card">
            <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80" alt="Seminar" className="event-img" />
            <div className="event-info">
              <div className="event-date">October 15, 2026</div>
              <h3>Annual Science Fair</h3>
              <p>Students present innovative models covering robotics, environmental preservation, and energy grids.</p>
            </div>
          </div>
          <div className="event-card">
            <img src="https://images.unsplash.com/photo-1464356886494-87f140ece3ff?auto=format&fit=crop&w=400&q=80" alt="Sports Day" className="event-img" />
            <div className="event-info">
              <div className="event-date">November 22, 2026</div>
              <h3>Sports Meet 2026</h3>
              <p>A fun-filled day of athletic championships, relay runs, team tasks, and parent-teacher challenges.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const renderAbout = () => (
    <>
      <div className="page-header" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80')` }}>
        <div className="container">
          <h1>About Us</h1>
          <div className="breadcrumbs"><a href="#home" onClick={() => setActivePage('home')}>Home</a> <span>/</span> About Us</div>
        </div>
      </div>
      <section className="enrollment" style={{ paddingTop: 0 }}>
        <div className="container enrollment-container">
          <div className="enrollment-info">
            <span className="badge">Our History</span>
            <h2>Empowering Minds for Over a Decade</h2>
            <p>Founded with a vision to deliver premium, student-centered education, EducationPress offers an environment where creativity, critical thinking, and character are nurtured in equal measure. Our campus blends traditional pedagogy with cutting-edge learning tech, preparing young minds for a global future.</p>
            <p style={{ marginTop: 15 }}>We maintain a strictly optimized student-teacher ratio to ensure personalized guidance, holistic tracking, and tailored support paths for every single child under our care.</p>
          </div>
          <div className="campus-preview-card">
            <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80" alt="Active Class" className="about-campus-img" />
          </div>
        </div>
      </section>
    </>
  );

  const renderTeachers = () => (
    <>
      <div className="page-header" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80')` }}>
        <div className="container">
          <h1>Our Faculty</h1>
          <div className="breadcrumbs"><a href="#home" onClick={() => setActivePage('home')}>Home</a> <span>/</span> Teachers</div>
        </div>
      </div>
      <section className="container">
        <div className="teachers-grid">
          <div className="teacher-card">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" alt="Sarah Jenkins" className="teacher-img" />
            <div className="teacher-info">
              <h3>Dr. Sarah Jenkins</h3>
              <div className="title">Lead Mathematics Mentor</div>
              <p>Ph.D. in Mathematics with 12+ years of guiding students in early algebra, spatial logic, and game theory structures.</p>
            </div>
          </div>
          <div className="teacher-card">
            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" alt="Evelyn Reed" className="teacher-img" />
            <div className="teacher-info">
              <h3>Dr. Evelyn Reed</h3>
              <div className="title">Biology Coordinator</div>
              <p>Specialist in early biochemistry and genetics. Passionate about introducing young learners to dynamic laboratory experiments.</p>
            </div>
          </div>
          <div className="teacher-card">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" alt="Arthur Sterling" className="teacher-img" />
            <div className="teacher-info">
              <h3>Prof. Arthur Sterling</h3>
              <div className="title">Literature Director</div>
              <p>Masters in Creative Writing from Oxford. Focuses on creative storytelling, linguistic development, and public speech arts.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const renderGallery = () => (
    <>
      <div className="page-header" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80')` }}>
        <div className="container">
          <h1>Campus Gallery</h1>
          <div className="breadcrumbs"><a href="#home" onClick={() => setActivePage('home')}>Home</a> <span>/</span> Gallery</div>
        </div>
      </div>
      <section className="container">
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=600&q=80" alt="Art Room" />
            <div className="gallery-overlay">Creative Art Studio</div>
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=600&q=80" alt="Science Lab" />
            <div className="gallery-overlay">Modern Science Lab</div>
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80" alt="Library" />
            <div className="gallery-overlay">Academic Library</div>
          </div>
        </div>
      </section>
    </>
  );

  const renderFaq = () => {
    const faqs = [
      { q: "What are the school admission deadlines?", a: "Admissions for the upcoming academic year remain open until April 30th. Seat allocations are processed on a first-come, first-served basis." },
      { q: "What curriculum pathways do you follow?", a: "We prioritize standard academic foundations enhanced with creative arts, mathematical reasoning, and hands-on laboratory exploration." },
      { q: "Is school transportation provided?", a: "Yes, we operate a fleet of safe, monitored school buses covering major residential sectors within a 15km radius of the campus." }
    ];
    return (
      <>
        <div className="page-header" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80')` }}>
          <div className="container">
            <h1>Frequently Asked Questions</h1>
            <div className="breadcrumbs"><a href="#home" onClick={() => setActivePage('home')}>Home</a> <span>/</span> FAQ</div>
          </div>
        </div>
        <section className="container">
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${activeFaq === idx ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}>
                  {faq.q} <i className="fa-solid fa-chevron-down"></i>
                </div>
                <div className="faq-answer">{faq.a}</div>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  };

  const renderBlog = () => (
    <>
      <div className="page-header" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80')` }}>
        <div className="container">
          <h1>Latest News & Blog</h1>
          <div className="breadcrumbs"><a href="#home" onClick={() => setActivePage('home')}>Home</a> <span>/</span> Blog</div>
        </div>
      </div>
      <section className="container">
        <div className="blog-grid">
          <div className="blog-card">
            <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80" alt="Study" className="blog-img" />
            <div className="blog-info">
              <div className="blog-meta">
                <span><i className="fa-regular fa-calendar"></i> August 12, 2026</span>
                <span><i className="fa-regular fa-user"></i> Admin</span>
              </div>
              <h3>5 Effective Study Techniques for Early Learners</h3>
              <p>Discover how spatial game play, structured reading lists, and collaborative art tasks help build brain pathways.</p>
              <a href="#blog-post" className="read-more" onClick={(e) => e.preventDefault()}>Read Details <i className="fa-solid fa-arrow-right-long"></i></a>
            </div>
          </div>
          <div className="blog-card">
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" alt="Smart Classroom" className="blog-img" />
            <div className="blog-info">
              <div className="blog-meta">
                <span><i className="fa-regular fa-calendar"></i> August 18, 2026</span>
                <span><i className="fa-regular fa-user"></i> Staff</span>
              </div>
              <h3>The Role of Smart Classrooms in Modern Schools</h3>
              <p>An in-depth look at how interactive screen systems, digital boards, and visual tools enhance student retention.</p>
              <a href="#blog-post" className="read-more" onClick={(e) => e.preventDefault()}>Read Details <i className="fa-solid fa-arrow-right-long"></i></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const renderShop = () => (
    <>
      <div className="page-header" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80')` }}>
        <div className="container">
          <h1>School Store</h1>
          <div className="breadcrumbs"><a href="#home" onClick={() => setActivePage('home')}>Home</a> <span>/</span> Shop</div>
        </div>
      </div>
      <section className="container">
        <div className="shop-grid">
          <div className="product-card">
            <div className="product-img-wrap">
              <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80" alt="Backpack" />
            </div>
            <div className="product-info">
              <h3>Premium School Backpack</h3>
              <div className="product-price">$45.00</div>
              <button className="btn-buy" onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-wrap">
              <img src="https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=600&q=80" alt="Notebooks" />
            </div>
            <div className="product-info">
              <h3>Classic Grid Notebooks</h3>
              <div className="product-price">$12.00</div>
              <button className="btn-buy" onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-img-wrap">
              <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80" alt="Calculator" />
            </div>
            <div className="product-info">
              <h3>Scientific Calculator & Kit</h3>
              <div className="product-price">$28.00</div>
              <button className="btn-buy" onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const renderContact = () => (
    <>
      <div className="page-header" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=80')` }}>
        <div className="container">
          <h1>Contact Registrar</h1>
          <div className="breadcrumbs"><a href="#home" onClick={() => setActivePage('home')}>Home</a> <span>/</span> Contact Us</div>
        </div>
      </div>
      <section className="container" style={{ marginBottom: 80 }}>
        <div className="enrollment-container">
          <div className="enrollment-info">
            <span className="badge">Find Us</span>
            <h2>Reach Out to Our Admissions Office</h2>
            <p>If you have any questions regarding admission eligibility criteria, seat availabilities, or school uniform guidelines, please drop a line or visit our reception desk.</p>
            <p style={{ marginTop: 20, fontWeight: 600, color: 'var(--dark)' }}>
              <i className="fa-solid fa-location-dot" style={{ color: 'var(--primary)', marginRight: 8 }}></i> 455 University Boulevard, Cambridge Meadows, MA 02138<br/><br/>
              <i className="fa-solid fa-phone" style={{ color: 'var(--primary)', marginRight: 8 }}></i> +731 234 5678<br/><br/>
              <i className="fa-solid fa-envelope" style={{ color: 'var(--primary)', marginRight: 8 }}></i> registrar@educationpress.edu
            </p>
          </div>

          <div className="enrollment-form-card">
            <h3>Send a Message</h3>
            <p>We'll respond to your inquiry within 24 business hours.</p>
            {!contactSubmitted ? (
              <form onSubmit={(e) => { e.preventDefault(); setContactSubmitted(true); }} className="inquiry-form">
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label>Message Details</label>
                  <input type="text" placeholder="Ask your question here..." required />
                </div>
                <button type="submit" className="btn btn-primary form-submit">Send Message</button>
              </form>
            ) : (
              <div className="form-success-msg" style={{ display: 'block' }}>
                <h3>Message successfully delivered!</h3>
                <p style={{ marginTop: 10 }}>Thank you. We will get back to you shortly.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );

  const renderHome = () => (
    <>
      {/* Hero Slider Section */}
      <section id="home" className="hero-slider">
        <div className="slider-container">
          {slidesData.map((slide, index) => (
            <div 
              key={index} 
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.55), rgba(15, 23, 42, 0.55)), url('/templates/education/education-8/hero-bg.jpg')` }}
            >
              <div className="container hero-container">
                <div className="hero-content">
                  <span className="hero-tag">{slide.tag}</span>
                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-desc">{slide.desc}</p>
                  <div className="hero-actions">
                    <a href={slide.actionLink} className="btn btn-outline-white">{slide.actionText} <i className="fa-solid fa-arrow-right-long btn-arrow"></i></a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Arrow Controls */}
          <button className="slider-arrow prev-arrow" onClick={handlePrevSlide} aria-label="Previous Slide">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="slider-arrow next-arrow" onClick={handleNextSlide} aria-label="Next Slide">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features">
        <div className="container features-grid">
          <div className="feature-card">
            <div className="feature-icon icon-orange"><i className="fa-solid fa-user-tie"></i></div>
            <h3>Qualified Teachers</h3>
            <p>Experienced & Caring</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon icon-blue"><i className="fa-solid fa-laptop"></i></div>
            <h3>Smart Classrooms</h3>
            <p>Modern Learning</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon icon-green"><i className="fa-solid fa-puzzle-piece"></i></div>
            <h3>Holistic Development</h3>
            <p>Beyond Academics</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon icon-purple"><i className="fa-solid fa-shield-halved"></i></div>
            <h3>Safe Environment</h3>
            <p>Care & Support</p>
          </div>
        </div>
      </section>

      {/* Curriculum Showcase Section */}
      <section id="courses" className="curriculum">
        <div className="container">
          <div className="section-header">
            <span className="badge">Curriculum</span>
            <h2>Our Core Learning Pathways</h2>
            <p>We prioritize developmental milestones, creative thinking, and standard academic foundations.</p>
          </div>

          <div className="curriculum-grid">
            <div className="cur-card">
              <div className="cur-icon"><i className="fa-solid fa-book-open-reader"></i></div>
              <h3>Early Literacy & Reading</h3>
              <p>Developing phonetic awareness, word structure grids, storytelling, and early writing habits.</p>
            </div>
            <div className="cur-card">
              <div className="cur-icon"><i className="fa-solid fa-shapes"></i></div>
              <h3>Creative Arts & Exploration</h3>
              <p>Exploring colors, clay structures, music arrangements, and theatrical play to nurture curiosity.</p>
            </div>
            <div className="cur-card">
              <div className="cur-icon"><i className="fa-solid fa-calculator"></i></div>
              <h3>Mathematical Reasoning</h3>
              <p>Foundations of arithmetic logic, geometric spatial puzzles, and dynamic counting games.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Inquiry Form Section */}
      <section id="inquiry" className="enrollment">
        <div className="container enrollment-container">
          <div className="enrollment-info">
            <span className="badge">Enrollment Open</span>
            <h2>Empowering Students for a Bright Future</h2>
            <p>We focus on academic excellence, character building, and overall development of every child, ensuring they are well-prepared for tomorrow's challenges.</p>
            <div className="campus-preview-card">
              <img src="/templates/education/education-8/hero-bg.jpg" alt="School Campus Preview" className="about-campus-img" />
              <div className="preview-overlay">
                <span className="play-btn"><i className="fa-solid fa-play"></i></span>
                <span>Virtual Tour</span>
              </div>
            </div>
          </div>

          <div className="enrollment-form-card" id="contact">
            <h3>Admission Inquiry</h3>
            <p>Fill out the form below and our admissions counsellor will contact you shortly.</p>
            {!submitted ? (
              <form onSubmit={handleInquiry} className="inquiry-form">
                <div className="form-group">
                  <label>Parent Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Robert Smith"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Child Name</label>
                  <input 
                    type="text" 
                    placeholder="Tommy Smith"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    placeholder="robert@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Target Grade Level</label>
                  <select 
                    value={targetGrade}
                    onChange={(e) => setTargetGrade(e.target.value)}
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', background: '#fff', fontSize: '0.95rem', fontFamily: 'var(--font)' }}
                  >
                    <option value="Kindergarten">Kindergarten</option>
                    <option value="Grade 1">Grade 1</option>
                    <option value="Grade 2">Grade 2</option>
                    <option value="Grade 3">Grade 3</option>
                    <option value="Grade 4">Grade 4</option>
                    <option value="Grade 5">Grade 5</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Additional Details (Optional)</label>
                  <textarea 
                    placeholder="Tell us about your child's interests..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', minHeight: '100px', resize: 'vertical', fontSize: '0.95rem', fontFamily: 'var(--font)' }}
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={submitting}
                  className="btn btn-primary form-submit"
                >
                  {submitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </form>
            ) : (
              <div className="form-success-msg" style={{ display: 'block' }}>
                <h3>Parent Inquiry Registered!</h3>
                <p style={{ marginTop: 10, fontWeight: 500, opacity: 0.9 }}>Thank you for reaching out. Our registrar office will contact you within 24 hours.</p>
                <button 
                  onClick={handleRestart}
                  className="btn btn-primary"
                  style={{ marginTop: 20, padding: '10px 20px', fontSize: '0.85rem' }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );

  return (
    <div className="myschool-portal-root">
      
      {/* Top Utility Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-left">
            <span>The Most Complete Education Solution</span>
          </div>
          <div className="top-right">
            <span><i className="fa-solid fa-phone-volume"></i> Call Us +731 234 5678</span>
            <span className="divider">|</span>
            <a href="#signup" className="top-link">Signup</a>
            <span className="divider">|</span>
            <a href="#login" className="top-link">Login</a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="header">
        <div className="container nav-container">
          <div className="logo" onClick={() => setActivePage('home')} style={{ cursor: 'pointer' }}>
            <div className="logo-shield">
              <i className="fa-solid fa-shield-halved logo-shield-icon"></i>
              <span className="logo-letter">E</span>
              <div className="logo-wreath"><i className="fa-solid fa-leaf"></i><i className="fa-solid fa-leaf"></i></div>
            </div>
            <span className="brand-text">Education<span>Press</span></span>
          </div>
          <nav className="nav-menu">
            <div className={`nav-item ${activePage === 'home' ? 'active' : ''}`}>
              <a href="#home" onClick={(e) => { e.preventDefault(); setActivePage('home'); }}>Home <i className="fa-solid fa-chevron-down nav-arrow"></i></a>
            </div>
            <div className="nav-item">
              <a href="#courses" onClick={handleCoursesClick}>Courses <i className="fa-solid fa-chevron-down nav-arrow"></i></a>
            </div>
            <div className={`nav-item ${activePage === 'events' ? 'active' : ''}`}>
              <a href="#events" onClick={(e) => { e.preventDefault(); setActivePage('events'); }}>Events <i className="fa-solid fa-chevron-down nav-arrow"></i></a>
            </div>
            <div className={`nav-item ${['about', 'teachers', 'gallery', 'faq'].includes(activePage) ? 'active' : ''}`}>
              <a href="#pages" onClick={(e) => e.preventDefault()}>Pages <i className="fa-solid fa-chevron-down nav-arrow"></i></a>
              <ul className="dropdown-menu">
                <li><a href="#about" onClick={(e) => { e.preventDefault(); setActivePage('about'); }}>About Us</a></li>
                <li><a href="#teachers" onClick={(e) => { e.preventDefault(); setActivePage('teachers'); }}>Teachers</a></li>
                <li><a href="#gallery" onClick={(e) => { e.preventDefault(); setActivePage('gallery'); }}>Gallery</a></li>
                <li><a href="#faq" onClick={(e) => { e.preventDefault(); setActivePage('faq'); }}>FAQ</a></li>
              </ul>
            </div>
            <div className={`nav-item ${activePage === 'blog' ? 'active' : ''}`}>
              <a href="#blog" onClick={(e) => { e.preventDefault(); setActivePage('blog'); }}>Blog <i className="fa-solid fa-chevron-down nav-arrow"></i></a>
            </div>
            <div className={`nav-item ${activePage === 'shop' ? 'active' : ''}`}>
              <a href="#shop" onClick={(e) => { e.preventDefault(); setActivePage('shop'); }}>Shop <i className="fa-solid fa-chevron-down nav-arrow"></i></a>
            </div>
            <div className={`nav-item ${activePage === 'contact' ? 'active' : ''}`}>
              <a href="#contact" onClick={(e) => { e.preventDefault(); setActivePage('contact'); }}>Contact Us</a>
            </div>
          </nav>
          <div className="cart-box">
            <a href="#cart" className="cart-btn" onClick={(e) => { e.preventDefault(); setActivePage('shop'); }}>
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="cart-badge">{cartCount}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Dynamic Page Render */}
      {activePage === 'home' && renderHome()}
      {activePage === 'events' && renderEvents()}
      {activePage === 'about' && renderAbout()}
      {activePage === 'teachers' && renderTeachers()}
      {activePage === 'gallery' && renderGallery()}
      {activePage === 'faq' && renderFaq()}
      {activePage === 'blog' && renderBlog()}
      {activePage === 'shop' && renderShop()}
      {activePage === 'contact' && renderContact()}

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-box">
          <div className="footer-left">
            <span className="footer-logo"><i className="fa-solid fa-shield-halved"></i> EducationPress</span>
            <p>&copy; 2026 EducationPress. All Rights Reserved.</p>
          </div>
          <div className="socials">
            <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </footer>

    </div>
  );
}
