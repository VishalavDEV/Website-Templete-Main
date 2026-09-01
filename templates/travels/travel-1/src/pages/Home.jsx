import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Plane, Car, Train, Ship, Compass, Star, MapPin, Sparkles, Send } from 'lucide-react';
import axios from 'axios';
import { MOCK_DESTINATIONS, MOCK_TOURS, MOCK_EXPERIENCES } from '../data/travelData';
import WorldMap from '../components/WorldMap';
import EnvironmentAnimator from '../components/animations/EnvironmentAnimator';
import { 
  FloatingCloud, FloatingAirplane, FloatingBalloon, 
  MovingTrain, SailingShip, WalkingTraveller, DrivingCar 
} from '../components/animations/FloatingVehicles';

export default function Home() {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState(MOCK_DESTINATIONS.slice(0, 4));
  const [tours, setTours] = useState(MOCK_TOURS.slice(0, 4));
  const [experiences, setExperiences] = useState(MOCK_EXPERIENCES.slice(0, 4));
  const [selectedTransport, setSelectedTransport] = useState('Plane');
  const [hoveredExperience, setHoveredExperience] = useState(null);

  // Testimonials Carousel State
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    { name: "Sarah Jenkins", loc: "Switzerland Alps", text: "Taking the train through the Jungfrau peak was a religious experience. Travelverse mapped out my hotel stay perfectly!", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80", bg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" },
    { name: "Rajesh Kumar", loc: "Dubai Marina", text: "The luxury yacht sunset cruise was spectacular. Seamless booking and in-memory plan timeline saved hours.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80", bg: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80" },
    { name: "Elena Rostova", loc: "Maldives Overwater Lagoon", text: "Flickering campfires on private islands under the stars. Everything felt premium, playful, and futuristic.", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80", bg: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80" }
  ];

  // Scroll animations Hook
  const { scrollYProgress } = useScroll();
  const roadScrollX = useTransform(scrollYProgress, [0.15, 0.3], [-100, 450]);
  const trainScrollX = useTransform(scrollYProgress, [0.3, 0.45], [-150, 600]);
  const planeScrollX = useTransform(scrollYProgress, [0.45, 0.6], [-150, 750]);
  const shipScrollX = useTransform(scrollYProgress, [0.6, 0.75], [-100, 500]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/destinations').then(res => setDestinations(res.data.slice(0, 4))).catch(err => console.error(err));
    axios.get('http://localhost:8080/api/tours').then(res => setTours(res.data.slice(0, 4))).catch(err => console.error(err));
    axios.get('http://localhost:8080/api/experiences').then(res => setExperiences(res.data.slice(0, 4))).catch(err => console.error(err));
  }, []);

  return (
    <div className="w-full pb-20 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 pt-24 overflow-hidden">
        {/* Sky Background (Clean light theme sky gradient) */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/60 via-slate-50 to-white z-0 pointer-events-none" />
        
        {/* Dynamic Flying elements */}
        <FloatingCloud delay={0} speed={40} top="15%" scale={1.2} />
        <FloatingCloud delay={15} speed={30} top="30%" scale={0.8} />
        <FloatingAirplane top="25%" speed={22} delay={5} />
        <FloatingBalloon right="15%" top="20%" />

        {/* Foreground Mountain Range and Ocean Backdrop (Light themed soft styling) */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-100/30 via-slate-100/50 to-transparent z-0 pointer-events-none" />
        
        {/* Vehicles Moving Naturally in Hero Background - Lined up horizontally, crossing 1 by 1 */}
        <DrivingCar bottom="24px" speed={16} delay={0} />
        <MovingTrain bottom="24px" speed={20} delay={6} />
        <SailingShip bottom="24px" speed={24} delay={12} />
        <WalkingTraveller startX={-50} endX={1150} duration={32} delay={18} bottom="24px" />

        {/* Hero Copy */}
        <div className="relative z-10 max-w-4xl text-center space-y-6 mt-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-xs font-semibold uppercase tracking-widest"
          >
            <Sparkles className="w-4 h-4 animate-spin" />
            <span>Introducing Travelverse</span>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-none"
          >
            The World Is Waiting.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-teal-300 to-amber-400">
              Start Your Journey.
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            Discover incredible destinations, unforgettable experiences and journeys made for you.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={() => navigate('/destinations')}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400 hover:from-indigo-600 hover:to-teal-500 text-white font-bold shadow-lg shadow-indigo-500/20 flex items-center space-x-2 glow-btn"
            >
              <span>Explore Destinations</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate('/planner')}
              className="px-8 py-4 rounded-full border border-slate-700 bg-slate-900/50 hover:bg-slate-900 text-slate-300 font-bold hover:border-indigo-500/40 transition-colors"
            >
              Plan My Trip
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. SCROLL-BASED JOURNEY ANIMATION */}
      <section className="relative w-full max-w-6xl mx-auto px-6 py-24 space-y-16">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold text-slate-900">Your Scrollable Journey</h2>
          <p className="text-slate-600 text-sm">Scroll down to travel through different stages of a real global trip.</p>
        </div>

        <div className="relative border-l-2 border-indigo-900/50 pl-8 space-y-24 max-w-3xl mx-auto">
          
          {/* Scene 1: Road Trip */}
          <div className="relative group">
            <div className="absolute -left-[41px] top-1.5 bg-indigo-600 w-6 h-6 rounded-full border-4 border-slate-50 flex items-center justify-center" />
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-indigo-600">Scene 1 — Road Trip</h3>
              <p className="text-slate-600 text-sm max-w-lg">The traveller enters the vehicle. We slide through highway canyons and forests.</p>
              <div className="relative w-full h-32 bg-slate-100 border border-slate-200 rounded-2xl overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-slate-350" />
                <motion.div style={{ x: roadScrollX }} className="absolute bottom-2">
                  <Car className="w-12 h-12 text-teal-500 animate-bounce" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Scene 2: Train Journey */}
          <div className="relative group">
            <div className="absolute -left-[41px] top-1.5 bg-teal-500 w-6 h-6 rounded-full border-4 border-slate-50 flex items-center justify-center" />
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-teal-650">Scene 2 — Train Journey</h3>
              <p className="text-slate-600 text-sm max-w-lg">Transitioning from asphalt onto railways, cutting through grand snow peaks and valley bridges.</p>
              <div className="relative w-full h-32 bg-slate-100 border border-slate-200 rounded-2xl overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-slate-350" />
                <motion.div style={{ x: trainScrollX }} className="absolute bottom-2">
                  <Train className="w-12 h-12 text-indigo-600" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Scene 3: Flight */}
          <div className="relative group">
            <div className="absolute -left-[41px] top-1.5 bg-amber-500 w-6 h-6 rounded-full border-4 border-slate-50 flex items-center justify-center" />
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-amber-600">Scene 3 — Takeoff & Flight</h3>
              <p className="text-slate-600 text-sm max-w-lg">Taking to the skies. Plane floats high above, sailing through puffy clouds and atmospheric layers.</p>
              <div className="relative w-full h-32 bg-slate-100 border border-slate-200 rounded-2xl overflow-hidden">
                <motion.div style={{ x: planeScrollX }} className="absolute top-6">
                  <Plane className="w-12 h-12 text-yellow-500 rotate-[-10deg]" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Scene 4: Ocean Cruise */}
          <div className="relative group">
            <div className="absolute -left-[41px] top-1.5 bg-pink-500 w-6 h-6 rounded-full border-4 border-slate-50 flex items-center justify-center" />
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-pink-600">Scene 4 — Ocean Crossing</h3>
              <p className="text-slate-600 text-sm max-w-lg">Cruising across blue horizons, sailing alongside seagulls and tidal waves.</p>
              <div className="relative w-full h-32 bg-slate-100 border border-slate-200 rounded-2xl overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-t from-teal-200/40 to-transparent" />
                <motion.div style={{ x: shipScrollX }} className="absolute bottom-2">
                  <Ship className="w-12 h-12 text-slate-500" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Scene 5: Destination Arrival */}
          <div className="relative group">
            <div className="absolute -left-[41px] top-1.5 bg-indigo-500 w-6 h-6 rounded-full border-4 border-slate-50 flex items-center justify-center" />
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-indigo-650">Scene 5 — Reach Destination</h3>
              <p className="text-slate-600 text-sm max-w-lg">Arrival at your luxury resort. Step out, check your camera, and start enjoying the view.</p>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-slate-100 border border-slate-200 text-center"
              >
                <Compass className="w-12 h-12 text-amber-500 mx-auto animate-spin" />
                <h4 className="text-xl font-bold text-slate-800 mt-3">Welcome to Paradise</h4>
                <p className="text-slate-500 text-xs mt-1">Let's create custom plans for you.</p>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE WORLD MAP */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-extrabold text-slate-900">Where Will You Go Next?</h2>
          <p className="text-slate-550 text-sm">Select any pulsing coordinate point on our custom grid flight map.</p>
        </div>
        <WorldMap />
      </section>

      {/* 4. CHOOSE YOUR WAY TO TRAVEL (TRANSPORTATION SECTION) */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-extrabold text-slate-900">Choose Your Way to Travel</h2>
          <p className="text-slate-550 text-sm font-light">Select a vehicle to reveal customized packages and animations.</p>
        </div>

        {/* Vehicle buttons selector */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { name: 'Car', icon: Car, desc: 'Road trip across beautiful highways & valleys.' },
            { name: 'Train', icon: Train, desc: 'Premium scenic rail travel through grand mountain passes.' },
            { name: 'Plane', icon: Plane, desc: 'Dazzling high-altitude flights across global corridors.' },
            { name: 'Ship', icon: Ship, desc: 'Majestic oceanic cruise lines and tropical routes.' }
          ].map(t => {
            const Icon = t.icon;
            const isSelected = selectedTransport === t.name;
            return (
              <button
                key={t.name}
                onClick={() => setSelectedTransport(t.name)}
                className={`px-6 py-3 rounded-full flex items-center space-x-2 border transition-all duration-300 ${
                  isSelected 
                    ? 'bg-gradient-to-r from-indigo-500 to-teal-400 border-transparent text-white' 
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-bold text-sm">{t.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Environment Container */}
        <div className="relative w-full h-[320px] rounded-3xl bg-slate-900/50 border border-slate-800 overflow-hidden flex flex-col justify-end p-8">
          {/* Abstract Sky/Weather Backdrop */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-slate-950 to-slate-950 z-0 pointer-events-none" />

          {/* Animate floating vehicle relative to choice */}
          {selectedTransport === 'Car' && <DrivingCar bottom="50px" speed={8} />}
          {selectedTransport === 'Train' && <MovingTrain bottom="50px" speed={10} />}
          {selectedTransport === 'Plane' && <FloatingAirplane top="30%" speed={12} />}
          {selectedTransport === 'Ship' && <SailingShip bottom="30px" speed={14} />}

          {/* Scenery details */}
          <div className="relative z-10 max-w-md space-y-3">
            <span className="bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase">
              Environment Animation
            </span>
            <h3 className="text-3xl font-extrabold text-white">{selectedTransport} Journey</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Experience comfortable custom-planned packages mapped to {selectedTransport.toLowerCase()} travel. Instant coordination, in-memory updates, and transparent billing.
            </p>
            <button
              onClick={() => navigate('/tours')}
              className="py-2.5 px-6 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-200 hover:text-white hover:border-slate-700 transition-colors"
            >
              View Travel Packages
            </button>
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCES SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-extrabold text-slate-900">Travel Experiences</h2>
          <p className="text-slate-600 text-sm">Hover over an experience to animate its environment live.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              onMouseEnter={() => setHoveredExperience(exp.animationConfig)}
              onMouseLeave={() => setHoveredExperience(null)}
              className="relative rounded-2xl h-72 border border-slate-800 bg-slate-900 overflow-hidden flex flex-col justify-end p-6 group cursor-pointer"
            >
              {/* Experience static bg */}
              <img 
                src={exp.bannerImage} 
                alt={exp.name} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              {/* Particle overlay */}
              <EnvironmentAnimator 
                type={exp.animationConfig} 
                active={hoveredExperience === exp.animationConfig} 
              />

              {/* Copy */}
              <div className="relative z-20 space-y-2">
                <span className={`px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-gradient-to-r ${exp.themeColor} text-white`}>
                  {exp.name}
                </span>
                <p className="text-xs text-slate-300 font-light">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. POPULAR TOURS */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <h2 className="text-4xl font-extrabold text-slate-900">Popular Tours</h2>
            <p className="text-slate-600 text-sm">Top hand-curated multi-day vacation packages.</p>
          </div>
          <button
            onClick={() => navigate('/tours')}
            className="flex items-center space-x-2 text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <span>See All Packages</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map(tour => (
            <motion.div
              key={tour.id}
              whileHover={{ y: -6 }}
              className="glass-panel-light rounded-2xl border border-slate-200 overflow-hidden group cursor-pointer"
              onClick={() => navigate(`/tours/${tour.id}`)}
            >
              <div className="relative h-44 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-[10px] text-slate-200 font-bold px-2 py-0.5 rounded-full flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  {tour.destination}
                </span>
              </div>
              <div className="p-5 space-y-3">
                <h4 className="font-extrabold text-lg text-slate-800 group-hover:text-indigo-600 transition-colors line-clamp-1">{tour.name}</h4>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{tour.duration}</span>
                  <span className="flex items-center text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current mr-1" />
                    {tour.rating}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                  <span className="text-slate-500 text-xs">From <strong className="text-slate-900 text-base">${tour.price}</strong></span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 group-hover:translate-x-1.5 transition-transform flex items-center">
                    Book Now <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="glass-panel rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          {/* Quote mark silhouette */}
          <div className="absolute top-6 right-6 text-slate-800/30 text-7xl font-serif">“</div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-indigo-400 shadow-md flex-shrink-0">
              <img 
                src={testimonials[activeTestimonial].avatar} 
                alt={testimonials[activeTestimonial].name}
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="space-y-4">
              <p className="text-slate-300 italic text-lg leading-relaxed">
                "{testimonials[activeTestimonial].text}"
              </p>
              <div>
                <h4 className="font-bold text-white text-base">{testimonials[activeTestimonial].name}</h4>
                <span className="text-slate-500 text-xs">{testimonials[activeTestimonial].loc}</span>
              </div>
              <div className="flex space-x-2 pt-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      activeTestimonial === idx ? 'bg-indigo-400 w-6' : 'bg-slate-700'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <div className="glass-panel rounded-3xl p-8 lg:p-12 bg-gradient-to-br from-slate-900/60 to-indigo-950/20 border border-indigo-500/10 space-y-6">
          <Compass className="w-12 h-12 text-indigo-400 mx-auto animate-spin" />
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">Get Your Next Adventure Delivered.</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
            Join 45,000+ wanderlust enthusiasts. Subscribe to receive customized flight alerts, promo tickets, and stories.
          </p>
          <div className="max-w-md mx-auto">
            {/* Direct newsletter form is wired into footer, but we offer a quick sign up here */}
            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className="py-3.5 px-8 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400 text-white font-bold hover:shadow-lg transition-all flex items-center space-x-2 mx-auto"
            >
              <span>Subscribe Now</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
