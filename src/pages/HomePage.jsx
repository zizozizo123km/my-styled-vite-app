// --- Icon Placeholders (Simulating lucide-react or similar) ---
const Zap = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);
const Shield = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);
const Rocket = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 17.5l-3.5 4.5 4.5-3.5 12.5-12.5c.6-.6 1.4-.9 2.2-.9s1.6.3 2.2.9c.6.6.9 1.4.9 2.2s-.3 1.6-.9 2.2l-12.5 12.5z"></path>
    <line x1="12" y1="12" x2="16" y2="16"></line>
    <line x1="16" y1="8" x2="20" y2="12"></line>
  </svg>
);

const features = [
  {
    icon: Zap,
    title: "سرعة فائقة",
    description: "تمتع بأداء لا مثيل له وتجربة مستخدم سلسة بفضل تقنياتنا الحديثة والمحسّنة.",
  },
  {
    icon: Shield,
    title: "أمان متكامل",
    description: "نضمن حماية بياناتك وأمن معلوماتك بأحدث بروتوكولات التشفير والحماية العالمية.",
  },
  {
    icon: Rocket,
    title: "قابلية التوسع",
    description: "بنية تحتية مرنة تسمح لمنتجك بالنمو والتوسع بسهولة مع زيادة متطلبات العمل.",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800" dir="rtl">
      
      {/* Header Placeholder */}
      <header className="py-4 px-6 md:px-12 bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">اسم المشروع</h1>
          <nav className="hidden md:flex space-x-6 space-x-reverse">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-150">الرئيسية</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-150">الميزات</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-150">التسعير</a>
            <a href="#" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-150 shadow-md">ابدأ الآن</a>
          </nav>
        </div>
      </header>

      <main>
        {/* 1. Hero Section */}
        <section className="pt-20 pb-24 md:pt-32 md:pb-40 text-center bg-white overflow-hidden relative">
          {/* Background Gradient Effect */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4"></div>
            <div className="w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <span className="inline-block bg-indigo-100 text-indigo-600 text-sm font-medium px-4 py-1 rounded-full mb-4 shadow-sm">
              الجيل القادم من الحلول الرقمية
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-gray-900">
              أطلق العنان لإمكانيات عملك <span className="text-indigo-600">الرقمية</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              منصة متكاملة مصممة لتبسيط عملياتك، زيادة إنتاجيتك، وتحقيق أهدافك بذكاء وفعالية.
            </p>
            <div className="flex justify-center space-x-4 rtl:space-x-reverse">
              <a 
                href="#" 
                className="px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
              >
                ابدأ تجربتك المجانية
              </a>
              <a 
                href="#" 
                className="px-8 py-3 text-lg font-semibold text-indigo-600 bg-white border border-indigo-600 rounded-xl shadow-md hover:bg-indigo-50 transition duration-300"
              >
                شاهد العرض التوضيحي
              </a>
            </div>
          </div>
        </section>

        {/* 2. Features Section */}
        <section className="py-20 md:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">لماذا نحن؟</h3>
              <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
                ميزات تجعلنا الخيار الأفضل
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-100 text-right"
                >
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-indigo-50 text-indigo-600 mb-6">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Testimonial Section */}
        <section className="py-20 md:py-24 bg-indigo-700">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-indigo-200 uppercase tracking-wider mb-4">
              ماذا يقول عملاؤنا
            </p>
            <blockquote className="text-3xl md:text-4xl font-medium italic text-white leading-relaxed">
              "لقد غيرت هذه المنصة طريقة عملنا بالكامل. الكفاءة ارتفعت بنسبة 40%، والدعم الفني لا يُعلى عليه. إنه استثمار حقيقي في المستقبل."
            </blockquote>
            <div className="mt-8">
              <p className="text-lg font-bold text-indigo-100">أحمد الشريف</p>
              <p className="text-sm text-indigo-200">الرئيس التنفيذي، شركة التقنية المتقدمة</p>
            </div>
          </div>
        </section>

        {/* 4. Final CTA Footer */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h3 className="text-4xl font-extrabold text-gray-900 mb-4">
              هل أنت مستعد للانطلاق؟
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              انضم إلى الآلاف من الشركات التي تعتمد على حلولنا لتبسيط أعمالها وتحقيق النجاح.
            </p>
            <a 
              href="#" 
              className="inline-block px-10 py-4 text-xl font-bold text-white bg-pink-500 rounded-xl shadow-2xl hover:bg-pink-600 transition duration-300 transform hover:scale-105 ring-4 ring-pink-200"
            >
              ابدأ مجاناً اليوم!
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-sm">
          <p>&copy; 2024 اسم المشروع. جميع الحقوق محفوظة.</p>
          <div className="mt-4 space-x-4 rtl:space-x-reverse">
            <a href="#" className="text-gray-400 hover:text-indigo-400">سياسة الخصوصية</a>
            <a href="#" className="text-gray-400 hover:text-indigo-400">شروط الخدمة</a>
            <a href="#" className="text-gray-400 hover:text-indigo-400">اتصل بنا</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;