import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'الرئيسية', href: '#' },
    { name: 'خدماتنا', href: '#' },
    { name: 'من نحن', href: '#' },
    { name: 'المدونة', href: '#' },
    { name: 'اتصل بنا', href: '#' },
  ];

  const contactInfo = [
    { label: 'البريد الإلكتروني', value: 'info@moderncompany.com' },
    { label: 'الهاتف', value: '+966 50 123 4567' },
    { label: 'العنوان', value: 'الرياض، المملكة العربية السعودية' },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'فيسبوك' },
    { icon: FaTwitter, href: '#', label: 'تويتر' },
    { icon: FaInstagram, href: '#', label: 'إنستغرام' },
    { icon: FaLinkedin, href: '#', label: 'لينكد إن' },
  ];

  return (
    <footer className="bg-gray-900 text-white mt-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-right">
          
          {/* Column 1: Logo and Mission */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-teal-400 mb-4">الشركة العصرية</h3>
            <p className="text-gray-400 leading-relaxed max-w-md">
              نقدم حلولاً تقنية مبتكرة وتصاميم UI/UX عصرية لضمان نجاح مشروعك الرقمي.
            </p>
            <div className="mt-6 flex space-x-4 space-x-reverse">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="text-gray-400 hover:text-teal-400 transition duration-300"
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-teal-400">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-teal-400 transition duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-teal-400">تواصل معنا</h4>
            <ul className="space-y-3 text-sm">
              {contactInfo.map((item, index) => (
                <li key={index} className="text-gray-400">
                  <span className="font-medium block">{item.label}:</span>
                  <span className="text-gray-500">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separator and Copyright Bar */}
        <div className="mt-10 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-500">
            جميع الحقوق محفوظة © {currentYear} الشركة العصرية. تصميم وتطوير بواسطة فريقنا.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;