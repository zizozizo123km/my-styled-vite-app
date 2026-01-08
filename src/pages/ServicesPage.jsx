import React from 'react';

// Mock data for services
const services = [
  {
    title: "تطوير الواجهات الأمامية (Frontend)",
    description: "بناء واجهات مستخدم تفاعلية وعصرية باستخدام React، Vue، وNext.js، مع ضمان أفضل تجربة للمستخدم (UX) وسرعة الأداء.",
    iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", // Code icon
    color: "text-blue-500 bg-blue-100",
  },
  {
    title: "تطوير الواجهات الخلفية (Backend)",
    description: "تصميم وبناء أنظمة قوية وموثوقة باستخدام Node.js، Python (Django/Flask)، وإدارة قواعد البيانات بكفاءة وأمان عاليين.",
    iconPath: "M9.75 17L9 20l-1 1h8l-1-1-1.75-3M3 13h18M3 17h18M6 10l2-2m8 0l2 2", // Server icon
    color: "text-green-500 bg-green-100",
  },
  {
    title: "تصميم تجربة المستخدم (UI/UX Design)",
    description: "إنشاء تصاميم جذابة وسهلة الاستخدام، بدءاً من البحث الأولي ووصولاً إلى النماذج الأولية عالية الدقة (High-Fidelity Prototypes).",
    iconPath: "M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v-6m-3 0h6", // Design/Pen icon
    color: "text-purple-500 bg-purple-100",
  },
  {
    title: "التطبيقات السحابية والبنية التحتية (DevOps)",
    description: "نشر وإدارة التطبيقات على منصات سحابية مثل AWS وAzure، وتحسين عمليات التكامل والنشر المستمر (CI/CD) لضمان الاستمرارية.",
    iconPath: "M3 13h18M3 17h18M6 10l2-2m8 0l2 2", // Cloud icon
    color: "text-yellow-600 bg-yellow-100",
  },
  {
    title: "التجارة الإلكترونية وحلول الدفع",
    description: "بناء متاجر إلكترونية متكاملة وآمنة (Shopify, WooCommerce) ودمج بوابات الدفع المحلية والعالمية لزيادة المبيعات.",
    iconPath: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.809l-2.286 9.084a4.5 4.5 0 01-4.344 3.377H9.375a4.5 4.5 0 01-4.344-3.377L2.79 8.791m11.356-1.809L12 10.5m-1.5 0h3", // Shopping Cart icon
    color: "text-red-500 bg-red-100",
  },
  {
    title: "استشارات تقنية وتحليل الأعمال",
    description: "تقديم استشارات متخصصة لمساعدتك في اختيار أفضل التقنيات، وتحليل متطلبات العمل، ووضع خارطة طريق واضحة للمشروع.",
    iconPath: "M12 6.75a.75.75 011.5 0v7.5a.75.75 01-1.5 0v-7.5zM12 18a.75.75 01.75.75v.75a.75.75 01-1.5 0v-.75A.75.75 0112 18z", // Info/Consulting icon
    color: "text-indigo-500 bg-indigo-100",
  },
];

const ServiceCard = ({ service }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-100">
    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${service.color}`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d={service.iconPath} />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
    <p className="text-gray-600 leading-relaxed">{service.description}</p>
    <a href="#" className="mt-4 inline-block text-indigo-600 font-semibold hover:text-indigo-800 transition duration-150">
      اكتشف المزيد &larr;
    </a>
  </div>
);

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-indigo-700 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">خدماتنا الرقمية المتكاملة</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto opacity-90">
            نقدم حلولاً تقنية مبتكرة ومصممة خصيصاً لتلبية احتياجات عملك، من الفكرة إلى الإطلاق وما بعده.
          </p>
        </div>
      </header>

      {/* Services Grid Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-indigo-600 font-semibold uppercase tracking-wider">ماذا نقدم؟</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">حلول تقنية ترتقي بأعمالك</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">هل أنت مستعد للبدء بمشروعك؟</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم لمناقشة متطلباتك والحصول على استشارة مجانية حول كيفية تحويل رؤيتك إلى واقع رقمي ناجح.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
          >
            اطلب استشارة مجانية
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;