import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* Column 1: Brand/About */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-3xl font-extrabold text-indigo-400 mb-4 tracking-wider">
              ModernSite
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Building the future, one elegant solution at a time. We focus on performance and user experience.
            </p>
            <div className="flex space-x-4 mt-6">
              {/* Placeholder for Social Icons (using simple text/emoji for demonstration) */}
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-indigo-400 transition duration-300 text-xl">
                &#x1F4F1;
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-indigo-400 transition duration-300 text-xl">
                &#x1F426;
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-indigo-400 transition duration-300 text-xl">
                &#x1F4F8;
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-slate-700 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300 text-sm">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300 text-sm">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300 text-sm">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300 text-sm">Contact Sales</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-slate-700 pb-2">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300 text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300 text-sm">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300 text-sm">Support Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300 text-sm">API Status</a></li>
            </ul>
          </div>

          {/* Column 4: Legal & Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-slate-700 pb-2">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300 text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300 text-sm">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300 text-sm">Careers (We're Hiring!)</a></li>
            </ul>
          </div>

        </div>

        {/* Divider and Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p className="order-2 md:order-1 mt-4 md:mt-0">
              &copy; 2024 ModernSite Inc. All rights reserved.
            </p>
            <p className="order-1 md:order-2">
              Built with <span className="text-red-500 mx-1">&hearts;</span> and powered by React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;