import React from 'react';
import { Menu, X, Zap, Code, Layout, Users, Mail } from 'lucide-react';

// --- Components ---

const NavItem = ({ children, href }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-indigo-600 transition duration-300 px-3 py-2 rounded-md font-medium"
  >
    {children}
  </a>
);

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-indigo-700 flex items-center">
              <Zap className="w-6 h-6 ml-2 text-indigo-500 transform rotate-180" />
              ModernUI
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 space-x-reverse">
            <NavItem href="#features">المميزات</NavItem>
            <NavItem href="#services">الخدمات</NavItem>
            <NavItem href="#portfolio">الأعمال</NavItem>
            <NavItem href="#contact">تواصل معنا</NavItem>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition duration-150"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-xl pb-4 transition duration-300 ease-in-out">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <a href="#features" className="block w-full text-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 px-3 py-2 rounded-md text-base font-medium">المميزات</a>
            <a href="#services" className="block w-full text-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 px-3 py-2 rounded-md text-base font-medium">الخدمات</a>
            <a href="#portfolio" className="block w-full text-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 px-3 py-2 rounded-md text-base font-medium">الأعمال</a>
            <a href="#contact" className="block w-full text-center text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 px-3 py-2 rounded-md text-base font-medium">تواصل معنا</a>
          </div>
        </div>
      )}
    </header>
  );
};

const HeroSection = () => (
  <section className="relative bg-gray-50 pt-16 pb-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
        {/* Text Content (RTL friendly structure) */}
        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-right">
          <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
            <span className="block">تصميم واجهات عصرية</span>
            <span className="block text-indigo-600">تجربة مستخدم لا تُنسى.</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            نحن نجمع بين الإبداع والتقنية لإنشاء حلول ويب متكاملة، سريعة الاستجابة، ومحسّنة للأداء.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-end sm:space-x-4 sm:space-x-reverse">
            <div className="rounded-md shadow">
              <a
                href="#contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition duration-300"
              >
                ابدأ مشروعك الآن
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0">
              <a
                href="#portfolio"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition duration-300"
              >
                شاهد أعمالنا
              </a>
            </div>
          </div>
        </div>

        {/* Image/Illustration */}
        <div className="mt-12 lg:mt-0 lg:col-span-6">
          <div className="relative pb-[56.25%] lg:pb-0 lg:h-[400px] rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition duration-500 ease-in-out">
            {/* Placeholder for a modern illustration or device mockup */}
            <div className="absolute inset-0 bg-indigo-100 flex items-center justify-center">
                <Code className="w-24 h-24 text-indigo-400 opacity-70 animate-pulse" />
                <span className="sr-only">Modern Web Development Illustration</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="pt-6">
        <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <div className="-mt-6">
                <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{title}</h3>
                <p className="mt-5 text-base text-gray-500">
                    {description}
                </p>
            </div>
        </div>
    </div>
);

const FeaturesSection = () => {
    const features = [
        {
            name: 'كود نظيف ومقروء',
            description: 'نلتزم بأفضل ممارسات البرمجة لضمان سهولة الصيانة والتوسع في المستقبل.',
            icon: Code,
        },
        {
            name: 'تصميم متجاوب بالكامل',
            description: 'واجهات تعمل بكفاءة عالية على جميع الأجهزة، من الهواتف الذكية إلى شاشات سطح المكتب.',
            icon: Layout,
        },
        {
            name: 'أداء وسرعة فائقة',
            description: 'تحسين الأداء لضمان تحميل سريع وتجربة مستخدم سلسة، مما يعزز SEO.',
            icon: Zap,
        },
        {
            name: 'تركيز على المستخدم',
            description: 'تصميم يركز على احتياجات المستخدم النهائي لضمان أعلى معدلات التحويل والرضا.',
            icon: Users,
        },
    ];

    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">لماذا نحن؟</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        حلول تقنية متقدمة لمستقبل رقمي
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        نقدم مجموعة متكاملة من الخدمات التي تضمن نجاح مشروعك الرقمي من الفكرة حتى الإطلاق.
                    </p>
                </div>

                <div className="mt-20">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature) => (
                            <FeatureCard key={feature.name} {...feature} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="bg-gray-800 mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
            <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                <div className="px-5 py-2">
                    <a href="#features" className="text-base text-gray-300 hover:text-indigo-400 transition duration-300">
                        المميزات
                    </a>
                </div>
                <div className="px-5 py-2">
                    <a href="#services" className="text-base text-gray-300 hover:text-indigo-400 transition duration-300">
                        الخدمات
                    </a>
                </div>
                <div className="px-5 py-2">
                    <a href="#portfolio" className="text-base text-gray-300 hover:text-indigo-400 transition duration-300">
                        الأعمال
                    </a>
                </div>
                <div className="px-5 py-2">
                    <a href="#contact" className="text-base text-gray-300 hover:text-indigo-400 transition duration-300">
                        تواصل
                    </a>
                </div>
            </nav>
            <p className="mt-8 text-center text-base text-gray-400">
                &copy; {new Date().getFullYear()} ModernUI. جميع الحقوق محفوظة.
            </p>
        </div>
    </footer>
);


// --- Main App Component ---

const App = () => {
  return (
    // Setting dir="rtl" for proper Arabic layout flow
    <div className="min-h-screen bg-white font-sans text-right" dir="rtl">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        
        {/* Call to Action / Contact Section */}
        <section id="contact" className="py-20 bg-indigo-50">
            <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    هل أنت مستعد للارتقاء بمشروعك؟
                </h2>
                <p className="mt-4 text-xl text-gray-600">
                    تواصل معنا اليوم للحصول على استشارة مجانية وبدء رحلة النجاح الرقمي.
                </p>
                <a
                    href="mailto:info@modernui.com"
                    className="mt-8 inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
                >
                    <Mail className="w-5 h-5 ml-2" />
                    اطلب عرض سعر
                </a>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;