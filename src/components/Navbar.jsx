import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'الخدمات', href: '#services' },
    { name: 'المشاريع', href: '#projects' },
    { name: 'التواصل', href: '#contact' },
  ];

  return (
    <nav className="bg-gray-900 shadow-xl sticky top-0 z-50 border-b border-gray-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Zap className="h-7 w-7 text-teal-400 ml-2 transform rotate-12" />
            <span className="text-2xl font-extrabold text-white tracking-wider">
              العصر الرقمي
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:bg-gray-700 hover:text-teal-400 px-3 py-2 rounded-lg text-sm font-medium transition duration-300"
              >
                {item.name}
              </a>
            ))}
            <a 
                href="#cta"
                className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-xl text-sm font-semibold transition duration-300 shadow-lg shadow-teal-500/40 transform hover:scale-[1.02]"
            >
                ابدأ مشروعك
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-400 transition duration-150"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-gray-800/95 backdrop-blur-sm pb-3 pt-2 transition-all duration-300 ease-in-out">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:bg-gray-700 hover:text-teal-400 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
              >
                {item.name}
              </a>
            ))}
            <a 
                href="#cta"
                onClick={() => setIsOpen(false)}
                className="w-full mt-3 block text-center bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-xl text-base font-semibold transition duration-300"
            >
                ابدأ مشروعك
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;