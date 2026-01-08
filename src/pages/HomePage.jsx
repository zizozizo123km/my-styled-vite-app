const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            الواجهة العصرية
          </div>
          <nav className="hidden md:flex space-x-6 space-x-reverse">
            <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-150 font-medium">المميزات</a>
            <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-150 font-medium">الأسعار</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-150 font-medium">اتصل بنا</a>
          </nav>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
            ابدأ الآن
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-32 text-center bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 text-gray-900 dark:text-white">
              تصميم واجهات مستخدم <span className="text-indigo-600 dark:text-indigo-400">عصرية ومبتكرة</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              نقدم حلولاً متكاملة لتطوير واجهات أمامية سريعة الاستجابة، جذابة بصرياً، ومحسّنة لتجربة المستخدم.
            </p>
            <div className="flex justify-center space-x-4 space-x-reverse">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl shadow-xl transition duration-300 transform hover:-translate-y-1 text-lg">
                اكتشف خدماتنا
              </button>
              <button className="bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-700 font-bold py-3 px-8 rounded-xl transition duration-300 text-lg">
                شاهد الأمثلة
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-white">
              لماذا تختارنا؟
            </h2>
            <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-16">
              نحن نجمع بين الجمالية والوظيفة لتقديم أفضل تجربة.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Feature 1 */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-[1.02] border-t-4 border-indigo-500">
                <div className="text-4xl text-indigo-600 dark:text-indigo-400 mb-4">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">استجابة كاملة</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  تصاميمنا تعمل بسلاسة على جميع الأجهزة، من الهواتف الذكية إلى شاشات سطح المكتب الكبيرة.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-[1.02] border-t-4 border-indigo-500">
                <div className="text-4xl text-indigo-600 dark:text-indigo-400 mb-4">
                  <i className="fas fa-palette"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">جمالية التصميم</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  نستخدم أحدث مبادئ UI/UX لإنشاء واجهات جذابة بصرياً ومريحة للعين.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-[1.02] border-t-4 border-indigo-500">
                <div className="text-4xl text-indigo-600 dark:text-indigo-400 mb-4">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">أداء فائق</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  نركز على الكود النظيف والمحسّن لضمان سرعة تحميل فائقة وتجربة مستخدم سلسة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-indigo-600 dark:bg-indigo-700">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              هل أنت مستعد لنقل مشروعك للمستوى التالي؟
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              دعنا نبني واجهة المستخدم التي تحلم بها باستخدام أحدث التقنيات.
            </p>
            <button className="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-3 px-10 rounded-full shadow-2xl transition duration-300 transform hover:scale-105 text-lg">
              تحدث مع خبير
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-bold text-indigo-400 mb-4">الواجهة العصرية</div>
          <p className="text-gray-400 mb-6">
            © {new Date().getFullYear()} جميع الحقوق محفوظة.
          </p>
          <div className="flex justify-center space-x-6 space-x-reverse">
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-150">الخصوصية</a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-150">الشروط</a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-150">المدونة</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;