import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 sm:py-32 lg:py-40">
      
      {/* Background Decoration: Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-white opacity-50"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          
          {/* Content Area (Text and CTAs) */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center text-right lg:text-right">
            
            {/* Tagline/Pre-header */}
            <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200 mb-4 w-fit rtl:ml-auto">
              <Zap className="w-4 h-4 rtl:mr-1 rtl:ml-0 ltr:mr-1" />
              الإطلاق الأقوى لهذا العام
            </span>

            {/* Main Heading */}
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              حلول رقمية مبتكرة 
              <span className="block text-indigo-600 mt-2">
                لتحقيق نمو غير مسبوق.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-xl text-gray-600 max-w-xl rtl:mr-0 rtl:ml-auto">
              نحن نصمم ونطور منصات ويب وتطبيقات جوال عالية الأداء، مدعومة بأحدث التقنيات لضمان تفوقك في السوق الرقمي.
            </p>

            {/* Call to Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-start rtl:justify-end">
              
              {/* Primary CTA */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
              >
                ابدأ مشروعك الآن
                <ArrowRight className="w-5 h-5 rtl:mr-2 rtl:ml-0 ltr:ml-2" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-700 shadow-md transition duration-300 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
              >
                اكتشف الميزات
              </a>
            </div>
          </div>

          {/* Image/Visual Area (Right Side in LTR, Left Side in RTL context) */}
          <div className="mt-16 lg:mt-0 lg:col-span-6 xl:col-span-5">
            {/* Placeholder for a modern illustration or device mockup */}
            <div className="relative aspect-[4/3] w-full rounded-3xl bg-indigo-200/50 shadow-2xl shadow-indigo-500/20 overflow-hidden transform transition duration-500 hover:scale-[1.02]">
              
              {/* Placeholder Content */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full h-full bg-white rounded-2xl border-4 border-indigo-600/50 p-4 flex flex-col justify-center items-center text-center">
                    <svg className="w-16 h-16 text-indigo-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1v-3.25m-7.5 0h15a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v7.75a2 2 0 002 2z" />
                    </svg>
                    <p className="text-lg font-medium text-gray-700">تصميم واجهة مستخدم عصرية</p>
                    <p className="text-sm text-gray-500 mt-1">صورة توضيحية للمنتج</p>
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