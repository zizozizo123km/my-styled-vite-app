import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "لقد تجاوز هذا المنتج توقعاتنا. الواجهة نظيفة وسهلة الاستخدام، وخدمة العملاء كانت استثنائية. أوصي به بشدة لأي شخص يبحث عن حلول متقدمة.",
    name: "أحمد السالم",
    title: "المدير التنفيذي لشركة التقنية الحديثة",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    quote: "التصميم مذهل والأداء لا تشوبه شائبة. لقد ساعدنا هذا النظام على تبسيط عملياتنا وزيادة كفاءتنا بشكل كبير. تجربة رائعة بكل المقاييس.",
    name: "فاطمة الزهراء",
    title: "رئيسة قسم التصميم",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    quote: "منصة قوية وموثوقة. الدعم الفني سريع الاستجابة والحلول المقدمة مبتكرة. نحن سعداء جداً بالنتائج التي حققناها منذ البدء في استخدامها.",
    name: "خالد منصور",
    title: "محلل بيانات أول",
    image: "https://i.pravatar.cc/150?img=3",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Optional: Auto-play feature
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 7000); // Change every 7 seconds
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-sky-600 dark:text-sky-400">
          ماذا يقول عملاؤنا؟
        </h2>
        <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-400">
          قصص نجاح حقيقية من شركائنا حول العالم.
        </p>

        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl transition-all duration-700 ease-in-out transform hover:shadow-sky-500/30 border border-gray-200 dark:border-gray-700">
            
            {/* Quote Icon */}
            <div className="text-sky-500 dark:text-sky-400 mb-6">
              <Quote size={48} className="opacity-70" />
            </div>

            {/* Quote Text */}
            <p 
              key={currentTestimonial.id} // Key change forces re-render for transition effect
              className="text-xl md:text-2xl italic font-medium text-gray-700 dark:text-gray-200 mb-8 transition-opacity duration-1000 opacity-100"
              style={{ direction: 'rtl', textAlign: 'right' }}
            >
              "{currentTestimonial.quote}"
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-end pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="text-right mr-4">
                <p className="text-lg font-semibold text-sky-600 dark:text-sky-400">
                  {currentTestimonial.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {currentTestimonial.title}
                </p>
              </div>
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-16 h-16 rounded-full object-cover ring-4 ring-sky-200 dark:ring-sky-700"
              />
            </div>
          </div>

          {/* Navigation Arrows (Hidden on small screens, visible on medium+) */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:bg-sky-500 hover:text-white transition duration-300 hidden md:block z-10 -mr-6 dark:text-gray-200 dark:hover:text-white"
            aria-label="Previous testimonial"
          >
            <ChevronRight size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:bg-sky-500 hover:text-white transition duration-300 hidden md:block z-10 -ml-6 dark:text-gray-200 dark:hover:text-white"
            aria-label="Next testimonial"
          >
            <ChevronLeft size={24} />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2 rtl:space-x-reverse">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-sky-600 w-8 dark:bg-sky-400'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-sky-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;