import React from 'react';

// Sample data for the features
const featuresData = [
  {
    id: 1,
    icon: '💡',
    title: 'تصميم مبتكر',
    description: 'نقدم حلولاً تصميمية عصرية وجذابة تضمن تميز علامتك التجارية في السوق الرقمي.',
  },
  {
    id: 2,
    icon: '⚡',
    title: 'سرعة فائقة',
    description: 'بنية تحتية محسّنة لضمان أسرع أوقات تحميل وأفضل أداء على جميع الأجهزة.',
  },
  {
    id: 3,
    icon: '🔒',
    title: 'أمان متكامل',
    description: 'نستخدم أحدث بروتوكولات الأمان لحماية بياناتك وبيانات عملائك بشكل فعال ومستمر.',
  },
  {
    id: 4,
    icon: '📱',
    title: 'استجابة كاملة',
    description: 'تصميمات متوافقة تماماً مع جميع الشاشات والأجهزة (موبايل، تابلت، حاسوب مكتبي).',
  },
  {
    id: 5,
    icon: '📈',
    title: 'تحسين محركات البحث',
    description: 'بناء المواقع وفقاً لأفضل ممارسات SEO لضمان ظهورك في نتائج البحث الأولى.',
  },
  {
    id: 6,
    icon: '🛠️',
    title: 'دعم فني مستمر',
    description: 'فريق دعم جاهز لمساعدتك وحل أي مشكلة قد تواجهها على مدار الساعة.',
  },
];

const FeatureCard = ({ feature }) => (
  <div className="p-6 bg-gray-800 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl border border-gray-700 hover:border-indigo-500/50">
    <div className="flex items-start mb-4">
      {/* Icon Container */}
      <div className="text-4xl p-3 bg-indigo-600/20 rounded-full flex items-center justify-center flex-shrink-0">
        {feature.icon}
      </div>
      {/* Title */}
      <h3 className="mr-4 text-xl font-bold text-white pt-2">{feature.title}</h3>
    </div>
    {/* Description */}
    <p className="text-gray-400 leading-relaxed mt-2">
      {feature.description}
    </p>
  </div>
);

const FeatureGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-900" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-indigo-400 font-semibold uppercase tracking-wider">
            لماذا نحن؟
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            الميزات التي تجعلنا خيارك الأفضل
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            نحن نجمع بين الإبداع التقني والتصميم الجذاب لتقديم حلول رقمية متكاملة تلبي طموحاتك.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default FeatureGrid;