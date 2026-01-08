import React from 'react';
import { Users, Target, Eye } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            من نحن؟
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن فريق شغوف ملتزم بتقديم حلول تقنية مبتكرة تلبي احتياجات عملائنا وتتجاوز توقعاتهم.
          </p>
        </header>

        {/* Core Values / Mission & Vision Section */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          
          {/* Mission Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-indigo-600">
            <Target className="w-10 h-10 text-indigo-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">مهمتنا</h2>
            <p className="text-gray-600 leading-relaxed">
              توفير منصات رقمية عالية الجودة وسهلة الاستخدام، تمكن الشركات والأفراد من تحقيق أهدافهم بكفاءة وفعالية.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-indigo-600">
            <Eye className="w-10 h-10 text-indigo-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">رؤيتنا</h2>
            <p className="text-gray-600 leading-relaxed">
              أن نكون الشركة الرائدة في المنطقة في مجال تطوير الويب وتصميم تجربة المستخدم، مع التركيز على الابتكار المستمر.
            </p>
          </div>

          {/* Team Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-indigo-600">
            <Users className="w-10 h-10 text-indigo-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">فريقنا</h2>
            <p className="text-gray-600 leading-relaxed">
              يتكون فريقنا من خبراء ومصممين ومطورين ذوي خبرة واسعة، يعملون بتناغم لضمان أعلى مستويات الجودة والاحترافية.
            </p>
          </div>
        </div>

        {/* Detailed Story Section */}
        <section className="bg-white p-10 md:p-16 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-3 border-gray-200">
            قصتنا
          </h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              بدأت رحلتنا في عام 2018 برؤية بسيطة: سد الفجوة بين التصميم الجمالي والوظائف التقنية القوية. كنا نؤمن بأن التكنولوجيا يجب أن تكون سهلة الوصول وممتعة للاستخدام.
            </p>
            <p>
              على مر السنين، قمنا بتوسيع نطاق خدماتنا، لكن التزامنا بالجودة والشفافية ظل ثابتاً. نحن نفخر ببناء علاقات طويلة الأمد مع عملائنا، معتبرين نجاحهم جزءاً لا يتجزأ من نجاحنا.
            </p>
            <p className="font-semibold text-indigo-600">
              نحن لا نبني مواقع إلكترونية فحسب، بل نبني مستقبلاً رقمياً لعملائنا.
            </p>
          </div>
        </section>

        {/* Call to Action / Footer Note */}
        <div className="text-center mt-16">
          <p className="text-2xl font-semibold text-gray-800 mb-4">
            هل أنت مستعد للعمل معنا؟
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            تواصل معنا الآن
          </button>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;