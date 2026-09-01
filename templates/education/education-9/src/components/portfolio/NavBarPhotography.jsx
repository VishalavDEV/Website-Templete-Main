import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { photographyData } from '../../data/portfolio/photographyData';

export default function NavBarPhotography() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0d0d0d] border-b border-zinc-900 py-4 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/templates/portfolio/photography-portfolio" className="font-serif-heading text-xl md:text-2xl font-black text-white hover:text-zinc-300 transition-colors uppercase tracking-wider">
          {photographyData.brand.logoText}
        </Link>

        {/* Navigation links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7">
          {photographyData.navigation.map((item, idx) => {
            if (item.submenu) {
              return (
                <div 
                  key={idx} 
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 text-[11px] font-sans tracking-widest uppercase font-bold text-zinc-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none focus:outline-none">
                    {item.label} <ChevronDown size={12} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 bg-[#0d0d0d] border border-zinc-900 shadow-2xl py-3 w-40 flex flex-col mt-2 z-50">
                      {item.submenu.map((sub, sIdx) => (
                        <NavLink
                          key={sIdx}
                          to={sub.path}
                          className={({ isActive }) => 
                            `px-4 py-2 text-[10px] font-sans tracking-widest uppercase font-bold transition-all ${
                              isActive ? 'text-[#d4af37]' : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
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
                end={item.path === "/templates/portfolio/photography-portfolio"}
                className={({ isActive }) => 
                  `text-[11px] font-sans tracking-widest uppercase font-bold transition-all ${
                    isActive ? 'text-[#d4af37]' : 'text-zinc-400 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Social Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-4 text-zinc-500">
          {photographyData.socials.map((soc, idx) => (
            <a
              key={idx}
              href={soc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors text-xs"
            >
              <i className={soc.icon}></i>
            </a>
          ))}
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-zinc-400 hover:text-white p-1.5 focus:outline-none bg-transparent border-none cursor-pointer"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden w-full bg-[#0d0d0d] border-b border-zinc-900 px-6 py-6 flex flex-col gap-4 absolute top-full left-0 z-50 animate-fadeIn">
          {photographyData.navigation.map((item, idx) => {
            if (item.submenu) {
              return (
                <div key={idx} className="flex flex-col gap-2 pl-2">
                  <span className="text-[11px] font-sans tracking-widest uppercase font-bold text-zinc-600">
                    {item.label}
                  </span>
                  {item.submenu.map((sub, sIdx) => (
                    <NavLink
                      key={sIdx}
                      to={sub.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => 
                        `text-[10px] font-sans tracking-widest uppercase font-bold py-1.5 block ${
                          isActive ? 'text-[#d4af37]' : 'text-zinc-400'
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
                    isActive ? 'text-[#d4af37]' : 'text-zinc-400'
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
