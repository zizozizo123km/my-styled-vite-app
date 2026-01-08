import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'المشاريع', href: '#projects' },
    { name: 'المدونة', href: '#blog' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-900 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Brand (Right side in RTL context) */}
          <div className="flex-shrink-0 order-1">
            <a href="#" className="text-2xl font-extrabold text-indigo-400 tracking-wide">
              <span className="text-white">Modern</span>Site
            </a>
          </div>

          {/* Desktop Navigation (Center) */}
          {/* Using space-x-reverse to handle RTL spacing correctly */}
          <nav className="hidden md:flex md:space-x-8 md:space-x-reverse order-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Button / Mobile Menu Toggle (Left side in RTL context) */}
          <div className="flex items-center order-3">
            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg text-sm transition duration-300 shadow-md transform hover:scale-105">
                ابدأ الآن
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-400 transition duration-150"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 pb-4 pt-2 space-y-1 px-2 transition-all duration-300 ease-in-out">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-right transition duration-150"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2 px-3">
            <button 
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg text-base transition duration-300 shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
                ابدأ الآن
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;