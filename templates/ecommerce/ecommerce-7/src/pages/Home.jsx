import React from 'react';
import HeroSection from '../components/HeroSection';
import JourneySection from '../components/JourneySection';
import CategorySection from '../components/CategorySection';
import SpecialDeals from '../components/SpecialDeals';
import { Heart, Package, ShieldCheck, RefreshCcw, Send } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Interactive Timeline Journey */}
      <JourneySection />

      {/* 3. Category Carousel Grid */}
      <CategorySection />

      {/* 4. Flying Airplane Special Deals */}
      <SpecialDeals />

      {/* 5. Trust Indicators Grid */}
      <section className="py-12 bg-white border-t border-pink-100/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          
          <div className="flex items-start gap-4">
            <div className="p-3 bg-pink-50 text-pink-500 rounded-2xl"><Send size={20} className="animate-drive-slow" /></div>
            <div>
              <h4 className="font-display font-bold text-gray-800 text-sm">Express Cargo Flights</h4>
              <p className="text-xs text-gray-400 mt-1 leading-normal">Your orders fly through the cloud corridor to sorting hangars.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-pink-50 text-pink-500 rounded-2xl"><Package size={20} className="animate-float" /></div>
            <div>
              <h4 className="font-display font-bold text-gray-800 text-sm">Packed with Love</h4>
              <p className="text-xs text-gray-400 mt-1 leading-normal">Double-wrapped bubble protection in our classic pink startup boxes.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-pink-50 text-pink-500 rounded-2xl"><ShieldCheck size={20} /></div>
            <div>
              <h4 className="font-display font-bold text-gray-800 text-sm">Safe Handoff Insured</h4>
              <p className="text-xs text-gray-400 mt-1 leading-normal">Every parcel is registered on the Spring Boot database with UUID keys.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-pink-50 text-pink-500 rounded-2xl"><RefreshCcw size={20} className="animate-spin-slow" /></div>
            <div>
              <h4 className="font-display font-bold text-gray-800 text-sm">Friendly Returns</h4>
              <p className="text-xs text-gray-400 mt-1 leading-normal">Not standard? Back it up instantly using our self-serve parcel return.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Footer */}
      <footer className="bg-pink-50 border-t border-pink-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-tr from-pink-400 to-rose-500 text-white p-1.5 rounded-lg">
              <Package size={16} />
            </div>
            <span className="font-display font-bold text-gray-700 text-sm">Pink Delivery Universe</span>
          </div>
          
          <div className="flex items-center text-xs text-gray-400 gap-1 font-semibold">
            <span>Made with</span>
            <Heart size={10} className="text-pink-500 fill-pink-500" />
            <span>for a magical shopping journey © 2026. All rights reserved.</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;
