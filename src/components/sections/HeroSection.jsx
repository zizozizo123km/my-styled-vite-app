const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 sm:py-32 lg:py-40">
      <div className="absolute inset-0 z-0 opacity-10">
        {/* Background Pattern/Gradient */}
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="pattern-circles"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="5" cy="5" r="1" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Text Content */}
          <div className="lg:col-span-6 xl:col-span-7 text-center lg:text-right">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              <span className="block xl:inline">حلول رقمية مبتكرة</span>
              <span className="block text-indigo-600 xl:inline mt-2">
                لنمو أعمالك
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 sm:mt-8 sm:text-xl max-w-3xl mx-auto lg:mx-0">
              نحن نقدم خدمات تطوير الويب، تصميم واجهات المستخدم، واستراتيجيات التسويق الرقمي التي تضمن لك التفوق في السوق.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
              >
                اكتشف خدماتنا
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-indigo-600 text-base font-medium rounded-full text-indigo-600 bg-white hover:bg-indigo-50 transition duration-300 transform hover:scale-105"
              >
                تحدث معنا الآن
              </a>
            </div>

            {/* Trust Metrics/Badges (Optional) */}
            <div className="mt-12 flex justify-center lg:justify-start space-x-6 rtl:space-x-reverse">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">5+</p>
                <p className="text-sm text-gray-500">سنوات خبرة</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">150+</p>
                <p className="text-sm text-gray-500">مشروع ناجح</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">98%</p>
                <p className="text-sm text-gray-500">رضا العملاء</p>
              </div>
            </div>
          </div>

          {/* Image/Visual Element */}
          <div className="mt-16 lg:mt-0 lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Decorative Blob/Shape */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

              {/* Main Image Placeholder (Replace with actual image) */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-6 border-4 border-white transform hover:shadow-indigo-300/50 transition duration-500">
                <img
                  className="w-full h-auto object-cover rounded-2xl"
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Digital Solutions Dashboard"
                />
                {/* Small overlay badge */}
                <div className="absolute top-8 left-8 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  تصميم عصري
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;