import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon, Zap, Shield, Rocket, Users } from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'الميزات', href: '#features' },
    { name: 'الخدمات', href: '#services' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10 rtl:space-x-reverse">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="text-2xl font-extrabold text-indigo-600 tracking-tight">
              <span className="text-amber-500">Pro</span>Site
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 rtl:space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-500 hover:text-indigo-600 transition duration-150"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#contact"
              className="mr-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150"
            >
              ابدأ الآن
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="-ml-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <a href="#" className="text-xl font-extrabold text-indigo-600">
                    <span className="text-amber-500">Pro</span>Site
                  </a>
                </div>
                <div className="-ml-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 transition duration-150"
                    >
                      <span className="text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  ابدأ الآن
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const HeroSection = () => (
  <section id="home" className="bg-gray-50 pt-16 pb-24 sm:pt-24 lg:pt-32 lg:pb-40">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">حلول الويب العصرية</span>{' '}
        <span className="block text-indigo-600 xl:inline">لمستقبلك الرقمي</span>
      </h1>
      <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        نحن نصمم ونطور مواقع إلكترونية سريعة، آمنة، ومتجاوبة بالكامل، باستخدام أحدث التقنيات لضمان تجربة مستخدم لا تُنسى.
      </p>
      <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
        <div className="rounded-md shadow">
          <a
            href="#contact"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition duration-150"
          >
            اطلب استشارة مجانية
          </a>
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:mr-3 rtl:sm:ml-3 rtl:sm:mr-0">
          <a
            href="#features"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition duration-150"
          >
            اكتشف الميزات
          </a>
        </div>
      </div>
    </div>
  </section>
);

const features = [
  {
    name: 'أداء فائق السرعة',
    description: 'نستخدم تقنيات حديثة مثل Vite و React لضمان تحميل صفحاتك في أجزاء من الثانية، مما يحسن SEO.',
    icon: Zap,
  },
  {
    name: 'تصميم متجاوب (Responsive)',
    description: 'موقعك سيبدو مثالياً على جميع الأجهزة: الهواتف الذكية، الأجهزة اللوحية، وشاشات سطح المكتب.',
    icon: Shield,
  },
  {
    name: 'تجربة مستخدم متميزة',
    description: 'نركز على بساطة وفعالية واجهة المستخدم (UI/UX) لضمان سهولة التنقل وزيادة معدلات التحويل.',
    icon: Users,
  },
  {
    name: 'قابلية التوسع',
    description: 'بنية الموقع مصممة لتنمو معك، مما يتيح إضافة ميزات جديدة بسهولة دون الحاجة لإعادة بناء كاملة.',
    icon: Rocket,
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-16 sm:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">لماذا نحن؟</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          التركيز على الجودة والابتكار
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          نقدم مجموعة متكاملة من الميزات التي تضمن لمشروعك النجاح والتميز في السوق الرقمي.
        </p>
      </div>

      <div className="mt-16">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mr-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 mr-16 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800">
    <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
        <div className="px-5 py-2">
          <a href="#home" className="text-base text-gray-300 hover:text-white">
            الرئيسية
          </a>
        </div>
        <div className="px-5 py-2">
          <a href="#features" className="text-base text-gray-300 hover:text-white">
            الميزات
          </a>
        </div>
        <div className="px-5 py-2">
          <a href="#" className="text-base text-gray-300 hover:text-white">
            الخصوصية
          </a>
        </div>
        <div className="px-5 py-2">
          <a href="#" className="text-base text-gray-300 hover:text-white">
            الشروط
          </a>
        </div>
      </nav>
      <p className="mt-8 text-center text-base text-gray-400">
        &copy; {new Date().getFullYear()} ProSite. جميع الحقوق محفوظة.
      </p>
    </div>
  </footer>
);


// --- Main App Component ---

const App = () => {
  // Set direction to RTL globally for Arabic content
  useEffect(() => {
    document.documentElement.setAttribute('dir', 'rtl');
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-right">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;