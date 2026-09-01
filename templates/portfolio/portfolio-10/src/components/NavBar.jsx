import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { creativeData } from '../data/creativeData';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-zinc-100 py-4 px-6 md:px-12 font-sans shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="font-serif-heading text-xl md:text-2xl font-black text-zinc-900 hover:text-zinc-600 transition-colors uppercase tracking-wider">
          {creativeData.brand.logoText}
        </Link>

        {/* Navigation links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7">
          {creativeData.navigation.map((item, idx) => {
            if (item.submenu) {
              return (
                <div 
                  key={idx} 
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 text-[11px] font-sans tracking-widest uppercase font-bold text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer bg-transparent border-none focus:outline-none">
                    {item.label} <ChevronDown size={12} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 bg-white border border-zinc-100 shadow-2xl py-3 w-40 flex flex-col mt-2 z-50">
                      {item.submenu.map((sub, sIdx) => (
                        <NavLink
                          key={sIdx}
                          to={sub.path}
                          className={({ isActive }) => 
                            `px-4 py-2 text-[10px] font-sans tracking-widest uppercase font-bold transition-all ${
                              isActive ? 'text-[#ec4899]' : 'text-zinc-550 hover:text-zinc-900 hover:bg-zinc-50'
                            }`
                          }
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={idx}
                to={item.path}
                className={({ isActive }) => 
                  `text-[11px] font-sans tracking-widest uppercase font-bold transition-all ${
                    isActive ? 'text-[#ec4899]' : 'text-zinc-500 hover:text-zinc-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Social Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-4 text-zinc-400">
          {creativeData.socials.map((soc, idx) => (
            <a
              key={idx}
              href={soc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors text-xs"
            >
              <i className={soc.icon}></i>
            </a>
          ))}
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-zinc-500 hover:text-zinc-900 p-1.5 focus:outline-none bg-transparent border-none cursor-pointer"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden w-full bg-white border-b border-zinc-100 px-6 py-6 flex flex-col gap-4 absolute top-full left-0 z-50">
          {creativeData.navigation.map((item, idx) => {
            if (item.submenu) {
              return (
                <div key={idx} className="flex flex-col gap-2 pl-2">
                  <span className="text-[11px] font-sans tracking-widest uppercase font-bold text-zinc-400">
                    {item.label}
                  </span>
                  {item.submenu.map((sub, sIdx) => (
                    <NavLink
                      key={sIdx}
                      to={sub.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => 
                        `text-[10px] font-sans tracking-widest uppercase font-bold py-1.5 block ${
                          isActive ? 'text-[#ec4899]' : 'text-zinc-500'
                        }`
                      }
                    >
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              );
            }

            return (
              <NavLink
                key={idx}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `text-xs font-sans tracking-widest uppercase font-bold py-2 block ${
                    isActive ? 'text-[#ec4899]' : 'text-zinc-500'
                  }`
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </div>
      )}
    </header>
  );
}
